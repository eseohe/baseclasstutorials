// Lesson content for Comprehensions (list, dict, set comprehensions)
export const comprehensionsContent = {
  id: 'comprehensions',
  title: 'Comprehensions (list, dict, set comprehensions)',
  duration: '28 min',
  overview: `Master Python comprehensions - the elegant way to create collections! Learn to write concise, readable code using list, dictionary, and set comprehensions for efficient data transformation and filtering.`,
  objectives: [
    'Understand comprehension syntax and when to use comprehensions over loops',
    'Create list comprehensions for transforming and filtering data',
    'Build dictionary comprehensions for key-value transformations',
    'Use set comprehensions for unique element generation',
    'Apply conditional logic within comprehensions',
    'Write nested comprehensions for complex data structures',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Comprehensions',
      content: `Comprehensions are a concise way to create collections in Python. They combine the power of loops and conditionals into a single, readable expression.

**Think of comprehensions as:**
- Elegant replacements for simple loops
- Functional programming constructs
- Data transformation pipelines
- Filtering and mapping operations in one line

**Benefits of comprehensions:**
- **Concise**: Less code than equivalent loops
- **Readable**: Express intent clearly
- **Efficient**: Often faster than traditional loops
- **Pythonic**: The "Python way" to transform data
- **Functional**: Encourage immutable data patterns

**Types of comprehensions:**
- **List comprehensions**: Create new lists
- **Dictionary comprehensions**: Create new dictionaries
- **Set comprehensions**: Create new sets
- **Generator expressions**: Create generators (covered later)`
    },
    {
      type: 'text',
      title: 'List Comprehensions',
      content: `List comprehensions are the most common type of comprehension. They provide a concise way to create lists by applying an expression to each item in an iterable.

**Basic syntax:**
\`\`\`python
[expression for item in iterable]
\`\`\`

**With condition:**
\`\`\`python
[expression for item in iterable if condition]
\`\`\``
    },
    {
      type: 'code',
      title: 'Basic List Comprehension - Transforming Data',
      language: 'python',
      code: `# Traditional loop vs list comprehension
numbers = [1, 2, 3, 4, 5]
squares = [x * x for x in numbers]

print("Original numbers:", numbers)
print("Squares:", squares)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Original numbers: [1, 2, 3, 4, 5]
Squares: [1, 4, 9, 16, 25]`
    },
    {
      type: 'code',
      title: 'List Comprehension with Filtering',
      language: 'python',
      code: `# Filtering with conditions
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_squares = [x * x for x in numbers if x % 2 == 0]

print("Original numbers:", numbers)
print("Even squares:", even_squares)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Original numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Even squares: [4, 16, 36, 64, 100]`
    },
    {
      type: 'code',
      title: 'String Processing with List Comprehensions',
      language: 'python',
      code: `# Processing strings
words = ["hello", "world", "python", "programming"]
upper_words = [word.upper() for word in words]
long_words = [word for word in words if len(word) > 5]

print("Upper case:", upper_words)
print("Long words:", long_words)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Upper case: ['HELLO', 'WORLD', 'PYTHON', 'PROGRAMMING']
Long words: ['python', 'programming']`
    },
    {
      type: 'code',
      title: 'Working with Multiple Iterables',
      language: 'python',
      code: `# Using multiple iterables
numbers = [1, 2, 3]
letters = ["a", "b", "c"]
pairs = [(num, letter) for num in numbers for letter in letters]

print("Numbers:", numbers)
print("First few pairs:", pairs[:4])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Numbers: [1, 2, 3]
First few pairs: [(1, 'a'), (1, 'b'), (1, 'c'), (2, 'a')]`
    },
    {
      type: 'text',
      title: 'Dictionary Comprehensions',
      content: `Dictionary comprehensions create dictionaries using a similar syntax to list comprehensions. They're perfect for transforming data into key-value pairs.

**Basic syntax:**
\`\`\`python
{key_expression: value_expression for item in iterable}
\`\`\`

**With condition:**
\`\`\`python
{key_expression: value_expression for item in iterable if condition}
\`\`\``
    },
    {
      type: 'code',
      title: 'Basic Dictionary Comprehension',
      language: 'python',
      code: `# Creating dictionaries from lists
numbers = [1, 2, 3, 4, 5]
squares_dict = {x: x * x for x in numbers}

print("Numbers:", numbers)
print("Squares dict:", squares_dict)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Numbers: [1, 2, 3, 4, 5]
Squares dict: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}`
    },
    {
      type: 'code',
      title: 'Dictionary Comprehension with String Processing',
      language: 'python',
      code: `# Processing strings into dictionaries
words = ["apple", "banana", "cherry"]
word_lengths = {word: len(word) for word in words}
word_info = {word: word.upper() for word in words if len(word) > 5}

print("Word lengths:", word_lengths)
print("Long words info:", word_info)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Word lengths: {'apple': 5, 'banana': 6, 'cherry': 6}
Long words info: {'banana': 'BANANA', 'cherry': 'CHERRY'}`
    },
    {
      type: 'code',
      title: 'Transforming Existing Dictionaries',
      language: 'python',
      code: `# Transforming existing dictionaries
original_prices = {"apple": 1.20, "banana": 0.50, "cherry": 2.00}
sale_prices = {fruit: price * 0.8 for fruit, price in original_prices.items()}

print("Original prices:", original_prices)
print("Sale prices:", sale_prices)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Original prices: {'apple': 1.2, 'banana': 0.5, 'cherry': 2.0}
Sale prices: {'apple': 0.96, 'banana': 0.4, 'cherry': 1.6}`
    },
    {
      type: 'text',
      title: 'Set Comprehensions',
      content: `Set comprehensions create sets using the same syntax pattern. They automatically handle uniqueness, making them perfect for collecting distinct values.

**Basic syntax:**
\`\`\`python
{expression for item in iterable}
\`\`\`

**With condition:**
\`\`\`python
{expression for item in iterable if condition}
\`\`\``
    },
    {
      type: 'code',
      title: 'Basic Set Comprehension',
      language: 'python',
      code: `# Creating sets of unique values
numbers = [1, 2, 2, 3, 3, 4, 5]
unique_squares = {x * x for x in numbers}

print("Original numbers:", numbers)
print("Unique squares:", unique_squares)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Original numbers: [1, 2, 2, 3, 3, 4, 5]
Unique squares: {1, 4, 9, 16, 25}`
    },
    {
      type: 'code',
      title: 'Set Comprehension with String Processing',
      language: 'python',
      code: `# Extracting unique elements
sentence = "hello world programming"
unique_letters = {char.lower() for char in sentence if char.isalpha()}
vowels = {char for char in unique_letters if char in "aeiou"}

print("Unique letters:", unique_letters)
print("Vowels found:", vowels)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Unique letters: {'h', 'e', 'l', 'o', 'w', 'r', 'd', 'p', 'g', 'a', 'm', 'i', 'n'}
Vowels found: {'e', 'o', 'a', 'i'}`
    },
    {
      type: 'text',
      title: 'Conditional Logic in Comprehensions',
      content: `Comprehensions can include complex conditional logic using if statements and even if-else expressions for more sophisticated filtering and transformation.

**Filtering pattern:**
\`\`\`python
[expression for item in iterable if condition]
\`\`\`

**Conditional expression pattern:**
\`\`\`python
[expression_if_true if condition else expression_if_false for item in iterable]
\`\`\``
    },
    {
      type: 'code',
      title: 'Conditional Expressions in Comprehensions',
      language: 'python',
      code: `# Using conditional expressions (ternary operator)
numbers = [1, 2, 3, 4, 5, 6]
labels = ["even" if x % 2 == 0 else "odd" for x in numbers]

print("Numbers:", numbers)
print("Labels:", labels)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Numbers: [1, 2, 3, 4, 5, 6]
Labels: ['odd', 'even', 'odd', 'even', 'odd', 'even']`
    },
    {
      type: 'code',
      title: 'Complex Filtering Conditions',
      language: 'python',
      code: `# Multiple conditions in comprehensions
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
special_numbers = [x for x in numbers if x % 2 == 0 and x > 4]
processed = [x * 2 if x % 3 == 0 else x for x in numbers if x < 8]

print("Special numbers:", special_numbers)
print("Processed numbers:", processed)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Special numbers: [6, 8, 10]
Processed numbers: [1, 2, 6, 4, 5, 12, 7]`
    },
    {
      type: 'text',
      title: 'Nested Comprehensions',
      content: `Nested comprehensions allow you to work with multi-dimensional data structures, though they should be used carefully to maintain readability.

**Best practices for nested comprehensions:**
- Keep them simple and readable
- Consider breaking complex ones into multiple steps
- Use meaningful variable names
- Add comments for complex logic`
    },
    {
      type: 'code',
      title: 'Nested List Comprehensions',
      language: 'python',
      code: `# Creating a multiplication table
matrix = [[i * j for j in range(1, 4)] for i in range(1, 4)]
flattened = [num for row in matrix for num in row]

print("Matrix:", matrix)
print("Flattened:", flattened)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Matrix: [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
Flattened: [1, 2, 3, 2, 4, 6, 3, 6, 9]`
    },
    {
      type: 'code',
      title: 'Working with Nested Data Structures',
      language: 'python',
      code: `# Processing nested data
students = [
    {"name": "Alice", "grades": [85, 90, 92]},
    {"name": "Bob", "grades": [78, 85, 88]}
]
all_grades = [grade for student in students for grade in student["grades"]]

print("Student data:", students[0])
print("All grades:", all_grades)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Student data: {'name': 'Alice', 'grades': [85, 90, 92]}
All grades: [85, 90, 92, 78, 85, 88]`
    },
    {
      type: 'text',
      title: 'Practical Applications',
      content: `Comprehensions are incredibly useful for data processing, transformation, and analysis tasks that appear frequently in real-world programming.

**Common use cases:**
- **Data cleaning**: Filtering and transforming datasets
- **API response processing**: Extracting specific fields
- **Configuration parsing**: Converting settings to usable formats
- **Text processing**: Analyzing and transforming strings
- **Mathematical computations**: Creating derived datasets
- **File processing**: Batch operations on file collections`
    },
    {
      type: 'code',
      title: 'Practical Example: Data Cleaning',
      language: 'python',
      code: `# Cleaning and processing user data
raw_emails = ["  alice@EXAMPLE.com  ", "BOB@test.COM", "charlie@demo.org"]
clean_emails = [email.strip().lower() for email in raw_emails]
domains = [email.split("@")[1] for email in clean_emails]

print("Raw emails:", raw_emails[0])
print("Clean emails:", clean_emails)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Raw emails:   alice@EXAMPLE.com  
Clean emails: ['alice@example.com', 'bob@test.com', 'charlie@demo.org']`
    },
    {
      type: 'code',
      title: 'Practical Example: Sales Data Analysis',
      language: 'python',
      code: `# Analyzing sales data
sales_data = [
    {"product": "laptop", "price": 1000, "quantity": 2},
    {"product": "mouse", "price": 25, "quantity": 5}
]
total_values = {item["product"]: item["price"] * item["quantity"] for item in sales_data}

print("Sales data:", sales_data[0])
print("Total values:", total_values)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Sales data: {'product': 'laptop', 'price': 1000, 'quantity': 2}
Total values: {'laptop': 2000, 'mouse': 125}`
    },
    {
      type: 'text',
      title: 'Key Takeaways',
      content: `🎯 **Key Points to Remember:**

**Comprehension Types:**
- **List**: \`[expression for item in iterable]\`
- **Dictionary**: \`{key: value for item in iterable}\`
- **Set**: \`{expression for item in iterable}\`

**When to Use Comprehensions:**
- Simple transformations and filtering
- Data processing pipelines
- When readability is maintained
- One-liner operations

**When NOT to Use Comprehensions:**
- Complex logic that hurts readability
- Side effects needed (use regular loops)
- Multiple statements required
- Performance-critical code (profile first)

**Best Practices:**
- Keep comprehensions simple and readable
- Use meaningful variable names
- Break complex ones into multiple steps
- Add comments for non-obvious logic
- Consider generator expressions for large datasets

Comprehensions are a powerful Python feature that can make your code more concise and expressive. Master them to write more Pythonic code!`
    }
  ]
};