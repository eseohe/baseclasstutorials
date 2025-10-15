// Lesson content for Function arguments (positional, keyword, default, *args, **kwargs)
export const functionArgumentsContent = {
  id: 'function-arguments',
  title: 'Function arguments (positional, keyword, default, *args, **kwargs)',
  duration: '30 min',
  overview: `Master advanced function argument techniques! Learn positional vs keyword arguments, set default values, and use *args and **kwargs for flexible functions that can handle any number of arguments.`,
  objectives: [
    'Understand the difference between positional and keyword arguments',
    'Use default parameters to make functions more flexible',
    'Apply *args to handle variable numbers of positional arguments',
    'Use **kwargs to handle variable numbers of keyword arguments',
    'Combine different argument types effectively in function definitions',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Function Arguments',
      content: `Function arguments are the values passed to functions when they are called. Python offers several powerful ways to handle arguments, making functions more flexible and easier to use.

**Types of Arguments:**
- **Positional**: Arguments passed in a specific order
- **Keyword**: Arguments passed with parameter names
- **Default**: Parameters with pre-set values
- ***args**: Variable number of positional arguments
- ****kwargs**: Variable number of keyword arguments

**Benefits:**
- Make functions more flexible and reusable
- Reduce the need for multiple similar functions
- Allow optional parameters for better user experience
- Enable functions that work with varying amounts of data

Understanding these concepts will make you a more effective Python programmer.`
    },
    {
      type: 'code',
      title: 'Positional Arguments - Basic Example',
      language: 'python',
      code: `# Function with positional arguments
def create_profile(name, age, city):
    print("Name:", name)
    print("Age:", age)
    print("City:", city)`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Calling with Positional Arguments',
      language: 'python',
      code: `# Order matters with positional arguments
create_profile("Alice", 25, "New York")
create_profile("Bob", 30, "London")`
    },
    {
      type: 'output',
      content: `Name: Alice
Age: 25
City: New York
Name: Bob
Age: 30
City: London`
    },
    {
      type: 'code',
      title: 'Keyword Arguments - Same Function',
      language: 'python',
      code: `# Call the same function using keyword arguments
create_profile(city="Paris", name="Charlie", age=35)
create_profile(age=28, name="Diana", city="Tokyo")`
    },
    {
      type: 'output',
      content: `Name: Charlie
Age: 35
City: Paris
Name: Diana
Age: 28
City: Tokyo`
    },
    {
      type: 'code',
      title: 'Mixing Positional and Keyword Arguments',
      language: 'python',
      code: `# You can mix both, but positional must come first
create_profile("Emma", age=32, city="Berlin")
create_profile("Frank", 27, city="Sydney")`
    },
    {
      type: 'output',
      content: `Name: Emma
Age: 32
City: Berlin
Name: Frank
Age: 27
City: Sydney`
    },
    {
      type: 'text',
      title: 'Default Parameters',
      content: `Default parameters allow you to set default values for function parameters. If no argument is provided for that parameter, the default value is used.

**Benefits of default parameters:**
- Make functions more user-friendly
- Reduce the number of required arguments
- Provide sensible defaults for common use cases
- Allow functions to work with partial information

**Important rules:**
- Default parameters must come after non-default parameters
- Default values are set when the function is defined, not when it's called
- Use immutable objects (numbers, strings, None) as defaults, not lists or dictionaries`
    },
    {
      type: 'code',
      title: 'Function with Default Parameters',
      language: 'python',
      code: `# Function with default values
def greet_user(name, greeting="Hello", punctuation="!"):
    print(greeting, name + punctuation)`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Using Default Parameters',
      language: 'python',
      code: `# Call with just the required argument
greet_user("Alice")
greet_user("Bob", "Hi")`
    },
    {
      type: 'output',
      content: `Hello Alice!
Hi Bob!`
    },
    {
      type: 'code',
      title: 'Overriding Default Parameters',
      language: 'python',
      code: `# Override default values
greet_user("Charlie", "Welcome", ".")
greet_user("Diana", punctuation="?")`
    },
    {
      type: 'output',
      content: `Welcome Charlie.
Hello Diana?`
    },
    {
      type: 'code',
      title: 'Practical Default Parameters Example',
      language: 'python',
      code: `# Function with practical defaults
def calculate_discount(price, discount_percent=10):
    discount = price * (discount_percent / 100)
    final_price = price - discount
    print("Original price:", price)
    print("Final price:", final_price)`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Using the Discount Function',
      language: 'python',
      code: `# Use default 10% discount
calculate_discount(100)
calculate_discount(150, 20)`
    },
    {
      type: 'output',
      content: `Original price: 100
Final price: 90.0
Original price: 150
Final price: 120.0`
    },
    {
      type: 'text',
      title: 'Variable Arguments with *args',
      content: `*args (arguments) allows a function to accept any number of positional arguments. The arguments are collected into a tuple.

**When to use *args:**
- When you don't know how many arguments will be passed
- Creating functions that work with lists of varying lengths
- Building flexible utility functions
- Combining multiple values into a single operation

**Key points:**
- *args collects extra positional arguments into a tuple
- You can use any name after the *, but "args" is conventional
- *args must come after regular positional parameters
- You can iterate over args like any other tuple`
    },
    {
      type: 'code',
      title: 'Function with *args',
      language: 'python',
      code: `# Function that takes any number of arguments
def print_all(*args):
    print("Received", len(args), "arguments")
    for arg in args:
        print("Argument:", arg)`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Calling Function with Different Numbers of Arguments',
      language: 'python',
      code: `# Call with different numbers of arguments
print_all("apple")
print_all("red", "green", "blue")`
    },
    {
      type: 'output',
      content: `Received 1 arguments
Argument: apple
Received 3 arguments
Argument: red
Argument: green
Argument: blue`
    },
    {
      type: 'code',
      title: 'Practical *args Example - Sum Function',
      language: 'python',
      code: `# Function to sum any number of values
def calculate_sum(*numbers):
    total = 0
    for num in numbers:
        total = total + num
    print("Sum of all numbers:", total)`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Using the Sum Function',
      language: 'python',
      code: `# Sum different amounts of numbers
calculate_sum(1, 2, 3)
calculate_sum(10, 20, 30, 40, 50)`
    },
    {
      type: 'output',
      content: `Sum of all numbers: 6
Sum of all numbers: 150`
    },
    {
      type: 'code',
      title: 'Combining Regular Parameters with *args',
      language: 'python',
      code: `# Mix regular parameters with *args
def greet_group(greeting, *names):
    print(greeting)
    for name in names:
        print("Hello", name)`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Using Combined Parameters',
      language: 'python',
      code: `# First argument is greeting, rest are names
greet_group("Welcome everyone!", "Alice", "Bob")
greet_group("Good morning!", "Charlie")`
    },
    {
      type: 'output',
      content: `Welcome everyone!
Hello Alice
Hello Bob
Good morning!
Hello Charlie`
    },
    {
      type: 'text',
      title: 'Keyword Arguments with **kwargs',
      content: `**kwargs (keyword arguments) allows a function to accept any number of keyword arguments. The arguments are collected into a dictionary.

**When to use **kwargs:**
- When you want to accept optional named parameters
- Building functions that forward arguments to other functions
- Creating flexible configuration functions
- Handling optional settings or properties

**Key points:**
- **kwargs collects extra keyword arguments into a dictionary
- You can use any name after **, but "kwargs" is conventional
- **kwargs must come after *args if both are used
- You can access kwargs like any other dictionary`
    },
    {
      type: 'code',
      title: 'Function with **kwargs',
      language: 'python',
      code: `# Function that accepts any keyword arguments
def display_info(**kwargs):
    print("Received", len(kwargs), "keyword arguments")
    for key, value in kwargs.items():
        print(key + ":", value)`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Calling Function with Keyword Arguments',
      language: 'python',
      code: `# Call with different keyword arguments
display_info(name="Alice", age=25)
display_info(city="Paris", country="France", population=2000000)`
    },
    {
      type: 'output',
      content: `Received 2 keyword arguments
name: Alice
age: 25
Received 3 keyword arguments
city: Paris
country: France
population: 2000000`
    },
    {
      type: 'code',
      title: 'Combining All Argument Types',
      language: 'python',
      code: `# Function with all argument types
def create_report(title, *sections, **details):
    print("Report:", title)
    print("Sections:", len(sections))
    for section in sections:
        print("-", section)
    print("Details:")
    for key, value in details.items():
        print(key + ":", value)`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Using the Complete Function',
      language: 'python',
      code: `# Call with all types of arguments
create_report("Monthly Sales", "Overview", "Data", author="John", date="2024")`
    },
    {
      type: 'output',
      content: `Report: Monthly Sales
Sections: 2
- Overview
- Data
Details:
author: John
date: 2024`
    },
    {
      type: 'text',
      title: 'Argument Order and Best Practices',
      content: `**Correct parameter order in function definitions:**
1. Regular positional parameters
2. Default parameters  
3. *args
4. **kwargs

**Example:** \`def func(pos1, pos2, default1="value", *args, **kwargs):\`

**Best Practices:**
- Use positional arguments for required, obvious parameters
- Use keyword arguments for optional or complex parameters
- Use default values for commonly used optional parameters
- Use *args when the number of arguments varies
- Use **kwargs for optional named configuration
- Choose clear, descriptive parameter names
- Document complex parameter combinations

**When to use each:**
- **Positional**: Essential data that always needs to be provided
- **Keyword**: Optional settings or when parameter names add clarity
- **Default**: Reasonable fallback values for optional parameters
- ***args**: Variable-length lists of similar items
- ****kwargs**: Optional configuration or metadata`
    }
  ]
};