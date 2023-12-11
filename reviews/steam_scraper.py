import requests
from bs4 import Tag, NavigableString
from typing import Union
from bs4 import BeautifulSoup


# TODO: Add better way to ensure soup find return tag type for linter

def checkIfTag(elem: Union[Tag, NavigableString, None]) -> Tag:
    if elem is None or isinstance(elem, NavigableString):
        raise ValueError(f'Find returned {type(elem)} and not Tag')

    return elem


def get_app_id(game_name):

    cookies = {'birthtime': '283993201', 'mature_content': '1'}
    response = requests.get(url=f'https://store.steampowered.com/search/?term={game_name}&category1=998',
                            cookies=cookies,
                            headers={'User-Agent': 'Mozilla/5.0'})
    soup = BeautifulSoup(response.text, 'html.parser')

    try:
        app_id = checkIfTag(soup.find(class_='search_result_row'))['data-ds-appid']
        title = checkIfTag(soup.find(class_='title')).contents[0]
    except Exception as e:
        raise e

    return app_id, title


def get_app_title(app_id):

    cookies = {'birthtime': '283993201', 'mature_content': '1'}
    response = requests.get(url=f'https://store.steampowered.com/app/{app_id}',
                            cookies=cookies,
                            headers={'User-Agent': 'Mozilla/5.0'})
    soup = BeautifulSoup(response.text, 'html.parser')
    try:
        title = checkIfTag(soup.find(class_='apphub_AppName')).contents[0]
    except Exception as e:
        raise e

    return title


def get_reviews(appid, params={'json': 1}):
    url = 'https://store.steampowered.com/appreviews/'
    response = requests.get(url=url+appid,
                            params=params,
                            headers={'User-Agent': 'Mozilla/5.0'})

    return response.json()


# TODO Add the information from response.query_summary for more information
def get_n_reviews(appid, n=100):
    title = get_app_title(appid)
    reviews = []
    cursor = '*'
    params = {
        'json': 1,
        'filter': 'all',
        'language': 'english',
        'day_range': 9223372036854775807,
        'review_type': 'all',
        'purchase_type': 'all'
    }

    while n > 0:
        params['cursor'] = cursor.encode()
        params['num_per_page'] = min(100, n)
        n -= 100

        response = get_reviews(appid, params)
        cursor = response['cursor']
        reviews += response['reviews']

        if len(response['reviews']) < 100:
            break

    return reviews, title


def get_n_appids(n=100, filter_by='topsellers'):
    appids = []
    url = f'https://store.steampowered.com/search/?category1=998&filter={filter_by}&page='
    page = 0

    while page*25 < n:
        page += 1
        response = requests.get(url=url+str(page),
                                headers={'User-Agent': 'Mozilla/5.0'})
        soup = BeautifulSoup(response.text, 'html.parser')
        for row in soup.find_all(class_='search_result_row'):
            appids.append(row['data-ds-appid'])

    return appids[:n]


# TODO: There should be a better way to extract the necessary data
# Object that filtered from resp only the necessary information from the resp
def resp_filtered(resp, title):
    document_filtered = {
        "steam_id": [],
        "review": [],
        "voted_up": [],
        "votes_up": [],
        "votes_funny": [],
        "playtime_forever": [],
    }

    for review in resp:
        document_filtered['steam_id'].append(review['author']['steamid'])
        document_filtered["review"].append(review['review'])
        document_filtered["voted_up"].append(review['voted_up'])
        document_filtered["votes_up"].append(review['votes_up'])
        document_filtered["votes_funny"].append(review['votes_funny'])
        document_filtered['playtime_forever'].append(review['author']['playtime_forever'])

    document_filtered.update({"title": title})
    return document_filtered


print(get_app_id("Dishonored"))
