// Lesson content for Understanding Python syntax and indentation
const pythonSyntaxContent = {
  id: 'python-syntax',
  title: 'Understanding Python Syntax and Indentation',
  duration: '20 min',
  overview: `Python has unique rules that make it different from other programming languages. The most famous is indentation - Python uses spaces and tabs to organize code instead of curly braces. Let's learn Python's syntax rules so your code works perfectly every time!`,
  objectives: [
    'Master Python\'s indentation system',
    'Understand Python statement structure',
    'Learn about comments and documentation',
    'Recognize and avoid common syntax errors',
    'Write clean, properly formatted Python code'
  ],
  sections: [
    {
      type: 'text',
      title: 'Why Python Syntax Matters',
      content: `
        Python syntax is like grammar for programming. Just as English has rules about where periods and commas go, Python has rules about how to write code. The good news? Python's rules are designed to make code as readable as possible!

        Python's main philosophy: **"Beautiful is better than ugly"** and **"Readability counts"**.
      `
    },
    {
      type: 'text',
      title: 'Python Statements: The Building Blocks',
      content: `
        Python programs are made up of statements - instructions that tell Python what to do. Most statements go on their own line.
      `
    },
    {
      type: 'code',
      title: 'Simple Statements',
      language: 'python',
      code: `print("This is a statement")
name = "Alice"
age = 25`
    },
    {
      type: 'output',
      title: 'Output',
      content: `This is a statement`
    },
    {
      type: 'text',
      title: 'Comments: Notes to Yourself',
      content: `
        Comments are notes in your code that Python ignores. They help you (and others) understand what your code does.
      `
    },
    {
      type: 'code',
      title: 'Using Comments',
      language: 'python',
      code: `# This is a comment - Python ignores this line
print("Hello!")  # This is also a comment

# Comments help explain what your code does
user_name = "Bob"  # Store the user's name`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Hello!`
    },
    {
      type: 'text',
      title: 'Python\'s Secret Weapon: Indentation',
      content: `
        Here's what makes Python special: instead of using curly braces \`{}\` like other languages, Python uses indentation (spaces or tabs) to group code together. This is called a "code block."

        **Think of indentation like organizing a book:**
        - Chapter titles are at the left margin
        - Section headers are indented a bit
        - Paragraphs are indented more
      `
    },
    {
      type: 'code',
      title: 'Indentation in Action',
      language: 'python',
      code: `if True:
    print("This line is indented")
    print("This line is also indented")
print("This line is back at the left margin")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `This line is indented
This line is also indented
This line is back at the left margin`
    },
    {
      type: 'text',
      title: 'The Colon (:) - Python\'s Traffic Signal',
      content: `
        In Python, the colon (:) is like a traffic signal that says "code block ahead!" You'll see colons after statements like \`if\`, \`for\`, \`while\`, and \`def\`.
      `
    },
    {
      type: 'code',
      title: 'Colons and Code Blocks',
      language: 'python',
      code: `# The colon says "here comes a code block"
if 5 > 3:
    print("Math works!")
    print("5 is indeed greater than 3")

# Another example
if True:
    print("This will always run")
    x = 10
    print("x is", x)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Math works!
5 is indeed greater than 3
This will always run
x is 10`
    },
    {
      type: 'text',
      title: 'Indentation Rules: The Do\'s and Don\'ts',
      content: `
        Python is very strict about indentation. Here are the essential rules:
      `
    },
    {
      type: 'code',
      title: 'Correct Indentation',
      language: 'python',
      code: `# ✅ CORRECT: All lines in the block have the same indentation
if True:
    print("Line 1")
    print("Line 2")
    print("Line 3")
print("Back to normal")`
    },
    {
      type: 'code',
      title: 'Incorrect Indentation (This Would Cause an Error)',
      language: 'python',
      code: `# ❌ WRONG: Inconsistent indentation
if True:
    print("Line 1")
        print("Line 2")  # Too much indentation!
  print("Line 3")       # Too little indentation!`
    },
    {
      type: 'text',
      title: 'How Much Should You Indent?',
      content: `
        Python recommends **4 spaces** for each level of indentation. Most code editors can convert tabs to 4 spaces automatically.
      `
    },
    {
      type: 'code',
      title: 'Standard Python Indentation (4 spaces)',
      language: 'python',
      code: `if True:                    # 0 spaces (main level)
    if True:                # 4 spaces (first level)
        print("Nested!")    # 8 spaces (second level)
        print("Still nested!")
    print("Back to first level")
print("Back to main level")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Nested!
Still nested!
Back to first level
Back to main level`
    },
    {
      type: 'text',
      title: 'Multi-Line Statements',
      content: `
        Sometimes statements are too long for one line. Python gives you several ways to split them:
      `
    },
    {
      type: 'code',
      title: 'Ways to Split Long Lines',
      language: 'python',
      code: `# Method 1: Parentheses (recommended)
long_message = ("This is a very long message "
                "that spans multiple lines")

# Method 2: Backslash (less common)
total = 1 + 2 + 3 + \\
        4 + 5 + 6

# Method 3: Inside brackets, parentheses, or braces
numbers = [1, 2, 3,
           4, 5, 6,
           7, 8, 9]

print(long_message)
print("Total:", total)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `This is a very long message that spans multiple lines
Total: 21`
    },
    {
      type: 'text',
      title: 'Practical Exercise: Fix the Code',
      content: `
        Let's practice! Here's some code with syntax issues. Can you spot what's wrong?
      `
    },
    {
      type: 'code',
      title: 'Broken Code (Don\'t Run This)',
      language: 'python',
      code: `# This code has several syntax errors
if 10 > 5
    print("Math still works")
        print("This indentation is wrong")
   print("This too")
print("Back to normal"`
    },
    {
      type: 'code',
      title: 'Fixed Version',
      language: 'python',
      code: `# Fixed version
if 10 > 5:                    # Added missing colon
    print("Math still works")
    print("Fixed indentation")   # Made indentation consistent
    print("This too")            # Fixed indentation
print("Back to normal")          # Added missing closing quote`
    },
    {
      type: 'output',
      title: 'Output (Fixed Version)',
      content: `Math still works
Fixed indentation
This too
Back to normal`
    },
    {
      type: 'text',
      title: 'Working with Strings and Quotes',
      content: `
        Python lets you use single or double quotes for strings. Be consistent and make sure they match!
      `
    },
    {
      type: 'code',
      title: 'String Quotes',
      language: 'python',
      code: `# Single quotes
message1 = 'Hello, world!'

# Double quotes
message2 = "Hello, world!"

# Use single quotes inside double quotes
message3 = "Don't worry, this works!"

# Use double quotes inside single quotes
message4 = 'She said "Hello" to me.'

print(message1)
print(message2)
print(message3)
print(message4)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Hello, world!
Hello, world!
Don't worry, this works!
She said "Hello" to me.`
    },
    {
      type: 'text',
      title: 'Triple Quotes: Multi-Line Strings',
      content: `
        For longer text that spans multiple lines, use triple quotes:
      `
    },
    {
      type: 'code',
      title: 'Multi-Line Strings',
      language: 'python',
      code: `poem = """
Roses are red,
Violets are blue,
Python is awesome,
And so are you!
"""

print(poem)

# You can also use single triple quotes
story = '''
Once upon a time,
there was a programmer
who learned Python...
'''

print(story)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `
Roses are red,
Violets are blue,
Python is awesome,
And so are you!


Once upon a time,
there was a programmer
who learned Python...`
    },
    {
      type: 'highlight',
      title: 'Common Syntax Errors (And How to Fix Them)',
      items: [
        '**IndentationError**: Make sure all lines in a code block have the same indentation',
        '**SyntaxError: Missing colon**: Add \`:\` after if, for, while, def statements',
        '**SyntaxError: Unterminated string**: Check that your quotes match',
        '**SyntaxError: Unexpected indent**: Remove extra indentation where it\'s not needed',
        '**TabError**: Don\'t mix tabs and spaces - use 4 spaces consistently'
      ]
    },
    {
      type: 'text',
      title: 'Python Style Guide (PEP 8)',
      content: `
        Python has an official style guide called PEP 8. Here are the key points for beginners:

        • Use 4 spaces for indentation
        • Keep lines under 80 characters when possible
        • Use meaningful variable names
        • Add spaces around operators (x = 5, not x=5)
        • Use lowercase with underscores for variable names (user_name, not userName)
      `
    },
    {
      type: 'code',
      title: 'Good Python Style',
      language: 'python',
      code: `# Good style examples
user_name = "Alice"           # Good variable name
user_age = 25                 # Clear and descriptive
total_score = 95 + 87 + 92    # Spaces around operators

# Good use of comments
def calculate_average():      # Function name uses underscores
    """Calculate the average of scores."""  # Docstring
    scores = [95, 87, 92]
    return sum(scores) / len(scores)

print("User:", user_name)
print("Age:", user_age)
print("Average:", calculate_average())`
    },
    {
      type: 'output',
      title: 'Output',
      content: `User: Alice
Age: 25
Average: 91.33333333333333`
    },
    {
      type: 'text',
      title: 'Practice Exercise: Write Clean Code',
      content: `
        Try creating this simple program following Python's style rules:
      `
    },
    {
      type: 'code',
      title: 'Practice Exercise',
      language: 'python',
      code: `# Student grade calculator
student_name = "Emma"
math_score = 95
science_score = 87
english_score = 92

# Calculate average
total_points = math_score + science_score + english_score
average_score = total_points / 3

# Display results
print("=== Student Report Card ===")
print("Student Name:", student_name)
print("Math Score:", math_score)
print("Science Score:", science_score)
print("English Score:", english_score)
print("Average Score:", round(average_score, 1))

# Determine grade
if average_score >= 90:
    grade = "A"
elif average_score >= 80:
    grade = "B"
else:
    grade = "C"

print("Final Grade:", grade)`
    },
    {
      type: 'output',
      title: 'Expected Output',
      content: `=== Student Report Card ===
Student Name: Emma
Math Score: 95
Science Score: 87
English Score: 92
Average Score: 91.3
Final Grade: A`
    },
    {
      type: 'text',
      title: 'Code Editor Tips',
      content: `
        Most modern code editors help with Python syntax:

        • **Auto-indentation**: Editors automatically indent after colons
        • **Syntax highlighting**: Different colors for keywords, strings, comments
        • **Error detection**: Underlines syntax errors before you run the code
        • **PEP 8 checking**: Warns you about style violations

        Popular beginner-friendly editors: VS Code, PyCharm, Thonny
      `
    },
    {
      type: 'text',
      title: 'Congratulations! You\'ve Mastered Python Syntax! 🎉',
      content: `
        You now understand Python's most important syntax rules:
        • How indentation organizes code into blocks
        • When and where to use colons
        • How to write comments and multi-line strings
        • Common errors to avoid
        • Python style conventions

        With this foundation, you're ready to start learning Python's data types and start building real programs. Great job!
      `
    }
  ],
  resources: [
    {
      title: 'Python Syntax Documentation',
      url: 'https://docs.python.org/3/reference/lexical_analysis.html'
    },
    {
      title: 'PEP 8 - Python Style Guide',
      url: 'https://www.python.org/dev/peps/pep-0008/'
    },
    {
      title: 'Real Python: Python Indentation Guide',
      url: 'https://realpython.com/python-indentation/'
    },
    {
      title: 'Common Python Syntax Errors',
      url: 'https://realpython.com/invalid-syntax-python/'
    }
  ]
};

export default pythonSyntaxContent;
