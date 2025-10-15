// Lesson content for Working with JSON and CSV
export const jsonCsvContent = {
  id: 'json-csv',
  title: 'Working with JSON and CSV',
  duration: '30 min',
  overview: `Master working with structured data formats! Learn to read, write, and manipulate JSON and CSV files - two of the most common data exchange formats in modern programming.`,
  objectives: [
    'Understand JSON format and when to use it for data storage',
    'Read and write JSON files using the json module',
    'Work with CSV files using the csv module',
    'Convert between Python data structures and file formats',
    'Handle common errors and edge cases in data file processing',
    'Apply JSON and CSV handling to real-world data scenarios',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to JSON and CSV',
      content: `JSON (JavaScript Object Notation) and CSV (Comma-Separated Values) are two fundamental data formats for storing and exchanging information.

**JSON (JavaScript Object Notation):**
- Human-readable text format
- Supports nested structures (objects, arrays)
- Perfect for configuration files, APIs, structured data
- Native Python support with json module

**CSV (Comma-Separated Values):**
- Simple tabular data format
- Each line represents a row, columns separated by commas
- Perfect for spreadsheet data, simple datasets
- Native Python support with csv module

**When to use JSON:**
- Complex nested data structures
- Configuration files and settings
- API responses and requests
- Hierarchical data

**When to use CSV:**
- Tabular data (rows and columns)
- Data exchange with Excel/spreadsheet applications
- Simple datasets without nesting
- Data analysis and reporting`
    },
    {
      type: 'text',
      title: 'Working with JSON Files',
      content: `JSON maps naturally to Python data structures: objects become dictionaries, arrays become lists, and values remain as strings, numbers, booleans, or None.

**JSON to Python mapping:**
- JSON object → Python dictionary
- JSON array → Python list  
- JSON string → Python string
- JSON number → Python int/float
- JSON true/false → Python True/False
- JSON null → Python None`
    },
    {
      type: 'code',
      title: 'Writing Data to JSON Files',
      language: 'python',
      code: `# Writing Python data to JSON file
import json

student_data = {
    "name": "Alice Johnson",
    "age": 20,
    "courses": ["Python", "Data Science", "Math"],
    "active": True
}

with open("student.json", "w") as file:
    json.dump(student_data, file)

print("Data written to JSON file")
print("Student name:", student_data["name"])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Data written to JSON file
Student name: Alice Johnson`
    },
    {
      type: 'code',
      title: 'Reading Data from JSON Files',
      language: 'python',
      code: `# Reading JSON data back into Python
import json

with open("student.json", "r") as file:
    loaded_data = json.load(file)

print("Loaded student:", loaded_data["name"])
print("Number of courses:", len(loaded_data["courses"]))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Loaded student: Alice Johnson
Number of courses: 3`
    },
    {
      type: 'code',
      title: 'Working with JSON Strings',
      language: 'python',
      code: `# Converting between JSON strings and Python objects
import json

data = {"product": "laptop", "price": 999.99, "in_stock": True}
json_string = json.dumps(data)
parsed_data = json.loads(json_string)

print("JSON string:", json_string)
print("Parsed price:", parsed_data["price"])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `JSON string: {"product": "laptop", "price": 999.99, "in_stock": true}
Parsed price: 999.99`
    },
    {
      type: 'code',
      title: 'Pretty-Printing JSON',
      language: 'python',
      code: `# Creating readable JSON with formatting
import json

data = {"users": [{"name": "Alice", "age": 25}, {"name": "Bob", "age": 30}]}
pretty_json = json.dumps(data, indent=2)

print("Pretty formatted JSON:")
print(pretty_json[:50] + "...")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Pretty formatted JSON:
{
  "users": [
    {
      "name": "Alice",
      "age":...`
    },
    {
      type: 'code',
      title: 'Handling JSON Errors',
      language: 'python',
      code: `# Safe JSON parsing with error handling
import json

invalid_json = '{"name": "Alice", "age": 25,}'  # Invalid trailing comma

try:
    data = json.loads(invalid_json)
    print("JSON parsed successfully")
except json.JSONDecodeError:
    print("Invalid JSON format detected")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Invalid JSON format detected`
    },
    {
      type: 'text',
      title: 'Working with CSV Files',
      content: `CSV files are perfect for tabular data. Python's csv module handles the complexities of parsing CSV format, including quoted fields, embedded commas, and different delimiters.

**Key concepts:**
- **Reader**: Reads CSV data row by row
- **Writer**: Writes data to CSV format
- **DictReader**: Reads CSV with headers as dictionary keys
- **DictWriter**: Writes dictionaries to CSV with headers
- **Delimiter**: Character separating fields (usually comma)
- **Quoting**: Handling special characters in data`
    },
    {
      type: 'code',
      title: 'Writing CSV Files',
      language: 'python',
      code: `# Writing data to CSV file
import csv

students = [
    ["Name", "Age", "Grade"],
    ["Alice", 20, "A"],
    ["Bob", 19, "B"],
    ["Charlie", 21, "A"]
]

with open("students.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(students)

print("CSV file created successfully")
print("Number of students:", len(students) - 1)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `CSV file created successfully
Number of students: 3`
    },
    {
      type: 'code',
      title: 'Reading CSV Files',
      language: 'python',
      code: `# Reading CSV data
import csv

with open("students.csv", "r") as file:
    reader = csv.reader(file)
    rows = list(reader)

print("Header row:", rows[0])
print("First student:", rows[1])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Header row: ['Name', 'Age', 'Grade']
First student: ['Alice', '20', 'A']`
    },
    {
      type: 'code',
      title: 'Using CSV DictReader',
      language: 'python',
      code: `# Reading CSV as dictionaries (easier to work with)
import csv

with open("students.csv", "r") as file:
    reader = csv.DictReader(file)
    students = list(reader)

print("First student name:", students[0]["Name"])
print("First student age:", students[0]["Age"])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `First student name: Alice
First student age: 20`
    },
    {
      type: 'code',
      title: 'Writing CSV with DictWriter',
      language: 'python',
      code: `# Writing dictionaries to CSV
import csv

products = [
    {"name": "Laptop", "price": 999.99, "category": "Electronics"},
    {"name": "Book", "price": 15.99, "category": "Education"}
]

with open("products.csv", "w", newline="") as file:
    fieldnames = ["name", "price", "category"]
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(products)

print("Products CSV created")
print("Number of products:", len(products))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Products CSV created
Number of products: 2`
    },
    {
      type: 'code',
      title: 'Handling Different CSV Formats',
      language: 'python',
      code: `# Working with different delimiters and formats
import csv

# Data with semicolon delimiter
data = "Name;Age;City\\nAlice;25;New York\\nBob;30;London"
with open("custom.csv", "w") as file:
    file.write(data)

with open("custom.csv", "r") as file:
    reader = csv.reader(file, delimiter=";")
    rows = list(reader)

print("Custom delimiter data:")
print("First row:", rows[1])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Custom delimiter data:
First row: ['Alice', '25', 'New York']`
    },
    {
      type: 'text',
      title: 'Converting Between Formats',
      content: `Often you'll need to convert data between JSON and CSV formats, or transform the structure of your data for different use cases.

**Common conversions:**
- **CSV to JSON**: Convert tabular data to structured format
- **JSON to CSV**: Flatten structured data for analysis
- **Data cleaning**: Remove invalid entries, format values
- **Data transformation**: Change structure, add computed fields`
    },
    {
      type: 'code',
      title: 'Converting CSV to JSON',
      language: 'python',
      code: `# Converting CSV data to JSON format
import csv
import json

# Read CSV data
with open("students.csv", "r") as file:
    reader = csv.DictReader(file)
    students_list = list(reader)

# Write as JSON
with open("students.json", "w") as file:
    json.dump(students_list, file, indent=2)

print("CSV converted to JSON")
print("First student in JSON:", students_list[0])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `CSV converted to JSON
First student in JSON: {'Name': 'Alice', 'Age': '20', 'Grade': 'A'}`
    },
    {
      type: 'code',
      title: 'Converting JSON to CSV',
      language: 'python',
      code: `# Converting JSON data to CSV format
import json
import csv

# Read JSON data
with open("students.json", "r") as file:
    students_data = json.load(file)

# Write as CSV
with open("converted_students.csv", "w", newline="") as file:
    if students_data:
        fieldnames = students_data[0].keys()
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(students_data)

print("JSON converted to CSV")
print("Number of records:", len(students_data))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `JSON converted to CSV
Number of records: 3`
    },
    {
      type: 'text',
      title: 'Practical Applications',
      content: `JSON and CSV handling is essential for data-driven applications, APIs, data analysis, and system integration.

**Real-world use cases:**
- **API integration**: Consuming and producing JSON APIs
- **Data analysis**: Processing CSV datasets for insights
- **Configuration management**: Using JSON for app settings
- **Data export/import**: Converting between formats for different systems
- **Report generation**: Creating CSV reports from application data
- **Backup systems**: Storing application state in JSON format`
    },
    {
      type: 'code',
      title: 'Practical Example: Sales Data Processing',
      language: 'python',
      code: `# Processing sales data from CSV
import csv

# Sample sales data
sales_data = [
    ["Product", "Quantity", "Price"],
    ["Laptop", "2", "999.99"],
    ["Mouse", "5", "25.50"]
]

with open("sales.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(sales_data)

# Calculate totals
total_revenue = 0
with open("sales.csv", "r") as file:
    reader = csv.DictReader(file)
    for row in reader:
        revenue = int(row["Quantity"]) * float(row["Price"])
        total_revenue += revenue

print("Total revenue calculated:", total_revenue)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Total revenue calculated: 2127.48`
    },
    {
      type: 'code',
      title: 'Practical Example: Configuration Management',
      language: 'python',
      code: `# Managing application configuration with JSON
import json

config = {
    "database": {
        "host": "localhost",
        "port": 5432,
        "name": "myapp"
    },
    "features": {
        "debug": True,
        "max_users": 1000
    }
}

with open("app_config.json", "w") as file:
    json.dump(config, file, indent=2)

print("Configuration saved")
print("Debug mode:", config["features"]["debug"])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Configuration saved
Debug mode: True`
    },
    {
      type: 'text',
      title: 'Key Takeaways',
      content: `🎯 **Key Points to Remember:**

**JSON Operations:**
- **json.dump(data, file)**: Write Python object to JSON file
- **json.load(file)**: Read JSON file to Python object
- **json.dumps(data)**: Convert Python object to JSON string
- **json.loads(string)**: Parse JSON string to Python object

**CSV Operations:**
- **csv.writer()**: Write rows to CSV
- **csv.reader()**: Read CSV rows
- **csv.DictWriter()**: Write dictionaries with headers
- **csv.DictReader()**: Read CSV as dictionaries

**Best Practices:**
- Use **DictReader/DictWriter** for easier column access
- Always specify **newline=""** when writing CSV files
- Handle **json.JSONDecodeError** for invalid JSON
- Use **indent** parameter for readable JSON output
- Specify **delimiter** for non-standard CSV formats

**Format Selection:**
- Use **JSON** for nested/hierarchical data, APIs, configuration
- Use **CSV** for tabular data, spreadsheet compatibility, simple datasets

Mastering JSON and CSV handling opens doors to data processing, API integration, and system interoperability!`
    }
  ]
};