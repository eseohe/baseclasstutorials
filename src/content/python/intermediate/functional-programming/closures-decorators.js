// Lesson content for Closures and Decorators
export const closuresDecoratorsContent = {
  id: 'closures-decorators',
  title: 'Closures and Decorators',
  duration: '35 min',
  overview: `Master closures and decorators in Python! Learn how functions can capture and maintain access to their surrounding scope, create powerful decorator patterns, and build reusable function enhancements for logging, timing, validation, and more.`,
  objectives: [
    'Understand closures and how they capture enclosing scope',
    'Create and use closure-based function factories',
    'Master Python decorator syntax and patterns',
    'Write custom decorators for common use cases',
    'Use functools.wraps to preserve function metadata',
    'Apply decorators for logging, timing, validation, and caching',
  ],
  sections: [
    {
      type: 'text',
      title: 'Understanding Closures',
      content: `Closures are functions that capture and retain access to variables from their enclosing scope, even after the outer function has finished executing. This creates a powerful pattern for creating stateful functions and function factories.

**How closures work:**
- **Inner function**: Defined inside another function
- **Free variables**: Variables from enclosing scope used by inner function
- **Scope capture**: Inner function retains access to these variables
- **Persistence**: Variables remain accessible even after outer function returns

**Key characteristics:**
- **State preservation**: Maintain private state between function calls
- **Encapsulation**: Hide implementation details from outside access
- **Customization**: Create specialized functions with preset configurations
- **Memory**: Each closure maintains its own copy of captured variables

**Common use cases:**
- Function factories that create customized functions
- Event handlers with preserved context
- Private state management
- Configuration and setup functions`
    },
    {
      type: 'code',
      title: 'Basic Closure Example',
      language: 'python',
      code: `# Basic closure demonstration
def create_counter(start=0):
    """Create a counter function with captured state"""
    count = start
    
    def counter():
        nonlocal count
        count = count + 1
        return count
    
    return counter

def create_accumulator(initial_value=0):
    """Create an accumulator function that adds to running total"""
    total = initial_value
    
    def accumulate(value):
        nonlocal total
        total = total + value
        return total
    
    return accumulate

# Create closure instances
counter1 = create_counter(10)
counter2 = create_counter(100)
accumulator = create_accumulator(50)

# Use closures - each maintains its own state
print("Counter 1:", counter1())  # 11
print("Counter 1:", counter1())  # 12
print("Counter 2:", counter2())  # 101
print("Counter 1:", counter1())  # 13

print("\\nAccumulator starting at 50:")
print("Add 10:", accumulator(10))  # 60
print("Add 25:", accumulator(25))  # 85`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Counter 1: 11
Counter 1: 12
Counter 2: 101
Counter 1: 13

Accumulator starting at 50:
Add 10: 60
Add 25: 85`
    },
    {
      type: 'code',
      title: 'Closure Function Factories',
      language: 'python',
      code: `# Closure-based function factories
def create_validator(min_val, max_val, error_message):
    """Create a validation function with custom parameters"""
    def validate(value):
        if min_val <= value <= max_val:
            return True, "Valid"
        else:
            return False, error_message
    
    return validate

def create_converter(from_unit, to_unit, conversion_factor):
    """Create a unit conversion function"""
    def convert(value):
        converted = value * conversion_factor
        return str(value) + " " + from_unit + " = " + str(converted) + " " + to_unit
    
    return convert

def create_discount_calculator(discount_rate, min_amount=0):
    """Create a discount calculator with preset rates"""
    def calculate_discount(amount):
        if amount >= min_amount:
            discount = amount * discount_rate
            final_price = amount - discount
            return {
                "original": amount,
                "discount": round(discount, 2),
                "final": round(final_price, 2)
            }
        else:
            return {
                "original": amount,
                "discount": 0,
                "final": amount
            }
    
    return calculate_discount

# Create specialized functions using closures
age_validator = create_validator(0, 120, "Age must be between 0 and 120")
score_validator = create_validator(0, 100, "Score must be between 0 and 100")

celsius_to_fahrenheit = create_converter("°C", "°F", 1.8)
kg_to_pounds = create_converter("kg", "lbs", 2.20462)

student_discount = create_discount_calculator(0.1, 50)  # 10% off $50+
premium_discount = create_discount_calculator(0.2, 100)  # 20% off $100+

# Test the closure-created functions
test_ages = [25, -5, 150]
test_scores = [85, 105]

print("Age validation:")
for age in test_ages:
    valid, message = age_validator(age)
    print("  Age " + str(age) + ": " + message)

print("\\nUnit conversions:")
print("  " + celsius_to_fahrenheit(25))
print("  " + kg_to_pounds(70))

print("\\nDiscount calculations:")
amounts = [30, 75, 150]
for amount in amounts:
    student_result = student_discount(amount)
    print("  $" + str(amount) + " with student discount: $" + str(student_result["final"]))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Age validation:
  Age 25: Valid
  Age -5: Age must be between 0 and 120
  Age 150: Age must be between 0 and 120

Unit conversions:
  25 °C = 45.0 °F
  70 kg = 154.3234 lbs

Discount calculations:
  $30 with student discount: $30
  $75 with student discount: $67.5
  $150 with student discount: $135.0`
    },
    {
      type: 'text',
      title: 'Introduction to Decorators',
      content: `Decorators are a special application of closures that allow you to modify or enhance functions without changing their code. They provide a clean, reusable way to add functionality to existing functions.

**What decorators do:**
- **Wrap functions**: Add behavior before, after, or around function execution
- **Preserve interface**: Keep the original function's signature
- **Enhance functionality**: Add logging, timing, validation, caching, etc.
- **Reusable**: Apply the same enhancement to multiple functions

**Decorator syntax:**
- **Function syntax**: \`decorated_func = decorator(original_func)\`
- **@ syntax**: \`@decorator\` placed before function definition
- **Chaining**: Multiple decorators can be applied to one function

**Common decorator patterns:**
- **Logging**: Record function calls and results
- **Timing**: Measure function execution time
- **Validation**: Check arguments before execution
- **Caching**: Store and reuse function results
- **Authentication**: Verify permissions before execution`
    },
    {
      type: 'code',
      title: 'Basic Decorator Pattern',
      language: 'python',
      code: `# Basic decorator implementation
def simple_logger(func):
    """A decorator that logs function calls"""
    def wrapper(*args, **kwargs):
        print("Calling function:", func.__name__)
        result = func(*args, **kwargs)
        print("Function", func.__name__, "completed")
        return result
    return wrapper

def timer_decorator(func):
    """A decorator that measures execution time"""
    import time
    
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        execution_time = round((end_time - start_time) * 1000, 2)
        print("Function", func.__name__, "took", execution_time, "ms")
        return result
    return wrapper

# Apply decorators using function syntax
def add_numbers(a, b):
    return a + b

def multiply_numbers(a, b):
    return a * b

# Decorate functions manually
logged_add = simple_logger(add_numbers)
timed_multiply = timer_decorator(multiply_numbers)

# Test decorated functions
print("Testing manually decorated functions:")
result1 = logged_add(5, 3)
print("Result:", result1)

print("\\nTesting timed function:")
result2 = timed_multiply(4, 7)
print("Result:", result2)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Testing manually decorated functions:
Calling function: add_numbers
Function add_numbers completed
Result: 8

Testing timed function:
Function multiply_numbers took 0.01 ms
Result: 28`
    },
    {
      type: 'code',
      title: 'Using @ Decorator Syntax',
      language: 'python',
      code: `# Using @ syntax for cleaner decorator application
def debug_decorator(func):
    """Decorator that shows function arguments and return values"""
    def wrapper(*args, **kwargs):
        print("DEBUG: Calling", func.__name__)
        print("DEBUG: Arguments:", args, kwargs)
        result = func(*args, **kwargs)
        print("DEBUG: Return value:", result)
        return result
    return wrapper

def validate_positive(func):
    """Decorator that validates all arguments are positive numbers"""
    def wrapper(*args, **kwargs):
        # Check all positional arguments
        for arg in args:
            if not isinstance(arg, (int, float)) or arg <= 0:
                return "Error: All arguments must be positive numbers"
        
        # Check all keyword arguments  
        for value in kwargs.values():
            if not isinstance(value, (int, float)) or value <= 0:
                return "Error: All arguments must be positive numbers"
        
        return func(*args, **kwargs)
    return wrapper

# Apply decorators using @ syntax
@debug_decorator
def calculate_area(length, width):
    """Calculate rectangle area"""
    return length * width

@validate_positive
def calculate_discount(price, discount_rate):
    """Calculate discounted price"""
    discount = price * discount_rate
    return price - discount

@debug_decorator
@validate_positive
def calculate_compound_interest(principal, rate, time):
    """Calculate compound interest"""
    return principal * (1 + rate) ** time

# Test decorated functions
print("Testing area calculation:")
area = calculate_area(5, 3)

print("\\nTesting discount calculation:")
valid_discount = calculate_discount(100, 0.1)
invalid_discount = calculate_discount(-50, 0.1)
print("Valid discount result:", valid_discount)
print("Invalid discount result:", invalid_discount)

print("\\nTesting compound interest (multiple decorators):")
interest = calculate_compound_interest(1000, 0.05, 2)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Testing area calculation:
DEBUG: Calling calculate_area
DEBUG: Arguments: (5, 3) {}
DEBUG: Return value: 15

Testing discount calculation:
Valid discount result: 90.0
Invalid discount result: Error: All arguments must be positive numbers

Testing compound interest (multiple decorators):
DEBUG: Calling wrapper
DEBUG: Arguments: (1000, 0.05, 2) {}
DEBUG: Return value: 1102.5`
    },
    {
      type: 'text',
      title: 'Decorators with Parameters',
      content: `Decorators can accept parameters to customize their behavior. This is accomplished by creating a decorator factory - a function that returns a decorator based on the provided parameters.

**Parameterized decorator pattern:**
1. **Outer function**: Accepts parameters for customization
2. **Middle function**: The actual decorator (receives the function to decorate)
3. **Inner function**: The wrapper that executes when decorated function is called

**Syntax:**
\`@decorator_factory(param1, param2)\`
\`def my_function(): pass\`

**Benefits:**
- **Customizable behavior**: Same decorator, different configurations
- **Reusable**: One decorator factory, many variations
- **Flexible**: Parameters can control decorator behavior

**Common parameterized decorators:**
- Retry with configurable attempts
- Rate limiting with custom limits
- Caching with custom expiration times
- Logging with different log levels`
    },
    {
      type: 'code',
      title: 'Parameterized Decorators',
      language: 'python',
      code: `# Decorators with parameters (decorator factories)
def retry(max_attempts=3, delay=1):
    """Decorator factory that retries function on failure"""
    def decorator(func):
        def wrapper(*args, **kwargs):
            import time
            
            for attempt in range(max_attempts):
                try:
                    result = func(*args, **kwargs)
                    if attempt > 0:
                        print("Success on attempt", attempt + 1)
                    return result
                except Exception as e:
                    print("Attempt", attempt + 1, "failed:", str(e))
                    if attempt < max_attempts - 1:
                        print("Retrying in", delay, "second(s)...")
                        time.sleep(delay)
                    else:
                        print("All attempts failed")
                        raise e
        return wrapper
    return decorator

def log_calls(log_level="INFO", include_args=True):
    """Decorator factory for configurable logging"""
    def decorator(func):
        def wrapper(*args, **kwargs):
            if include_args:
                print("[" + log_level + "] Calling", func.__name__, "with args:", args, kwargs)
            else:
                print("[" + log_level + "] Calling", func.__name__)
            
            result = func(*args, **kwargs)
            print("[" + log_level + "] Function", func.__name__, "returned:", result)
            return result
        return wrapper
    return decorator

def validate_range(min_val=None, max_val=None):
    """Decorator factory for range validation"""
    def decorator(func):
        def wrapper(*args, **kwargs):
            # Validate all numeric arguments
            all_args = list(args) + list(kwargs.values())
            for arg in all_args:
                if isinstance(arg, (int, float)):
                    if min_val is not None and arg < min_val:
                        return "Error: Value " + str(arg) + " is below minimum " + str(min_val)
                    if max_val is not None and arg > max_val:
                        return "Error: Value " + str(arg) + " is above maximum " + str(max_val)
            
            return func(*args, **kwargs)
        return wrapper
    return decorator

# Apply parameterized decorators
@retry(max_attempts=2, delay=0.1)
def unreliable_function(x):
    """Simulates an unreliable function that might fail"""
    import random
    if random.random() < 0.7:  # 70% chance of failure
        raise Exception("Random failure occurred")
    return x * 2

@log_calls(log_level="DEBUG", include_args=True)
def add_three_numbers(a, b, c):
    return a + b + c

@validate_range(min_val=0, max_val=100)
def calculate_percentage(value, total):
    return round((value / total) * 100, 2)

# Test parameterized decorators
print("Testing retry decorator:")
try:
    result = unreliable_function(5)
    print("Final result:", result)
except:
    print("Function ultimately failed")

print("\\nTesting logging decorator:")
sum_result = add_three_numbers(10, 20, 30)

print("\\nTesting validation decorator:")
valid_percentage = calculate_percentage(25, 100)
invalid_percentage = calculate_percentage(150, 100)
print("Valid percentage:", valid_percentage)
print("Invalid percentage:", invalid_percentage)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Testing retry decorator:
Attempt 1 failed: Random failure occurred
Retrying in 0.1 second(s)...
Attempt 2 failed: Random failure occurred
All attempts failed
Function ultimately failed

Testing logging decorator:
[DEBUG] Calling add_three_numbers with args: (10, 20, 30) {}
[DEBUG] Function add_three_numbers returned: 60

Testing validation decorator:
Valid percentage: 25.0
Invalid percentage: Error: Value 150 is above maximum 100`
    },
    {
      type: 'text',
      title: 'Preserving Function Metadata with functools.wraps',
      content: `When decorators wrap functions, they can lose important metadata like the function name, docstring, and other attributes. The \`functools.wraps\` decorator solves this problem.

**The problem:**
- Decorated functions lose their original \`__name__\`
- Docstrings (\`__doc__\`) are lost
- Other attributes like \`__module__\` are overwritten
- Debugging and introspection become difficult

**The solution:**
- Use \`@functools.wraps(func)\` on the wrapper function
- Automatically copies metadata from original to wrapper
- Preserves function identity for debugging and documentation

**What gets preserved:**
- \`__name__\`: Function name
- \`__doc__\`: Docstring
- \`__module__\`: Module name
- \`__qualname__\`: Qualified name
- \`__annotations__\`: Type hints

**Best practice:**
- Always use \`functools.wraps\` in decorator implementations
- Essential for professional and maintainable code
- Required for proper documentation and debugging`
    },
    {
      type: 'code',
      title: 'Using functools.wraps',
      language: 'python',
      code: `# Proper decorator implementation with functools.wraps
import functools
import time

def timing_decorator_bad(func):
    """Bad decorator that doesn't preserve metadata"""
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print("Execution time:", round((end - start) * 1000, 2), "ms")
        return result
    return wrapper

def timing_decorator_good(func):
    """Good decorator that preserves metadata"""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print("Execution time:", round((end - start) * 1000, 2), "ms")
        return result
    return wrapper

def cache_decorator(func):
    """Decorator with caching and proper metadata preservation"""
    cache = {}
    
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        # Create cache key from arguments
        key = str(args) + str(sorted(kwargs.items()))
        
        if key in cache:
            print("Cache hit for", func.__name__)
            return cache[key]
        else:
            print("Cache miss for", func.__name__)
            result = func(*args, **kwargs)
            cache[key] = result
            return result
    
    # Add cache inspection method
    wrapper.cache_info = lambda: {"size": len(cache), "contents": cache}
    return wrapper

# Test functions with different decorators
@timing_decorator_bad
def slow_function_bad(n):
    """Calculate sum of squares up to n (bad decorator)"""
    total = 0
    for i in range(n):
        total = total + i * i
    return total

@timing_decorator_good
def slow_function_good(n):
    """Calculate sum of squares up to n (good decorator)"""
    total = 0
    for i in range(n):
        total = total + i * i
    return total

@cache_decorator
def fibonacci(n):
    """Calculate nth Fibonacci number with caching"""
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# Compare metadata preservation
print("Bad decorator metadata:")
print("  Name:", slow_function_bad.__name__)
print("  Doc:", slow_function_bad.__doc__)

print("\\nGood decorator metadata:")
print("  Name:", slow_function_good.__name__)
print("  Doc:", slow_function_good.__doc__)

print("\\nTesting cached fibonacci:")
result1 = fibonacci(10)
result2 = fibonacci(10)  # Should hit cache
print("Fibonacci(10):", result1)
print("Cache info:", fibonacci.cache_info())`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Bad decorator metadata:
  Name: wrapper
  Doc: None

Good decorator metadata:
  Name: slow_function_good
  Doc: Calculate sum of squares up to n (good decorator)

Testing cached fibonacci:
Cache miss for fibonacci
Cache miss for fibonacci
Cache miss for fibonacci
Cache miss for fibonacci
Cache miss for fibonacci
Cache miss for fibonacci
Cache miss for fibonacci
Cache miss for fibonacci
Cache miss for fibonacci
Cache hit for fibonacci
Cache hit for fibonacci
Fibonacci(10): 55
Cache info: {'size': 9, 'contents': {'(0,){}': 0, '(1,){}': 1, '(2,){}': 1, '(3,){}': 2, '(4,){}': 3, '(5,){}': 5, '(6,){}': 8, '(7,){}': 13, '(8,){}': 21}}`
    },
    {
      type: 'code',
      title: 'Real-World Decorator Examples',
      language: 'python',
      code: `# Practical decorators for real-world applications
import functools
import time

def rate_limit(calls_per_second=1):
    """Decorator to limit function call rate"""
    min_interval = 1.0 / calls_per_second
    
    def decorator(func):
        last_called = [0.0]
        
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            elapsed = time.time() - last_called[0]
            left_to_wait = min_interval - elapsed
            
            if left_to_wait > 0:
                print("Rate limiting: waiting", round(left_to_wait, 2), "seconds")
                time.sleep(left_to_wait)
            
            last_called[0] = time.time()
            return func(*args, **kwargs)
        
        return wrapper
    return decorator

def authenticate(required_role="user"):
    """Decorator that checks user authentication"""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # In real app, this would check actual authentication
            # For demo, we'll check if first arg has required role
            if args and hasattr(args[0], 'role'):
                user_role = args[0].role
                if user_role == required_role or user_role == "admin":
                    return func(*args, **kwargs)
                else:
                    return "Access denied: insufficient privileges"
            else:
                return "Access denied: authentication required"
        
        return wrapper
    return decorator

def input_validation(**validators):
    """Decorator for input validation with custom validators"""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # Get function parameter names
            func_params = func.__code__.co_varnames[:func.__code__.co_argcount]
            
            # Validate positional arguments
            for i, (param_name, arg_value) in enumerate(zip(func_params, args)):
                if param_name in validators:
                    validator = validators[param_name]
                    if not validator(arg_value):
                        return "Validation failed for parameter: " + param_name
            
            # Validate keyword arguments
            for param_name, arg_value in kwargs.items():
                if param_name in validators:
                    validator = validators[param_name]
                    if not validator(arg_value):
                        return "Validation failed for parameter: " + param_name
            
            return func(*args, **kwargs)
        
        return wrapper
    return decorator

# Example classes and functions for testing
class User:
    def __init__(self, name, role):
        self.name = name
        self.role = role

# Decorated functions
@rate_limit(calls_per_second=2)
def api_call(endpoint):
    """Simulate an API call"""
    return "Data from " + endpoint

@authenticate(required_role="admin")
def delete_user(user, target_user_id):
    """Delete a user (admin only)"""
    return "User " + str(target_user_id) + " deleted by " + user.name

@input_validation(
    amount=lambda x: isinstance(x, (int, float)) and x > 0,
    account=lambda x: isinstance(x, str) and len(x) > 0
)
def transfer_money(amount, account):
    """Transfer money with input validation"""
    return "Transferred $" + str(amount) + " to " + account

# Test the decorators
print("Testing rate limiting:")
for i in range(3):
    result = api_call("users/" + str(i))
    print("  " + result)

print("\\nTesting authentication:")
admin_user = User("Alice", "admin")
regular_user = User("Bob", "user")

admin_result = delete_user(admin_user, 123)
user_result = delete_user(regular_user, 123)
print("  Admin delete:", admin_result)
print("  User delete:", user_result)

print("\\nTesting input validation:")
valid_transfer = transfer_money(100.50, "account123")
invalid_transfer = transfer_money(-50, "account123")
print("  Valid transfer:", valid_transfer)
print("  Invalid transfer:", invalid_transfer)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Testing rate limiting:
  Data from users/0
Rate limiting: waiting 0.5 seconds
  Data from users/1
Rate limiting: waiting 0.5 seconds
  Data from users/2

Testing authentication:
  Admin delete: User 123 deleted by Alice
  User delete: Access denied: insufficient privileges

Testing input validation:
  Valid transfer: Transferred $100.5 to account123
  Invalid transfer: Validation failed for parameter: amount`
    }
  ],
  keyTakeaways: [
    'Closures capture variables from enclosing scope and maintain access after outer function returns',
    'Decorators use closures to wrap and enhance functions without modifying their code',
    'The @ syntax provides clean decorator application: @decorator above function definition',
    'Parameterized decorators use decorator factories to create customizable decorators',
    'functools.wraps preserves original function metadata in decorator implementations',
    'Common decorator use cases include logging, timing, validation, authentication, and caching'
  ]
};