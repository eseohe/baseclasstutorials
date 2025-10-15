// Lesson content for Declaring variables, data types and naming conventions
export const declaringVariablesContent = {
  id: 'declaring-variables',
  title: 'Declaring Variables, Data Types and Naming Conventions',
  duration: '18 min',
  overview: `Master the fundamentals of Python variables! Learn how to create variables, understand Python's dynamic typing system, explore basic data types with practical examples, and follow industry-standard naming conventions to write clean, professional code.`,
  objectives: [
    'Declare variables in Python using assignment statements',
    'Understand Python\'s dynamic typing and type inference',
    'Work with basic data types: int, float, str, bool',
    'Apply PEP 8 naming conventions for clean code',
    'Use the type() function to inspect variable types',
    'Recognize and avoid common variable declaration mistakes',
  ],
  sections: [
    {
      type: 'text',
      title: 'What Are Variables?',
      content: `Variables in Python are like labeled containers that store data. Think of them as **name tags** that you attach to values in your computer's memory. Unlike many other programming languages, Python uses **dynamic typing**, which means you don't need to declare what type of data a variable will hold - Python figures it out automatically!

**Key Concepts:**
- Variables are created the moment you assign a value to them
- Python automatically determines the data type based on the value
- You can change both the value and type of a variable at any time
- Variable names are **case-sensitive** (age and Age are different variables)`
    },
    {
      type: 'code',
      title: 'Basic Variable Declaration',
      language: 'python',
      code: `# Creating variables - Python determines the type automatically
student_name = "Alice"
student_age = 20
student_gpa = 3.85
is_enrolled = True

# You can assign multiple variables at once
x, y, z = 1, 2, 3

# Or assign the same value to multiple variables
a = b = c = 10`
    },
    {
      type: 'output',
      title: 'Output',
      content: `# No output is produced by variable assignments
# Variables are stored in memory for later use`
    },
    {
      type: 'text',
      title: 'Understanding Python Data Types',
      content: `Python has several built-in data types that handle different kinds of information. Let's explore the four most fundamental ones:

**1. Integer (int)** - Whole numbers, positive or negative
**2. Float (float)** - Decimal numbers (floating-point)  
**3. String (str)** - Text data, enclosed in quotes
**4. Boolean (bool)** - True or False values

Python automatically assigns the appropriate type based on the value you provide.`
    },
    {
      type: 'code',
      title: 'Integer Examples',
      language: 'python',
      code: `# Integer - whole numbers
population = 7800000000
temperature = -15
score = 0

print("Population:", population)
print("Temperature:", temperature, "degrees")
print("Score:", score)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Population: 7800000000
Temperature: -15 degrees
Score: 0`
    },
    {
      type: 'code',
      title: 'Float Examples',
      language: 'python',
      code: `# Float - decimal numbers
pi = 3.14159
price = 29.99
height = 5.8

print("Pi:", pi)
print("Price: $", price)
print("Height:", height, "feet")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Pi: 3.14159
Price: $ 29.99
Height: 5.8 feet`
    },
    {
      type: 'code',
      title: 'String Examples',
      language: 'python',
      code: `# String - text in quotes (single or double)
first_name = "John"
last_name = 'Doe'
message = "Welcome to Python programming!"

print("First name:", first_name)
print("Last name:", last_name)
print("Message:", message)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `First name: John
Last name: Doe
Message: Welcome to Python programming!`
    },
    {
      type: 'code',
      title: 'Boolean Examples',
      language: 'python',
      code: `# Boolean - True or False (note the capitalization!)
is_student = True
has_graduated = False
is_raining = True

print("Is student:", is_student)
print("Has graduated:", has_graduated)
print("Is raining:", is_raining)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Is student: True
Has graduated: False
Is raining: True`
    },
    {
      type: 'text',
      title: 'Checking Variable Types',
      content: `Python provides the built-in **\`type()\`** function to check what data type a variable contains. This is incredibly useful for debugging and understanding your code.`
    },
    {
      type: 'code',
      title: 'Creating Variables to Check',
      language: 'python',
      code: `# Let's create some variables
age = 25
name = "Sarah"
height = 5.6
is_adult = True`
    },
    {
      type: 'output',
      title: 'Output',
      content: `# No output from variable assignments`
    },
    {
      type: 'code',
      title: 'Checking Variable Types',
      language: 'python',
      code: `# Check the types using type() function
print("Type of age:", type(age))
print("Type of name:", type(name))
print("Type of height:", type(height))
print("Type of is_adult:", type(is_adult))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Type of age: <class 'int'>
Type of name: <class 'str'>
Type of height: <class 'float'>
Type of is_adult: <class 'bool'>`
    },
    {
      type: 'code',
      title: 'Displaying Variable Values',
      language: 'python',
      code: `# We can also check the actual values
print("age =", age)
print("name =", name)
print("height =", height)
print("is_adult =", is_adult)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `age = 25
name = Sarah
height = 5.6
is_adult = True`
    },
    {
      type: 'text',
      title: 'Dynamic Typing in Action',
      content: `One of Python's powerful features is **dynamic typing** - you can change a variable's type by simply assigning a new value of a different type. While this flexibility is useful, it requires careful attention to avoid unexpected behavior.`
    },
    {
      type: 'code',
      title: 'Variables Can Change Types',
      language: 'python',
      code: `# Start with an integer
my_variable = 42
print("Value:", my_variable, "Type:", type(my_variable))

# Change to a string
my_variable = "Hello World"
print("Value:", my_variable, "Type:", type(my_variable))

# Change to a float
my_variable = 3.14
print("Value:", my_variable, "Type:", type(my_variable))

# Change to a boolean
my_variable = False
print("Value:", my_variable, "Type:", type(my_variable))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Value: 42 Type: <class 'int'>
Value: Hello World Type: <class 'str'>
Value: 3.14 Type: <class 'float'>
Value: False Type: <class 'bool'>`
    },
    {
      type: 'text',
      title: 'Python Naming Conventions (PEP 8)',
      content: `Following consistent naming conventions makes your code more readable and professional. Python follows **PEP 8** style guidelines:

**✅ Best Practices:**
- Use **snake_case** for variable names (lowercase with underscores)
- Choose descriptive, meaningful names
- Use full words instead of abbreviations when possible
- Be consistent throughout your codebase

**❌ Avoid:**
- **camelCase** (use snake_case instead)
- Single letter names (except for counters like i, j)
- Abbreviations that aren't clear
- Names that don't describe the data`
    },
    {
      type: 'code',
      title: 'Good Variable Names Example',
      language: 'python',
      code: `# ✅ GOOD - Descriptive, snake_case names
user_first_name = "Alice"
user_last_name = "Johnson"
total_purchase_amount = 156.78
is_premium_member = True

print("Customer:", user_first_name, user_last_name)
print("Total: $", total_purchase_amount)
print("Premium member:", is_premium_member)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Customer: Alice Johnson
Total: $ 156.78
Premium member: True`
    },
    {
      type: 'code',
      title: 'Bad Variable Names Example',
      language: 'python',
      code: `# ❌ BAD - Hard to understand, inconsistent style
fn = "Alice"                    # Too abbreviated
userLastName = "Johnson"        # camelCase (not Python style)  
amt = 156.78                   # Unclear abbreviation
premium = True                 # Could be clearer

print("Customer:", fn, userLastName)
print("Total: $", amt)
print("Premium:", premium)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Customer: Alice Johnson
Total: $ 156.78
Premium: True`
    },
    {
      type: 'code',
      title: 'More Good Examples',
      language: 'python',
      code: `# ✅ GOOD - Clear context and purpose
student_grades = [85, 92, 78, 96]
class_average_score = 87.75
assignment_deadline = "2024-02-15"

print("Grades:", student_grades)
print("Class average:", class_average_score)
print("Due date:", assignment_deadline)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Grades: [85, 92, 78, 96]
Class average: 87.75
Due date: 2024-02-15`
    },
    {
      type: 'code',
      title: 'More Bad Examples',
      language: 'python',
      code: `# ❌ BAD - Unclear purpose
data = [85, 92, 78, 96]        # What kind of data?
avg = 87.75                    # Average of what?
date = "2024-02-15"           # What kind of date?

print("Data:", data)
print("Average:", avg)
print("Date:", date)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Data: [85, 92, 78, 96]
Average: 87.75
Date: 2024-02-15`
    },
    {
      type: 'text',
      title: 'Python Reserved Words',
      content: `Python has **reserved words** (keywords) that have special meaning in the language. You cannot use these as variable names. Here are some common ones you should avoid:`
    },
    {
      type: 'code',
      title: 'Common Python Keywords to Avoid',
      language: 'python',
      code: `# These are RESERVED WORDS - don't use them as variable names:
# and, or, not, if, else, elif, for, while, def, class, 
# import, from, as, try, except, finally, with, lambda,
# True, False, None, is, in, return, pass, break, continue

# Let's see what happens when we try to use them
import keyword
print("Python keywords:", keyword.kwlist)
print("Total keywords:", len(keyword.kwlist))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Python keywords: ['False', 'None', 'True', '__peg_parser__', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
Total keywords: 35`
    },
    {
      type: 'text',
      title: 'Common Mistakes and Errors',
      content: `Let's look at some common mistakes beginners make when declaring variables, and what error messages Python gives us. Understanding these errors will help you debug your code more effectively.`
    },
    {
      type: 'code',
      title: 'Mistake 1: Using Reserved Words',
      language: 'python',
      code: `# ❌ This will cause a SyntaxError
class = "Mathematics"  # 'class' is a reserved word
def = 25              # 'def' is a reserved word  
if = True             # 'if' is a reserved word`
    },
    {
      type: 'output',
      title: 'Error Output',
      content: `  File "<stdin>", line 1
    class = "Mathematics"
          ^
SyntaxError: invalid syntax`
    },
    {
      type: 'code',
      title: 'Mistake 2: Starting with Numbers',
      language: 'python',
      code: `# ❌ Variable names cannot start with numbers
1st_place = "Alice"    # Invalid
2nd_grade = "Math"     # Invalid
3_cats = ["Fluffy", "Whiskers", "Mittens"]  # Invalid

# ✅ Correct alternatives
first_place = "Alice"
second_grade = "Math"
three_cats = ["Fluffy", "Whiskers", "Mittens"]`
    },
    {
      type: 'output',
      title: 'Error Output',
      content: `  File "<stdin>", line 1
    1st_place = "Alice"
    ^
SyntaxError: invalid decimal literal`
    },
    {
      type: 'code',
      title: 'Mistake 3: Using Spaces or Special Characters',
      language: 'python',
      code: `# ❌ These will cause SyntaxErrors
my variable = 10       # Spaces not allowed
user-name = "John"     # Hyphens not allowed
total$ = 100           # Special characters not allowed (except _)

# ✅ Correct alternatives  
my_variable = 10       # Use underscore instead of space
user_name = "John"     # Use underscore instead of hyphen
total_amount = 100     # Use descriptive words instead of symbols`
    },
    {
      type: 'output',
      title: 'Error Output',
      content: `  File "<stdin>", line 1
    my variable = 10
       ^
SyntaxError: invalid syntax`
    },
    {
      type: 'code',
      title: 'Mistake 4: Case Sensitivity Confusion',
      language: 'python',
      code: `# Python is case-sensitive - these are all different variables!
age = 25
Age = 30
AGE = 35

print("age =", age)
print("Age =", Age)  
print("AGE =", AGE)

# This can lead to confusing bugs
student_name = "Alice"
Student_Name = "Bob"    # Different variable!
print("student_name =", student_name)
print("Student_Name =", Student_Name)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `age = 25
Age = 30
AGE = 35
student_name = Alice
Student_Name = Bob`
    },
    {
      type: 'code',
      title: 'Mistake 5: Trying to Use Undefined Variables',
      language: 'python',
      code: `# ❌ Using a variable before defining it
print(favorite_color)  # This variable doesn't exist yet
favorite_color = "blue"

# ❌ Typo in variable name
student_age = 20
print(student_ag)      # Typo: missing 'e'`
    },
    {
      type: 'output',
      title: 'Error Output',
      content: `NameError: name 'favorite_color' is not defined

NameError: name 'student_ag' is not defined`
    },
    {
      type: 'text',
      title: 'Best Practices Summary',
      content: `Here are the key takeaways for writing clean, professional Python code:

**✅ DO:**
- Use descriptive variable names that explain their purpose
- Follow snake_case naming convention (lowercase with underscores)
- Check variable types with \`type()\` when debugging
- Be consistent with your naming style throughout your code
- Choose full words over abbreviations when possible

**❌ DON'T:**
- Use Python reserved words as variable names
- Start variable names with numbers
- Use spaces or special characters (except underscore)
- Mix different naming styles in the same project
- Use single letters unless for simple counters

Remember: **Good variable names make your code self-documenting and easier to maintain!**`
    },
    {
      type: 'highlight',
      title: 'Quick Reference - Variable Rules',
      items: [
        "Variable names must start with a letter or underscore (_)",
        "Can contain letters, numbers, and underscores only",
        "Case-sensitive (age and Age are different)",
        "Cannot use Python keywords (if, for, class, etc.)",
        "Use snake_case for multiple words (user_name, not userName)",
        "Be descriptive but concise (student_grade, not sg)"
      ]
    }
  ],
  resources: [
    {
      title: 'Python Variables (Official Docs)',
      url: 'https://docs.python.org/3/tutorial/introduction.html#using-python-as-a-calculator'
    },
    {
      title: 'PEP 8 - Style Guide for Python Code',
      url: 'https://peps.python.org/pep-0008/#naming-conventions'
    },
    {
      title: 'Python Keywords Reference',
      url: 'https://docs.python.org/3/reference/lexical_analysis.html#keywords'
    },
    {
      title: 'Built-in Functions: type()',
      url: 'https://docs.python.org/3/library/functions.html#type'
    }
  ]
};
