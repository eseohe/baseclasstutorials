// Lesson content for Printing formatted output (f-strings, .format(), concatenation)
export const printingOutputContent = {
  id: 'printing-output',
  title: 'Printing Formatted Output (f-strings, .format(), concatenation)',
  duration: '20 min',
  overview: `Transform your output from basic to beautiful! Master Python's powerful formatting techniques including modern f-strings, versatile .format() method, and classic string concatenation. Learn to create polished, professional output that makes your programs shine with clear, readable, and well-structured text.`,
  objectives: [
    'Create clean, readable output using f-string formatting (modern Python approach)',
    'Use the .format() method for flexible string formatting and templates',
    'Apply string concatenation techniques for combining text and variables',
    'Format numbers with precision control (decimal places, padding)',
    'Build professional-looking program output with proper alignment and spacing',
    'Choose the right formatting method for different situations and Python versions'
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Output Formatting',
      content: `Beautiful output makes programs feel professional and user-friendly! Python provides several powerful ways to format text:

**🎨 String Concatenation** - The classic approach using + operator
**🔧 .format() Method** - Flexible template-based formatting  
**⚡ f-strings (f"")** - Modern, fast, and readable (Python 3.6+)

**Why Formatting Matters:**
- **Readability** - Clean output is easier to understand
- **Professionalism** - Well-formatted text looks polished
- **Flexibility** - Dynamic content fits seamlessly into templates
- **User Experience** - Clear output improves program usability

Each method has its strengths, and knowing all three makes you a versatile Python programmer!`
    },
    
    {
      type: 'text',
      title: 'Basic print() Review',
      content: `Before diving into advanced formatting, let's review what we already know about print():

**Simple print():** \`print("Hello, World!")\`
**Multiple values:** \`print("Age:", 25, "Name:", "Alice")\`
**Separator control:** \`print("A", "B", "C", sep="-")\`

The \`print()\` function automatically adds spaces between multiple values and a newline at the end. Now let's learn more sophisticated formatting techniques!`
    },
    
    {
      type: 'code',
      title: 'Basic print() Patterns',
      language: 'python',
      code: `# Simple print examples
name = "Alice"
age = 25
score = 95.5

# Multiple values with automatic spacing
print("Student:", name, "Age:", age, "Score:", score)

# Using different separators
print("Data:", name, age, score, sep=" | ")
print("Path:", "home", "user", "documents", sep="/")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Student: Alice Age: 25 Score: 95.5
Data: Alice | 25 | 95.5
Path: home/user/documents`
    },
    
    {
      type: 'text',
      title: 'String Concatenation with +',
      content: `String concatenation uses the \`+\` operator to join strings together. This is the most basic formatting method.

**Key Points:**
- Only works with strings (must convert numbers using \`str()\`)
- Results in a single string that you can print
- Good for simple, one-time string building
- Can become verbose with many variables`
    },
    
    {
      type: 'code',
      title: 'Basic String Concatenation',
      language: 'python',
      code: `# Concatenating strings with +
first_name = "John"
last_name = "Doe"

# Combine strings
full_name = first_name + " " + last_name
print(full_name)

# Concatenate with text
greeting = "Hello, " + first_name + "!"
print(greeting)

# More complex example
message = "Welcome " + first_name + " " + last_name + " to our program!"
print(message)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `John Doe
Hello, John!
Welcome John Doe to our program!`
    },
    
    {
      type: 'code',
      title: 'Concatenation with Numbers',
      language: 'python',
      code: `# Numbers must be converted to strings first
name = "Alice"
age = 28
height = 5.6

# Convert numbers to strings using str()
age_text = "Age: " + str(age)
height_text = "Height: " + str(height) + " feet"

print(age_text)
print(height_text)

# Longer example
info = name + " is " + str(age) + " years old and " + str(height) + " feet tall"
print(info)

# With calculations
next_age = age + 1
future_info = "Next year, " + name + " will be " + str(next_age)
print(future_info)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Age: 28
Height: 5.6 feet
Alice is 28 years old and 5.6 feet tall
Next year, Alice will be 29`
    },
    
    {
      type: 'text',
      title: 'The .format() Method',
      content: `The \`.format()\` method provides a more powerful and flexible approach to string formatting:

**Basic Syntax:** \`"template with {}".format(value)\`
**Multiple values:** \`"Hello {} {}".format(first, last)\`
**Positioned:** \`"Hello {0} {1}".format(first, last)\`
**Named:** \`"Hello {name} {age}".format(name="Alice", age=25)\`

**Advantages:**
- Handles any data type automatically
- More readable than concatenation
- Powerful formatting options
- Reusable templates`
    },
    
    {
      type: 'code',
      title: 'Basic .format() Usage',
      language: 'python',
      code: `# Simple .format() examples
name = "Sarah"
age = 24

# Basic placeholder substitution
message1 = "Hello, {}!".format(name)
print(message1)

# Multiple placeholders
message2 = "My name is {} and I'm {} years old".format(name, age)
print(message2)

# Different data types work automatically
score = 87.5
is_passing = True
message3 = "{} scored {} points. Passing: {}".format(name, score, is_passing)
print(message3)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Hello, Sarah!
My name is Sarah and I'm 24 years old
Sarah scored 87.5 points. Passing: True`
    },
    
    {
      type: 'code',
      title: 'Positional and Named Formatting',
      language: 'python',
      code: `# Positional formatting (using numbers)
template1 = "The {0} {1} costs \${2}"
print(template1.format("red", "car", 25000))
print(template1.format("blue", "house", 350000))

# Named formatting (using keywords)
template2 = "Hello {name}, you are {age} years old"
print(template2.format(name="Alex", age=30))
print(template2.format(name="Maria", age=25))

# Mixed approach
template3 = "{0} is {age} years old and lives in {1}"
print(template3.format("Tom", "Seattle", age=35))`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `The red car costs $25000
The blue house costs $350000
Hello Alex, you are 30 years old
Hello Maria, you are 25 years old
Tom is 35 years old and lives in Seattle`
    },
    
    {
      type: 'text',
      title: 'F-strings: Modern Python Formatting',
      content: `F-strings (formatted string literals) are the modern, preferred way to format strings in Python 3.6+:

**Syntax:** \`f"Hello {variable}"\`
**With expressions:** \`f"Result: {x + y}"\`
**With formatting:** \`f"Price: {price:.2f}"\`

**Why F-strings are Awesome:**
- **Fast** - More efficient than other methods
- **Readable** - Variables right in the string
- **Powerful** - Can include any Python expression
- **Concise** - Less typing than alternatives`
    },
    
    {
      type: 'code',
      title: 'Basic F-string Usage',
      language: 'python',
      code: `# F-strings: the modern way
name = "David"
age = 32
city = "Boston"

# Simple variable substitution
greeting = f"Hello, {name}!"
print(greeting)

# Multiple variables
info = f"I'm {name}, {age} years old, from {city}"
print(info)

# Expressions inside f-strings
birth_year = 2024 - age
details = f"{name} was born in {birth_year}"
print(details)

# Math expressions
x = 10
y = 5
calculation = f"{x} + {y} = {x + y}"
print(calculation)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Hello, David!
I'm David, 32 years old, from Boston
David was born in 1992
10 + 5 = 15`
    },
    
    {
      type: 'code',
      title: 'F-strings with Different Data Types',
      language: 'python',
      code: `# F-strings handle all data types
student_name = "Emily"
grade = 94.7
is_honor_roll = True
subjects = 5

# All data types work seamlessly
report = f"Student: {student_name}"
print(report)

grade_report = f"Grade: {grade}%"
print(grade_report)

status_report = f"Honor Roll: {is_honor_roll}"
print(status_report)

summary = f"{student_name} earned {grade}% across {subjects} subjects"
print(summary)

# Simple text based on variables
performance_level = "Excellent"
performance = f"Performance: {performance_level}"
print(performance)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Student: Emily
Grade: 94.7%
Honor Roll: True
Emily earned 94.7% across 5 subjects
Performance: Excellent`
    },
    
    {
      type: 'text',
      title: 'Number Formatting',
      content: `All three formatting methods support number formatting for cleaner output:

**Decimal places:** \`{value:.2f}\` or \`f"{value:.2f}"\`
**Padding:** \`{value:5d}\` (5 characters wide)
**Thousands separator:** \`{value:,}\` or \`f"{value:,}"\`

Let's explore these formatting options:`
    },
    
    {
      type: 'code',
      title: 'Decimal Place Control',
      language: 'python',
      code: `# Controlling decimal places
price1 = 19.99
price2 = 5.0
price3 = 123.456789

# Using .format() method
print("Prices: {:.2f}, {:.2f}, {:.2f}".format(price1, price2, price3))

# Using f-strings
print(f"F-string prices: {price1:.2f}, {price2:.2f}, {price3:.2f}")

# Different precision levels
pi = 3.14159265359
print(f"Pi to 2 places: {pi:.2f}")
print(f"Pi to 4 places: {pi:.4f}")
print(f"Pi to 6 places: {pi:.6f}")

# Rounding in calculations
total = price1 + price2 + price3
print(f"Total: {total:.2f}")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Prices: 19.99, 5.00, 123.46
F-string prices: 19.99, 5.00, 123.46
Pi to 2 places: 3.14
Pi to 4 places: 3.1416
Pi to 6 places: 3.141593
Total: 148.45`
    },
    
    {
      type: 'code',
      title: 'Number Padding and Alignment',
      language: 'python',
      code: `# Number padding for aligned output
num1 = 5
num2 = 42
num3 = 123

# Right-aligned (default for numbers) - 5 characters wide
print("Right-aligned:")
print(f"{num1:5d}")
print(f"{num2:5d}")
print(f"{num3:5d}")

print()

# Left-aligned - 5 characters wide
print("Left-aligned:")
print(f"{num1:<5d}")
print(f"{num2:<5d}")
print(f"{num3:<5d}")

print()

# With thousand separators
big_num1 = 1000
big_num2 = 50000
big_num3 = 1234567
print("With commas:")
print(f"{big_num1:,}")
print(f"{big_num2:,}")
print(f"{big_num3:,}")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Right-aligned:
    5
   42
  123

Left-aligned:
5    
42   
123  

With commas:
1,000
50,000
1,234,567`
    },
    
    {
      type: 'text',
      title: 'Practical Formatting Examples',
      content: `Let's put these formatting techniques to work in real-world scenarios. These examples show how proper formatting makes output much more professional and readable.`
    },
    
    {
      type: 'code',
      title: 'Receipt Formatter',
      language: 'python',
      code: `# Create a formatted receipt
item1 = "Coffee"
price1 = 4.50
qty1 = 2

item2 = "Sandwich" 
price2 = 8.99
qty2 = 1

item3 = "Cookie"
price3 = 2.25
qty3 = 3

# Calculate totals
total1 = price1 * qty1
total2 = price2 * qty2  
total3 = price3 * qty3
subtotal = total1 + total2 + total3
tax = subtotal * 0.08
final_total = subtotal + tax

# Format the receipt using f-strings
print("=" * 35)
print("          COFFEE SHOP RECEIPT")
print("=" * 35)
print(f"{item1:<12} {qty1:>3} x {price1:>6.2f} = {total1:>7.2f}")
print(f"{item2:<12} {qty2:>3} x {price2:>6.2f} = {total2:>7.2f}")
print(f"{item3:<12} {qty3:>3} x {price3:>6.2f} = {total3:>7.2f}")
print("-" * 35)
print(f"{'Subtotal':<25} {subtotal:>7.2f}")
print(f"{'Tax (8%)':<25} {tax:>7.2f}")
print(f"{'TOTAL':<25} {final_total:>7.2f}")
print("=" * 35)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `===================================
          COFFEE SHOP RECEIPT
===================================
Coffee         2 x   4.50 =    9.00
Sandwich       1 x   8.99 =    8.99
Cookie         3 x   2.25 =    6.75
-----------------------------------
Subtotal                     24.74
Tax (8%)                      1.98
TOTAL                        26.72
===================================`
    },
    
    {
      type: 'code',
      title: 'Student Report Card',
      language: 'python',
      code: `# Student grade report with formatting
student_name = "Jessica Chen"
student_id = 12345
semester = "Fall 2024"

# Course grades
math_grade = 94.5
science_grade = 87.2
english_grade = 91.8
history_grade = 89.1
art_grade = 96.3

# Calculate GPA (assuming 4.0 scale)
grades = [math_grade, science_grade, english_grade, history_grade, art_grade]
average = sum(grades) / len(grades)
gpa = average / 25  # Simple conversion to 4.0 scale

print("*" * 45)
print(f"        STUDENT REPORT CARD")
print("*" * 45)
print(f"Name: {student_name}")
print(f"ID: {student_id}")
print(f"Semester: {semester}")
print("-" * 45)
print("COURSE GRADES:")
print(f"Mathematics        {math_grade:>6.1f}%")
print(f"Science            {science_grade:>6.1f}%")
print(f"English            {english_grade:>6.1f}%")
print(f"History            {history_grade:>6.1f}%")
print(f"Art                {art_grade:>6.1f}%")
print("-" * 45)
print(f"Average:           {average:>6.1f}%")
print(f"GPA:               {gpa:>6.2f}")
print("*" * 45)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `*********************************************
        STUDENT REPORT CARD
*********************************************
Name: Jessica Chen
ID: 12345
Semester: Fall 2024
---------------------------------------------
COURSE GRADES:
Mathematics         94.5%
Science             87.2%
English             91.8%
History             89.1%
Art                 96.3%
---------------------------------------------
Average:            91.8%
GPA:                3.67
*********************************************`
    },
    
    {
      type: 'code',
      title: 'Product Comparison Display',
      language: 'python',
      code: `# Compare products with formatted output
print("SMARTPHONE COMPARISON")
print("=" * 50)

# Product data - individual variables
phone1_name = "iPhone 15"
phone1_price = 999.99
phone1_storage = 128
phone1_rating = 8.5

phone2_name = "Samsung Galaxy"
phone2_price = 849.99
phone2_storage = 256
phone2_rating = 8.2

phone3_name = "Google Pixel"
phone3_price = 699.99
phone3_storage = 128
phone3_rating = 8.7

# Table header
print(f"{'Model':<15} {'Price':<10} {'Storage':<8} {'Rating'}")
print("-" * 50)

# Table rows with formatting
print(f"{phone1_name:<15} \${phone1_price:<9.2f} {phone1_storage:<7}GB {phone1_rating}/10")
print(f"{phone2_name:<15} \${phone2_price:<9.2f} {phone2_storage:<7}GB {phone2_rating}/10")
print(f"{phone3_name:<15} \${phone3_price:<9.2f} {phone3_storage:<7}GB {phone3_rating}/10")

print("=" * 50)

# Simple price calculations
total_price = phone1_price + phone2_price + phone3_price
avg_price = total_price / 3

print("PRICE ANALYSIS:")
print(f"Total price: \${total_price:.2f}")
print(f"Average price: \${avg_price:.2f}")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `SMARTPHONE COMPARISON
==================================================
Model           Price      Storage  Rating
--------------------------------------------------
iPhone 15       $999.99    128    GB 8.5/10
Samsung Galaxy  $849.99    256    GB 8.2/10
Google Pixel    $699.99    128    GB 8.7/10
==================================================
PRICE ANALYSIS:
Total price: $2549.97
Average price: $849.99`
    },
    
    {
      type: 'text',
      title: 'When to Use Each Method',
      content: `**🎯 Choosing the Right Formatting Method:**

**Use F-strings when:**
- You're using Python 3.6 or newer (most cases)
- You want the most readable code
- You need the best performance
- Variables are readily available

**Use .format() when:**
- Working with older Python versions
- Creating reusable templates
- Need complex formatting options
- Building strings from external data

**Use Concatenation when:**
- Very simple string joining
- Educational purposes (understanding basics)
- When other methods feel overkill
- Working with basic string operations

**💡 Recommendation:** Start with f-strings for modern Python development!`
    },
    
    {
      type: 'code',
      title: 'Method Comparison Example',
      language: 'python',
      code: `# Same output, different methods
name = "Alex"
score = 95.7
year = 2024

# Method 1: Concatenation
concat_result = "Student " + name + " scored " + str(score) + "% in " + str(year)
print("Concatenation:", concat_result)

# Method 2: .format()
format_result = "Student {} scored {:.1f}% in {}".format(name, score, year)
print("Format method:", format_result)

# Method 3: f-string
fstring_result = f"Student {name} scored {score:.1f}% in {year}"
print("F-string:     ", fstring_result)

# All produce the same result, but f-strings are most readable!`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Concatenation: Student Alex scored 95.7% in 2024
Format method: Student Alex scored 95.7% in 2024
F-string:      Student Alex scored 95.7% in 2024`
    },
    
    {
      type: 'text',
      title: 'Best Practices for Output Formatting',
      content: `**🏆 Professional Output Guidelines:**

**1. Choose Appropriate Methods:**
- F-strings for modern code
- Consistent method within projects
- Match team/organization standards

**2. Format Numbers Properly:**
- Use appropriate decimal places
- Add thousand separators for large numbers
- Align numbers in tables

**3. Create Readable Layout:**
- Use consistent spacing and alignment
- Add headers and separators
- Group related information

**4. Handle Edge Cases:**
- Very long text strings
- Missing or None values  
- Extreme numbers (very large/small)

**5. Test Your Output:**
- Check with different data sizes
- Verify alignment with various inputs
- Ensure formatting works across platforms

**Remember:** Well-formatted output makes your programs feel professional and polished!`
    }
  ]
};