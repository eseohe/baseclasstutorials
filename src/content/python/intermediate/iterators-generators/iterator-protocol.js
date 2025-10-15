// Lesson content for Iterator Protocol
export const iteratorProtocolContent = {
  id: 'iterator-protocol',
  title: 'Iterator Protocol',
  duration: '26 min',
  overview: `Understand how Python's iteration works under the hood! Learn the iterator protocol, discover how for loops really work, and master the built-in functions that work with iterators like iter(), next(), and enumerate().`,
  objectives: [
    'Understand what iterators are and how they work',
    'Learn the iterator protocol (__iter__ and __next__ methods)',
    'Discover how for loops work internally with iterators',
    'Use built-in iterator functions: iter(), next(), enumerate(), zip()',
    'Understand the difference between iterables and iterators',
    'Work with iterator exhaustion and multiple iterations',
  ],
  sections: [
    {
      type: 'text',
      title: 'Understanding Iteration in Python',
      content: `Iteration is one of Python's most fundamental concepts. Every time you use a for loop, you're using Python's iterator protocol.

**Key concepts:**
- **Iterable**: Any object that can be looped over (lists, strings, dictionaries)
- **Iterator**: An object that produces values one at a time and remembers its position
- **Iterator Protocol**: The rules that define how iteration works in Python

**The Iterator Protocol:**
1. **\`__iter__()\`**: Returns an iterator object
2. **\`__next__()\`**: Returns the next value from the iterator
3. **\`StopIteration\`**: Exception raised when no more items are available

**How for loops really work:**
\`for item in iterable:\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;# do something\`

Internally becomes:
\`iterator = iter(iterable)\`  
\`while True:\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;try:\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item = next(iterator)\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# do something\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;except StopIteration:\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break\`

**Why this matters:**
- Understanding iteration helps you write more efficient code
- You can create your own iterable objects
- You can control how iteration works for your classes
- You can work with infinite sequences or large datasets efficiently`
    },
    {
      type: 'code',
      title: 'Exploring Built-in Iterators',
      language: 'python',
      code: `# Understanding how built-in iterables work
my_list = [1, 2, 3, 4, 5]
my_string = "Hello"

# Get iterators from iterables
list_iterator = iter(my_list)
string_iterator = iter(my_string)

print("List iterator:", type(list_iterator))
print("String iterator:", type(string_iterator))

# Use next() to get values one by one
print("First item from list:", next(list_iterator))
print("Second item from list:", next(list_iterator))

print("First char from string:", next(string_iterator))
print("Second char from string:", next(string_iterator))

# Continue getting values
print("Remaining list items:")
try:
    while True:
        item = next(list_iterator)
        print("  -", item)
except StopIteration:
    print("  (List iterator exhausted)")

# Check if objects are iterable vs iterator
print("Is list iterable?", hasattr(my_list, '__iter__'))
print("Is list an iterator?", hasattr(my_list, '__next__'))
print("Is list_iterator an iterator?", hasattr(list_iterator, '__next__'))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `List iterator: <class 'list_iterator'>
String iterator: <class 'str_iterator'>
First item from list: 1
Second item from list: 2
First char from string: H
Second char from string: e
Remaining list items:
  - 3
  - 4
  - 5
  (List iterator exhausted)
Is list iterable? True
Is list an iterator? False
Is list_iterator an iterator? True`
    },
    {
      type: 'code',
      title: 'Understanding Iterator Exhaustion',
      language: 'python',
      code: `# Demonstrating iterator exhaustion and reuse
numbers = [10, 20, 30]

# Create iterator
numbers_iter = iter(numbers)

# First loop - works fine
print("First iteration:")
for num in numbers_iter:
    print("  ", num)

# Second loop - iterator is exhausted!
print("Second iteration (same iterator):")
for num in numbers_iter:
    print("  ", num)  # This won't print anything

print("Iterator exhausted - no items left")

# To iterate again, create a new iterator
print("Third iteration (new iterator):")
new_iterator = iter(numbers)
for num in new_iterator:
    print("  ", num)

# Compare with list - can iterate multiple times
print("List can be iterated multiple times:")
for i in range(2):
    print("Loop", i + 1, ":")
    for num in numbers:  # Creates new iterator each time
        print("  ", num)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `First iteration:
   10
   20
   30
Second iteration (same iterator):
Iterator exhausted - no items left
Third iteration (new iterator):
   10
   20
   30
List can be iterated multiple times:
Loop 1 :
   10
   20
   30
Loop 2 :
   10
   20
   30`
    },
    {
      type: 'text',
      title: 'Built-in Iterator Functions',
      content: `Python provides several built-in functions that work with iterators and make iteration more powerful.

**Essential iterator functions:**
- **\`iter(iterable)\`**: Creates an iterator from an iterable
- **\`next(iterator, default)\`**: Gets the next item from an iterator
- **\`enumerate(iterable)\`**: Returns pairs of (index, value)
- **\`zip(*iterables)\`**: Combines multiple iterables
- **\`range(start, stop, step)\`**: Creates a sequence of numbers
- **\`reversed(iterable)\`**: Reverses the order of iteration

**Advanced iterator functions:**
- **\`map(function, iterable)\`**: Applies function to each item
- **\`filter(function, iterable)\`**: Filters items based on function
- **\`all(iterable)\`**: True if all items are truthy
- **\`any(iterable)\`**: True if any item is truthy
- **\`sum(iterable)\`**: Sums all items

**Benefits:**
- Memory efficient - process items one at a time
- Lazy evaluation - items generated only when needed
- Composable - can chain operations together
- Work with infinite sequences`
    },
    {
      type: 'code',
      title: 'Built-in Iterator Functions',
      language: 'python',
      code: `# Exploring built-in iterator functions
names = ["Alice", "Bob", "Charlie", "Diana"]
scores = [95, 87, 92, 88]

# enumerate() - get index and value pairs
print("Using enumerate():")
for index, name in enumerate(names):
    print("  ", index, ":", name)

# enumerate() with custom start
print("Enumerate with start=1:")
for position, name in enumerate(names, start=1):
    print("  Position", position, ":", name)

# zip() - combine multiple iterables
print("Using zip() to combine names and scores:")
for name, score in zip(names, scores):
    print("  ", name, "scored", score)

# zip() with unequal lengths
short_list = [1, 2]
long_list = [10, 20, 30, 40]
print("Zip with unequal lengths:")
for short, long_val in zip(short_list, long_list):
    print("  ", short, "->", long_val)

# range() as iterator
print("Range as iterator:")
range_iter = iter(range(3, 8))
print("First 3 items from range:")
for i in range(3):
    print("  ", next(range_iter))

# reversed() iterator
print("Reversed iteration:")
for name in reversed(names):
    print("  ", name)

# Using next() with default value
empty_list = []
empty_iter = iter(empty_list)
first_item = next(empty_iter, "No items")
print("First item from empty list:", first_item)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Using enumerate():
   0 : Alice
   1 : Bob
   2 : Charlie
   3 : Diana
Enumerate with start=1:
  Position 1 : Alice
  Position 2 : Bob
  Position 3 : Charlie
  Position 4 : Diana
Using zip() to combine names and scores:
   Alice scored 95
   Bob scored 87
   Charlie scored 92
   Diana scored 88
Zip with unequal lengths:
   1 -> 10
   2 -> 20
Range as iterator:
First 3 items from range:
   3
   4
   5
Reversed iteration:
   Diana
   Charlie
   Bob
   Alice
First item from empty list: No items`
    },
    {
      type: 'code',
      title: 'Advanced Iterator Functions',
      language: 'python',
      code: `# Advanced iterator functions for data processing
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
words = ["hello", "world", "python", "programming"]

# map() - apply function to each item
print("Using map() to square numbers:")
squared = map(lambda x: x * x, numbers[:5])  # Only first 5 numbers
print("Squared iterator type:", type(squared))
for square in squared:
    print("  ", square)

# map() with string operations
print("Using map() to uppercase words:")
uppercase_words = map(str.upper, words)
for word in uppercase_words:
    print("  ", word)

# filter() - keep items that meet condition
print("Using filter() for even numbers:")
evens = filter(lambda x: x % 2 == 0, numbers)
for even in evens:
    print("  ", even)

# filter() with string operations
print("Using filter() for long words:")
long_words = filter(lambda word: len(word) > 5, words)
for word in long_words:
    print("  ", word)

# all() and any() - testing conditions
test_numbers = [2, 4, 6, 8]
mixed_numbers = [1, 2, 3, 4]

print("All numbers are even:", all(x % 2 == 0 for x in test_numbers))
print("All mixed numbers are even:", all(x % 2 == 0 for x in mixed_numbers))
print("Any mixed numbers are even:", any(x % 2 == 0 for x in mixed_numbers))

# sum() with iterator
print("Sum of first 5 squares:", sum(x * x for x in range(1, 6)))
print("Sum of string lengths:", sum(len(word) for word in words))

# Chaining iterator operations
print("Chained operations - sum of squares of even numbers:")
result = sum(x * x for x in numbers if x % 2 == 0)
print("Result:", result)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Using map() to square numbers:
Squared iterator type: <class 'map'>
   1
   4
   9
   16
   25
Using map() to uppercase words:
   HELLO
   WORLD
   PYTHON
   PROGRAMMING
Using filter() for even numbers:
   2
   4
   6
   8
   10
Using filter() for long words:
   python
   programming
All numbers are even: True
All mixed numbers are even: False
Any mixed numbers are even: True
Sum of first 5 squares: 55
Sum of string lengths: 24
Chained operations - sum of squares of even numbers:
Result: 220`
    },
    {
      type: 'text',
      title: 'Manual Iterator Creation',
      content: `You can manually control iteration using \`iter()\` and \`next()\` functions, which gives you fine-grained control over the iteration process.

**Manual iteration benefits:**
- **Control**: Decide when to get the next item
- **Flexibility**: Skip items, peek ahead, or stop early
- **Error handling**: Handle \`StopIteration\` gracefully
- **State management**: Maintain iteration state across function calls

**Common patterns:**
- **Peek ahead**: Look at the next item without consuming it
- **Conditional iteration**: Stop based on item values, not just position
- **Batch processing**: Process items in groups
- **Stateful iteration**: Remember previous items

**Best practices:**
- Always handle \`StopIteration\` when using \`next()\`
- Use default values with \`next(iterator, default)\` to avoid exceptions
- Remember that iterators can only go forward
- Create new iterators when you need to restart iteration`
    },
    {
      type: 'code',
      title: 'Manual Iterator Control',
      language: 'python',
      code: `# Manual iterator control for advanced processing
data = ["apple", "banana", "cherry", "date", "elderberry"]

def process_pairs(iterable):
    """Process items in pairs"""
    iterator = iter(iterable)
    
    while True:
        # Try to get two items
        first = next(iterator, None)
        if first is None:
            break
        
        second = next(iterator, None)
        if second is None:
            print("Unpaired item:", first)
            break
        
        print("Pair:", first, "+", second)

def find_first_matching(iterable, condition):
    """Find first item matching condition"""
    iterator = iter(iterable)
    
    while True:
        item = next(iterator, None)
        if item is None:
            return None  # Not found
        
        if condition(item):
            return item

def peek_ahead_example(iterable):
    """Example of looking ahead in iteration"""
    iterator = iter(iterable)
    current = next(iterator, None)
    
    while current is not None:
        # Peek at next item without consuming it
        next_item = next(iterator, None)
        
        if next_item is not None:
            print("Current:", current, "-> Next:", next_item)
            current = next_item
        else:
            print("Current:", current, "-> (last item)")
            break

def batch_iterator(iterable, batch_size):
    """Create batches from an iterable"""
    iterator = iter(iterable)
    
    while True:
        batch = []
        for i in range(batch_size):
            item = next(iterator, None)
            if item is None:
                break
            batch.append(item)
        
        if not batch:
            break
        
        yield batch  # We'll learn about yield in next lesson

# Test manual iteration examples
print("Processing pairs:")
process_pairs(data)

print("Find first long word:")
long_word = find_first_matching(data, lambda x: len(x) > 5)
print("Found:", long_word)

print("Peek ahead example:")
peek_ahead_example(data[:4])  # Use first 4 items

print("Batch processing:")
numbers = list(range(1, 11))  # [1, 2, 3, ..., 10]
for batch in batch_iterator(numbers, 3):
    print("Batch:", batch)

# Advanced: Reading file-like data with manual iteration
def read_until_empty_line(lines):
    """Read lines until empty line"""
    iterator = iter(lines)
    result = []
    
    while True:
        line = next(iterator, None)
        if line is None or line.strip() == "":
            break
        result.append(line.strip())
    
    return result

# Simulate file lines
file_lines = ["Line 1", "Line 2", "Line 3", "", "Line 5", "Line 6"]
section = read_until_empty_line(file_lines)
print("Read until empty line:", section)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Processing pairs:
Pair: apple + banana
Pair: cherry + date
Unpaired item: elderberry
Find first long word:
Found: banana
Peek ahead example:
Current: apple -> Next: banana
Current: banana -> Next: cherry
Current: cherry -> Next: date
Current: date -> (last item)
Batch processing:
Batch: [1, 2, 3]
Batch: [4, 5, 6]
Batch: [7, 8, 9]
Batch: [10]
Read until empty line: ['Line 1', 'Line 2', 'Line 3']`
    },
    {
      type: 'code',
      title: 'Iterator Performance and Memory Efficiency',
      language: 'python',
      code: `# Demonstrating iterator memory efficiency
import sys

def memory_efficient_processing():
    """Compare memory usage of different approaches"""
    
    # Method 1: Create full list in memory (memory intensive)
    def create_full_list(n):
        return [x * x for x in range(n)]
    
    # Method 2: Use iterator (memory efficient)
    def create_iterator(n):
        return (x * x for x in range(n))
    
    # Test with smaller numbers for demonstration
    n = 1000
    
    # Full list approach
    full_list = create_full_list(n)
    print("Full list - first 5 items:", full_list[:5])
    print("Full list size:", sys.getsizeof(full_list), "bytes")
    
    # Iterator approach
    iterator = create_iterator(n)
    print("Iterator type:", type(iterator))
    print("Iterator size:", sys.getsizeof(iterator), "bytes")
    
    # Get first 5 items from iterator
    first_five = []
    for i, value in enumerate(iterator):
        if i >= 5:
            break
        first_five.append(value)
    print("Iterator - first 5 items:", first_five)

def process_large_dataset():
    """Example of processing large dataset with iterators"""
    
    def simulate_database_records():
        """Simulate database that returns records one by one"""
        for i in range(1000000):  # Simulate 1 million records
            yield {"id": i, "value": i * 2, "status": "active" if i % 2 == 0 else "inactive"}
    
    # Process records efficiently without loading all into memory
    active_count = 0
    total_value = 0
    processed = 0
    
    for record in simulate_database_records():
        if record["status"] == "active":
            active_count = active_count + 1
            total_value = total_value + record["value"]
        
        processed = processed + 1
        
        # Stop after processing some records (for demo)
        if processed >= 100:
            break
    
    print("Processed", processed, "records")
    print("Active records:", active_count)
    print("Average value of active records:", total_value / active_count if active_count > 0 else 0)

def iterator_chaining_example():
    """Example of chaining iterators for complex processing"""
    
    # Simulate reading numbers from multiple sources
    source1 = range(1, 6)      # [1, 2, 3, 4, 5]
    source2 = range(10, 15)    # [10, 11, 12, 13, 14]
    source3 = range(20, 25)    # [20, 21, 22, 23, 24]
    
    # Chain iterators together
    from itertools import chain
    combined = chain(source1, source2, source3)
    
    # Process combined data with filters
    even_numbers = filter(lambda x: x % 2 == 0, combined)
    squared_evens = map(lambda x: x * x, even_numbers)
    
    print("Even numbers squared from all sources:")
    for result in squared_evens:
        print("  ", result)

# Run examples
print("Memory efficiency demonstration:")
memory_efficient_processing()

print("\\nLarge dataset processing:")
process_large_dataset()

print("\\nIterator chaining:")
iterator_chaining_example()`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Memory efficiency demonstration:
Full list - first 5 items: [0, 1, 4, 9, 16]
Full list size: 8856 bytes
Iterator type: <class 'generator'>
Iterator size: 104 bytes
Iterator - first 5 items: [0, 1, 4, 9, 16]

Large dataset processing:
Processed 100 records
Active records: 50
Average value of active records: 98.0

Iterator chaining:
Even numbers squared from all sources:
   4
   16
   100
   144
   400
   484`
    },
    {
      type: 'text',
      title: 'Key Takeaways',
      content: `🎯 **Iterator Protocol Summary:**

**Core Concepts:**
- **Iterable**: Object with \`__iter__()\` method (lists, strings, dicts)
- **Iterator**: Object with \`__iter__()\` and \`__next__()\` methods
- **StopIteration**: Exception when iterator is exhausted

**Iterator Protocol:**
\`iterator = iter(iterable)\`  - Get iterator  
\`item = next(iterator)\`      - Get next item  
\`StopIteration\`             - No more items

**Built-in Iterator Functions:**
- \`enumerate(iterable)\` - Get (index, value) pairs
- \`zip(*iterables)\` - Combine multiple iterables
- \`map(func, iterable)\` - Apply function to each item
- \`filter(func, iterable)\` - Keep items matching condition
- \`reversed(iterable)\` - Reverse iteration order

**Key Benefits:**
- **Memory efficient**: Process items one at a time
- **Lazy evaluation**: Items generated only when needed
- **Composable**: Chain operations together
- **Infinite sequences**: Can work with unlimited data

**Important Points:**
- Iterators can only go forward (no reset)
- Iterators are exhausted after one complete iteration
- Use \`next(iterator, default)\` to avoid StopIteration
- Create new iterators to restart iteration

**Best Practices:**
- Use built-in iterator functions for common patterns
- Handle StopIteration when using manual iteration
- Prefer iterators over lists for large datasets
- Chain iterators for complex data processing pipelines

**For Loop Internals:**
\`for item in iterable:\` becomes:
\`iterator = iter(iterable)\`  
\`while True:\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;try: item = next(iterator)\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;except StopIteration: break\`

Understanding the iterator protocol is fundamental to writing efficient, Pythonic code that works with data streams of any size!`
    }
  ]
};