// Lesson content for Using context managers (with open() as)
export const contextManagersContent = {
  id: 'context-managers',
  title: 'Using context managers (with open() as)',
  duration: '22 min',
  overview: `Master Python context managers and the 'with' statement! Learn how context managers ensure proper resource management, understand the context manager protocol, and create your own custom context managers.`,
  objectives: [
    'Understand what context managers are and why they are important',
    'Use the with statement for automatic resource management',
    'Work with file operations using context managers',
    'Handle multiple resources in a single with statement',
    'Understand the context manager protocol (__enter__ and __exit__)',
    'Create simple custom context managers for specific use cases',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Context Managers',
      content: `Context managers are a Python feature that ensures proper acquisition and release of resources. They're most commonly seen with file operations, but they're useful for any situation where you need guaranteed cleanup.

**What context managers provide:**
- **Automatic setup**: Acquire resources when entering the context
- **Guaranteed cleanup**: Release resources when leaving the context
- **Exception safety**: Cleanup happens even if errors occur
- **Cleaner code**: No need to remember manual cleanup

**Common examples:**
- File operations (automatically close files)
- Database connections (automatically close connections)
- Thread locks (automatically release locks)
- Network connections (automatically close sockets)

**The with statement syntax:**
\`\`\`python
with expression as variable:
    # Code that uses the resource
    pass
# Resource is automatically cleaned up here
\`\`\`

**Why use context managers:**
- Prevents resource leaks (memory, file handles, network connections)
- Makes code more reliable and predictable
- Follows the "fail fast" principle
- Pythonic way to handle resources`
    },
    {
      type: 'code',
      title: 'Basic File Context Manager',
      language: 'python',
      code: `# Using context manager for file operations
with open("sample.txt", "w") as file:
    file.write("Hello from context manager!")
    file.write("\\nSecond line of text")

print("File written and automatically closed")
print("No need to call file.close()")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `File written and automatically closed
No need to call file.close()`
    },
    {
      type: 'code',
      title: 'Context Manager vs Manual File Handling',
      language: 'python',
      code: `# Demonstrating the difference in approaches

# Manual approach (not recommended)
file1 = open("manual.txt", "w")
file1.write("Manual file handling")
file1.close()  # Must remember to close

# Context manager approach (recommended)
with open("context.txt", "w") as file2:
    file2.write("Context manager handling")
# Automatically closed here

print("Both files created")
print("Context manager is safer and cleaner")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Both files created
Context manager is safer and cleaner`
    },
    {
      type: 'code',
      title: 'Exception Safety with Context Managers',
      language: 'python',
      code: `# Context managers ensure cleanup even with exceptions
try:
    with open("test_file.txt", "w") as file:
        file.write("Starting to write...")
        raise ValueError("Something went wrong!")
        file.write("This won't be reached")
except ValueError:
    print("Exception occurred, but file was still closed")

print("Context manager handled cleanup automatically")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Exception occurred, but file was still closed
Context manager handled cleanup automatically`
    },
    {
      type: 'text',
      title: 'Working with Multiple Resources',
      content: `Sometimes you need to work with multiple resources simultaneously. Python provides several ways to handle multiple context managers elegantly.

**Multiple with statements:**
\`\`\`python
with open("file1.txt") as f1:
    with open("file2.txt") as f2:
        # Use both files
        pass
\`\`\`

**Multiple resources in one with statement:**
\`\`\`python
with open("file1.txt") as f1, open("file2.txt") as f2:
    # Use both files
    pass
\`\`\``
    },
    {
      type: 'code',
      title: 'Multiple Context Managers',
      language: 'python',
      code: `# Using multiple context managers together
with open("source.txt", "w") as source, open("destination.txt", "w") as dest:
    source.write("Original content\\nLine 2\\nLine 3")
    dest.write("Copied content\\nDest Line 2")

print("Both files created simultaneously")
print("Both files automatically closed")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Both files created simultaneously
Both files automatically closed`
    },
    {
      type: 'code',
      title: 'Copying File Content with Context Managers',
      language: 'python',
      code: `# Practical example: copying file content
with open("source.txt", "r") as source, open("copy.txt", "w") as copy:
    content = source.read()
    copy.write(content)
    lines_copied = len(content.split("\\n"))

print("File copied successfully")
print("Lines copied:", lines_copied)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `File copied successfully
Lines copied: 3`
    },
    {
      type: 'text',
      title: 'Understanding the Context Manager Protocol',
      content: `Context managers work through two special methods that define the context manager protocol:

**__enter__ method:**
- Called when entering the with block
- Returns the resource or object to be used
- Sets up the resource for use

**__exit__ method:**
- Called when leaving the with block (even if exception occurs)
- Receives exception information if an error occurred
- Performs cleanup operations
- Can suppress exceptions by returning True

**The protocol:**
\`\`\`python
class MyContextManager:
    def __enter__(self):
        # Setup code
        return self  # or some resource
    
    def __exit__(self, exc_type, exc_value, traceback):
        # Cleanup code
        return False  # Don't suppress exceptions
\`\`\``
    },
    {
      type: 'code',
      title: 'Simple Custom Context Manager',
      language: 'python',
      code: `# Creating a simple custom context manager
class TimerContext:
    def __enter__(self):
        print("Timer started")
        return self
    
    def __exit__(self, exc_type, exc_value, traceback):
        print("Timer finished")
        return False

with TimerContext():
    print("Doing some work...")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Timer started
Doing some work...
Timer finished`
    },
    {
      type: 'code',
      title: 'Custom Context Manager with Resource Management',
      language: 'python',
      code: `# Context manager that manages a simple resource
class DatabaseConnection:
    def __init__(self, db_name):
        self.db_name = db_name
        self.connected = False
    
    def __enter__(self):
        print("Connecting to database:", self.db_name)
        self.connected = True
        return self
    
    def __exit__(self, exc_type, exc_value, traceback):
        print("Closing database connection")
        self.connected = False

with DatabaseConnection("myapp.db") as db:
    print("Database connected:", db.connected)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Connecting to database: myapp.db
Database connected: True
Closing database connection`
    },
    {
      type: 'text',
      title: 'Built-in Context Managers',
      content: `Python provides several built-in context managers beyond file operations. Understanding these can help you write more robust code.

**Common built-in context managers:**
- **open()**: File operations
- **threading.Lock**: Thread synchronization
- **decimal.localcontext()**: Decimal precision control
- **warnings.catch_warnings()**: Warning control
- **unittest.mock.patch()**: Testing mocks

**Third-party context managers:**
- Database connection pools
- HTTP request sessions
- Temporary directories and files
- Resource locks and semaphores`
    },
    {
      type: 'code',
      title: 'Using contextlib for Simple Context Managers',
      language: 'python',
      code: `# Using contextlib.contextmanager decorator
from contextlib import contextmanager

@contextmanager
def simple_context():
    print("Entering context")
    try:
        yield "Hello from context!"
    finally:
        print("Exiting context")

with simple_context() as value:
    print("Inside context:", value)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Entering context
Inside context: Hello from context!
Exiting context`
    },
    {
      type: 'code',
      title: 'Practical Context Manager for Temporary Changes',
      language: 'python',
      code: `# Context manager for temporary directory changes
import os
from contextlib import contextmanager

@contextmanager
def change_directory(new_dir):
    old_dir = os.getcwd()
    try:
        os.chdir(new_dir)
        yield new_dir
    finally:
        os.chdir(old_dir)

current_dir = os.getcwd()
print("Current directory:", current_dir.split("\\\\")[-1])
print("Context manager ensures directory restoration")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Current directory: datascience-tutorial
Context manager ensures directory restoration`
    },
    {
      type: 'text',
      title: 'Error Handling in Context Managers',
      content: `Context managers can handle exceptions gracefully and provide debugging information when things go wrong.

**Exception handling in __exit__:**
- **exc_type**: Type of exception (None if no exception)
- **exc_value**: Exception instance (None if no exception)  
- **traceback**: Traceback object (None if no exception)
- **Return True**: Suppress the exception
- **Return False/None**: Let the exception propagate

**Best practices:**
- Always perform cleanup in __exit__
- Log exceptions for debugging
- Only suppress exceptions if you can handle them properly
- Use try-finally in __exit__ for nested cleanup`
    },
    {
      type: 'code',
      title: 'Context Manager with Exception Handling',
      language: 'python',
      code: `# Context manager that handles exceptions
class SafeFileWriter:
    def __init__(self, filename):
        self.filename = filename
        self.file = None
    
    def __enter__(self):
        self.file = open(self.filename, "w")
        return self.file
    
    def __exit__(self, exc_type, exc_value, traceback):
        if self.file:
            self.file.close()
        if exc_type:
            print("Exception occurred:", exc_type.__name__)
        return False  # Don't suppress exceptions

try:
    with SafeFileWriter("safe_test.txt") as f:
        f.write("This will work")
        raise ValueError("Simulated error")
except ValueError:
    print("Exception handled outside context manager")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Exception occurred: ValueError
Exception handled outside context manager`
    },
    {
      type: 'text',
      title: 'Practical Applications',
      content: `Context managers are essential for robust Python programming and appear in many real-world scenarios.

**Common use cases:**
- **File operations**: Reading/writing files safely
- **Database connections**: Ensuring connections are closed
- **Network requests**: Managing HTTP sessions
- **Resource locking**: Thread-safe operations
- **Temporary changes**: Config modifications, directory changes
- **Testing**: Setting up and tearing down test environments
- **Performance monitoring**: Timing code execution
- **Logging**: Structured log contexts`
    },
    {
      type: 'code',
      title: 'Practical Example: Configuration Backup',
      language: 'python',
      code: `# Context manager for safely modifying configuration
from contextlib import contextmanager

@contextmanager
def backup_config(config_dict):
    backup = config_dict.copy()
    try:
        yield config_dict
    except:
        config_dict.clear()
        config_dict.update(backup)
        raise

config = {"debug": False, "timeout": 30}
print("Original config:", config)

try:
    with backup_config(config) as cfg:
        cfg["debug"] = True
        print("Modified config:", cfg)
except:
    print("Config restored on error")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Original config: {'debug': False, 'timeout': 30}
Modified config: {'debug': True, 'timeout': 30}`
    },
    {
      type: 'code',
      title: 'Practical Example: Performance Timing',
      language: 'python',
      code: `# Context manager for timing code execution
import time
from contextlib import contextmanager

@contextmanager
def timer(operation_name):
    start_time = time.time()
    try:
        yield
    finally:
        end_time = time.time()
        duration = end_time - start_time
        print(operation_name + " took " + str(round(duration, 3)) + " seconds")

with timer("File processing"):
    time.sleep(0.1)  # Simulate some work
    result = "Processing complete"

print("Result:", result)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `File processing took 0.101 seconds
Result: Processing complete`
    },
    {
      type: 'text',
      title: 'Key Takeaways',
      content: `🎯 **Key Points to Remember:**

**Context Manager Benefits:**
- **Automatic cleanup**: Resources released even if exceptions occur
- **Cleaner code**: No need to remember manual cleanup
- **Exception safety**: Guaranteed cleanup in error conditions
- **Pythonic**: The recommended way to handle resources

**Basic Usage:**
\`\`\`python
with open("file.txt") as f:
    # Use file
    pass
# File automatically closed
\`\`\`

**Multiple Resources:**
\`\`\`python
with open("file1.txt") as f1, open("file2.txt") as f2:
    # Use both files
    pass
\`\`\`

**Context Manager Protocol:**
- **__enter__()**: Setup and return resource
- **__exit__(exc_type, exc_value, traceback)**: Cleanup

**Best Practices:**
- Always use **with** for file operations
- Use context managers for any resource that needs cleanup
- Create custom context managers for repeated patterns
- Use **contextlib.contextmanager** for simple cases
- Handle exceptions appropriately in **__exit__**

Context managers are fundamental to writing robust, reliable Python code. They ensure your programs handle resources properly and recover gracefully from errors!`
    }
  ]
};