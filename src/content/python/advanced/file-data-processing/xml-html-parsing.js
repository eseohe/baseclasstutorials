export const xmlHtmlParsingContent = {
  id: 'xml-html-parsing',
  title: 'XML and HTML Parsing (xml.etree, BeautifulSoup)',
  duration: '45 minutes',
  objectives: [
    'Parse XML documents with xml.etree',
    'Extract data from HTML with BeautifulSoup',
    'Handle malformed markup',
    'Navigate document structures'
  ],
  sections: [
    {
      type: 'overview',
      title: 'XML and HTML Parsing Libraries',
      content: `
Python provides several libraries for parsing XML and HTML:

- **xml.etree.ElementTree**: Built-in XML parser, fast and memory efficient, good for well-formed XML.
- **BeautifulSoup**: Handles malformed HTML/XML, easy navigation and searching, multiple parser backends.
- **lxml**: High performance, XPath support, C-based implementation.
`
    },
    {
      type: 'text',
      title: 'Preparing XML Files',
      content: `
XML data should be stored in a separate file, not as a string in your code. For example, create a file named \`library.xml\` with this content:

\`\`\`xml
&lt;library&gt;
    &lt;book id="1" genre="fiction"&gt;
    &nbsp;&nbsp;&lt;title&gt;The Great Gatsby&lt;/title&gt;
    &nbsp; &nbsp; &lt;author&gt;F. Scott Fitzgerald&lt;/author&gt;
    &nbsp; &nbsp; &lt;year&gt;1925&lt;/year&gt;
    &lt;/book&gt;
    &lt;book id="2" genre="science"&gt;
    &nbsp; &nbsp; &lt;title&gt;A Brief History of Time&lt;/title&gt;
    &nbsp; &nbsp; &lt;author&gt;Stephen Hawking&lt;/author&gt;
    &nbsp; &nbsp; &lt;year&gt;1988&lt;/year&gt;
    &lt;/book&gt;
&lt;/library&gt;
\`\`\`
`
    },
    {
      type: 'code',
      title: 'Parsing XML from a File',
      code: `
import xml.etree.ElementTree as ET

tree = ET.parse('library.xml')
root = tree.getroot()
`
    },
    {
      type: 'text',
      content: `This code loads and parses the XML file \`library.xml\`. The \`getroot()\` method gives you the root element for further navigation.`
    },
    {
      type: 'code',
      title: 'Extracting Data from XML',
      code: `
for book in root.findall('book'):
    title = book.find('title').text
    author = book.find('author').text
    print(f"{title} by {author}")
`
    },
    {
      type: 'text',
      content: `This loop finds all \`book\` elements and prints their title and author. Use \`find()\` to get child elements.`
    },
    {
      type: 'code',
      title: 'Finding Elements by Attribute',
      code: `
fiction_books = root.findall(".//book[@genre='fiction']")
for book in fiction_books:
    print(book.find('title').text)
`
    },
    {
      type: 'text',
      content: `This code finds all books with the genre "fiction" using an XPath-like query.`
    },
    {
      type: 'code',
      title: 'Creating and Saving XML',
      code: `
library = ET.Element('library')
book = ET.SubElement(library, 'book', id='3', genre='mystery')
ET.SubElement(book, 'title').text = 'The Maltese Falcon'
ET.SubElement(book, 'author').text = 'Dashiell Hammett'
ET.SubElement(book, 'year').text = '1930'

tree = ET.ElementTree(library)
tree.write('new_library.xml', encoding='utf-8', xml_declaration=True)
`
    },
    {
      type: 'text',
      content: `This code creates a new XML structure in memory and writes it to \`new_library.xml\`.`
    },
    {
      type: 'code',
      title: 'Modifying Existing XML',
      code: `
tree = ET.parse('library.xml')
root = tree.getroot()
root.find('book').find('year').text = '1926'
tree.write('updated_library.xml')
`
    },
    {
      type: 'text',
      content: `This code updates the year of the first book and saves the changes to a new file.`
    },
    {
      type: 'code',
      title: 'Parsing HTML with BeautifulSoup',
      code: `
from bs4 import BeautifulSoup

html = '''
<html>
<body>
    <h1>Welcome</h1>
    <p class="intro">This is a sample page.</p>
</body>
</html>
'''

soup = BeautifulSoup(html, 'html.parser')
print(soup.h1.text)
print(soup.find('p', class_='intro').text)
`
    },
    {
      type: 'text',
      content: `BeautifulSoup parses HTML strings and lets you easily extract elements by tag or class.`
    },
    {
      type: 'code',
      title: 'Finding All Links',
      code: `
links = soup.find_all('a')
for link in links:
    print(link.get('href'))
`
    },
    {
      type: 'text',
      content: `This code finds all anchor tags and prints their href attributes.`
    },
    {
      type: 'code',
      title: 'Using CSS Selectors',
      code: `
menu_items = soup.select('ul#menu li a')
for item in menu_items:
    print(item.text)
`
    },
    {
      type: 'text',
      content: `You can use CSS selectors to find elements in HTML, just like in web development.`
    },
    {
      type: 'code',
      title: 'Web Scraping Example',
      code: `
import requests
from bs4 import BeautifulSoup

url = 'http://quotes.toscrape.com/'
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

for quote in soup.select('.quote'):
    text = quote.select_one('.text').text
    author = quote.select_one('.author').text
    print(f"{text} - {author}")
`
    },
    {
      type: 'text',
      content: `This example fetches a real web page and extracts quotes and authors using BeautifulSoup.`
    },
    {
      type: 'text',
      title: 'Best Practices',
      content: `
- Store XML data in files, not as strings in code.
- Use ElementTree for well-formed XML, BeautifulSoup for messy HTML.
- Always check if elements exist before accessing them.
- For web scraping, respect robots.txt and site policies.
- Use CSS selectors for flexible HTML parsing.
`
    }
  ]
};