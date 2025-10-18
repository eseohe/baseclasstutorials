export const dataPipelineContent = {
  id: 'data-pipeline',
  title: 'Simple ETL Pipeline Project',
  duration: '30 min',
  overview: `Learn the basics of ETL (Extract, Transform, Load) by building a simple pipeline in Python. See how data is collected, cleaned, and saved for analysis—just like in real-world data engineering!`,
  objectives: [
    'Understand the ETL process and its importance',
    'Extract data from a simple source (CSV file)',
    'Transform data with basic cleaning and calculations',
    'Load data into a new file (CSV or JSON)',
    'Relate the simple pipeline to real-world ETL scenarios'
  ],
  sections: [
    {
      type: 'text',
      title: 'What is ETL?',
      content: `ETL stands for Extract, Transform, Load. It is a common process in data engineering and analytics for moving and preparing data.

- **Extract:** Get data from a source (file, database, API, etc.)
- **Transform:** Clean, filter, or modify the data
- **Load:** Save the processed data to a destination (file, database, etc.)

ETL is used everywhere: business reporting, analytics, machine learning, and more.`
    },
    {
      type: 'text',
      title: 'Step 1: Extract Data (from CSV)',
      content: `Let's start by extracting data from a simple CSV file. Imagine we have a file called \`sales.csv\` with this content:

\`\`\`csv
date,product,quantity,price
2024-01-01,Apple,10,0.5
2024-01-01,Banana,5,0.3
2024-01-02,Apple,7,0.5
2024-01-02,Banana,8,0.3
\`\`\`
`
    },
    {
      type: 'code',
      title: 'Extract: Read CSV',
      language: 'python',
      code: `import csv

input_file = 'sales.csv'
data = []

with open(input_file, newline='') as f:
    reader = csv.DictReader(f)
    for row in reader:
        data.append(row)

print(\"Extracted data:\")
for row in data:
    print(row)
`
    },
    {
      type: 'text',
      title: 'Step 2: Transform Data',
      content: `Now let's clean and transform the data. We'll:
- Convert quantity and price to numbers
- Calculate total sales for each row
- Filter out any rows with missing or invalid data`
    },
    {
      type: 'code',
      title: 'Transform: Clean and Calculate',
      language: 'python',
      code: `cleaned_data = []

for row in data:
    try:
        quantity = int(row['quantity'])
        price = float(row['price'])
        total = quantity * price
        cleaned_data.append({
            'date': row['date'],
            'product': row['product'],
            'quantity': quantity,
            'price': price,
            'total': total
        })
    except (ValueError, KeyError):
        # Skip rows with invalid data
        continue

print(\"Transformed data:\")
for row in cleaned_data:
    print(row)
`
    },
    {
      type: 'text',
      title: 'Step 3: Load Data (to JSON)',
      content: `Finally, let's load the cleaned data into a new file, \`sales_cleaned.json\`.`
    },
    {
      type: 'code',
      title: 'Load: Write JSON',
      language: 'python',
      code: `import json

output_file = 'sales_cleaned.json'
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(cleaned_data, f, indent=2)

print(f\"Loaded {len(cleaned_data)} rows to {output_file}\")
`
    },
    {
      type: 'output',
      title: 'Output (example)',
      content: `Extracted data:
{'date': '2024-01-01', 'product': 'Apple', 'quantity': '10', 'price': '0.5'}
{'date': '2024-01-01', 'product': 'Banana', 'quantity': '5', 'price': '0.3'}
...
Transformed data:
{'date': '2024-01-01', 'product': 'Apple', 'quantity': 10, 'price': 0.5, 'total': 5.0}
{'date': '2024-01-01', 'product': 'Banana', 'quantity': 5, 'price': 0.3, 'total': 1.5}
...
Loaded 4 rows to sales_cleaned.json`
    },
    {
      type: 'text',
      title: 'Real-World ETL Use Cases',
      content: `This simple ETL pipeline is the foundation for real-world data workflows. In practice, you might:

- **Extract** from databases, APIs, cloud storage, or streaming data
- **Transform** with complex cleaning, joining, aggregating, or enrichment
- **Load** into data warehouses, dashboards, or machine learning pipelines

**Examples:**
- A company extracts sales data from multiple stores, cleans and merges it, and loads it into a central database for reporting.
- A data scientist extracts tweets from Twitter's API, filters for keywords, and loads the results into a CSV for sentiment analysis.
- An analyst extracts customer data, anonymizes sensitive fields, and loads it into a dashboard for visualization.

**Key takeaway:**  
The ETL pattern is everywhere in data work. Start simple, and you can scale up to handle any data challenge!`
    }
  ]
};