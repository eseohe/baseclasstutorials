// Lesson content for String methods (split(), join(), replace(), strip())
export const stringMethodsContent = {
  id: 'string-methods',
  title: 'String Methods (split(), join(), replace(), strip())',
  duration: '30 min',
  overview: `Master Python's powerful built-in string methods! Learn to split strings into parts, join multiple strings together, replace text patterns, and clean up whitespace. These essential methods are the foundation of text processing and data cleaning in Python.`,
  objectives: [
    'Split strings into parts using split() method with various separators',
    'Join multiple strings together using join() method efficiently',
    'Replace text patterns in strings using replace() method',
    'Clean whitespace from strings using strip(), lstrip(), and rstrip() methods',
    'Chain string methods together for complex text transformations',
    'Apply string methods to solve real-world text processing problems'
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to String Methods',
      content: `Python strings come with many built-in methods that make text processing powerful and efficient!

**What are String Methods?**
- **Built-in functions** attached to every string object
- **Called with dot notation** - \`string.method()\`
- **Return new strings** - Original string stays unchanged
- **Chainable operations** - Can combine multiple methods

**Why String Methods Matter:**
- **Text processing** - Parse and analyze text data
- **Data cleaning** - Remove unwanted characters and formatting
- **String transformation** - Convert between different text formats
- **User input handling** - Clean and validate user-provided text

The four methods we'll focus on are essential for almost all text processing tasks!`
    },
    
    {
      type: 'text',
      title: 'The split() Method',
      content: `The \`split()\` method divides a string into a list of substrings based on a separator:

**Basic Syntax:** \`string.split(separator)\`
**Default separator:** Whitespace (spaces, tabs, newlines)
**Returns:** List of string parts

**Common Use Cases:**
- **Parse user input** - Split names, addresses, data
- **Process file contents** - Break text into words or lines
- **Extract information** - Separate structured data
- **Text analysis** - Count words, find patterns`
    },
    
    {
      type: 'code',
      title: 'Basic split() Usage',
      language: 'python',
      code: `# Split on whitespace (default)
text = "Hello Python Programming"
words = text.split()
print("Original:", text)
print("Split result:", words)
print("Number of words:", len(words))

# Access individual parts
print("First word:", words[0])
print("Last word:", words[-1])`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Original: Hello Python Programming
Split result: ['Hello', 'Python', 'Programming']
Number of words: 3
First word: Hello
Last word: Programming`
    },
    
    {
      type: 'code',
      title: 'Split on Commas',
      language: 'python',
      code: `# Split on commas
csv_data = "apple,banana,orange,grape"
fruits = csv_data.split(",")
print("CSV data:", csv_data)
print("Fruits list:", fruits)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `CSV data: apple,banana,orange,grape
Fruits list: ['apple', 'banana', 'orange', 'grape']`
    },

    {
      type: 'code',
      title: 'Split on Other Characters',
      language: 'python',
      code: `# Split email addresses
email = "user@example.com"
email_parts = email.split("@")
print("Email:", email)
print("Parts:", email_parts)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Email: user@example.com
Parts: ['user', 'example.com']`
    },

    {
      type: 'code',
      title: 'Split File Paths',
      language: 'python',
      code: `# Split file paths
path = "home/user/documents/file.txt"
path_parts = path.split("/")
print("Path:", path)
print("Parts:", path_parts)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Path: home/user/documents/file.txt
Parts: ['home', 'user', 'documents', 'file.txt']`
    },
    
    {
      type: 'code',
      title: 'Split All vs Limited Splits',
      language: 'python',
      code: `# Compare unlimited vs limited splits
text = "one-two-three-four-five"
print("Original:", text)

# Split all occurrences
all_parts = text.split("-")
print("All splits:", all_parts)

# Limit to 2 splits (creates 3 parts maximum)
limited_parts = text.split("-", 2)
print("Limited splits:", limited_parts)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Original: one-two-three-four-five
All splits: ['one', 'two', 'three', 'four', 'five']
Limited splits: ['one', 'two', 'three-four-five']`
    },

    {
      type: 'code',
      title: 'Parsing Names with Split Limit',
      language: 'python',
      code: `# Real-world example: parsing names
full_name = "John Michael Smith Johnson"
name_parts = full_name.split(" ", 1)  # Split only on first space
print("Full name:", full_name)
print("Name parts:", name_parts)
print("First name:", name_parts[0])
print("Rest of name:", name_parts[1])`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Full name: John Michael Smith Johnson
Name parts: ['John', 'Michael Smith Johnson']
First name: John
Rest of name: Michael Smith Johnson`
    },
    
    {
      type: 'text',
      title: 'The join() Method',
      content: `The \`join()\` method combines a list of strings into a single string using a separator:

**Basic Syntax:** \`separator.join(list_of_strings)\`
**Separator first** - The string that goes between parts
**Takes a list** - List or other sequence of strings
**Returns:** Single combined string

**Key Points:**
- **Opposite of split()** - Joins what split() separates
- **Efficient concatenation** - Better than using + in loops
- **Flexible separators** - Use any string as separator
- **Clean syntax** - Readable and maintainable code`
    },
    
    {
      type: 'code',
      title: 'Join with Spaces',
      language: 'python',
      code: `# Join with spaces
words = ["Hello", "Python", "Programming"]
sentence = " ".join(words)
print("Words list:", words)
print("Joined sentence:", sentence)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Words list: ['Hello', 'Python', 'Programming']
Joined sentence: Hello Python Programming`
    },

    {
      type: 'code',
      title: 'Join with Different Separators',
      language: 'python',
      code: `# Join with different separators
words = ["Hello", "Python", "Programming"]
comma_separated = ",".join(words)
dash_separated = "-".join(words)
print("Comma separated:", comma_separated)
print("Dash separated:", dash_separated)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Comma separated: Hello,Python,Programming
Dash separated: Hello-Python-Programming`
    },
    
    {
      type: 'code',
      title: 'Join for File Paths',
      language: 'python',
      code: `# Create file paths
path_parts = ["home", "user", "documents", "python"]
file_path = "/".join(path_parts)
print("Path parts:", path_parts)
print("File path:", file_path)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Path parts: ['home', 'user', 'documents', 'python']
File path: home/user/documents/python`
    },

    {
      type: 'code',
      title: 'Join for Lists and Displays',
      language: 'python',
      code: `# Format lists for display
shopping_list = ["apples", "bananas", "milk", "bread"]
display_list = ", ".join(shopping_list)
print("Shopping items:", display_list)

# Create formatted output
scores = ["95", "87", "92", "88"]
score_summary = " | ".join(scores)
print("Test scores:", score_summary)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Shopping items: apples, bananas, milk, bread
Test scores: 95 | 87 | 92 | 88`
    },
    
    {
      type: 'code',
      title: 'Cleaning Messy Text with split() and join()',
      language: 'python',
      code: `# Clean up messy spacing
messy_text = "apple,   banana,orange,    grape"
print("Messy text:", messy_text)

# Split on commas then clean individual parts
parts = messy_text.split(",")
print("After split:", parts)

# Clean each part manually (we'll learn strip() next!)
part1 = parts[0].strip()  # "apple"
part2 = parts[1].strip()  # "banana" 
part3 = parts[2].strip()  # "orange"
part4 = parts[3].strip()  # "grape"
cleaned_parts = [part1, part2, part3, part4]
clean_text = ", ".join(cleaned_parts)
print("Cleaned text:", clean_text)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Messy text: apple,   banana,orange,    grape
After split: ['apple', '   banana', 'orange', '    grape']
Cleaned text: apple, banana, orange, grape`
    },

    {
      type: 'code',
      title: 'Converting Between Text Formats',
      language: 'python',
      code: `# Convert between formats
space_separated = "one two three four"
dash_separated = "-".join(space_separated.split())
print("Original:", space_separated)
print("Converted:", dash_separated)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Original: one two three four
Converted: one-two-three-four`
    },
    
    {
      type: 'text',
      title: 'The replace() Method',
      content: `The \`replace()\` method finds and replaces text patterns in strings:

**Basic Syntax:** \`string.replace(old, new)\`
**With count limit:** \`string.replace(old, new, count)\`
**Case sensitive** - Must match exactly
**Returns:** New string with replacements made

**Common Applications:**
- **Text correction** - Fix typos and formatting issues
- **Data standardization** - Convert formats consistently  
- **Content filtering** - Replace unwanted words or characters
- **Template processing** - Fill in placeholder values`
    },
    
    {
      type: 'code',
      title: 'Simple Text Replacement',
      language: 'python',
      code: `# Simple text replacement
original = "I love Java programming"
modified = original.replace("Java", "Python")
print("Original:", original)
print("Modified:", modified)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Original: I love Java programming
Modified: I love Python programming`
    },

    {
      type: 'code',
      title: 'Multiple Word Replacements',
      language: 'python',
      code: `# Multiple replacements in same string
text = "The cat sat on the cat bed"
new_text = text.replace("cat", "dog")
print("Original:", text)
print("New text:", new_text)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Original: The cat sat on the cat bed
New text: The dog sat on the dog bed`
    },

    {
      type: 'code',
      title: 'Case-Sensitive Replacement',
      language: 'python',
      code: `# Case-sensitive replacement
mixed_case = "Hello hello HELLO"
result = mixed_case.replace("hello", "hi")
print("Mixed case:", mixed_case)
print("Result:", result)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Mixed case: Hello hello HELLO
Result: Hello hi HELLO`
    },
    
    {
      type: 'code',
      title: 'Replace All Occurrences',
      language: 'python',
      code: `# Replace all occurrences (default behavior)
text = "Python is fun, Python is easy, Python is powerful"
all_replaced = text.replace("Python", "JavaScript")
print("Original:", text)
print("All replaced:", all_replaced)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Original: Python is fun, Python is easy, Python is powerful
All replaced: JavaScript is fun, JavaScript is easy, JavaScript is powerful`
    },

    {
      type: 'code',
      title: 'Replace with Count Limits',
      language: 'python',
      code: `# Limit number of replacements
text = "Python is fun, Python is easy, Python is powerful"

# Replace only first 2 occurrences  
limited_replace = text.replace("Python", "JavaScript", 2)
print("Limited replace:", limited_replace)

# Replace only first occurrence
first_only = text.replace("Python", "JavaScript", 1)
print("First only:", first_only)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Limited replace: JavaScript is fun, JavaScript is easy, Python is powerful
First only: JavaScript is fun, Python is easy, Python is powerful`
    },
    
    {
      type: 'code',
      title: 'Phone Number Cleaning',
      language: 'python',
      code: `# Clean up phone numbers
phone = "(555) 123-4567"
clean_phone = phone.replace("(", "").replace(")", "").replace("-", " ")
print("Original phone:", phone)
print("Cleaned phone:", clean_phone)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Original phone: (555) 123-4567
Cleaned phone: 555 123 4567`
    },

    {
      type: 'code',
      title: 'Currency Text Formatting',
      language: 'python',
      code: `# Format currency
price_text = "The item costs $29.99 dollars"
formatted = price_text.replace("$", "\\$").replace("dollars", "USD")
print("Original:", price_text)
print("Formatted:", formatted)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Original: The item costs $29.99 dollars
Formatted: The item costs \\$29.99 USD`
    },

    {
      type: 'code',
      title: 'Template String Replacement',
      language: 'python',
      code: `# Template replacement
template = "Hello NAME, welcome to COMPANY!"
message = template.replace("NAME", "Alice").replace("COMPANY", "TechCorp")
print("Template:", template)
print("Message:", message)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Template: Hello NAME, welcome to COMPANY!
Message: Hello Alice, welcome to TechCorp!`
    },
    
    {
      type: 'text',
      title: 'The strip() Method Family',
      content: `The strip methods remove unwanted characters from the beginning and/or end of strings:

**strip()** - Removes whitespace from both ends
**lstrip()** - Removes whitespace from left (beginning) only  
**rstrip()** - Removes whitespace from right (end) only
**Custom characters:** All methods can remove specific characters

**What counts as whitespace:**
- Spaces, tabs, newlines
- Other Unicode whitespace characters
- Leading and trailing only - not middle whitespace

**Perfect for:**
- **Cleaning user input** - Remove accidental spaces
- **Data processing** - Clean imported data
- **File parsing** - Handle inconsistent formatting`
    },
    
    {
      type: 'code',
      title: 'Basic strip() Usage',
      language: 'python',
      code: `# Remove whitespace from both ends
messy_text = "   Hello Python   "
clean_text = messy_text.strip()
print("Original: '" + messy_text + "'")
print("Stripped: '" + clean_text + "'")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Original: '   Hello Python   '
Stripped: 'Hello Python'`
    },

    {
      type: 'code',
      title: 'Stripping Mixed Whitespace',
      language: 'python',
      code: `# Different types of whitespace
mixed_whitespace = "\\t\\n  Python Programming  \\n\\t"
cleaned = mixed_whitespace.strip()
print("Mixed whitespace: '" + mixed_whitespace + "'")
print("Cleaned: '" + cleaned + "'")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Mixed whitespace: '	
  Python Programming  
	'
Cleaned: 'Python Programming'`
    },

    {
      type: 'code',
      title: 'Strip Preserves Internal Spaces',
      language: 'python',
      code: `# Strip doesn't affect middle spaces
sentence = "  Hello   World  "
result = sentence.strip()
print("Sentence: '" + sentence + "'")
print("Result: '" + result + "'")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Sentence: '  Hello   World  '
Result: 'Hello   World'`
    },
    
    {
      type: 'code',
      title: 'Left Strip (lstrip)',
      language: 'python',
      code: `# Left strip only
left_spaces = "   Hello World"
left_cleaned = left_spaces.lstrip()
print("Left spaces: '" + left_spaces + "'")
print("Left cleaned: '" + left_cleaned + "'")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Left spaces: '   Hello World'
Left cleaned: 'Hello World'`
    },

    {
      type: 'code',
      title: 'Right Strip (rstrip)',
      language: 'python',
      code: `# Right strip only  
right_spaces = "Hello World   "
right_cleaned = right_spaces.rstrip()
print("Right spaces: '" + right_spaces + "'")
print("Right cleaned: '" + right_cleaned + "'")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Right spaces: 'Hello World   '
Right cleaned: 'Hello World'`
    },

    {
      type: 'code',
      title: 'Comparing All Strip Methods',
      language: 'python',
      code: `# Compare all three methods
both_spaces = "   Hello World   "
print("Original: '" + both_spaces + "'")
print("lstrip(): '" + both_spaces.lstrip() + "'")
print("rstrip(): '" + both_spaces.rstrip() + "'") 
print("strip():  '" + both_spaces.strip() + "'")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Original: '   Hello World   '
lstrip(): 'Hello World   '
rstrip(): '   Hello World'
strip():  'Hello World'`
    },
    
    {
      type: 'code',
      title: 'Strip Specific Characters',
      language: 'python',
      code: `# Remove specific characters
text_with_dots = "...Hello World..."
no_dots = text_with_dots.strip(".")
print("With dots:", text_with_dots)
print("No dots:", no_dots)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `With dots: ...Hello World...
No dots: Hello World`
    },

    {
      type: 'code',
      title: 'Strip Multiple Character Types',
      language: 'python',
      code: `# Remove multiple character types
messy_string = "###   Python Programming   ###"
clean_string = messy_string.strip("# ")
print("Messy:", messy_string)
print("Clean:", clean_string)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Messy: ###   Python Programming   ###
Clean: Python Programming`
    },

    {
      type: 'code',
      title: 'Directional Custom Character Stripping',
      language: 'python',
      code: `# Remove from one side only
left_hash = "###Python"
right_hash = "Python###"
print("Left cleaned:", left_hash.lstrip("#"))
print("Right cleaned:", right_hash.rstrip("#"))`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Left cleaned: Python
Right cleaned: Python`
    },
    
    {
      type: 'text',
      title: 'Chaining String Methods',
      content: `One of the most powerful features of string methods is the ability to chain them together:

**Method Chaining Syntax:** \`string.method1().method2().method3()\`
**Left to right execution** - Methods are applied in order
**Each method returns a string** - Can chain indefinitely

**Benefits of Chaining:**
- **Concise code** - Multiple operations in one line
- **Readable transformations** - Shows step-by-step process
- **Efficient processing** - No intermediate variables needed
- **Professional style** - Common in data processing`
    },
    
    {
      type: 'code',
      title: 'Simple Method Chaining',
      language: 'python',
      code: `# Simple chaining
messy_input = "  HELLO PYTHON WORLD  "
result = messy_input.strip().lower().replace("python", "amazing")
print("Original:", messy_input)
print("Chained result:", result)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Original:   HELLO PYTHON WORLD  
Chained result: hello amazing world`
    },

    {
      type: 'code',
      title: 'Step-by-Step vs Chaining',
      language: 'python',
      code: `# Step by step equivalent
messy_input = "  HELLO PYTHON WORLD  "
step1 = messy_input.strip()
step2 = step1.lower()  
step3 = step2.replace("python", "amazing")
print("Step by step:", step3)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Step by step: hello amazing world`
    },

    {
      type: 'code',
      title: 'Email Address Cleaning Chain',
      language: 'python',
      code: `# Data cleaning chain
user_input = "   john.doe@EMAIL.COM   "
cleaned = user_input.strip().lower().replace("email", "example")
print("User input:", user_input)
print("Cleaned:", cleaned)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `User input:    john.doe@EMAIL.COM   
Cleaned: john.doe@example.com`
    },
    
    {
      type: 'code',
      title: 'CSV Data Processing Chain',
      language: 'python',
      code: `# Process CSV-like data
raw_data = "  Apple, Banana , Orange,  Grape  "
print("Raw data:", raw_data)

# Clean and format in one chain
formatted = raw_data.strip().replace(" ", "").replace(",", " | ").upper()
print("Formatted:", formatted)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Raw data:   Apple, Banana , Orange,  Grape  
Formatted: APPLE|BANANA|ORANGE|GRAPE`
    },

    {
      type: 'code',
      title: 'Address Standardization Chain',
      language: 'python',
      code: `# Multiple cleaning operations
messy_address = "  123 Main St.   APT 2B  "
clean_address = messy_address.strip().replace("St.", "Street").replace("APT", "Apartment")
print("Messy address:", messy_address)
print("Clean address:", clean_address)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Messy address:   123 Main St.   APT 2B  
Clean address: 123 Main Street   Apartment 2B`
    },

    {
      type: 'code',
      title: 'Template Processing Chain',
      language: 'python',
      code: `# Template processing
template = "###USER###, welcome to ###SITE###!"
message = template.replace("###USER###", "Alice").replace("###SITE###", "Python Academy")
print("Template:", template)
print("Message:", message)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Template: ###USER###, welcome to ###SITE###!
Message: Alice, welcome to Python Academy!`
    },
    
    {
      type: 'text',
      title: 'Real-World String Processing',
      content: `Let's apply these string methods to solve practical problems that you'll encounter in real applications. These examples demonstrate how the methods work together to handle common text processing tasks.`
    },
    
    {
      type: 'code',
      title: 'Email Address Processor',
      language: 'python',
      code: `# Process user email input
user_email = "  JohnDOE@EXAMPLE.COM  "
print("User input:", user_email)

# Clean and standardize
clean_email = user_email.strip().lower()
print("Cleaned:", clean_email)

# Extract parts
email_parts = clean_email.split("@")
username = email_parts[0]
domain = email_parts[1]
print("Username:", username)
print("Domain:", domain)

# Create formatted display
display_name = username.replace(".", " ").title()
formatted_email = display_name + " (" + clean_email + ")"
print("Display format:", formatted_email)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `User input:   JohnDOE@EXAMPLE.COM  
Cleaned: johndoe@example.com
Username: johndoe
Domain: example.com
Display format: Johndoe (johndoe@example.com)`
    },
    
    {
      type: 'code',
      title: 'Contact Information Formatter',
      language: 'python',
      code: `# Raw contact data
raw_name = "  smith, john michael  "
raw_phone = "555-123-4567"
raw_address = "123 main st, apt 2b"

print("=== RAW DATA ===")
print("Name:", raw_name)
print("Phone:", raw_phone)  
print("Address:", raw_address)

# Process name
name_parts = raw_name.strip().split(", ")
last_name = name_parts[0].title()
first_names = name_parts[1].title()
full_name = first_names + " " + last_name

# Process phone
clean_phone = raw_phone.replace("-", " ")

# Process address
clean_address = raw_address.replace(",", "").title().replace("St", "Street").replace("Apt", "Apartment")

print("\\n=== FORMATTED DATA ===")
print("Name:", full_name)
print("Phone:", clean_phone)
print("Address:", clean_address)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `=== RAW DATA ===
Name:   smith, john michael  
Phone: 555-123-4567
Address: 123 main st, apt 2b

=== FORMATTED DATA ===
Name: John Michael Smith
Phone: 555 123 4567
Address: 123 Main Street Apartment 2b`
    },
    
    {
      type: 'code',
      title: 'Log Entry Processor',
      language: 'python',
      code: `# Process a single log file entry
log_entry = "[2024-01-15 10:30:45] ERROR: Database connection failed  "
print("=== RAW LOG ENTRY ===")
print(log_entry)

print("\\n=== PROCESSING STEPS ===")

# Step 1: Clean whitespace
cleaned_log = log_entry.strip()
print("After strip():", cleaned_log)

# Step 2: Split into timestamp and message parts
parts = cleaned_log.split("] ", 1)
print("Split on ']: ':", parts)

# Step 3: Extract timestamp (remove opening bracket)
timestamp_part = parts[0].replace("[", "")
message_part = parts[1]
print("Timestamp:", timestamp_part)
print("Message part:", message_part)

# Step 4: Split message into level and actual message
message_parts = message_part.split(": ", 1)
level = message_parts[0]
message = message_parts[1]
print("Level:", level)
print("Message:", message)

# Step 5: Format final output
formatted_log = f"Time: {timestamp_part} | Level: {level} | Message: {message}"
print("\\n=== FINAL RESULT ===")
print(formatted_log)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `=== RAW LOG ENTRY ===
[2024-01-15 10:30:45] ERROR: Database connection failed  

=== PROCESSING STEPS ===
After strip(): [2024-01-15 10:30:45] ERROR: Database connection failed
Split on ']: ': ['[2024-01-15 10:30:45', 'ERROR: Database connection failed']
Timestamp: 2024-01-15 10:30:45
Message part: ERROR: Database connection failed
Level: ERROR
Message: Database connection failed

=== FINAL RESULT ===
Time: 2024-01-15 10:30:45 | Level: ERROR | Message: Database connection failed`
    },
    
    {
      type: 'text',
      title: 'Best Practices for String Methods',
      content: `**🏆 Professional String Method Guidelines:**

**1. Choose the Right Method:**
- Use \`split()\` to break apart structured text
- Use \`join()\` for efficient string concatenation
- Use \`replace()\` for text substitution and cleaning
- Use \`strip()\` family to clean user input and data

**2. Method Chaining Strategy:**
- Chain methods for multi-step transformations
- Keep chains readable - break long chains into steps
- Order matters - plan the sequence of operations
- Consider intermediate variables for debugging

**3. Handle Edge Cases:**
- Empty strings and None values
- Unexpected separators in split() operations
- Case sensitivity in replace() operations
- Different types of whitespace in strip()

**4. Performance Considerations:**
- \`join()\` is more efficient than repeated concatenation
- String methods create new objects - plan memory usage
- Consider caching results of expensive operations
- Profile code when processing large amounts of text

**5. Code Maintainability:**
- Use descriptive variable names for method results
- Add comments explaining complex transformations
- Break complex processing into smaller functions
- Write tests for critical text processing logic

**Remember:** String methods are the foundation of text processing in Python. Master these four methods and you'll be able to handle most text manipulation tasks efficiently!`
    }
  ]
};