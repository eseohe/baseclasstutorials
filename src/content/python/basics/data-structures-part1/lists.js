// Lesson content for Lists: creation, indexing, slicing, methods
export const listsContent = {
  id: 'lists',
  title: 'Lists: creation, indexing, slicing, methods',
  duration: '25 min',
  overview: `Discover Python lists - one of the most versatile and powerful data structures! Learn how to store multiple items, access them by position, slice them into subsets, and use built-in methods to manipulate your data efficiently.`,
  objectives: [
    'Create lists using different methods and syntax',
    'Access individual elements using indexing (positive and negative)',
    'Extract portions of lists using slicing techniques',
    'Modify lists using built-in methods like append, insert, remove',
    'Understand list mutability and its implications',
    'Work with nested lists and iterate through list elements',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Lists',
      content: `Lists are one of Python's most fundamental and useful data structures. Think of a list as a container that can hold multiple items in a specific order - like a shopping list, a playlist, or a list of students in a class.

**Key characteristics of lists:**
- **Ordered**: Items have a defined position (index)
- **Mutable**: You can change, add, or remove items after creation
- **Allow duplicates**: The same value can appear multiple times
- **Mixed data types**: Can store numbers, strings, booleans, even other lists

Lists are incredibly versatile and you'll use them constantly in Python programming!`
    },
    {
      type: 'code',
      title: 'Creating Lists - Method 1: Square Brackets',
      language: 'python',
      code: `# Method 1: Using square brackets (most common)
fruits = ["apple", "banana", "orange", "grape"]
numbers = [1, 2, 3, 4, 5]

print("Fruits:", fruits)
print("Numbers:", numbers)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Fruits: ['apple', 'banana', 'orange', 'grape']
Numbers: [1, 2, 3, 4, 5]`
    },
    {
      type: 'code',
      title: 'Creating Lists - Mixed Types and Empty Lists',
      language: 'python',
      code: `# Lists can hold different data types
mixed_list = ["hello", 42, True, 3.14]
empty_list = []

print("Mixed:", mixed_list)
print("Empty:", empty_list)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Mixed: ['hello', 42, True, 3.14]
Empty: []`
    },
    {
      type: 'code',
      title: 'Creating Lists - Method 2: list() Constructor',
      language: 'python',
      code: `# Method 2: Using the list() constructor
colors = list(["red", "green", "blue"])
range_list = list(range(1, 6))  # Creates [1, 2, 3, 4, 5]

print("Colors:", colors)
print("Range list:", range_list)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Colors: ['red', 'green', 'blue']
Range list: [1, 2, 3, 4, 5]`
    },
    {
      type: 'text',
      title: 'List Indexing - Accessing Elements',
      content: `List indexing allows you to access individual elements by their position. Python uses **zero-based indexing**, meaning the first element is at index 0.

**Positive indexing**: Count from the beginning (0, 1, 2, ...)
**Negative indexing**: Count from the end (-1, -2, -3, ...)

This dual indexing system makes it easy to access elements from either end of the list.`
    },
    {
      type: 'code',
      title: 'Positive Indexing - Accessing from the Beginning',
      language: 'python',
      code: `languages = ["Python", "JavaScript", "Java", "C++", "Go"]

# Positive indexing (from the beginning)
print("First language:", languages[0])
print("Second language:", languages[1])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `First language: Python
Second language: JavaScript`
    },
    {
      type: 'code',
      title: 'More Positive Indexing',
      language: 'python',
      code: `# Continue with positive indexing
print("Third language:", languages[2])
print("Number of languages:", len(languages))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Third language: Java
Number of languages: 5`
    },
    {
      type: 'code',
      title: 'Negative Indexing - Accessing from the End',
      language: 'python',
      code: `# Negative indexing (from the end)
print("Last language:", languages[-1])
print("Second to last:", languages[-2])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Last language: Go
Second to last: C++`
    },
    {
      type: 'code',
      title: 'Index Visualization',
      language: 'python',
      code: `# Visual representation of indexing:
print("Index visualization:")
print("Positive: 0        1           2       3      4")
print("Values:  Python   JavaScript  Java    C++    Go")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Index visualization:
Positive: 0        1           2       3      4
Values:  Python   JavaScript  Java    C++    Go`
    },
    {
      type: 'code',
      title: 'Creating and Modifying List Elements',
      language: 'python',
      code: `# Create a list of grades
grades = [85, 92, 78, 96, 88]
print("Original grades:", grades)

# Modify individual elements
grades[0] = 90  # Change first grade
print("After changing first grade:", grades)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Original grades: [85, 92, 78, 96, 88]
After changing first grade: [90, 92, 78, 96, 88]`
    },
    {
      type: 'code',
      title: 'More List Modifications',
      language: 'python',
      code: `# More modifications using different techniques
grades[-1] = 95  # Change last grade
grades[2] = grades[2] + 5  # Increase third grade by 5
print("Updated grades:", grades)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Updated grades: [90, 92, 83, 96, 95]`
    },
    {
      type: 'code',
      title: 'Using Variables as Indices',
      language: 'python',
      code: `# You can also use expressions for indices
index = 1
grades[index] = 100
print("After changing second grade:", grades)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `After changing second grade: [90, 100, 83, 96, 95]`
    },
    {
      type: 'text',
      title: 'List Slicing - Extracting Subsets',
      content: `Slicing allows you to extract a portion of a list, creating a new list with selected elements. The syntax is: **list[start:stop:step]**

- **start**: Index where slicing begins (inclusive)
- **stop**: Index where slicing ends (exclusive)
- **step**: How many elements to skip (default is 1)

Slicing is incredibly powerful for data manipulation and analysis.`
    },
    {
      type: 'code',
      title: 'Basic List Slicing - Range Selections',
      language: 'python',
      code: `numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print("Original:", numbers)

# Basic slicing with start and stop
print("First 5 elements:", numbers[0:5])
print("Elements 3 to 7:", numbers[3:8])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Original: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
First 5 elements: [0, 1, 2, 3, 4]
Elements 3 to 7: [3, 4, 5, 6, 7]`
    },
    {
      type: 'code',
      title: 'Slicing from Start and End',
      language: 'python',
      code: `# Omitting start or stop
print("From index 5 to end:", numbers[5:])
print("From start to index 4:", numbers[:5])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `From index 5 to end: [5, 6, 7, 8, 9]
From start to index 4: [0, 1, 2, 3, 4]`
    },
    {
      type: 'code',
      title: 'Complete Copy and Negative Slicing',
      language: 'python',
      code: `# Making a complete copy
print("Entire list (copy):", numbers[:])

# Negative indices in slicing
print("Last 4 elements:", numbers[-4:])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Entire list (copy): [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
Last 4 elements: [6, 7, 8, 9]`
    },
    {
      type: 'code',
      title: 'Step Parameter - Every Nth Element',
      language: 'python',
      code: `letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
print("Original:", letters)

# Using step parameter
print("Every 2nd element:", letters[::2])
print("Every 3rd element:", letters[::3])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Original: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
Every 2nd element: ['a', 'c', 'e', 'g', 'i']
Every 3rd element: ['a', 'd', 'g', 'j']`
    },
    {
      type: 'code',
      title: 'Reverse Slicing',
      language: 'python',
      code: `# Reverse slicing
print("Reversed list:", letters[::-1])
print("Every 2nd in reverse:", letters[::-2])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Reversed list: ['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']
Every 2nd in reverse: ['j', 'h', 'f', 'd', 'b']`
    },
    {
      type: 'code',
      title: 'Complex Slicing Combinations',
      language: 'python',
      code: `# Complex slicing with start, stop, and step
print("Every 2nd from index 1:", letters[1::2])
print("Middle elements, every 2nd:", letters[2:8:2])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Every 2nd from index 1: ['b', 'd', 'f', 'h', 'j']
Middle elements, every 2nd: ['c', 'e', 'g']`
    },
    {
      type: 'text',
      title: 'Essential List Methods',
      content: `Python lists come with many built-in methods that make them powerful and easy to work with. These methods can be grouped into categories:

**Adding elements:** append(), insert(), extend()
**Removing elements:** remove(), pop(), clear()
**Finding elements:** index(), count()
**Organizing:** sort(), reverse()

Understanding these methods is crucial for effective list manipulation.`
    },
    {
      type: 'code',
      title: 'Adding Elements with append()',
      language: 'python',
      code: `# Starting with an empty shopping list
shopping_list = []
print("Initial list:", shopping_list)

# append() - adds one item to the end
shopping_list.append("milk")
shopping_list.append("bread")
print("After appending:", shopping_list)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Initial list: []
After appending: ['milk', 'bread']`
    },
    {
      type: 'code',
      title: 'Adding Elements with insert()',
      language: 'python',
      code: `# insert() - adds item at specific position
shopping_list.insert(0, "coffee")  # Insert at beginning
shopping_list.insert(2, "butter")  # Insert at index 2
print("After inserting:", shopping_list)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `After inserting: ['coffee', 'milk', 'butter', 'bread']`
    },
    {
      type: 'code',
      title: 'Adding Multiple Elements with extend()',
      language: 'python',
      code: `# extend() - adds multiple items from another list
more_items = ["cheese", "yogurt"]
shopping_list.extend(more_items)
print("After extending:", shopping_list)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `After extending: ['coffee', 'milk', 'butter', 'bread', 'cheese', 'yogurt']`
    },
    {
      type: 'code',
      title: 'Using + Operator to Combine Lists',
      language: 'python',
      code: `# Alternative way to extend using + operator
extra_items = ["bananas", "oranges"]
shopping_list = shopping_list + extra_items
print("After using + operator:", shopping_list)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `After using + operator: ['coffee', 'milk', 'butter', 'bread', 'cheese', 'yogurt', 'bananas', 'oranges']`
    },
    {
      type: 'code',
      title: 'Removing Elements with remove()',
      language: 'python',
      code: `inventory = ["laptop", "mouse", "keyboard", "monitor", "laptop", "speakers"]
print("Initial inventory:", inventory)

# remove() - removes first occurrence of value
inventory.remove("laptop")  # Removes first "laptop"
print("After removing laptop:", inventory)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Initial inventory: ['laptop', 'mouse', 'keyboard', 'monitor', 'laptop', 'speakers']
After removing laptop: ['mouse', 'keyboard', 'monitor', 'laptop', 'speakers']`
    },
    {
      type: 'code',
      title: 'Removing Elements with pop()',
      language: 'python',
      code: `# pop() - removes and returns item at index (default: last item)
removed_item = inventory.pop()  # Remove last item
print("Removed item:", removed_item)
print("After pop():", inventory)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Removed item: speakers
After pop(): ['mouse', 'keyboard', 'monitor', 'laptop']`
    },
    {
      type: 'code',
      title: 'Using pop() with Specific Index',
      language: 'python',
      code: `# pop() with specific index
removed_item = inventory.pop(1)  # Remove item at index 1
print("Removed item at index 1:", removed_item)
print("After pop(1):", inventory)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Removed item at index 1: keyboard
After pop(1): ['mouse', 'monitor', 'laptop']`
    },
    {
      type: 'code',
      title: 'Clearing All Elements',
      language: 'python',
      code: `# clear() - removes all items
backup = inventory.copy()  # Make a backup first
inventory.clear()
print("After clear():", inventory)
print("Backup:", backup)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `After clear(): []
Backup: ['mouse', 'monitor', 'laptop']`
    },
    {
      type: 'code',
      title: 'Counting Elements with count()',
      language: 'python',
      code: `scores = [85, 92, 78, 92, 88, 95, 78, 92]
print("Scores:", scores)

# count() - returns how many times a value appears
count_92 = scores.count(92)
count_78 = scores.count(78)
print("Number of 92s:", count_92)
print("Number of 78s:", count_78)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Scores: [85, 92, 78, 92, 88, 95, 78, 92]
Number of 92s: 3
Number of 78s: 2`
    },
    {
      type: 'code',
      title: 'Finding Elements with index()',
      language: 'python',
      code: `# index() - returns the index of first occurrence
index_of_95 = scores.index(95)
index_of_first_92 = scores.index(92)
print("Index of 95:", index_of_95)
print("Index of first 92:", index_of_first_92)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Index of 95: 5
Index of first 92: 1`
    },
    {
      type: 'code',
      title: 'Safe Element Searching',
      language: 'python',
      code: `# Check if item exists before using index()
target_score = 90
if target_score in scores:
    print("Index of", target_score, ":", scores.index(target_score))
else:
    print(target_score, "not found in scores")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `90 not found in scores`
    },
    {
      type: 'code',
      title: 'Sorting Lists in Place',
      language: 'python',
      code: `# Working with names and numbers
names = ["Charlie", "Alice", "Bob"]
numbers = [64, 34, 25, 12, 22]

print("Original names:", names)
print("Original numbers:", numbers)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Original names: ['Charlie', 'Alice', 'Bob']
Original numbers: [64, 34, 25, 12, 22]`
    },
    {
      type: 'code',
      title: 'Using sort() Method',
      language: 'python',
      code: `# sort() - modifies the original list
names.sort()  # Alphabetical order
numbers.sort()  # Ascending order
print("Names sorted:", names)
print("Numbers sorted:", numbers)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Names sorted: ['Alice', 'Bob', 'Charlie']
Numbers sorted: [12, 22, 25, 34, 64]`
    },
    {
      type: 'code',
      title: 'Reverse Sorting',
      language: 'python',
      code: `# sort() with reverse=True
names.sort(reverse=True)  # Reverse alphabetical
print("Names reverse sorted:", names)

# reverse() - reverses the current order
names.reverse()
print("Names after reverse():", names)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Names reverse sorted: ['Charlie', 'Bob', 'Alice']
Names after reverse(): ['Alice', 'Bob', 'Charlie']`
    },
    {
      type: 'code',
      title: 'Creating New Sorted Lists',
      language: 'python',
      code: `# sorted() - returns new sorted list (doesn't modify original)
original = [5, 2, 8, 1, 9]
new_sorted = sorted(original)
print("Original list:", original)
print("New sorted list:", new_sorted)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Original list: [5, 2, 8, 1, 9]
New sorted list: [1, 2, 5, 8, 9]`
    },
    {
      type: 'text',
      title: 'Working with Nested Lists',
      content: `Lists can contain other lists, creating nested or multi-dimensional structures. This is useful for representing tables, matrices, or hierarchical data.

Think of nested lists like:
- A spreadsheet with rows and columns
- A classroom with multiple rows of students
- A game board with coordinates`
    },
    {
      type: 'code',
      title: 'Creating Nested Lists',
      language: 'python',
      code: `# Grade book - each inner list represents a student's grades
grade_book = [
    ["Alice", 95, 87],
    ["Bob", 78, 85]
]

print("Grade book:", grade_book)
print("Alice's data:", grade_book[0])
print("Bob's data:", grade_book[1])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Grade book: [['Alice', 95, 87], ['Bob', 78, 85]]
Alice's data: ['Alice', 95, 87]
Bob's data: ['Bob', 78, 85]`
    },
    {
      type: 'code',
      title: 'Accessing Nested Elements',
      language: 'python',
      code: `# Accessing nested elements using double indexing
print("Alice's name:", grade_book[0][0])
print("Alice's first grade:", grade_book[0][1])
print("Bob's last grade:", grade_book[1][-1])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Alice's name: Alice
Alice's first grade: 95
Bob's last grade: 85`
    },
    {
      type: 'code',
      title: 'Modifying Nested Lists',
      language: 'python',
      code: `# Modifying nested lists
grade_book[1][1] = 90  # Change Bob's first grade
print("After updating Bob's grade:", grade_book[1])

# Adding a new student
new_student = ["Charlie", 92, 89]
grade_book.append(new_student)
print("After adding Charlie:", grade_book[-1])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `After updating Bob's grade: ['Bob', 90, 85]
After adding Charlie: ['Charlie', 92, 89]`
    },
    {
      type: 'code',
      title: 'Working with Temperature Data',
      language: 'python',
      code: `# Temperature data for a week (daily highs and lows)
week_temps = [
    [72, 65],  # Monday
    [75, 68],  # Tuesday
    [78, 70]   # Wednesday
]

print("Week temperatures:", week_temps)
print("Monday temps:", week_temps[0])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Week temperatures: [[72, 65], [75, 68], [78, 70]]
Monday temps: [72, 65]`
    },
    {
      type: 'code',
      title: 'Calculating Temperature Averages',
      language: 'python',
      code: `# Calculate daily averages using indexing
monday_avg = (week_temps[0][0] + week_temps[0][1]) / 2
tuesday_avg = (week_temps[1][0] + week_temps[1][1]) / 2

print("Monday average:", monday_avg)
print("Tuesday average:", tuesday_avg)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Monday average: 68.5
Tuesday average: 71.5`
    },
    {
      type: 'code',
      title: 'Comparing Temperature Data',
      language: 'python',
      code: `# Compare temperatures using conditionals
monday_high = week_temps[0][0]    # Monday high
tuesday_high = week_temps[1][0]   # Tuesday high

if monday_high > tuesday_high:
    print("Monday was warmer than Tuesday")
else:
    print("Tuesday was warmer than Monday")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Tuesday was warmer than Monday`
    },
    {
      type: 'code',
      title: 'Creating Student Grade Lists',
      language: 'python',
      code: `# Student grades stored in lists
alice_grades = [95, 87, 92]
bob_grades = [78, 85, 88]

print("Alice's grades:", alice_grades)
print("Bob's grades:", bob_grades)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Alice's grades: [95, 87, 92]
Bob's grades: [78, 85, 88]`
    },
    {
      type: 'code',
      title: 'Calculating Grade Averages',
      language: 'python',
      code: `# Calculate Alice's average grade manually
alice_total = alice_grades[0] + alice_grades[1] + alice_grades[2]
alice_average = alice_total / len(alice_grades)
print("Alice's average:", alice_average)

# Calculate Bob's average using sum()
bob_average = sum(bob_grades) / len(bob_grades)
print("Bob's average:", bob_average)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Alice's average: 91.33333333333333
Bob's average: 83.66666666666667`
    },
    {
      type: 'code',
      title: 'Finding Highest and Lowest Grades',
      language: 'python',
      code: `# Find highest and lowest grades
alice_highest = max(alice_grades)
alice_lowest = min(alice_grades)
print("Alice's highest grade:", alice_highest)
print("Alice's lowest grade:", alice_lowest)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Alice's highest grade: 95
Alice's lowest grade: 87`
    },
    {
      type: 'code',
      title: 'Comparing Student Performance',
      language: 'python',
      code: `# Compare students using conditionals
if alice_average > bob_average:
    print("Alice has a higher average than Bob")
else:
    print("Bob has a higher average than Alice")

# Check if any student has perfect scores
if 100 in alice_grades or 100 in bob_grades:
    print("Someone got a perfect score!")
else:
    print("No perfect scores this time.")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Alice has a higher average than Bob
No perfect scores this time.`
    }
  ]
};