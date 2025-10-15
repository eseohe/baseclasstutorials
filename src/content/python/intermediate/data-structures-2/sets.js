// Lesson content for Sets: unique elements and operations
export const setsContent = {
  id: 'sets',
  title: 'Sets: unique elements and operations',
  duration: '22 min',
  overview: `Master Python sets - the collection that automatically handles uniqueness! Learn to create sets, perform mathematical set operations, and solve problems involving unique data and relationships between collections.`,
  objectives: [
    'Create sets using different methods and understand their properties',
    'Understand set uniqueness and automatic duplicate removal',
    'Perform mathematical set operations: union, intersection, difference',
    'Use set methods for adding, removing, and testing membership',
    'Apply sets to solve real-world problems involving unique data',
    'Convert between sets and other data structures effectively',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Sets',
      content: `Sets are unordered collections of unique elements. Think of them as mathematical sets - no duplicates allowed, and order doesn't matter.

**Think of sets as:**
- Unique visitors to a website
- Distinct colors in a palette
- Unique skills in a job posting
- Set of permissions for a user
- Collection of unique tags or categories

**Key characteristics:**
- **Unordered**: No fixed position for items
- **Unique elements**: Automatically removes duplicates
- **Mutable**: Can add/remove items after creation
- **Fast membership testing**: Quick "in" operations
- **Mathematical operations**: Union, intersection, difference supported`
    },
    {
      type: 'code',
      title: 'Creating Sets - Method 1: Using Curly Braces',
      language: 'python',
      code: `# Method 1: Using curly braces with values
colors = {"red", "blue", "green"}
numbers = {1, 2, 3, 4, 5}

print("Colors:", colors)
print("Numbers:", numbers)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Colors: {'red', 'blue', 'green'}
Numbers: {1, 2, 3, 4, 5}`
    },
    {
      type: 'code',
      title: 'Creating Sets - Method 2: Using set() Constructor',
      language: 'python',
      code: `# Method 2: Using set() constructor
empty_set = set()
from_list = set([1, 2, 2, 3, 3, 4])

print("Empty set:", empty_set)
print("From list (duplicates removed):", from_list)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Empty set: set()
From list (duplicates removed): {1, 2, 3, 4}`
    },
    {
      type: 'code',
      title: 'Automatic Duplicate Removal',
      language: 'python',
      code: `# Sets automatically remove duplicates
tags = {"python", "programming", "python", "coding", "programming"}
unique_tags = set("hello")

print("Unique tags:", tags)
print("Unique letters:", unique_tags)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Unique tags: {'python', 'programming', 'coding'}
Unique letters: {'h', 'e', 'l', 'o'}`
    },
    {
      type: 'code',
      title: 'Adding Elements to Sets',
      language: 'python',
      code: `# Adding single elements and multiple elements
skills = {"python", "javascript"}
skills.add("html")
skills.update(["css", "react"])

print("Updated skills:", skills)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Updated skills: {'python', 'javascript', 'html', 'css', 'react'}`
    },
    {
      type: 'code',
      title: 'Removing Elements from Sets',
      language: 'python',
      code: `# Different ways to remove elements
skills = {"python", "javascript", "html", "css"}
skills.remove("html")  # Raises error if not found
skills.discard("php")  # Safe removal (no error)

print("After removal:", skills)
print("Set length:", len(skills))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `After removal: {'python', 'javascript', 'css'}
Set length: 3`
    },
    {
      type: 'text',
      title: 'Set Mathematical Operations',
      content: `Sets support mathematical operations that are incredibly useful for data analysis and problem-solving.

**Key operations:**
- **Union (|)**: All elements from both sets
- **Intersection (&)**: Common elements only
- **Difference (-)**: Elements in first set but not second
- **Symmetric difference (^)**: Elements in either set, but not both
- **Subset/Superset testing**: Checking relationships between sets`
    },
    {
      type: 'code',
      title: 'Union Operation - Combining Sets',
      language: 'python',
      code: `# Union: combining all unique elements
python_devs = {"Alice", "Bob", "Charlie"}
javascript_devs = {"Bob", "David", "Eve"}
all_devs = python_devs | javascript_devs

print("Python devs:", python_devs)
print("All developers:", all_devs)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Python devs: {'Alice', 'Bob', 'Charlie'}
All developers: {'Alice', 'Bob', 'Charlie', 'David', 'Eve'}`
    },
    {
      type: 'code',
      title: 'Intersection Operation - Common Elements',
      language: 'python',
      code: `# Intersection: finding common elements
python_devs = {"Alice", "Bob", "Charlie"}
javascript_devs = {"Bob", "David", "Eve"}
fullstack_devs = python_devs & javascript_devs

print("Full-stack devs:", fullstack_devs)
print("Number of full-stack:", len(fullstack_devs))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Full-stack devs: {'Bob'}
Number of full-stack: 1`
    },
    {
      type: 'code',
      title: 'Difference Operation - Unique to One Set',
      language: 'python',
      code: `# Difference: elements in first set but not second
python_devs = {"Alice", "Bob", "Charlie"}
javascript_devs = {"Bob", "David", "Eve"}
python_only = python_devs - javascript_devs

print("Python-only devs:", python_only)
print("JavaScript-only devs:", javascript_devs - python_devs)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Python-only devs: {'Alice', 'Charlie'}
JavaScript-only devs: {'David', 'Eve'}`
    },
    {
      type: 'code',
      title: 'Symmetric Difference - Exclusive Elements',
      language: 'python',
      code: `# Symmetric difference: elements in either set, but not both
set_a = {1, 2, 3, 4}
set_b = {3, 4, 5, 6}
exclusive = set_a ^ set_b

print("Set A:", set_a)
print("Exclusive elements:", exclusive)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Set A: {1, 2, 3, 4}
Exclusive elements: {1, 2, 5, 6}`
    },
    {
      type: 'code',
      title: 'Membership Testing and Relationships',
      language: 'python',
      code: `# Testing membership and set relationships
languages = {"python", "javascript", "java", "c++"}
web_languages = {"python", "javascript"}
is_python_in = "python" in languages
is_subset = web_languages.issubset(languages)

print("Python in languages:", is_python_in)
print("Web languages subset:", is_subset)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Python in languages: True
Web languages subset: True`
    },
    {
      type: 'text',
      title: 'Set Methods and Operations',
      content: `Sets come with useful methods that make them powerful for data manipulation and analysis.

**Essential methods:**
- **.add(item)** - Add single element
- **.update(iterable)** - Add multiple elements
- **.remove(item)** - Remove element (error if not found)
- **.discard(item)** - Remove element (safe, no error)
- **.pop()** - Remove and return arbitrary element
- **.clear()** - Remove all elements
- **.copy()** - Create shallow copy
- **.issubset()** / **.issuperset()** - Test relationships`
    },
    {
      type: 'code',
      title: 'Working with Set Methods',
      language: 'python',
      code: `# Using various set methods
fruits = {"apple", "banana", "orange"}
fruits_copy = fruits.copy()
random_fruit = fruits.pop()

print("Original fruits:", fruits_copy)
print("Removed fruit:", random_fruit)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Original fruits: {'apple', 'banana', 'orange'}
Removed fruit: apple`
    },
    {
      type: 'code',
      title: 'Converting Between Data Structures',
      language: 'python',
      code: `# Converting between sets and other structures
numbers_list = [1, 2, 2, 3, 3, 4, 5]
unique_numbers = list(set(numbers_list))
sorted_unique = sorted(set(numbers_list))

print("Original list:", numbers_list)
print("Unique numbers:", unique_numbers)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Original list: [1, 2, 2, 3, 3, 4, 5]
Unique numbers: [1, 2, 3, 4, 5]`
    },
    {
      type: 'text',
      title: 'Practical Applications',
      content: `Sets are incredibly useful for solving real-world problems involving uniqueness, relationships, and data analysis.

**Common use cases:**
- **Data deduplication**: Removing duplicates from datasets
- **Permission systems**: Managing user roles and access rights
- **Tag management**: Handling unique labels and categories
- **Network analysis**: Finding common connections
- **A/B testing**: Comparing user groups
- **Inventory management**: Tracking unique items and availability`
    },
    {
      type: 'code',
      title: 'Practical Example: Finding Common Interests',
      language: 'python',
      code: `# Finding common interests between users
alice_interests = {"reading", "coding", "hiking", "photography"}
bob_interests = {"hiking", "cooking", "photography", "gaming"}
common_interests = alice_interests & bob_interests

print("Common interests:", common_interests)
print("Number of common:", len(common_interests))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Common interests: {'hiking', 'photography'}
Number of common: 2`
    },
    {
      type: 'code',
      title: 'Practical Example: Unique Visitors Analysis',
      language: 'python',
      code: `# Analyzing unique visitors across days
monday_visitors = {"user1", "user2", "user3", "user4"}
tuesday_visitors = {"user2", "user4", "user5", "user6"}
unique_total = monday_visitors | tuesday_visitors
returning_users = monday_visitors & tuesday_visitors

print("Total unique visitors:", len(unique_total))
print("Returning users:", len(returning_users))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Total unique visitors: 6
Returning users: 2`
    },
    {
      type: 'code',
      title: 'Practical Example: Skills Gap Analysis',
      language: 'python',
      code: `# Analyzing skill gaps for job requirements
required_skills = {"python", "sql", "git", "docker", "aws"}
candidate_skills = {"python", "sql", "javascript", "html"}
missing_skills = required_skills - candidate_skills

print("Required skills:", required_skills)
print("Missing skills:", missing_skills)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Required skills: {'python', 'sql', 'git', 'docker', 'aws'}
Missing skills: {'git', 'docker', 'aws'}`
    },
    {
      type: 'text',
      title: 'Key Takeaways',
      content: `🎯 **Key Points to Remember:**

**Set Creation:**
- Use **{}** with values: \`{"a", "b", "c"}\`
- Use **set()** for empty or from iterables: \`set([1,2,3])\`

**Uniqueness:**
- Sets automatically eliminate duplicates
- Perfect for deduplication tasks

**Mathematical Operations:**
- **Union (|)**: Combine all unique elements
- **Intersection (&)**: Find common elements
- **Difference (-)**: Find unique to one set
- **Symmetric difference (^)**: Find elements in either, but not both

**Best Practices:**
- Use sets when uniqueness matters
- Use set operations for data analysis
- Convert to list when you need ordering
- Use membership testing ("in") for fast lookups

Sets are essential for data analysis, permission systems, and any scenario where uniqueness and relationships between collections matter. They're fast, efficient, and solve complex problems with simple operations!`
    }
  ]
};