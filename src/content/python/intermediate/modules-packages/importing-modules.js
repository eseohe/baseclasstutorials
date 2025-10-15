// Lesson content for Importing built-in modules (os, sys, math, random)
export const importingModulesContent = {
  id: 'importing-modules',
  title: 'Importing built-in modules (os, sys, math, random)',
  duration: '28 min',
  overview: `Master Python's powerful built-in modules! Learn to import and use essential modules like os, sys, math, and random to extend your programs with file system operations, system information, mathematical functions, and random number generation.`,
  objectives: [
    'Understand what modules are and why they are essential in Python',
    'Learn different ways to import modules and their functions',
    'Use the os module for file system and operating system operations',
    'Work with the sys module to access system-specific parameters',
    'Apply the math module for advanced mathematical operations',
    'Generate random numbers and make random choices using the random module',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Python Modules',
      content: `Modules are Python files containing definitions, functions, and variables that can be used in other Python programs. Python comes with a rich standard library of built-in modules that provide ready-to-use functionality.

**What are modules?**
- Collections of related functions and classes
- Pre-written code for common tasks
- Organized way to extend Python's capabilities
- Reusable components for your programs

**Benefits of using modules:**
- **Code reuse**: Don't reinvent the wheel
- **Organization**: Keep code structured and maintainable
- **Functionality**: Access specialized capabilities
- **Efficiency**: Tested and optimized code

**Common built-in modules:**
- **os**: Operating system interface
- **sys**: System-specific parameters and functions
- **math**: Mathematical functions
- **random**: Generate random numbers
- **datetime**: Date and time handling
- **json**: JSON data processing

**Import statements:**
Python provides several ways to import modules and their contents.`
    },
    {
      type: 'code',
      title: 'Basic Module Import',
      language: 'python',
      code: `# Importing entire modules
import math
import random

# Using functions from imported modules
square_root = math.sqrt(16)
random_number = random.randint(1, 10)

print("Square root of 16:", square_root)
print("Random number:", random_number)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Square root of 16: 4.0
Random number: 7`
    },
    {
      type: 'code',
      title: 'Importing with Aliases',
      language: 'python',
      code: `# Importing modules with shorter names
import math as m
import random as rnd

# Using aliased modules
circle_area = m.pi * m.pow(5, 2)
dice_roll = rnd.randint(1, 6)

print("Circle area (radius 5):", round(circle_area, 2))
print("Dice roll:", dice_roll)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Circle area (radius 5): 78.54
Dice roll: 4`
    },
    {
      type: 'code',
      title: 'Importing Specific Functions',
      language: 'python',
      code: `# Importing specific functions from modules
from math import sqrt, pi
from random import choice, randint

# Using imported functions directly (no module prefix)
hypotenuse = sqrt(3**2 + 4**2)
random_fruit = choice(["apple", "banana", "orange"])

print("Hypotenuse:", hypotenuse)
print("Random fruit:", random_fruit)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Hypotenuse: 5.0
Random fruit: banana`
    },
    {
      type: 'text',
      title: 'The os Module - Operating System Interface',
      content: `The os module provides a way to interact with the operating system, including file system operations, environment variables, and process management.

**Key os module functions:**
- **os.getcwd()**: Get current working directory
- **os.listdir()**: List directory contents
- **os.path.exists()**: Check if path exists
- **os.path.join()**: Join path components
- **os.mkdir()**: Create directory
- **os.environ**: Environment variables
- **os.name**: Operating system name

**Common use cases:**
- File and directory management
- Path manipulation
- Environment variable access
- Cross-platform file operations`
    },
    {
      type: 'code',
      title: 'Working with Directories',
      language: 'python',
      code: `# Using os module for directory operations
import os

current_dir = os.getcwd()
dir_name = os.path.basename(current_dir)

print("Current directory:", dir_name)
print("Directory exists:", os.path.exists(current_dir))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Current directory: datascience-tutorial
Directory exists: True`
    },
    {
      type: 'code',
      title: 'Path Operations with os.path',
      language: 'python',
      code: `# Working with file paths
import os

# Creating cross-platform file paths
file_path = os.path.join("data", "students.txt")
parent_dir = os.path.dirname(file_path)

print("File path:", file_path)
print("Parent directory:", parent_dir)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `File path: data\\students.txt
Parent directory: data`
    },
    {
      type: 'code',
      title: 'Environment Variables',
      language: 'python',
      code: `# Accessing environment variables
import os

# Getting environment information
os_name = os.name
user_name = os.environ.get("USERNAME", "Unknown")

print("Operating system:", os_name)
print("Current user:", user_name)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Operating system: nt
Current user: User`
    },
    {
      type: 'text',
      title: 'The sys Module - System Parameters',
      content: `The sys module provides access to system-specific parameters and functions, including command-line arguments, Python version information, and system configuration.

**Key sys module features:**
- **sys.argv**: Command-line arguments
- **sys.version**: Python version information
- **sys.platform**: Platform identifier
- **sys.path**: Module search path
- **sys.exit()**: Exit the program
- **sys.stdin/stdout/stderr**: Standard input/output streams

**Common use cases:**
- Command-line argument processing
- System information gathering
- Module path manipulation
- Program termination control`
    },
    {
      type: 'code',
      title: 'System Information with sys',
      language: 'python',
      code: `# Getting system information
import sys

python_version = sys.version.split()[0]
platform_info = sys.platform

print("Python version:", python_version)
print("Platform:", platform_info)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Python version: 3.11.5
Platform: win32`
    },
    {
      type: 'code',
      title: 'Command Line Arguments',
      language: 'python',
      code: `# Working with command-line arguments
import sys

# sys.argv contains the script name and arguments
script_name = sys.argv[0] if sys.argv else "interactive"
arg_count = len(sys.argv) - 1

print("Script name:", script_name.split("\\\\")[-1])
print("Number of arguments:", arg_count)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Script name: <stdin>
Number of arguments: -1`
    },
    {
      type: 'text',
      title: 'The math Module - Mathematical Functions',
      content: `The math module provides mathematical functions and constants for advanced calculations beyond basic arithmetic operators.

**Key math module functions:**
- **math.sqrt()**: Square root
- **math.pow()**: Power calculation
- **math.ceil()**, **math.floor()**: Rounding functions
- **math.sin()**, **math.cos()**, **math.tan()**: Trigonometric functions
- **math.log()**: Logarithmic functions
- **math.pi**, **math.e**: Mathematical constants

**Common use cases:**
- Scientific calculations
- Geometric computations
- Statistical analysis
- Engineering applications`
    },
    {
      type: 'code',
      title: 'Mathematical Constants and Basic Functions',
      language: 'python',
      code: `# Using math constants and functions
import math

# Mathematical constants
pi_value = math.pi
e_value = math.e

print("Pi:", round(pi_value, 4))
print("Euler's number:", round(e_value, 4))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Pi: 3.1416
Euler's number: 2.7183`
    },
    {
      type: 'code',
      title: 'Rounding and Power Functions',
      language: 'python',
      code: `# Rounding and power calculations
import math

number = 7.8
ceiling = math.ceil(number)
floor = math.floor(number)
power_result = math.pow(2, 3)

print("Number:", number)
print("Ceiling:", ceiling)
print("Floor:", floor)
print("2 to the power of 3:", power_result)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Number: 7.8
Ceiling: 8
Floor: 7
2 to the power of 3: 8.0`
    },
    {
      type: 'code',
      title: 'Trigonometric Functions',
      language: 'python',
      code: `# Working with trigonometric functions
import math

angle_degrees = 45
angle_radians = math.radians(angle_degrees)
sine_value = math.sin(angle_radians)
cosine_value = math.cos(angle_radians)

print("Angle:", angle_degrees, "degrees")
print("Sine:", round(sine_value, 4))
print("Cosine:", round(cosine_value, 4))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Angle: 45 degrees
Sine: 0.7071
Cosine: 0.7071`
    },
    {
      type: 'text',
      title: 'The random Module - Random Number Generation',
      content: `The random module generates random numbers and makes random choices, essential for simulations, games, testing, and statistical sampling.

**Key random module functions:**
- **random.random()**: Random float between 0 and 1
- **random.randint(a, b)**: Random integer between a and b
- **random.choice(sequence)**: Random element from sequence
- **random.shuffle(list)**: Shuffle list in place
- **random.sample(population, k)**: Random sample without replacement
- **random.seed()**: Set random seed for reproducibility

**Common use cases:**
- Game development (dice, cards, random events)
- Data sampling and statistical analysis
- Testing with random data
- Simulations and modeling`
    },
    {
      type: 'code',
      title: 'Generating Random Numbers',
      language: 'python',
      code: `# Different types of random number generation
import random

random_float = random.random()
random_integer = random.randint(1, 100)
random_range = random.randrange(0, 101, 5)  # 0, 5, 10, ..., 100

print("Random float (0-1):", round(random_float, 4))
print("Random integer (1-100):", random_integer)
print("Random from range:", random_range)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Random float (0-1): 0.7394
Random integer (1-100): 42
Random from range: 85`
    },
    {
      type: 'code',
      title: 'Random Choices and Sampling',
      language: 'python',
      code: `# Making random choices from collections
import random

colors = ["red", "green", "blue", "yellow", "purple"]
random_color = random.choice(colors)
random_sample = random.sample(colors, 3)

print("Available colors:", colors)
print("Random color:", random_color)
print("Random sample (3):", random_sample)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Available colors: ['red', 'green', 'blue', 'yellow', 'purple']
Random color: blue
Random sample (3): ['yellow', 'red', 'green']`
    },
    {
      type: 'code',
      title: 'Shuffling and Random Seeds',
      language: 'python',
      code: `# Shuffling data and using seeds for reproducibility
import random

# Set seed for reproducible results
random.seed(42)
numbers = [1, 2, 3, 4, 5]
numbers_copy = numbers.copy()
random.shuffle(numbers_copy)

print("Original list:", numbers)
print("Shuffled list:", numbers_copy)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Original list: [1, 2, 3, 4, 5]
Shuffled list: [1, 4, 3, 5, 2]`
    },
    {
      type: 'text',
      title: 'Practical Applications',
      content: `Built-in modules enable powerful functionality for real-world programming tasks and form the foundation for more complex applications.

**Real-world use cases:**
- **File processing**: Using os for file management in data pipelines
- **System monitoring**: Using sys for application diagnostics
- **Scientific computing**: Using math for calculations and algorithms
- **Testing**: Using random for generating test data
- **Game development**: Using random for game mechanics
- **Data analysis**: Combining modules for data processing workflows`
    },
    {
      type: 'code',
      title: 'Practical Example: File System Report',
      language: 'python',
      code: `# Creating a simple file system report
import os
import sys

current_dir = os.getcwd()
try:
    files = os.listdir(current_dir)
    file_count = len(files)
    python_files = [f for f in files if f.endswith('.py')]
    
    print("Directory Report:")
    print("Location:", os.path.basename(current_dir))
    print("Total items:", file_count)
    print("Python files:", len(python_files))
    
except PermissionError:
    print("Permission denied for directory listing")
    sys.exit(1)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Directory Report:
Location: datascience-tutorial
Total items: 12
Python files: 0`
    },
    {
      type: 'code',
      title: 'Practical Example: Random Password Generator',
      language: 'python',
      code: `# Simple password generator using random module
import random
import math

# Character sets for password generation
lowercase = "abcdefghijklmnopqrstuvwxyz"
uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
digits = "0123456789"
all_chars = lowercase + uppercase + digits

password_length = 8
password = ''.join(random.choice(all_chars) for _ in range(password_length))

print("Generated password:", password)
print("Password strength: Good")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Generated password: Kx7mQ9Zp
Password strength: Good`
    },
    {
      type: 'code',
      title: 'Practical Example: Circle Area Calculator',
      language: 'python',
      code: `# Mathematical calculation using math module
import math

def calculate_circle_properties(radius):
    area = math.pi * math.pow(radius, 2)
    circumference = 2 * math.pi * radius
    return area, circumference

radius = 5
area, circumference = calculate_circle_properties(radius)

print("Circle with radius", radius)
print("Area:", round(area, 2))
print("Circumference:", round(circumference, 2))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Circle with radius 5
Area: 78.54
Circumference: 31.42`
    },
    {
      type: 'text',
      title: 'Key Takeaways',
      content: `🎯 **Key Points to Remember:**

**Import Styles:**
- **import module**: Use as \`module.function()\`
- **import module as alias**: Use as \`alias.function()\`
- **from module import function**: Use as \`function()\`

**Essential Modules:**
- **os**: File system operations, paths, environment variables
- **sys**: System information, command-line arguments, Python internals
- **math**: Mathematical functions, constants, trigonometry
- **random**: Random numbers, choices, sampling, shuffling

**Key Functions to Remember:**
- **os.getcwd()**, **os.path.join()**, **os.path.exists()**
- **sys.argv**, **sys.version**, **sys.platform**
- **math.sqrt()**, **math.pi**, **math.ceil()**, **math.floor()**
- **random.randint()**, **random.choice()**, **random.shuffle()**

**Best Practices:**
- Import only what you need
- Use meaningful aliases for long module names
- Check module documentation for available functions
- Handle exceptions when working with file systems
- Use random.seed() for reproducible random sequences

Mastering built-in modules dramatically expands your Python capabilities and helps you write more powerful, efficient programs!`
    }
  ]
};