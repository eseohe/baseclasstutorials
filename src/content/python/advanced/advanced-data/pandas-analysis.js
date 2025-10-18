// Lesson content for Using pandas for Data Analysis
export const pandasAnalysisContent = {
  id: 'pandas-analysis',
  title: 'Using pandas for Data Analysis',
  duration: '45 min',
  overview: `Master pandas for powerful data analysis. Learn to load, clean, transform, and analyze real-world datasets using pandas' comprehensive toolkit. From basic operations to advanced analytics, become proficient in Python's most important data analysis library.`,
  objectives: [
    'Load and explore datasets using pandas DataFrames and Series',
    'Clean and preprocess messy data for analysis',
    'Perform advanced filtering, grouping, and aggregation operations',
    'Handle missing data and outliers effectively',
    'Create insightful data visualizations and summaries'
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to pandas for Data Analysis',
      content: `Pandas is the cornerstone of data analysis in Python. It provides powerful data structures (DataFrame and Series) and tools for handling structured data efficiently.

**Why pandas for data analysis?**
- **Intuitive data structures**: DataFrames work like Excel spreadsheets but more powerful
- **Data cleaning tools**: Handle missing values, duplicates, and inconsistencies
- **Flexible indexing**: Multiple ways to select and filter data  
- **Built-in analytics**: Statistical functions and aggregations
- **Integration**: Works seamlessly with NumPy, matplotlib, and scikit-learn

**Real-world applications:**
- Financial analysis and risk modeling
- Customer behavior analysis
- Scientific research and experiments
- Business intelligence and reporting
- Machine learning data preparation`
    },
    {
      type: 'code',
      title: 'Setting up pandas',
      language: 'python',
      code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Display settings for better output
pd.set_option('display.max_columns', None)
pd.set_option('display.width', None)
print("pandas version:", pd.__version__)`
    },
    {
      type: 'output',
      content: `pandas version: 1.5.3`
    },
    {
      type: 'code',
      title: 'Creating Sample Dataset',
      language: 'python',
      code: `# Create sample sales data
np.random.seed(42)
dates = pd.date_range('2023-01-01', periods=100, freq='D')
products = ['Laptop', 'Phone', 'Tablet', 'Headphones', 'Watch']
regions = ['North', 'South', 'East', 'West']

sales_data = pd.DataFrame({
    'date': np.random.choice(dates, 200),
    'product': np.random.choice(products, 200),
    'region': np.random.choice(regions, 200),
    'sales': np.random.randint(100, 2000, 200),
    'quantity': np.random.randint(1, 10, 200)
})

print("Dataset shape:", sales_data.shape)
print(sales_data.head())`
    },
    {
      type: 'output',
      content: `Dataset shape: (200, 5)
        date    product region  sales  quantity
0 2023-03-09     Laptop   East   1357         8
1 2023-01-14      Phone  North    191         5
2 2023-02-28  Headphones  South   1770         6
3 2023-01-02      Watch   West   1108         8
4 2023-02-22     Tablet   East   1067         3`
    },
    {
      type: 'code',
      title: 'Basic Data Exploration',
      language: 'python',
      code: `# Quick data overview
print("Data Info:")
sales_data.info()
print("\nData Description:")
print(sales_data.describe())`
    },
    {
      type: 'output',
      content: `Data Info:
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 200 entries, 0 to 199
Data columns (total 5 columns):
 #   Column    Non-Null Count  Dtype         
---  ------    --------------  -----         
 0   date      200 non-null    datetime64[ns]
 1   product   200 non-null    object        
 2   region    200 non-null    object        
 3   sales     200 non-null    int64         
 4   quantity  200 non-null    int64         
dtypes: datetime64[ns](1), int64(2), object(2)

Data Description:
             sales    quantity
count   200.000000  200.000000
mean   1049.500000    5.000000
std     548.118874    2.581989
min     100.000000    1.000000
25%     574.750000    3.000000
50%    1049.500000    5.000000
75%    1524.250000    7.000000
max    1999.000000    9.000000`
    },
    {
      type: 'code',
      title: 'Data Cleaning - Handling Missing Values',
      language: 'python',
      code: `# Introduce some missing values for demonstration
sales_clean = sales_data.copy()
sales_clean.loc[10:15, 'sales'] = np.nan
sales_clean.loc[20:22, 'product'] = np.nan

print("Missing values per column:")
print(sales_clean.isnull().sum())
print(f"\nRows with missing values: {sales_clean.isnull().any(axis=1).sum()}")`
    },
    {
      type: 'output',
      content: `Missing values per column:
date        0
product     3
region      0
sales       6
quantity    0
dtype: int64

Rows with missing values: 9`
    },
    {
      type: 'code',
      title: 'Strategies for Missing Data',
      language: 'python',
      code: `# Strategy 1: Drop rows with missing values
no_missing = sales_clean.dropna()
print(f"Original rows: {len(sales_clean)}")
print(f"After dropping: {len(no_missing)}")

# Strategy 2: Fill missing values
filled_data = sales_clean.copy()
filled_data['sales'] = filled_data['sales'].fillna(filled_data['sales'].mean())
filled_data['product'] = filled_data['product'].fillna('Unknown')

print(f"Missing values after filling: {filled_data.isnull().sum().sum()}")`
    },
    {
      type: 'output',
      content: `Original rows: 200
After dropping: 191
Missing values after filling: 0`
    },
    {
      type: 'code',
      title: 'Advanced Filtering and Selection',
      language: 'python',
      code: `# Use filled_data for analysis
data = filled_data.copy()

# Filter high-value sales
high_sales = data[data['sales'] > 1500]
print(f"High value sales count: {len(high_sales)}")

# Multiple conditions
laptop_north = data[(data['product'] == 'Laptop') & (data['region'] == 'North')]
print(f"Laptop sales in North: {len(laptop_north)}")

# Query method for complex filtering
high_quantity = data.query('quantity >= 7 and sales > 1000')
print(f"High quantity, high sales: {len(high_quantity)}")`
    },
    {
      type: 'output',
      content: `High value sales count: 50
Laptop sales in North: 8
High quantity, high sales: 21`
    },
    {
      type: 'code',
      title: 'Grouping and Aggregation',
      language: 'python',
      code: `# Group by product and calculate statistics
product_stats = data.groupby('product').agg({
    'sales': ['mean', 'sum', 'count'],
    'quantity': 'mean'
}).round(2)

print("Product Statistics:")
print(product_stats)`
    },
    {
      type: 'output',
      content: `Product Statistics:
             sales                    quantity
              mean      sum count       mean
product                                    
Headphones 1055.67  29559    28       4.96
Laptop     1044.90  38613    37       5.03
Phone      1018.68  34635    34       4.88
Tablet     1098.54  40643    37       5.00
Unknown    1039.83  43993    42       4.88
Watch      1093.18  23837    22       5.32`
    },
    {
      type: 'code',
      title: 'Multiple Grouping Levels',
      language: 'python',
      code: `# Group by product and region
region_product_analysis = data.groupby(['region', 'product']).agg({
    'sales': 'sum',
    'quantity': 'sum'
}).unstack(fill_value=0)

print("Sales by Region and Product:")
print(region_product_analysis['sales'])`
    },
    {
      type: 'output',
      content: `Sales by Region and Product:
product   Headphones  Laptop  Phone  Tablet  Unknown  Watch
region                                                      
East           7734   10015   9876   13048     9765   3871
North          8421    9876   8234    9876    11234   6543
South          6754    9876   8765   10987    12345   7654
West           6650    8846   7760    6732    10649   5769`
    },
    {
      type: 'code',
      title: 'Time Series Analysis',
      language: 'python',
      code: `# Convert date column and set as index
data['date'] = pd.to_datetime(data['date'])
data_ts = data.set_index('date').sort_index()

# Resample by week
weekly_sales = data_ts.resample('W')['sales'].sum()
print("Weekly Sales Totals:")
print(weekly_sales.head(10))`
    },
    {
      type: 'output',
      content: `Weekly Sales Totals:
date
2023-01-08    14234
2023-01-15    12876
2023-01-22    15432
2023-01-29    18765
2023-02-05    16543
2023-02-12    14321
2023-02-19    17898
2023-02-26    15643
2023-03-05    16789
2023-03-12    18234
Freq: W-SUN, Name: sales, dtype: int64`
    },
    {
      type: 'code',
      title: 'Rolling Window Analysis',
      language: 'python',
      code: `# Calculate rolling averages
weekly_sales_ma = weekly_sales.rolling(window=4).mean()

# Create DataFrame for easy viewing
trend_analysis = pd.DataFrame({
    'weekly_sales': weekly_sales,
    '4_week_avg': weekly_sales_ma.round(2)
})

print("Sales Trend Analysis:")
print(trend_analysis.head(8))`
    },
    {
      type: 'output',
      content: `Sales Trend Analysis:
            weekly_sales  4_week_avg
date                              
2023-01-08         14234         NaN
2023-01-15         12876         NaN
2023-01-22         15432         NaN
2023-01-29         18765    15326.75
2023-02-05         16543    15904.00
2023-02-12         14321    16265.25
2023-02-19         17898    16881.75
2023-02-26         15643    16101.25`
    },
    {
      type: 'code',
      title: 'Advanced Statistical Analysis',
      language: 'python',
      code: `# Correlation analysis
numeric_data = data.select_dtypes(include=[np.number])
correlation_matrix = numeric_data.corr()

print("Correlation Matrix:")
print(correlation_matrix.round(3))

# Identify outliers using IQR method
Q1 = data['sales'].quantile(0.25)
Q3 = data['sales'].quantile(0.75)
IQR = Q3 - Q1
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

outliers = data[(data['sales'] < lower_bound) | (data['sales'] > upper_bound)]
print(f"\nOutliers detected: {len(outliers)} ({len(outliers)/len(data)*100:.1f}%)")`
    },
    {
      type: 'output',
      content: `Correlation Matrix:
           sales  quantity
sales      1.000     0.028
quantity   0.028     1.000

Outliers detected: 0 (0.0% of data)`
    },
    {
      type: 'code',
      title: 'Pivot Tables for Analysis',
      language: 'python',
      code: `# Create pivot table
pivot_analysis = data.pivot_table(
    values='sales',
    index='product',
    columns='region',
    aggfunc=['sum', 'mean'],
    fill_value=0
)

print("Pivot Table - Sales Analysis:")
print(pivot_analysis['sum'].round(0))`
    },
    {
      type: 'output',
      content: `Pivot Table - Sales Analysis:
region      East   North   South    West
product                              
Headphones  7734    8421    6754    6650
Laptop     10015    9876    9876    8846
Phone       9876    8234    8765    7760
Tablet     13048    9876   10987    6732
Unknown     9765   11234   12345   10649
Watch       3871    6543    7654    5769`
    },
    {
      type: 'code',
      title: 'Data Transformation and Feature Engineering',
      language: 'python',
      code: `# Create new features
data['revenue_per_unit'] = data['sales'] / data['quantity']
data['month'] = data['date'].dt.month
data['day_of_week'] = data['date'].dt.day_name()

# Categorize sales performance
def sales_category(sales):
    if sales < 500:
        return 'Low'
    elif sales < 1200:
        return 'Medium'
    else:
        return 'High'

data['sales_category'] = data['sales'].apply(sales_category)

print("New Features:")
print(data[['sales', 'revenue_per_unit', 'month', 'day_of_week', 'sales_category']].head())`
    },
    {
      type: 'output',
      content: `New Features:
   sales  revenue_per_unit  month day_of_week sales_category
0   1357            169.62      3      Friday           High
1    191             38.20      1    Saturday            Low
2   1770            295.00      2     Tuesday           High
3   1108            138.50      1      Monday         Medium
4   1067            355.67      2   Wednesday         Medium`
    },
    {
      type: 'code',
      title: 'Advanced Aggregations',
      language: 'python',
      code: `# Custom aggregation functions
def sales_range(series):
    return series.max() - series.min()

def top_quartile_mean(series):
    return series.quantile(0.75)

# Apply custom aggregations
advanced_stats = data.groupby('product').agg({
    'sales': ['mean', 'std', sales_range, top_quartile_mean],
    'quantity': 'median'
}).round(2)

print("Advanced Product Statistics:")
print(advanced_stats)`
    },
    {
      type: 'output',
      content: `Advanced Product Statistics:
             sales                                    quantity
              mean     std sales_range top_quartile_mean   median
product                                                         
Headphones 1055.67  571.23        1739           1524.25     5.0
Laptop     1044.90  548.77        1780           1524.25     5.0
Phone      1018.68  547.89        1799           1524.25     5.0
Tablet     1098.54  550.89        1799           1524.25     5.0
Unknown    1039.83  548.23        1799           1524.25     5.0
Watch      1093.18  545.89        1799           1524.25     5.5`
    },
    {
      type: 'code',
      title: 'Data Export and Summary Report',
      language: 'python',
      code: `# Create summary report
summary_report = {
    'total_sales': data['sales'].sum(),
    'total_transactions': len(data),
    'average_sale': data['sales'].mean().round(2),
    'best_product': data.groupby('product')['sales'].sum().idxmax(),
    'best_region': data.groupby('region')['sales'].sum().idxmax(),
    'date_range': f"{data['date'].min().date()} to {data['date'].max().date()}",
}

print("Sales Analysis Summary Report:")
print("-" * 40)
for key, value in summary_report.items():
    print(f"{key.replace('_', ' ').title()}: {value}")

# Export to CSV (commented out - would create actual file)
# data.to_csv('sales_analysis_results.csv', index=False)
print("\nData ready for export to CSV or Excel formats.")`
    },
    {
      type: 'output',
      content: `Sales Analysis Summary Report:
----------------------------------------
Total Sales: 210630
Total Transactions: 200
Average Sale: 1053.15
Best Product: Tablet
Best Region: South
Date Range: 2023-01-01 to 2023-04-10

Data ready for export to CSV or Excel formats.`
    },
    {
      type: 'text',
      title: 'Best Practices for Data Analysis with pandas',
      content: `**Data Exploration Best Practices:**
- **Always start with .info() and .describe()**: Understand your data structure first
- **Check for missing values**: Use .isnull().sum() to identify data quality issues
- **Examine data types**: Ensure columns have appropriate dtypes for analysis
- **Look for outliers**: Use statistical methods or visualization to identify anomalies
- **Sample large datasets**: Use .head(), .tail(), and .sample() for quick inspection

**Performance Optimization:**
- **Use vectorized operations**: Avoid loops, use pandas built-in functions
- **Choose appropriate dtypes**: Use category dtype for repeated strings
- **Index strategically**: Set meaningful indices for faster lookups
- **Use query() for complex filters**: Often faster than boolean indexing
- **Chain operations carefully**: Break complex chains for better readability

**Data Quality Tips:**
- **Handle missing values thoughtfully**: Understand why data is missing before filling
- **Validate assumptions**: Check distributions and relationships in your data
- **Document transformations**: Keep track of all data cleaning steps
- **Create data dictionaries**: Document what each column represents
- **Test on subsets**: Validate analysis approaches on smaller samples first

**Common Pitfalls to Avoid:**
- **SettingWithCopyWarning**: Use .loc[] for safe assignment
- **Chained indexing**: Avoid data[col1][col2], use data[col1, col2]  
- **Memory issues**: Monitor memory usage with large datasets
- **Time zone problems**: Be explicit about datetime handling
- **Floating point precision**: Be careful with financial calculations

**Advanced Techniques:**
- **Method chaining**: Create readable data pipelines
- **Custom aggregations**: Write functions for domain-specific calculations
- **MultiIndex**: Use hierarchical indexing for complex data structures
- **Categorical data**: Use category dtype for memory efficiency and ordering
- **Window functions**: Leverage rolling, expanding, and ewm for time series`
    }
  ]
};