// Lesson content for Checking and converting data types
export const checkingConvertingTypesContent = {
  id: 'checking-converting-types',
  title: 'Checking and Converting Data Types',
  duration: '7 min',
  overview: `Learn advanced type checking techniques using isinstance() to check data types more flexibly than type().`,
  objectives: [
    'Use isinstance() for reliable type checking',
    'Compare type() vs isinstance() approaches',
    'Check multiple types at once with isinstance()',
    'Understand when to use different type checking methods',
  ],
  sections: [
    {
      type: 'text',
      title: 'Advanced Type Checking with isinstance()',
      content: `While type() tells you the exact type of a variable, **isinstance()** is more flexible and is considered the best practice for type checking in Python.

**isinstance() advantages:**
- Works with inheritance (more advanced topic)
- Can check multiple types at once
- More readable and Pythonic
- Recommended by Python style guides`
    },
    {
      type: 'code',
      title: 'Creating Sample Variables',
      language: 'python',
      code: `# Sample data to test
number = 42
text = "hello"
pi = 3.14
is_active = True

print("number =", number)
print("text =", text)
print("pi =", pi)
print("is_active =", is_active)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `number = 42
text = hello
pi = 3.14
is_active = True`
    },
    {
      type: 'code',
      title: 'Using isinstance() Method',
      language: 'python',
      code: `# Using isinstance() - PREFERRED method
print("isinstance() checks:")
print("Is number an int?", isinstance(number, int))
print("Is text a string?", isinstance(text, str))
print("Is pi a float?", isinstance(pi, float))
print("Is is_active a bool?", isinstance(is_active, bool))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `isinstance() checks:
Is number an int? True
Is text a string? True
Is pi a float? True
Is is_active a bool? True`
    },
    {
      type: 'code',
      title: 'Using type() Method',
      language: 'python',
      code: `# Using type() - less flexible
print("type() checks:")
print("Is number an int?", type(number) == int)
print("Is text a string?", type(text) == str)
print("Is pi a float?", type(pi) == float)
print("Is is_active a bool?", type(is_active) == bool)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `type() checks:
Is number an int? True
Is text a string? True
Is pi a float? True
Is is_active a bool? True`
    },
    {
      type: 'text',
      title: 'Checking Multiple Types',
      content: `One of isinstance()'s powerful features is checking multiple types at once using a tuple of types. This lets you check if a value is any one of several types:`
    },
    {
      type: 'code',
      title: 'Creating Test Variables',
      language: 'python',
      code: `# Test different values
number1 = 42
number2 = 3.14
text = "123"
flag = True
negative = -5.2

print("number1 =", number1)
print("number2 =", number2)
print("text =", text)
print("flag =", flag)
print("negative =", negative)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `number1 = 42
number2 = 3.14
text = 123
flag = True
negative = -5.2`
    },
    {
      type: 'code',
      title: 'Checking for Numbers (int or float)',
      language: 'python',
      code: `# Check if values are numeric (int or float)
print("Testing if values are numbers:")
print("Is 42 a number?", isinstance(number1, (int, float)))
print("Is 3.14 a number?", isinstance(number2, (int, float)))
print("Is '123' a number?", isinstance(text, (int, float)))
print("Is True a number?", isinstance(flag, (int, float)))
print("Is -5.2 a number?", isinstance(negative, (int, float)))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Testing if values are numbers:
Is 42 a number? True
Is 3.14 a number? True
Is '123' a number? False
Is True a number? True
Is -5.2 a number? True`
    },
    {
      type: 'code',
      title: 'Checking Specific Types',
      language: 'python',
      code: `# Checking specific types
print("Checking specific types:")
print("42 is int:", isinstance(number1, int))
print("3.14 is float:", isinstance(number2, float))
print("'123' is string:", isinstance(text, str))
print("True is bool:", isinstance(flag, bool))
print("-5.2 is float:", isinstance(negative, float))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Checking specific types:
42 is int: True
3.14 is float: True
'123' is string: True
True is bool: True
-5.2 is float: True`
    },


    {
      type: 'highlight',
      title: 'Type Checking Best Practices',
      items: [
        "Use isinstance(value, type) instead of type(value) == type",
        "Check multiple types with isinstance(value, (int, float, str))",
        "isinstance() is more flexible and considered best practice",
        "Remember: bool is a subtype of int in Python",
        "Use isinstance() for checking if something is numeric: isinstance(x, (int, float))",
        "isinstance() works better with Python's type system"
      ]
    }
  ],
  resources: [
    {
      title: 'isinstance() Function Reference',
      url: 'https://docs.python.org/3/library/functions.html#isinstance'
    },
    {
      title: 'Python Type Checking Guide',
      url: 'https://realpython.com/python-type-checking/'
    },
    {
      title: 'Input Validation Best Practices',
      url: 'https://docs.python.org/3/tutorial/errors.html'
    }
  ]
};