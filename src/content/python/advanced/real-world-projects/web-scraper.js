export const webScraperContent = {
  id: 'web-scraper',
  title: 'Web Scraper with BeautifulSoup + pandas',
  duration: '50 minutes',
  objectives: [
    'Build a complete web scraping application',
    'Handle different website structures',
    'Store scraped data with pandas',
    'Implement error handling and rate limiting'
  ],
  sections: [
    {
      type: 'overview',
      title: 'Project Overview: News Article Scraper',
      language: 'python',
      code: `
We'll build a web scraper that:
- Scrapes news articles from multiple sources
- Extracts titles, authors, dates, and content
- Handles different website structures
- Stores data in structured format
- Implements polite scraping practices

### Key Components:
- Web scraping with requests/BeautifulSoup
- Data processing with pandas
- Configuration management
- Error handling and logging
- Rate limiting and respectful crawling
`
    },
    {
      type: 'code',
      title: 'Project Structure and Configuration',
      code: `
# scraper_config.py
import time

SCRAPING_CONFIG = {
    'user_agent': 'Mozilla/5.0 (compatible; NewsBot/1.0)',
    'request_delay': 1,  # seconds between requests
    'timeout': 10,
    'max_retries': 3,
    'output_file': 'scraped_articles.csv'
}

SITE_CONFIGS = {
    'example_news': {
        'base_url': 'https://example-news.com',
        'article_links_selector': 'a.article-link',
        'title_selector': 'h1.article-title',
        'author_selector': '.author-name',
        'date_selector': '.publish-date',
        'content_selector': '.article-content'
    },
    'tech_blog': {
        'base_url': 'https://tech-blog.com',
        'article_links_selector': 'h2 a',
        'title_selector': 'h1',
        'author_selector': '.post-author',
        'date_selector': 'time',
        'content_selector': '.post-content'
    }
}

# scraper.py
import requests
from bs4 import BeautifulSoup
import pandas as pd
import time
import logging
from urllib.parse import urljoin, urlparse
from datetime import datetime
import re

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('scraper.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)
`
    },
    {
      type: 'code',
      title: 'Core Scraper Class',
      code: `
class WebScraper:
    def __init__(self, config):
        self.config = config
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': config['user_agent']
        })
        self.articles = []
    
    def get_page(self, url, retries=0):
        """Fetch webpage with error handling and retries"""
        try:
            response = self.session.get(
                url, 
                timeout=self.config['timeout']
            )
            response.raise_for_status()
            return response
        except requests.RequestException as e:
            if retries < self.config['max_retries']:
                logger.warning(f"Retry {retries + 1} for {url}: {e}")
                time.sleep(self.config['request_delay'] * (retries + 1))
                return self.get_page(url, retries + 1)
            else:
                logger.error(f"Failed to fetch {url}: {e}")
                return None
    
    def extract_article_links(self, soup, site_config):
        """Extract article links from listing page"""
        links = []
        base_url = site_config['base_url']
        
        for link in soup.select(site_config['article_links_selector']):
            href = link.get('href')
            if href:
                full_url = urljoin(base_url, href)
                links.append(full_url)
        
        return links
    
    def scrape_article(self, url, site_config):
        """Scrape individual article"""
        response = self.get_page(url)
        if not response:
            return None
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Extract article data
        article = {
            'url': url,
            'source': urlparse(url).netloc,
            'scraped_at': datetime.now().isoformat()
        }
        
        # Title
        title_elem = soup.select_one(site_config['title_selector'])
        article['title'] = title_elem.get_text().strip() if title_elem else 'N/A'
        
        # Author
        author_elem = soup.select_one(site_config['author_selector'])
        article['author'] = author_elem.get_text().strip() if author_elem else 'N/A'
        
        # Date
        date_elem = soup.select_one(site_config['date_selector'])
        if date_elem:
            date_text = date_elem.get_text().strip()
            article['publish_date'] = self.parse_date(date_text)
        else:
            article['publish_date'] = 'N/A'
        
        # Content
        content_elem = soup.select_one(site_config['content_selector'])
        if content_elem:
            # Clean up content
            content = content_elem.get_text().strip()
            content = re.sub(r'\\s+', ' ', content)  # Normalize whitespace
            article['content'] = content[:1000] + '...' if len(content) > 1000 else content
        else:
            article['content'] = 'N/A'
        
        return article
`
    },
    {
      type: 'code',
      title: 'Data Processing and Storage',
      code: `
    def parse_date(self, date_text):
        """Parse various date formats"""
        date_patterns = [
            r'(\\d{4}-\\d{2}-\\d{2})',
            r'(\\d{2}/\\d{2}/\\d{4})',
            r'(\\w+ \\d{1,2}, \\d{4})'
        ]
        
        for pattern in date_patterns:
            match = re.search(pattern, date_text)
            if match:
                return match.group(1)
        
        return date_text
    
    def scrape_site(self, site_name, site_config, max_articles=10):
        """Scrape articles from a specific site"""
        logger.info(f"Starting scrape of {site_name}")
        
        # Get article listing page
        response = self.get_page(site_config['base_url'])
        if not response:
            return
        
        soup = BeautifulSoup(response.content, 'html.parser')
        article_links = self.extract_article_links(soup, site_config)
        
        logger.info(f"Found {len(article_links)} articles on {site_name}")
        
        # Scrape individual articles
        for i, link in enumerate(article_links[:max_articles]):
            logger.info(f"Scraping article {i+1}/{min(len(article_links), max_articles)}: {link}")
            
            article = self.scrape_article(link, site_config)
            if article:
                self.articles.append(article)
            
            # Be respectful - add delay
            time.sleep(self.config['request_delay'])
    
    def save_to_csv(self, filename=None):
        """Save scraped articles to CSV using pandas"""
        if not self.articles:
            logger.warning("No articles to save")
            return
        
        filename = filename or self.config['output_file']
        df = pd.DataFrame(self.articles)
        
        # Clean and process data
        df['title'] = df['title'].str.replace(r'[\\n\\r\\t]', ' ', regex=True)
        df['content_length'] = df['content'].str.len()
        df['scraped_at'] = pd.to_datetime(df['scraped_at'])
        
        # Save to CSV
        df.to_csv(filename, index=False, encoding='utf-8')
        logger.info(f"Saved {len(df)} articles to {filename}")
        
        return df
    
    def get_summary_stats(self):
        """Generate summary statistics"""
        if not self.articles:
            return {}
        
        df = pd.DataFrame(self.articles)
        
        stats = {
            'total_articles': len(df),
            'sources': df['source'].nunique(),
            'avg_content_length': df['content'].str.len().mean(),
            'articles_by_source': df['source'].value_counts().to_dict()
        }
        
        return stats
`
    },
    {
      type: 'code',
      title: 'Main Application',
      code: `
# main.py
def main():
    scraper = WebScraper(SCRAPING_CONFIG)
    
    # Scrape all configured sites
    for site_name, site_config in SITE_CONFIGS.items():
        try:
            scraper.scrape_site(site_name, site_config, max_articles=5)
        except Exception as e:
            logger.error(f"Error scraping {site_name}: {e}")
    
    # Save results
    df = scraper.save_to_csv()
    if df is not None:
        print("\\nScraping completed successfully!")
        print(f"Total articles: {len(df)}")
        
        # Display sample data
        print("\\nSample articles:")
        print(df[['title', 'author', 'source']].head())
        
        # Show summary statistics
        stats = scraper.get_summary_stats()
        print("\\nSummary statistics:")
        for key, value in stats.items():
            print(f"{key}: {value}")

# Advanced features
def analyze_scraped_data(csv_file):
    """Analyze scraped data with pandas"""
    df = pd.read_csv(csv_file)
    
    # Word frequency analysis
    from collections import Counter
    import re
    
    all_text = ' '.join(df['title'].fillna(''))
    words = re.findall(r'\\b\\w+\\b', all_text.lower())
    common_words = Counter(words).most_common(10)
    
    print("Most common words in titles:")
    for word, count in common_words:
        print(f"{word}: {count}")
    
    # Articles per source
    source_counts = df['source'].value_counts()
    print("\\nArticles per source:")
    print(source_counts)
    
    return df

if __name__ == "__main__":
    main()
    
    # Optional: Analyze results
    if input("\\nAnalyze scraped data? (y/n): ").lower() == 'y':
        analyze_scraped_data(SCRAPING_CONFIG['output_file'])
`
    },
    {
      type: 'best_practices',
      title: 'Web Scraping Best Practices',
      code: `
### Ethical Scraping:
- Check robots.txt files
- Respect rate limits
- Use appropriate user agents
- Don't overwhelm servers

### Technical Best Practices:
- Handle errors gracefully
- Implement retries with backoff
- Use session objects for efficiency
- Cache responses when appropriate
- Validate extracted data

### Legal Considerations:
- Review terms of service
- Respect copyright
- Consider API alternatives
- Be transparent about data usage

### Performance Optimization:
- Use async requests for multiple sites
- Implement connection pooling
- Cache parsed pages
- Monitor memory usage
`
    }
  ]
};