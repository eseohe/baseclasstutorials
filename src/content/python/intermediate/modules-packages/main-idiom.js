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
      type: 'text',
      title: 'Step 1: Demonstrating __name__ Values',
      content: `Let's see how __name__ behaves in different contexts.

**Create a file named \`demo_module.py\` with the following code:**`
    },
    {
      type: 'code',
      title: 'demo_module.py',
      language: 'python',
      code: `print("This module's __name__ is:", __name__)

def greet(name):
    """Function that can be imported and used."""
    return f"Hello, {name}!"

print("Module loaded successfully")`
    },
    {
      type: 'text',
      title: 'Step 2: Importing the Module',
      content: `Now, in another file (for example, \`main.py\`), import and use the module:`
    },
    {
      type: 'code',
      title: 'main.py',
      language: 'python',
      code: `import demo_module

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
      title: 'Step 3: Running the Module Directly',
      content: `If you run \`demo_module.py\` directly (not import it), __name__ will be "__main__":`
    },
    {
      type: 'output',
      title: 'Output',
      content: `This module's __name__ is: __main__
Module loaded successfully`
    },
    {
      type: 'text',
      title: 'Using the Main Idiom for Dual-Purpose Modules',
      content: `The __name__ == "__main__" idiom lets you write code that only runs when the file is executed directly, not when imported.

**Create a file named \`temperature_converter.py\` with the following code:**`
    },
    {
      type: 'code',
      title: 'temperature_converter.py',
      language: 'python',
      code: `def celsius_to_fahrenheit(celsius):
    """Convert Celsius to Fahrenheit."""
    return (celsius * 9/5) + 32

def fahrenheit_to_celsius(fahrenheit):
    """Convert Fahrenheit to Celsius."""
    return (fahrenheit - 32) * 5/9

def main():
    print("Temperature Converter")
    print("20°C in Fahrenheit:", celsius_to_fahrenheit(20))
    print("68°F in Celsius:", fahrenheit_to_celsius(68))

if __name__ == "__main__":
    main()`
    },
    {
      type: 'text',
      title: 'Importing Functions Without Running Main',
      content: `Now, in another file, you can import and use the functions without running the main block:`
    },
    {
      type: 'code',
      title: 'main.py',
      language: 'python',
      code: `from temperature_converter import celsius_to_fahrenheit, fahrenheit_to_celsius

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
      content: `The main idiom is perfect for command-line tools. You can use sys.argv to handle command-line arguments.

**Create a file named \`calculator_cli.py\` with the following code:**`
    },
    {
      type: 'code',
      title: 'calculator_cli.py',
      language: 'python',
      code: `import sys

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Error: Division by zero"
    return a / b

def main():
    print("Calculator Module")
    print("Demo: 10 + 5 =", add(10, 5))
    print("Demo: 10 - 3 =", subtract(10, 3))
    print("Demo: 4 × 6 =", multiply(4, 6))
    print("Demo: 15 ÷ 3 =", divide(15, 3))

if __name__ == "__main__":
    main()`
    },
    {
      type: 'text',
      title: 'Using Calculator as a Module',
      content: `You can import functions from \`calculator_cli.py\` in another file without running the main block:`
    },
    {
      type: 'code',
      title: 'main.py',
      language: 'python',
      code: `from calculator_cli import add, multiply, divide

result1 = add(7, 3)
result2 = multiply(4, 5)
result3 = divide(20, 4)

print("7 + 3 =", result1)
print("4 × 5 =", result2)
print("20 ÷ 4 =", result3)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `7 + 3 = 10
4 × 5 = 20
20 ÷ 4 = 5.0`
    },
    {
      type: 'text',
      title: 'Testing and Development Benefits',
      content: `The main idiom makes testing and development much easier because you can import functions without side effects.

**Development benefits:**
- Interactive testing: Import functions in Python shell for quick testing
- Unit testing: Test individual functions without running the whole script
- Debugging: Debug specific functions without script overhead
- Code reuse: Other scripts can import and use your functions
- Modular design: Encourages separation of concerns`
    },
    {
      type: 'text',
      title: 'Example: Testable Utility Module',
      content: `**Create a file named \`string_utils.py\` with the following code:**`
    },
    {
      type: 'code',
      title: 'string_utils.py',
      language: 'python',
      code: `def reverse_string(text):
    return text[::-1]

def count_vowels(text):
    vowels = "aeiouAEIOU"
    return sum(1 for char in text if char in vowels)

def is_palindrome(text):
    cleaned = text.replace(" ", "").lower()
    return cleaned == cleaned[::-1]

def run_tests():
    print("Testing string utilities...")
    assert reverse_string("hello") == "olleh"
    assert count_vowels("hello") == 2
    assert is_palindrome("racecar") == True
    print("All tests passed!")

def main():
    print("String Utilities Demo")
    print("Reverse 'Python':", reverse_string("Python"))
    print("Vowels in 'Hello World':", count_vowels("Hello World"))
    print("Is 'level' a palindrome?", is_palindrome("level"))

if __name__ == "__main__":
    run_tests()
    print()
    main()`
    },
    {
      type: 'text',
      title: 'Testing Individual Functions',
      content: `You can import and test functions individually:`
    },
    {
      type: 'code',
      title: 'main.py',
      language: 'python',
      code: `from string_utils import reverse_string, count_vowels, is_palindrome

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
- Data processing scripts: Run analysis when executed, provide functions when imported
- Web scrapers: Scrape data when run, provide scraping functions when imported
- Command-line tools: CLI when executed, API when imported
- Test runners: Run tests when executed, provide test functions when imported
- Utility libraries: Demo functionality when run, provide utilities when imported

This pattern is so common that it's considered a Python best practice.`
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
- Dual purpose: Script can be imported or executed
- Testing: Functions can be tested independently
- Reusability: Code can be reused in other projects
- Organization: Clear separation of library and script code

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