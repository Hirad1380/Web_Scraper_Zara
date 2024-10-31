import csv
from selenium import webdriver
from bs4 import BeautifulSoup


driver = webdriver.Chrome()


url = "https://www.zara.com/ww/en/man-new-in-collection-l6164.html?v1=2351219"
driver.get(url)


soup = BeautifulSoup(driver.page_source, 'html.parser')


titles = soup.find_all('a', class_='product-link _item product-grid-product-info__name link')
prices = soup.find_all('span', class_='money-amount__main')
images = soup.find_all('img', class_='media-image__image media__wrapper--media')


results = []


for i in range(len(titles)):
    result = {
        'ID': i+1,
        'TITLE': titles[i].text.strip(),
        'PRICE': prices[i].text.strip(),
        'IMAGE': images[i]['src']
    }
    results.append(result)


with open('zara_products_2.csv', mode='w', newline='', encoding='utf-8') as csvfile:
    fieldnames = ['ID', 'TITLE', 'PRICE', 'IMAGE']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    writer.writeheader()
    for result in results:
        writer.writerow(result)

driver.quit()