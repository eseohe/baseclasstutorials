// Lesson content for Lambda functions
export const lambdaFunctionsContent = {
  id: 'lambda-functions',
  title: 'Lambda functions',
  duration: '20 min',
  overview: `Discover Python's lambda functions - the compact way to create small, anonymous functions! Learn when and how to use these one-line functions effectively with practical examples and real-world applications.`,
  objectives: [
    'Understand what lambda functions are and when to use them',
    'Create simple lambda functions for basic operations',
    'Use lambda functions with built-in functions like map(), filter(), and sorted()',
    'Compare lambda functions vs regular functions',
    'Apply lambda functions in practical data processing scenarios',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Lambda Functions',
      content: `Lambda functions are small, anonymous functions that can have any number of arguments but can only have one expression. They are also called "anonymous functions" because they don't have a name like regular functions.

**Key characteristics:**
- **Anonymous**: No function name required
- **Inline**: Defined and used in the same place
- **Single expression**: Can only contain one expression, not statements
- **Compact**: Great for simple operations that don't warrant a full function

**When to use lambda:**
- Simple operations that can be expressed in one line
- As arguments to functions like map(), filter(), sorted()
- When you need a small function temporarily
- For mathematical operations and data transformations

**When NOT to use lambda:**
- Complex logic that spans multiple lines
- Functions you'll use multiple times (better to name them)
- When readability would suffer

**Syntax:** \`lambda arguments: expression\``
    },
    {
      type: 'code',
      title: 'Basic Lambda Function',
      language: 'python',
      code: `# Create a simple lambda function
square = lambda x: x * x
print("Lambda result:", square(5))
print("Lambda result:", square(3))`
    },
    {
      type: 'output',
      content: `Lambda result: 25
Lambda result: 9`
    },
    {
      type: 'code',
      title: 'Equivalent Regular Function',
      language: 'python',
      code: `# Same operation with regular function
def square_regular(x):
    return x * x

print("Regular function result:", square_regular(5))
print("Regular function result:", square_regular(3))`
    },
    {
      type: 'output',
      content: `Regular function result: 25
Regular function result: 9`
    },
    {
      type: 'code',
      title: 'Lambda with Multiple Arguments',
      language: 'python',
      code: `# Lambda function with two arguments
add = lambda a, b: a + b
multiply = lambda x, y: x * y
print("Addition:", add(10, 5))
print("Multiplication:", multiply(4, 7))`
    },
    {
      type: 'output',
      content: `Addition: 15
Multiplication: 28`
    },
    {
      type: 'code',
      title: 'Lambda for String Operations',
      language: 'python',
      code: `# Lambda functions work with strings too
full_name = lambda first, last: first + " " + last
upper_case = lambda text: text.upper()
print("Full name:", full_name("John", "Doe"))
print("Uppercase:", upper_case("hello"))`
    },
    {
      type: 'output',
      content: `Full name: John Doe
Uppercase: HELLO`
    },
    {
      type: 'text',
      title: 'Lambda Functions with map()',
      content: `The map() function applies a function to every item in a sequence. Lambda functions are perfect for this because you can define the operation right where you use it.

**map() syntax:** \`map(function, sequence)\`

**Benefits:**
- Apply the same operation to every item in a list
- Transform data without writing explicit loops
- More concise than traditional for loops for simple operations
- Returns a map object that you can convert to a list

**Common use cases:**
- Mathematical transformations on lists of numbers
- String formatting operations
- Data type conversions
- Simple calculations on datasets`
    },
    {
      type: 'code',
      title: 'Using map() with Lambda',
      language: 'python',
      code: `# Apply lambda to all items in a list
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x * x, numbers))
print("Original numbers:", numbers)
print("Squared numbers:", squared)`
    },
    {
      type: 'output',
      content: `Original numbers: [1, 2, 3, 4, 5]
Squared numbers: [1, 4, 9, 16, 25]`
    },
    {
      type: 'code',
      title: 'map() with String Operations',
      language: 'python',
      code: `# Convert strings to uppercase
words = ["hello", "world", "python"]
uppercase_words = list(map(lambda word: word.upper(), words))
print("Original words:", words)
print("Uppercase words:", uppercase_words)`
    },
    {
      type: 'output',
      content: `Original words: ['hello', 'world', 'python']
Uppercase words: ['HELLO', 'WORLD', 'PYTHON']`
    },
    {
      type: 'code',
      title: 'map() with Mathematical Operations',
      language: 'python',
      code: `# Convert Celsius to Fahrenheit
celsius_temps = [0, 20, 30, 40]
fahrenheit_temps = list(map(lambda c: (c * 9/5) + 32, celsius_temps))
print("Celsius:", celsius_temps)
print("Fahrenheit:", fahrenheit_temps)`
    },
    {
      type: 'output',
      content: `Celsius: [0, 20, 30, 40]
Fahrenheit: [32.0, 68.0, 86.0, 104.0]`
    },
    {
      type: 'text',
      title: 'Lambda Functions with filter()',
      content: `The filter() function creates a new sequence containing only items that pass a test (return True). Lambda functions are excellent for defining these test conditions.

**filter() syntax:** \`filter(function, sequence)\`

**How it works:**
- The function should return True or False
- Only items that make the function return True are included
- Returns a filter object that you can convert to a list

**Common use cases:**
- Finding numbers that meet certain criteria
- Filtering strings by length or content
- Selecting items based on properties
- Data cleaning and validation`
    },
    {
      type: 'code',
      title: 'Using filter() with Lambda',
      language: 'python',
      code: `# Filter even numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print("All numbers:", numbers)
print("Even numbers:", even_numbers)`
    },
    {
      type: 'output',
      content: `All numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Even numbers: [2, 4, 6, 8, 10]`
    },
    {
      type: 'code',
      title: 'Filter by Value Range',
      language: 'python',
      code: `# Filter numbers in a specific range
scores = [45, 67, 89, 23, 78, 92, 56]
passing_scores = list(filter(lambda score: score >= 60, scores))
print("All scores:", scores)
print("Passing scores:", passing_scores)`
    },
    {
      type: 'output',
      content: `All scores: [45, 67, 89, 23, 78, 92, 56]
Passing scores: [67, 89, 78, 92]`
    },
    {
      type: 'code',
      title: 'Filter Strings by Length',
      language: 'python',
      code: `# Filter words longer than 4 characters
words = ["cat", "elephant", "dog", "butterfly", "ant"]
long_words = list(filter(lambda word: len(word) > 4, words))
print("All words:", words)
print("Long words:", long_words)`
    },
    {
      type: 'output',
      content: `All words: ['cat', 'elephant', 'dog', 'butterfly', 'ant']
Long words: ['elephant', 'butterfly']`
    },
    {
      type: 'text',
      title: 'Lambda Functions with sorted()',
      content: `The sorted() function can use lambda functions to define custom sorting criteria. This is powerful for sorting complex data structures.

**sorted() with lambda syntax:** \`sorted(sequence, key=lambda item: sorting_criteria)\`

**How it works:**
- The lambda function defines what value to use for sorting
- Python sorts based on the values returned by the lambda
- Original sequence is unchanged; sorted() returns a new sorted list

**Common use cases:**
- Sorting by string length
- Sorting numbers by absolute value
- Sorting complex data structures
- Custom alphabetical ordering`
    },
    {
      type: 'code',
      title: 'Sort by String Length',
      language: 'python',
      code: `# Sort words by their length
words = ["python", "is", "awesome", "and", "fun"]
sorted_by_length = sorted(words, key=lambda word: len(word))
print("Original order:", words)
print("Sorted by length:", sorted_by_length)`
    },
    {
      type: 'output',
      content: `Original order: ['python', 'is', 'awesome', 'and', 'fun']
Sorted by length: ['is', 'and', 'fun', 'python', 'awesome']`
    },
    {
      type: 'code',
      title: 'Sort by Absolute Value',
      language: 'python',
      code: `# Sort numbers by absolute value (ignoring negative signs)
numbers = [-5, 2, -8, 1, -3, 7]
sorted_by_abs = sorted(numbers, key=lambda x: abs(x))
print("Original numbers:", numbers)
print("Sorted by absolute value:", sorted_by_abs)`
    },
    {
      type: 'output',
      content: `Original numbers: [-5, 2, -8, 1, -3, 7]
Sorted by absolute value: [1, 2, -3, -5, 7, -8]`
    },
    {
      type: 'code',
      title: 'Sort Tuples by Second Element',
      language: 'python',
      code: `# Sort list of tuples by the second element
students = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]
sorted_by_grade = sorted(students, key=lambda student: student[1])
print("Original:", students)
print("Sorted by grade:", sorted_by_grade)`
    },
    {
      type: 'output',
      content: `Original: [('Alice', 85), ('Bob', 92), ('Charlie', 78)]
Sorted by grade: [('Charlie', 78), ('Alice', 85), ('Bob', 92)]`
    },
    {
      type: 'code',
      title: 'Practical Example - Data Processing',
      language: 'python',
      code: `# Process a list of temperatures
temperatures = [68, 72, 45, 89, 56, 78, 92]

# Filter comfortable temperatures (60-80°F)
comfortable = list(filter(lambda t: 60 <= t <= 80, temperatures))

# Convert to Celsius
celsius = list(map(lambda f: round((f - 32) * 5/9, 1), comfortable))
print("Comfortable temps (F):", comfortable)
print("Comfortable temps (C):", celsius)`
    },
    {
      type: 'output',
      content: `Comfortable temps (F): [68, 72, 78]
Comfortable temps (C): [20.0, 22.2, 25.6]`
    },
    {
      type: 'code',
      title: 'Combining Multiple Operations',
      language: 'python',
      code: `# Complex data processing with lambda
prices = [12.50, 8.75, 15.25, 6.00, 22.80]

# Apply 10% discount and filter prices under $20
discounted = list(map(lambda p: p * 0.9, prices))
affordable = list(filter(lambda p: p < 20, discounted))
print("Original prices:", prices)
print("After discount:", discounted)
print("Affordable after discount:", affordable)`
    },
    {
      type: 'output',
      content: `Original prices: [12.5, 8.75, 15.25, 6.0, 22.8]
After discount: [11.25, 7.875, 13.725, 5.4, 20.52]
Affordable after discount: [11.25, 7.875, 13.725, 5.4]`
    },
    {
      type: 'text',
      title: 'When to Use Lambda vs Regular Functions',
      content: `**Use Lambda functions when:**
- The operation is simple and fits in one line
- You're using it immediately with map(), filter(), sorted(), etc.
- You need a quick, temporary function
- The logic is straightforward and doesn't need explanation

**Use Regular functions when:**
- The operation is complex or spans multiple lines
- You'll use the function multiple times
- The function needs documentation or comments
- Error handling is required
- The function name would make the code more readable

**Lambda limitations:**
- Can only contain expressions, not statements (no if/else blocks, loops, etc.)
- Cannot contain print statements or assignments
- Limited to single expressions
- Can be harder to debug

**Best practices:**
- Keep lambda functions simple and readable
- If you find yourself struggling to fit logic into a lambda, use a regular function
- Use meaningful variable names even in lambda functions
- Consider readability over brevity`
    }
  ]
};