// Lesson content for Return values and scope
export const returnScopeContent = {
  id: 'return-scope',
  title: 'Return values and scope',
  duration: '25 min',
  overview: `Master function return values and variable scope! Learn how functions can send data back, understand local vs global variables, and discover how Python manages variable access across different parts of your program.`,
  objectives: [
    'Use return statements to send values back from functions',
    'Understand the difference between functions that print vs return values',
    'Master local and global variable scope',
    'Apply return values in calculations and data processing',
    'Avoid common scope-related errors and write cleaner code',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Return Values',
      content: `Return values allow functions to send data back to the code that called them. This is how functions can process data and provide results for further use.

**Print vs Return:**
- **Print**: Displays output to the screen (for humans to see)
- **Return**: Sends data back to the program (for the program to use)

**Key concepts:**
- Functions can return any type of data: numbers, strings, lists, etc.
- A function stops executing when it hits a return statement
- Functions without explicit return statements return None
- You can capture return values in variables for later use

**Real-world analogy:**
Think of a function like a calculator. When you press "=" after entering "2 + 3", the calculator returns 5. You can then use that 5 in another calculation. Similarly, functions return values that you can use in other parts of your program.`
    },
    {
      type: 'code',
      title: 'Function Without Return (Prints Only)',
      language: 'python',
      code: `# Function that prints but doesn't return
def print_sum(a, b):
    result = a + b
    print("The sum is:", result)`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Using the Print-Only Function',
      language: 'python',
      code: `# This prints the result but doesn't return it
print_sum(3, 5)
print("Function completed")`
    },
    {
      type: 'output',
      content: `The sum is: 8
Function completed`
    },
    {
      type: 'code',
      title: 'Function With Return Statement',
      language: 'python',
      code: `# Function that returns a value
def calculate_sum(a, b):
    result = a + b
    return result`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Using the Return Value',
      language: 'python',
      code: `# Capture the returned value
answer = calculate_sum(3, 5)
print("The returned sum is:", answer)`
    },
    {
      type: 'output',
      content: `The returned sum is: 8`
    },
    {
      type: 'code',
      title: 'Using Return Values in Calculations',
      language: 'python',
      code: `# Use return value in further calculations
first_sum = calculate_sum(10, 15)
second_sum = calculate_sum(20, 25)
total = first_sum + second_sum
print("Total of both sums:", total)`
    },
    {
      type: 'output',
      content: `Total of both sums: 70`
    },
    {
      type: 'code',
      title: 'Function Returning Different Data Types',
      language: 'python',
      code: `# Function returning a string
def create_greeting(name):
    message = "Hello, " + name + "!"
    return message`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Using String Return Value',
      language: 'python',
      code: `# Use the returned string
greeting = create_greeting("Alice")
print(greeting)
print(create_greeting("Bob"))`
    },
    {
      type: 'output',
      content: `Hello, Alice!
Hello, Bob!`
    },
    {
      type: 'code',
      title: 'Function Returning Multiple Values',
      language: 'python',
      code: `# Function returning multiple values as a tuple
def get_name_age():
    name = "Charlie"
    age = 30
    return name, age`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Using Multiple Return Values',
      language: 'python',
      code: `# Unpack multiple return values
person_name, person_age = get_name_age()
print("Name:", person_name)
print("Age:", person_age)`
    },
    {
      type: 'output',
      content: `Name: Charlie
Age: 30`
    },
    {
      type: 'text',
      title: 'Understanding Variable Scope',
      content: `Scope determines where variables can be accessed in your program. Python has different levels of scope that control variable visibility.

**Types of scope:**
- **Local scope**: Variables defined inside a function
- **Global scope**: Variables defined outside all functions
- **Built-in scope**: Built-in names like print(), len(), etc.

**Key rules:**
- Variables created inside functions are local to that function
- Local variables cannot be accessed outside their function
- Functions can read global variables but cannot modify them directly
- Each function call creates its own local scope

**Why scope matters:**
- Prevents naming conflicts between functions
- Keeps variables organized and contained
- Makes code more predictable and easier to debug
- Allows functions to work independently`
    },
    {
      type: 'code',
      title: 'Local Variables Example',
      language: 'python',
      code: `# Variables inside functions are local
def calculate_area():
    length = 5
    width = 3
    area = length * width
    print("Inside function, area is:", area)`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Local Variables Cannot Be Accessed Outside',
      language: 'python',
      code: `# Call the function
calculate_area()
# Try to access local variable (this would cause an error in real Python)
# print(length)  # This would give: NameError: name 'length' is not defined`
    },
    {
      type: 'output',
      content: `Inside function, area is: 15`
    },
    {
      type: 'code',
      title: 'Global Variables',
      language: 'python',
      code: `# Global variable (defined outside functions)
company_name = "ABC Corp"

def display_company():
    print("Company:", company_name)`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Functions Can Read Global Variables',
      language: 'python',
      code: `# Function can access global variable
display_company()
print("Global variable:", company_name)`
    },
    {
      type: 'output',
      content: `Company: ABC Corp
Global variable: ABC Corp`
    },
    {
      type: 'code',
      title: 'Local Variables Hide Global Ones',
      language: 'python',
      code: `# Global variable
counter = 100

def test_scope():
    counter = 5  # Local variable with same name
    print("Inside function, counter is:", counter)`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Local vs Global Variables',
      language: 'python',
      code: `# Show the difference
test_scope()
print("Outside function, counter is:", counter)`
    },
    {
      type: 'output',
      content: `Inside function, counter is: 5
Outside function, counter is: 100`
    },
    {
      type: 'code',
      title: 'Functions with Parameters and Local Variables',
      language: 'python',
      code: `# Parameters are also local variables
def process_data(input_value):
    # Both input_value and result are local
    result = input_value * 2 + 10
    print("Processing:", input_value)
    print("Result:", result)
    return result`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Using Function with Local Scope',
      language: 'python',
      code: `# Call function with different values
output1 = process_data(5)
output2 = process_data(10)`
    },
    {
      type: 'output',
      content: `Processing: 5
Result: 20
Processing: 10
Result: 30`
    },
    {
      type: 'code',
      title: 'Practical Example - Temperature Converter',
      language: 'python',
      code: `# Function that returns converted temperature
def celsius_to_fahrenheit(celsius):
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

def fahrenheit_to_celsius(fahrenheit):
    celsius = (fahrenheit - 32) * 5/9
    return celsius`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Using Temperature Converters',
      language: 'python',
      code: `# Convert temperatures and use the results
temp_f = celsius_to_fahrenheit(25)
temp_c = fahrenheit_to_celsius(77)
print("25°C in Fahrenheit:", temp_f)
print("77°F in Celsius:", temp_c)`
    },
    {
      type: 'output',
      content: `25°C in Fahrenheit: 77.0
77°F in Celsius: 25.0`
    },
    {
      type: 'code',
      title: 'Building Complex Calculations',
      language: 'python',
      code: `# Function that uses other functions
def calculate_circle_area(radius):
    pi = 3.14159
    area = pi * radius * radius
    return area

def calculate_circle_info(radius):
    area = calculate_circle_area(radius)
    circumference = 2 * 3.14159 * radius
    print("Radius:", radius)
    print("Area:", area)
    return area, circumference`
    },
    {
      type: 'output',
      content: `# No output yet - function is defined but not called`
    },
    {
      type: 'code',
      title: 'Using Complex Function',
      language: 'python',
      code: `# Use function that calls other functions
area, circumference = calculate_circle_info(5)
print("Circumference:", circumference)`
    },
    {
      type: 'output',
      content: `Radius: 5
Area: 78.53975
Circumference: 31.4159`
    },
    {
      type: 'text',
      title: 'Best Practices for Return Values and Scope',
      content: `**Return Value Best Practices:**
- Use return statements for functions that calculate or process data
- Use print statements for functions that display information to users
- Return meaningful data types - numbers for calculations, strings for text processing
- Consider returning multiple values when a function naturally produces several results

**Scope Best Practices:**
- Keep variables local when possible - it makes functions more independent
- Use descriptive names to avoid confusion between local and global variables
- Pass data into functions through parameters rather than relying on global variables
- Return data from functions rather than modifying global variables

**Common Patterns:**
- **Calculator functions**: Take inputs, return calculated results
- **Validator functions**: Take data, return True/False or cleaned data
- **Formatter functions**: Take raw data, return formatted strings
- **Converter functions**: Take one format, return another format

**Debugging Tips:**
- If a variable "doesn't exist", check if it's local to a function
- If a function isn't working with your data, make sure you're capturing its return value
- Use print statements to check what values functions are actually returning`
    }
  ]
};