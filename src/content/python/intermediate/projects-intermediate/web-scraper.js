export const webScraperContent = {
  id: 'web-scraper',
  title: 'Web Scraper Project',
  duration: '25 min',
  overview: `Learn to build a simple web scraper in Python! Use requests to fetch web pages and BeautifulSoup to extract useful data. This project is a practical introduction to web scraping for beginners.`,
  objectives: [
    'Send HTTP requests to fetch web pages',
    'Parse HTML content with BeautifulSoup',
    'Extract specific data from web pages',
    'Save scraped data to a file',
    'Understand basic web scraping workflow'
  ],
  sections: [
    {
      type: 'text',
      title: 'What is Web Scraping?',
      content: `Web scraping means automatically downloading and extracting data from websites. It is useful for collecting information, analyzing trends, or building datasets.

**Common uses:**
- Collecting product prices
- Gathering news headlines
- Extracting job listings
- Building research datasets

**Tools we will use:**
- \`requests\`: For downloading web pages
- \`BeautifulSoup\`: For parsing HTML and extracting data

**Note:** Always check a website's terms of service before scraping. Only scrape public data and avoid sending too many requests.`
    },
    {
      type: 'text',
      title: 'Step 1: Install Required Packages',
      content: `First, install the packages we need using pip in your terminal:

\`\`\`bash
pip install requests beautifulsoup4
\`\`\`
`
    },
    {
      type: 'text',
      title: 'Step 2: Fetch a Web Page',
      content: `Let's fetch a simple web page. We'll use the Python.org homepage as an example.`
    },
    {
      type: 'code',
      title: 'Download a Web Page',
      language: 'python',
      code: `import requests

url = "https://www.python.org/"
response = requests.get(url)

print("Status code:", response.status_code)
print("First 500 characters of HTML:")
print(response.text[:500])
`
    },
    {
      type: 'text',
      title: 'Step 3: Parse HTML and Extract Data',
      content: `Now, let's extract the latest news headlines from the Python.org homepage.`
    },
    {
      type: 'code',
      title: 'Extract News Headlines',
      language: 'python',
      code: `from bs4 import BeautifulSoup

soup = BeautifulSoup(response.text, "html.parser")

# Find the news section
news_section = soup.find("div", {"class": "medium-widget event-widget last"})

# Find all headlines
headlines = news_section.find_all("a")

print("Latest Python News:")
for headline in headlines:
    print("-", headline.text.strip())
`
    },
    {
        type: 'text',
        title: 'Why These Selectors?',
        content: 'On the python.org homepage, the latest news is displayed in a sidebar section. This section is wrapped in a <div> (div) element with the class "medium-widget event-widget last". By searching for this class, we target the container holding the news headlines.\n\nInside this section, each headline is a clickable link represented by an <a> (anchor) tag. Using find_all("a") collects all anchor tags within the news section, which correspond to the individual news headlines displayed on the site.'
    },
    {
      type: 'text',
      title: 'Step 4: Save Data to a File',
      content: `Let's save the headlines to a text file for later use.`
    },
    {
      type: 'code',
      title: 'Save Headlines',
      language: 'python',
      code: `with open("python_news.txt", "w", encoding="utf-8") as f:
    for headline in headlines:
        f.write(headline.text.strip() + "\\n")

print("Headlines saved to python_news.txt")
`
    },
    {
      type: 'output',
      title: 'Output (example)',
      content: `Latest Python News:
- Python 3.12.2 and 3.11.8 are now available
- PyCon US 2024 Registration is open
- Python Software Foundation News
...
Headlines saved to python_news.txt`
    },
    {
      type: 'text',
      title: 'Key Takeaways',
      content: `- Use \`requests\` to download web pages
- Use \`BeautifulSoup\` to parse HTML and extract data
- Always respect website rules and scrape responsibly
- Save your results for later analysis

Web scraping is a powerful tool for data collection. Start simple, and explore more advanced techniques as you gain experience!`
    }
  ]
};