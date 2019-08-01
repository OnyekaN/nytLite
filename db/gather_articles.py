import os, requests, psycopg2, numpy
from bs4 import BeautifulSoup
from unidecode import unidecode


# collect article links from the nytimes website
def collect_nyt_article_hrefs(base, sections):
    article_hrefs = list()
    for section in sections:
        page = base + section
        response = requests.get(page, timeout=5)
        soup = BeautifulSoup(response.content, 'html.parser')
        articles = soup.find_all('article')
        for article in articles:
            anchors = article.find_all('a')
            for a in anchors:
                if 'tips' not in a['href'] \
                    and 'interactive' not in a['href'] \
                    and 'slideshow' not in a['href'] \
                    and '/video/' not in a['href'] \
                    and 'nytimes.com' not in a['href'] \
                    and len(a['href']) > 2:
                        article_hrefs.append(a['href'])
    return article_hrefs

# find the author from the article soup
def find_author(soup, href):
    date = '-'.join(href.split('/')[1:4])
    times = soup.find_all('time', {'datetime' : date})
    parents = [t.parent.parent.parent for t in times]
    author = ''
    for parent in parents:
        p = parent.find('p', {'itemprop' : 'author'})
        if p:
            author += p.text.replace('By ', '')
    return str(author)

# collect article body paragraphs from article soup
def collect_paragraphs(soup):
    body = soup.find_all('section', {'name': 'articleBody'})
    paragraphs = list()
    for b in body:
        paragraphs.extend(b.find_all('p'))
    paragraphs = [str(unidecode(p)) for p in paragraphs]
    paragraphs = ''.join(paragraphs)
    return paragraphs

# collect data from the article soup
def parse_article_soup(soup, href):
    article = dict()
    entry = str(href).split('/')[-1]
    entry = entry.replace('.html', '')
    entry = entry.replace('#commentsContainer', '')
    article = dict()
    article['entry'] = entry
    article['meta'] = dict()
    article['meta']['title'] = unidecode(soup.find('title').text.replace(' - The New York Times', ''))
    article['meta']['author'] = find_author(soup, href)
    try:
        article['meta']['section'] = href.split('/')[4]
    except:
        pass
    article['meta']['href'] = "nytimes.com" + href
    article['meta']['date'] = "-".join(href.split('/')[1:4])
    article['meta']['path'] = str(href.split('/')[-1]).replace('#commentsContainer', '')
    article['article_body'] = collect_paragraphs(soup)
    return article

# bundle data into dictionary
def build_nyt_articles_dict(hrefs):
    current_nyt_articles = dict()
    base = 'https://nytimes.com/'
    for href in hrefs:
        response = requests.get(base + href)
        soup = BeautifulSoup(
            response.content.decode('utf-8', 'ignore'),
            'html.parser');
        article = parse_article_soup(soup, href)
        current_nyt_articles[article['entry']] = article

    return current_nyt_articles

# write out article body paragraphs to html files
def write_nyt_articles_files(articles_dict):
    nyt_articles_meta = dict()
    for key in articles_dict:
        article_file_path = key + '.html'
        nyt_articles_meta[key] = articles_dict[key]['meta']
        nyt_articles_meta[key]['file_path'] = article_file_path

        with open('../app/assets/articles/{}'.format(article_file_path), 'w+') as outfile:
            outfile.write(str(articles_dict[key]['article_body']))

    return nyt_articles_meta

def create_insert_commands(nyt_articles_meta):
    keys = nyt_articles_meta.keys()
    for key in keys:
        article = nyt_articles_meta[key]
        insert_SQL = (
            "INSERT INTO articles "
            "(title, author, "
            "date, section, href, path) "
            "VALUES (%s, %s, %s, %s, %s, %s);")
        values = [article['title'], article['author'], article['date'], 
                      article['section'], article['href'], article['path']]
        yield (insert_SQL, values)

def execute_insert_commands(insert_commands):
    conn = psycopg2.connect(dbname='nytlitedb', user='gqe', host='localhost', password='')
    cursor = conn.cursor()

    for insert_command in insert_commands:
        try:
            cursor.execute(insert_command[0], insert_command[1])
        except Exception as e:
            print(e)

    cursor.close()
    conn.commit()
    return

def prune_duplicate_entries():
    conn = psycopg2.connect(dbname='nytlitedb', user='gqe', host='localhost', password='')
    cursor = conn.cursor()

    delete_command = ( "DELETE FROM articles a USING articles b "
    "WHERE a.id > b.id AND a.title = b.title AND a.author = b.author;")

    cursor.execute(delete_command)
    cursor.close()
    conn.commit()
    return

nyt_section_base_href = 'https://nytimes.com/section/'

nyt_sections_pages = ['world', 'us', 'politics', 'business', 'technology',
        'science', 'health', 'sports', 'opinion']

# collect hrefs for current articles
nyt_article_hrefs = collect_nyt_article_hrefs(nyt_section_base_href, nyt_sections_pages)

# keep unique
nyt_article_hrefs = numpy.unique(nyt_article_hrefs)

# scrape articles, build dictionary with data
scraped_nyt_articles = build_nyt_articles_dict(nyt_article_hrefs)

# write articles to file, compile article metadata
scraped_articles_meta = write_nyt_articles_files(scraped_nyt_articles)

# create insert commands for PostgreSQL table
insert_commands = list(create_insert_commands(scraped_articles_meta))

# execute insert commands and prune duplicate entries
execute_insert_commands(insert_commands)
prune_duplicate_entries()

