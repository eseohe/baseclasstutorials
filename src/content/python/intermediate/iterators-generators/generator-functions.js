// Lesson content for Generator Functions
export const generatorFunctionsContent = {
  id: 'generator-functions',
  title: 'Generator Functions',
  duration: '30 min',
  overview: `Master Python generators! Learn to create memory-efficient iterators using yield statements, understand generator state management, and build powerful data processing pipelines that handle large datasets with minimal memory usage.`,
  objectives: [
    'Create generator functions using the yield statement',
    'Understand generator state suspension and resumption',
    'Use generators for memory-efficient data processing',
    'Implement generator-based data pipelines',
    'Master generator methods: send(), throw(), and close()',
    'Build practical applications with generators',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Generator Functions',
      content: `Generator functions are a special type of function that can pause and resume their execution, yielding values one at a time. This makes them perfect for creating iterators with minimal code and maximum efficiency.

**Key Concepts:**
- **yield**: Pauses function execution and returns a value
- **Generator object**: Returned when calling a generator function
- **Lazy evaluation**: Values computed only when requested
- **State preservation**: Local variables maintained between yields

**Advantages over regular functions:**
- **Memory efficient**: Don't store entire sequence in memory
- **Lazy evaluation**: Generate values on-demand
- **Simple syntax**: No need to implement iterator protocol manually
- **State management**: Automatic handling of iteration state

**Generator vs Iterator:**
- Generators ARE iterators (implement iterator protocol automatically)
- Much simpler syntax than custom iterator classes
- Built-in support for state management and StopIteration`
    },
    {
      type: 'code',
      title: 'Basic Generator Function',
      language: 'python',
      code: `# Simple generator function using yield
def count_up_to(limit):
    count = 0
    while count < limit:
        yield count
        count = count + 1

# Using the generator
counter = count_up_to(4)
print("Generator type:", type(counter))

# Iterate through generator values
for num in counter:
    print("Generated:", num)

print("Generator exhausted")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Generator type: <class 'generator'>
Generated: 0
Generated: 1
Generated: 2
Generated: 3
Generator exhausted`
    },
    {
      type: 'code',
      title: 'Generator vs List Comparison',
      language: 'python',
      code: `# Compare generator to list creation
def numbers_generator(n):
    for i in range(n):
        yield i * i

def numbers_list(n):
    result = []
    for i in range(n):
        result.append(i * i)
    return result

# Create generator and list
gen = numbers_generator(5)
lst = numbers_list(5)

print("Generator object:", gen)
print("List object:", lst)

# Convert generator to list to see values
gen_values = list(numbers_generator(5))
print("Generator values:", gen_values)
print("List values:", lst)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Generator object: <generator object numbers_generator at 0x...>
List object: [0, 1, 4, 9, 16]
Generator values: [0, 1, 4, 9, 16]
List values: [0, 1, 4, 9, 16]`
    },
    {
      type: 'text',
      title: 'Generator State and Execution',
      content: `Generators maintain their state between yield statements, allowing them to resume exactly where they left off.

**How generators work:**
1. **Function call**: Creates generator object (doesn't execute function)
2. **First next()**: Executes until first yield
3. **Subsequent next()**: Resumes from last yield
4. **Function end**: Raises StopIteration

**State preservation:**
- Local variables keep their values
- Loop counters and conditions maintained
- Function execution position remembered

**Manual iteration:**
- Use \`next()\` function to get individual values
- Handle StopIteration when generator is exhausted`
    },
    {
      type: 'code',
      title: 'Manual Generator Iteration',
      language: 'python',
      code: `# Understanding generator state with manual iteration
def fibonacci_generator(count):
    a, b = 0, 1
    for i in range(count):
        yield a
        print("  Generator state: a =", a, ", b =", b)
        a, b = b, a + b

# Create generator
fib_gen = fibonacci_generator(4)
print("Generator created")

# Manual iteration to see state changes
print("First call:")
first = next(fib_gen)
print("Got:", first)

print("\\nSecond call:")
second = next(fib_gen)
print("Got:", second)

print("\\nRemaining values:")
remaining = list(fib_gen)
print("Got:", remaining)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Generator created
First call:
  Generator state: a = 0 , b = 1
Got: 0

Second call:
  Generator state: a = 1 , b = 1
Got: 1

Remaining values:
  Generator state: a = 1 , b = 2
  Generator state: a = 2 , b = 3
Got: [1, 2]`
    },
    {
      type: 'code',
      title: 'Generator with Conditional Logic',
      language: 'python',
      code: `# Generator with filtering and conditions
def even_squares(start, end):
    for num in range(start, end + 1):
        square = num * num
        if square % 2 == 0:  # Only yield even squares
            yield square

def prime_numbers(limit):
    def is_prime(n):
        if n < 2:
            return False
        for i in range(2, int(n ** 0.5) + 1):
            if n % i == 0:
                return False
        return True
    
    num = 2
    while num <= limit:
        if is_prime(num):
            yield num
        num = num + 1

# Use conditional generators
even_sq = list(even_squares(1, 10))
primes = list(prime_numbers(20))

print("Even squares (1-10):", even_sq)
print("Primes up to 20:", primes)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Even squares (1-10): [4, 16, 36, 64, 100]
Primes up to 20: [2, 3, 5, 7, 11, 13, 17, 19]`
    },
    {
      type: 'text',
      title: 'Generator Expressions vs Functions',
      content: `Python offers two ways to create generators:

**Generator Functions:**
- Use \`def\` and \`yield\` keywords
- Can contain complex logic and multiple yield statements
- Support parameters and local variables
- Best for complex generation logic

**Generator Expressions:**
- Similar to list comprehensions but with parentheses
- Create simple generators in one line
- More memory efficient than list comprehensions
- Best for simple transformations

**When to use each:**
- **Generator functions**: Complex logic, multiple yields, parameters
- **Generator expressions**: Simple transformations, filtering, mapping`
    },
    {
      type: 'code',
      title: 'Generator Expressions',
      language: 'python',
      code: `# Generator expressions for simple cases
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Generator expression for squares
squares_gen = (x * x for x in numbers)

# Generator expression with filtering
even_squares_gen = (x * x for x in numbers if x % 2 == 0)

# Generator expression with transformation
doubled_gen = (x * 2 for x in numbers if x > 5)

# Convert to lists to see results
squares = list(squares_gen)
even_squares = list(even_squares_gen)
doubled = list(doubled_gen)

print("Squares:", squares)
print("Even squares:", even_squares)
print("Doubled (>5):", doubled)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Squares: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
Even squares: [4, 16, 36, 64, 100]
Doubled (>5): [12, 14, 16, 18, 20]`
    },
    {
      type: 'text',
      title: 'Advanced Generator Features',
      content: `Generators support advanced features for two-way communication and control:

**Generator Methods:**
- **send(value)**: Send a value into the generator
- **throw(exception)**: Raise an exception inside generator
- **close()**: Close the generator and raise GeneratorExit

**Two-way communication:**
- Use \`yield\` expressions to receive values
- Generator can both produce and consume data
- Enables coroutine-like behavior

**Generator pipelines:**
- Chain generators together for data processing
- Each generator processes output from the previous one
- Memory-efficient data transformation pipelines`
    },
    {
      type: 'code',
      title: 'Generator with Send Method',
      language: 'python',
      code: `# Generator that can receive values via send()
def accumulator():
    total = 0
    while True:
        value = yield total
        if value is not None:
            total = total + value

# Using send() to communicate with generator
acc = accumulator()
next(acc)  # Prime the generator

# Send values and get running totals
result1 = acc.send(10)
result2 = acc.send(20)
result3 = acc.send(5)

print("After sending 10:", result1)
print("After sending 20:", result2)
print("After sending 5:", result3)

# Close the generator
acc.close()
print("Generator closed")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `After sending 10: 10
After sending 20: 30
After sending 5: 35
Generator closed`
    },
    {
      type: 'code',
      title: 'Generator Pipeline',
      language: 'python',
      code: `# Chain generators to create data processing pipeline
def number_source(start, end):
    """Generate numbers in range"""
    for num in range(start, end + 1):
        yield num

def filter_evens(numbers):
    """Filter even numbers from input generator"""
    for num in numbers:
        if num % 2 == 0:
            yield num

def square_numbers(numbers):
    """Square numbers from input generator"""
    for num in numbers:
        yield num * num

def take_first(generator, count):
    """Take first 'count' items from generator"""
    for i, item in enumerate(generator):
        if i >= count:
            break
        yield item

# Create processing pipeline
source = number_source(1, 20)
evens = filter_evens(source)
squares = square_numbers(evens)
result = take_first(squares, 5)

# Execute pipeline
final_result = list(result)
print("Pipeline result:", final_result)
print("First 5 even squares:", final_result)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Pipeline result: [4, 16, 36, 64, 100]
First 5 even squares: [4, 16, 36, 64, 100]`
    },
    {
      type: 'text',
      title: 'Practical Generator Applications',
      content: `Generators excel in many real-world scenarios:

**File Processing:**
- Read large files line by line
- Process log files without loading into memory
- Parse CSV or JSON data streams

**Data Analysis:**
- Generate test data for experiments
- Create sample datasets on demand
- Process large datasets in chunks

**Web Scraping:**
- Paginate through API results
- Stream data from multiple sources
- Handle rate-limited requests

**Mathematical Sequences:**
- Generate infinite sequences
- Calculate series and progressions
- Create statistical samples`
    },
    {
      type: 'code',
      title: 'File Line Processor Generator',
      language: 'python',
      code: `# Generator for processing file-like data
def process_lines(lines):
    """Process lines of text data"""
    line_number = 0
    for line in lines:
        line_number = line_number + 1
        cleaned = line.strip()
        if cleaned:  # Skip empty lines
            yield {
                "line_num": line_number,
                "content": cleaned,
                "word_count": len(cleaned.split()),
                "char_count": len(cleaned)
            }

def analyze_text(line_data):
    """Analyze processed line data"""
    for data in line_data:
        analysis = data.copy()
        analysis["is_long"] = data["word_count"] > 5
        analysis["is_short"] = data["word_count"] <= 3
        yield analysis

# Simulate file data
mock_file_lines = [
    "This is the first line",
    "",
    "Short line",
    "This is a much longer line with many words in it",
    "End"
]

# Process with generator pipeline
processed = process_lines(mock_file_lines)
analyzed = analyze_text(processed)
results = list(analyzed)

# Display results
for result in results:
    line_info = "Line " + str(result["line_num"]) + ": " + str(result["word_count"]) + " words"
    print(line_info)

print("Total lines processed:", len(results))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Line 1: 5 words
Line 3: 2 words
Line 4: 10 words
Line 5: 1 words
Total lines processed: 4`
    },
    {
      type: 'code',
      title: 'Infinite Generator Example',
      language: 'python',
      code: `# Generator that produces infinite sequence
def infinite_counter(start=0, step=1):
    """Generate infinite sequence of numbers"""
    current = start
    while True:
        yield current
        current = current + step

def collatz_sequence(n):
    """Generate Collatz sequence for given number"""
    while n != 1:
        yield n
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3 * n + 1
    yield 1  # Final 1

# Use infinite generator with limits
counter = infinite_counter(10, 3)
first_10 = []
for i, value in enumerate(counter):
    if i >= 10:
        break
    first_10.append(value)

# Generate Collatz sequence
collatz = list(collatz_sequence(13))

print("First 10 values (start=10, step=3):", first_10)
print("Collatz sequence for 13:", collatz)
print("Collatz length:", len(collatz))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `First 10 values (start=10, step=3): [10, 13, 16, 19, 22, 25, 28, 31, 34, 37]
Collatz sequence for 13: [13, 40, 20, 10, 5, 16, 8, 4, 2, 1]
Collatz length: 10`
    },
    {
      type: 'code',
      title: 'Data Batch Generator',
      language: 'python',
      code: `# Generator for processing data in batches
def batch_generator(data, batch_size):
    """Yield data in batches of specified size"""
    for i in range(0, len(data), batch_size):
        batch = data[i:i + batch_size]
        yield batch

def process_batch(batch, batch_num):
    """Process a single batch of data"""
    batch_sum = sum(batch)
    batch_avg = batch_sum / len(batch)
    
    return {
        "batch_number": batch_num,
        "size": len(batch),
        "sum": batch_sum,
        "average": round(batch_avg, 2),
        "min": min(batch),
        "max": max(batch)
    }

# Large dataset simulation
large_dataset = list(range(1, 26))  # Numbers 1-25

# Process in batches
batch_size = 6
batch_results = []
batch_count = 0

for batch in batch_generator(large_dataset, batch_size):
    batch_count = batch_count + 1
    result = process_batch(batch, batch_count)
    batch_results.append(result)

# Display results
for result in batch_results:
    batch_info = "Batch " + str(result["batch_number"]) + ": " + str(result["size"]) + " items, avg=" + str(result["average"])
    print(batch_info)

print("Total batches processed:", len(batch_results))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Batch 1: 6 items, avg=3.5
Batch 2: 6 items, avg=9.5
Batch 3: 6 items, avg=15.5
Batch 4: 6 items, avg=21.5
Batch 5: 1 items, avg=25.0
Total batches processed: 5`
    }
  ],
  keyTakeaways: [
    'Generator functions use yield to create memory-efficient iterators',
    'Generators preserve state between yields and support lazy evaluation',
    'Generator expressions provide concise syntax for simple generators',
    'Advanced features include send(), throw(), and close() for two-way communication',
    'Generator pipelines enable efficient data processing workflows',
    'Infinite generators can produce unlimited sequences with proper termination conditions'
  ]
};