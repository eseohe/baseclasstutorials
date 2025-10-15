// Lesson content for if, elif, else statements
export const ifElifElseContent = {
  id: 'if-elif-else',
  title: 'if, elif, else',
  duration: '20 min',
  overview: `Master Python's conditional statements! Learn how to make your programs intelligent and responsive by using if, elif, and else statements to control program flow based on different conditions.`,
  objectives: [
    'Write basic if statements to execute code conditionally',
    'Use elif statements to check multiple conditions',
    'Implement else statements for default behavior',
    'Combine comparison and logical operators in conditions',
    'Create complex conditional logic with proper indentation',
    'Understand how Python evaluates truthiness and falsiness',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Conditional Statements',
      content: `Conditional statements are the decision-making tools of programming. They allow your program to execute different code paths based on whether certain conditions are true or false. Think of them as the "if-then-else" logic we use in everyday decisions:

**Real-world example:** "If it's raining, take an umbrella. Otherwise, wear sunglasses."

**Python equivalent:** 
- **if** statement: Execute code when a condition is true
- **elif** statement: Check additional conditions if the first was false
- **else** statement: Execute code when all conditions are false

The power of conditionals lies in making your programs **responsive** and **intelligent**.`
    },
    {
      type: 'code',
      title: 'Basic if Statement',
      language: 'python',
      code: `# Simple if statement
temperature = 75

if temperature > 70:
    print("It's a warm day!")
    print("Perfect weather for outdoor activities.")

print("This line always executes.")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `It's a warm day!
Perfect weather for outdoor activities.
This line always executes.`
    },
    {
      type: 'text',
      title: 'Understanding if Statement Syntax',
      content: `The if statement follows a specific syntax:

\`\`\`python
if condition:
    # Indented code block
    # Executes only if condition is True
\`\`\`

**Key points:**
- The condition must evaluate to True or False
- The colon (:) is required after the condition
- The code block must be **indented** (usually 4 spaces)
- All indented lines belong to the if block`
    },
    {
      type: 'code',
      title: 'More if Statement Examples',
      language: 'python',
      code: `# Example 1: Checking if a number is positive
number = 42
if number > 0:
    print(f"{number} is a positive number!")

# Example 2: Checking boolean values
is_student = True
if is_student:
    print("You qualify for the student discount!")

# Example 3: Checking string equality
username = "admin"
if username == "admin":
    print("Welcome, administrator!")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `42 is a positive number!
You qualify for the student discount!
Welcome, administrator!`
    },
    {
      type: 'text',
      title: 'Adding elif for Multiple Conditions',
      content: `When you need to check multiple conditions in sequence, use **elif** (short for "else if"). Python checks conditions from top to bottom and executes the **first** condition that evaluates to True.

**Important:** Only ONE block of code will execute, even if multiple conditions are true.`
    },
    {
      type: 'code',
      title: 'Using elif Statements',
      language: 'python',
      code: `# Grade classification system
score = 87

if score >= 90:
    print("Grade: A - Excellent!")
elif score >= 80:
    print("Grade: B - Good job!")
elif score >= 70:
    print("Grade: C - Satisfactory")
elif score >= 60:
    print("Grade: D - Needs improvement")

print(f"Your score: {score}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Grade: B - Good job!
Your score: 87`
    },
    {
      type: 'text',
      title: 'Adding else for Default Behavior',
      content: `The **else** statement provides a default action when none of the previous conditions are true. It's like saying "in all other cases, do this."

**Order matters:** if → elif → elif → ... → else`
    },
    {
      type: 'code',
      title: 'Complete if-elif-else Structure',
      language: 'python',
      code: `# Complete grade classification with else
score = 45

if score >= 90:
    print("Grade: A - Excellent!")
    grade = "A"
elif score >= 80:
    print("Grade: B - Good job!")
    grade = "B"
elif score >= 70:
    print("Grade: C - Satisfactory")
    grade = "C"
elif score >= 60:
    print("Grade: D - Needs improvement")
    grade = "D"
else:
    print("Grade: F - Please see instructor")
    grade = "F"

print(f"Final grade: {grade}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Grade: F - Please see instructor
Final grade: F`
    },
    {
      type: 'code',
      title: 'Weather Decision Making',
      language: 'python',
      code: `# Weather-based clothing recommendations
temperature = 32
is_raining = True

if temperature < 32:
    print("It's freezing! Wear heavy winter clothes.")
    clothing = "winter coat, gloves, hat"
elif temperature < 50:
    print("It's cold. Wear a jacket.")
    clothing = "jacket or sweater"
elif temperature < 70:
    print("Cool weather. A light sweater should be fine.")
    clothing = "light sweater"
elif temperature < 85:
    print("Nice weather! T-shirt and jeans.")
    clothing = "t-shirt and jeans"
else:
    print("It's hot! Wear light, breathable clothing.")
    clothing = "shorts and tank top"

# Additional condition for rain
if is_raining:
    print("Don't forget an umbrella!")
    clothing += " + umbrella"

print(f"Recommended outfit: {clothing}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `It's freezing! Wear heavy winter clothes.
Don't forget an umbrella!
Recommended outfit: winter coat, gloves, hat + umbrella`
    },
    {
      type: 'text',
      title: 'Using Logical Operators in Conditions',
      content: `You can create more complex conditions using logical operators:

- **and**: Both conditions must be true
- **or**: At least one condition must be true  
- **not**: Inverts the condition (true becomes false)

These operators let you create sophisticated decision logic.`
    },
    {
      type: 'code',
      title: 'Complex Conditions with Logical Operators',
      language: 'python',
      code: `# Student eligibility checker
age = 20
gpa = 3.5
has_scholarship = False

if age >= 18 and gpa >= 3.0:
    print("✅ Eligible for advanced courses!")
elif age >= 16 or has_scholarship:
    print("⚠️ Eligible with conditions")
else:
    print("❌ Not eligible at this time")

# Checking multiple conditions
if age >= 21 and gpa >= 3.5 and not has_scholarship:
    print("Consider applying for merit scholarship!")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `✅ Eligible for advanced courses!
Consider applying for merit scholarship!`
    },
    {
      type: 'code',
      title: 'User Authentication System',
      language: 'python',
      code: `# Simple authentication system
username = "john_doe"
password = "secure123"
is_active = True

if username == "admin" and password == "admin123":
    print("🔑 Administrator access granted")
    access_level = "admin"
elif username == "john_doe" and password == "secure123" and is_active:
    print("👤 User access granted")
    access_level = "user"
elif not is_active:
    print("🚫 Account is deactivated")
    access_level = "none"
else:
    print("❌ Invalid credentials")
    access_level = "none"

print(f"Access level: {access_level}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `👤 User access granted
Access level: user`
    },
    {
      type: 'text',
      title: 'Understanding Truthiness and Falsiness',
      content: `Python has a concept of "truthiness" - how different values are treated in boolean contexts:

**Falsy values** (evaluate to False):
- \`False\`
- \`0\` (zero)
- \`""\` (empty string)
- \`[]\` (empty list)
- \`None\`

**Truthy values** (evaluate to True):
- \`True\`
- Any non-zero number
- Any non-empty string
- Any non-empty collection`
    },
    {
      type: 'code',
      title: 'Testing Truthiness and Falsiness',
      language: 'python',
      code: `# Testing different values in if statements
values_to_test = [True, False, 1, 0, "hello", "", [1, 2, 3], [], None]

for value in values_to_test:
    if value:
        print(f"{repr(value)} is truthy")
    else:
        print(f"{repr(value)} is falsy")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `True is truthy
False is falsy
1 is truthy
0 is falsy
'hello' is truthy
'' is falsy
[1, 2, 3] is truthy
[] is falsy
None is falsy`
    },
    {
      type: 'code',
      title: 'Practical Truthiness Examples',
      language: 'python',
      code: `# Using truthiness in practical scenarios
user_input = input("Enter your name: ")
items_in_cart = []
balance = 0

# Check if user entered a name
if user_input:
    print(f"Hello, {user_input}!")
else:
    print("You didn't enter a name.")

# Check if shopping cart has items
if items_in_cart:
    print("You have items in your cart.")
else:
    print("Your cart is empty.")

# Check account balance
if balance:
    print(f"Your balance: \${balance}")
else:
    print("Your account balance is zero.")`
    },
    {
      type: 'output',
      title: 'Output (if user enters "Alice")',
      content: `Hello, Alice!
Your cart is empty.
Your account balance is zero.`
    },
    {
      type: 'text',
      title: 'Common Patterns and Best Practices',
      content: `Here are some common patterns and best practices when working with conditional statements:

**1. Early Return Pattern:** Check for error conditions first
**2. Positive Logic:** Write conditions in a positive way when possible
**3. Clear Variable Names:** Use descriptive names for boolean variables
**4. Consistent Indentation:** Always use 4 spaces for indentation`
    },
    {
      type: 'code',
      title: 'BMI Calculator with Conditionals',
      language: 'python',
      code: `# BMI Calculator with health categories
weight = 70  # kg
height = 1.75  # meters

# Calculate BMI
bmi = weight / (height ** 2)
print(f"Your BMI: {bmi:.1f}")

# Categorize BMI
if bmi < 18.5:
    category = "Underweight"
    recommendation = "Consider consulting a nutritionist"
elif bmi < 25:
    category = "Normal weight"
    recommendation = "Maintain your current lifestyle"
elif bmi < 30:
    category = "Overweight"
    recommendation = "Consider a balanced diet and exercise"
else:
    category = "Obese"
    recommendation = "Consult a healthcare professional"

print(f"Category: {category}")
print(f"Recommendation: {recommendation}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Your BMI: 22.9
Category: Normal weight
Recommendation: Maintain your current lifestyle`
    },
    {
      type: 'code',
      title: 'Shopping Discount Calculator',
      language: 'python',
      code: `# E-commerce discount system
order_total = 150
is_premium_member = True
is_first_order = False
coupon_code = "SAVE20"

print(f"Order total: \${order_total}")

# Apply discounts based on conditions
discount_percent = 0

if is_first_order:
    discount_percent = 15
    print("🎉 First order discount: 15%")
elif is_premium_member and order_total >= 100:
    discount_percent = 20
    print("⭐ Premium member discount: 20%")
elif order_total >= 75:
    discount_percent = 10
    print("🛒 Order over $75 discount: 10%")

# Apply coupon code
if coupon_code == "SAVE20" and discount_percent < 20:
    discount_percent = 20
    print("🎫 Coupon code applied: 20%")

# Calculate final price
discount_amount = order_total * (discount_percent / 100)
final_price = order_total - discount_amount

print(f"Discount: \${discount_amount:.2f}")
print(f"Final price: \${final_price:.2f}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Order total: $150
⭐ Premium member discount: 20%
Discount: $30.00
Final price: $120.00`
    },
    {
      type: 'text',
      title: 'Common Mistakes to Avoid',
      content: `Here are some common mistakes beginners make with conditional statements:

**1. Forgetting the colon (:) after if/elif/else**
**2. Incorrect indentation**
**3. Using assignment (=) instead of comparison (==)**
**4. Forgetting that only one block executes in if-elif-else chains**`
    },
    {
      type: 'code',
      title: 'Common Mistakes Examples',
      language: 'python',
      code: `# ❌ MISTAKE 1: Missing colon
# if temperature > 70
#     print("It's warm")

# ❌ MISTAKE 2: Wrong indentation
# if temperature > 70:
# print("This is incorrectly indented")

# ❌ MISTAKE 3: Using = instead of ==
temperature = 70
# if temperature = 70:  # This would cause an error
if temperature == 70:   # ✅ Correct
    print("Temperature is exactly 70 degrees")

# ❌ MISTAKE 4: Multiple conditions when you want only one
score = 95
# This is wrong if you only want ONE message:
if score >= 90:
    print("Grade A")
if score >= 80:    # This will also execute!
    print("Grade B")

# ✅ Correct way - use elif:
if score >= 90:
    print("Grade A")
elif score >= 80:  # This won't execute if first condition is true
    print("Grade B")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Temperature is exactly 70 degrees
Grade A
Grade B
Grade A`
    },
    {
      type: 'text',
      title: 'Practice Exercise',
      content: `Try this exercise to test your understanding:

**Challenge:** Create a simple calculator that takes two numbers and an operator (+, -, *, /) and performs the calculation. Use conditional statements to:
1. Check if the operator is valid
2. Handle division by zero
3. Perform the correct operation
4. Display appropriate messages`
    },
    {
      type: 'code',
      title: 'Simple Calculator Solution',
      language: 'python',
      code: `# Simple calculator with conditionals
num1 = 10
num2 = 3
operator = "/"

print(f"Calculating: {num1} {operator} {num2}")

if operator == "+":
    result = num1 + num2
    print(f"Result: {result}")
elif operator == "-":
    result = num1 - num2
    print(f"Result: {result}")
elif operator == "*":
    result = num1 * num2
    print(f"Result: {result}")
elif operator == "/":
    if num2 == 0:
        print("Error: Cannot divide by zero!")
    else:
        result = num1 / num2
        print(f"Result: {result}")
else:
    print(f"Error: '{operator}' is not a valid operator")
    print("Valid operators: +, -, *, /")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Calculating: 10 / 3
Result: 3.3333333333333335`
    }
  ]
};