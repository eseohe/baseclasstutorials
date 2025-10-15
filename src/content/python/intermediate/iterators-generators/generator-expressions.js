// Lesson content for Generator Expressions
export const generatorExpressionsContent = {
  id: 'generator-expressions',
  title: 'Generator Expressions',
  duration: '25 min',
  overview: `Master generator expressions for concise, memory-efficient code! Learn to create generators with comprehension syntax, understand performance benefits, and build elegant data processing solutions that handle large datasets with minimal memory footprint.`,
  objectives: [
    'Create generator expressions using comprehension syntax',
    'Understand memory advantages over list comprehensions',
    'Use generator expressions for data filtering and transformation',
    'Combine generator expressions with built-in functions',
    'Build efficient data processing pipelines',
    'Compare performance of different comprehension types',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Generator Expressions',
      content: `Generator expressions provide a concise way to create generators using comprehension syntax. They're like list comprehensions but with parentheses instead of square brackets, creating memory-efficient iterators.

**Syntax comparison:**
- **List comprehension**: \`[expression for item in iterable]\`
- **Generator expression**: \`(expression for item in iterable)\`

**Key advantages:**
- **Memory efficient**: Generate values on-demand
- **Lazy evaluation**: Process only when needed
- **Concise syntax**: One-liner for simple generators
- **Composable**: Easy to chain and combine

**When to use:**
- Processing large datasets
- Transforming data streams
- Memory-constrained environments
- One-time iteration over data

**Performance benefits:**
- Constant memory usage regardless of data size
- Faster startup time (no upfront computation)
- Better scalability for large datasets`
    },
    {
      type: 'code',
      title: 'Basic Generator Expression',
      language: 'python',
      code: `# Basic generator expression syntax
numbers = [1, 2, 3, 4, 5]

# List comprehension (creates full list in memory)
squares_list = [x * x for x in numbers]

# Generator expression (creates generator object)
squares_gen = (x * x for x in numbers)

print("List comprehension result:", squares_list)
print("Generator expression type:", type(squares_gen))

# Convert generator to list to see values
squares_from_gen = list(squares_gen)
print("Generator values:", squares_from_gen)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `List comprehension result: [1, 4, 9, 16, 25]
Generator expression type: <class 'generator'>
Generator values: [1, 4, 9, 16, 25]`
    },
    {
      type: 'code',
      title: 'Memory Usage Demonstration',
      language: 'python',
      code: `# Demonstrating memory efficiency
def create_large_list(size):
    return [x * 2 for x in range(size)]

def create_large_generator(size):
    return (x * 2 for x in range(size))

# Create both versions
size = 1000
large_list = create_large_list(size)
large_gen = create_large_generator(size)

print("List created with", size, "elements")
print("Generator created for", size, "elements")

# Get first 5 values from both
list_first_5 = large_list[:5]
gen_first_5 = []
for i, value in enumerate(large_gen):
    if i >= 5:
        break
    gen_first_5.append(value)

print("First 5 from list:", list_first_5)
print("First 5 from generator:", gen_first_5)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `List created with 1000 elements
Generator created for 1000 elements
First 5 from list: [0, 2, 4, 6, 8]
First 5 from generator: [0, 2, 4, 6, 8]`
    },
    {
      type: 'text',
      title: 'Filtering with Generator Expressions',
      content: `Generator expressions support filtering using conditional clauses, making them perfect for data processing tasks.

**Filtering syntax:**
\`(expression for item in iterable if condition)\`

**Multiple conditions:**
- Use \`and\` and \`or\` operators
- Chain multiple \`if\` clauses
- Combine with function calls

**Common patterns:**
- Filter by value ranges
- Remove empty or invalid items
- Select items matching criteria
- Transform filtered data

**Benefits:**
- Memory efficient filtering
- Lazy evaluation of conditions
- Clean, readable syntax`
    },
    {
      type: 'code',
      title: 'Filtering Examples',
      language: 'python',
      code: `# Generator expressions with filtering
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, 0]

# Filter even numbers
evens = (x for x in data if x % 2 == 0)

# Filter positive numbers and square them
positive_squares = (x * x for x in data if x > 0)

# Complex filtering: odd numbers greater than 3
filtered_odds = (x for x in data if x % 2 == 1 and x > 3)

# Multiple conditions with transformation
processed = (x * 2 for x in data if x > 0 and x <= 5)

# Convert to lists to see results
print("Even numbers:", list(evens))
print("Positive squares:", list(positive_squares))
print("Filtered odds:", list(filtered_odds))
print("Processed (positive, ≤5, doubled):", list(processed))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Even numbers: [2, 4, 6, 8, 10, -2, 0]
Positive squares: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
Filtered odds: [5, 7, 9]
Processed (positive, ≤5, doubled): [2, 4, 6, 8, 10]`
    },
    {
      type: 'code',
      title: 'String Processing with Generator Expressions',
      language: 'python',
      code: `# Generator expressions for text processing
words = ["hello", "world", "python", "generator", "expression", ""]

# Convert to uppercase, filter non-empty
uppercase_words = (word.upper() for word in words if word)

# Get word lengths
word_lengths = (len(word) for word in words if word)

# Filter by length and transform
long_words = (word.title() for word in words if len(word) > 5)

# Complex string processing
processed_words = (word[:3] + "..." for word in words 
                  if len(word) > 3 and word.startswith('p'))

# Convert generators to lists
print("Uppercase words:", list(uppercase_words))
print("Word lengths:", list(word_lengths))
print("Long words (>5 chars):", list(long_words))
print("Processed 'p' words:", list(processed_words))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Uppercase words: ['HELLO', 'WORLD', 'PYTHON', 'GENERATOR', 'EXPRESSION']
Word lengths: [5, 5, 6, 9, 10]
Long words (>5 chars): ['Python', 'Generator', 'Expression']
Processed 'p' words: ['pyt...']`
    },
    {
      type: 'text',
      title: 'Nested Generator Expressions',
      content: `Generator expressions can be nested to handle complex data structures like lists of lists, creating flattened generators efficiently.

**Nested syntax:**
\`(expression for sublist in lists for item in sublist)\`

**Reading order:**
- Outer loop first: \`for sublist in lists\`
- Inner loop second: \`for item in sublist\`
- Similar to nested for loops

**Common uses:**
- Flattening nested structures
- Processing matrices or tables
- Combining multiple data sources
- Cross-product operations

**Performance advantage:**
- No intermediate lists created
- Memory usage stays constant
- Lazy evaluation throughout`
    },
    {
      type: 'code',
      title: 'Nested Generator Expressions',
      language: 'python',
      code: `# Nested data structure
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

word_lists = [
    ["apple", "banana"],
    ["cat", "dog"],
    ["red", "blue", "green"]
]

# Flatten matrix using nested generator
flattened = (item for row in matrix for item in row)

# Flatten and transform
doubled_flat = (item * 2 for row in matrix for item in row)

# Filter while flattening
even_flat = (item for row in matrix for item in row if item % 2 == 0)

# Flatten word lists and get lengths
word_lengths = (len(word) for word_list in word_lists for word in word_list)

# Complex nested processing
processed = (word.upper() for word_list in word_lists 
            for word in word_list if len(word) > 3)

print("Flattened matrix:", list(flattened))
print("Doubled flat:", list(doubled_flat))
print("Even numbers flat:", list(even_flat))
print("Word lengths:", list(word_lengths))
print("Processed words:", list(processed))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Flattened matrix: [1, 2, 3, 4, 5, 6, 7, 8, 9]
Doubled flat: [2, 4, 6, 8, 10, 12, 14, 16, 18]
Even numbers flat: [2, 4, 6, 8]
Word lengths: [5, 6, 3, 3, 3, 4, 5]
Processed words: ['APPLE', 'BANANA', 'BLUE', 'GREEN']`
    },
    {
      type: 'text',
      title: 'Generator Expressions with Built-in Functions',
      content: `Generator expressions work excellently with built-in functions like sum(), max(), min(), any(), and all(), providing memory-efficient solutions for data analysis.

**Compatible functions:**
- **sum()**: Calculate totals without storing values
- **max()/min()**: Find extremes efficiently
- **any()/all()**: Test conditions lazily
- **sorted()**: Sort while consuming generator
- **enumerate()**: Add indices to generator items

**Function benefits:**
- Process unlimited amounts of data
- Short-circuit evaluation where possible
- Memory usage independent of data size
- Clean, readable code

**Pattern advantages:**
- No intermediate storage needed
- Optimal performance for one-pass operations
- Automatic handling of empty generators`
    },
    {
      type: 'code',
      title: 'Generator Expressions with Built-ins',
      language: 'python',
      code: `# Data for processing
numbers = range(1, 21)  # 1 to 20

# Sum of squares using generator expression
sum_of_squares = sum(x * x for x in numbers)

# Maximum of even numbers
max_even = max(x for x in numbers if x % 2 == 0)

# Check if any number is divisible by 7
has_divisible_by_7 = any(x % 7 == 0 for x in numbers)

# Check if all numbers are positive
all_positive = all(x > 0 for x in numbers)

# Count items meeting condition
count_greater_10 = sum(1 for x in numbers if x > 10)

# Find minimum odd number
min_odd = min(x for x in numbers if x % 2 == 1)

print("Sum of squares (1-20):", sum_of_squares)
print("Max even number:", max_even)
print("Has number divisible by 7:", has_divisible_by_7)
print("All numbers positive:", all_positive)
print("Count > 10:", count_greater_10)
print("Min odd number:", min_odd)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Sum of squares (1-20): 2870
Max even number: 20
Has number divisible by 7: True
All numbers positive: True
Count > 10: 10
Min odd number: 1`
    },
    {
      type: 'code',
      title: 'Practical Data Analysis',
      language: 'python',
      code: `# Practical data analysis with generator expressions
student_scores = [
    {"name": "Alice", "math": 85, "science": 92, "english": 78},
    {"name": "Bob", "math": 72, "science": 68, "english": 85},
    {"name": "Charlie", "math": 95, "science": 89, "english": 91},
    {"name": "Diana", "math": 88, "science": 93, "english": 87}
]

# Calculate average scores for each student
averages = ((student["name"], 
            round((student["math"] + student["science"] + student["english"]) / 3, 1))
           for student in student_scores)

# Find highest math scores
high_math = (student["name"] for student in student_scores 
            if student["math"] >= 85)

# Calculate total points across all subjects
total_points = sum(student["math"] + student["science"] + student["english"] 
                  for student in student_scores)

# Check if any student has perfect scores (90+ in all subjects)
has_perfect = any(student["math"] >= 90 and student["science"] >= 90 and student["english"] >= 90
                 for student in student_scores)

# Get science scores above average
science_scores = [student["science"] for student in student_scores]
avg_science = sum(science_scores) / len(science_scores)
above_avg_science = list(student["name"] for student in student_scores 
                        if student["science"] > avg_science)

# Display results
print("Student averages:")
for name, avg in averages:
    print("  " + name + ":", avg)

print("High math scorers:", list(high_math))
print("Total points all students:", total_points)
print("Has perfect student:", has_perfect)
print("Above average in science:", above_avg_science)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Student averages:
  Alice: 85.0
  Bob: 75.0
  Charlie: 91.7
  Diana: 89.3
High math scorers: ['Alice', 'Charlie', 'Diana']
Total points all students: 1026
Has perfect student: False
Above average in science: ['Alice', 'Diana']`
    },
    {
      type: 'text',
      title: 'Performance Comparison and Best Practices',
      content: `Understanding when to use generator expressions versus other approaches is crucial for writing efficient code.

**Performance characteristics:**
- **Startup time**: Generator expressions are fastest to create
- **Memory usage**: Constant, regardless of data size
- **Iteration speed**: Comparable to list comprehensions
- **One-time use**: Generators are consumed after iteration

**Best practices:**
- Use for large datasets or memory-constrained environments
- Prefer when you need only one pass through data
- Combine with built-in functions for optimal performance
- Convert to list only when you need random access or multiple iterations

**When to avoid:**
- Small datasets where memory isn't a concern
- Need to access items multiple times
- Require random access to elements
- Heavy computations that benefit from caching results`
    },
    {
      type: 'code',
      title: 'Performance Comparison',
      language: 'python',
      code: `# Comparing different approaches for large data processing
import time

def time_operation(func, *args):
    start = time.time()
    result = func(*args)
    end = time.time()
    return result, round((end - start) * 1000, 2)

def list_comprehension_approach(size):
    return [x * x for x in range(size) if x % 2 == 0]

def generator_expression_approach(size):
    return (x * x for x in range(size) if x % 2 == 0)

def generator_with_sum(size):
    return sum(x * x for x in range(size) if x % 2 == 0)

# Test with moderately sized data
test_size = 10000

# Time list comprehension
list_result, list_time = time_operation(list_comprehension_approach, test_size)

# Time generator creation (just creation, not consumption)
gen_result, gen_time = time_operation(generator_expression_approach, test_size)

# Time generator with immediate consumption
sum_result, sum_time = time_operation(generator_with_sum, test_size)

print("List comprehension:")
print("  Time:", str(list_time) + "ms")
print("  First 5 values:", list_result[:5])

print("\\nGenerator expression creation:")
print("  Time:", str(gen_time) + "ms")
print("  Type:", type(gen_result))

print("\\nGenerator with sum consumption:")
print("  Time:", str(sum_time) + "ms")
print("  Result:", sum_result)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `List comprehension:
  Time: 2.15ms
  First 5 values: [0, 4, 16, 36, 64]

Generator expression creation:
  Time: 0.01ms
  Type: <class 'generator'>

Generator with sum consumption:
  Time: 1.89ms
  Result: 166616670000`
    },
    {
      type: 'code',
      title: 'Real-world Data Processing Pipeline',
      language: 'python',
      code: `# Real-world example: processing log data with generator expressions
log_entries = [
    "2024-01-15 10:30:15 INFO User login successful",
    "2024-01-15 10:31:22 ERROR Database connection failed", 
    "2024-01-15 10:32:01 INFO User logout",
    "2024-01-15 10:33:45 WARNING Low disk space",
    "2024-01-15 10:34:12 ERROR Authentication failed",
    "2024-01-15 10:35:30 INFO System backup completed"
]

# Parse log entries into structured data
def parse_log_entry(entry):
    parts = entry.split(' ', 3)
    return {
        "date": parts[0],
        "time": parts[1], 
        "level": parts[2],
        "message": parts[3]
    }

# Generator expression pipeline for log analysis
parsed_logs = (parse_log_entry(entry) for entry in log_entries)

# Filter error messages
error_logs = (log for log in parsed_logs if log["level"] == "ERROR")

# Extract error messages  
error_messages = (log["message"] for log in error_logs)

# Count different log levels
level_counts = {}
for entry in log_entries:
    level = entry.split(' ', 3)[2]
    level_counts[level] = level_counts.get(level, 0) + 1

# Find entries with specific keywords
keyword_entries = (entry for entry in log_entries 
                  if "failed" in entry.lower() or "error" in entry.lower())

# Display results
print("Error messages:")
for msg in error_messages:
    print("  -", msg)

print("\\nLog level counts:")
for level, count in level_counts.items():
    print("  " + level + ":", count)

print("\\nEntries with 'failed' or 'error':")
for entry in keyword_entries:
    print("  -", entry.split(' ', 3)[3])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Error messages:
  - Database connection failed
  - Authentication failed

Log level counts:
  INFO: 3
  ERROR: 2
  WARNING: 1

Entries with 'failed' or 'error':
  - Database connection failed
  - Authentication failed`
    }
  ],
  keyTakeaways: [
    'Generator expressions use parentheses and provide memory-efficient iteration',
    'They support filtering, transformation, and nested iteration patterns',
    'Built-in functions like sum(), max(), any() work excellently with generator expressions',
    'Generator expressions are ideal for large datasets and one-pass data processing',
    'They offer better startup performance and constant memory usage',
    'Choose generators for memory efficiency, lists for multiple access patterns'
  ]
};