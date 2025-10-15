// Lesson content for Iterating over sequences and ranges
export const iteratingSequencesContent = {
  id: 'iterating-sequences',
  title: 'Iterating over sequences and ranges',
  duration: '25 min',
  overview: `Master the art of iteration! Learn to loop through lists, strings, tuples, and ranges efficiently. Discover enumerate() and zip() for advanced iteration patterns that make your code more Pythonic and powerful.`,
  objectives: [
    'Iterate over different sequence types (lists, strings, tuples)',
    'Use range() effectively for numeric iterations',
    'Apply enumerate() to get both index and value while looping',
    'Use zip() to iterate over multiple sequences simultaneously',
    'Choose the most appropriate iteration method for each scenario',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Sequence Iteration',
      content: `Python makes it easy to iterate over sequences - collections of items in a specific order. You can loop through:

**Basic Sequences:**
- **Lists**: Mutable collections of items
- **Strings**: Sequences of characters  
- **Tuples**: Immutable collections of items
- **Ranges**: Sequences of numbers

**Advanced Iteration Tools:**
- **enumerate()**: Get both index and value
- **zip()**: Iterate over multiple sequences together
- **range()**: Generate number sequences efficiently

**Key Benefits:**
- Direct iteration is more readable than index-based loops
- Python handles the iteration mechanics for you
- Less prone to off-by-one errors
- More Pythonic and efficient code`
    },
    {
      type: 'code',
      title: 'Iterating Over Lists',
      language: 'python',
      code: `# Direct iteration over list items
colors = ["red", "green", "blue"]
for color in colors:
    print("Color:", color)`
    },
    {
      type: 'output',
      content: `Color: red
Color: green
Color: blue`
    },
    {
      type: 'code',
      title: 'Iterating Over Strings',
      language: 'python',
      code: `# Each character in a string
message = "Hello"
for char in message:
    print("Character:", char)`
    },
    {
      type: 'output',
      content: `Character: H
Character: e
Character: l
Character: l
Character: o`
    },
    {
      type: 'code',
      title: 'Iterating Over Tuples',
      language: 'python',
      code: `# Tuples work just like lists
coordinates = (10, 20, 30)
for coord in coordinates:
    print("Coordinate:", coord)`
    },
    {
      type: 'output',
      content: `Coordinate: 10
Coordinate: 20
Coordinate: 30`
    },
    {
      type: 'text',
      title: 'Working with Range',
      content: `The range() function generates sequences of numbers efficiently. It doesn't create all numbers in memory at once - it generates them as needed.

**range() patterns:**
- \`range(5)\` → 0, 1, 2, 3, 4
- \`range(1, 6)\` → 1, 2, 3, 4, 5
- \`range(0, 10, 2)\` → 0, 2, 4, 6, 8
- \`range(10, 0, -1)\` → 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

Range is perfect for numeric loops and generating sequences of numbers.`
    },
    {
      type: 'code',
      title: 'Basic Range Usage',
      language: 'python',
      code: `# Simple range from 0 to 4
for i in range(5):
    print("Index:", i)`
    },
    {
      type: 'output',
      content: `Index: 0
Index: 1
Index: 2
Index: 3
Index: 4`
    },
    {
      type: 'code',
      title: 'Range with Start and Stop',
      language: 'python',
      code: `# Range from 3 to 7
for num in range(3, 8):
    print("Number:", num)`
    },
    {
      type: 'output',
      content: `Number: 3
Number: 4
Number: 5
Number: 6
Number: 7`
    },
    {
      type: 'code',
      title: 'Range with Step',
      language: 'python',
      code: `# Count by 3s
for i in range(0, 12, 3):
    print("Multiple of 3:", i)`
    },
    {
      type: 'output',
      content: `Multiple of 3: 0
Multiple of 3: 3
Multiple of 3: 6
Multiple of 3: 9`
    },
    {
      type: 'code',
      title: 'Reverse Range',
      language: 'python',
      code: `# Counting backwards
for i in range(5, 0, -1):
    print("Countdown:", i)`
    },
    {
      type: 'output',
      content: `Countdown: 5
Countdown: 4
Countdown: 3
Countdown: 2
Countdown: 1`
    },
    {
      type: 'text',
      title: 'Using enumerate() for Index and Value',
      content: `Sometimes you need both the index and the value while iterating. Instead of manually tracking an index counter, use enumerate().

**enumerate() provides:**
- Automatic index counting starting from 0
- Both index and value in each iteration
- Cleaner code than manual index management
- Optional start parameter to begin counting from a different number

This is especially useful when you need to know the position of items while processing them.`
    },
    {
      type: 'code',
      title: 'Basic enumerate() Usage',
      language: 'python',
      code: `# Get both index and value
fruits = ["apple", "banana", "orange"]
for index, fruit in enumerate(fruits):
    print("Index", index, ":", fruit)`
    },
    {
      type: 'output',
      content: `Index 0 : apple
Index 1 : banana
Index 2 : orange`
    },
    {
      type: 'code',
      title: 'enumerate() with Custom Start',
      language: 'python',
      code: `# Start counting from 1 instead of 0
colors = ["red", "green", "blue"]
for num, color in enumerate(colors, 1):
    print("Color", num, ":", color)`
    },
    {
      type: 'output',
      content: `Color 1 : red
Color 2 : green
Color 3 : blue`
    },
    {
      type: 'code',
      title: 'enumerate() with Strings',
      language: 'python',
      code: `# Find positions of characters
word = "Python"
for pos, letter in enumerate(word):
    print("Position", pos, ":", letter)`
    },
    {
      type: 'output',
      content: `Position 0 : P
Position 1 : y`
    },
    {
      type: 'text',
      title: 'Using zip() for Multiple Sequences',
      content: `The zip() function lets you iterate over multiple sequences simultaneously. It pairs up elements from each sequence and stops when the shortest sequence is exhausted.

**zip() is perfect for:**
- Processing related data from multiple lists
- Combining sequences element by element
- Creating dictionaries from separate key and value lists
- Parallel iteration over multiple data sources

The result is tuples containing one element from each sequence.`
    },
    {
      type: 'code',
      title: 'Basic zip() Usage',
      language: 'python',
      code: `# Combine two lists
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
for name, age in zip(names, ages):
    print(name, "is", age, "years old")`
    },
    {
      type: 'output',
      content: `Alice is 25 years old
Bob is 30 years old
Charlie is 35 years old`
    },
    {
      type: 'code',
      title: 'zip() with Three Sequences',
      language: 'python',
      code: `# Combine three lists
cities = ["New York", "London"]
countries = ["USA", "UK"]
populations = [8, 9]
for city, country, pop in zip(cities, countries, populations):
    print(city, ",", country, ":", pop, "million")`
    },
    {
      type: 'output',
      content: `New York , USA : 8 million
London , UK : 9 million`
    },
    {
      type: 'code',
      title: 'zip() with Different Length Lists',
      language: 'python',
      code: `# zip() stops at shortest list
letters = ["A", "B", "C", "D"]
numbers = [1, 2]
for letter, number in zip(letters, numbers):
    print("Pair:", letter, "-", number)`
    },
    {
      type: 'output',
      content: `Pair: A - 1
Pair: B - 2`
    },
    {
      type: 'code',
      title: 'Creating Dictionary with zip()',
      language: 'python',
      code: `# Convert two lists into a dictionary
keys = ["name", "age"]
values = ["David", 28]
person = dict(zip(keys, values))
print("Dictionary:", person)`
    },
    {
      type: 'output',
      content: `Dictionary: {'name': 'David', 'age': 28}`
    },
    {
      type: 'code',
      title: 'Practical Example - Grade Calculation',
      language: 'python',
      code: `# Calculate average grades for students
students = ["Emma", "James"]
grades = [[85, 90, 92], [78, 85, 88]]
for student, grade_list in zip(students, grades):
    average = sum(grade_list) / len(grade_list)
    print(student, "average:", average)`
    },
    {
      type: 'output',
      content: `Emma average: 89.0
James average: 83.66666666666667`
    },
    {
      type: 'code',
      title: 'Practical Example - Data Processing',
      language: 'python',
      code: `# Process temperature data
days = ["Monday", "Tuesday", "Wednesday"]
temperatures = [72, 75, 68]
for day, temp in zip(days, temperatures):
    if temp > 70:
        print(day, ":", temp, "F (Warm)")
    else:
        print(day, ":", temp, "F (Cool)")`
    },
    {
      type: 'output',
      content: `Monday : 72 F (Warm)
Tuesday : 75 F (Warm)`
    },
    {
      type: 'text',
      title: 'Choosing the Right Iteration Method',
      content: `**Use direct iteration (for item in sequence) when:**
- You only need the values, not the positions
- Working with any sequence type
- Code simplicity is important

**Use enumerate() when:**
- You need both index and value
- Creating numbered lists or reports
- Tracking position during processing

**Use zip() when:**
- Processing multiple related sequences
- Combining data from different sources
- Creating key-value pairs

**Use range() when:**
- Generating numeric sequences
- Need precise control over start, stop, step
- Working with mathematical calculations

**Avoid index-based loops (for i in range(len(list))) unless absolutely necessary - direct iteration is more Pythonic!**`
    }
  ]
};