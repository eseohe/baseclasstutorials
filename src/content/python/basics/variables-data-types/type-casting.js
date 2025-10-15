// Lesson content for Type casting and dynamic typing
export const typeCastingContent = {
  id: 'type-casting',
  title: 'Type Casting and Dynamic Typing',
  duration: '8 min',
  overview: `Explore Python's dynamic typing system and learn type conversion techniques with practical examples.`,
  objectives: [
    'Understand explicit type casting with int(), float(), str(), bool()',
    'Learn how Python\'s dynamic typing affects variable behavior',
    'Practice type conversion with different data types',
    'Recognize when implicit type conversions occur in operations',
  ],
  sections: [
    {
      type: 'text',
      title: 'Explicit vs Implicit Type Conversion',
      content: `Python handles type conversion in two ways:

**Explicit Type Casting** - You manually convert types using int(), float(), str(), bool()
**Implicit Type Conversion** - Python automatically converts types during operations (like mixing int and float in arithmetic)

Since we've covered the basics of type conversion, let's focus on more advanced scenarios and best practices.`
    },
    {
      type: 'code',
      title: 'Basic Implicit Conversion',
      language: 'python',
      code: `# Python automatically converts types when needed
integer_num = 10
float_num = 3.5

# int + float = float (automatic conversion)
result = integer_num + float_num
print("10 + 3.5 =", result)
print("Result type:", type(result))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `10 + 3.5 = 13.5
Result type: <class 'float'>`
    },
    {
      type: 'code',
      title: 'More Arithmetic Conversion',
      language: 'python',
      code: `# More arithmetic with automatic conversion
num1 = 20        # int
num2 = 4.0       # float
sum_result = num1 + num2

print("20 + 4.0 =", sum_result)
print("Result type:", type(sum_result))

# Division always produces float
div_result = 10 / 2
print("10 / 2 =", div_result, type(div_result))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `20 + 4.0 = 24.0
Result type: <class 'float'>
10 / 2 = 5.0 <class 'float'>`
    },
    {
      type: 'code',
      title: 'String Operations Need Conversion',
      language: 'python',
      code: `# String operations (no automatic conversion)
name = "Age: "
age = 25

# Must convert number to string first
print(name + str(age))  # Explicit conversion needed

# Another example
score = 95
message = "Your score is: "
print(message + str(score))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Age: 25
Your score is: 95`
    },
    {
      type: 'text',
      title: 'Type Conversion Examples',
      content: `Type conversion lets you change data from one type to another. Some conversions work easily, while others may not work as expected:`
    },
    {
      type: 'code',
      title: 'String to Number Conversion',
      language: 'python',
      code: `# Converting between numbers and strings
number_str = "123"
print("String:", number_str, type(number_str))
number_int = int(number_str)
print("As integer:", number_int, type(number_int))

decimal_str = "45.7"
print("String:", decimal_str, type(decimal_str))
decimal_float = float(decimal_str)
print("As float:", decimal_float, type(decimal_float))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `String: 123 <class 'str'>
As integer: 123 <class 'int'>
String: 45.7 <class 'str'>
As float: 45.7 <class 'float'>`
    },
    {
      type: 'code',
      title: 'Number to String Conversion',
      language: 'python',
      code: `# Converting numbers to strings
age = 25
age_str = str(age)
print("Number:", age, type(age))
print("As string:", age_str, type(age_str))

price = 29.99
price_str = str(price)
print("Float:", price, type(price))
print("As string:", price_str, type(price_str))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Number: 25 <class 'int'>
As string: 25 <class 'str'>
Float: 29.99 <class 'float'>
As string: 29.99 <class 'str'>`
    },
    {
      type: 'code',
      title: 'Boolean Conversions',
      language: 'python',
      code: `# Boolean conversions
print("bool(1):", bool(1))
print("bool(0):", bool(0))
print("bool('hello'):", bool("hello"))
print("bool(''):", bool(""))
print("bool(42):", bool(42))
print("bool(0.0):", bool(0.0))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `bool(1): True
bool(0): False
bool('hello'): True
bool(''): False
bool(42): True
bool(0.0): False`
    },
    {
      type: 'text',
      title: 'Dynamic Typing Benefits and Challenges',
      content: `Python's dynamic typing makes code flexible but requires careful attention to avoid unexpected behavior.

**Benefits:**
- Variables can store any type of data
- Less verbose code (no type declarations)
- Easy to write quick scripts and prototypes

**Challenges:**
- Type-related bugs can be harder to catch
- Variables can change meaning in your program
- Performance can be slower than statically typed languages`
    },
    {
      type: 'code',
      title: 'Variable Type Changes',
      language: 'python',
      code: `# Variable changes meaning throughout the program
data = "Hello World"       # String
print("Initial:", data, type(data))

# Same variable can hold different types
data = 42                  # Now it's an integer
print("As number:", data, type(data))

data = True                # Now it's a boolean
print("As boolean:", data, type(data))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Initial: Hello World <class 'str'>
As number: 42 <class 'int'>
As boolean: True <class 'bool'>`
    },
    {
      type: 'code',
      title: 'Converting Between Types',
      language: 'python',
      code: `# Continue with the same variable
data = float(data)         # Convert boolean to float
print("As float:", data, type(data))

# Convert back to string
data = str(data)
print("Back to string:", data, type(data))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `As float: 1.0 <class 'float'>
Back to string: 1.0 <class 'str'>`
    },
    {
      type: 'code',
      title: 'Type Mixing in Operations',
      language: 'python',
      code: `# Example of type mixing in operations
score1 = 85               # int
score2 = 92.5            # float
average = (score1 + score2) / 2    # Result is float

print("Score 1:", score1, type(score1))
print("Score 2:", score2, type(score2))
print("Average score:", average, type(average))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Score 1: 85 <class 'int'>
Score 2: 92.5 <class 'float'>
Average score: 88.75 <class 'float'>`
    },
    {
      type: 'text',
      title: 'Type Conversion Tips',
      content: `Keep these important points in mind when working with type conversion:

**✅ Remember:**
- Use descriptive variable names that hint at the data type
- int() works with number strings like "123" but not "12.5"
- float() works with both "123" and "12.5"
- str() can convert any value to a string
- bool() follows truthiness rules (empty/zero = False)

**❌ Watch out for:**
- Converting text like "hello" to numbers (causes errors)
- Mixing strings and numbers without conversion
- Forgetting that bool values True/False act like 1/0 in math`
    },
    {
      type: 'highlight',
      title: 'Type Conversion Quick Reference',
      items: [
        "int('123') → 123, converts string numbers to integers",
        "float('12.5') → 12.5, converts strings to decimal numbers", 
        "str(123) → '123', converts any value to string text",
        "bool(1) → True, bool(0) → False (truthiness rules)",
        "Python auto-converts int to float in math: 10 + 3.5 = 13.5",
        "Always convert before mixing strings and numbers"
      ]
    }
  ],
  resources: [
    {
      title: 'Type Conversion Functions',
      url: 'https://docs.python.org/3/library/functions.html#type'
    },
    {
      title: 'Understanding Dynamic Typing',
      url: 'https://realpython.com/python-data-types/'
    }
  ]
};