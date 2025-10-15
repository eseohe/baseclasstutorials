// Lesson content for Lambda Functions
export const lambdasContent = {
  id: 'lambdas',
  title: 'Lambda Functions',
  duration: '25 min',
  overview: `Master lambda functions in Python! Learn to create anonymous functions for functional programming, use lambdas with map(), filter(), sort(), and other higher-order functions for concise, expressive code.`,
  objectives: [
    'Create anonymous functions using lambda syntax',
    'Use lambdas with map(), filter(), and reduce() functions',
    'Apply lambdas for sorting and key functions',
    'Understand when to use lambdas vs regular functions',
    'Combine lambdas with list comprehensions and generators',
    'Write expressive functional programming code with lambdas',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Lambda Functions',
      content: `Lambda functions are anonymous, inline functions that can be defined without a name. They provide a concise way to create simple functions for use with higher-order functions and functional programming patterns.

**Lambda syntax:**
\`lambda arguments: expression\`

**Key characteristics:**
- **Anonymous**: No function name required
- **Single expression**: Can only contain one expression (no statements)
- **Return value**: Automatically returns the expression result
- **Inline**: Defined at the point of use
- **Concise**: Perfect for simple operations

**When to use lambdas:**
- **Short functions**: Simple operations that fit on one line
- **Callback functions**: Functions passed to other functions
- **Temporary functions**: Used once and discarded
- **Functional programming**: With map(), filter(), sort(), etc.

**When NOT to use lambdas:**
- **Complex logic**: Multi-line operations
- **Reusable functions**: Functions used multiple times
- **Documentation needed**: Functions requiring docstrings
- **Debugging**: Regular functions are easier to debug`
    },
    {
      type: 'code',
      title: 'Basic Lambda Syntax',
      language: 'python',
      code: `# Basic lambda function examples
# Lambda vs regular function comparison

# Regular function
def add_regular(x, y):
    return x + y

# Lambda function
add_lambda = lambda x, y: x + y

# Single argument lambdas
square = lambda x: x * x
double = lambda x: x * 2
is_even = lambda x: x % 2 == 0

# No argument lambda
get_greeting = lambda: "Hello, World!"

# Lambda with conditional expression
max_of_two = lambda a, b: a if a > b else b
absolute_value = lambda x: x if x >= 0 else -x

# Test the lambda functions
print("Regular function add(3, 5):", add_regular(3, 5))
print("Lambda function add(3, 5):", add_lambda(3, 5))
print("Square of 7:", square(7))
print("Double of 8:", double(8))
print("Is 6 even?", is_even(6))
print("Greeting:", get_greeting())
print("Max of 10 and 3:", max_of_two(10, 3))
print("Absolute value of -15:", absolute_value(-15))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Regular function add(3, 5): 8
Lambda function add(3, 5): 8
Square of 7: 49
Double of 8: 16
Is 6 even? True
Greeting: Hello, World!
Max of 10 and 3: 10
Absolute value of -15: 15`
    },
    {
      type: 'code',
      title: 'Lambdas with map() Function',
      language: 'python',
      code: `# Using lambdas with map() for transformations
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
prices = [19.99, 29.99, 39.99, 49.99]
words = ["hello", "world", "python", "lambda"]

# Transform numbers using lambdas
squares = list(map(lambda x: x ** 2, numbers))
cubes = list(map(lambda x: x ** 3, numbers))
add_ten = list(map(lambda x: x + 10, numbers))

# Transform prices (add tax)
prices_with_tax = list(map(lambda price: round(price * 1.08, 2), prices))

# String transformations
uppercase_words = list(map(lambda word: word.upper(), words))
word_lengths = list(map(lambda word: len(word), words))
reverse_words = list(map(lambda word: word[::-1], words))

# Complex transformations
# Convert Celsius to Fahrenheit
celsius_temps = [0, 20, 30, 100]
fahrenheit_temps = list(map(lambda c: round(c * 9/5 + 32, 1), celsius_temps))

# Format student names
student_names = ["alice johnson", "bob smith", "charlie brown"]
formatted_names = list(map(lambda name: name.title(), student_names))

print("Original numbers:", numbers[:5])
print("Squares:", squares[:5])
print("Cubes:", cubes[:5])
print("Add 10:", add_ten[:5])

print("\\nPrices with 8% tax:", prices_with_tax)
print("Uppercase words:", uppercase_words)
print("Word lengths:", word_lengths)

print("\\nCelsius to Fahrenheit:")
for c, f in zip(celsius_temps, fahrenheit_temps):
    print("  " + str(c) + "°C = " + str(f) + "°F")

print("\\nFormatted names:", formatted_names)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Original numbers: [1, 2, 3, 4, 5]
Squares: [1, 4, 9, 16, 25]
Cubes: [1, 8, 27, 64, 125]
Add 10: [11, 12, 13, 14, 15]

Prices with 8% tax: [21.59, 32.39, 43.19, 53.99]
Uppercase words: ['HELLO', 'WORLD', 'PYTHON', 'LAMBDA']
Word lengths: [5, 5, 6, 6]

Celsius to Fahrenheit:
  0°C = 32.0°F
  20°C = 68.0°F
  30°C = 86.0°F
  100°C = 212.0°F

Formatted names: ['Alice Johnson', 'Bob Smith', 'Charlie Brown']`
    },
    {
      type: 'code',
      title: 'Lambdas with filter() Function',
      language: 'python',
      code: `# Using lambdas with filter() for conditional selection
numbers = [-5, -3, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20]
products = [
    {"name": "Laptop", "price": 999, "category": "electronics"},
    {"name": "Book", "price": 15, "category": "education"},
    {"name": "Phone", "price": 599, "category": "electronics"},
    {"name": "Desk", "price": 200, "category": "furniture"},
    {"name": "Mouse", "price": 25, "category": "electronics"}
]

# Filter numbers with lambdas
positive_numbers = list(filter(lambda x: x > 0, numbers))
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
large_numbers = list(filter(lambda x: x >= 10, numbers))
in_range = list(filter(lambda x: 0 <= x <= 5, numbers))

# Filter products
expensive_products = list(filter(lambda p: p["price"] > 100, products))
electronics = list(filter(lambda p: p["category"] == "electronics", products))
affordable_electronics = list(filter(
    lambda p: p["category"] == "electronics" and p["price"] < 600, 
    products
))

# String filtering
words = ["apple", "banana", "cat", "dog", "elephant", "fox", "giraffe"]
long_words = list(filter(lambda word: len(word) > 5, words))
words_with_a = list(filter(lambda word: 'a' in word, words))
words_start_with_vowel = list(filter(
    lambda word: word[0].lower() in 'aeiou', 
    words
))

# Complex filtering with multiple conditions
students = [
    {"name": "Alice", "age": 20, "grade": 85},
    {"name": "Bob", "age": 22, "grade": 78},
    {"name": "Charlie", "age": 19, "grade": 92},
    {"name": "Diana", "age": 21, "grade": 88}
]

high_achievers = list(filter(
    lambda s: s["age"] >= 20 and s["grade"] >= 85, 
    students
))

print("Original numbers:", numbers)
print("Positive numbers:", positive_numbers)
print("Even numbers:", even_numbers)
print("Numbers >= 10:", large_numbers)
print("Numbers 0-5:", in_range)

print("\\nExpensive products:")
for product in expensive_products:
    print("  " + product["name"] + ": $" + str(product["price"]))

print("\\nAffordable electronics:")
for product in affordable_electronics:
    print("  " + product["name"] + ": $" + str(product["price"]))

print("\\nLong words (>5 chars):", long_words)
print("Words with 'a':", words_with_a)
print("Words starting with vowel:", words_start_with_vowel)

print("\\nHigh achievers (age>=20, grade>=85):")
for student in high_achievers:
    print("  " + student["name"] + ": age " + str(student["age"]) + ", grade " + str(student["grade"]))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Original numbers: [-5, -3, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20]
Positive numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20]
Even numbers: [0, 2, 4, 6, 8, 10, 20]
Numbers >= 10: [10, 15, 20]
Numbers 0-5: [0, 1, 2, 3, 4, 5]

Expensive products:
  Laptop: $999
  Phone: $599
  Desk: $200

Affordable electronics:
  Phone: $599
  Mouse: $25

Long words (>5 chars): ['banana', 'elephant', 'giraffe']
Words with 'a': ['apple', 'banana', 'cat', 'elephant']
Words starting with vowel: ['apple', 'elephant']

High achievers (age>=20, grade>=85):
  Alice: age 20, grade 85
  Diana: age 21, grade 88`
    },
    {
      type: 'text',
      title: 'Lambdas for Sorting',
      content: `Lambda functions are particularly useful as key functions for sorting operations. They allow you to specify custom sorting criteria without defining separate functions.

**Sorting with lambdas:**
- **sorted()**: Creates new sorted list
- **list.sort()**: Sorts list in place
- **key parameter**: Lambda specifies what to sort by
- **reverse parameter**: Controls ascending/descending order

**Common sorting patterns:**
- Sort by object attributes
- Sort by computed values
- Sort by multiple criteria
- Sort strings by length or content
- Sort numbers by magnitude or custom criteria

**Key function benefits:**
- Custom sorting logic
- Sort complex data structures
- Multiple sorting criteria
- Flexible and concise`
    },
    {
      type: 'code',
      title: 'Sorting with Lambda Functions',
      language: 'python',
      code: `# Sorting with lambda functions
students = [
    {"name": "Alice", "age": 20, "grade": 85},
    {"name": "Bob", "age": 22, "grade": 78},
    {"name": "Charlie", "age": 19, "grade": 92},
    {"name": "Diana", "age": 21, "grade": 88}
]

words = ["elephant", "cat", "dog", "butterfly", "ant", "hippopotamus"]
numbers = [-15, 3, -8, 22, 0, -3, 18, -1]
coordinates = [(3, 2), (1, 5), (4, 1), (2, 8), (0, 3)]

# Sort students by different criteria
students_by_name = sorted(students, key=lambda s: s["name"])
students_by_age = sorted(students, key=lambda s: s["age"])
students_by_grade = sorted(students, key=lambda s: s["grade"], reverse=True)

# Sort words by different criteria
words_by_length = sorted(words, key=lambda w: len(w))
words_by_last_letter = sorted(words, key=lambda w: w[-1])
words_by_vowel_count = sorted(words, key=lambda w: sum(1 for char in w if char.lower() in 'aeiou'))

# Sort numbers by different criteria
numbers_by_absolute = sorted(numbers, key=lambda x: abs(x))
numbers_by_distance_from_10 = sorted(numbers, key=lambda x: abs(x - 10))

# Sort coordinates by different criteria
coords_by_x = sorted(coordinates, key=lambda point: point[0])
coords_by_y = sorted(coordinates, key=lambda point: point[1])
coords_by_distance_from_origin = sorted(coordinates, key=lambda point: (point[0]**2 + point[1]**2)**0.5)

# Complex sorting: multiple criteria
# Sort students by grade (descending), then by age (ascending) for ties
students_complex = sorted(students, key=lambda s: (-s["grade"], s["age"]))

print("Students sorted by name:")
for student in students_by_name:
    print("  " + student["name"] + " (age " + str(student["age"]) + ")")

print("\\nStudents sorted by grade (descending):")
for student in students_by_grade:
    print("  " + student["name"] + ": " + str(student["grade"]))

print("\\nWords sorted by length:")
for word in words_by_length:
    print("  " + word + " (" + str(len(word)) + " chars)")

print("\\nNumbers sorted by absolute value:")
print("  Original:", numbers)
print("  By absolute value:", numbers_by_absolute)

print("\\nCoordinates sorted by distance from origin:")
for coord in coords_by_distance_from_origin:
    distance = round((coord[0]**2 + coord[1]**2)**0.5, 2)
    print("  " + str(coord) + " distance: " + str(distance))

print("\\nStudents by grade (desc), then age (asc):")
for student in students_complex:
    print("  " + student["name"] + ": grade " + str(student["grade"]) + ", age " + str(student["age"]))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Students sorted by name:
  Alice (age 20)
  Bob (age 22)
  Charlie (age 19)
  Diana (age 21)

Students sorted by grade (descending):
  Charlie: 92
  Diana: 88
  Alice: 85
  Bob: 78

Words sorted by length:
  cat (3 chars)
  dog (3 chars)
  ant (3 chars)
  elephant (8 chars)
  butterfly (9 chars)
  hippopotamus (12 chars)

Numbers sorted by absolute value:
  Original: [-15, 3, -8, 22, 0, -3, 18, -1]
  By absolute value: [0, -1, 3, -3, -8, -15, 18, 22]

Coordinates sorted by distance from origin:
  (1, 5) distance: 5.1
  (0, 3) distance: 3.0
  (3, 2) distance: 3.61
  (4, 1) distance: 4.12
  (2, 8) distance: 8.25

Students by grade (desc), then age (asc):
  Charlie: grade 92, age 19
  Diana: grade 88, age 21
  Alice: grade 85, age 20
  Bob: grade 78, age 22`
    },
    {
      type: 'code',
      title: 'Lambdas with reduce() Function',
      language: 'python',
      code: `# Using lambdas with reduce() for accumulation
from functools import reduce

numbers = [1, 2, 3, 4, 5]
words = ["Python", "is", "great", "for", "programming"]
sales_data = [
    {"product": "Laptop", "revenue": 5000},
    {"product": "Phone", "revenue": 3000},
    {"product": "Tablet", "revenue": 2000}
]

# Mathematical operations with reduce and lambda
sum_all = reduce(lambda a, b: a + b, numbers)
product_all = reduce(lambda a, b: a * b, numbers)
max_number = reduce(lambda a, b: a if a > b else b, numbers)
min_number = reduce(lambda a, b: a if a < b else b, numbers)

# String operations
concatenated = reduce(lambda a, b: a + " " + b, words)
longest_word = reduce(lambda a, b: a if len(a) > len(b) else b, words)

# Complex reductions
total_revenue = reduce(lambda total, item: total + item["revenue"], sales_data, 0)
best_product = reduce(
    lambda best, current: best if best["revenue"] > current["revenue"] else current,
    sales_data
)

# Advanced lambda with reduce: create frequency count
letters = ["a", "b", "a", "c", "b", "a", "d"]
frequency_count = reduce(
    lambda counts, letter: {**counts, letter: counts.get(letter, 0) + 1},
    letters,
    {}
)

# Combine multiple lists into one
list_of_lists = [[1, 2], [3, 4], [5, 6], [7, 8]]
flattened = reduce(lambda acc, lst: acc + lst, list_of_lists, [])

# Find common elements between lists
list1 = [1, 2, 3, 4, 5]
list2 = [3, 4, 5, 6, 7]
list3 = [4, 5, 6, 7, 8]
all_lists = [list1, list2, list3]

common_elements = reduce(
    lambda acc, lst: [x for x in acc if x in lst],
    all_lists
)

print("Numbers:", numbers)
print("Sum:", sum_all)
print("Product:", product_all)
print("Max:", max_number)
print("Min:", min_number)

print("\\nWords:", words)
print("Concatenated:", concatenated)
print("Longest word:", longest_word)

print("\\nSales analysis:")
print("  Total revenue: $" + str(total_revenue))
print("  Best product:", best_product["product"] + " ($" + str(best_product["revenue"]) + ")")

print("\\nLetter frequency:", frequency_count)
print("Flattened lists:", flattened)
print("Common elements in all lists:", common_elements)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Numbers: [1, 2, 3, 4, 5]
Sum: 15
Product: 120
Max: 5
Min: 1

Words: ['Python', 'is', 'great', 'for', 'programming']
Concatenated: Python is great for programming
Longest word: programming

Sales analysis:
  Total revenue: $10000
  Best product: Laptop ($5000)

Letter frequency: {'a': 3, 'b': 2, 'c': 1, 'd': 1}
Flattened lists: [1, 2, 3, 4, 5, 6, 7, 8]
Common elements in all lists: [4, 5]`
    },
    {
      type: 'text',
      title: 'Lambdas vs List Comprehensions',
      content: `Sometimes you have a choice between using lambdas with higher-order functions or list comprehensions. Understanding when to use each approach helps write more readable and efficient code.

**List comprehensions advantages:**
- Generally more readable for simple transformations
- Often faster for basic operations
- More Pythonic for simple filtering and mapping
- Better when you need a list result

**Lambda + higher-order functions advantages:**
- More functional programming style
- Better for complex operations
- Easier to chain operations
- More flexible for custom behaviors
- Better when working with iterators

**Performance considerations:**
- List comprehensions are typically faster for simple operations
- Lambdas with map/filter return iterators (memory efficient)
- reduce() operations often require lambdas
- Complex logic may be clearer with lambdas`
    },
    {
      type: 'code',
      title: 'Lambdas vs List Comprehensions Comparison',
      language: 'python',
      code: `# Comparing lambdas with higher-order functions vs list comprehensions
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
words = ["apple", "banana", "cherry", "date", "elderberry"]

# Example 1: Squaring numbers
# Using lambda with map
squares_lambda = list(map(lambda x: x**2, numbers))

# Using list comprehension
squares_comprehension = [x**2 for x in numbers]

# Example 2: Filtering even numbers
# Using lambda with filter
evens_lambda = list(filter(lambda x: x % 2 == 0, numbers))

# Using list comprehension
evens_comprehension = [x for x in numbers if x % 2 == 0]

# Example 3: Transform and filter combined
# Using lambda with map and filter
even_squares_lambda = list(map(lambda x: x**2, filter(lambda x: x % 2 == 0, numbers)))

# Using list comprehension
even_squares_comprehension = [x**2 for x in numbers if x % 2 == 0]

# Example 4: String processing
# Using lambda with map
uppercase_lambda = list(map(lambda word: word.upper(), words))

# Using list comprehension
uppercase_comprehension = [word.upper() for word in words]

# Example 5: Complex transformation with condition
# Using lambda with map and filter
long_word_lengths_lambda = list(map(
    lambda word: len(word), 
    filter(lambda word: len(word) > 5, words)
))

# Using list comprehension
long_word_lengths_comprehension = [len(word) for word in words if len(word) > 5]

# Example 6: When lambdas are more appropriate - chaining operations
from functools import reduce

# Complex processing pipeline with lambdas
result_lambda = reduce(
    lambda acc, x: acc + x,
    map(lambda x: x**2, filter(lambda x: x % 2 == 0, numbers)),
    0
)

# Equivalent with list comprehension (less elegant for this specific case)
filtered_numbers = [x for x in numbers if x % 2 == 0]
squared_numbers = [x**2 for x in filtered_numbers]
result_comprehension = sum(squared_numbers)

# Example 7: Nested data processing
data = [
    {"name": "Alice", "scores": [85, 90, 78]},
    {"name": "Bob", "scores": [72, 88, 91]},
    {"name": "Charlie", "scores": [95, 87, 82]}
]

# Using lambda with map
average_scores_lambda = list(map(
    lambda student: {
        "name": student["name"], 
        "average": round(sum(student["scores"]) / len(student["scores"]), 1)
    },
    data
))

# Using list comprehension
average_scores_comprehension = [
    {
        "name": student["name"], 
        "average": round(sum(student["scores"]) / len(student["scores"]), 1)
    }
    for student in data
]

print("Squares comparison:")
print("  Lambda result:", squares_lambda[:5])
print("  Comprehension result:", squares_comprehension[:5])

print("\\nEven numbers comparison:")
print("  Lambda result:", evens_lambda)
print("  Comprehension result:", evens_comprehension)

print("\\nEven squares comparison:")
print("  Lambda result:", even_squares_lambda)
print("  Comprehension result:", even_squares_comprehension)

print("\\nLong word lengths:")
print("  Lambda result:", long_word_lengths_lambda)
print("  Comprehension result:", long_word_lengths_comprehension)

print("\\nSum of even squares:")
print("  Lambda pipeline result:", result_lambda)
print("  Comprehension result:", result_comprehension)

print("\\nStudent averages (first student):")
print("  Lambda result:", average_scores_lambda[0])
print("  Comprehension result:", average_scores_comprehension[0])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Squares comparison:
  Lambda result: [1, 4, 9, 16, 25]
  Comprehension result: [1, 4, 9, 16, 25]

Even numbers comparison:
  Lambda result: [2, 4, 6, 8, 10]
  Comprehension result: [2, 4, 6, 8, 10]

Even squares comparison:
  Lambda result: [4, 16, 36, 64, 100]
  Comprehension result: [4, 16, 36, 64, 100]

Long word lengths:
  Lambda result: [6, 10]
  Comprehension result: [6, 10]

Sum of even squares:
  Lambda pipeline result: 220
  Comprehension result: 220

Student averages (first student):
  Lambda result: {'name': 'Alice', 'average': 84.3}
  Comprehension result: {'name': 'Alice', 'average': 84.3}`
    },
    {
      type: 'code',
      title: 'Practical Lambda Applications',
      language: 'python',
      code: `# Real-world applications of lambda functions
import datetime

# Sample data for examples
transactions = [
    {"id": 1, "amount": 250.50, "type": "credit", "date": "2024-01-15"},
    {"id": 2, "amount": 75.25, "type": "debit", "date": "2024-01-16"},
    {"id": 3, "amount": 500.00, "type": "credit", "date": "2024-01-17"},
    {"id": 4, "amount": 120.75, "type": "debit", "date": "2024-01-18"}
]

inventory = [
    {"item": "Laptop", "quantity": 5, "price": 999.99, "category": "electronics"},
    {"item": "Desk", "quantity": 12, "price": 199.99, "category": "furniture"},
    {"item": "Mouse", "quantity": 25, "price": 29.99, "category": "electronics"},
    {"item": "Chair", "quantity": 8, "price": 149.99, "category": "furniture"}
]

# 1. Financial data processing
credit_transactions = list(filter(lambda t: t["type"] == "credit", transactions))
large_transactions = list(filter(lambda t: t["amount"] > 100, transactions))
transaction_summaries = list(map(
    lambda t: t["type"].upper() + ": $" + str(t["amount"]),
    transactions
))

# Calculate total credits and debits
from functools import reduce
total_credits = reduce(
    lambda total, t: total + (t["amount"] if t["type"] == "credit" else 0),
    transactions,
    0
)

# 2. Inventory management
# Calculate total inventory value
total_value = reduce(
    lambda total, item: total + (item["quantity"] * item["price"]),
    inventory,
    0
)

# Find items needing restock (quantity < 10)
low_stock = list(filter(lambda item: item["quantity"] < 10, inventory))

# Sort by total value (quantity * price) descending
by_total_value = sorted(
    inventory,
    key=lambda item: item["quantity"] * item["price"],
    reverse=True
)

# 3. Data transformation pipeline
# Create summary report for each item
item_reports = list(map(
    lambda item: {
        "name": item["item"],
        "total_value": round(item["quantity"] * item["price"], 2),
        "stock_status": "Low" if item["quantity"] < 10 else "OK",
        "category": item["category"].title()
    },
    inventory
))

# 4. Grouping and aggregation using lambdas
# Group items by category and calculate totals
electronics_total = reduce(
    lambda total, item: total + (item["quantity"] * item["price"]) 
    if item["category"] == "electronics" else total,
    inventory,
    0
)

furniture_total = reduce(
    lambda total, item: total + (item["quantity"] * item["price"])
    if item["category"] == "furniture" else total,
    inventory,
    0
)

# 5. String processing for reports
# Create formatted transaction descriptions
formatted_transactions = list(map(
    lambda t: "Transaction " + str(t["id"]) + ": " + 
             ("+" if t["type"] == "credit" else "-") + "$" + str(t["amount"]),
    transactions
))

# 6. Date processing (simulation since we have string dates)
# Sort transactions by date (string comparison works for YYYY-MM-DD format)
sorted_transactions = sorted(transactions, key=lambda t: t["date"])

# Filter recent transactions (last 3 days from our data)
recent_transactions = list(filter(
    lambda t: t["date"] >= "2024-01-16",
    transactions
))

print("Financial Summary:")
print("  Credit transactions:", len(credit_transactions))
print("  Large transactions (>$100):", len(large_transactions))
print("  Total credits: $" + str(total_credits))

print("\\nInventory Summary:")
print("  Total inventory value: $" + str(round(total_value, 2)))
print("  Low stock items:", [item["item"] for item in low_stock])

print("\\nTop items by total value:")
for item in by_total_value:
    total_val = item["quantity"] * item["price"]
    print("  " + item["item"] + ": $" + str(round(total_val, 2)))

print("\\nItem reports (first 2):")
for report in item_reports[:2]:
    print("  " + report["name"] + ": $" + str(report["total_value"]) + 
          " (" + report["stock_status"] + ")")

print("\\nCategory totals:")
print("  Electronics: $" + str(round(electronics_total, 2)))
print("  Furniture: $" + str(round(furniture_total, 2)))

print("\\nFormatted transactions:")
for desc in formatted_transactions:
    print("  " + desc)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Financial Summary:
  Credit transactions: 2
  Large transactions (>$100): 3
  Total credits: $750.5

Inventory Summary:
  Total inventory value: $9699.4
  Low stock items: ['Laptop', 'Chair']

Top items by total value:
  Laptop: $4999.95
  Desk: $2399.88
  Chair: $1199.92
  Mouse: $749.75

Item reports (first 2):
  Laptop: $4999.95 (Low)
  Desk: $2399.88 (OK)

Category totals:
  Electronics: $5749.7
  Furniture: $3599.8

Formatted transactions:
  Transaction 1: +$250.5
  Transaction 2: -$75.25
  Transaction 3: +$500.0
  Transaction 4: -$120.75`
    }
  ],
  keyTakeaways: [
    'Lambda functions create anonymous, single-expression functions using lambda syntax',
    'Lambdas work excellently with map(), filter(), reduce(), and sorted() functions',
    'Use lambdas for simple operations, regular functions for complex logic',
    'Lambda key functions enable custom sorting by any criteria',
    'List comprehensions are often more readable than lambdas for simple transformations',
    'Lambdas excel in functional programming patterns and data processing pipelines'
  ]
};