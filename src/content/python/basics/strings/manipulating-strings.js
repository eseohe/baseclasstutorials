// Lesson content for Creating and manipulating strings
export const manipulatingStringsContent = {
  id: 'manipulating-strings',
  title: 'Creating and Manipulating Strings',
  duration: '25 min',
  overview: `Master the fundamentals of Python string creation and manipulation! Learn multiple ways to create strings, understand string immutability, and discover essential string operations like concatenation, repetition, and length checking. Build a solid foundation for working with text data in Python.`,
  objectives: [
    'Create strings using single quotes, double quotes, and triple quotes',
    'Understand string immutability and what it means for string operations',
    'Concatenate strings using the + operator and join multiple strings',
    'Repeat strings using the * operator for pattern creation',
    'Measure string length with the len() function',
    'Apply string manipulation techniques to solve real-world text problems'
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Python Strings',
      content: `Strings are one of the most important data types in Python! They represent text data and are incredibly versatile for storing and manipulating information.

**What are Strings?**
- **Text containers** - Store words, sentences, names, messages
- **Sequence of characters** - Letters, numbers, symbols, spaces
- **Immutable objects** - Cannot be changed after creation
- **Versatile data type** - Used in almost every Python program

**Why String Manipulation Matters:**
- **Data processing** - Clean and format user input
- **Text analysis** - Extract meaningful information from text
- **User interfaces** - Create dynamic messages and prompts
- **File handling** - Process text files and data formats`
    },

    {
      type: 'text',
      title: 'Creating Strings: Quote Styles',
      content: `Python offers three different ways to create strings, each with its own advantages:

**Single Quotes (\'):** \`'Hello, World!'\`
**Double Quotes ("):** \`"Hello, World!"\`  
**Triple Quotes ("""):** \`"""Hello, World!"""\`

**When to Use Each:**
- **Single quotes** - Most common, simple text
- **Double quotes** - When text contains apostrophes
- **Triple quotes** - Multi-line strings and documentation`
    },

    {
      type: 'code',
      title: 'Basic String Creation',
      language: 'python',
      code: `# Different ways to create strings
name1 = 'Alice'
name2 = "Bob"
message = 'Welcome to Python!'

print(name1)
print(name2) 
print(message)

# All three methods create the same type
print(type(name1))
print(type(message))`
    },

    {
      type: 'output',
      title: 'Output',
      content: `Alice
Bob
Welcome to Python!
<class 'str'>
<class 'str'>`
    },

    {
      type: 'code',
      title: 'Quotes Inside Strings',
      language: 'python',
      code: `# Using single quotes when text has double quotes
movie_quote = 'She said "Hello" to me'
print(movie_quote)

# Using double quotes when text has apostrophes
contraction = "I can't believe it's working!"
print(contraction)

# Alternative: escape characters (we'll learn more later)
mixed_quote = 'It\'s a "beautiful" day!'
print(mixed_quote)`
    },

    {
      type: 'output',
      title: 'Output',
      content: `She said "Hello" to me
I can't believe it's working!
It's a "beautiful" day!`
    },

    {
      type: 'code',
      title: 'Multi-line Strings with Triple Quotes',
      language: 'python',
      code: `# Single line strings
short_text = "This is one line"
print(short_text)

# Multi-line strings with triple quotes
long_text = """This is a longer text
that spans multiple lines
and preserves the formatting"""
print(long_text)

# Triple quotes with single quotes also work
address = '''123 Main Street
City, State 12345
United States'''
print(address)`
    },

    {
      type: 'output',
      title: 'Output',
      content: `This is one line
This is a longer text
that spans multiple lines
and preserves the formatting
123 Main Street
City, State 12345
United States`
    },

    {
      type: 'text',
      title: 'Understanding String Immutability',
      content: `**Immutability** is a crucial concept in Python strings:

**What does immutable mean?**
- Strings **cannot be changed** after they're created
- Operations create **new strings** instead of modifying existing ones
- Original string **remains unchanged** unless reassigned

**Why is this important?**
- **Memory efficiency** - Python can optimize string storage
- **Predictable behavior** - Functions won't accidentally change your data
- **Thread safety** - Safe to use in concurrent programs

When you "modify" a string, you're actually creating a new one!`
    },

    {
      type: 'code',
      title: 'String Immutability in Action',
      language: 'python',
      code: `# Create a string
original = "Hello"
print("Original:", original)

# String operations create new strings
new_string = original + " World"
print("New string:", new_string)
print("Original after:", original)

# Reassigning creates a new string object
original = original + "!"
print("Reassigned original:", original)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Original: Hello
New string: Hello World
Original after: Hello
Reassigned original: Hello!`
    },
    
    {
      type: 'text',
      title: 'String Concatenation with +',
      content: `String concatenation combines multiple strings into one using the \`+\` operator:

**Basic Syntax:** \`string1 + string2\`
**Multiple strings:** \`string1 + string2 + string3\`
**With variables:** \`name + " is " + age_str\`

**Important Notes:**
- Can only concatenate **strings with strings**
- Numbers must be converted with \`str()\` first
- Creates a **new string object** each time
- Useful for building dynamic messages`
    },
    
    {
      type: 'code',
      title: 'String Concatenation Examples',
      language: 'python',
      code: `# Basic concatenation
first = "Hello"
second = "World"
combined = first + " " + second
print(combined)

# Building longer strings
greeting = "Good" + " " + "morning" + "!"
print(greeting)

# Concatenation with variables
name = "Sarah"
message = "Welcome, " + name + "!"
print(message)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Hello World
Good morning!
Welcome, Sarah!`
    },
    
    {
      type: 'code',
      title: 'Concatenation with Numbers',
      language: 'python',
      code: `# Must convert numbers to strings first
name = "Alice"
age = 25
score = 95.7

# Convert numbers using str()
age_message = name + " is " + str(age) + " years old"
print(age_message)

score_message = "Test score: " + str(score) + "%"
print(score_message)

# Building complex messages
full_message = name + " (" + str(age) + ") scored " + str(score) + "%"
print(full_message)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Alice is 25 years old
Test score: 95.7%
Alice (25) scored 95.7%`
    },
    
    {
      type: 'text',
      title: 'String Repetition with *',
      content: `The \`*\` operator repeats strings a specified number of times:

**Basic Syntax:** \`string * number\`
**Reverse syntax:** \`number * string\` (works the same way)

**Common Uses:**
- Creating **separators and borders** for output formatting
- **Pattern generation** for displays and decorations
- **Placeholder text** for testing and development
- **Visual formatting** to improve readability`
    },
    
    {
      type: 'code',
      title: 'String Repetition Examples',
      language: 'python',
      code: `# Basic repetition
star = "*"
line = star * 10
print(line)

# Creating separators
separator = "-" * 20
print(separator)
print("IMPORTANT MESSAGE")
print(separator)

# Pattern creation
pattern = "ABC" * 3
print(pattern)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `**********
--------------------
IMPORTANT MESSAGE
--------------------
ABCABCABC`
    },
    
    {
      type: 'code',
      title: 'Combining Repetition and Concatenation',
      language: 'python',
      code: `# Create decorative headers
title = "PYTHON PROGRAMMING"
border = "=" * 25
header = border + "\\n" + title + "\\n" + border
print(header)

# Create formatted boxes
box_content = "Welcome!"
box_width = 15
top_bottom = "+" + "-" * (box_width - 2) + "+"
sides = "|" + " " * (box_width - 2) + "|"
print(top_bottom)
print(sides)
print(f"|{box_content:^{box_width-2}}|")
print(sides)
print(top_bottom)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `=========================
PYTHON PROGRAMMING
=========================
+-------------+
|             |
|  Welcome!   |
|             |
+-------------+`
    },
    
    {
      type: 'text',
      title: 'String Length with len()',
      content: `The \`len()\` function returns the number of characters in a string:

**Basic Syntax:** \`len(string)\`
**Returns:** Integer representing character count

**What counts as characters:**
- **Letters and numbers** - All visible characters
- **Spaces and tabs** - Whitespace counts too!
- **Punctuation and symbols** - Every character counts
- **Special characters** - Including newlines and unicode`
    },
    
    {
      type: 'code',
      title: 'Measuring String Length',
      language: 'python',
      code: `# Basic length measurement
name = "Alice"
message = "Hello World"
empty = ""

print(f"'{name}' has {len(name)} characters")
print(f"'{message}' has {len(message)} characters")
print(f"Empty string has {len(empty)} characters")

# Spaces count as characters
spaced = "Hello   World"
print(f"'{spaced}' has {len(spaced)} characters")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `'Alice' has 5 characters
'Hello World' has 11 characters
Empty string has 0 characters
'Hello   World' has 13 characters`
    },
    
    {
      type: 'code',
      title: 'Length in String Building',
      language: 'python',
      code: `# Using length for formatting
text = "Python Programming"
text_length = len(text)
border_length = text_length + 4

print("=" * border_length)
print(f"  {text}")
print("=" * border_length)

# Length calculations
first_name = "John"
last_name = "Smith"
full_name = first_name + " " + last_name
print(f"First name: {len(first_name)} chars")
print(f"Last name: {len(last_name)} chars") 
print(f"Full name: {len(full_name)} chars")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `======================
  Python Programming
======================
First name: 4 chars
Last name: 5 chars
Full name: 10 chars`
    },
    
    {
      type: 'text',
      title: 'Practical String Manipulation',
      content: `Let's apply string manipulation to solve common real-world problems. These examples show how the basic operations work together to create useful functionality.

**Common Applications:**
- **User interface design** - Creating consistent formatting
- **Data formatting** - Preparing text for display or storage  
- **Report generation** - Building structured output
- **Input validation** - Checking and cleaning user input`
    },
    
    {
      type: 'code',
      title: 'Building User Profiles',
      language: 'python',
      code: `# User information
first_name = "Emma"
last_name = "Johnson"
age = 28
city = "Seattle"
occupation = "Software Engineer"

# Build formatted profile
full_name = first_name + " " + last_name
name_length = len(full_name)
separator = "=" * (name_length + 10)

print(separator)
print("     " + full_name.upper())
print(separator)
print("Age: " + str(age))
print("City: " + city)
print("Job: " + occupation)
print(separator)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `======================
     EMMA JOHNSON
======================
Age: 28
City: Seattle
Job: Software Engineer
======================`
    },
    
    {
      type: 'code',
      title: 'Receipt Generator',
      language: 'python',
      code: `# Store information
store_name = "Tech Electronics"
item1 = "Laptop"
price1 = 999.99
item2 = "Mouse"
price2 = 24.99

# Calculate totals
subtotal = price1 + price2
tax = subtotal * 0.08
total = subtotal + tax

# Build receipt
store_header = "*" * len(store_name) + "**"
receipt_line = "-" * 25

print(store_header)
print("*" + store_name + "*")
print(store_header)
print(receipt_line)
print(item1 + ": \\$" + str(price1))
print(item2 + ": \\$" + str(price2))
print(receipt_line)
print("Subtotal: \\$" + f"{subtotal:.2f}")
print("Tax: \\$" + f"{tax:.2f}")
print("Total: \\$" + f"{total:.2f}")
print(receipt_line)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `*****************
*Tech Electronics*
*****************
-------------------------
Laptop: \$999.99
Mouse: \$24.99
-------------------------
Subtotal: \$1024.98
Tax: \$81.99
Total: \$1106.97
-------------------------`
    },
    
    {
      type: 'code',
      title: 'Name Badge Creator',
      language: 'python',
      code: `# Conference attendee information
first_name = "Alex"
last_name = "Chen"
company = "DataTech Solutions"
role = "Data Scientist"

# Create badge components
full_name = first_name + " " + last_name
name_line = "| " + full_name + " |"
company_line = "| " + company + " |" 
role_line = "| " + role + " |"

# Calculate badge width based on longest line
name_width = len(name_line)
company_width = len(company_line)
role_width = len(role_line)

# Find maximum width (simulating max function)
max_width = name_width
if company_width > max_width:
    max_width = company_width
if role_width > max_width:
    max_width = role_width

# Create border
border = "+" + "-" * (max_width - 2) + "+"

# Print badge
print(border)
print(name_line)
print(company_line) 
print(role_line)
print(border)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `+-------------------+
| Alex Chen |
| DataTech Solutions |
| Data Scientist |
+-------------------+`
    },
    
    {
      type: 'text',
      title: 'Best Practices for String Manipulation',
      content: `**🏆 Professional String Handling Guidelines:**

**1. Choose Appropriate Quote Styles:**
- Use single quotes for simple strings
- Use double quotes when string contains apostrophes
- Use triple quotes for multi-line text and documentation

**2. Plan for Immutability:**
- Remember that strings cannot be modified in place
- Store results of string operations in new variables
- Chain operations thoughtfully to avoid excessive object creation

**3. Handle Data Types Properly:**
- Always convert numbers to strings before concatenation
- Use f-strings or .format() for complex string building
- Validate input types when building user-facing strings

**4. Consider Performance:**
- For many concatenations, consider using f-strings or .format()
- String repetition with * is efficient for creating patterns
- len() is a fast operation - use it for formatting calculations

**5. Write Readable Code:**
- Use meaningful variable names for string components
- Break complex string building into logical steps
- Add comments to explain formatting logic

**Remember:** Well-structured strings make programs more professional and user-friendly!`
    }
  ]
};