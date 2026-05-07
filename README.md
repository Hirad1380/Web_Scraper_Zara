# 🛍️ Zara Web Scraper with Browser-Based CSV Viewer

A two-part project that **scrapes product data from Zara** using Selenium & BeautifulSoup, then displays the results in a clean **browser-based CSV viewer** with real-time search and highlight functionality — no backend needed.

---

## ✨ Features

### 🤖 Scraper (Python)
- Scrapes Zara's **New In Men's Collection** automatically
- Extracts **Product Title**, **Price**, and **Image URL** for each item
- Exports all data to a structured **CSV file**
- Uses Selenium for JavaScript-rendered page loading + BeautifulSoup for parsing

### 🌐 CSV Viewer (Browser UI)
- Upload any CSV file directly in the browser
- Displays data in a clean, formatted **HTML table**
- **Real-time search** — filters rows as you type
- **Keyword highlighting** — matched text is highlighted in results
- Zero dependencies — pure HTML, CSS, Vanilla JavaScript

---

## 🔁 How It Works

```
Run main.py
    ↓
Selenium opens Zara website
    ↓
BeautifulSoup parses product data
    ↓
CSV file saved (zara_products.csv)
    ↓
Open index.html in browser
    ↓
Upload the CSV file
    ↓
Browse & search products 🎉
```

---

## 🛠️ Tech Stack

| Category      | Technology                        |
|---------------|-----------------------------------|
| Scraping      | Python, Selenium, BeautifulSoup4  |
| Data Export   | Python CSV module                 |
| UI            | HTML5, CSS3, Vanilla JavaScript   |
| Browser Parser| FileReader API, DOM Manipulation  |

---

## 📁 Project Structure

```
Web_Scraper_Zara/
│
├── main.py       # Scraper — fetches & saves Zara product data to CSV
├── index.html    # CSV Viewer UI — upload, display, search
├── script.js     # FileReader, table rendering & search logic
└── style.css     # Styling for the viewer interface
```

---

## 🚀 Getting Started

### Prerequisites
- Python 3.x
- Google Chrome + ChromeDriver (matching your Chrome version)

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/Hirad1380/Web_Scraper_Zara.git
cd Web_Scraper_Zara

# 2. Install Python dependencies
pip install selenium beautifulsoup4
```

### Run the Scraper
```bash
python main.py
```
A file called `zara_products_2.csv` will be created in the project folder.

### View the Results
1. Open `index.html` in your browser
2. Click **Choose a file** and upload `zara_products_2.csv`
3. Browse and search the scraped products

---

## 📊 CSV Output Format

| ID | TITLE | PRICE | IMAGE |
|----|-------|-------|-------|
| 1  | Slim Fit Shirt | 29.99 | https://... |
| 2  | Cargo Trousers | 49.99 | https://... |
| ...| ...   | ...   | ...   |

---

## ⚠️ Note

> Zara may update their website structure over time, which could require updating the CSS class selectors in `main.py`. The scraper targets the **Men's New In** collection page.

---

## 👨‍💻 Author

**Hirad Bayat**  
M.Sc. Applied Computer Science — University of Duisburg-Essen  
📧 Bayathirad7@gmail.com  
