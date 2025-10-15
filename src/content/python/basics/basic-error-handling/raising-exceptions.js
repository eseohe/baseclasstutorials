// Lesson content for Raising custom exceptions
export const raisingExceptionsContent = {
  id: 'raising-exceptions',
  title: 'Raising custom exceptions',
  duration: '20 min',
  overview: `Learn to create and raise your own exceptions in Python! Master the raise statement, create custom error messages, and build more informative and user-friendly error handling in your programs.`,
  objectives: [
    'Understand when and why to raise exceptions in your code',
    'Use the raise statement to trigger exceptions manually',
    'Create custom error messages for better user feedback',
    'Implement input validation with meaningful exceptions',
    'Build defensive functions that fail gracefully with clear error messages',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Raising Exceptions',
      content: `Sometimes you need to trigger exceptions yourself when your code detects invalid conditions. The \`raise\` statement allows you to manually trigger exceptions with custom messages.

**When to raise exceptions:**
- **Input validation**: Check if function parameters are valid
- **Business logic**: Enforce rules specific to your application
- **Defensive programming**: Prevent invalid states from occurring
- **API boundaries**: Validate data from external sources
- **Early detection**: Catch problems before they cause bigger issues

**Benefits of raising exceptions:**
- **Clear error messages**: Explain exactly what went wrong
- **Fail fast**: Stop execution immediately when problems are detected
- **Debugging**: Make it easier to identify and fix issues
- **User experience**: Provide helpful feedback instead of cryptic errors
- **Code clarity**: Make your intentions and requirements explicit

**Raise statement syntax:**
- \`raise ExceptionType()\` - Raise specific exception type
- \`raise ExceptionType("message")\` - Raise with custom message
- \`raise\` - Re-raise the current exception (in except blocks)`
    },
    {
      type: 'code',
      title: 'Basic Exception Raising',
      language: 'python',
      code: `# Raising a basic exception
try:
    print("About to raise an exception...")
    raise ValueError("This is a custom error message!")
except ValueError as e:
    print("Caught exception:", e)`
    },
    {
      type: 'output',
      content: `About to raise an exception...
Caught exception: This is a custom error message!`
    },
    {
      type: 'code',
      title: 'Input Validation with Exceptions',
      language: 'python',
      code: `# Validating function inputs
def calculate_square_root(number):
    if number < 0:
        raise ValueError("Cannot calculate square root of negative number!")
    return number ** 0.5

try:
    result = calculate_square_root(16)
    print("Square root result:", result)
except ValueError as e:
    print("Error:", e)`
    },
    {
      type: 'output',
      content: `Square root result: 4.0`
    },
    {
      type: 'code',
      title: 'Handling Invalid Input',
      language: 'python',
      code: `# Testing with invalid input
try:
    result = calculate_square_root(-9)
    print("Square root result:", result)
except ValueError as e:
    print("Error:", e)`
    },
    {
      type: 'output',
      content: `Error: Cannot calculate square root of negative number!`
    },
    {
      type: 'code',
      title: 'Type Checking with Exceptions',
      language: 'python',
      code: `# Checking data types
def multiply_numbers(a, b):
    if not isinstance(a, (int, float)):
        raise TypeError("First argument must be a number!")
    if not isinstance(b, (int, float)):
        raise TypeError("Second argument must be a number!")
    return a * b

try:
    result = multiply_numbers(5, 3)
    print("Multiplication result:", result)
except TypeError as e:
    print("Type error:", e)`
    },
    {
      type: 'output',
      content: `Multiplication result: 15`
    },
    {
      type: 'code',
      title: 'Testing Type Validation',
      language: 'python',
      code: `# Testing with invalid types
try:
    result = multiply_numbers("5", 3)
    print("Multiplication result:", result)
except TypeError as e:
    print("Type error:", e)`
    },
    {
      type: 'output',
      content: `Type error: First argument must be a number!`
    },
    {
      type: 'code',
      title: 'Range Validation',
      language: 'python',
      code: `# Validating value ranges
def set_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative!")
    if age > 150:
        raise ValueError("Age cannot be greater than 150!")
    return "Age set to " + str(age)

try:
    message = set_age(25)
    print(message)
except ValueError as e:
    print("Age validation error:", e)`
    },
    {
      type: 'output',
      content: `Age set to 25`
    },
    {
      type: 'code',
      title: 'Testing Range Limits',
      language: 'python',
      code: `# Testing age limits
try:
    message = set_age(200)
    print(message)
except ValueError as e:
    print("Age validation error:", e)`
    },
    {
      type: 'output',
      content: `Age validation error: Age cannot be greater than 150!`
    },
    {
      type: 'code',
      title: 'Multiple Validation Conditions',
      language: 'python',
      code: `# Complex validation function
def create_user_account(username, email, age):
    if not username:
        raise ValueError("Username cannot be empty!")
    if len(username) < 3:
        raise ValueError("Username must be at least 3 characters!")
    if "@" not in email:
        raise ValueError("Invalid email address!")
    if age < 13:
        raise ValueError("Must be at least 13 years old!")
    
    return "Account created for " + username

try:
    account = create_user_account("alice", "alice@email.com", 25)
    print(account)
except ValueError as e:
    print("Account creation failed:", e)`
    },
    {
      type: 'output',
      content: `Account created for alice`
    },
    {
      type: 'code',
      title: 'Testing Account Validation',
      language: 'python',
      code: `# Testing with invalid data
try:
    account = create_user_account("al", "invalid-email", 25)
    print(account)
except ValueError as e:
    print("Account creation failed:", e)`
    },
    {
      type: 'output',
      content: `Account creation failed: Username must be at least 3 characters!`
    },
    {
      type: 'code',
      title: 'Re-raising Exceptions',
      language: 'python',
      code: `# Re-raising with additional context
def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        print("Logging division by zero error...")
        raise  # Re-raise the same exception

try:
    result = safe_divide(10, 0)
    print("Division result:", result)
except ZeroDivisionError:
    print("Final handling: Division by zero detected!")`
    },
    {
      type: 'output',
      content: `Logging division by zero error...
Final handling: Division by zero detected!`
    },
    {
      type: 'code',
      title: 'Practical Example: List Operations',
      language: 'python',
      code: `# Safe list operations with validation
def get_list_item(items, index):
    if not isinstance(items, list):
        raise TypeError("First argument must be a list!")
    if not isinstance(index, int):
        raise TypeError("Index must be an integer!")
    if index < 0 or index >= len(items):
        raise IndexError("Index " + str(index) + " is out of range!")
    
    return items[index]

try:
    fruits = ["apple", "banana", "orange"]
    fruit = get_list_item(fruits, 1)
    print("Selected fruit:", fruit)
except (TypeError, IndexError) as e:
    print("List operation error:", e)`
    },
    {
      type: 'output',
      content: `Selected fruit: banana`
    },
    {
      type: 'code',
      title: 'Testing List Validation',
      language: 'python',
      code: `# Testing with invalid index
try:
    fruits = ["apple", "banana", "orange"]
    fruit = get_list_item(fruits, 5)
    print("Selected fruit:", fruit)
except (TypeError, IndexError) as e:
    print("List operation error:", e)`
    },
    {
      type: 'output',
      content: `List operation error: Index 5 is out of range!`
    },
    {
      type: 'text',
      title: 'Best Practices for Raising Exceptions',
      content: `**When to raise exceptions:**
- Input validation at function boundaries
- Detecting invalid program states
- Enforcing business rules and constraints
- Preventing operations that would cause bigger problems
- Providing clear feedback about what went wrong

**Choosing the right exception type:**
- **ValueError**: Wrong value, correct type (negative age, empty string)
- **TypeError**: Wrong data type (string instead of number)
- **IndexError**: Index out of bounds
- **KeyError**: Missing dictionary key
- **FileNotFoundError**: Missing file
- **Custom exceptions**: For domain-specific errors

**Writing good error messages:**
- Be specific about what went wrong
- Include the actual value that caused the problem
- Suggest what the user should do instead
- Use clear, non-technical language when appropriate
- Include context about where the error occurred

**Exception raising patterns:**
\`\`\`python
# Pattern 1: Simple validation
if condition_is_bad:
    raise ValueError("Specific error message")

# Pattern 2: Type checking
if not isinstance(value, expected_type):
    raise TypeError("Expected type, got " + str(type(value)))

# Pattern 3: Range checking
if value < minimum or value > maximum:
    raise ValueError("Value must be between " + str(minimum) + " and " + str(maximum))

# Pattern 4: Re-raising with context
try:
    risky_operation()
except SomeException:
    log_error()
    raise  # Re-raise the same exception
\`\`\`

**Benefits of proper exception raising:**
- Prevents silent failures and hard-to-debug issues
- Makes your code more robust and reliable
- Provides better user experience with clear error messages
- Makes testing easier by providing predictable failure modes
- Helps other developers understand your code's requirements`
    }
  ]
};