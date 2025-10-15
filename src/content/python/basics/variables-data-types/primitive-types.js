// Lesson content for Primitive types: int, float, str, bool
export const primitiveTypesContent = {
  id: 'primitive-types',
  title: 'Primitive Types: int, float, str, bool',
  duration: '12 min',
  overview: `Learn Python's four fundamental data types! Understand the differences between integers, floats, strings, and booleans, and see how to use each type in your programs with simple examples.`,
  objectives: [
    'Understand the four primitive data types: int, float, str, bool',
    'Identify unique characteristics of each type',
    'Create variables with different data types',
    'Use the type() function to check variable types',
    'Choose the appropriate data type for different scenarios',
  ],
  sections: [
    {
      type: 'text',
      title: 'Understanding Primitive Types',
      content: `**Primitive types** are the basic building blocks of data in Python. Think of them as different containers for storing different kinds of information.

Python has **four main primitive types:**

**1. int (Integer)** - Whole numbers like 42, -17, 0
**2. float (Float)** - Decimal numbers like 3.14, -2.5, 10.0  
**3. str (String)** - Text data like "Hello", 'Python', ""
**4. bool (Boolean)** - True or False values

Each type is designed for specific kinds of data and has different capabilities.`
    },
    {
      type: 'text',
      title: 'Integers (int) - Whole Numbers',
      content: `**Integers** represent whole numbers without decimal points. They can be positive, negative, or zero.

**Key Characteristics:**
- No decimal point (42, not 42.0)
- Can be positive, negative, or zero
- Perfect for counting, ages, years, quantities
- Used for exact calculations where you don't need decimals`
    },
    {
      type: 'code',
      title: 'Creating Integer Variables',
      language: 'python',
      code: `# Various integer examples
positive_int = 42
negative_int = -17
zero = 0

print("Positive:", positive_int)
print("Negative:", negative_int)  
print("Zero:", zero)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Positive: 42
Negative: -17
Zero: 0`
    },
    {
      type: 'code',
      title: 'Checking Integer Types',
      language: 'python',
      code: `# Check their types
print("Type of 42:", type(positive_int))
print("Type of -17:", type(negative_int))
print("Type of 0:", type(zero))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Type of 42: <class 'int'>
Type of -17: <class 'int'>
Type of 0: <class 'int'>`
    },
    {
      type: 'text',
      title: 'Floats (float) - Decimal Numbers',
      content: `**Floats** represent decimal numbers. Even if a number looks whole, if it has a decimal point, Python treats it as a float.

**Key Characteristics:**
- Always contain a decimal point (3.14, 2.0, -0.5)
- Used for measurements, prices, scientific calculations
- Can represent very large and very small numbers
- Perfect when you need precise decimal values`
    },
    {
      type: 'code',
      title: 'Creating Float Variables',
      language: 'python',
      code: `# Various float examples
pi = 3.14159
temperature = -2.5
price = 19.99

print("Pi:", pi)
print("Temperature:", temperature)
print("Price:", price)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Pi: 3.14159
Temperature: -2.5
Price: 19.99`
    },
    {
      type: 'code',
      title: 'Checking Float Types',
      language: 'python',
      code: `# Check their types
print("Type of 3.14159:", type(pi))
print("Type of -2.5:", type(temperature))
print("Type of 19.99:", type(price))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Type of 3.14159: <class 'float'>
Type of -2.5: <class 'float'>
Type of 19.99: <class 'float'>`
    },
    {
      type: 'code',
      title: 'Whole Numbers as Floats',
      language: 'python',
      code: `# Even whole numbers with decimal points are floats
whole_float = 10.0
print("Value:", whole_float)
print("Type:", type(whole_float))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Value: 10.0
Type: <class 'float'>`
    },
    {
      type: 'text',
      title: 'Strings (str) - Text Data',
      content: `**Strings** represent text data - any sequence of characters enclosed in quotes. You can use single quotes ('') or double quotes ("").

**Key Characteristics:**
- Must be enclosed in quotes: "Hello" or 'Hello'
- Can contain letters, numbers, symbols, spaces
- Can be empty: ""
- Used for names, messages, descriptions, any text`
    },
    {
      type: 'code',
      title: 'Creating String Variables',
      language: 'python',
      code: `# Various string examples
name = "Alice Johnson"
single_quotes = 'Hello World'
empty_string = ""

print("Name:", name)
print("Single quotes:", single_quotes)
print("Empty string:", empty_string)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Name: Alice Johnson
Single quotes: Hello World
Empty string: `
    },
    {
      type: 'code',
      title: 'Checking String Types',
      language: 'python',
      code: `# Check types
print("Type of name:", type(name))
print("Type of empty string:", type(empty_string))
print("Type of single quotes:", type(single_quotes))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Type of name: <class 'str'>
Type of empty string: <class 'str'>
Type of single quotes: <class 'str'>`
    },
    {
      type: 'code',
      title: 'Numbers as Strings',
      language: 'python',
      code: `# Strings can contain numbers, but they're still text
number_as_string = "123"
phone_number = "555-1234"

print("Number as string:", number_as_string)
print("Phone number:", phone_number)
print("Type of number_as_string:", type(number_as_string))
print("Type of phone_number:", type(phone_number))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Number as string: 123
Phone number: 555-1234
Type of number_as_string: <class 'str'>
Type of phone_number: <class 'str'>`
    },
    {
      type: 'text',
      title: 'Booleans (bool) - True or False',
      content: `**Booleans** represent logical values - either True or False. They're perfect for yes/no questions, on/off switches, and any situation where you need exactly two options.

**Key Characteristics:**
- Only two possible values: True or False
- Must be capitalized: True and False (not true, false)
- Used for status, conditions, settings
- Result from comparing things (we'll learn more about this later)`
    },
    {
      type: 'code',
      title: 'Creating Boolean Variables',
      language: 'python',
      code: `# Direct boolean values
is_student = True
is_graduated = False
has_license = True

print("Is student:", is_student)
print("Is graduated:", is_graduated)
print("Has license:", has_license)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Is student: True
Is graduated: False
Has license: True`
    },
    {
      type: 'code',
      title: 'Checking Boolean Types',
      language: 'python',
      code: `# Check types
print("Type of True:", type(is_student))
print("Type of False:", type(is_graduated))
print("Type of has_license:", type(has_license))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Type of True: <class 'bool'>
Type of False: <class 'bool'>
Type of has_license: <class 'bool'>`
    },
    {
      type: 'code',
      title: 'Using Boolean Variables',
      language: 'python',
      code: `# Booleans are great for status and settings
sound_enabled = True
notifications_on = False
dark_mode = True

print("Sound enabled:", sound_enabled)
print("Notifications on:", notifications_on)
print("Dark mode:", dark_mode)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Sound enabled: True
Notifications on: False
Dark mode: True`
    },
    {
      type: 'text',
      title: 'Choosing the Right Type',
      content: `Selecting the appropriate primitive type depends on your data and what you want to do with it:

**Use int when:**
- Counting items (number_of_students = 25)
- Working with whole numbers (age = 21)
- User IDs or identification numbers (user_id = 12345)
- Year, month, day values (year = 2024)

**Use float when:**
- Measurements (height = 5.8, weight = 68.5)
- Money amounts (price = 12.99)
- Scientific calculations (temperature = 98.6)
- Any data with decimal points

**Use str when:**
- Names and descriptions (name = "Alice")
- Addresses and locations (city = "New York")
- Any text information (message = "Hello World")
- Phone numbers, even if they contain digits (phone = "555-1234")

**Use bool when:**
- Yes/No questions (is_student = True)
- Status indicators (is_complete = False)
- Settings and flags (enable_sound = True)
- Any true/false conditions`
    },
    {
      type: 'code',
      title: 'Student Information Example',
      language: 'python',
      code: `# Good examples of choosing the right type

# Student information
student_name = "Sarah Johnson"        # str - text data
student_age = 20                      # int - whole number
student_gpa = 3.75                    # float - has decimal
is_enrolled = True                    # bool - true/false status

print("Student:", student_name)
print("Age:", student_age, "years old")
print("GPA:", student_gpa)
print("Enrolled:", is_enrolled)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Student: Sarah Johnson
Age: 20 years old
GPA: 3.75
Enrolled: True`
    },
    {
      type: 'code',
      title: 'Product Information Example',
      language: 'python',
      code: `# Product information
product_name = "Wireless Headphones"  # str - text description
product_price = 89.99                 # float - money amount
items_in_stock = 15                   # int - counting items
is_available = True                   # bool - availability status

print("Product:", product_name)
print("Price: $", product_price)
print("Stock:", items_in_stock, "units")
print("Available:", is_available)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Product: Wireless Headphones
Price: $ 89.99
Stock: 15 units
Available: True`
    },
    {
      type: 'text',
      title: 'Common Type Mistakes to Avoid',
      content: `Here are some common mistakes beginners make with types:

**1. Using quotes around numbers when you want to do math:**
- ❌ Wrong: age = "25" (this is text, not a number)
- ✅ Right: age = 25 (this is a number you can add/subtract)

**2. Forgetting quotes around text:**
- ❌ Wrong: name = Alice (Python thinks Alice is a variable)  
- ✅ Right: name = "Alice" (this is text)

**3. Wrong capitalization for True/False:**
- ❌ Wrong: is_ready = true (lowercase won't work)
- ✅ Right: is_ready = True (must be capitalized)

**4. Using the wrong type for data:**
- ❌ Wrong: phone_number = 5551234 (loses leading zeros, formatting)
- ✅ Right: phone_number = "555-1234" (keeps formatting)`
    },
    {
      type: 'highlight',
      title: 'Key Takeaways',
      items: [
        'Python has four primitive types: int, float, str, bool',
        'Use type() function to check what type a variable holds',
        'Integers are whole numbers, floats have decimal points',
        'Strings hold text and must be in quotes',
        'Booleans are True or False (capitalized)',
        'Choose the right type based on your data and what you need to do with it'
      ]
    }
  ],
  resources: [
    {
      title: 'Python Built-in Types (docs)',
      url: 'https://docs.python.org/3/library/stdtypes.html'
    },
    {
      title: 'Python Data Types Tutorial',
      url: 'https://realpython.com/python-data-types/'
    }
  ]
};