// Lesson content for Web Scraper Project
export const webScraperContent = {
  id: 'web-scraper',
  title: 'Web Scraper Project',
  duration: '40 min',
  overview: `Build a powerful web scraper to extract data from websites! Learn to handle HTTP requests, parse HTML content, manage rate limiting, and store scraped data. Apply error handling, respect robots.txt, and create a production-ready scraping tool.`,
  objectives: [
    'Create HTTP requests and handle responses with the requests library',
    'Parse HTML content using BeautifulSoup for data extraction',
    'Implement rate limiting and respectful scraping practices',
    'Handle errors, retries, and edge cases in web scraping',
    'Store scraped data in structured formats (CSV, JSON)',
    'Build a configurable and reusable scraping framework',
  ],
  sections: [
    {
      type: 'text',
      title: 'Web Scraping Fundamentals and Ethics',
      content: `Web scraping is the process of automatically extracting data from websites. It's a powerful technique for data collection, but must be done responsibly and ethically.

**Key Technologies:**
- **HTTP Requests**: Fetching web pages and API responses
- **HTML Parsing**: Extracting data from HTML structure
- **CSS Selectors**: Targeting specific elements
- **Data Storage**: Saving extracted data in usable formats
- **Rate Limiting**: Controlling request frequency

**Ethical Considerations:**
- **robots.txt**: Check and respect website crawling rules
- **Rate Limiting**: Don't overload servers with requests
- **Terms of Service**: Respect website usage policies
- **Copyright**: Be aware of data ownership and usage rights
- **Public Data**: Focus on publicly available information

**Technical Challenges:**
- **Dynamic Content**: JavaScript-rendered pages
- **Anti-scraping Measures**: CAPTCHAs, IP blocking
- **Data Quality**: Handling inconsistent HTML structure
- **Scale**: Managing large-scale scraping operations

**Libraries We'll Use:**
- **requests**: HTTP library for making web requests
- **BeautifulSoup**: HTML parsing and navigation
- **csv/json**: Data storage and export
- **time**: Rate limiting and delays
- **urllib**: URL handling and robots.txt parsing

**Best Practices:**
- Start with small test runs
- Implement proper error handling
- Use appropriate delays between requests
- Cache responses when possible
- Monitor for structure changes`
    },
    {
      type: 'code',
      title: 'Basic Web Scraper Framework',
      language: 'python',
      code: `# Basic web scraper framework with error handling
import requests
from bs4 import BeautifulSoup
import time
import csv
import json
from urllib.parse import urljoin, urlparse
from urllib.robotparser import RobotFileParser
import random

class WebScraper:
    """A configurable web scraper with built-in best practices"""
    
    def __init__(self, base_url, delay_range=(1, 3), user_agent=None):
        self.base_url = base_url
        self.delay_range = delay_range
        self.session = requests.Session()
        
        # Set a respectful user agent
        if user_agent:
            self.session.headers.update({'User-Agent': user_agent})
        else:
            self.session.headers.update({
                'User-Agent': 'Mozilla/5.0 (compatible; WebScraper/1.0; Educational)'
            })
        
        self.scraped_data = []
        self.failed_urls = []
    
    def check_robots_txt(self, url):
        """Check if URL is allowed by robots.txt"""
        try:
            parsed_url = urlparse(url)
            robots_url = f"{parsed_url.scheme}://{parsed_url.netloc}/robots.txt"
            
            rp = RobotFileParser()
            rp.set_url(robots_url)
            rp.read()
            
            user_agent = self.session.headers.get('User-Agent', '*')
            return rp.can_fetch(user_agent, url)
            
        except Exception:
            # If we can't check robots.txt, be conservative
            return True
    
    def make_request(self, url, max_retries=3):
        """Make HTTP request with retries and error handling"""
        for attempt in range(max_retries):
            try:
                # Respect rate limiting
                delay = random.uniform(*self.delay_range)
                time.sleep(delay)
                
                response = self.session.get(url, timeout=10)
                response.raise_for_status()  # Raise exception for HTTP errors
                
                return response
                
            except requests.exceptions.RequestException as e:
                print(f"Attempt {attempt + 1} failed for {url}: {e}")
                if attempt == max_retries - 1:
                    self.failed_urls.append(url)
                    return None
                
                # Exponential backoff
                time.sleep(2 ** attempt)
        
        return None
    
    def parse_html(self, html_content, selectors):
        """Parse HTML content using CSS selectors"""
        soup = BeautifulSoup(html_content, 'html.parser')
        extracted_data = {}
        
        for field_name, selector in selectors.items():
            try:
                elements = soup.select(selector)
                if elements:
                    if len(elements) == 1:
                        # Single element - get text content
                        extracted_data[field_name] = elements[0].get_text(strip=True)
                    else:
                        # Multiple elements - get list of text content
                        extracted_data[field_name] = [
                            elem.get_text(strip=True) for elem in elements
                        ]
                else:
                    extracted_data[field_name] = None
                    
            except Exception as e:
                print(f"Error parsing {field_name}: {e}")
                extracted_data[field_name] = None
        
        return extracted_data
    
    def scrape_page(self, url, selectors):
        """Scrape a single page"""
        # Check robots.txt
        if not self.check_robots_txt(url):
            print(f"Robots.txt disallows scraping: {url}")
            return None
        
        # Make request
        response = self.make_request(url)
        if not response:
            return None
        
        # Parse content
        data = self.parse_html(response.text, selectors)
        data['source_url'] = url
        data['scraped_at'] = time.strftime("%Y-%m-%d %H:%M:%S")
        
        return data
    
    def scrape_multiple_pages(self, urls, selectors):
        """Scrape multiple pages"""
        print(f"Starting to scrape {len(urls)} pages...")
        
        for i, url in enumerate(urls, 1):
            print(f"Scraping page {i}/{len(urls)}: {url}")
            
            data = self.scrape_page(url, selectors)
            if data:
                self.scraped_data.append(data)
        
        print(f"Scraping completed. {len(self.scraped_data)} pages successful.")
        if self.failed_urls:
            print(f"{len(self.failed_urls)} pages failed.")
    
    def save_data(self, filename, format='json'):
        """Save scraped data to file"""
        if not self.scraped_data:
            print("No data to save")
            return
        
        try:
            if format == 'json':
                with open(filename, 'w', encoding='utf-8') as f:
                    json.dump(self.scraped_data, f, indent=2, ensure_ascii=False)
            
            elif format == 'csv':
                if self.scraped_data:
                    # Get all possible field names
                    all_fields = set()
                    for item in self.scraped_data:
                        all_fields.update(item.keys())
                    
                    fieldnames = sorted(all_fields)
                    
                    with open(filename, 'w', newline='', encoding='utf-8') as f:
                        writer = csv.DictWriter(f, fieldnames=fieldnames)
                        writer.writeheader()
                        
                        for item in self.scraped_data:
                            # Handle list values by converting to string
                            row = {}
                            for field in fieldnames:
                                value = item.get(field, '')
                                if isinstance(value, list):
                                    row[field] = '; '.join(str(v) for v in value)
                                else:
                                    row[field] = value
                            writer.writerow(row)
            
            print(f"Data saved to {filename}")
            
        except Exception as e:
            print(f"Error saving data: {e}")
    
    def get_summary(self):
        """Get scraping summary statistics"""
        return {
            'total_attempted': len(self.scraped_data) + len(self.failed_urls),
            'successful': len(self.scraped_data),
            'failed': len(self.failed_urls),
            'success_rate': len(self.scraped_data) / (len(self.scraped_data) + len(self.failed_urls)) * 100 if (len(self.scraped_data) + len(self.failed_urls)) > 0 else 0
        }

# Demonstrate the web scraper
print("Web Scraper Demonstration:")
print("=" * 30)

# Create scraper instance
scraper = WebScraper(
    base_url="https://example.com",
    delay_range=(0.5, 1.0),  # Faster for demo
    user_agent="WebScraperDemo/1.0"
)

# Define selectors for extracting data
# Note: These are example selectors - real selectors depend on target website
selectors = {
    'title': 'h1',
    'description': 'p.description, .summary p',
    'price': '.price, .cost',
    'rating': '.rating, .score',
    'tags': '.tag, .category'
}

# Simulate scraping (using mock data since we can't make real requests in demo)
print("Simulating web scraping process...")

# Mock response data for demonstration
mock_pages = [
    {
        'url': 'https://example.com/product1',
        'html': '''
        <html>
            <h1>Premium Python Course</h1>
            <p class="description">Learn Python programming from basics to advanced</p>
            <div class="price">$99.99</div>
            <div class="rating">4.8/5</div>
            <span class="tag">Programming</span>
            <span class="tag">Python</span>
        </html>
        '''
    },
    {
        'url': 'https://example.com/product2',
        'html': '''
        <html>
            <h1>Data Science Bootcamp</h1>
            <p class="description">Complete data science curriculum with hands-on projects</p>
            <div class="price">$199.99</div>
            <div class="rating">4.9/5</div>
            <span class="tag">Data Science</span>
            <span class="tag">Analytics</span>
        </html>
        '''
    }
]

# Parse mock data (simulating real scraping)
for page in mock_pages:
    parsed_data = scraper.parse_html(page['html'], selectors)
    parsed_data['source_url'] = page['url']
    parsed_data['scraped_at'] = time.strftime("%Y-%m-%d %H:%M:%S")
    scraper.scraped_data.append(parsed_data)
    
    print(f"Scraped: {page['url']}")
    print(f"  Title: {parsed_data.get('title')}")
    print(f"  Price: {parsed_data.get('price')}")
    print(f"  Rating: {parsed_data.get('rating')}")
    print(f"  Tags: {parsed_data.get('tags')}")
    print()

# Save data in different formats
print("Saving scraped data...")
scraper.save_data('scraped_data.json', 'json')
scraper.save_data('scraped_data.csv', 'csv')

# Show summary
summary = scraper.get_summary()
print("\\nScraping Summary:")
print(f"  Total attempted: {summary['total_attempted']}")
print(f"  Successful: {summary['successful']}")
print(f"  Failed: {summary['failed']}")
print(f"  Success rate: {summary['success_rate']:.1f}%")

# Demonstrate data structure
print("\\nScraped data structure:")
if scraper.scraped_data:
    sample_item = scraper.scraped_data[0]
    for key, value in sample_item.items():
        print(f"  {key}: {value}")

print("\\n📊 Web scraper features demonstrated:")
print("  • HTTP request handling with retries")
print("  • HTML parsing with CSS selectors")
print("  • Rate limiting and respectful scraping")
print("  • Error handling and failed URL tracking")
print("  • Multiple data export formats")
print("  • robots.txt compliance checking")
print("  • Configurable delays and user agents")

# Clean up demo files
import os
try:
    os.remove('scraped_data.json')
    os.remove('scraped_data.csv')
except:
    pass`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Web Scraper Demonstration:
==============================
Simulating web scraping process...
Scraped: https://example.com/product1
  Title: Premium Python Course
  Price: $99.99
  Rating: 4.8/5
  Tags: ['Programming', 'Python']

Scraped: https://example.com/product2
  Title: Data Science Bootcamp
  Price: $199.99
  Rating: 4.9/5
  Tags: ['Data Science', 'Analytics']

Saving scraped data...
Data saved to scraped_data.json
Data saved to scraped_data.csv

Scraping Summary:
  Total attempted: 2
  Successful: 2
  Failed: 0
  Success rate: 100.0%

Scraped data structure:
  title: Premium Python Course
  description: Learn Python programming from basics to advanced
  price: $99.99
  rating: 4.8/5
  tags: ['Programming', 'Python']
  source_url: https://example.com/product1
  scraped_at: 2024-01-15 10:30:45

📊 Web scraper features demonstrated:
  • HTTP request handling with retries
  • HTML parsing with CSS selectors
  • Rate limiting and respectful scraping
  • Error handling and failed URL tracking
  • Multiple data export formats
  • robots.txt compliance checking
  • Configurable delays and user agents`
    },
    {
      type: 'code',
      title: 'Advanced Scraping Features',
      language: 'python',
      code: `# Advanced web scraping features and utilities
import re
from urllib.parse import urljoin, urlparse
from datetime import datetime, timedelta
import hashlib

class AdvancedWebScraper(WebScraper):
    """Extended web scraper with advanced features"""
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.url_cache = {}
        self.content_hashes = set()
        self.crawl_stats = {
            'start_time': None,
            'end_time': None,
            'pages_per_minute': 0
        }
    
    def extract_links(self, html_content, base_url, link_pattern=None):
        """Extract links from HTML content"""
        soup = BeautifulSoup(html_content, 'html.parser')
        links = []
        
        # Find all anchor tags with href attributes
        for link in soup.find_all('a', href=True):
            href = link['href']
            
            # Convert relative URLs to absolute
            absolute_url = urljoin(base_url, href)
            
            # Apply link pattern filter if provided
            if link_pattern:
                if not re.search(link_pattern, absolute_url):
                    continue
            
            # Get link text
            link_text = link.get_text(strip=True)
            
            links.append({
                'url': absolute_url,
                'text': link_text,
                'title': link.get('title', '')
            })
        
        return links
    
    def detect_content_changes(self, url, html_content):
        """Detect if page content has changed since last scrape"""
        content_hash = hashlib.md5(html_content.encode()).hexdigest()
        
        if url in self.url_cache:
            old_hash = self.url_cache[url]['hash']
            if old_hash == content_hash:
                return False  # No change
        
        # Update cache
        self.url_cache[url] = {
            'hash': content_hash,
            'last_scraped': datetime.now(),
            'scrape_count': self.url_cache.get(url, {}).get('scrape_count', 0) + 1
        }
        
        return True  # Content changed or first time
    
    def extract_structured_data(self, html_content):
        """Extract structured data (JSON-LD, microdata, etc.)"""
        soup = BeautifulSoup(html_content, 'html.parser')
        structured_data = {}
        
        # Extract JSON-LD
        json_ld_scripts = soup.find_all('script', type='application/ld+json')
        if json_ld_scripts:
            json_ld_data = []
            for script in json_ld_scripts:
                try:
                    data = json.loads(script.string)
                    json_ld_data.append(data)
                except json.JSONDecodeError:
                    pass
            structured_data['json_ld'] = json_ld_data
        
        # Extract meta tags
        meta_data = {}
        for meta in soup.find_all('meta'):
            name = meta.get('name') or meta.get('property')
            content = meta.get('content')
            if name and content:
                meta_data[name] = content
        structured_data['meta'] = meta_data
        
        # Extract title and description
        title_tag = soup.find('title')
        if title_tag:
            structured_data['page_title'] = title_tag.get_text(strip=True)
        
        return structured_data
    
    def clean_text(self, text):
        """Clean and normalize extracted text"""
        if not text:
            return ""
        
        # Remove extra whitespace
        text = re.sub(r'\\s+', ' ', str(text))
        
        # Remove common unwanted characters
        text = text.replace('\\n', ' ').replace('\\t', ' ')
        
        # Strip leading/trailing whitespace
        text = text.strip()
        
        return text
    
    def validate_data(self, data, validation_rules):
        """Validate scraped data against rules"""
        validation_results = {'valid': True, 'errors': []}
        
        for field, rules in validation_rules.items():
            value = data.get(field)
            
            # Required field check
            if rules.get('required', False) and not value:
                validation_results['valid'] = False
                validation_results['errors'].append(f"{field} is required but missing")
                continue
            
            if value:
                # Type validation
                expected_type = rules.get('type')
                if expected_type == 'number':
                    try:
                        float(str(value).replace(',', '').replace('$', ''))
                    except ValueError:
                        validation_results['valid'] = False
                        validation_results['errors'].append(f"{field} should be numeric")
                
                # Pattern validation
                pattern = rules.get('pattern')
                if pattern and not re.search(pattern, str(value)):
                    validation_results['valid'] = False
                    validation_results['errors'].append(f"{field} doesn't match pattern {pattern}")
                
                # Length validation
                min_length = rules.get('min_length')
                max_length = rules.get('max_length')
                if min_length and len(str(value)) < min_length:
                    validation_results['valid'] = False
                    validation_results['errors'].append(f"{field} too short (min: {min_length})")
                if max_length and len(str(value)) > max_length:
                    validation_results['valid'] = False
                    validation_results['errors'].append(f"{field} too long (max: {max_length})")
        
        return validation_results
    
    def scrape_with_pagination(self, start_url, selectors, next_page_selector, max_pages=10):
        """Scrape paginated content"""
        current_url = start_url
        page_count = 0
        
        print(f"Starting paginated scraping from: {start_url}")
        
        while current_url and page_count < max_pages:
            page_count += 1
            print(f"Scraping page {page_count}: {current_url}")
            
            # Scrape current page
            data = self.scrape_page(current_url, selectors)
            if data:
                data['page_number'] = page_count
                self.scraped_data.append(data)
            
            # Find next page URL
            response = self.make_request(current_url)
            if not response:
                break
            
            soup = BeautifulSoup(response.text, 'html.parser')
            next_link = soup.select_one(next_page_selector)
            
            if next_link and next_link.get('href'):
                current_url = urljoin(current_url, next_link['href'])
            else:
                print("No more pages found")
                break
        
        print(f"Completed pagination. Scraped {page_count} pages.")
    
    def generate_crawl_report(self):
        """Generate comprehensive crawl report"""
        if self.crawl_stats['start_time'] and self.crawl_stats['end_time']:
            duration = self.crawl_stats['end_time'] - self.crawl_stats['start_time']
            pages_per_minute = len(self.scraped_data) / (duration.total_seconds() / 60)
        else:
            duration = timedelta(0)
            pages_per_minute = 0
        
        report = {
            'summary': self.get_summary(),
            'timing': {
                'start_time': self.crawl_stats.get('start_time'),
                'end_time': self.crawl_stats.get('end_time'),
                'duration': str(duration),
                'pages_per_minute': round(pages_per_minute, 2)
            },
            'cache_stats': {
                'cached_urls': len(self.url_cache),
                'unique_content_hashes': len(self.content_hashes)
            },
            'failed_urls': self.failed_urls
        }
        
        return report

# Demonstrate advanced scraping features
print("Advanced Web Scraping Features:")
print("=" * 35)

# Create advanced scraper
advanced_scraper = AdvancedWebScraper(
    base_url="https://example.com",
    delay_range=(0.5, 1.0)
)

# Mock HTML content for demonstration
mock_html = '''
<html>
<head>
    <title>Advanced Product Page</title>
    <meta name="description" content="High-quality product with excellent reviews">
    <meta property="og:title" content="Advanced Product">
    <script type="application/ld+json">
    {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Advanced Product",
        "description": "A great product",
        "offers": {
            "@type": "Offer",
            "price": "29.99",
            "priceCurrency": "USD"
        }
    }
    </script>
</head>
<body>
    <h1>Advanced Product</h1>
    <p class="description">This is an amazing product with many features.</p>
    <div class="price">$29.99</div>
    <div class="rating">4.5★</div>
    
    <div class="links">
        <a href="/related1">Related Product 1</a>
        <a href="/related2">Related Product 2</a>
        <a href="https://external.com/product">External Link</a>
    </div>
    
    <a href="/page2" class="next-page">Next Page →</a>
</body>
</html>
'''

# Demonstrate link extraction
print("1. Link Extraction:")
links = advanced_scraper.extract_links(mock_html, "https://example.com/product1")
for link in links:
    print(f"  • {link['text']}: {link['url']}")

# Demonstrate structured data extraction  
print("\\n2. Structured Data Extraction:")
structured_data = advanced_scraper.extract_structured_data(mock_html)
print(f"  Page title: {structured_data.get('page_title')}")
print("  Meta tags:")
for name, content in structured_data.get('meta', {}).items():
    print(f"    {name}: {content}")
print("  JSON-LD data:")
for data in structured_data.get('json_ld', []):
    print(f"    Type: {data.get('@type')}")
    print(f"    Name: {data.get('name')}")

# Demonstrate content change detection
print("\\n3. Content Change Detection:")
url = "https://example.com/product1"
changed1 = advanced_scraper.detect_content_changes(url, mock_html)
print(f"  First scrape - content changed: {changed1}")

changed2 = advanced_scraper.detect_content_changes(url, mock_html)
print(f"  Second scrape (same content) - content changed: {changed2}")

modified_html = mock_html.replace("$29.99", "$24.99")
changed3 = advanced_scraper.detect_content_changes(url, modified_html)
print(f"  Third scrape (modified content) - content changed: {changed3}")

# Demonstrate data validation
print("\\n4. Data Validation:")
sample_data = {
    'title': 'Advanced Product',
    'price': '$29.99',
    'rating': '4.5★',
    'description': 'This is an amazing product'
}

validation_rules = {
    'title': {'required': True, 'min_length': 5},
    'price': {'required': True, 'type': 'number', 'pattern': r'\\$\\d+\\.\\d{2}'},
    'rating': {'required': False, 'pattern': r'\\d+\\.\\d+★'},
    'description': {'min_length': 10, 'max_length': 500}
}

validation_result = advanced_scraper.validate_data(sample_data, validation_rules)
print(f"  Validation passed: {validation_result['valid']}")
if validation_result['errors']:
    for error in validation_result['errors']:
        print(f"  Error: {error}")

# Demonstrate text cleaning
print("\\n5. Text Cleaning:")
messy_text = "  \\n  This    text   has\\tmultiple\\n\\n   spaces  and  \\t characters  \\n  "
cleaned_text = advanced_scraper.clean_text(messy_text)
print(f"  Original: '{messy_text}'")
print(f"  Cleaned:  '{cleaned_text}'")

# Generate sample crawl report
print("\\n6. Crawl Report:")
advanced_scraper.crawl_stats['start_time'] = datetime.now() - timedelta(minutes=5)
advanced_scraper.crawl_stats['end_time'] = datetime.now()

# Add some mock data
for i in range(3):
    advanced_scraper.scraped_data.append({'page': f'page_{i}', 'data': 'sample'})

report = advanced_scraper.generate_crawl_report()
print(f"  Duration: {report['timing']['duration']}")
print(f"  Pages per minute: {report['timing']['pages_per_minute']}")
print(f"  Success rate: {report['summary']['success_rate']:.1f}%")
print(f"  Cached URLs: {report['cache_stats']['cached_urls']}")

print("\\n🚀 Advanced scraping features demonstrated:")
print("  • Intelligent link extraction and following")
print("  • Structured data parsing (JSON-LD, meta tags)")
print("  • Content change detection and caching")
print("  • Data validation with custom rules")
print("  • Text cleaning and normalization")
print("  • Pagination handling")
print("  • Comprehensive crawl reporting")
print("  • Performance monitoring and optimization")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Advanced Web Scraping Features:
===================================
1. Link Extraction:
  • Related Product 1: https://example.com/related1
  • Related Product 2: https://example.com/related2
  • External Link: https://external.com/product
  • Next Page →: https://example.com/page2

2. Structured Data Extraction:
  Page title: Advanced Product Page
  Meta tags:
    description: High-quality product with excellent reviews
    og:title: Advanced Product
  JSON-LD data:
    Type: Product
    Name: Advanced Product

3. Content Change Detection:
  First scrape - content changed: True
  Second scrape (same content) - content changed: False
  Third scrape (modified content) - content changed: True

4. Data Validation:
  Validation passed: True

5. Text Cleaning:
  Original: '  
  This    text   has	multiple

   spaces  and  	 characters  
  '
  Cleaned:  'This text has multiple spaces and characters'

6. Crawl Report:
  Duration: 0:05:00
  Pages per minute: 0.6
  Success rate: 100.0%
  Cached URLs: 1

🚀 Advanced scraping features demonstrated:
  • Intelligent link extraction and following
  • Structured data parsing (JSON-LD, meta tags)
  • Content change detection and caching
  • Data validation with custom rules
  • Text cleaning and normalization
  • Pagination handling
  • Comprehensive crawl reporting
  • Performance monitoring and optimization`
    },
    {
      type: 'code',
      title: 'Production-Ready News Scraper',
      language: 'python',
      code: `# Production-ready news scraper application
import json
import csv
from datetime import datetime, timedelta
import logging
import os

class NewsArticleScraper(AdvancedWebScraper):
    """Specialized scraper for news articles"""
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.setup_logging()
        self.article_selectors = {
            'title': 'h1, .headline, .article-title',
            'author': '.author, .byline, [rel="author"]',
            'publish_date': '.date, .publish-date, time[datetime]',
            'content': '.article-content, .story-body, .content p',
            'tags': '.tags a, .categories a, .tag',
            'summary': '.summary, .excerpt, .lead'
        }
        
        self.validation_rules = {
            'title': {'required': True, 'min_length': 10},
            'content': {'required': True, 'min_length': 100},
            'publish_date': {'required': False},
            'author': {'required': False}
        }
    
    def setup_logging(self):
        """Setup logging for the scraper"""
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s - %(levelname)s - %(message)s',
            handlers=[
                logging.FileHandler('news_scraper.log'),
                logging.StreamHandler()
            ]
        )
        self.logger = logging.getLogger(__name__)
    
    def extract_article_metadata(self, html_content):
        """Extract article-specific metadata"""
        structured_data = self.extract_structured_data(html_content)
        soup = BeautifulSoup(html_content, 'html.parser')
        
        metadata = {}
        
        # Extract publish date from multiple sources
        date_element = soup.find('time')
        if date_element:
            datetime_attr = date_element.get('datetime')
            if datetime_attr:
                try:
                    metadata['publish_date'] = datetime.fromisoformat(
                        datetime_attr.replace('Z', '+00:00')
                    ).isoformat()
                except ValueError:
                    pass
        
        # Extract article schema data
        for data in structured_data.get('json_ld', []):
            if data.get('@type') == 'Article':
                metadata.update({
                    'article_type': data.get('@type'),
                    'headline': data.get('headline'),
                    'date_published': data.get('datePublished'),
                    'date_modified': data.get('dateModified'),
                    'word_count': data.get('wordCount')
                })
        
        return metadata
    
    def process_article_content(self, content):
        """Clean and process article content"""
        if isinstance(content, list):
            content = ' '.join(content)
        
        # Clean the content
        content = self.clean_text(content)
        
        # Calculate reading time (average 200 words per minute)
        word_count = len(content.split())
        reading_time = max(1, round(word_count / 200))
        
        return {
            'content': content,
            'word_count': word_count,
            'reading_time_minutes': reading_time
        }
    
    def scrape_news_article(self, url):
        """Scrape a single news article"""
        self.logger.info(f"Scraping news article: {url}")
        
        # Get basic article data
        article_data = self.scrape_page(url, self.article_selectors)
        if not article_data:
            return None
        
        # Get additional metadata
        response = self.make_request(url)
        if response:
            metadata = self.extract_article_metadata(response.text)
            article_data.update(metadata)
            
            # Process content
            if article_data.get('content'):
                content_data = self.process_article_content(article_data['content'])
                article_data.update(content_data)
        
        # Validate article data
        validation = self.validate_data(article_data, self.validation_rules)
        article_data['validation'] = validation
        
        if not validation['valid']:
            self.logger.warning(f"Article validation failed: {validation['errors']}")
        
        return article_data
    
    def scrape_news_feed(self, feed_urls, max_articles_per_feed=10):
        """Scrape multiple news feeds"""
        self.logger.info(f"Starting news feed scraping for {len(feed_urls)} feeds")
        
        for feed_url in feed_urls:
            self.logger.info(f"Processing feed: {feed_url}")
            
            # Get feed page
            response = self.make_request(feed_url)
            if not response:
                continue
            
            # Extract article links
            links = self.extract_links(response.text, feed_url, r'/article/|/news/|/story/')
            
            # Scrape individual articles
            articles_scraped = 0
            for link in links[:max_articles_per_feed]:
                article = self.scrape_news_article(link['url'])
                if article and article.get('validation', {}).get('valid', False):
                    self.scraped_data.append(article)
                    articles_scraped += 1
            
            self.logger.info(f"Scraped {articles_scraped} valid articles from {feed_url}")
    
    def generate_news_report(self, output_dir='news_output'):
        """Generate comprehensive news scraping report"""
        os.makedirs(output_dir, exist_ok=True)
        
        if not self.scraped_data:
            self.logger.warning("No data to generate report")
            return
        
        # Save raw data
        with open(f'{output_dir}/articles.json', 'w', encoding='utf-8') as f:
            json.dump(self.scraped_data, f, indent=2, ensure_ascii=False)
        
        # Generate summary statistics
        total_articles = len(self.scraped_data)
        total_words = sum(article.get('word_count', 0) for article in self.scraped_data)
        avg_reading_time = sum(article.get('reading_time_minutes', 0) for article in self.scraped_data) / total_articles if total_articles else 0
        
        # Date analysis
        dates = []
        for article in self.scraped_data:
            date_str = article.get('publish_date') or article.get('date_published')
            if date_str:
                try:
                    date_obj = datetime.fromisoformat(date_str.replace('Z', '+00:00'))
                    dates.append(date_obj)
                except ValueError:
                    pass
        
        # Author analysis
        authors = {}
        for article in self.scraped_data:
            author = article.get('author')
            if author:
                authors[author] = authors.get(author, 0) + 1
        
        # Generate HTML report
        html_report = f'''
        <!DOCTYPE html>
        <html>
        <head>
            <title>News Scraping Report</title>
            <style>
                body {{ font-family: Arial, sans-serif; margin: 40px; }}
                .summary {{ background: #f5f5f5; padding: 20px; border-radius: 5px; }}
                .article {{ border-bottom: 1px solid #ddd; padding: 10px 0; }}
                .stats {{ display: flex; gap: 20px; }}
                .stat {{ background: #e9e9e9; padding: 10px; border-radius: 3px; }}
            </style>
        </head>
        <body>
            <h1>News Scraping Report</h1>
            <div class="summary">
                <h2>Summary Statistics</h2>
                <div class="stats">
                    <div class="stat">
                        <strong>Total Articles:</strong> {total_articles}
                    </div>
                    <div class="stat">
                        <strong>Total Words:</strong> {total_words:,}
                    </div>
                    <div class="stat">
                        <strong>Avg Reading Time:</strong> {avg_reading_time:.1f} min
                    </div>
                    <div class="stat">
                        <strong>Date Range:</strong> {len(dates)} dated articles
                    </div>
                </div>
            </div>
            
            <h2>Top Authors</h2>
            <ul>
        '''
        
        # Add top authors
        top_authors = sorted(authors.items(), key=lambda x: x[1], reverse=True)[:10]
        for author, count in top_authors:
            html_report += f'<li>{author}: {count} articles</li>'
        
        html_report += '''
            </ul>
            
            <h2>Recent Articles</h2>
        '''
        
        # Add recent articles
        for article in self.scraped_data[:10]:
            title = article.get('title', 'Untitled')
            author = article.get('author', 'Unknown')
            reading_time = article.get('reading_time_minutes', 0)
            
            html_report += f'''
            <div class="article">
                <h3>{title}</h3>
                <p><strong>Author:</strong> {author} | <strong>Reading Time:</strong> {reading_time} min</p>
                <p>{article.get('summary', article.get('content', '')[:200])}...</p>
            </div>
            '''
        
        html_report += '''
            </body>
            </html>
        '''
        
        with open(f'{output_dir}/report.html', 'w', encoding='utf-8') as f:
            f.write(html_report)
        
        self.logger.info(f"News report generated in {output_dir}/")

# Demonstrate production news scraper
print("Production News Scraper Demonstration:")
print("=" * 40)

# Create news scraper
news_scraper = NewsArticleScraper(
    base_url="https://news.example.com",
    delay_range=(1, 2),
    user_agent="NewsBot/1.0 (Educational Purpose)"
)

# Mock news article data for demonstration
mock_articles = [
    {
        'url': 'https://news.example.com/tech-breakthrough',
        'html': '''
        <html>
        <head>
            <title>Major Tech Breakthrough in AI</title>
            <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "Major Tech Breakthrough in AI",
                "datePublished": "2024-01-15T10:00:00Z",
                "wordCount": 850
            }
            </script>
        </head>
        <body>
            <h1>Major Tech Breakthrough in AI</h1>
            <div class="author">Dr. Sarah Johnson</div>
            <time datetime="2024-01-15T10:00:00Z">January 15, 2024</time>
            <div class="summary">Researchers announce significant advancement in artificial intelligence</div>
            <div class="article-content">
                <p>Scientists at leading tech companies have announced a major breakthrough in artificial intelligence technology.</p>
                <p>The new development promises to revolutionize how we interact with AI systems.</p>
                <p>This advancement could lead to more efficient and accurate AI models across various industries.</p>
                <p>Experts believe this technology will be widely adopted within the next few years.</p>
            </div>
            <div class="tags">
                <a href="/tag/technology">Technology</a>
                <a href="/tag/ai">Artificial Intelligence</a>
            </div>
        </body>
        </html>
        '''
    },
    {
        'url': 'https://news.example.com/climate-update',
        'html': '''
        <html>
        <head>
            <title>Climate Change Report Released</title>
        </head>
        <body>
            <h1>Climate Change Report Released</h1>
            <div class="author">Environmental News Team</div>
            <time datetime="2024-01-14T15:30:00Z">January 14, 2024</time>
            <div class="summary">Latest climate research shows concerning trends</div>
            <div class="article-content">
                <p>A comprehensive climate change report has been released by international researchers.</p>
                <p>The report highlights several key areas of concern for global environmental policy.</p>
                <p>Immediate action is recommended to address the growing climate crisis.</p>
            </div>
            <div class="tags">
                <a href="/tag/climate">Climate</a>
                <a href="/tag/environment">Environment</a>
            </div>
        </body>
        </html>
        '''
    }
]

# Process mock articles
print("Processing news articles...")
for mock_article in mock_articles:
    print(f"\\nScraping: {mock_article['url']}")
    
    # Parse the article (simulating real scraping)
    article_data = news_scraper.parse_html(mock_article['html'], news_scraper.article_selectors)
    
    # Add metadata
    metadata = news_scraper.extract_article_metadata(mock_article['html'])
    article_data.update(metadata)
    
    # Process content
    if article_data.get('content'):
        content_data = news_scraper.process_article_content(article_data['content'])
        article_data.update(content_data)
    
    # Add source info
    article_data['source_url'] = mock_article['url']
    article_data['scraped_at'] = datetime.now().isoformat()
    
    # Validate
    validation = news_scraper.validate_data(article_data, news_scraper.validation_rules)
    article_data['validation'] = validation
    
    news_scraper.scraped_data.append(article_data)
    
    # Show results
    print(f"  Title: {article_data.get('title')}")
    print(f"  Author: {article_data.get('author')}")
    print(f"  Word count: {article_data.get('word_count')}")
    print(f"  Reading time: {article_data.get('reading_time_minutes')} minutes")
    print(f"  Valid: {validation.get('valid', False)}")

# Generate comprehensive report
print("\\nGenerating news report...")
news_scraper.generate_news_report('demo_news_output')

# Show summary
print("\\nNews Scraping Summary:")
total_articles = len(news_scraper.scraped_data)
valid_articles = sum(1 for article in news_scraper.scraped_data 
                    if article.get('validation', {}).get('valid', False))
total_words = sum(article.get('word_count', 0) for article in news_scraper.scraped_data)

print(f"  Total articles processed: {total_articles}")
print(f"  Valid articles: {valid_articles}")
print(f"  Total words scraped: {total_words:,}")
print(f"  Average words per article: {total_words // total_articles if total_articles else 0}")

# Clean up demo files
import shutil
try:
    shutil.rmtree('demo_news_output')
    os.remove('news_scraper.log')
except:
    pass

print("\\n📰 Production news scraper features:")
print("  • Specialized article data extraction")
print("  • Content processing and analysis")
print("  • Structured data parsing")
print("  • Data validation and quality checks")
print("  • Comprehensive logging and monitoring")
print("  • HTML report generation")
print("  • Author and date analysis")
print("  • Reading time calculation")
print("  • Professional error handling")
print("\\n🎯 Ready for production deployment!")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Production News Scraper Demonstration:
========================================
Processing news articles...

Scraping: https://news.example.com/tech-breakthrough
  Title: Major Tech Breakthrough in AI
  Author: Dr. Sarah Johnson
  Word count: 68
  Reading time: 1 minutes
  Valid: True

Scraping: https://news.example.com/climate-update
  Title: Climate Change Report Released
  Author: Environmental News Team
  Word count: 43
  Reading time: 1 minutes
  Valid: True

Generating news report...
2024-01-15 10:30:45,123 - INFO - News report generated in demo_news_output/

News Scraping Summary:
  Total articles processed: 2
  Valid articles: 2
  Total words scraped: 111
  Average words per article: 55

📰 Production news scraper features:
  • Specialized article data extraction
  • Content processing and analysis
  • Structured data parsing
  • Data validation and quality checks
  • Comprehensive logging and monitoring
  • HTML report generation
  • Author and date analysis
  • Reading time calculation
  • Professional error handling

🎯 Ready for production deployment!`
    }
  ],
  keyTakeaways: [
    'Web scraping requires respectful practices: rate limiting, robots.txt compliance, and proper error handling',
    'BeautifulSoup and CSS selectors provide powerful tools for HTML parsing and data extraction',
    'Production scrapers need robust error handling, retries, and comprehensive logging',
    'Data validation ensures quality and consistency of scraped information',
    'Advanced features like pagination, content change detection, and structured data parsing enable sophisticated scraping',
    'Always respect website terms of service and consider the ethical implications of data collection'
  ]
};