// Lesson content for __name__ == "__main__" idiom
export const mainIdiomContent = {
  id: 'main-idiom',
  title: '__name__ == "__main__" idiom',
  duration: '20 min',
  overview: `Master the Python __name__ == "__main__" idiom! Learn how to create modules that can be both imported and run as standalone scripts, understand Python's module execution model, and write more flexible and testable code.`,
  objectives: [
    'Understand what __name__ is and how Python sets its value',
    'Learn the difference between importing a module and running it directly',
    'Use the __name__ == "__main__" idiom to create dual-purpose modules',
    'Write modules that can be tested and executed independently',
    'Understand best practices for script organization and entry points',
    'Create command-line scripts with proper module structure',
  ],
  sections: [
    {
      type: 'text',
      title: 'Understanding __name__ in Python',
      content: `Every Python module has a built-in variable called __name__ that Python automatically sets based on how the module is being used.

**How __name__ works:**
- When a module is **imported**: __name__ is set to the module's filename (without .py)
- When a module is **run directly**: __name__ is set to "__main__"
- This allows modules to behave differently depending on how they're used

**Why this matters:**
- Create modules that can be both imported and executed
- Write testable code that doesn't run when imported
- Organize code with clear entry points
- Build command-line tools from importable modules

**The idiom pattern:**
\`\`\`python
if __name__ == "__main__":
    # Code that only runs when script is executed directly
    main()
\`\`\`

This is one of the most important Python patterns for writing professional, reusable code.`
    },
    {
      type: 'code',
      title: 'Demonstrating __name__ Values',
      language: 'python',
      code: `# Creating demo_module.py to show __name__ values
demo_content = '''
print("This module's __name__ is:", __name__)

def greet(name):
    """Function that can be imported and used."""
    return f"Hello, {name}!"

# This will print when the module is imported OR run
print("Module loaded successfully")
'''

with open("demo_module.py", "w") as f:
    f.write(demo_content)

print("Created demo_module.py")
print("Now let's import it to see __name__")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Created demo_module.py
Now let's import it to see __name__`
    },
    {
      type: 'code',
      title: 'Importing the Module',
      language: 'python',
      code: `# Importing demo_module to see what happens
import demo_module

# Using the imported function
greeting = demo_module.greet("Alice")
print("Function result:", greeting)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `This module's __name__ is: demo_module
Module loaded successfully
Function result: Hello, Alice!`
    },
    {
      type: 'text',
      title: 'Creating Scripts with the Main Idiom',
      content: `The __name__ == "__main__" idiom allows you to create modules that work both as importable libraries and as standalone scripts.

**Benefits of using this pattern:**
- **Dual purpose**: Module can be imported or run directly
- **Testing**: Easy to test functions without running the whole script
- **Reusability**: Other modules can import your functions
- **Organization**: Clear separation between library code and script code
- **Command-line tools**: Create executable scripts with importable functions

**Typical structure:**
1. Import statements
2. Function and class definitions
3. Main execution block with if __name__ == "__main__":`
    },
    {
      type: 'code',
      title: 'Module with Main Idiom',
      language: 'python',
      code: `# Creating temperature_converter.py with main idiom
temp_converter_content = '''
def celsius_to_fahrenheit(celsius):
    """Convert Celsius to Fahrenheit."""
    return (celsius * 9/5) + 32

def fahrenheit_to_celsius(fahrenheit):
    """Convert Fahrenheit to Celsius."""
    return (fahrenheit - 32) * 5/9

def main():
    """Main function that runs when script is executed."""
    print("Temperature Converter")
    print("20°C in Fahrenheit:", celsius_to_fahrenheit(20))
    print("68°F in Celsius:", fahrenheit_to_celsius(68))

if __name__ == "__main__":
    main()
'''

with open("temperature_converter.py", "w") as f:
    f.write(temp_converter_content)

print("Created temperature_converter.py with main idiom")
print("Module can be imported or run directly")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Created temperature_converter.py with main idiom
Module can be imported or run directly`
    },
    {
      type: 'code',
      title: 'Importing Functions Without Running Main',
      language: 'python',
      code: `# Importing functions without executing the main block
from temperature_converter import celsius_to_fahrenheit, fahrenheit_to_celsius

# Use the functions without running the main script
temp_f = celsius_to_fahrenheit(25)
temp_c = fahrenheit_to_celsius(77)

print("25°C =", temp_f, "°F")
print("77°F =", temp_c, "°C")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `25°C = 77.0 °F
77°F = 25.0 °C`
    },
    {
      type: 'text',
      title: 'Command-Line Scripts with Arguments',
      content: `The main idiom is perfect for creating command-line tools that can also be imported as modules. You can use sys.argv to handle command-line arguments.

**Command-line script pattern:**
\`\`\`python
import sys

def main():
    if len(sys.argv) > 1:
        # Handle command-line arguments
        process_arguments(sys.argv[1:])
    else:
        # Default behavior or interactive mode
        default_behavior()

if __name__ == "__main__":
    main()
\`\`\``
    },
    {
      type: 'code',
      title: 'Command-Line Calculator',
      language: 'python',
      code: `# Creating calculator_cli.py with command-line interface
calculator_cli_content = '''
import sys

def add(a, b):
    """Add two numbers."""
    return a + b

def subtract(a, b):
    """Subtract b from a."""
    return a - b

def multiply(a, b):
    """Multiply two numbers."""
    return a * b

def divide(a, b):
    """Divide a by b."""
    if b == 0:
        return "Error: Division by zero"
    return a / b

def main():
    """Main function for command-line interface."""
    print("Calculator Module")
    
    # Demo calculations
    print("Demo: 10 + 5 =", add(10, 5))
    print("Demo: 10 - 3 =", subtract(10, 3))
    print("Demo: 4 × 6 =", multiply(4, 6))
    print("Demo: 15 ÷ 3 =", divide(15, 3))

if __name__ == "__main__":
    main()
'''

with open("calculator_cli.py", "w") as f:
    f.write(calculator_cli_content)

print("Created calculator_cli.py")
print("Functions can be imported, script can be run")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Created calculator_cli.py
Functions can be imported, script can be run`
    },
    {
      type: 'code',
      title: 'Using Calculator as Module',
      language: 'python',
      code: `# Importing calculator functions without running main
from calculator_cli import add, multiply, divide

# Using imported functions in our code
result1 = add(7, 3)
result2 = multiply(4, 5)
result3 = divide(20, 4)

print("Using imported functions:")
print("7 + 3 =", result1)
print("4 × 5 =", result2)
print("20 ÷ 4 =", result3)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Using imported functions:
7 + 3 = 10
4 × 5 = 20
20 ÷ 4 = 5.0`
    },
    {
      type: 'text',
      title: 'Testing and Development Benefits',
      content: `The main idiom makes testing and development much easier because you can import functions without side effects.

**Development benefits:**
- **Interactive testing**: Import functions in Python shell for quick testing
- **Unit testing**: Test individual functions without running the whole script
- **Debugging**: Debug specific functions without script overhead
- **Code reuse**: Other scripts can import and use your functions
- **Modular design**: Encourages separation of concerns

**Testing example:**
You can test individual functions without worrying about the script's main execution path.`
    },
    {
      type: 'code',
      title: 'Testable Module Example',
      language: 'python',
      code: `# Creating string_utils.py - a testable utility module
string_utils_content = '''
def reverse_string(text):
    """Reverse a string."""
    return text[::-1]

def count_vowels(text):
    """Count vowels in a string."""
    vowels = "aeiouAEIOU"
    return sum(1 for char in text if char in vowels)

def is_palindrome(text):
    """Check if text is a palindrome (ignoring case and spaces)."""
    cleaned = text.replace(" ", "").lower()
    return cleaned == cleaned[::-1]

def run_tests():
    """Run some basic tests."""
    print("Testing string utilities...")
    
    # Test reverse_string
    assert reverse_string("hello") == "olleh"
    print("✓ reverse_string test passed")
    
    # Test count_vowels
    assert count_vowels("hello") == 2
    print("✓ count_vowels test passed")
    
    # Test is_palindrome
    assert is_palindrome("racecar") == True
    print("✓ is_palindrome test passed")
    
    print("All tests passed!")

def main():
    """Main function for demonstration."""
    print("String Utilities Demo")
    print("Reverse 'Python':", reverse_string("Python"))
    print("Vowels in 'Hello World':", count_vowels("Hello World"))
    print("Is 'level' a palindrome?", is_palindrome("level"))

if __name__ == "__main__":
    run_tests()
    print()
    main()
'''

with open("string_utils.py", "w") as f:
    f.write(string_utils_content)

print("Created testable string_utils.py module")
print("Includes both utility functions and tests")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Created testable string_utils.py module
Includes both utility functions and tests`
    },
    {
      type: 'code',
      title: 'Testing Individual Functions',
      language: 'python',
      code: `# Testing individual functions without running main
from string_utils import reverse_string, count_vowels, is_palindrome

# Test the functions individually
word = "programming"
reversed_word = reverse_string(word)
vowel_count = count_vowels(word)
is_palin = is_palindrome("A man a plan a canal Panama")

print("Word:", word)
print("Reversed:", reversed_word)
print("Vowels:", vowel_count)
print("Panama phrase is palindrome:", is_palin)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Word: programming
Reversed: gnimmargopr
Vowels: 3
Panama phrase is palindrome: True`
    },
    {
      type: 'text',
      title: 'Practical Applications',
      content: `The __name__ == "__main__" idiom is essential for professional Python development and appears in most real-world Python projects.

**Real-world use cases:**
- **Data processing scripts**: Run analysis when executed, provide functions when imported
- **Web scrapers**: Scrape data when run, provide scraping functions when imported
- **Command-line tools**: CLI when executed, API when imported
- **Test runners**: Run tests when executed, provide test functions when imported
- **Configuration scripts**: Apply config when run, provide config functions when imported
- **Utility libraries**: Demo functionality when run, provide utilities when imported

This pattern is so common that it's considered a Python best practice.`
    },
    {
      type: 'code',
      title: 'Practical Example: File Processor',
      language: 'python',
      code: `# Creating file_processor.py - practical dual-purpose module
file_processor_content = '''
import os

def count_lines(filename):
    """Count lines in a text file."""
    try:
        with open(filename, "r") as file:
            return len(file.readlines())
    except FileNotFoundError:
        return 0

def count_words(filename):
    """Count words in a text file."""
    try:
        with open(filename, "r") as file:
            content = file.read()
            return len(content.split())
    except FileNotFoundError:
        return 0

def get_file_info(filename):
    """Get comprehensive file information."""
    if not os.path.exists(filename):
        return {"error": "File not found"}
    
    return {
        "filename": filename,
        "lines": count_lines(filename),
        "words": count_words(filename),
        "size": os.path.getsize(filename)
    }

def main():
    """Demo the file processing functions."""
    print("File Processor Demo")
    
    # Create a sample file for demo
    with open("sample.txt", "w") as f:
        f.write("Hello world\\nThis is line 2\\nThird line here")
    
    info = get_file_info("sample.txt")
    print("Sample file info:", info)

if __name__ == "__main__":
    main()
'''

with open("file_processor.py", "w") as f:
    f.write(file_processor_content)

print("Created file_processor.py")
print("Can be used as library or standalone tool")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Created file_processor.py
Can be used as library or standalone tool`
    },
    {
      type: 'code',
      title: 'Using File Processor as Library',
      language: 'python',
      code: `# Using file_processor as an imported library
from file_processor import count_lines, count_words, get_file_info

# Create a test file
with open("test_doc.txt", "w") as f:
    f.write("Python programming\\nIs very powerful\\nAnd quite useful")

# Use the imported functions
lines = count_lines("test_doc.txt")
words = count_words("test_doc.txt")

print("Test document analysis:")
print("Lines:", lines)
print("Words:", words)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Test document analysis:
Lines: 3
Words: 8`
    },
    {
      type: 'text',
      title: 'Key Takeaways',
      content: `🎯 **Key Points to Remember:**

**The __name__ Variable:**
- Set to "__main__" when script is run directly
- Set to module name when script is imported
- Allows conditional execution based on usage

**The Main Idiom Pattern:**
\`\`\`python
if __name__ == "__main__":
    main()
\`\`\`

**Benefits:**
- **Dual purpose**: Script can be imported or executed
- **Testing**: Functions can be tested independently
- **Reusability**: Code can be reused in other projects
- **Organization**: Clear separation of library and script code

**Best Practices:**
- Put main logic in a main() function
- Keep the if __name__ == "__main__" block simple
- Include example usage or tests in the main block
- Make functions importable and reusable
- Document your functions with docstrings

**When to Use:**
- Any script that might be imported by other code
- Command-line tools that provide reusable functions
- Modules that include example or test code
- Scripts that process data or perform utility functions

The __name__ == "__main__" idiom is essential for writing professional, reusable Python code!`
    }
  ]
};