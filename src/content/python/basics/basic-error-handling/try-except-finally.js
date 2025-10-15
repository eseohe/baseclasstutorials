// Lesson content for try, except, finally blocks
const tryExceptFinallyContent = {
  id: 'try-except-finally',
  title: 'try, except, finally blocks',
  duration: '25 min',
  overview: `Master Python's error handling with try-except-finally blocks! Learn to gracefully handle errors, prevent crashes, and write robust programs that can deal with unexpected situations.`,
  objectives: [
    'Understand why error handling is crucial for robust programs',
    'Use try-except blocks to catch and handle exceptions',
    'Implement finally blocks for cleanup code that always runs',
    'Handle multiple types of exceptions with different responses',
    'Write defensive code that gracefully handles user input and external errors',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Error Handling',
      content: `Error handling allows your programs to gracefully deal with unexpected situations instead of crashing. Python uses try-except-finally blocks to catch and handle errors.

**Why use error handling?**
- **Prevent crashes**: Keep your program running even when errors occur
- **User-friendly**: Provide helpful error messages instead of confusing technical errors
- **Robustness**: Handle unpredictable situations like invalid user input
- **Debugging**: Catch errors early and understand what went wrong
- **Clean up**: Ensure resources are properly released even when errors happen

**Real-world analogy:**
Error handling is like having a safety net when performing on a tightrope. If something goes wrong, you don't crash to the ground - you have a plan to handle the situation gracefully.

**Error Handling Structure:**
- **try**: Code that might cause an error
- **except**: What to do if an error occurs
- **finally**: Code that always runs, whether there's an error or not
- **else**: Code that runs only if no error occurred (optional)`
    },
    {
      type: 'code',
      title: 'Basic try-except Block',
      language: 'python',
      code: `# Basic error handling
try:
    print("Attempting to divide 10 by 0...")
    result = 10 / 0
except:
    print("An error occurred!")`
    },
    {
      type: 'output',
      content: `Attempting to divide 10 by 0...
An error occurred!`
    },
    {
      type: 'code',
      title: 'Without Error Handling (for comparison)',
      language: 'python',
      code: `# This code would crash without try-except
print("Starting calculation...")
print("Result:", 10 / 2)`
    },
    {
      type: 'output',
      content: `Starting calculation...
Result: 5.0`
    },
    {
      type: 'code',
      title: 'Specific Exception Types',
      language: 'python',
      code: `# Handling specific exception types
try:
    number = int("not_a_number")
    print("Conversion successful!")
except ValueError:
    print("Invalid number format!")`
    },
    {
      type: 'output',
      content: `Invalid number format!`
    },
    {
      type: 'code',
      title: 'Multiple Exception Types',
      language: 'python',
      code: `# Handling different types of errors
try:
    numbers = [1, 2, 3]
    print("Accessing index 5:", numbers[5])
except IndexError:
    print("Index is out of range!")
except ValueError:
    print("Value conversion error!")`
    },
    {
      type: 'output',
      content: `Index is out of range!`
    },
    {
      type: 'code',
      title: 'try-except-finally Block',
      language: 'python',
      code: `# The finally block always runs
try:
    print("Opening a file...")
    result = 10 / 2
    print("Calculation successful!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
finally:
    print("Cleanup: Always executed")`
    },
    {
      type: 'output',
      content: `Opening a file...
Calculation successful!
Cleanup: Always executed`
    },
    {
      type: 'code',
      title: 'finally Block with Exception',
      language: 'python',
      code: `# finally runs even when there's an error
try:
    print("Attempting risky operation...")
    result = 10 / 0
except ZeroDivisionError:
    print("Error: Division by zero!")
finally:
    print("Finally: Cleaning up resources")`
    },
    {
      type: 'output',
      content: `Attempting risky operation...
Error: Division by zero!
Finally: Cleaning up resources`
    },
    {
      type: 'code',
      title: 'Getting Exception Details',
      language: 'python',
      code: `# Accessing exception information
try:
    age = int("twenty")
    print("Age:", age)
except ValueError as error:
    print("Error details:", error)`
    },
    {
      type: 'output',
      content: `Error details: invalid literal for int() with base 10: 'twenty'`
    },
    {
      type: 'code',
      title: 'Practical Example: Safe User Input',
      language: 'python',
      code: `# Safe number input function
def get_safe_number():
    try:
        user_input = input("Enter a number: ")
        number = float(user_input)
        return number
    except ValueError:
        print("Invalid input! Please enter a valid number.")
        return None

print("Testing with valid input '42.5':")`
    },
    {
      type: 'output',
      content: `Testing with valid input '42.5':`
    },
    {
      type: 'code',
      title: 'Multiple except Blocks',
      language: 'python',
      code: `# Handling different errors differently
def safe_divide(a, b):
    try:
        result = a / b
        print("Division result:", result)
        return result
    except ZeroDivisionError:
        print("Error: Cannot divide by zero!")
    except TypeError:
        print("Error: Invalid data types for division!")
    
safe_divide(10, 2)
safe_divide(10, 0)`
    },
    {
      type: 'output',
      content: `Division result: 5.0
Error: Cannot divide by zero!`
    },
    {
      type: 'code',
      title: 'try-except-else-finally',
      language: 'python',
      code: `# Complete error handling structure
try:
    data = {"name": "Alice", "age": 25}
    print("Name:", data["name"])
except KeyError:
    print("Key not found in dictionary!")
else:
    print("No errors occurred!")
finally:
    print("Operation completed")`
    },
    {
      type: 'output',
      content: `Name: Alice
No errors occurred!
Operation completed`
    },
    {
      type: 'text',
      title: 'Best Practices for Error Handling',
      content: `**When to use error handling:**
- User input validation
- File operations (opening, reading, writing)
- Network operations
- Data conversion and parsing
- External API calls
- Mathematical operations that might fail

**Best practices:**
- **Be specific**: Catch specific exception types rather than using bare \`except\`
- **Provide helpful messages**: Give users clear information about what went wrong
- **Don't hide errors**: Log or handle errors appropriately
- **Use finally for cleanup**: Release resources, close files, etc.
- **Keep try blocks small**: Only include code that might actually raise exceptions

**Common exception types to handle:**
- \`ValueError\`: Invalid value for operation
- \`TypeError\`: Wrong data type
- \`IndexError\`: List/string index out of range
- \`KeyError\`: Dictionary key doesn't exist
- \`FileNotFoundError\`: File doesn't exist
- \`ZeroDivisionError\`: Division by zero

**Error handling makes your programs:**
- More reliable and user-friendly
- Easier to debug and maintain
- Better at handling edge cases
- More professional and robust`
    }
  ]
};

export { tryExceptFinallyContent };