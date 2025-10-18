export const creatingModulesContent = {
  id: 'creating-modules',
  title: 'Creating your own modules',
  duration: '25 min',
  overview: `Learn to create your own Python modules! Organize code into reusable files, define functions, classes, and variables, and import them in other programs for better maintainability and reusability.`,
  objectives: [
    'Understand what makes a Python file a module',
    'Create modules with functions, variables, and classes',
    'Import and use your custom modules in other programs',
    'Organize related functionality into logical modules',
    'Follow best practices for module design and documentation',
    'Handle module initialization and private elements',
  ],
  sections: [
    {
      type: 'text',
      title: 'What Are Custom Modules?',
      content: `Any Python file can be a module! When you create a .py file with functions, classes, or variables, you can import and use that code in other Python programs.

**Benefits of creating modules:**
- Code reuse: Write once, use many times
- Organization: Group related functionality together
- Maintainability: Easier to update and debug code
- Collaboration: Share functionality across team members
- Testing: Easier to test individual components

**Module basics:**
- A module is simply a .py file
- Everything defined in the file can be imported
- Module name is the filename without .py extension
- Modules can contain functions, classes, variables, and executable code`
    },
    {
      type: 'text',
      title: 'Step 1: Create a Simple Module',
      content: `Let's create a simple module with some math functions and a constant.

**Create a file named \`math_utils.py\` and add the following code:**`
    },
    {
      type: 'code',
      title: 'math_utils.py',
      language: 'python',
      code: `def add(a, b):
    """Add two numbers and return the result."""
    return a + b

def multiply(a, b):
    """Multiply two numbers and return the result."""
    return a * b

PI = 3.14159`
    },
    {
      type: 'text',
      title: 'Step 2: Use Your Custom Module',
      content: `Now, in another Python file (for example, \`main.py\`), you can import and use your module:`
    },
    {
      type: 'code',
      title: 'main.py',
      language: 'python',
      code: `import math_utils

result1 = math_utils.add(5, 3)
result2 = math_utils.multiply(4, 7)
pi_value = math_utils.PI

print("5 + 3 =", result1)
print("4 × 7 =", result2)
print("PI value:", pi_value)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `5 + 3 = 8
4 × 7 = 28
PI value: 3.14159`
    },
    {
      type: 'text',
      title: 'Importing Specific Functions',
      content: `You can also import specific functions or variables directly:`
    },
    {
      type: 'code',
      title: 'main.py',
      language: 'python',
      code: `from math_utils import add, PI

result = add(10, 15)
circle_area = PI * 5 * 5

print("10 + 15 =", result)
print("Circle area (radius 5):", circle_area)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `10 + 15 = 25
Circle area (radius 5): 78.5395`
    },
    {
      type: 'text',
      title: 'Modules with Classes',
      content: `Modules can contain classes as well as functions and variables.

**Create a file named \`student_manager.py\` and add the following code:**`
    },
    {
      type: 'code',
      title: 'student_manager.py',
      language: 'python',
      code: `class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.grades = []

    def add_grade(self, grade):
        self.grades.append(grade)

    def get_average(self):
        if self.grades:
            return sum(self.grades) / len(self.grades)
        return 0

def create_student(name, age):
    """Factory function to create a new student."""
    return Student(name, age)`
    },
    {
      type: 'text',
      title: 'Using Classes from a Module',
      content: `Now, in your main program, you can use the class and function from your module:`
    },
    {
      type: 'code',
      title: 'main.py',
      language: 'python',
      code: `from student_manager import Student, create_student

# Using the class directly
alice = Student("Alice", 20)
alice.add_grade(85)
alice.add_grade(92)

# Using the factory function
bob = create_student("Bob", 19)
bob.add_grade(78)

print("Alice's average:", alice.get_average())
print("Bob's name:", bob.name)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Alice's average: 88.5
Bob's name: Bob`
    },
    {
      type: 'text',
      title: 'Module Variables and Constants',
      content: `Modules can define variables and constants that are shared across all code that imports the module. This is useful for configuration, shared state, or constants.

**Create a file named \`config.py\` and add the following code:**`
    },
    {
      type: 'code',
      title: 'config.py',
      language: 'python',
      code: `# Application constants
APP_NAME = "Data Science Tutorial"
VERSION = "1.0.0"
MAX_USERS = 1000

# Configuration settings
DEBUG_MODE = True
LOG_LEVEL = "INFO"

# Private configuration (shouldn't be imported directly)
_SECRET_KEY = "internal-use-only"

def get_app_info():
    """Return application information."""
    return f"{APP_NAME} v{VERSION}"

def is_debug_enabled():
    """Check if debug mode is enabled."""
    return DEBUG_MODE`
    },
    {
      type: 'text',
      title: 'Using Module Constants',
      content: `Import and use constants and functions from your configuration module:`
    },
    {
      type: 'code',
      title: 'main.py',
      language: 'python',
      code: `import config

app_info = config.get_app_info()
max_capacity = config.MAX_USERS
debug_status = config.is_debug_enabled()

print("App info:", app_info)
print("Max users:", max_capacity)
print("Debug enabled:", debug_status)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `App info: Data Science Tutorial v1.0.0
Max users: 1000
Debug enabled: True`
    },
    {
      type: 'text',
      title: 'Module Documentation and Docstrings',
      content: `Good modules include documentation that explains what they do, how to use them, and what each function accomplishes.

**Example module docstring and function docstrings:**`
    },
    {
      type: 'code',
      title: 'utilities.py',
      language: 'python',
      code: `"""
Utility functions for common programming tasks.

This module provides helper functions for string manipulation,
list processing, and data validation.
"""

def capitalize_words(text):
    """
    Capitalize the first letter of each word in a string.

    Args:
        text (str): The input string to process

    Returns:
        str: String with each word capitalized
    """
    return ' '.join(word.capitalize() for word in text.split())

def find_max_in_list(numbers):
    """
    Find the maximum value in a list of numbers.

    Args:
        numbers (list): List of numeric values

    Returns:
        float/int: The maximum value, or None if list is empty
    """
    if not numbers:
        return None
    return max(numbers)`
    },
    {
      type: 'text',
      title: 'Using Documented Module',
      content: `Import and use functions from your documented module:`
    },
    {
      type: 'code',
      title: 'main.py',
      language: 'python',
      code: `from utilities import capitalize_words, find_max_in_list

text_result = capitalize_words("hello world python")
numbers = [3, 7, 2, 9, 1]
max_number = find_max_in_list(numbers)

print("Capitalized text:", text_result)
print("Maximum number:", max_number)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Capitalized text: Hello World Python
Maximum number: 9`
    },
    {
      type: 'text',
      title: 'Module Testing and Best Practices',
      content: `When creating modules, it's important to test them and follow best practices for maintainable, reliable code.

**Best practices for module creation:**
- Single responsibility: Each module should have one clear purpose
- Clear naming: Use descriptive names for modules and functions
- Documentation: Include docstrings and comments
- Error handling: Handle edge cases and invalid inputs
- Testing: Test your module functions thoroughly
- Import organization: Keep imports at the top of the file
- Private vs public: Use underscore prefix for internal functions`
    },
    {
      type: 'text',
      title: 'Example: Module with Error Handling',
      content: `**Create a file named \`calculator.py\` with error handling:**`
    },
    {
      type: 'code',
      title: 'calculator.py',
      language: 'python',
      code: `"""Simple calculator module with error handling."""

def safe_divide(a, b):
    """
    Safely divide two numbers with error handling.

    Args:
        a (float): Dividend
        b (float): Divisor

    Returns:
        float or None: Result of division, or None if error
    """
    try:
        if b == 0:
            print("Error: Cannot divide by zero")
            return None
        return a / b
    except (TypeError, ValueError):
        print("Error: Invalid input types")
        return None

def calculate_percentage(part, whole):
    """Calculate percentage with validation."""
    if whole <= 0:
        print("Error: Whole must be positive")
        return None
    return (part / whole) * 100`
    },
    {
      type: 'text',
      title: 'Testing Module Functions',
      content: `Import and test your calculator module:`
    },
    {
      type: 'code',
      title: 'main.py',
      language: 'python',
      code: `from calculator import safe_divide, calculate_percentage

# Test normal operation
result1 = safe_divide(10, 2)
result2 = calculate_percentage(25, 100)

# Test error conditions
result3 = safe_divide(10, 0)  # Division by zero
result4 = calculate_percentage(50, 0)  # Invalid whole

print("10 ÷ 2 =", result1)
print("25% of 100 =", result2)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Error: Cannot divide by zero
Error: Whole must be positive
10 ÷ 2 = 5.0
25% of 100 = 25.0`
    },
    {
      type: 'text',
      title: 'Key Takeaways',
      content: `🎯 **Key Points to Remember:**

**Creating Modules:**
- Any .py file can be imported as a module
- Include functions, classes, variables, and constants
- Use descriptive names and follow naming conventions

**Module Structure:**
- Module docstring at the top
- Imports at the beginning
- Constants in UPPERCASE
- Functions and classes with docstrings
- Private elements with underscore prefix

**Using Your Modules:**
- import module_name: Access with module_name.function()
- from module import function: Use function() directly
- from module import *: Import everything (use sparingly)

**Best Practices:**
- One clear purpose per module
- Comprehensive documentation
- Error handling and validation
- Test your module functions
- Use meaningful names
- Keep modules focused and organized

Creating your own modules is essential for writing organized, reusable, and maintainable Python code. Start modularizing your code today!`
    }
  ]
};