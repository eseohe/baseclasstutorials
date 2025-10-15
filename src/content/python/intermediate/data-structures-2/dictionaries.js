// Lesson content for Dictionaries: keys, values, methods
export const dictionariesContent = {
  id: 'dictionaries',
  title: 'Dictionaries: keys, values, methods',
  duration: '25 min',
  overview: `Master Python dictionaries - the versatile key-value data structure! Learn to create, access, and manipulate dictionaries using their powerful methods for efficient data storage and retrieval.`,
  objectives: [
    'Create dictionaries using different syntaxes and understand their structure',
    'Access and modify dictionary values using keys',
    'Use essential dictionary methods for data manipulation',
    'Iterate through dictionaries using keys, values, and items',
    'Work with nested dictionaries and handle missing keys safely',
    'Apply dictionaries to solve real-world data storage problems',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Dictionaries',
      content: `Dictionaries are Python's implementation of key-value pairs, similar to real-world dictionaries where you look up definitions (values) using words (keys).

**Think of dictionaries as:**
- Phone books: name → phone number
- Student records: student_id → student_info
- Settings configurations: setting_name → setting_value
- Inventory systems: product_code → product_details

**Key characteristics:**
- **Unordered**: Items don't have a fixed position (Python 3.7+ maintains insertion order)
- **Mutable**: Can be changed after creation
- **Key-Value pairs**: Each item consists of a key and its associated value
- **Unique keys**: Each key can appear only once
- **Fast lookup**: O(1) average time complexity for key access`
    },
    {
      type: 'code',
      title: 'Creating Dictionaries - Method 1: Using Curly Braces',
      language: 'python',
      code: `# Method 1: Using curly braces (most common)
student = {"name": "Alice", "age": 20}
grades = {"math": 95, "science": 87}

print("Student:", student)
print("Grades:", grades)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Student: {'name': 'Alice', 'age': 20}
Grades: {'math': 95, 'science': 87}`
    },
    {
      type: 'code',
      title: 'Creating Dictionaries - Method 2: Using dict() Constructor',
      language: 'python',
      code: `# Method 2: Using dict() constructor
empty_dict = dict()
contact = dict(name="Bob", phone="123-456-7890")

print("Empty dict:", empty_dict)
print("Contact:", contact)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Empty dict: {}
Contact: {'name': 'Bob', 'phone': '123-456-7890'}`
    },
    {
      type: 'code',
      title: 'Accessing Dictionary Values',
      language: 'python',
      code: `# Accessing values using keys
student = {"name": "Alice", "age": 20, "major": "Computer Science"}
name = student["name"]
age = student["age"]

print("Student name:", name)
print("Student age:", age)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Student name: Alice
Student age: 20`
    },
    {
      type: 'code',
      title: 'Safe Access with get() Method',
      language: 'python',
      code: `# Using get() method for safe access
student = {"name": "Alice", "age": 20}
gpa = student.get("gpa", "Not available")
major = student.get("major")

print("GPA:", gpa)
print("Major:", major)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `GPA: Not available
Major: None`
    },
    {
      type: 'code',
      title: 'Adding and Modifying Values',
      language: 'python',
      code: `# Adding and modifying dictionary items
student = {"name": "Alice", "age": 20}
student["major"] = "Computer Science"  # Adding new key-value
student["age"] = 21  # Modifying existing value

print("Updated student:", student)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Updated student: {'name': 'Alice', 'age': 21, 'major': 'Computer Science'}`
    },
    {
      type: 'text',
      title: 'Essential Dictionary Methods',
      content: `Dictionaries come with powerful built-in methods that make data manipulation efficient and convenient.

**Key methods to remember:**
- **.keys()** - Returns all keys
- **.values()** - Returns all values  
- **.items()** - Returns key-value pairs
- **.get(key, default)** - Safe value access
- **.update(other)** - Merge dictionaries
- **.pop(key)** - Remove and return value
- **.clear()** - Remove all items
- **.copy()** - Create a shallow copy`
    },
    {
      type: 'code',
      title: 'Dictionary Keys, Values, and Items',
      language: 'python',
      code: `# Working with keys, values, and items
grades = {"math": 95, "science": 87, "english": 92}
all_keys = list(grades.keys())
all_values = list(grades.values())

print("Subjects:", all_keys)
print("Scores:", all_values)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Subjects: ['math', 'science', 'english']
Scores: [95, 87, 92]`
    },
    {
      type: 'code',
      title: 'Iterating Through Items',
      language: 'python',
      code: `# Iterating through key-value pairs
grades = {"math": 95, "science": 87, "english": 92}
for subject, score in grades.items():
    print(subject + ": " + str(score))
print("Total subjects:", len(grades))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `math: 95
science: 87
english: 92
Total subjects: 3`
    },
    {
      type: 'code',
      title: 'Dictionary Update and Merge',
      language: 'python',
      code: `# Updating dictionaries with new data
student_info = {"name": "Alice", "age": 20}
academic_info = {"major": "CS", "gpa": 3.8}
student_info.update(academic_info)

print("Complete info:", student_info)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Complete info: {'name': 'Alice', 'age': 20, 'major': 'CS', 'gpa': 3.8}`
    },
    {
      type: 'code',
      title: 'Removing Items with pop()',
      language: 'python',
      code: `# Removing items safely with pop()
inventory = {"apples": 50, "bananas": 30, "oranges": 25}
removed_item = inventory.pop("bananas")
default_value = inventory.pop("grapes", 0)

print("Removed bananas:", removed_item)
print("Current inventory:", inventory)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Removed bananas: 30
Current inventory: {'apples': 50, 'oranges': 25}`
    },
    {
      type: 'code',
      title: 'Checking Key Existence',
      language: 'python',
      code: `# Checking if keys exist in dictionary
student = {"name": "Alice", "age": 20, "major": "CS"}
has_name = "name" in student
has_gpa = "gpa" in student

print("Has name:", has_name)
print("Has GPA:", has_gpa)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Has name: True
Has GPA: False`
    },
    {
      type: 'text',
      title: 'Working with Nested Dictionaries',
      content: `Nested dictionaries are dictionaries that contain other dictionaries as values. They're perfect for representing hierarchical data structures like organizational charts, complex configurations, or multi-dimensional data.

**Common use cases:**
- Student records with multiple subjects and grades
- Company departments with employee information
- Configuration files with grouped settings
- Geographic data with countries, states, and cities`
    },
    {
      type: 'code',
      title: 'Creating Nested Dictionaries',
      language: 'python',
      code: `# Creating and accessing nested dictionaries
students = {
    "alice": {"age": 20, "major": "CS", "gpa": 3.8},
    "bob": {"age": 19, "major": "Math", "gpa": 3.6}
}
alice_gpa = students["alice"]["gpa"]

print("Alice's GPA:", alice_gpa)
print("Bob's major:", students["bob"]["major"])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Alice's GPA: 3.8
Bob's major: Math`
    },
    {
      type: 'code',
      title: 'Modifying Nested Dictionary Values',
      language: 'python',
      code: `# Modifying values in nested dictionaries
students = {
    "alice": {"age": 20, "gpa": 3.8},
    "bob": {"age": 19, "gpa": 3.6}
}
students["alice"]["gpa"] = 3.9
students["bob"]["age"] = 20

print("Updated Alice:", students["alice"])
print("Updated Bob:", students["bob"])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Updated Alice: {'age': 20, 'gpa': 3.9}
Updated Bob: {'age': 20, 'gpa': 3.6}`
    },
    {
      type: 'text',
      title: 'Practical Applications',
      content: `Dictionaries are fundamental to many programming tasks and appear everywhere in real-world applications.

**Real-world examples:**
- **Web APIs**: JSON responses are essentially dictionaries
- **Configuration files**: Settings stored as key-value pairs
- **Caching systems**: Quick lookup of computed results
- **Database records**: Representing rows as dictionaries
- **Counting and frequency analysis**: Tracking occurrences of items
- **Mapping and translation**: Converting between different representations`
    },
    {
      type: 'code',
      title: 'Practical Example: Word Frequency Counter',
      language: 'python',
      code: `# Building a word frequency counter
text = "python is great python is fun"
word_count = {}
words = text.split()

for word in words:
    word_count[word] = word_count.get(word, 0) + 1

print("Word frequencies:", word_count)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Word frequencies: {'python': 2, 'is': 2, 'great': 1, 'fun': 1}`
    },
    {
      type: 'code',
      title: 'Practical Example: Student Grade Book',
      language: 'python',
      code: `# Creating a simple gradebook system
gradebook = {
    "Alice": [95, 87, 92],
    "Bob": [78, 85, 90],
    "Charlie": [88, 91, 87]
}
alice_average = sum(gradebook["Alice"]) / len(gradebook["Alice"])

print("Alice's grades:", gradebook["Alice"])
print("Alice's average:", alice_average)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Alice's grades: [95, 87, 92]
Alice's average: 91.33333333333333`
    },
    {
      type: 'text',
      title: 'Key Takeaways',
      content: `🎯 **Key Points to Remember:**

**Dictionary Creation:**
- Use **{}** for literal creation: \`{"key": "value"}\`
- Use **dict()** for constructor creation: \`dict(key="value")\`

**Safe Access:**
- Use **dict[key]** for direct access (may raise KeyError)
- Use **dict.get(key, default)** for safe access with fallback

**Essential Methods:**
- **.keys()**, **.values()**, **.items()** for iteration
- **.update()** for merging dictionaries
- **.pop()** for safe removal

**Best Practices:**
- Use meaningful key names that describe the data
- Consider using .get() when keys might not exist
- Use "key in dict" to check existence before access
- Keep nested dictionaries simple and well-documented

Dictionaries are one of Python's most powerful and frequently used data structures. Master them, and you'll find solutions to countless programming challenges!`
    }
  ]
};