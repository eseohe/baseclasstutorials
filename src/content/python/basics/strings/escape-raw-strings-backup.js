// Lesson content for Escape sequences and raw strings
export const escapeRawStringsContent = {
  id: 'escape-raw-strings',
  title: 'Escape Sequences and Raw Strings',
  duration: '20 min',
  overview: `Master Python's special character handling! Learn to include quotes, newlines, tabs, and backslashes in your strings using escape sequences. Discover raw strings for handling file paths, regular expressions, and literal text without escaping. Essential skills for professional text processing!`,
  objectives: [
    'Use escape sequences to include special characters like quotes, newlines, and tabs',
    'Understand and apply common escape sequences (\n, \t, \, \', \")',
    'Create multi-line formatted output using escape sequences',
    'Use raw strings (r"") to handle file paths and literal text without escaping',
    'Choose between regular strings and raw strings based on the situation',
    'Apply escape sequences and raw strings to solve real-world text formatting problems'
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Escape Sequences',
      content: `Sometimes you need to include special characters in strings that would otherwise confuse Python's interpreter. **Escape sequences** solve this problem!

**What are Escape Sequences?**
- **Special character combinations** starting with backslash (\)
- **Represent characters** that are hard to type or have special meaning
- **Work inside string literals** in single or double quotes
- **Interpreted by Python** when the string is processed

**Why Escape Sequences Matter:**
- **Include quotes** in strings without breaking syntax
- **Add formatting** like newlines and tabs to text
- **Handle special symbols** like backslashes in file paths
- **Create professional output** with proper formatting
- **Process text data** containing mixed quote types

**The Backslash Rule:** A backslash (\) followed by a character creates special meaning!`
    },
    
    {
      type: 'text',
      title: 'Common Escape Sequences',
      content: `Here are the most important escape sequences you'll use regularly:

**Quote Escapes:**
- **\'** - Single quote (apostrophe)
- **\"** - Double quote

**Formatting Characters:**
- **\n** - Newline (line break)
- **\t** - Tab (horizontal spacing)
- **\r** - Carriage return (rarely used)

**Literal Characters:**
- **\** - Literal backslash
- **\0** - Null character (rarely used)

**Unicode:**
- **\\uXXXX** - Unicode character by code point

These sequences let you include any character in your strings!`
    },
    
    {
      type: 'code',
      title: 'Quote Escape Sequences',
      language: 'python',
      code: `# Including quotes in strings
single_quote_example = 'It\'s a beautiful day!'
print(single_quote_example)

double_quote_example = "She said \"Hello there!\""
print(double_quote_example)

# Both types in one string
mixed_quotes = "I can\'t believe she said \"Amazing!\""
print(mixed_quotes)

# Alternative approaches (without escaping)
alt_single = "It's a beautiful day!"  # Use double quotes around single
alt_double = 'She said "Hello there!"'  # Use single quotes around double
print("Alternative single:", alt_single)
print("Alternative double:", alt_double)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `It's a beautiful day!
She said "Hello there!"
I can't believe she said "Amazing!"
Alternative single: It's a beautiful day!
Alternative double: She said "Hello there!"`
    },
    
    {
      type: 'code',
      title: 'Newline Escape Sequence',
      language: 'python',
      code: `# Adding line breaks with \n
single_line = "First line\nSecond line\nThird line"
print(single_line)

# Building formatted text
address = "John Smith\n123 Main Street\nAnytown, USA 12345"
print("Address:")
print(address)

# Multiple newlines for spacing
spaced_text = "Line 1\n\nLine 2\n\n\nLine 3"
print("\nSpaced text:")
print(spaced_text)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `First line
Second line
Third line
Address:
John Smith
123 Main Street
Anytown, USA 12345

Spaced text:
Line 1

Line 2


Line 3`
    },
    
    {
      type: 'code',
      title: 'Tab Escape Sequence',
      language: 'python',
      code: `# Adding tabs with \\t
tabbed_text = "Name:\tJohn Smith\nAge:\t25\nCity:\tNew York"
print("Tabbed information:")
print(tabbed_text)

# Creating aligned columns
column_data = "Product\tPrice\tStock\nLaptop\t$999\t15\nMouse\t$25\t50"
print("\nColumn data:")
print(column_data)

# Mixed formatting
receipt = "Item: Coffee\t\tQty: 2\nItem: Sandwich\t\tQty: 1"
print("\nReceipt:")
print(receipt)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Tabbed information:
Name:	John Smith
Age:	25
City:	New York

Column data:
Product	Price	Stock
Laptop	$999	15
Mouse	$25	50

Receipt:
Item: Coffee		Qty: 2
Item: Sandwich		Qty: 1`
    },
    
    {
      type: 'code',
      title: 'Backslash Escape Sequence',
      language: 'python',
      code: `# Including literal backslashes
file_path = "C:\\\\Users\\\\John\\\\Documents\\\\file.txt"
print("File path:", file_path)

# Mathematical expressions
math_expression = "Formula: x = y \\\\ z"
print("Math:", math_expression)

# Code examples in strings
code_example = "In Python: print(\\"Hello\\\\n\\")"
print("Code example:", code_example)

# Network paths
network_path = "\\\\\\\\server\\\\share\\\\folder"
print("Network path:", network_path)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `File path: C:\\Users\\John\\Documents\\file.txt
Math: Formula: x = y \\ z
Code example: In Python: print("Hello\\n")
Network path: \\\\server\\share\\folder`
    },
    
    {
      type: 'text',
      title: 'Combining Escape Sequences',
      content: `You can combine multiple escape sequences in a single string to create complex formatting:

**Combination Strategies:**
- **Mix formatting** - Use \\n and \\t together for structured text
- **Nest quotes** - Include both single and double quotes with escaping
- **Build templates** - Create reusable formatted text patterns
- **Professional output** - Format data like reports and receipts

**Best Practices:**
- Plan your formatting before writing the string
- Use consistent indentation with \\t
- Group related information with \\n
- Test output to ensure proper formatting`
    },
    
    {
      type: 'code',
      title: 'Complex Formatting with Multiple Escapes',
      language: 'python',
      code: `# Professional report formatting
report_header = "SALES REPORT\n" + "=" * 20 + "\n\n"
sales_data = "Product\t\tUnits\tRevenue\n" + "-" * 30 + "\n"
sales_line1 = "Laptop\t\t15\t$14,985\n"
sales_line2 = "Mouse\t\t50\t$1,250\n"
sales_footer = "-" * 30 + "\nTotal Revenue: $16,235"

full_report = report_header + sales_data + sales_line1 + sales_line2 + sales_footer
print(full_report)

# Error message with quotes and newlines
error_msg = "Error: File \\"config.txt\\" not found!\n" + \\
            "Please check the path: C:\\\\app\\\\config\\\\config.txt\n" + \\
            "Contact support if the problem persists."
print("\nError message:")
print(error_msg)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `SALES REPORT
====================

Product		Units	Revenue
------------------------------
Laptop		15	$14,985
Mouse		50	$1,250
------------------------------
Total Revenue: $16,235

Error message:
Error: File "config.txt" not found!
Please check the path: C:\\app\\config\\config.txt
Contact support if the problem persists.`
    },
    
    {
      type: 'text',
      title: 'Introduction to Raw Strings',
      content: `**Raw strings** treat backslashes literally, without interpreting escape sequences. They're perfect when you need literal backslashes!

**Raw String Syntax:** \`r"string content"\` or \`r'string content'\`

**What Raw Strings Do:**
- **Disable escape processing** - Backslashes remain literal
- **Preserve exact text** - What you type is what you get
- **Simplify file paths** - No need to double backslashes
- **Handle regex patterns** - Regular expressions use many backslashes

**When to Use Raw Strings:**
- **File paths** - Especially Windows paths with backslashes
- **Regular expressions** - Patterns with literal backslashes
- **LaTeX/markup** - Text containing formatting codes
- **Any literal text** - When escaping becomes cumbersome`
    },
    
    {
      type: 'code',
      title: 'Raw Strings vs Regular Strings',
      language: 'python',
      code: `# Regular string with escaped backslashes
regular_path = "C:\\\\Users\\\\John\\\\Documents\\\\file.txt"
print("Regular string:", regular_path)

# Raw string - no escaping needed
raw_path = r"C:\\Users\\John\\Documents\\file.txt"
print("Raw string:", raw_path)

# Both produce the same result
print("Are they equal?", regular_path == raw_path)

# Another example
regular_pattern = "\\\\d+\\\\.\\\\d+"  # Regex for numbers like 123.45
raw_pattern = r"\\d+\\.\\d+"              # Much cleaner!
print("\\nRegular pattern:", regular_pattern)
print("Raw pattern:", raw_pattern)
print("Equal patterns?", regular_pattern == raw_pattern)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Regular string: C:\\Users\\John\\Documents\\file.txt
Raw string: C:\\Users\\John\\Documents\\file.txt
Are they equal? True

Regular pattern: \\d+\\.\\d+
Raw pattern: \\d+\\.\\d+
Equal patterns? True`
    },
    
    {
      type: 'code',
      title: 'Practical Raw String Applications',
      language: 'python',
      code: `# File paths (especially useful on Windows)
documents = r"C:\\Users\\Alice\\Documents"
photos = r"D:\\Photos\\2024\\Vacation"
backup = r"\\\\server\\backup\\daily"

print("Documents folder:", documents)
print("Photos folder:", photos)
print("Backup location:", backup)

# Network paths
shared_drive = r"\\\\company-server\\shared\\projects"
print("\nShared drive:", shared_drive)

# Regex patterns (we'll learn more about these later)
email_pattern = r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"
phone_pattern = r"\\(\\d{3}\\) \\d{3}-\\d{4}"
print("\nEmail pattern:", email_pattern)
print("Phone pattern:", phone_pattern)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Documents folder: C:\\Users\\Alice\\Documents
Photos folder: D:\\Photos\\2024\\Vacation
Backup location: \\\\server\\backup\\daily

Shared drive: \\\\company-server\\shared\\projects

Email pattern: [a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}
Phone pattern: \\(\\d{3}\\) \\d{3}-\\d{4}`
    },
    
    {
      type: 'text',
      title: 'When NOT to Use Raw Strings',
      content: `Raw strings have limitations - you cannot end a raw string with a single backslash:

**Raw String Limitations:**
- **Cannot end with backslash** - \`r"path\"\` causes syntax error
- **All backslashes are literal** - No escape sequences work at all
- **No newlines with \n** - Must use triple quotes for multi-line

**Solutions:**
- Add extra character after backslash: \`r"path\" + "\"\`
- Use regular strings when you need escape sequences
- Use triple-quoted strings for multi-line raw strings`
    },
    
    {
      type: 'code',
      title: 'Raw String Limitations and Solutions',
      language: 'python',
      code: `# Problem: Raw strings can't end with single backslash
# raw_with_ending_slash = r"C:\\path\\"  # This would cause error!

# Solution 1: Add the backslash separately
path_base = r"C:\\path"
full_path = path_base + "\\\\"
print("Path with ending slash:", full_path)

# Solution 2: Use regular string
normal_path = "C:\\\\path\\\\"
print("Normal string path:", normal_path)

# Raw strings don't process escapes at all
raw_no_newline = r"First line\\nSecond line"  # \\n is literal
print("Raw string (no newline):", raw_no_newline)

# Multi-line raw strings work fine
multi_raw = r"""First line
Second line
Third line"""
print("\nMulti-line raw string:")
print(multi_raw)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Path with ending slash: C:\\path\\
Normal string path: C:\\path\\
Raw string (no newline): First line\\nSecond line

Multi-line raw string:
First line
Second line
Third line`
    },
    
    {
      type: 'text',
      title: 'Practical Applications',
      content: `Let's see how escape sequences and raw strings solve real-world text processing challenges. These examples show when to use each approach for maximum efficiency and readability.`
    },
    
    {
      type: 'code',
      title: 'Configuration File Paths',
      language: 'python',
      code: `# Application configuration with file paths
app_name = "MyApplication"
version = "2.1"

# Using raw strings for Windows paths
config_file = r"C:\Program Files\MyApp\config.ini"
log_directory = r"C:\Users\Admin\AppData\Local\MyApp\logs"
temp_folder = r"C:\temp\myapp_cache"

# Create configuration display
config_info = f"""Application Configuration
{'=' * 30}
Name:\t\t{app_name}
Version:\t{version}

File Locations:
Config:\t\t{config_file}
Logs:\t\t{log_directory}
Temp:\t\t{temp_folder}

Status:\t\tReady
{'=' * 30}"""

print(config_info)

# Alternative: mixed approach for flexibility  
status_message = f"Loading config from:\n\t{config_file}"
print(f"\nStatus: {status_message}")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Application Configuration
==============================
Name:		MyApplication
Version:	2.1

File Locations:
Config:		C:\Program Files\MyApp\config.ini
Logs:		C:\Users\Admin\AppData\Local\MyApp\logs
Temp:		C:\temp\myapp_cache

Status:		Ready
==============================

Status: Loading config from:
	C:\Program Files\MyApp\config.ini`
    },
    
    {
      type: 'code',
      title: 'Data Import Templates',
      language: 'python',
      code: `# CSV data with quotes and special characters
csv_header = "Name,Age,Quote,File_Path"

# Using escape sequences for data with quotes
person1 = 'Alice,25,\\"Python is amazing!\\",C:\\\\data\\\\alice.txt'
person2 = 'Bob,30,\\"I can\\'t wait to learn more\\",C:\\\\data\\\\bob.txt' 
person3 = 'Carol,28,\\"Data \\\\ analytics\\",C:\\\\data\\\\carol.txt'

# Build complete CSV
csv_content = csv_header + "\\n" + person1 + "\\n" + person2 + "\\n" + person3
print("CSV Data:")
print(csv_content)

# Alternative using raw strings where appropriate
raw_path = r"C:\\data\\files"
formatted_entry = f'David,35,\\"Raw strings rock!\\",{raw_path}\\\\david.txt'
print("\nAdditional entry:")
print(formatted_entry)

# SQL-like queries with escaped quotes
query_template = 'SELECT name FROM users WHERE city = \\"New York\\" AND age > 25'
print("\nQuery template:")
print(query_template)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `CSV Data:
Name,Age,Quote,File_Path
Alice,25,"Python is amazing!",C:\\data\\alice.txt
Bob,30,"I can't wait to learn more",C:\\data\\bob.txt
Carol,28,"Data \\ analytics",C:\\data\\carol.txt

Additional entry:
David,35,"Raw strings rock!",C:\\data\\files\\david.txt

Query template:
SELECT name FROM users WHERE city = "New York" AND age > 25`
    },
    
    {
      type: 'code',
      title: 'Documentation and Help Text',
      language: 'python',
      code: `# Help documentation with formatting
help_text = """COMMAND LINE HELP
================

Usage: myapp [options] <file>

Options:
  -h, --help\t\tShow this help message
  -v, --version\t\tShow version information  
  -o, --output DIR\tOutput directory (default: current)
  -f, --format TYPE\tOutput format (json, csv, xml)

Examples:
  myapp data.txt
  myapp -f json -o C:\\\\output data.txt
  myapp --help

File Paths:
  Use raw strings in Python: r\"C:\\path\\to\\file\"
  Or escape backslashes: \"C:\\\\path\\\\to\\\\file\"

Error Codes:
  0\t\tSuccess
  1\t\tFile not found
  2\t\tInvalid format
  3\t\tPermission denied

For more help, visit: https://example.com/docs
Contact: support@example.com
"""

print(help_text)

# Quick reference with mixed formatting
quick_ref = "Quick: Use \\t for tabs, \\n for newlines, and r\\"\" for raw strings"
print(quick_ref)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `COMMAND LINE HELP
================

Usage: myapp [options] <file>

Options:
  -h, --help		Show this help message
  -v, --version		Show version information  
  -o, --output DIR	Output directory (default: current)
  -f, --format TYPE	Output format (json, csv, xml)

Examples:
  myapp data.txt
  myapp -f json -o C:\\output data.txt
  myapp --help

File Paths:
  Use raw strings in Python: r"C:\\path\\to\\file"
  Or escape backslashes: "C:\\\\path\\\\to\\\\file"

Error Codes:
  0		Success
  1		File not found
  2		Invalid format
  3		Permission denied

For more help, visit: https://example.com/docs
Contact: support@example.com

Quick: Use \t for tabs, \n for newlines, and r"" for raw strings`
    },
    
    {
      type: 'text',
      title: 'Best Practices for Escape Sequences and Raw Strings',
      content: `**🏆 Professional String Handling Guidelines:**

**1. Choose the Right Approach:**
- **Use escape sequences** when you need formatting (\n, \t)
- **Use raw strings** for file paths and literal backslashes
- **Mix both approaches** when you need both formatting and literal text
- **Use triple quotes** for multi-line strings with mixed content

**2. Readability and Maintenance:**
- **Raw strings for paths** - Much cleaner than double-escaping
- **Consistent formatting** - Use the same approach throughout your code
- **Comment complex escapes** - Explain unusual escape combinations
- **Test output format** - Verify your strings display correctly

**3. Common Patterns:**
- **File paths:** \`r"C:\Users\Name\file.txt"\`
- **Multi-line text:** Use triple quotes with \n and \t
- **Mixed quotes:** Use appropriate quote style or escape sequences
- **Regex patterns:** Raw strings to avoid double-escaping

**4. Error Prevention:**
- **Test edge cases** - Empty strings, unusual characters
- **Validate file paths** - Ensure paths work on target systems
- **Escape user input** - When building strings from user data
- **Use f-strings carefully** - Raw strings don't work in f-string expressions

**5. Platform Considerations:**
- **Windows paths** - Use raw strings or forward slashes
- **Unix paths** - Forward slashes work everywhere
- **Network paths** - Raw strings for UNC paths
- **URL handling** - Be careful with escape sequences in URLs

**Remember:** Escape sequences and raw strings are essential tools for professional text handling. Choose the right tool for each situation to write clean, maintainable code!`
    }
  ]
};