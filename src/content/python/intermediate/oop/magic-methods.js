// Lesson content for Magic Methods
export const magicMethodsContent = {
  id: 'magic-methods',
  title: 'Magic Methods',
  duration: '30 min',
  overview: `Unlock the power of Python's special methods! Learn to implement __str__, __repr__, __len__, __eq__, and other magic methods to make your classes behave like built-in Python types with natural, intuitive interfaces.`,
  objectives: [
    'Understand what magic methods are and how they work',
    'Implement string representation methods (__str__ and __repr__)',
    'Add comparison methods for sorting and equality testing',
    'Create arithmetic operations for custom classes',
    'Implement container methods for len(), indexing, and iteration',
    'Design classes that integrate seamlessly with Python syntax',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Magic Methods',
      content: `Magic methods (also called dunder methods - "double underscore") are special methods that start and end with double underscores. They allow your classes to integrate with Python's built-in functions and operators.

**What magic methods enable:**
- **Built-in function integration**: Make \`len(obj)\`, \`str(obj)\` work with your classes
- **Operator overloading**: Use \`+\`, \`-\`, \`==\`, \`<\` with your objects
- **Container behavior**: Enable indexing with \`obj[key]\` and iteration
- **Context management**: Support \`with\` statements
- **Function call syntax**: Make objects callable with \`obj()\`

**Why magic methods matter:**
- **Natural syntax**: Your objects behave like built-in types
- **Python integration**: Work seamlessly with Python's operators and functions
- **User-friendly**: Intuitive interfaces that follow Python conventions
- **Powerful abstractions**: Hide complex operations behind simple syntax

**Common magic methods:**
- **\`__init__\`**: Constructor (already familiar)
- **\`__str__\`**: String representation for users
- **\`__repr__\`**: String representation for developers
- **\`__len__\`**: Enable \`len()\` function
- **\`__eq__\`**: Enable \`==\` comparison
- **\`__add__\`**: Enable \`+\` operator

**Naming convention:**
All magic methods use double underscores before and after the name: \`__method__\``
    },
    {
      type: 'code',
      title: 'Basic Magic Methods - String Representation',
      language: 'python',
      code: `# String representation magic methods
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
        self.current_page = 1
    
    def __str__(self):
        """String representation for end users"""
        return '"' + self.title + '" by ' + self.author
    
    def __repr__(self):
        """String representation for developers/debugging"""
        return ("Book('" + self.title + "', '" + self.author + 
                "', " + str(self.pages) + ")")
    
    def read_pages(self, num_pages):
        self.current_page = min(self.current_page + num_pages, self.pages)

# Create a book and test string representations
my_book = Book("Python Programming", "Jane Doe", 350)

# __str__ is used by print() and str()
print("Using print():", my_book)
print("Using str():", str(my_book))

# __repr__ is used in interactive mode and by repr()
print("Using repr():", repr(my_book))

# __repr__ is also used when objects are in collections
books = [my_book, Book("Data Science", "John Smith", 280)]
print("Books in list:", books)

# If __str__ is not defined, __repr__ is used as fallback
# Let's create a class with only __repr__
class Magazine:
    def __init__(self, name, issue):
        self.name = name
        self.issue = issue
    
    def __repr__(self):
        return "Magazine('" + self.name + "', " + str(self.issue) + ")"

mag = Magazine("Tech Today", 42)
print("Magazine with only __repr__:", mag)
print("Magazine str():", str(mag))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Using print(): "Python Programming" by Jane Doe
Using str(): "Python Programming" by Jane Doe
Using repr(): Book('Python Programming', 'Jane Doe', 350)
Books in list: [Book('Python Programming', 'Jane Doe', 350), Book('Data Science', 'John Smith', 280)]
Magazine with only __repr__: Magazine('Tech Today', 42)
Magazine str(): Magazine('Tech Today', 42)`
    },
    {
      type: 'code',
      title: 'Comparison Magic Methods',
      language: 'python',
      code: `# Comparison magic methods for equality and ordering
class Student:
    def __init__(self, name, grade, student_id):
        self.name = name
        self.grade = grade
        self.student_id = student_id
    
    def __str__(self):
        return self.name + " (Grade: " + str(self.grade) + ")"
    
    def __repr__(self):
        return ("Student('" + self.name + "', " + str(self.grade) + 
                ", '" + self.student_id + "')")
    
    def __eq__(self, other):
        """Equal if same student ID"""
        if not isinstance(other, Student):
            return False
        return self.student_id == other.student_id
    
    def __lt__(self, other):
        """Less than - compare by grade (for sorting)"""
        if not isinstance(other, Student):
            return NotImplemented
        return self.grade < other.grade
    
    def __le__(self, other):
        """Less than or equal"""
        return self < other or self == other
    
    def __gt__(self, other):
        """Greater than"""
        if not isinstance(other, Student):
            return NotImplemented
        return self.grade > other.grade
    
    def __ge__(self, other):
        """Greater than or equal"""
        return self > other or self == other
    
    def __ne__(self, other):
        """Not equal (usually automatically derived from __eq__)"""
        return not self == other

# Create students and test comparisons
alice = Student("Alice", 95, "S001")
bob = Student("Bob", 87, "S002")
charlie = Student("Charlie", 95, "S003")
alice_copy = Student("Alice", 95, "S001")  # Same student ID as alice

# Test equality (based on student_id)
print("alice == bob:", alice == bob)
print("alice == alice_copy:", alice == alice_copy)  # Same student ID
print("alice != bob:", alice != bob)

# Test ordering (based on grade)
print("alice > bob:", alice > bob)  # 95 > 87
print("alice < bob:", alice < bob)
print("alice == charlie (grade):", alice.grade == charlie.grade)
print("alice == charlie (students):", alice == charlie)  # Different IDs

# Sorting students by grade
students = [bob, alice, charlie]
print("Original order:", [str(s) for s in students])

sorted_students = sorted(students)  # Uses __lt__ for sorting
print("Sorted by grade:", [str(s) for s in sorted_students])

# Using comparison in conditions
best_student = alice if alice > bob else bob
print("Best student:", best_student)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `alice == bob: False
alice == alice_copy: True
alice != bob: True
alice > bob: True
alice < bob: False
alice == charlie (grade): True
alice == charlie (students): False
Original order: ['Bob (Grade: 87)', 'Alice (Grade: 95)', 'Charlie (Grade: 95)']
Sorted by grade: ['Bob (Grade: 87)', 'Alice (Grade: 95)', 'Charlie (Grade: 95)']
Best student: Alice (Grade: 95)`
    },
    {
      type: 'text',
      title: 'Arithmetic Magic Methods',
      content: `Arithmetic magic methods allow your objects to work with mathematical operators like \`+\`, \`-\`, \`*\`, \`/\`.

**Common arithmetic methods:**
- **\`__add__\`**: Addition (\`obj1 + obj2\`)
- **\`__sub__\`**: Subtraction (\`obj1 - obj2\`)
- **\`__mul__\`**: Multiplication (\`obj1 * obj2\`)
- **\`__truediv__\`**: Division (\`obj1 / obj2\`)
- **\`__mod__\`**: Modulo (\`obj1 % obj2\`)
- **\`__pow__\`**: Power (\`obj1 ** obj2\`)

**In-place operations:**
- **\`__iadd__\`**: In-place addition (\`obj += other\`)
- **\`__isub__\`**: In-place subtraction (\`obj -= other\`)
- **\`__imul__\`**: In-place multiplication (\`obj *= other\`)

**Important considerations:**
- Return new objects for regular operations (\`__add__\`)
- Modify self for in-place operations (\`__iadd__\`)
- Handle type checking and invalid operations
- Consider commutativity: \`a + b\` should equal \`b + a\` when appropriate`
    },
    {
      type: 'code',
      title: 'Arithmetic Magic Methods Example',
      language: 'python',
      code: `# Vector class with arithmetic operations
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        return "Vector(" + str(self.x) + ", " + str(self.y) + ")"
    
    def __repr__(self):
        return "Vector(" + str(self.x) + ", " + str(self.y) + ")"
    
    def __add__(self, other):
        """Add two vectors"""
        if isinstance(other, Vector):
            return Vector(self.x + other.x, self.y + other.y)
        elif isinstance(other, (int, float)):
            # Add scalar to both components
            return Vector(self.x + other, self.y + other)
        else:
            return NotImplemented
    
    def __radd__(self, other):
        """Right-hand addition (when left operand doesn't support +)"""
        return self + other
    
    def __sub__(self, other):
        """Subtract two vectors"""
        if isinstance(other, Vector):
            return Vector(self.x - other.x, self.y - other.y)
        elif isinstance(other, (int, float)):
            return Vector(self.x - other, self.y - other)
        else:
            return NotImplemented
    
    def __mul__(self, other):
        """Multiply vector by scalar or compute dot product"""
        if isinstance(other, (int, float)):
            # Scalar multiplication
            return Vector(self.x * other, self.y * other)
        elif isinstance(other, Vector):
            # Dot product
            return self.x * other.x + self.y * other.y
        else:
            return NotImplemented
    
    def __rmul__(self, other):
        """Right-hand multiplication (for scalar * vector)"""
        return self * other
    
    def __truediv__(self, other):
        """Divide vector by scalar"""
        if isinstance(other, (int, float)):
            if other == 0:
                raise ValueError("Cannot divide by zero")
            return Vector(self.x / other, self.y / other)
        else:
            return NotImplemented
    
    def __iadd__(self, other):
        """In-place addition"""
        if isinstance(other, Vector):
            self.x = self.x + other.x
            self.y = self.y + other.y
            return self
        elif isinstance(other, (int, float)):
            self.x = self.x + other
            self.y = self.y + other
            return self
        else:
            return NotImplemented
    
    def __eq__(self, other):
        """Check if two vectors are equal"""
        if isinstance(other, Vector):
            return self.x == other.x and self.y == other.y
        return False
    
    def magnitude(self):
        """Calculate vector magnitude"""
        return (self.x ** 2 + self.y ** 2) ** 0.5

# Test arithmetic operations
v1 = Vector(3, 4)
v2 = Vector(1, 2)

print("v1:", v1)
print("v2:", v2)

# Vector addition
v3 = v1 + v2
print("v1 + v2:", v3)

# Scalar operations
v4 = v1 * 2
print("v1 * 2:", v4)

v5 = 3 * v1  # Uses __rmul__
print("3 * v1:", v5)

v6 = v1 + 5  # Add scalar to vector
print("v1 + 5:", v6)

# Division
v7 = v1 / 2
print("v1 / 2:", v7)

# Dot product (vector * vector)
dot_product = v1 * v2
print("v1 · v2 (dot product):", dot_product)

# In-place operations
v1 += Vector(1, 1)
print("v1 after += Vector(1, 1):", v1)

# Magnitude calculation
print("Magnitude of v1:", round(v1.magnitude(), 2))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `v1: Vector(3, 4)
v2: Vector(1, 2)
v1 + v2: Vector(4, 6)
v1 * 2: Vector(6, 8)
3 * v1: Vector(9, 12)
v1 + 5: Vector(8, 9)
v1 / 2: Vector(1.5, 2.0)
v1 · v2 (dot product): 11
v1 after += Vector(1, 1): Vector(4, 5)
Magnitude of v1: 6.4`
    },
    {
      type: 'code',
      title: 'Container Magic Methods',
      language: 'python',
      code: `# Container magic methods for sequence-like behavior
class Playlist:
    def __init__(self, name):
        self.name = name
        self.songs = []
    
    def __str__(self):
        return "Playlist: " + self.name + " (" + str(len(self.songs)) + " songs)"
    
    def __len__(self):
        """Enable len() function"""
        return len(self.songs)
    
    def __getitem__(self, index):
        """Enable indexing: playlist[0], playlist[-1], playlist[1:3]"""
        return self.songs[index]
    
    def __setitem__(self, index, value):
        """Enable item assignment: playlist[0] = "new song" """
        self.songs[index] = value
    
    def __delitem__(self, index):
        """Enable item deletion: del playlist[0]"""
        del self.songs[index]
    
    def __contains__(self, item):
        """Enable 'in' operator: "song" in playlist"""
        return item in self.songs
    
    def __iter__(self):
        """Enable iteration: for song in playlist"""
        return iter(self.songs)
    
    def __bool__(self):
        """Enable boolean evaluation: if playlist: ..."""
        return len(self.songs) > 0
    
    def append(self, song):
        """Add a song to the playlist"""
        self.songs.append(song)
    
    def remove(self, song):
        """Remove a song from the playlist"""
        if song in self.songs:
            self.songs.remove(song)
            return True
        return False

class ShoppingCart:
    def __init__(self):
        self.items = {}  # item_name: quantity
    
    def __len__(self):
        """Total number of items (considering quantities)"""
        return sum(self.items.values())
    
    def __getitem__(self, item_name):
        """Get quantity of an item"""
        return self.items.get(item_name, 0)
    
    def __setitem__(self, item_name, quantity):
        """Set quantity of an item"""
        if quantity > 0:
            self.items[item_name] = quantity
        elif item_name in self.items:
            del self.items[item_name]  # Remove if quantity is 0 or negative
    
    def __delitem__(self, item_name):
        """Remove an item completely"""
        if item_name in self.items:
            del self.items[item_name]
    
    def __contains__(self, item_name):
        """Check if item is in cart"""
        return item_name in self.items
    
    def __iter__(self):
        """Iterate over item names"""
        return iter(self.items.keys())
    
    def __bool__(self):
        """True if cart has items"""
        return len(self.items) > 0
    
    def __str__(self):
        if not self.items:
            return "Empty cart"
        
        item_list = []
        for item, qty in self.items.items():
            item_list.append(item + " x" + str(qty))
        return "Cart: " + ", ".join(item_list)

# Test Playlist container methods
my_playlist = Playlist("Favorites")
my_playlist.append("Song A")
my_playlist.append("Song B")
my_playlist.append("Song C")

print("Playlist:", my_playlist)
print("Length:", len(my_playlist))  # Uses __len__
print("First song:", my_playlist[0])  # Uses __getitem__
print("Last song:", my_playlist[-1])
print("Songs 1-2:", my_playlist[1:3])  # Slicing also uses __getitem__

# Test membership
print("'Song A' in playlist:", "Song A" in my_playlist)  # Uses __contains__
print("'Song X' in playlist:", "Song X" in my_playlist)

# Test iteration
print("All songs:")
for song in my_playlist:  # Uses __iter__
    print("  -", song)

# Test boolean evaluation
print("Playlist has songs:", bool(my_playlist))  # Uses __bool__

print("---")

# Test ShoppingCart
cart = ShoppingCart()
cart["apples"] = 5  # Uses __setitem__
cart["bananas"] = 3
cart["oranges"] = 2

print("Cart:", cart)
print("Total items:", len(cart))  # Uses __len__
print("Apples quantity:", cart["apples"])  # Uses __getitem__
print("Has bananas:", "bananas" in cart)  # Uses __contains__

# Modify cart
cart["apples"] = 8  # Update quantity
del cart["oranges"]  # Uses __delitem__

print("Updated cart:", cart)
print("Items in cart:")
for item in cart:  # Uses __iter__
    print("  -", item, "x" + str(cart[item]))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Playlist: Favorites (3 songs)
Length: 3
First song: Song A
Last song: Song C
Songs 1-2: ['Song B', 'Song C']
'Song A' in playlist: True
'Song X' in playlist: False
All songs:
  - Song A
  - Song B
  - Song C
Playlist has songs: True
---
Cart: Cart: apples x5, bananas x3, oranges x2
Total items: 10
Apples quantity: 5
Has bananas: True
Updated cart: Cart: apples x8, bananas x3
Items in cart:
  - apples x8
  - bananas x3`
    },
    {
      type: 'text',
      title: 'Advanced Magic Methods',
      content: `Beyond basic operations, Python offers magic methods for advanced functionality:

**Callable objects:**
- **\`__call__\`**: Make objects callable like functions (\`obj()\`)

**Context management:**
- **\`__enter__\`** and **\`__exit__\`**: Enable \`with\` statements

**Attribute access:**
- **\`__getattr__\`**: Handle missing attribute access
- **\`__setattr__\`**: Control all attribute setting
- **\`__delattr__\`**: Control attribute deletion

**Numeric conversion:**
- **\`__int__\`**: Convert to integer with \`int(obj)\`
- **\`__float__\`**: Convert to float with \`float(obj)\`
- **\`__bool__\`**: Convert to boolean with \`bool(obj)\`

**Hashing:**
- **\`__hash__\`**: Enable use as dictionary keys or in sets

**These methods enable powerful abstractions and make your objects integrate seamlessly with Python's built-in systems.**`
    },
    {
      type: 'code',
      title: 'Advanced Magic Methods Example',
      language: 'python',
      code: `# Advanced magic methods demonstration
class Counter:
    def __init__(self, start=0, step=1):
        self.value = start
        self.step = step
        self.history = [start]
    
    def __str__(self):
        return "Counter(" + str(self.value) + ")"
    
    def __call__(self):
        """Make counter callable - calling it increments the value"""
        self.value = self.value + self.step
        self.history.append(self.value)
        return self.value
    
    def __int__(self):
        """Convert to integer"""
        return int(self.value)
    
    def __float__(self):
        """Convert to float"""
        return float(self.value)
    
    def __bool__(self):
        """Boolean evaluation - True if value is non-zero"""
        return self.value != 0
    
    def __len__(self):
        """Length is the number of increments performed"""
        return len(self.history) - 1
    
    def reset(self):
        """Reset counter to initial value"""
        start_value = self.history[0]
        self.value = start_value
        self.history = [start_value]

class Temperature:
    def __init__(self, celsius):
        self.celsius = celsius
    
    def __str__(self):
        return str(self.celsius) + "°C"
    
    def __int__(self):
        """Convert to integer (rounded Celsius)"""
        return int(round(self.celsius))
    
    def __float__(self):
        """Convert to float (exact Celsius)"""
        return float(self.celsius)
    
    def __bool__(self):
        """True if above freezing"""
        return self.celsius > 0
    
    def __eq__(self, other):
        """Equal if same temperature in Celsius"""
        if isinstance(other, Temperature):
            return abs(self.celsius - other.celsius) < 0.1
        elif isinstance(other, (int, float)):
            return abs(self.celsius - other) < 0.1
        return False
    
    def __lt__(self, other):
        """Less than comparison"""
        if isinstance(other, Temperature):
            return self.celsius < other.celsius
        elif isinstance(other, (int, float)):
            return self.celsius < other
        return NotImplemented
    
    def __add__(self, other):
        """Add degrees"""
        if isinstance(other, (int, float)):
            return Temperature(self.celsius + other)
        elif isinstance(other, Temperature):
            return Temperature(self.celsius + other.celsius)
        return NotImplemented
    
    def __hash__(self):
        """Make hashable so it can be used in sets/dict keys"""
        return hash(round(self.celsius, 1))

# Test callable objects
counter = Counter(0, 2)
print("Initial counter:", counter)
print("Call counter():", counter())  # Uses __call__
print("Call counter():", counter())
print("Call counter():", counter())
print("Counter length:", len(counter))  # Number of increments

# Test type conversion
print("Counter as int:", int(counter))  # Uses __int__
print("Counter as float:", float(counter))  # Uses __float__
print("Counter as bool:", bool(counter))  # Uses __bool__

counter_zero = Counter(0, 0)
print("Zero counter as bool:", bool(counter_zero))

print("---")

# Test Temperature class
temp1 = Temperature(25.0)
temp2 = Temperature(30.0)
temp3 = Temperature(-5.0)

print("Temp1:", temp1)
print("Temp2:", temp2)
print("Temp3:", temp3)

# Test conversions
print("Temp1 as int:", int(temp1))
print("Temp1 as float:", float(temp1))

# Test boolean evaluation (above freezing?)
print("Temp1 above freezing:", bool(temp1))
print("Temp3 above freezing:", bool(temp3))

# Test comparisons
print("Temp1 == 25:", temp1 == 25)
print("Temp1 < Temp2:", temp1 < temp2)

# Test arithmetic
temp4 = temp1 + 5
print("Temp1 + 5:", temp4)

# Test hashing (can be used as dict keys)
temp_dict = {temp1: "warm", temp2: "hot", temp3: "cold"}
print("Temperature categories:", temp_dict)

# Test with sets
temp_set = {temp1, temp2, temp3, Temperature(25.0)}  # Duplicate temp1
print("Unique temperatures:", len(temp_set))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Initial counter: Counter(0)
Call counter(): 2
Call counter(): 4
Call counter(): 6
Counter length: 3
Counter as int: 6
Counter as float: 6.0
Counter as bool: True
Zero counter as bool: False
---
Temp1: 25.0°C
Temp2: 30.0°C
Temp3: -5.0°C
Temp1 as int: 25
Temp1 as float: 25.0
Temp1 above freezing: True
Temp3 above freezing: False
Temp1 == 25: True
Temp1 < Temp2: True
Temp1 + 5: 30.0°C
Temperature categories: {25.0°C: 'warm', 30.0°C: 'hot', -5.0°C: 'cold'}
Unique temperatures: 3`
    },
    {
      type: 'text',
      title: 'Magic Methods Best Practices',
      content: `**Guidelines for implementing magic methods effectively:**

**1. Follow Python conventions:**
- \`__str__\`: User-friendly representation
- \`__repr__\`: Developer/debugging representation (should be unambiguous)
- \`__eq__\`: Equality should be symmetric and transitive
- \`__bool__\`: Should represent "truthiness" of the object

**2. Implement related methods together:**
- If you implement \`__eq__\`, consider \`__ne__\`, \`__hash__\`
- If you implement \`__lt__\`, consider \`__le__\`, \`__gt__\`, \`__ge__\`
- If you implement \`__getitem__\`, consider \`__setitem__\`, \`__delitem__\`, \`__len__\`

**3. Handle edge cases:**
- Check types before operations (\`isinstance\`)
- Return \`NotImplemented\` for unsupported operations
- Raise appropriate exceptions for invalid operations

**4. Be consistent with Python's behavior:**
- Addition should return new objects (don't modify originals)
- In-place operations should modify and return \`self\`
- Comparison methods should work with similar types

**5. Consider performance:**
- Don't implement expensive operations in frequently-called methods
- Cache computed values when appropriate
- Use \`__slots__\` for memory efficiency if needed

**Common patterns:**
- Always implement both \`__str__\` and \`__repr__\`
- Use \`@total_ordering\` decorator to generate comparison methods
- Return \`NotImplemented\` rather than raising exceptions for type mismatches`
    },
    {
      type: 'text',
      title: 'Key Takeaways',
      content: `🎯 **Magic Methods Summary:**

**Essential String Methods:**
\`def __str__(self):\`  - User-friendly representation  
\`def __repr__(self):\` - Developer/debug representation

**Comparison Methods:**
\`def __eq__(self, other):\`  - Equality (\`==\`)  
\`def __lt__(self, other):\`  - Less than (\`<\`)  
\`def __le__(self, other):\`  - Less than or equal (\`<=\`)

**Arithmetic Methods:**
\`def __add__(self, other):\`  - Addition (\`+\`)  
\`def __mul__(self, other):\`  - Multiplication (\`*\`)  
\`def __iadd__(self, other):\` - In-place addition (\`+=\`)

**Container Methods:**
\`def __len__(self):\`       - Enable \`len(obj)\`  
\`def __getitem__(self, key):\` - Enable \`obj[key]\`  
\`def __contains__(self, item):\` - Enable \`item in obj\`  
\`def __iter__(self):\`      - Enable \`for item in obj\`

**Key Benefits:**
- **Natural syntax**: Objects behave like built-in types
- **Python integration**: Work with standard functions and operators
- **User-friendly**: Intuitive interfaces following Python conventions
- **Powerful abstractions**: Complex operations behind simple syntax

**Best Practices:**
- Implement \`__str__\` and \`__repr__\` for all classes
- Use \`isinstance()\` for type checking in magic methods
- Return \`NotImplemented\` for unsupported operations
- Follow Python conventions for behavior and naming
- Consider implementing related methods together

**Remember:**
- Magic methods make your classes feel like native Python types
- They enable operator overloading and built-in function integration
- Good magic method implementation improves code readability
- They're essential for creating Pythonic, intuitive class interfaces

Master magic methods to create classes that integrate seamlessly with Python's syntax and feel natural to use!`
    }
  ]
};