// Lesson content for Defining and calling functions
export const definingFunctionsContent = {
  id: 'defining-functions',
  title: 'Defining and calling functions',
  duration: '25 min',
  overview: `Master the fundamentals of Python functions! Learn to create reusable code blocks, understand function syntax, and discover how functions make your programs more organized, maintainable, and powerful.`,
  objectives: [
    'Understand what functions are and why they are essential in programming',
    'Define functions using the def keyword with proper syntax',
    'Call functions and understand the execution flow',
    'Create functions that perform specific tasks and calculations',
    'Apply functions to solve real-world programming problems',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Functions',
      content: `Functions are reusable blocks of code that perform specific tasks. Think of them as mini-programs within your program that you can use over and over again.

**Why use functions?**
- **Avoid repetition**: Write code once, use it many times
- **Organization**: Break complex problems into smaller, manageable pieces
- **Readability**: Make your code easier to understand and maintain
- **Testing**: Test individual pieces of functionality separately
- **Reusability**: Use the same function in different parts of your program

**Real-world analogy:**
A function is like a recipe - you define the steps once, then you can follow those steps whenever you need to make that dish. In programming, you define the function once, then call it whenever you need that functionality.

**Function Structure:**
- **Definition**: Creating the function with \`def\`
- **Calling**: Using the function by writing its name with parentheses
- **Parameters**: Input values the function can work with
- **Return**: Output values the function can provide back`
    },
    {
      type: 'code',
      title: 'Basic Function Definition',
      language: 'python',
      code: `# Define a simple function
def say_hello():
    print("Hello, World!")
    print("Welcome to Python functions!")`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Calling the Function',
      language: 'python',
      code: `# Call the function to execute its code
say_hello()`
    },
    {
      type: 'output',
      content: `Hello, World!
Welcome to Python functions!`
    },
    {
      type: 'code',
      title: 'Calling Functions Multiple Times',
      language: 'python',
      code: `# Functions can be called multiple times
say_hello()
say_hello()`
    },
    {
      type: 'output',
      content: `Hello, World!
Welcome to Python functions!
Hello, World!
Welcome to Python functions!`
    },
    {
      type: 'text',
      title: 'Functions with Parameters',
      content: `Parameters allow functions to work with different input values. They make functions more flexible and useful.

**Parameter basics:**
- Parameters are variables that receive values when the function is called
- They are defined inside the parentheses in the function definition
- You can have multiple parameters separated by commas
- The values passed to a function are called "arguments"

**Example scenarios:**
- A greeting function that takes a name parameter
- A calculation function that takes numbers as parameters
- A formatting function that takes text and style parameters`
    },
    {
      type: 'code',
      title: 'Function with One Parameter',
      language: 'python',
      code: `# Function that takes a name parameter
def greet_person(name):
    print("Hello,", name)
    print("Nice to meet you!")`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Calling Function with Argument',
      language: 'python',
      code: `# Call function with different arguments
greet_person("Alice")
greet_person("Bob")`
    },
    {
      type: 'output',
      content: `Hello, Alice
Nice to meet you!
Hello, Bob
Nice to meet you!`
    },
    {
      type: 'code',
      title: 'Function with Multiple Parameters',
      language: 'python',
      code: `# Function with two parameters
def introduce_person(name, age):
    print("This is", name)
    print("They are", age, "years old")`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Calling Function with Multiple Arguments',
      language: 'python',
      code: `# Call with multiple arguments
introduce_person("Charlie", 25)
introduce_person("Diana", 30)`
    },
    {
      type: 'output',
      content: `This is Charlie
They are 25 years old
This is Diana
They are 30 years old`
    },
    {
      type: 'code',
      title: 'Function for Calculations',
      language: 'python',
      code: `# Function that performs calculations
def calculate_area(length, width):
    area = length * width
    print("Length:", length)
    print("Width:", width)
    print("Area:", area)`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Using the Calculation Function',
      language: 'python',
      code: `# Call the calculation function
calculate_area(5, 3)
calculate_area(10, 7)`
    },
    {
      type: 'output',
      content: `Length: 5
Width: 3
Area: 15
Length: 10
Width: 7
Area: 70`
    },
    {
      type: 'text',
      title: 'Functions for Organization',
      content: `Functions help organize your code by grouping related operations together. Instead of writing long scripts, you can break them into logical functions.

**Benefits of organized code:**
- Each function has a single, clear purpose
- Easier to find and fix bugs
- Easier to add new features
- Code becomes self-documenting when functions have good names
- You can work on one function at a time

**Good function naming:**
- Use descriptive names that explain what the function does
- Use verbs for actions: \`calculate_total()\`, \`display_menu()\`
- Be specific: \`get_user_age()\` is better than \`get_input()\``
    },
    {
      type: 'code',
      title: 'Functions for Menu System',
      language: 'python',
      code: `# Function to display a menu
def show_menu():
    print("=== Main Menu ===")
    print("1. Option One")
    print("2. Option Two")
    print("3. Exit")`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Function for Processing Choice',
      language: 'python',
      code: `# Function to handle user choice
def process_choice(choice):
    if choice == 1:
        print("You selected Option One")
    elif choice == 2:
        print("You selected Option Two")
    else:
        print("Invalid choice")`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Using the Menu Functions',
      language: 'python',
      code: `# Use both functions together
show_menu()
process_choice(1)`
    },
    {
      type: 'output',
      content: `=== Main Menu ===
1. Option One
2. Option Two
3. Exit
You selected Option One`
    },
    {
      type: 'code',
      title: 'Practical Example - Temperature Converter',
      language: 'python',
      code: `# Function to convert Celsius to Fahrenheit
def celsius_to_fahrenheit(celsius):
    fahrenheit = (celsius * 9/5) + 32
    print("Temperature in Celsius:", celsius)
    print("Temperature in Fahrenheit:", fahrenheit)`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Using the Temperature Converter',
      language: 'python',
      code: `# Convert different temperatures
celsius_to_fahrenheit(0)
celsius_to_fahrenheit(25)`
    },
    {
      type: 'output',
      content: `Temperature in Celsius: 0
Temperature in Fahrenheit: 32.0
Temperature in Celsius: 25
Temperature in Fahrenheit: 77.0`
    },
    {
      type: 'code',
      title: 'Function for Data Validation',
      language: 'python',
      code: `# Function to check if a number is positive
def check_positive(number):
    if number > 0:
        print("Number", number, "is positive")
    else:
        print("Number", number, "is not positive")`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Using the Validation Function',
      language: 'python',
      code: `# Test with different numbers
check_positive(5)
check_positive(-3)`
    },
    {
      type: 'output',
      content: `Number 5 is positive
Number -3 is not positive`
    },
    {
      type: 'text',
      title: 'Function Best Practices',
      content: `**Good Function Design:**
- **Single purpose**: Each function should do one thing well
- **Clear names**: Function names should explain what they do
- **Consistent style**: Use the same naming convention throughout your code
- **Reasonable length**: If a function is too long, consider breaking it into smaller functions

**Common Patterns:**
- **Calculator functions**: Take numbers, perform calculations, show results
- **Display functions**: Show information to the user
- **Validation functions**: Check if data meets certain criteria
- **Conversion functions**: Transform data from one format to another

**Remember:**
- Define functions before calling them
- Use descriptive parameter names
- Test functions with different inputs
- Functions make debugging easier - you can test each function separately`
    }
  ]
};