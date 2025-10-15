// Lesson content for String indexing and slicing
export const stringIndexingContent = {
  id: 'string-indexing',
  title: 'String Indexing and Slicing',
  duration: '25 min',
  overview: `Unlock the power of accessing individual characters and substrings! Master Python's indexing system to pinpoint exact characters, and learn slicing techniques to extract meaningful portions of text. These fundamental skills are essential for text analysis, data parsing, and string manipulation.`,
  objectives: [
    'Access individual characters using positive and negative indexing',
    'Extract substrings using slice notation with start, stop, and step parameters',
    'Understand Python\'s zero-based indexing system and how it works',
    'Use negative indexing to access characters from the end of strings',
    'Apply advanced slicing techniques like reversing strings and extracting patterns',
    'Solve real-world problems involving text parsing and data extraction'
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to String Indexing',
      content: `Every character in a Python string has a specific position called an **index**. Understanding indexing is crucial for precise text manipulation!

**What is String Indexing?**
- **Position-based access** - Get specific characters by their location
- **Zero-based numbering** - First character is at position 0
- **Square bracket notation** - \`string[index]\`
- **Immutable access** - Can read characters but not modify them

**Why Indexing Matters:**
- **Character extraction** - Get specific letters, digits, or symbols
- **Text validation** - Check characters at important positions
- **Data parsing** - Extract structured information from text
- **Pattern analysis** - Examine text character by character

**Key Concept:** Python strings are **sequences**, meaning each character has a predictable, numbered position!`
    },
    
    {
      type: 'text',
      title: 'Understanding Zero-Based Indexing',
      content: `Python uses **zero-based indexing** - the first character is at position 0, not 1:

\`\`\`
String: "PYTHON"
Index:   0 1 2 3 4 5
         P Y T H O N
\`\`\`

**Index Values:**
- **First character** - Index 0
- **Second character** - Index 1  
- **Last character** - Index (length - 1)
- **Out of range** - Causes IndexError

**Why Zero-Based?**
- **Mathematical efficiency** - Aligns with computer memory addressing
- **Consistency** - Same system used across programming languages
- **Calculation simplicity** - Makes offset calculations easier`
    },
    
    {
      type: 'code',
      title: 'Basic String Indexing',
      language: 'python',
      code: `# Basic character access
text = "PYTHON"
print("String:", text)
print("Length:", len(text))

# Access individual characters
print("First character (index 0):", text[0])
print("Second character (index 1):", text[1])
print("Third character (index 2):", text[2])

# Last character
last_index = len(text) - 1
print("Last character (index " + str(last_index) + "):", text[last_index])`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `String: PYTHON
Length: 6
First character (index 0): P
Second character (index 1): Y
Third character (index 2): T
Last character (index 5): N`
    },
    
    {
      type: 'code',
      title: 'Indexing Different String Types',
      language: 'python',
      code: `# Different types of strings
name = "Alice"
number = "12345"
sentence = "Hello World"
mixed = "ABC123def"

# Access first and last characters
print("Name:", name, "-> First:", name[0], "Last:", name[len(name)-1])
print("Number:", number, "-> First:", number[0], "Last:", number[len(number)-1])
print("Sentence:", sentence, "-> First:", sentence[0], "Last:", sentence[len(sentence)-1])
print("Mixed:", mixed, "-> First:", mixed[0], "Last:", mixed[len(mixed)-1])`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Name: Alice -> First: A Last: e
Number: 12345 -> First: 1 Last: 5
Sentence: Hello World -> First: H Last: d
Mixed: ABC123def -> First: A Last: f`
    },
    
    {
      type: 'text',
      title: 'Negative Indexing',
      content: `Python supports **negative indexing** to access characters from the end of the string:

\`\`\`
String: "PYTHON"
Positive: 0  1  2  3  4  5
          P  Y  T  H  O  N
Negative: -6 -5 -4 -3 -2 -1
\`\`\`

**Negative Index Rules:**
- **Last character** - Index -1
- **Second to last** - Index -2
- **First character** - Index -len(string)
- **Count backwards** - From right to left

**When to Use Negative Indexing:**
- **Access from end** - When you need the last few characters
- **Unknown length** - When string length varies
- **Readable code** - \`text[-1]\` is clearer than \`text[len(text)-1]\``
    },
    
    {
      type: 'code',
      title: 'Negative Indexing Examples',
      language: 'python',
      code: `# Compare positive and negative indexing
word = "PROGRAMMING"
print("Word:", word)
print("Length:", len(word))

# Access same characters using both methods
print("\\nLast character:")
print("  Positive index [" + str(len(word)-1) + "]:", word[len(word)-1])
print("  Negative index [-1]:", word[-1])

print("\\nSecond to last character:")
print("  Positive index [" + str(len(word)-2) + "]:", word[len(word)-2])
print("  Negative index [-2]:", word[-2])

print("\\nFirst character:")
print("  Positive index [0]:", word[0])
print("  Negative index [" + str(-len(word)) + "]:", word[-len(word)])`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Word: PROGRAMMING
Length: 11

Last character:
  Positive index [10]: G
  Negative index [-1]: G

Second to last character:
  Positive index [9]: N
  Negative index [-2]: N

First character:
  Positive index [0]: P
  Negative index [-11]: P`
    },
    
    {
      type: 'code',
      title: 'Practical Negative Indexing',
      language: 'python',
      code: `# File extension checking
filename = "document.pdf"
print("Filename:", filename)
print("Last character:", filename[-1])
print("Last 3 characters:", filename[-3:])  # We'll learn slicing next!

# Phone number parts
phone = "555-123-4567"
print("Phone:", phone)
print("Last digit:", phone[-1])
print("Second to last:", phone[-2])

# Email domain extraction
email = "user@company.com"
print("Email:", email)
print("Last character:", email[-1])
print("Domain indicator:", email[-4:])  # .com`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Filename: document.pdf
Last character: f
Last 3 characters: pdf
Phone: 555-123-4567
Last digit: 7
Second to last: 6
Email: user@company.com
Last character: m
Domain indicator: .com`
    },
    
    {
      type: 'text',
      title: 'Introduction to String Slicing',
      content: `**String slicing** extracts a portion of a string by specifying a range of indices:

**Basic Slice Syntax:** \`string[start:stop]\`
**Full Slice Syntax:** \`string[start:stop:step]\`

**Slice Parameters:**
- **start** - Index where slice begins (included)
- **stop** - Index where slice ends (excluded)
- **step** - How many characters to skip (optional, default 1)

**Key Points:**
- **Start inclusive** - Character at start index is included
- **Stop exclusive** - Character at stop index is NOT included
- **Default values** - Missing parameters have sensible defaults
- **Returns new string** - Original string is unchanged`
    },
    
    {
      type: 'code',
      title: 'Basic String Slicing',
      language: 'python',
      code: `# Basic slicing examples
text = "PROGRAMMING"
print("Original text:", text)
print("Positions:    0123456789A")  # Visual aid

# Extract substrings
print("\\nBasic slices:")
print("text[0:4]:", text[0:4])    # First 4 characters
print("text[3:7]:", text[3:7])    # Middle section
print("text[7:11]:", text[7:11])  # Last 4 characters

# Remember: stop index is excluded
print("\\nSlice details:")
print("text[1:4] gets positions 1, 2, 3:", text[1:4])
print("text[5:8] gets positions 5, 6, 7:", text[5:8])`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Original text: PROGRAMMING
Positions:    0123456789A

Basic slices:
text[0:4]: PROG
text[3:7]: GRAM
text[7:11]: MING

Slice details:
text[1:4] gets positions 1, 2, 3: ROG
text[5:8] gets positions 5, 6, 7: AMM`
    },
    
    {
      type: 'code',
      title: 'Slicing with Default Values',
      language: 'python',
      code: `# Default slice values
word = "PYTHON"
print("Word:", word)

# Omit start (defaults to 0)
print("word[:3]:", word[:3])     # From beginning to position 3
print("word[:4]:", word[:4])     # From beginning to position 4

# Omit stop (defaults to end)
print("word[2:]:", word[2:])     # From position 2 to end
print("word[4:]:", word[4:])     # From position 4 to end

# Omit both (full string)
print("word[:]:", word[:])       # Entire string (copy)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Word: PYTHON
word[:3]: PYT
word[:4]: PYTH
word[2:]: THON
word[4:]: ON
word[:]: PYTHON`
    },
    
    {
      type: 'code',
      title: 'Negative Indices in Slicing',
      language: 'python',
      code: `# Using negative indices in slices
text = "PROGRAMMING"
print("Text:", text)

# Slice with negative indices
print("\\nNegative slicing:")
print("text[-4:]:", text[-4:])      # Last 4 characters
print("text[:-3]:", text[:-3])      # All but last 3 characters
print("text[-7:-3]:", text[-7:-3])  # Middle section using negative indices

# Mix positive and negative
print("\\nMixed indices:")
print("text[2:-2]:", text[2:-2])    # From position 2 to 2 from end
print("text[-5:8]:", text[-5:8])    # From 5 from end to position 8`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Text: PROGRAMMING

Negative slicing:
text[-4:]: MING
text[:-3]: PROGRAMM
text[-7:-3]: GRAM

Mixed indices:
text[2:-2]: OGRAMMIN
text[-5:8]: AMM`
    },
    
    {
      type: 'text',
      title: 'Advanced Slicing with Step',
      content: `The **step parameter** controls which characters to include in a slice:

**Step Syntax:** \`string[start:stop:step]\`

**Step Values:**
- **step = 1** - Every character (default)
- **step = 2** - Every other character  
- **step = 3** - Every third character
- **step = -1** - Reverse order (every character backwards)

**Special Uses:**
- **String reversal** - \`string[::-1]\`
- **Pattern extraction** - Extract alternating characters
- **Sampling** - Get characters at regular intervals`
    },
    
    {
      type: 'code',
      title: 'Slicing with Step Parameter',
      language: 'python',
      code: `# Step parameter examples
text = "ABCDEFGHIJKLMNOP"
print("Text:", text)
print("Positions: 0123456789ABCDEF")

# Different step values
print("\\nStep examples:")
print("text[::1]:", text[::1])      # Every character (default)
print("text[::2]:", text[::2])      # Every other character
print("text[::3]:", text[::3])      # Every third character
print("text[::4]:", text[::4])      # Every fourth character

# Step with start and stop
print("\\nLimited range with step:")
print("text[1:10:2]:", text[1:10:2])  # Every other, from 1 to 10`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Text: ABCDEFGHIJKLMNOP
Positions: 0123456789ABCDEF

Step examples:
text[::1]: ABCDEFGHIJKLMNOP
text[::2]: ACEGIKMO
text[::3]: ADGJMP
text[::4]: AEIM

Limited range with step:
text[1:10:2]: BDFHJ`
    },
    
    {
      type: 'code',
      title: 'String Reversal with Negative Step',
      language: 'python',
      code: `# String reversal using negative step
original = "PYTHON"
reversed_string = original[::-1]
print("Original:", original)
print("Reversed:", reversed_string)

# Other negative step values
text = "PROGRAMMING"
print("\\nText:", text)
print("Every 2nd char backwards:", text[::-2])  # Every other character, reversed
print("Every 3rd char backwards:", text[::-3])  # Every third character, reversed

# Partial reversal
print("\\nPartial reversal:")
print("Last 5 chars reversed:", text[-5:][::-1])  # Last 5 characters, then reverse
print("Middle section reversed:", text[3:8][::-1])  # Characters 3-7, then reverse`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Original: PYTHON
Reversed: NOHTYP

Text: PROGRAMMING
Every 2nd char backwards: GIMARO
Every 3rd char backwards: GMRP

Partial reversal:
Last 5 chars reversed: GNIMM
Middle section reversed: MMARG`
    },
    
    {
      type: 'text',
      title: 'Practical Indexing and Slicing Applications',
      content: `Now let's apply indexing and slicing to solve real-world text processing problems. These examples show how to extract meaningful information from structured text data.`
    },
    
    {
      type: 'code',
      title: 'File Path Processing',
      language: 'python',
      code: `# Extract information from file paths
file_path = "/home/user/documents/report.pdf"
print("Full path:", file_path)

# Find the last slash to separate path and filename
last_slash = file_path.rfind("/")  # Find last occurrence of "/"
directory = file_path[:last_slash]
filename = file_path[last_slash + 1:]

print("Directory:", directory)
print("Filename:", filename)

# Extract file extension
last_dot = filename.rfind(".")
name_only = filename[:last_dot]
extension = filename[last_dot + 1:]

print("Name only:", name_only)
print("Extension:", extension)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Full path: /home/user/documents/report.pdf
Directory: /home/user/documents
Filename: report.pdf
Name only: report
Extension: pdf`
    },
    
    {
      type: 'code',
      title: 'Date Format Processing',
      language: 'python',
      code: `# Process different date formats
date1 = "2024-03-15"  # ISO format
date2 = "03/15/2024"  # US format
date3 = "15-03-2024"  # European format

print("=== ISO Format (YYYY-MM-DD) ===")
print("Full date:", date1)
print("Year:", date1[:4])
print("Month:", date1[5:7])
print("Day:", date1[8:10])

print("\\n=== US Format (MM/DD/YYYY) ===")
print("Full date:", date2)
print("Month:", date2[:2])
print("Day:", date2[3:5])
print("Year:", date2[6:10])

print("\\n=== European Format (DD-MM-YYYY) ===")
print("Full date:", date3)
print("Day:", date3[:2])
print("Month:", date3[3:5])
print("Year:", date3[6:10])`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `=== ISO Format (YYYY-MM-DD) ===
Full date: 2024-03-15
Year: 2024
Month: 03
Day: 15

=== US Format (MM/DD/YYYY) ===
Full date: 03/15/2024
Month: 03
Day: 15
Year: 2024

=== European Format (DD-MM-YYYY) ===
Full date: 15-03-2024
Day: 15
Month: 03
Year: 2024`
    },
    
    {
      type: 'code',
      title: 'Product Code Analysis',
      language: 'python',
      code: `# Analyze structured product code
product_code = "TECH-LAP-001-2024"
print("=== PRODUCT CODE ANALYSIS ===")
print("Product Code:", product_code)
print("Code Length:", len(product_code))

# Show character positions
print("\\nCharacter positions:")
print("Position: 0123456789012345678")
print("Code:     " + product_code)

# Extract components using split() method
parts = product_code.split("-")
category = parts[0]
item_type = parts[1] 
number = parts[2]
year = parts[3]

print("\\n=== Using split() method ===")
print("Category:", category)
print("Type:", item_type)
print("Number:", number)
print("Year:", year)

# Alternative: using slicing with exact positions
print("\\n=== Using slicing method ===")
category_sliced = product_code[:4]      # First 4 characters (0-3)
item_type_sliced = product_code[5:8]    # Characters 5-7
number_sliced = product_code[9:12]      # Characters 9-11
year_sliced = product_code[13:17]       # Characters 13-16

print("Category (slice [:4]):", category_sliced)
print("Type (slice [5:8]):", item_type_sliced)
print("Number (slice [9:12]):", number_sliced)
print("Year (slice [13:17]):", year_sliced)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `=== PRODUCT CODE ANALYSIS ===
Product Code: TECH-LAP-001-2024
Code Length: 17

Character positions:
Position: 0123456789012345678
Code:     TECH-LAP-001-2024

=== Using split() method ===
Category: TECH
Type: LAP
Number: 001
Year: 2024

=== Using slicing method ===
Category (slice [:4]): TECH
Type (slice [5:8]): LAP
Number (slice [9:12]): 001
Year (slice [13:17]): 2024`
    },
    
    {
      type: 'code',
      title: 'Text Pattern Extraction',
      language: 'python',
      code: `# Extract patterns from text data
text_data = "USER12345EMAIL789PASS2024END"
print("Data string:", text_data)

# Extract components using known positions
user_part = text_data[4:9]      # Characters after "USER"
email_part = text_data[14:17]   # Characters after "EMAIL"
pass_part = text_data[22:26]    # Characters after "PASS"

print("User ID:", user_part)
print("Email code:", email_part)
print("Password year:", pass_part)

# Create formatted ID card
card_border = "=" * 20
print(f"\\n{card_border}")
print(f"  ID CARD")
print(f"{card_border}")
print(f"User: {user_part}")
print(f"Code: {email_part}")
print(f"Year: {pass_part}")
print(f"{card_border}")

# Reverse engineering: show the pattern
print("\\nPattern breakdown:")
print(f"'{text_data[:4]}' + '{user_part}' + '{text_data[9:14]}' + '{email_part}' + '{text_data[17:21]}' + '{pass_part}' + '{text_data[26:]}'")
`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Data string: USER12345EMAIL789PASS2024END
User ID: 12345
Email code: 789
Password year: 2024

====================
  ID CARD
====================
User: 12345
Code: 789
Year: 2024
====================

Pattern breakdown:
'USER' + '12345' + 'EMAIL' + '789' + 'PASS' + '2024' + 'END'`
    },
    
    {
      type: 'text',
      title: 'Best Practices for String Indexing and Slicing',
      content: `**🏆 Professional Indexing and Slicing Guidelines:**

**1. Safety and Error Prevention:**
- Check string length before accessing high indices
- Use negative indexing when working from the end
- Handle empty strings gracefully in your code
- Consider using try/except for uncertain string lengths

**2. Readability and Maintainability:**
- Use meaningful variable names for slice results
- Add comments explaining complex slice operations
- Break complex extractions into smaller steps
- Consider using string methods when appropriate

**3. Performance Considerations:**
- Slicing creates new string objects - plan memory usage
- Use string methods like \`find()\` instead of searching with slices
- Cache slice results if used multiple times
- Consider alternatives for very frequent operations

**4. Common Patterns:**
- \`text[:n]\` - First n characters
- \`text[-n:]\` - Last n characters
- \`text[n:-n]\` - Remove n characters from both ends
- \`text[::-1]\` - Reverse entire string
- \`text[::n]\` - Every nth character

**5. Debugging Tips:**
- Print intermediate slice results to verify logic
- Use visual aids to understand index positions
- Test with strings of different lengths
- Verify slice boundaries with sample data

**Remember:** Indexing and slicing are fundamental skills that enable precise text manipulation. Master these concepts and you'll be able to extract exactly the information you need from any string!`
    }
  ]
};