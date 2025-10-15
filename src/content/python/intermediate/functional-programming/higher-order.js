// Lesson content for Higher-Order Functions
export const higherOrderContent = {
  id: 'higher-order',
  title: 'Higher-Order Functions',
  duration: '32 min',
  overview: `Master higher-order functions in Python! Learn to write functions that accept other functions as parameters, return functions, and use built-in higher-order functions like map(), filter(), and reduce() for elegant data processing.`,
  objectives: [
    'Understand what makes a function "higher-order"',
    'Write functions that accept other functions as parameters',
    'Create functions that return other functions',
    'Master built-in higher-order functions: map(), filter(), reduce()',
    'Apply functional programming patterns to data processing',
    'Combine higher-order functions for complex transformations',
  ],
  sections: [
    {
      type: 'text',
      title: 'Understanding Higher-Order Functions',
      content: `Higher-order functions are functions that either accept other functions as arguments or return functions as results. This concept is fundamental to functional programming and enables powerful, reusable code patterns.

**What makes a function higher-order:**
- **Accepts functions**: Takes other functions as parameters
- **Returns functions**: Creates and returns new functions
- **Both**: Can do either or both operations

**Key concepts:**
- **Function as first-class objects**: Functions can be assigned to variables, passed around, and returned
- **Callback functions**: Functions passed to other functions to be called later
- **Function factories**: Functions that create and return customized functions

**Benefits:**
- **Code reusability**: Write generic functions that work with different operations
- **Modularity**: Separate concerns by passing behavior as parameters
- **Abstraction**: Hide complex logic behind simple interfaces
- **Composability**: Combine functions to create more complex behaviors`
    },
    {
      type: 'code',
      title: 'Functions as First-Class Objects',
      language: 'python',
      code: `# Demonstrating functions as first-class objects
def greet(name):
    return "Hello, " + name + "!"

def shout(name):
    return "HEY, " + name.upper() + "!"

def whisper(name):
    return "psst... " + name.lower() + "..."

# Assign functions to variables
greeting_func = greet
loud_func = shout

# Store functions in a list
greeting_functions = [greet, shout, whisper]

# Call functions from variables and lists
print("Normal greeting:", greeting_func("Alice"))
print("Loud greeting:", loud_func("Bob"))

print("\\nDifferent greetings for Charlie:")
for func in greeting_functions:
    result = func("Charlie")
    print("  " + result)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Normal greeting: Hello, Alice!
Loud greeting: HEY, BOB!

Different greetings for Charlie:
  Hello, Charlie!
  HEY, CHARLIE!
  psst... charlie...`
    },
    {
      type: 'code',
      title: 'Functions That Accept Functions',
      language: 'python',
      code: `# Higher-order function that accepts other functions
def apply_operation(numbers, operation):
    """Apply operation function to each number in the list"""
    result = []
    for num in numbers:
        result.append(operation(num))
    return result

def apply_to_pairs(numbers, operation):
    """Apply operation to pairs of consecutive numbers"""
    result = []
    for i in range(len(numbers) - 1):
        pair_result = operation(numbers[i], numbers[i + 1])
        result.append(pair_result)
    return result

# Define operation functions
def square(x):
    return x * x

def double(x):
    return x * 2

def add_pair(a, b):
    return a + b

def max_pair(a, b):
    return max(a, b)

# Use higher-order functions
numbers = [1, 2, 3, 4, 5]

squared = apply_operation(numbers, square)
doubled = apply_operation(numbers, double)
pair_sums = apply_to_pairs(numbers, add_pair)
pair_maxes = apply_to_pairs(numbers, max_pair)

print("Original numbers:", numbers)
print("Squared:", squared)
print("Doubled:", doubled)
print("Pair sums:", pair_sums)
print("Pair maxes:", pair_maxes)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Original numbers: [1, 2, 3, 4, 5]
Squared: [1, 4, 9, 16, 25]
Doubled: [2, 4, 6, 8, 10]
Pair sums: [3, 5, 7, 9]
Pair maxes: [2, 3, 4, 5]`
    },
    {
      type: 'text',
      title: 'The map() Function',
      content: `The \`map()\` function is a built-in higher-order function that applies a given function to each item in an iterable, returning a map object (which can be converted to a list).

**Syntax:**
\`map(function, iterable)\`

**How it works:**
1. Takes a function and an iterable as arguments
2. Applies the function to each item in the iterable
3. Returns a map object (iterator) with the results

**Advantages:**
- **Concise**: More readable than explicit loops
- **Functional**: Pure functional programming approach
- **Memory efficient**: Returns an iterator, not a list
- **Chainable**: Can be combined with other operations

**Common patterns:**
- Transform all items in a collection
- Apply the same operation to multiple values
- Type conversions and data transformations`
    },
    {
      type: 'code',
      title: 'Using map() Function',
      language: 'python',
      code: `# Using map() for transformations
numbers = [1, 2, 3, 4, 5]
strings = ["1", "2", "3", "4", "5"]
words = ["hello", "world", "python", "map"]

# Define transformation functions
def cube(x):
    return x * x * x

def add_ten(x):
    return x + 10

def get_length(s):
    return len(s)

def capitalize_with_exclamation(s):
    return s.capitalize() + "!"

# Apply transformations using map()
cubed_numbers = list(map(cube, numbers))
numbers_plus_ten = list(map(add_ten, numbers))
string_to_int = list(map(int, strings))
word_lengths = list(map(get_length, words))
excited_words = list(map(capitalize_with_exclamation, words))

print("Original numbers:", numbers)
print("Cubed:", cubed_numbers)
print("Plus ten:", numbers_plus_ten)
print("Strings to integers:", string_to_int)
print("Word lengths:", word_lengths)
print("Excited words:", excited_words)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Original numbers: [1, 2, 3, 4, 5]
Cubed: [1, 8, 27, 64, 125]
Plus ten: [11, 12, 13, 14, 15]
Strings to integers: [1, 2, 3, 4, 5]
Word lengths: [5, 5, 6, 3]
Excited words: ['Hello!', 'World!', 'Python!', 'Map!']`
    },
    {
      type: 'text',
      title: 'The filter() Function',
      content: `The \`filter()\` function creates an iterator from elements of an iterable for which a function returns True. It's used to filter data based on conditions.

**Syntax:**
\`filter(function, iterable)\`

**How it works:**
1. Takes a predicate function (returns True/False) and an iterable
2. Tests each item with the predicate function
3. Returns only items where the function returns True
4. Returns a filter object (iterator)

**Special case:**
- If function is None, filters out "falsy" values (0, False, "", None, etc.)

**Common uses:**
- Remove unwanted items from collections
- Select items meeting specific criteria
- Data validation and cleaning
- Conditional data processing`
    },
    {
      type: 'code',
      title: 'Using filter() Function',
      language: 'python',
      code: `# Using filter() for conditional selection
numbers = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
words = ["apple", "banana", "cat", "elephant", "dog", ""]
mixed_data = [1, 0, "hello", "", None, 42, False, "world"]

# Define predicate functions
def is_positive(x):
    return x > 0

def is_even(x):
    return x % 2 == 0

def is_long_word(word):
    return len(word) > 4

def is_divisible_by_3(x):
    return x % 3 == 0

# Apply filters
positive_numbers = list(filter(is_positive, numbers))
even_numbers = list(filter(is_even, numbers))
long_words = list(filter(is_long_word, words))
divisible_by_3 = list(filter(is_divisible_by_3, numbers))

# Filter falsy values (using None as function)
truthy_values = list(filter(None, mixed_data))

print("Original numbers:", numbers)
print("Positive numbers:", positive_numbers)
print("Even numbers:", even_numbers)
print("Long words (>4 chars):", long_words)
print("Divisible by 3:", divisible_by_3)
print("Truthy values:", truthy_values)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Original numbers: [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Positive numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Even numbers: [-2, 0, 2, 4, 6, 8, 10]
Long words (>4 chars): ['apple', 'banana', 'elephant']
Divisible by 3: [-3, 0, 3, 6, 9]
Truthy values: [1, 'hello', 42, 'world']`
    },
    {
      type: 'text',
      title: 'The reduce() Function',
      content: `The \`reduce()\` function applies a function cumulatively to items in an iterable, reducing the iterable to a single value. It's part of the \`functools\` module.

**Syntax:**
\`from functools import reduce\`
\`reduce(function, iterable[, initializer])\`

**How it works:**
1. Takes a two-argument function and an iterable
2. Applies the function to the first two items
3. Takes the result and applies the function with the next item
4. Continues until all items are processed
5. Returns the final accumulated result

**Optional initializer:**
- Provides starting value for the reduction
- Used as first argument if iterable is empty
- Useful for setting default values

**Common patterns:**
- Calculate sums, products, or other aggregations
- Find maximum or minimum values with custom criteria
- Combine strings or data structures
- Implement mathematical operations like factorial`
    },
    {
      type: 'code',
      title: 'Using reduce() Function',
      language: 'python',
      code: `# Using reduce() for accumulation operations
from functools import reduce

numbers = [1, 2, 3, 4, 5]
words = ["Python", "is", "awesome", "for", "data", "processing"]

# Define reduction functions
def add_numbers(a, b):
    return a + b

def multiply_numbers(a, b):
    return a * b

def find_maximum(a, b):
    return max(a, b)

def concatenate_with_space(a, b):
    return a + " " + b

def count_total_chars(total, word):
    return total + len(word)

# Apply reductions
sum_result = reduce(add_numbers, numbers)
product_result = reduce(multiply_numbers, numbers)
max_result = reduce(find_maximum, numbers)
sentence = reduce(concatenate_with_space, words)
total_chars = reduce(count_total_chars, words, 0)

# Alternative: using reduce with initializer
sum_with_init = reduce(add_numbers, numbers, 100)

print("Numbers:", numbers)
print("Sum:", sum_result)
print("Product:", product_result)
print("Maximum:", max_result)
print("Combined sentence:", sentence)
print("Total characters:", total_chars)
print("Sum with initializer (100):", sum_with_init)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Numbers: [1, 2, 3, 4, 5]
Sum: 15
Product: 120
Maximum: 5
Combined sentence: Python is awesome for data processing
Total characters: 33
Sum with initializer (100): 115`
    },
    {
      type: 'code',
      title: 'Combining map(), filter(), and reduce()',
      language: 'python',
      code: `# Combining higher-order functions for complex processing
from functools import reduce

# Sample data: student scores
student_data = [
    {"name": "Alice", "scores": [85, 92, 78, 88]},
    {"name": "Bob", "scores": [72, 68, 85, 79]},
    {"name": "Charlie", "scores": [95, 89, 91, 93]},
    {"name": "Diana", "scores": [88, 93, 87, 90]}
]

# Helper functions
def calculate_average(scores):
    return sum(scores) / len(scores)

def add_average_to_student(student):
    student_copy = student.copy()
    student_copy["average"] = round(calculate_average(student["scores"]), 1)
    return student_copy

def is_high_performer(student):
    return student["average"] >= 85

def get_student_name(student):
    return student["name"]

def combine_names(name1, name2):
    return name1 + ", " + name2

# Process data using functional approach
# Step 1: Add averages to all students
students_with_avg = list(map(add_average_to_student, student_data))

# Step 2: Filter high performers (average >= 85)
high_performers = list(filter(is_high_performer, students_with_avg))

# Step 3: Extract names of high performers
high_performer_names = list(map(get_student_name, high_performers))

# Step 4: Combine names into a single string
if high_performer_names:
    combined_names = reduce(combine_names, high_performer_names)
else:
    combined_names = "No high performers"

# Display results
print("All students with averages:")
for student in students_with_avg:
    print("  " + student["name"] + ": " + str(student["average"]))

print("\\nHigh performers (>=85):", high_performer_names)
print("Combined high performer names:", combined_names)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `All students with averages:
  Alice: 85.8
  Bob: 76.0
  Charlie: 92.0
  Diana: 89.5

High performers (>=85): ['Alice', 'Charlie', 'Diana']
Combined high performer names: Alice, Charlie, Diana`
    },
    {
      type: 'text',
      title: 'Functions That Return Functions',
      content: `Functions can create and return other functions, enabling powerful patterns like function factories and customizable behavior.

**Function factories:**
- Functions that create specialized versions of other functions
- Customize behavior based on parameters
- Create reusable, configurable functions

**Closures:**
- Inner functions that capture variables from outer function
- Maintain access to outer variables even after outer function returns
- Enable state preservation and customization

**Common patterns:**
- **Multiplier factories**: Create functions that multiply by different values
- **Validator factories**: Create custom validation functions
- **Formatter factories**: Create specialized formatting functions
- **Configuration functions**: Create functions with preset configurations

**Benefits:**
- Reduce code duplication
- Create specialized functions on demand
- Encapsulate configuration and behavior
- Enable flexible, reusable code patterns`
    },
    {
      type: 'code',
      title: 'Function Factories',
      language: 'python',
      code: `# Functions that return other functions (function factories)
def create_multiplier(factor):
    """Create a function that multiplies by the given factor"""
    def multiplier(x):
        return x * factor
    return multiplier

def create_validator(min_value, max_value):
    """Create a function that validates values within a range"""
    def validator(value):
        return min_value <= value <= max_value
    return validator

def create_formatter(prefix, suffix):
    """Create a function that formats strings with prefix and suffix"""
    def formatter(text):
        return prefix + text + suffix
    return formatter

# Create specialized functions using factories
double = create_multiplier(2)
triple = create_multiplier(3)
times_ten = create_multiplier(10)

age_validator = create_validator(0, 120)
score_validator = create_validator(0, 100)

html_bold = create_formatter("<b>", "</b>")
parentheses = create_formatter("(", ")")

# Use the created functions
numbers = [1, 2, 3, 4, 5]
doubled = list(map(double, numbers))
tripled = list(map(triple, numbers))

test_ages = [-5, 25, 150]
test_scores = [85, 105, 92]

print("Original numbers:", numbers)
print("Doubled:", doubled)
print("Tripled:", tripled)

print("\\nAge validation results:")
for age in test_ages:
    result = age_validator(age)
    print("  Age " + str(age) + ": " + str(result))

print("\\nFormatted text:")
print("Bold text:", html_bold("Important"))
print("In parentheses:", parentheses("optional"))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Original numbers: [1, 2, 3, 4, 5]
Doubled: [2, 4, 6, 8, 10]
Tripled: [3, 6, 9, 12, 15]

Age validation results:
  Age -5: False
  Age 25: True
  Age 150: False

Formatted text:
Bold text: <b>Important</b>
In parentheses: (optional)`
    },
    {
      type: 'code',
      title: 'Advanced Function Composition',
      language: 'python',
      code: `# Advanced higher-order function patterns
def compose(func1, func2):
    """Compose two functions: compose(f, g)(x) = f(g(x))"""
    def composed(x):
        return func1(func2(x))
    return composed

def create_pipeline(*functions):
    """Create a function pipeline from multiple functions"""
    def pipeline(x):
        result = x
        for func in functions:
            result = func(result)
        return result
    return pipeline

def create_conditional_processor(condition_func, true_func, false_func):
    """Create a function that applies different processing based on condition"""
    def processor(x):
        if condition_func(x):
            return true_func(x)
        else:
            return false_func(x)
    return processor

# Define basic functions
def add_five(x):
    return x + 5

def multiply_by_two(x):
    return x * 2

def square(x):
    return x * x

def is_even(x):
    return x % 2 == 0

def make_positive(x):
    return abs(x)

def make_negative(x):
    return -abs(x)

# Create composed and pipeline functions
add_then_multiply = compose(multiply_by_two, add_five)
complex_pipeline = create_pipeline(add_five, multiply_by_two, square)
sign_processor = create_conditional_processor(is_even, make_positive, make_negative)

# Test the functions
test_numbers = [1, 2, 3, 4, -2, -3]

print("Testing composed function (add 5, then multiply by 2):")
for num in test_numbers[:4]:
    result = add_then_multiply(num)
    print("  " + str(num) + " -> " + str(result))

print("\\nTesting pipeline (add 5, multiply by 2, square):")
for num in test_numbers[:3]:
    result = complex_pipeline(num)
    print("  " + str(num) + " -> " + str(result))

print("\\nTesting conditional processor (positive if even, negative if odd):")
for num in test_numbers:
    result = sign_processor(num)
    print("  " + str(num) + " -> " + str(result))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Testing composed function (add 5, then multiply by 2):
  1 -> 12
  2 -> 14
  3 -> 16
  4 -> 18

Testing pipeline (add 5, multiply by 2, square):
  1 -> 144
  2 -> 196
  3 -> 256

Testing conditional processor (positive if even, negative if odd):
  1 -> -1
  2 -> 2
  3 -> -3
  4 -> 4
  -2 -> 2
  -3 -> -3`
    },
    {
      type: 'text',
      title: 'Practical Applications',
      content: `Higher-order functions have many practical applications in real-world programming:

**Data Processing:**
- Transform datasets with map()
- Filter records based on criteria
- Aggregate data with reduce()
- Create processing pipelines

**Event Handling:**
- Register callback functions
- Create event listeners
- Implement observer patterns

**Configuration and Customization:**
- Create configurable algorithms
- Build plugin systems
- Implement strategy patterns

**Testing and Validation:**
- Create test case generators
- Build validation frameworks
- Implement assertion libraries

**API Design:**
- Create middleware functions
- Build decorator patterns
- Implement function chaining

**Performance Benefits:**
- Avoid repetitive code
- Create reusable components
- Enable lazy evaluation
- Support functional programming paradigms`
    },
    {
      type: 'code',
      title: 'Practical Example: Data Processing System',
      language: 'python',
      code: `# Practical example: Sales data processing system
from functools import reduce

# Sample sales data
sales_data = [
    {"id": 1, "product": "Laptop", "price": 999.99, "quantity": 2, "discount": 0.1},
    {"id": 2, "product": "Mouse", "price": 25.99, "quantity": 5, "discount": 0.0},
    {"id": 3, "product": "Keyboard", "price": 79.99, "quantity": 3, "discount": 0.05},
    {"id": 4, "product": "Monitor", "price": 299.99, "quantity": 1, "discount": 0.15},
    {"id": 5, "product": "Speaker", "price": 149.99, "quantity": 2, "discount": 0.0}
]

# Processing functions
def calculate_total(sale):
    """Calculate total for a sale after discount"""
    subtotal = sale["price"] * sale["quantity"]
    discount_amount = subtotal * sale["discount"]
    total = subtotal - discount_amount
    
    sale_copy = sale.copy()
    sale_copy["total"] = round(total, 2)
    return sale_copy

def is_high_value(sale):
    """Check if sale is high value (>= $200)"""
    return sale["total"] >= 200

def extract_total(sale):
    """Extract total value from sale"""
    return sale["total"]

def add_totals(total1, total2):
    """Add two totals together"""
    return total1 + total2

def create_summary_filter(min_quantity):
    """Create a filter for minimum quantity"""
    def quantity_filter(sale):
        return sale["quantity"] >= min_quantity
    return quantity_filter

# Process sales data using higher-order functions
print("Processing sales data...")

# Step 1: Calculate totals for all sales
sales_with_totals = list(map(calculate_total, sales_data))

# Step 2: Filter high-value sales
high_value_sales = list(filter(is_high_value, sales_with_totals))

# Step 3: Calculate total revenue
total_revenue = reduce(add_totals, map(extract_total, sales_with_totals))

# Step 4: Filter sales with quantity >= 2 using factory function
bulk_filter = create_summary_filter(2)
bulk_sales = list(filter(bulk_filter, sales_with_totals))

# Step 5: Extract totals and calculate average for bulk sales
if bulk_sales:
    bulk_totals = list(map(extract_total, bulk_sales))
    bulk_average = reduce(add_totals, bulk_totals) / len(bulk_totals)
else:
    bulk_average = 0

# Display results
print("\\nSales with calculated totals:")
for sale in sales_with_totals:
    print("  " + sale["product"] + ": $" + str(sale["total"]))

print("\\nHigh-value sales (>= $200):")
for sale in high_value_sales:
    print("  " + sale["product"] + ": $" + str(sale["total"]))

print("\\nSummary:")
print("  Total revenue: $" + str(round(total_revenue, 2)))
print("  Bulk sales count:", len(bulk_sales))
print("  Bulk sales average: $" + str(round(bulk_average, 2)))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Processing sales data...

Sales with calculated totals:
  Laptop: $1799.98
  Mouse: $129.95
  Keyboard: $227.97
  Monitor: $254.99
  Speaker: $299.98

Summary:
  Total revenue: $2712.87
  Bulk sales count: 4
  Bulk sales average: $614.47`
    }
  ],
  keyTakeaways: [
    'Higher-order functions accept functions as parameters or return functions as results',
    'map() applies a function to all items in an iterable for transformation',
    'filter() selects items from an iterable based on a predicate function',
    'reduce() accumulates items in an iterable to a single value using a two-argument function',
    'Function factories create specialized functions by returning configured functions',
    'Combining higher-order functions creates powerful data processing pipelines'
  ]
};