// Lesson content for ternary expressions
export const ternaryExpressionsContent = {
  id: 'ternary-expressions',
  title: 'Ternary Expressions',
  duration: '18 min',
  overview: `Master Python's concise conditional expressions! Learn how to write compact, readable one-line conditionals using ternary operators to make your code more elegant and efficient.`,
  objectives: [
    'Understand the syntax and structure of ternary expressions',
    'Convert simple if-else statements to ternary expressions',
    'Use ternary expressions for variable assignment',
    'Chain ternary expressions for multiple conditions',
    'Recognize when to use ternary vs. traditional if-else statements',
    'Apply ternary expressions in real-world scenarios',
  ],
  sections: [
    {
      type: 'text',
      title: 'What Are Ternary Expressions?',
      content: `A **ternary expression** (also called a conditional expression) is a compact way to write simple if-else statements in a single line. It's called "ternary" because it involves three parts:

1. **Condition** - what to check
2. **Value if True** - what to return if condition is true
3. **Value if False** - what to return if condition is false

**Syntax:**
\`\`\`python
value_if_true if condition else value_if_false
\`\`\`

**Think of it as:** "Give me A if condition is true, otherwise give me B"

Ternary expressions are perfect for **simple, one-line conditionals** where you need to choose between two values.`
    },
    {
      type: 'code',
      title: 'Basic Ternary Expression Example',
      language: 'python',
      code: `# Traditional if-else statement
age = 20

if age >= 18:
    status = "adult"
else:
    status = "minor"

print(f"Traditional if-else: {status}")

# Same logic using ternary expression
age = 20
status = "adult" if age >= 18 else "minor"

print(f"Ternary expression: {status}")

# Another example
temperature = 75
weather_description = "warm" if temperature >= 70 else "cool"
print(f"Today is {weather_description}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Traditional if-else: adult
Ternary expression: adult
Today is warm`
    },
    {
      type: 'text',
      title: 'Understanding the Syntax Flow',
      content: `The ternary expression might look backwards at first, but it follows natural language:

**"I want X if condition is true, otherwise Y"**

\`\`\`python
result = value_if_true if condition else value_if_false
         ^^^^^^^^^^^^    ^^^^^^^^^         ^^^^^^^^^^^^^
         what you want   what to check     backup option
\`\`\`

**Reading tip:** Start with the condition in the middle, then read left for true value, then right for false value.`
    },
    {
      type: 'code',
      title: 'Breaking Down the Syntax',
      language: 'python',
      code: `# Let's break down how to read ternary expressions
score = 85

# Step 1: Identify the three parts
#         value_if_true  if  condition    else  value_if_false
grade = "Pass"          if  score >= 60  else  "Fail"

print(f"Score: {score}, Grade: {grade}")

# More examples with clear parts labeled
number = -5
sign = "positive" if number > 0 else "negative or zero"
print(f"The number {number} is {sign}")

# Boolean result
is_weekend = True
day_type = "weekend" if is_weekend else "weekday"
print(f"Today is a {day_type}")

# With calculations
x = 10
y = 20
larger = x if x > y else y
print(f"The larger number is {larger}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Score: 85, Grade: Pass
The number -5 is negative or zero
Today is a weekend
The larger number is 20`
    },
    {
      type: 'text',
      title: 'Common Use Cases for Ternary Expressions',
      content: `Ternary expressions are perfect for:

**1. Variable assignment** - Choose between two values
**2. Default values** - Provide fallbacks for None or empty values
**3. Simple calculations** - Pick between two formulas
**4. Display formatting** - Choose singular vs plural forms
**5. Function arguments** - Pass different values conditionally

**When NOT to use ternary:**
- Complex logic with multiple conditions
- When the code becomes hard to read
- When you need multiple statements, not just a value`
    },
    {
      type: 'code',
      title: 'Variable Assignment Examples',
      language: 'python',
      code: `# Example 1: Pricing based on membership
is_member = True
price = 19.99 if is_member else 29.99
print(f"Price: \${price}")

# Example 2: Greeting based on time
hour = 14  # 2 PM
greeting = "Good morning" if hour < 12 else "Good afternoon"
print(greeting)

# Example 3: Access level
user_role = "admin"
access_level = "full" if user_role == "admin" else "limited"
print(f"Access level: {access_level}")

# Example 4: Mathematical operations
a = 10
b = 5
operation = "add"
result = a + b if operation == "add" else a - b
print(f"Result: {result}")

# Example 5: File extension
filename = "document.pdf"
file_type = "PDF" if filename.endswith('.pdf') else "Other"
print(f"File type: {file_type}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Price: $19.99
Good afternoon
Access level: full
Result: 15
File type: PDF`
    },
    {
      type: 'code',
      title: 'Default Values and None Handling',
      language: 'python',
      code: `# Handling None values with ternary expressions
username = None
display_name = username if username is not None else "Guest"
print(f"Welcome, {display_name}!")

# Using 'or' operator (alternative approach)
username2 = None
display_name2 = username2 or "Guest"
print(f"Welcome, {display_name2}!")

# Handling empty strings
user_input = ""
message = user_input if user_input else "No input provided"
print(f"Message: {message}")

# Setting default configuration values
debug_mode = None
logging_enabled = debug_mode if debug_mode is not None else False
print(f"Logging enabled: {logging_enabled}")

# API response handling
api_response = {"data": None}
data = api_response["data"] if api_response["data"] else "No data available"
print(f"API data: {data}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Welcome, Guest!
Welcome, Guest!
Message: No input provided
Logging enabled: False
API data: No data available`
    },
    {
      type: 'text',
      title: 'Ternary Expressions in Function Calls',
      content: `Ternary expressions are very useful when calling functions or methods, allowing you to pass different arguments based on conditions without writing separate if-else blocks.`
    },
    {
      type: 'code',
      title: 'Function Call Examples',
      language: 'python',
      code: `# Example 1: Choosing print messages
temperature = 85
print("It's hot!" if temperature > 80 else "It's pleasant!")

# Example 2: List operations
numbers = [1, 2, 3, 4, 5]
operation = "sum"
result = sum(numbers) if operation == "sum" else max(numbers)
print(f"Result: {result}")

# Example 3: String formatting
count = 1
print(f"You have {count} {'item' if count == 1 else 'items'} in your cart")

count = 3
print(f"You have {count} {'item' if count == 1 else 'items'} in your cart")

# Example 4: Method chaining
text = "HELLO WORLD"
formatted_text = text.lower() if text.isupper() else text.upper()
print(f"Formatted: {formatted_text}")

# Example 5: Math operations
x = -5
absolute_value = x if x >= 0 else -x
print(f"Absolute value of {x} is {absolute_value}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `It's hot!
Result: 15
You have 1 item in your cart
You have 3 items in your cart
Formatted: hello world
Absolute value of -5 is 5`
    },
    {
      type: 'text',
      title: 'Chaining Ternary Expressions',
      content: `You can chain ternary expressions to handle multiple conditions, similar to if-elif-else statements. However, be careful not to make them too complex, as readability is important.

**Syntax for chaining:**
\`\`\`python
value1 if condition1 else value2 if condition2 else value3
\`\`\`

**Best practice:** Limit chaining to 2-3 conditions maximum for readability.`
    },
    {
      type: 'code',
      title: 'Chained Ternary Expressions',
      language: 'python',
      code: `# Example 1: Grade classification
score = 87
grade = "A" if score >= 90 else "B" if score >= 80 else "C" if score >= 70 else "F"
print(f"Score: {score}, Grade: {grade}")

# Example 2: Age categories
age = 25
category = "child" if age < 13 else "teen" if age < 20 else "adult"
print(f"Age: {age}, Category: {category}")

# Example 3: Temperature description
temp = 45
description = "hot" if temp > 80 else "warm" if temp > 60 else "cool" if temp > 40 else "cold"
print(f"Temperature: {temp}°F is {description}")

# Example 4: File size formatting
file_size_bytes = 1536
size_format = f"{file_size_bytes/1024/1024:.1f} MB" if file_size_bytes > 1024*1024 else f"{file_size_bytes/1024:.1f} KB" if file_size_bytes > 1024 else f"{file_size_bytes} bytes"
print(f"File size: {size_format}")

# Better readability with parentheses
priority = 2
urgency = ("High" if priority == 1 else 
          "Medium" if priority == 2 else 
          "Low")
print(f"Priority level {priority}: {urgency}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Score: 87, Grade: B
Age: 25, Category: adult
Temperature: 45°F is cool
File size: 1.5 KB
Priority level 2: Medium`
    },
    {
      type: 'text',
      title: 'Ternary vs. Traditional if-else: When to Use Each',
      content: `**Use Ternary Expressions when:**
- Simple condition with two possible values
- Single line assignment
- Code is still readable and clear
- No complex logic or multiple statements needed

**Use Traditional if-else when:**
- Multiple statements need to be executed
- Complex conditions with multiple operators
- More than two possible outcomes (unless chaining is simple)
- Code readability would suffer with ternary`
    },
    {
      type: 'code',
      title: 'Comparison: Ternary vs. Traditional',
      language: 'python',
      code: `# Scenario 1: Simple assignment - GOOD for ternary
discount_percent = 15 if is_student else 0

# Scenario 2: Multiple statements - BETTER with traditional if-else
user_type = "premium"

if user_type == "premium":
    discount = 20
    print("Premium member discount applied!")
    send_email_notification = True
else:
    discount = 5
    print("Standard discount applied")
    send_email_notification = False

# Scenario 3: Complex condition - BETTER with traditional if-else
age = 25
income = 50000
credit_score = 720

if age >= 21 and income >= 40000 and credit_score >= 650:
    loan_approved = True
    interest_rate = 3.5
    print("Loan approved with standard rate")
else:
    loan_approved = False
    interest_rate = None
    print("Loan application denied")

# Scenario 4: Simple boolean flag - GOOD for ternary
is_weekend = True
work_day = False if is_weekend else True
print(f"Is it a work day? {work_day}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Premium member discount applied!
Loan approved with standard rate
Is it a work day? False`
    },
    {
      type: 'code',
      title: 'Real-World Applications',
      language: 'python',
      code: `# E-commerce price calculator
base_price = 100
is_member = True
quantity = 3

# Apply member discount
member_price = base_price * 0.9 if is_member else base_price

# Apply bulk discount
final_price = member_price * 0.95 if quantity >= 5 else member_price

print(f"Base price: \${base_price}")
print(f"Member price: \${member_price:.2f}")
print(f"Final price: \${final_price:.2f}")

# Status message formatting
stock_count = 0
availability = "In Stock" if stock_count > 0 else "Out of Stock"
print(f"Product status: {availability}")

# User interface text
items_in_cart = 1
cart_text = f"{items_in_cart} item" if items_in_cart == 1 else f"{items_in_cart} items"
print(f"Shopping cart: {cart_text}")

# API endpoint selection
environment = "development"
api_url = "https://api-dev.example.com" if environment == "development" else "https://api.example.com"
print(f"API URL: {api_url}")

# Form validation
email = "user@example.com"
is_valid_email = True if "@" in email and "." in email else False
print(f"Email valid: {is_valid_email}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Base price: $100
Member price: $90.00
Final price: $90.00
Product status: Out of Stock
Shopping cart: 1 item
API URL: https://api-dev.example.com
Email valid: True`
    },
    {
      type: 'text',
      title: 'Advanced Ternary Patterns',
      content: `Here are some advanced patterns and techniques you can use with ternary expressions to write more elegant and efficient code.`
    },
    {
      type: 'code',
      title: 'Advanced Ternary Patterns',
      language: 'python',
      code: `# Pattern 1: Nested ternary in function calls
numbers = [1, 2, 3, 4, 5]
operation = "max"
result = max(numbers) if operation == "max" else min(numbers) if operation == "min" else sum(numbers)
print(f"Operation '{operation}' result: {result}")

# Pattern 2: Ternary with list comprehensions
scores = [85, 92, 78, 96, 89]
grades = ["Pass" if score >= 80 else "Fail" for score in scores]
print(f"Grades: {grades}")

# Pattern 3: Ternary for dictionary values
user_data = {"role": "admin", "active": True}
permissions = {"read": True, "write": True, "delete": True} if user_data["role"] == "admin" else {"read": True, "write": False, "delete": False}
print(f"Permissions: {permissions}")

# Pattern 4: Ternary with string methods
text = "Hello World"
format_type = "upper"
formatted = text.upper() if format_type == "upper" else text.lower() if format_type == "lower" else text.title()
print(f"Formatted text: {formatted}")

# Pattern 5: Ternary for exception handling alternative
value = "123"
number = int(value) if value.isdigit() else 0
print(f"Converted number: {number}")

# Pattern 6: Ternary with lambda functions
calculate = lambda x, y, op: x + y if op == "add" else x * y if op == "multiply" else x - y
result = calculate(10, 5, "multiply")
print(f"Calculation result: {result}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Operation 'max' result: 5
Grades: ['Pass', 'Pass', 'Fail', 'Pass', 'Pass']
Permissions: {'read': True, 'write': True, 'delete': True}
Formatted text: HELLO WORLD
Converted number: 123
Calculation result: 50`
    },
    {
      type: 'text',
      title: 'Common Mistakes and Best Practices',
      content: `**Common Mistakes to Avoid:**

1. **Over-complicating:** Don't make ternary expressions too complex
2. **Poor readability:** If it's hard to read, use traditional if-else
3. **Multiple statements:** Ternary is for expressions, not statements
4. **Unclear logic:** Don't sacrifice clarity for brevity

**Best Practices:**

1. **Keep it simple:** One condition, two clear outcomes
2. **Use parentheses:** For complex expressions or better readability
3. **Consider alternatives:** Sometimes other patterns are clearer
4. **Be consistent:** Use the same style throughout your codebase`
    },
    {
      type: 'code',
      title: 'Good vs. Bad Ternary Examples',
      language: 'python',
      code: `# ❌ BAD: Too complex, hard to read
user_age = 25
user_role = "admin"
is_active = True
complex_bad = "full_access" if user_age >= 18 and user_role == "admin" and is_active else "limited_access" if user_age >= 18 and is_active else "no_access"

# ✅ GOOD: Break into multiple steps
is_adult = user_age >= 18
is_admin = user_role == "admin"

if is_adult and is_admin and is_active:
    access_level = "full_access"
elif is_adult and is_active:
    access_level = "limited_access"
else:
    access_level = "no_access"

print(f"Access level (good approach): {access_level}")

# ❌ BAD: Trying to use statements in ternary (this won't work)
# result = print("Hello") if True else print("Goodbye")  # ERROR!

# ✅ GOOD: Use ternary for values, not statements
message = "Hello" if True else "Goodbye"
print(message)

# ❌ BAD: Unclear logic
x = 5
unclear = x if x else 0  # What does this do?

# ✅ GOOD: Clear intent
default_value = x if x != 0 else 0  # Clearer: avoid zero values

# ✅ BETTER: Most clear
safe_value = x if x != 0 else 1  # Even clearer intent

print(f"Safe value: {safe_value}")

# ✅ GOOD: Using parentheses for clarity
score = 85
grade = ("Excellent" if score >= 95 else 
         "Good" if score >= 85 else 
         "Average")
print(f"Grade: {grade}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Access level (good approach): full_access
Hello
Safe value: 5
Grade: Good`
    },
    {
      type: 'text',
      title: 'Practice Challenge',
      content: `**Challenge:** Create a temperature converter that uses ternary expressions to:

1. Convert between Celsius and Fahrenheit based on a mode variable
2. Format the output with appropriate units
3. Handle invalid temperature ranges with warning messages
4. Use ternary expressions for all conditional logic

Create both the conversion logic and user-friendly output formatting using ternary expressions.`
    },
    {
      type: 'code',
      title: 'Temperature Converter Solution',
      language: 'python',
      code: `# Temperature converter using ternary expressions
temperature = 32
mode = "C_to_F"  # "C_to_F" or "F_to_C"

# Conversion logic using ternary
converted_temp = (temperature * 9/5) + 32 if mode == "C_to_F" else (temperature - 32) * 5/9

# Round to 1 decimal place
converted_temp = round(converted_temp, 1)

# Unit formatting using ternary
input_unit = "°C" if mode == "C_to_F" else "°F"
output_unit = "°F" if mode == "C_to_F" else "°C"

# Validation warnings using ternary
is_extreme_temp = (temperature < -273.15 if mode == "C_to_F" else 
                  temperature < -459.67)

warning = "⚠️ Warning: Temperature below absolute zero!" if is_extreme_temp else ""

# Status message using ternary
status = ("Freezing" if converted_temp <= 32 else 
          "Cold" if converted_temp <= 50 else
          "Cool" if converted_temp <= 70 else
          "Warm" if converted_temp <= 85 else
          "Hot")

# Output formatting
print(f"🌡️ Temperature Converter")
print(f"Input: {temperature}{input_unit}")
print(f"Output: {converted_temp}{output_unit}")
print(f"Status: {status}")
print(warning if warning else "✅ Temperature is valid")

# Bonus: Activity recommendation using ternary
activity = ("Ice skating" if converted_temp <= 32 else
           "Skiing" if converted_temp <= 40 else
           "Hiking" if converted_temp <= 75 else
           "Swimming" if converted_temp <= 90 else
           "Stay indoors with AC")

print(f"🎯 Recommended activity: {activity}")

# Another example with different input
print("\\n" + "="*30)
temperature2 = 100
mode2 = "F_to_C"
converted_temp2 = (temperature2 - 32) * 5/9 if mode2 == "F_to_C" else (temperature2 * 9/5) + 32
converted_temp2 = round(converted_temp2, 1)

input_unit2 = "°F" if mode2 == "F_to_C" else "°C"
output_unit2 = "°C" if mode2 == "F_to_C" else "°F"

print(f"Input: {temperature2}{input_unit2}")
print(f"Output: {converted_temp2}{output_unit2}")
print(f"Status: {'Boiling point of water!' if converted_temp2 == 100 else 'Regular temperature'}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `🌡️ Temperature Converter
Input: 32°C
Output: 89.6°F
Status: Hot
✅ Temperature is valid
🎯 Recommended activity: Stay indoors with AC

==============================
Input: 100°F
Output: 37.8°C
Status: Regular temperature`
    }
  ]
};