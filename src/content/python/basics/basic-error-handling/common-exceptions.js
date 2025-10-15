// Lesson content for Common exceptions (ValueError, TypeError, etc.)
export const commonExceptionsContent = {
  id: 'common-exceptions',
  title: 'Common exceptions (ValueError, TypeError, etc.)',
  duration: '30 min',
  overview: `Explore Python's most common exception types! Learn to identify, understand, and handle specific errors like ValueError, TypeError, IndexError, and more to write more robust and user-friendly programs.`,
  objectives: [
    'Understand the most common Python exception types and when they occur',
    'Learn to handle specific exceptions with appropriate responses',
    'Identify the root causes of different error types',
    'Write defensive code that anticipates and handles common errors',
    'Create more informative error messages for better user experience',
  ],
  sections: [
    {
      type: 'text',
      title: 'Understanding Common Exceptions',
      content: `Python has many built-in exception types, each representing a specific kind of error. Understanding these helps you write better error handling code and debug problems more effectively.

**Why learn specific exceptions?**
- **Targeted handling**: Different errors need different solutions
- **Better debugging**: Understand exactly what went wrong
- **User experience**: Provide specific, helpful error messages
- **Prevention**: Anticipate and avoid common programming mistakes
- **Professional code**: Handle edge cases gracefully

**Exception hierarchy:**
All Python exceptions inherit from \`BaseException\`, with most inheriting from \`Exception\`. This allows you to catch groups of related exceptions or be very specific about which errors you handle.

**Most common exceptions you'll encounter:**
- \`ValueError\`: Wrong value for the operation
- \`TypeError\`: Wrong data type
- \`IndexError\`: Index out of range
- \`KeyError\`: Dictionary key not found
- \`AttributeError\`: Object doesn't have that attribute
- \`FileNotFoundError\`: File doesn't exist
- \`ZeroDivisionError\`: Division by zero`
    },
    {
      type: 'code',
      title: 'ValueError - Wrong Value Type',
      language: 'python',
      code: `# ValueError occurs when function gets correct type but wrong value
try:
    age = int("not_a_number")
    print("Age converted successfully!")
except ValueError:
    print("ValueError: Cannot convert to integer!")`
    },
    {
      type: 'output',
      content: `ValueError: Cannot convert to integer!`
    },
    {
      type: 'code',
      title: 'TypeError - Wrong Data Type',
      language: 'python',
      code: `# TypeError occurs when operation is performed on wrong data type
try:
    result = "Hello" + 5
    print("Concatenation successful!")
except TypeError:
    print("TypeError: Cannot add string and integer!")`
    },
    {
      type: 'output',
      content: `TypeError: Cannot add string and integer!`
    },
    {
      type: 'code',
      title: 'IndexError - Index Out of Range',
      language: 'python',
      code: `# IndexError occurs when accessing invalid list/string index
try:
    fruits = ["apple", "banana", "orange"]
    print("Fourth fruit:", fruits[3])
except IndexError:
    print("IndexError: List index out of range!")`
    },
    {
      type: 'output',
      content: `IndexError: List index out of range!`
    },
    {
      type: 'code',
      title: 'KeyError - Dictionary Key Not Found',
      language: 'python',
      code: `# KeyError occurs when accessing non-existent dictionary key
try:
    student = {"name": "Alice", "age": 20}
    print("Grade:", student["grade"])
except KeyError:
    print("KeyError: Key 'grade' not found!")`
    },
    {
      type: 'output',
      content: `KeyError: Key 'grade' not found!`
    },
    {
      type: 'code',
      title: 'AttributeError - Missing Attribute',
      language: 'python',
      code: `# AttributeError occurs when object doesn't have the attribute
try:
    numbers = [1, 2, 3]
    numbers.append(4)
    print("List after append:", numbers)
except AttributeError:
    print("AttributeError: Object has no such attribute!")`
    },
    {
      type: 'output',
      content: `List after append: [1, 2, 3, 4]`
    },
    {
      type: 'code',
      title: 'AttributeError Example',
      language: 'python',
      code: `# AttributeError with wrong attribute
try:
    text = "Hello World"
    result = text.append("!")
    print("Modified text:", result)
except AttributeError:
    print("AttributeError: Strings don't have append method!")`
    },
    {
      type: 'output',
      content: `AttributeError: Strings don't have append method!`
    },
    {
      type: 'code',
      title: 'ZeroDivisionError - Division by Zero',
      language: 'python',
      code: `# ZeroDivisionError occurs when dividing by zero
try:
    result = 10 / 0
    print("Division result:", result)
except ZeroDivisionError:
    print("ZeroDivisionError: Cannot divide by zero!")`
    },
    {
      type: 'output',
      content: `ZeroDivisionError: Cannot divide by zero!`
    },
    {
      type: 'code',
      title: 'FileNotFoundError - Missing File',
      language: 'python',
      code: `# FileNotFoundError occurs when trying to open non-existent file
try:
    with open("nonexistent_file.txt", "r") as file:
        content = file.read()
    print("File content:", content)
except FileNotFoundError:
    print("FileNotFoundError: File not found!")`
    },
    {
      type: 'output',
      content: `FileNotFoundError: File not found!`
    },
    {
      type: 'code',
      title: 'Multiple Exception Handling',
      language: 'python',
      code: `# Handling multiple exception types
def safe_calculator(a, b, operation):
    try:
        if operation == "add":
            return a + b
        elif operation == "divide":
            return a / b
    except TypeError:
        print("Error: Invalid data types!")
    except ZeroDivisionError:
        print("Error: Division by zero!")
    except Exception as e:
        print("Unexpected error:", e)

safe_calculator(10, 2, "add")
safe_calculator(10, 0, "divide")`
    },
    {
      type: 'output',
      content: `10
Error: Division by zero!`
    },
    {
      type: 'code',
      title: 'Exception Information and Debugging',
      language: 'python',
      code: `# Getting detailed exception information
try:
    data = {"name": "Bob"}
    age = data["age"]
    print("Age:", age)
except KeyError as e:
    print("Missing key:", e)
    print("Available keys:", list(data.keys()))`
    },
    {
      type: 'output',
      content: `Missing key: 'age'
Available keys: ['name']`
    },
    {
      type: 'code',
      title: 'Practical Example: Input Validation',
      language: 'python',
      code: `# Comprehensive input validation
def get_valid_age():
    try:
        age_input = input("Enter your age: ")
        age = int(age_input)
        if age < 0:
            print("Age cannot be negative!")
            return None
        return age
    except ValueError:
        print("Please enter a valid number!")
        return None

print("Testing with valid input '25':")
print("Age validation complete")`
    },
    {
      type: 'output',
      content: `Testing with valid input '25':
Age validation complete`
    },
    {
      type: 'code',
      title: 'Exception Chaining and Context',
      language: 'python',
      code: `# Understanding exception context
def process_data(items):
    try:
        for i, item in enumerate(items):
            result = 100 / item
            print("Item", i, "result:", result)
    except ZeroDivisionError:
        print("Error: Found zero in list at index", i)
    except TypeError:
        print("Error: Invalid item type at index", i)

process_data([10, 5, 0, 2])
process_data([10, "invalid", 2])`
    },
    {
      type: 'output',
      content: `Item 0 result: 10.0
Item 1 result: 20.0
Error: Found zero in list at index 2
Item 0 result: 10.0
Error: Invalid item type at index 1`
    },
    {
      type: 'text',
      title: 'Exception Types Reference',
      content: `**Most Common Exceptions:**

**ValueError:**
- \`int("hello")\` - Invalid string for conversion
- \`float("not_a_number")\` - Cannot convert to float
- \`datetime.strptime("invalid", "%Y-%m-%d")\` - Invalid date format

**TypeError:**
- \`"hello" + 5\` - Cannot add string and integer
- \`len(42)\` - Cannot get length of integer
- \`"hello"[1:3:0]\` - Invalid slice step

**IndexError:**
- \`[1, 2, 3][5]\` - List index out of range
- \`"hello"[10]\` - String index out of range
- \`list.pop()\` on empty list

**KeyError:**
- \`{"a": 1}["b"]\` - Key doesn't exist
- \`dict.pop("missing_key")\` - Key not found

**AttributeError:**
- \`"hello".append("world")\` - Strings don't have append
- \`[1, 2, 3].upper()\` - Lists don't have upper method
- \`int.missing_attribute\` - Attribute doesn't exist

**FileNotFoundError:**
- \`open("missing.txt")\` - File doesn't exist
- \`os.remove("nonexistent.txt")\` - Cannot delete missing file

**ZeroDivisionError:**
- \`10 / 0\` - Division by zero
- \`10 % 0\` - Modulo by zero
- \`pow(10, -1, 0)\` - Power with zero modulus

**Best practices:**
- Handle specific exceptions rather than using bare \`except\`
- Provide helpful error messages
- Log errors for debugging
- Use exception information to provide context
- Consider what the user needs to know vs. what developers need`
    }
  ]
};