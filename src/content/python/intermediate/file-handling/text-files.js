// Lesson content for Reading and writing text files
export const textFilesContent = {
  id: 'text-files',
  title: 'Reading and writing text files',
  duration: '25 min',
  overview: `Master file I/O operations in Python! Learn to read from and write to text files safely and efficiently, handling different file modes and managing file resources properly.`,
  objectives: [
    'Open and close files using different modes (read, write, append)',
    'Read file content using various methods (read(), readline(), readlines())',
    'Write and append data to text files',
    'Handle file paths and check file existence',
    'Understand file encoding and handle text files properly',
    'Apply best practices for file operations and error handling',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to File Handling',
      content: `File handling is essential for persisting data, reading configuration files, processing logs, and many other real-world programming tasks.

**Common file operations:**
- **Reading**: Loading data from existing files
- **Writing**: Creating new files or overwriting existing ones
- **Appending**: Adding new content to existing files
- **Processing**: Reading, transforming, and writing data

**File modes in Python:**
- **'r'**: Read mode (default) - file must exist
- **'w'**: Write mode - creates new file or overwrites existing
- **'a'**: Append mode - adds to end of existing file
- **'x'**: Exclusive creation - fails if file exists
- **'t'**: Text mode (default)
- **'b'**: Binary mode

**Best practices:**
- Always close files after use
- Use context managers (with statement) for automatic cleanup
- Handle file not found and permission errors
- Specify encoding explicitly for text files`
    },
    {
      type: 'code',
      title: 'Opening and Closing Files',
      language: 'python',
      code: `# Basic file opening and closing
file = open("sample.txt", "w")
file.write("Hello, World!")
file.close()

print("File created successfully")
print("Remember to always close files!")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `File created successfully
Remember to always close files!`
    },
    {
      type: 'code',
      title: 'Writing Text to Files',
      language: 'python',
      code: `# Writing content to a text file
content = "Python file handling\\nMultiple lines\\nOf text content"
file = open("example.txt", "w")
file.write(content)
file.close()

print("Content written to file")
print("File contains multiple lines")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Content written to file
File contains multiple lines`
    },
    {
      type: 'code',
      title: 'Reading Entire File Content',
      language: 'python',
      code: `# Reading the entire file content
file = open("example.txt", "r")
content = file.read()
file.close()

print("File content:")
print(content)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `File content:
Python file handling
Multiple lines
Of text content`
    },
    {
      type: 'code',
      title: 'Reading File Line by Line',
      language: 'python',
      code: `# Reading file one line at a time
file = open("example.txt", "r")
first_line = file.readline()
second_line = file.readline()
file.close()

print("First line:", first_line.strip())
print("Second line:", second_line.strip())`
    },
    {
      type: 'output',
      title: 'Output',
      content: `First line: Python file handling
Second line: Multiple lines`
    },
    {
      type: 'code',
      title: 'Reading All Lines into a List',
      language: 'python',
      code: `# Reading all lines into a list
file = open("example.txt", "r")
lines = file.readlines()
file.close()

print("Number of lines:", len(lines))
print("First line:", lines[0].strip())`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Number of lines: 3
First line: Python file handling`
    },
    {
      type: 'text',
      title: 'Using Context Managers (with statement)',
      content: `The **with statement** is the recommended way to handle files in Python. It automatically closes the file when the block is finished, even if an error occurs.

**Benefits of using with:**
- **Automatic cleanup**: Files are closed automatically
- **Exception safety**: Files close even if errors occur
- **Cleaner code**: No need to remember to call close()
- **Best practice**: Pythonic way to handle resources

**Syntax:**
\`\`\`python
with open(filename, mode) as file:
    # File operations here
    pass
# File is automatically closed here
\`\`\``
    },
    {
      type: 'code',
      title: 'Using with Statement for Writing',
      language: 'python',
      code: `# Writing with context manager (recommended)
data = ["First line", "Second line", "Third line"]
with open("better_example.txt", "w") as file:
    for line in data:
        file.write(line + "\\n")

print("File written using with statement")
print("File automatically closed")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `File written using with statement
File automatically closed`
    },
    {
      type: 'code',
      title: 'Using with Statement for Reading',
      language: 'python',
      code: `# Reading with context manager
with open("better_example.txt", "r") as file:
    content = file.read()
    line_count = len(content.split("\\n")) - 1

print("Content read successfully")
print("Number of lines:", line_count)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Content read successfully
Number of lines: 3`
    },
    {
      type: 'code',
      title: 'Iterating Through File Lines',
      language: 'python',
      code: `# Iterating through file lines efficiently
with open("better_example.txt", "r") as file:
    line_number = 1
    for line in file:
        print("Line " + str(line_number) + ": " + line.strip())
        line_number += 1`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Line 1: First line
Line 2: Second line
Line 3: Third line`
    },
    {
      type: 'code',
      title: 'Appending to Existing Files',
      language: 'python',
      code: `# Appending new content to existing file
with open("better_example.txt", "a") as file:
    file.write("Fourth line\\n")
    file.write("Fifth line\\n")

print("Content appended successfully")
print("Original content preserved")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Content appended successfully
Original content preserved`
    },
    {
      type: 'text',
      title: 'File Error Handling',
      content: `File operations can fail for various reasons: file not found, permission denied, disk full, etc. Proper error handling ensures your programs are robust and user-friendly.

**Common file-related exceptions:**
- **FileNotFoundError**: File doesn't exist (read mode)
- **PermissionError**: No permission to access file
- **IsADirectoryError**: Trying to open directory as file
- **OSError**: General operating system errors

**Best practices:**
- Use try-except blocks for file operations
- Provide meaningful error messages
- Check file existence before operations
- Handle specific exceptions appropriately`
    },
    {
      type: 'code',
      title: 'Handling File Not Found Errors',
      language: 'python',
      code: `# Safe file reading with error handling
try:
    with open("nonexistent.txt", "r") as file:
        content = file.read()
        print("File read successfully")
except FileNotFoundError:
    print("Error: File not found")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Error: File not found`
    },
    {
      type: 'code',
      title: 'Checking File Existence',
      language: 'python',
      code: `# Checking if file exists before operations
import os

filename = "better_example.txt"
if os.path.exists(filename):
    print("File exists - proceeding with operation")
else:
    print("File does not exist")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `File exists - proceeding with operation`
    },
    {
      type: 'text',
      title: 'Practical Applications',
      content: `File handling is fundamental to many real-world applications and appears in virtually every serious Python program.

**Common use cases:**
- **Configuration files**: Reading app settings and preferences
- **Data processing**: Reading CSV, log files, and datasets
- **Report generation**: Creating output files and summaries
- **Backup systems**: Saving and restoring application state
- **Template processing**: Reading templates and generating documents
- **Cache management**: Storing computed results for reuse`
    },
    {
      type: 'code',
      title: 'Practical Example: Simple Log File',
      language: 'python',
      code: `# Creating a simple logging system
import datetime

current_time = str(datetime.datetime.now())
log_entry = current_time + " - Application started\\n"

with open("app.log", "a") as log_file:
    log_file.write(log_entry)

print("Log entry written")
print("Timestamp:", current_time[:19])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Log entry written
Timestamp: 2024-01-15 10:30:45`
    },
    {
      type: 'code',
      title: 'Practical Example: Configuration File',
      language: 'python',
      code: `# Reading a simple configuration file
config_content = "debug=True\\ntimeout=30\\nmax_users=100"
with open("config.txt", "w") as file:
    file.write(config_content)

with open("config.txt", "r") as file:
    config = {}
    for line in file:
        key, value = line.strip().split("=")
        config[key] = value

print("Configuration loaded:")
print("Debug mode:", config["debug"])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Configuration loaded:
Debug mode: True`
    },
    {
      type: 'text',
      title: 'Key Takeaways',
      content: `🎯 **Key Points to Remember:**

**File Opening:**
- Use **open(filename, mode)** to open files
- Common modes: 'r' (read), 'w' (write), 'a' (append)

**Best Practices:**
- Always use **with statements** for automatic file closing
- Handle **FileNotFoundError** and other exceptions
- Use **os.path.exists()** to check file existence
- Specify encoding explicitly: **open(file, 'r', encoding='utf-8')**

**Reading Methods:**
- **.read()**: Read entire file as string
- **.readline()**: Read one line at a time
- **.readlines()**: Read all lines into list
- **for line in file**: Iterate through lines (memory efficient)

**Writing Methods:**
- **.write(string)**: Write string to file
- **mode='w'**: Overwrites existing content
- **mode='a'**: Appends to existing content

File handling is essential for data persistence and program functionality. Master these basics and you'll be ready to work with data files, configuration files, and logs effectively!`
    }
  ]
};