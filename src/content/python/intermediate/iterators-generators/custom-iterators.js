// Lesson content for Custom Iterators
export const customIteratorsContent = {
  id: 'custom-iterators',
  title: 'Custom Iterators',
  duration: '28 min',
  overview: `Learn to create your own custom iterator classes! Master the iterator protocol by implementing __iter__ and __next__ methods to build powerful, memory-efficient iteration patterns for your applications.`,
  objectives: [
    'Implement the iterator protocol in custom classes',
    'Create iterators with __iter__ and __next__ methods',
    'Handle StopIteration exceptions properly',
    'Build practical iterators for real-world scenarios',
    'Understand iterator state management and reusability',
    'Design efficient memory-conscious iteration patterns',
  ],
  sections: [
    {
      type: 'text',
      title: 'Creating Custom Iterator Classes',
      content: `Custom iterators allow you to define exactly how objects are iterated over. This gives you complete control over the iteration process and enables memory-efficient data processing.

**Iterator Protocol Requirements:**
- **__iter__()**: Returns the iterator object (usually self)
- **__next__()**: Returns the next value in the sequence
- **StopIteration**: Raised when no more items are available

**Benefits of Custom Iterators:**
- **Memory efficiency**: Process large datasets without loading everything into memory
- **Lazy evaluation**: Compute values only when needed
- **Custom logic**: Implement complex iteration patterns
- **State management**: Maintain iteration position and context

**Design considerations:**
- Should the iterator be reusable or single-use?
- How to handle edge cases and invalid states?
- What happens when iteration completes?`
    },
    {
      type: 'code',
      title: 'Basic Custom Iterator',
      language: 'python',
      code: `# Simple custom iterator that counts up to a limit
class CountUp:
    def __init__(self, limit):
        self.limit = limit
        self.current = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current < self.limit:
            result = self.current
            self.current = self.current + 1
            return result
        else:
            raise StopIteration

# Using the custom iterator
counter = CountUp(3)
for num in counter:
    print("Count:", num)

print("Iterator finished")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Count: 0
Count: 1
Count: 2
Iterator finished`
    },
    {
      type: 'code',
      title: 'Iterator with Step Size',
      language: 'python',
      code: `# Iterator that increments by a custom step
class StepCounter:
    def __init__(self, start, stop, step):
        self.start = start
        self.stop = stop
        self.step = step
        self.current = start
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current < self.stop:
            result = self.current
            self.current = self.current + self.step
            return result
        else:
            raise StopIteration

# Create iterator and convert to list
stepper = StepCounter(0, 10, 2)
numbers = list(stepper)

print("Step counter result:", numbers)
print("Total numbers generated:", len(numbers))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Step counter result: [0, 2, 4, 6, 8]
Total numbers generated: 5`
    },
    {
      type: 'text',
      title: 'Reusable vs Single-Use Iterators',
      content: `There are two main patterns for custom iterators:

**Single-Use Iterators:**
- Iterator modifies its own state during iteration
- Can only be used once
- More memory efficient
- Common pattern for large datasets

**Reusable Iterators:**
- Create fresh iterator objects each time
- Can be iterated multiple times
- Slightly more complex to implement
- Better for smaller, frequently-accessed data

**Implementation approaches:**
- **Single-use**: __iter__ returns self, __next__ modifies state
- **Reusable**: __iter__ returns new iterator instance`
    },
    {
      type: 'code',
      title: 'Reusable Iterator Pattern',
      language: 'python',
      code: `# Reusable iterator that can be used multiple times
class Squares:
    def __init__(self, limit):
        self.limit = limit
    
    def __iter__(self):
        return SquareIterator(self.limit)

class SquareIterator:
    def __init__(self, limit):
        self.limit = limit
        self.current = 1
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current <= self.limit:
            result = self.current * self.current
            self.current = self.current + 1
            return result
        else:
            raise StopIteration

# Create reusable iterator
squares = Squares(4)

# Use it multiple times
first_run = list(squares)
second_run = list(squares)

print("First run:", first_run)
print("Second run:", second_run)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `First run: [1, 4, 9, 16]
Second run: [1, 4, 9, 16]`
    },
    {
      type: 'code',
      title: 'Fibonacci Iterator',
      language: 'python',
      code: `# Iterator that generates Fibonacci sequence
class Fibonacci:
    def __init__(self, count):
        self.count = count
        self.current = 0
        self.a, self.b = 0, 1
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current < self.count:
            if self.current == 0:
                self.current = self.current + 1
                return self.a
            elif self.current == 1:
                self.current = self.current + 1
                return self.b
            else:
                next_value = self.a + self.b
                self.a, self.b = self.b, next_value
                self.current = self.current + 1
                return next_value
        else:
            raise StopIteration

# Generate first 8 Fibonacci numbers
fib = Fibonacci(8)
fib_sequence = list(fib)

print("Fibonacci sequence:", fib_sequence)
print("8th Fibonacci number:", fib_sequence[-1])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Fibonacci sequence: [0, 1, 1, 2, 3, 5, 8, 13]
8th Fibonacci number: 13`
    },
    {
      type: 'text',
      title: 'Practical Iterator Applications',
      content: `Custom iterators are extremely useful for real-world programming scenarios:

**File Processing:**
- Reading large files line by line without loading into memory
- Processing CSV files, logs, or data streams
- Handling files that are too large for available RAM

**Data Generation:**
- Creating test data or sample datasets
- Generating mathematical sequences
- Creating random data streams

**API and Database Access:**
- Paginating through API results
- Fetching database records in batches
- Processing streaming data sources

**Performance Benefits:**
- **Lazy evaluation**: Values computed only when needed
- **Memory efficiency**: Only current item in memory
- **Scalability**: Handle unlimited data sizes`
    },
    {
      type: 'code',
      title: 'File Line Iterator',
      language: 'python',
      code: `# Iterator for processing file lines efficiently
class FileLineIterator:
    def __init__(self, filename):
        self.filename = filename
        self.file = None
        self.line_count = 0
    
    def __iter__(self):
        try:
            self.file = open(self.filename, 'r')
            return self
        except FileNotFoundError:
            return iter([])  # Return empty iterator if file not found
    
    def __next__(self):
        if self.file is None:
            raise StopIteration
        
        line = self.file.readline()
        if line:
            self.line_count = self.line_count + 1
            return line.strip()
        else:
            self.file.close()
            raise StopIteration

# Simulate file processing (without actual file)
class MockFileIterator:
    def __init__(self, lines):
        self.lines = lines
        self.index = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.index < len(self.lines):
            result = self.lines[self.index]
            self.index = self.index + 1
            return result
        else:
            raise StopIteration

# Process mock file data
mock_file = MockFileIterator(["Line 1", "Line 2", "Line 3"])
processed_lines = []
for line in mock_file:
    processed_lines.append("Processed: " + line)

print("File processing complete")
print("Lines processed:", len(processed_lines))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `File processing complete
Lines processed: 3`
    },
    {
      type: 'code',
      title: 'Batch Data Iterator',
      language: 'python',
      code: `# Iterator that yields data in batches
class BatchIterator:
    def __init__(self, data, batch_size):
        self.data = data
        self.batch_size = batch_size
        self.index = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.index >= len(self.data):
            raise StopIteration
        
        # Get the next batch
        batch_end = min(self.index + self.batch_size, len(self.data))
        batch = self.data[self.index:batch_end]
        self.index = batch_end
        
        return batch

# Process data in batches
data = list(range(1, 13))  # Numbers 1-12
batch_processor = BatchIterator(data, 4)

batch_number = 1
total_processed = 0
for batch in batch_processor:
    batch_sum = sum(batch)
    total_processed = total_processed + len(batch)
    print("Batch " + str(batch_number) + ":", batch)
    batch_number = batch_number + 1

print("Total items processed:", total_processed)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Batch 1: [1, 2, 3, 4]
Batch 2: [5, 6, 7, 8]
Batch 3: [9, 10, 11, 12]
Total items processed: 12`
    },
    {
      type: 'code',
      title: 'Filtering Iterator',
      language: 'python',
      code: `# Iterator that filters values based on a condition
class FilterIterator:
    def __init__(self, data, condition_func):
        self.data = data
        self.condition_func = condition_func
        self.index = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        while self.index < len(self.data):
            current_item = self.data[self.index]
            self.index = self.index + 1
            
            if self.condition_func(current_item):
                return current_item
        
        raise StopIteration

# Define condition functions
def is_even(x):
    return x % 2 == 0

def is_positive(x):
    return x > 0

# Filter numbers
numbers = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6]
even_filter = FilterIterator(numbers, is_even)
positive_filter = FilterIterator(numbers, is_positive)

even_numbers = list(even_filter)
positive_numbers = list(positive_filter)

print("Even numbers:", even_numbers)
print("Positive numbers:", positive_numbers)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Even numbers: [-2, 0, 2, 4, 6]
Positive numbers: [1, 2, 3, 4, 5, 6]`
    },
    {
      type: 'text',
      title: 'Iterator Best Practices',
      content: `Follow these best practices when creating custom iterators:

**Error Handling:**
- Always handle StopIteration properly
- Consider edge cases (empty data, invalid inputs)
- Provide meaningful error messages

**Resource Management:**
- Close files, database connections, or other resources
- Use try/finally blocks or context managers when appropriate

**Performance Considerations:**
- Keep __next__ method efficient
- Avoid unnecessary computations
- Consider memory usage for large datasets

**Design Patterns:**
- Make iterators predictable and intuitive
- Document expected behavior clearly
- Follow Python conventions and naming standards

**Testing:**
- Test empty sequences and single-item sequences
- Verify proper StopIteration handling
- Test reusability if applicable`
    },
    {
      type: 'code',
      title: 'Complete Iterator Example',
      language: 'python',
      code: `# Comprehensive iterator for processing numerical data
class DataProcessor:
    def __init__(self, data, transform_func=None, filter_func=None):
        self.data = data
        self.transform_func = transform_func
        self.filter_func = filter_func
        self.index = 0
        self.processed_count = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        while self.index < len(self.data):
            current_item = self.data[self.index]
            self.index = self.index + 1
            
            # Apply filter if provided
            if self.filter_func and not self.filter_func(current_item):
                continue
            
            # Apply transformation if provided
            if self.transform_func:
                result = self.transform_func(current_item)
            else:
                result = current_item
            
            self.processed_count = self.processed_count + 1
            return result
        
        raise StopIteration
    
    def get_stats(self):
        return {
            "total_items": len(self.data),
            "processed_items": self.processed_count,
            "completion_rate": round((self.processed_count / len(self.data)) * 100, 1)
        }

# Define processing functions
def square(x):
    return x * x

def is_odd(x):
    return x % 2 == 1

# Process data with custom iterator
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
processor = DataProcessor(data, square, is_odd)

results = list(processor)
stats = processor.get_stats()

print("Processed results:", results)
print("Processing stats:", stats)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Processed results: [1, 9, 25, 49, 81]
Processing stats: {'total_items': 10, 'processed_items': 5, 'completion_rate': 50.0}`
    }
  ],
  keyTakeaways: [
    'Custom iterators implement __iter__ and __next__ methods to control iteration behavior',
    'StopIteration exception signals the end of iteration sequence',
    'Single-use iterators modify their own state; reusable iterators create fresh instances',
    'Custom iterators enable memory-efficient processing of large datasets',
    'Real-world applications include file processing, data batching, and filtering',
    'Proper error handling and resource management are essential for robust iterators'
  ]
};