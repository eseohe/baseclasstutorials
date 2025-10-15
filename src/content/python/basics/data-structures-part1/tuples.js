// Lesson content for Tuples: immutability and unpacking
export const tuplesContent = {
  id: 'tuples',
  title: 'Tuples: immutability and unpacking',
  duration: '20 min',
  overview: `Master Python tuples - the immutable cousin of lists! Learn when and why to use tuples, understand their immutable nature, and discover the powerful technique of tuple unpacking for elegant data handling.`,
  objectives: [
    'Create tuples using different syntaxes and understand when to use them',
    'Understand tuple immutability and its benefits for data integrity',
    'Access tuple elements using indexing and slicing',
    'Use tuple unpacking to assign multiple variables at once',
    'Work with nested tuples and tuple methods',
    'Apply tuples in real-world scenarios like coordinates and database records',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Tuples',
      content: `Tuples are ordered collections of items, similar to lists, but with one crucial difference: **they are immutable**. Once created, you cannot change, add, or remove items from a tuple.

**Think of tuples as:**
- Coordinates (x, y, z) - fixed points in space
- RGB color values (255, 128, 0) - fixed color definitions
- Database records - fixed data that shouldn't change
- Function return values - returning multiple related values

**Key characteristics:**
- **Ordered**: Items have a defined sequence
- **Immutable**: Cannot be changed after creation
- **Allow duplicates**: Same values can appear multiple times
- **Indexed**: Access items by position (like lists)
- **Hashable**: Can be used as dictionary keys (unlike lists)`
    },
    {
      type: 'code',
      title: 'Creating Tuples - Method 1: Using Parentheses',
      language: 'python',
      code: `# Method 1: Using parentheses (most common)
coordinates = (10, 20)
rgb_color = (255, 128, 0)

print("Coordinates:", coordinates)
print("RGB Color:", rgb_color)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Coordinates: (10, 20)
RGB Color: (255, 128, 0)`
    },
    {
      type: 'code',
      title: 'Creating Tuples - Method 2: Tuple Packing',
      language: 'python',
      code: `# Method 2: Without parentheses (tuple packing)
point = 5, 10
dimensions = 1920, 1080, 32

print("Point:", point)
print("Dimensions:", dimensions)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Point: (5, 10)
Dimensions: (1920, 1080, 32)`
    },
    {
      type: 'code',
      title: 'Creating Tuples - Method 3: Using tuple() Constructor',
      language: 'python',
      code: `# Method 3: Using tuple() constructor
vowels = tuple(['a', 'e', 'i', 'o', 'u'])
range_tuple = tuple(range(1, 6))

print("Vowels:", vowels)
print("Range tuple:", range_tuple)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Vowels: ('a', 'e', 'i', 'o', 'u')
Range tuple: (1, 2, 3, 4, 5)`
    },
    {
      type: 'code',
      title: 'Special Cases - Empty and Single-Item Tuples',
      language: 'python',
      code: `# Special cases
empty_tuple = ()
single_item = (42,)  # Note the comma!

print("Empty:", empty_tuple, type(empty_tuple))
print("Single item:", single_item, type(single_item))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Empty: () <class 'tuple'>
Single item: (42,) <class 'tuple'>`
    },
    {
      type: 'text',
      title: 'Understanding Immutability',
      content: `Immutability is tuples' defining characteristic. Once created, you cannot:
- Change existing elements
- Add new elements  
- Remove elements
- Use methods that modify the tuple

This immutability provides several benefits:
- **Data integrity**: Prevents accidental changes
- **Hashability**: Can be used as dictionary keys
- **Thread safety**: Safe to use in concurrent programming
- **Performance**: Slightly faster than lists for read operations`
    },
    {
      type: 'code',
      title: 'Creating and Accessing Tuples',
      language: 'python',
      code: `# Create a tuple
colors = ("red", "green", "blue")
print("Original tuple:", colors)

# This works - accessing elements
print("First color:", colors[0])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Original tuple: ('red', 'green', 'blue')
First color: red`
    },
    {
      type: 'code',
      title: 'Trying to Modify Tuples (This Will Fail!)',
      language: 'python',
      code: `# These operations will cause errors:
try:
    colors[0] = "yellow"  # Try to change an element
except TypeError as e:
    print("Error changing element:", e)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Error changing element: 'tuple' object does not support item assignment`
    },
    {
      type: 'code',
      title: 'Comparing with Lists (Lists ARE Mutable)',
      language: 'python',
      code: `# Comparing with lists
color_list = ["red", "green", "blue"]
color_list[0] = "yellow"  # This works with lists
print("Modified list:", color_list)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Modified list: ['yellow', 'green', 'blue']`
    },
    {
      type: 'code',
      title: 'Creating New Tuples (The Right Way)',
      language: 'python',
      code: `# However, you can create a new tuple
new_colors = colors + ("yellow",)
print("New tuple (concatenation):", new_colors)
print("Original tuple unchanged:", colors)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `New tuple (concatenation): ('red', 'green', 'blue', 'yellow')
Original tuple unchanged: ('red', 'green', 'blue')`
    },
    {
      type: 'code',
      title: 'Basic Indexing',
      language: 'python',
      code: `# Create a tuple with mixed data types
data = ("Python", 1991, True, 3.9, "Guido van Rossum")
print("Data tuple:", data)

# Indexing (same as lists)
print("Language:", data[0])
print("Year:", data[1])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Data tuple: ('Python', 1991, True, 3.9, 'Guido van Rossum')
Language: Python
Year: 1991`
    },
    {
      type: 'code',
      title: 'Negative Indexing',
      language: 'python',
      code: `# Negative indexing
print("Latest version:", data[3])
print("Creator (negative index):", data[-1])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Latest version: 3.9
Creator (negative index): Guido van Rossum`
    },
    {
      type: 'code',
      title: 'Slicing Tuples',
      language: 'python',
      code: `# Slicing (same as lists)
print("First three items:", data[:3])
print("Last two items:", data[-2:])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `First three items: ('Python', 1991, True)
Last two items: (3.9, 'Guido van Rossum')`
    },
    {
      type: 'code',
      title: 'Tuple Length and Membership',
      language: 'python',
      code: `# Tuple length and membership
print("Length of data tuple:", len(data))
print("Is 'Python' in data?", "Python" in data)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Length of data tuple: 5
Is 'Python' in data? True`
    },
    {
      type: 'text',
      title: 'Tuple Unpacking - The Real Power',
      content: `Tuple unpacking is one of Python's most elegant features. It allows you to assign values from a tuple to multiple variables in a single line. This makes code more readable and efficient.

**Basic unpacking**: Assign each tuple element to a variable
**Extended unpacking**: Use * to collect multiple elements
**Swapping**: Exchange variable values without temporary variables
**Function returns**: Handle multiple return values elegantly`
    },
    {
      type: 'code',
      title: 'Basic Tuple Unpacking',
      language: 'python',
      code: `# Basic unpacking
point = (3, 4)
x, y = point
print("Point coordinates: x =", x, "y =", y)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Point coordinates: x = 3 y = 4`
    },
    {
      type: 'code',
      title: 'Unpacking with More Elements',
      language: 'python',
      code: `# Unpacking with more elements
rgb = (255, 128, 0)
red, green, blue = rgb
print("RGB values: R =", red, "G =", green, "B =", blue)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `RGB values: R = 255 G = 128 B = 0`
    },
    {
      type: 'code',
      title: 'Unpacking Student Information',
      language: 'python',
      code: `# Unpacking student information
student = ("Alice", 20, "Computer Science", 3.85)
name, age, major, gpa = student
print("Student:", name, ",", age, "years old")
print("Major:", major, ", GPA:", gpa)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Student: Alice , 20 years old
Major: Computer Science , GPA: 3.85`
    },
    {
      type: 'code',
      title: 'Variable Swapping (Python Magic!)',
      language: 'python',
      code: `# Swapping variables (Python magic!)
a = 10
b = 20
print("Before swap: a =", a, "b =", b)

a, b = b, a  # This is tuple packing and unpacking!
print("After swap: a =", a, "b =", b)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Before swap: a = 10 b = 20
After swap: a = 20 b = 10`
    },
    {
      type: 'code',
      title: 'Extended Unpacking - First and Last',
      language: 'python',
      code: `# Using * to collect multiple elements
scores = (95, 87, 92, 89, 94, 91)

# Get first, last, and everything in between
first, *middle, last = scores
print("First score:", first)
print("Last score:", last)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `First score: 95
Last score: 91`
    },
    {
      type: 'code',
      title: 'Extended Unpacking - Getting the Rest',
      language: 'python',
      code: `# Get first two and the rest
first, second, *rest = scores
print("First two:", first, "and", second)
print("Remaining:", rest)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `First two: 95 and 87
Remaining: [92, 89, 94, 91]`
    },
    {
      type: 'code',
      title: 'Nested Tuple Unpacking',
      language: 'python',
      code: `# Working with nested data
data = ("Alice", 20, (95, 87, 92), "Computer Science")
name, age, grades, major = data
print("Student:", name)

# Further unpack the grades tuple
math, science, english = grades
print("Grades - Math:", math, "Science:", science, "English:", english)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Student: Alice
Grades - Math: 95 Science: 87 English: 92`
    },
    {
      type: 'code',
      title: 'Tuple Methods - count() and index()',
      language: 'python',
      code: `# Tuples have only two methods: count() and index()
numbers = (1, 2, 3, 2, 4, 2, 5)
print("Numbers tuple:", numbers)

# count() - returns number of occurrences
count_of_2 = numbers.count(2)
print("Count of 2:", count_of_2)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Numbers tuple: (1, 2, 3, 2, 4, 2, 5)
Count of 2: 3`
    },
    {
      type: 'code',
      title: 'Using index() Method',
      language: 'python',
      code: `# index() - returns index of first occurrence
index_of_3 = numbers.index(3)
index_of_first_2 = numbers.index(2)
print("Index of 3:", index_of_3)
print("Index of first 2:", index_of_first_2)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Index of 3: 2
Index of first 2: 1`
    },
    {
      type: 'code',
      title: 'Tuple Operations - Concatenation',
      language: 'python',
      code: `# Tuple operations
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)

# Concatenation
combined = tuple1 + tuple2
print("Combined:", combined)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Combined: (1, 2, 3, 4, 5, 6)`
    },
    {
      type: 'code',
      title: 'Tuple Operations - Repetition',
      language: 'python',
      code: `# Repetition
repeated = tuple1 * 3
print("Repeated:", repeated)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Repeated: (1, 2, 3, 1, 2, 3, 1, 2, 3)`
    },
    {
      type: 'code',
      title: 'Converting Between Tuples and Lists',
      language: 'python',
      code: `# Converting between tuples and lists
my_list = [1, 2, 3, 4, 5]
my_tuple = tuple(my_list)
back_to_list = list(my_tuple)

print("List to tuple:", my_tuple)
print("Tuple to list:", back_to_list)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `List to tuple: (1, 2, 3, 4, 5)
Tuple to list: [1, 2, 3, 4, 5]`
    },
    {
      type: 'text',
      title: 'Working with Nested Tuples',
      content: `Nested tuples are tuples that contain other tuples as elements. They're useful for representing structured data like matrices, coordinates in 3D space, or hierarchical information.

Even though tuples are immutable, if they contain mutable objects (like lists), those objects can still be modified.`
    },
    {
      type: 'code',
      title: 'Nested Tuples - 2D Coordinates',
      language: 'python',
      code: `# 2D coordinates (multiple points)
points = ((0, 0), (1, 2), (3, 4), (5, 6))
print("Points:", points)

# Access nested elements
first_point = points[0]
print("First point:", first_point)
print("X coordinate of first point:", points[0][0])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Points: ((0, 0), (1, 2), (3, 4), (5, 6))
First point: (0, 0)
X coordinate of first point: 0`
    },
    {
      type: 'code',
      title: 'Employee Records with Nested Tuples',
      language: 'python',
      code: `# Employee records (nested structure)
alice = ("Alice", "Engineering", (50000, 55000, 60000))
bob = ("Bob", "Marketing", (45000, 48000, 52000))

# Access Alice's information
name, department, salaries = alice
current_salary = salaries[-1]  # Last salary is current
print("Employee:", name, "Department:", department)
print("Current salary:", current_salary)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Employee: Alice Department: Engineering
Current salary: 60000`
    },
    {
      type: 'code',
      title: 'Matrix Representation',
      language: 'python',
      code: `# Matrix representation using nested tuples
matrix = (
    (1, 2, 3),
    (4, 5, 6),
    (7, 8, 9)
)

print("Matrix first row:", matrix[0])
print("Matrix second row:", matrix[1])
print("Element at row 1, column 2:", matrix[1][2])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Matrix first row: (1, 2, 3)
Matrix second row: (4, 5, 6)
Element at row 1, column 2: 6`
    },
    {
      type: 'code',
      title: '3D Coordinates',
      language: 'python',
      code: `# 3D coordinates
point_3d = (10, 20, 30)
x, y, z = point_3d
print("3D Point: (", x, ",", y, ",", z, ")", sep="")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `3D Point: (10,20,30)`
    },

    {
      type: 'code',
      title: 'Circle Calculations with Tuples',
      language: 'python',
      code: `# Circle calculations using tuples
radius = 5
pi = 3.14159
area = pi * radius ** 2
circumference = 2 * pi * radius

# Store results in a tuple
circle_data = (radius, area, circumference)
print("Circle data:", circle_data)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Circle data: (5, 78.53975, 31.4159)`
    },
    {
      type: 'code',
      title: 'Unpacking Circle Data',
      language: 'python',
      code: `# Unpack the tuple
r, a, c = circle_data
print("Circle radius:", r)
print("Circle area:", a)
print("Circle circumference:", c)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Circle radius: 5
Circle area: 78.53975
Circle circumference: 31.4159`
    },
    {
      type: 'code',
      title: 'Name Processing with Tuples',
      language: 'python',
      code: `# Create a tuple with name parts
first = "John"
middle = "Michael"
last = "Smith"

name_tuple = (first, last, middle)
print("Name tuple:", name_tuple)

# Unpack name parts
first_name, last_name, middle_name = name_tuple
print("First:", first_name, "Last:", last_name, "Middle:", middle_name)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Name tuple: ('John', 'Smith', 'Michael')
First: John Last: Smith Middle: Michael`
    },

    {
      type: 'code',
      title: 'Real-World Applications',
      language: 'python',
      code: `# RGB Color Management with tuples
red = (255, 0, 0)
green = (0, 255, 0)
purple = (128, 0, 128)

print("Red:", red)
print("Green:", green)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Red: (255, 0, 0)
Green: (0, 255, 0)`
    },
    {
      type: 'code',
      title: 'Database Records with Tuples',
      language: 'python',
      code: `# Student records as tuples (immutable data)
alice_record = (101, "Alice Johnson", "Computer Science", 3.8)

# Unpack Alice's record
student_id, name, major, gpa = alice_record
print("ID:", student_id)
print("Name:", name, "Major:", major, "GPA:", gpa)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `ID: 101
Name: Alice Johnson Major: Computer Science GPA: 3.8`
    },
    {
      type: 'text',
      title: 'When to Use Tuples vs Lists',
      content: `**Use tuples when:**
- Data should not change (coordinates, RGB values, database records)
- You need to use the data as a dictionary key
- Returning multiple values from functions
- Representing fixed collections (days of week, months)
- Performance is critical for read operations

**Use lists when:**
- Data needs to be modified (adding, removing, changing items)
- The size of the collection varies
- You need list-specific methods (append, remove, sort)
- Working with homogeneous data that changes

**Memory efficiency:** Tuples use less memory than lists for the same data.
**Performance:** Tuples are slightly faster for access operations.
**Safety:** Tuples prevent accidental data modification.`
    }
  ]
};