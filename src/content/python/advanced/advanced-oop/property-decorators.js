export const propertyDecoratorsContent = {
  id: 'property-decorators',
  title: 'Property Decorators (@property, setters, deleters)',
  duration: '30 min',
  overview: `Master Python's property decorators to create elegant, controlled access to class attributes. Learn to use @property, setters, and deleters to validate data, compute values dynamically, and maintain backward compatibility while protecting your class internals.`,
  objectives: [
    'Understand the @property decorator and its purpose',
    'Create getter, setter, and deleter methods for attributes',
    'Implement data validation and computed properties',
    'Refactor simple attributes to properties without breaking existing code',
    'Apply property decorators to create clean, maintainable class interfaces'
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Property Decorators',
      content: `Property decorators allow you to define methods that can be accessed like attributes. This provides a clean interface while giving you control over how values are get, set, or deleted.

**Benefits:**
- Data validation: Check values before setting them
- Computed properties: Calculate values on-the-fly
- Backward compatibility: Change implementation without changing interface
- Encapsulation: Hide internal details while providing clean access
- Side effects: Perform actions when attributes change

**Real-world analogy:**  
Think of a property as a smart light switch. It looks like a simple on/off switch to users, but behind the scenes it might be dimming lights gradually, checking if bulbs are working, or logging usage.`
    },
    {
      type: 'code',
      title: 'Simple Property Example',
      language: 'python',
      code: `class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def radius(self):
        return self._radius`
    },
    {
      type: 'text',
      content: `**@property**  
This decorator turns the \`radius\` method into a read-only attribute. You can access \`circle.radius\` like a variable, but it's actually calling a method. The underscore prefix (\`_radius\`) signals that the attribute is intended to be private.`
    },
    {
      type: 'code',
      title: 'Using the Property',
      language: 'python',
      code: `circle = Circle(5)
print(f"Radius: {circle.radius}")  # Looks like an attribute access
print(f"Type: {type(circle.radius)}")  # But it's actually calling a method`
    },
    {
      type: 'output',
      content: `Radius: 5
Type: <class 'int'>`
    },
    {
      type: 'code',
      title: 'Computed Property',
      language: 'python',
      code: `class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def radius(self):
        return self._radius
    
    @property
    def area(self):
        import math
        return math.pi * self._radius ** 2
    
    @property
    def circumference(self):
        import math
        return 2 * math.pi * self._radius`
    },
    {
      type: 'text',
      content: `**@property (multiple times)**  
Here, \`area\` and \`circumference\` are also decorated with @property. This means you can access \`circle.area\` and \`circle.circumference\` as attributes, and their values are always computed from the current radius.`
    },
    {
      type: 'code',
      title: 'Using Computed Properties',
      language: 'python',
      code: `circle = Circle(3)
print(f"Radius: {circle.radius}")
print(f"Area: {circle.area:.2f}")
print(f"Circumference: {circle.circumference:.2f}")`
    },
    {
      type: 'output',
      content: `Radius: 3
Area: 28.27
Circumference: 18.85`
    },
    {
      type: 'text',
      content: `The area and circumference are calculated each time they're accessed, always reflecting the current radius value.`
    },
    {
      type: 'code',
      title: 'Adding a Setter',
      language: 'python',
      code: `class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def radius(self):
        return self._radius
    
    @radius.setter
    def radius(self, value):
        if value <= 0:
            raise ValueError("Radius must be positive")
        self._radius = value`
    },
    {
      type: 'text',
      content: `**@radius.setter**  
This decorator allows you to set the value of \`radius\` with validation. When you assign to \`circle.radius\`, the setter method is called, so you can check that the value is positive before updating the internal attribute.`
    },
    {
      type: 'code',
      title: 'Testing the Setter',
      language: 'python',
      code: `circle = Circle(5)
print(f"Initial radius: {circle.radius}")

circle.radius = 10  # This uses the setter
print(f"New radius: {circle.radius}")

# Try setting an invalid value
try:
    circle.radius = -3
except ValueError as e:
    print(f"Error: {e}")`
    },
    {
      type: 'output',
      content: `Initial radius: 5
New radius: 10
Error: Radius must be positive`
    },
    {
      type: 'code',
      title: 'Temperature Converter Example',
      language: 'python',
      code: `class Temperature:
    def __init__(self, celsius=0):
        self._celsius = celsius
    
    @property
    def celsius(self):
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Temperature cannot be below absolute zero")
        self._celsius = value`
    },
    {
      type: 'text',
      content: `**@property and @celsius.setter**  
The \`celsius\` property lets you get and set the temperature in Celsius, with validation to prevent values below absolute zero.`
    },
    {
      type: 'code',
      title: 'Adding Fahrenheit Property',
      language: 'python',
      code: `    @property
    def fahrenheit(self):
        return (self._celsius * 9/5) + 32
    
    @fahrenheit.setter
    def fahrenheit(self, value):
        celsius_value = (value - 32) * 5/9
        if celsius_value < -273.15:
            raise ValueError("Temperature cannot be below absolute zero")
        self._celsius = celsius_value`
    },
    {
      type: 'text',
      content: `**@property and @fahrenheit.setter**  
The \`fahrenheit\` property lets you get and set the temperature in Fahrenheit. Setting it automatically converts and stores the value in Celsius, with validation.`
    },
    {
      type: 'code',
      title: 'Complete Temperature Class',
      language: 'python',
      code: `class Temperature:
    def __init__(self, celsius=0):
        self._celsius = celsius
    
    @property
    def celsius(self):
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Temperature cannot be below absolute zero")
        self._celsius = value
    
    @property
    def fahrenheit(self):
        return (self._celsius * 9/5) + 32
    
    @fahrenheit.setter
    def fahrenheit(self, value):
        celsius_value = (value - 32) * 5/9
        if celsius_value < -273.15:
            raise ValueError("Temperature cannot be below absolute zero")
        self._celsius = celsius_value`
    },
    {
      type: 'text',
      content: `This class demonstrates multiple properties and setters for two related attributes, with validation logic in both.`
    },
    {
      type: 'code',
      title: 'Testing Temperature Conversion',
      language: 'python',
      code: `temp = Temperature()
print(f"Initial: {temp.celsius}°C = {temp.fahrenheit}°F")

temp.celsius = 25
print(f"Set Celsius: {temp.celsius}°C = {temp.fahrenheit}°F")

temp.fahrenheit = 100
print(f"Set Fahrenheit: {temp.celsius:.1f}°C = {temp.fahrenheit}°F")`
    },
    {
      type: 'output',
      content: `Initial: 0°C = 32.0°F
Set Celsius: 25°C = 77.0°F
Set Fahrenheit: 37.8°C = 100°F`
    },
    {
      type: 'code',
      title: 'Adding a Deleter',
      language: 'python',
      code: `class BankAccount:
    def __init__(self, balance=0):
        self._balance = balance
        self._transactions = []
    
    @property
    def balance(self):
        return self._balance
    
    @balance.setter
    def balance(self, value):
        if value < 0:
            raise ValueError("Balance cannot be negative")
        old_balance = self._balance
        self._balance = value
        self._transactions.append(f"Balance changed from {old_balance} to {value}")
    
    @balance.deleter
    def balance(self):
        self._transactions.append("Balance reset to 0")
        self._balance = 0`
    },
    {
      type: 'text',
      content: `**@balance.deleter**  
This decorator lets you delete the \`balance\` property using \`del account.balance\`. The deleter method resets the balance and logs the transaction.`
    },
    {
      type: 'code',
      title: 'Testing the Deleter',
      language: 'python',
      code: `account = BankAccount(100)
print(f"Initial balance: \${account.balance}")

account.balance = 250
print(f"New balance: \${account.balance}")

del account.balance  # This calls the deleter
print(f"After deletion: \${account.balance}")
print("Transaction history:", account._transactions)`
    },
    {
      type: 'output',
      content: `Initial balance: $100
New balance: $250
After deletion: $0
Transaction history: ['Balance changed from 100 to 250', 'Balance reset to 0']`
    },
    {
      type: 'code',
      title: 'Validation Property Example',
      language: 'python',
      code: `class Person:
    def __init__(self, name, age):
        self._name = name
        self._age = age
    
    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, value):
        if not isinstance(value, str):
            raise TypeError("Name must be a string")
        if len(value.strip()) == 0:
            raise ValueError("Name cannot be empty")
        self._name = value.strip().title()`
    },
    {
      type: 'text',
      content: `**@property and @name.setter**  
The \`name\` property allows you to get and set the person's name, with automatic formatting and validation.`
    },
    {
      type: 'code',
      title: 'Adding Age Validation',
      language: 'python',
      code: `    @property
    def age(self):
        return self._age
    
    @age.setter
    def age(self, value):
        if not isinstance(value, int):
            raise TypeError("Age must be an integer")
        if value < 0 or value > 150:
            raise ValueError("Age must be between 0 and 150")
        self._age = value`
    },
    {
      type: 'text',
      content: `**@property and @age.setter**  
The \`age\` property ensures age is an integer and within a reasonable range.`
    },
    {
      type: 'code',
      title: 'Testing Person Validation',
      language: 'python',
      code: `person = Person("john doe", 25)
print(f"Name: {person.name}")  # Automatically formatted
print(f"Age: {person.age}")

person.name = "  jane smith  "  # Automatically cleaned up
print(f"Cleaned name: {person.name}")

try:
    person.age = -5
except ValueError as e:
    print(f"Age error: {e}")

try:
    person.name = ""
except ValueError as e:
    print(f"Name error: {e}")`
    },
    {
      type: 'output',
      content: `Name: John Doe
Age: 25
Cleaned name: Jane Smith
Age error: Age must be between 0 and 150
Name error: Name cannot be empty`
    },
    {
      type: 'code',
      title: 'Cached Property Pattern',
      language: 'python',
      code: `import time

class ExpensiveCalculation:
    def __init__(self, data):
        self.data = data
        self._result = None
        self._calculated = False
    
    @property
    def result(self):
        if not self._calculated:
            print("Performing expensive calculation...")
            time.sleep(1)  # Simulate expensive operation
            self._result = sum(x * x for x in self.data)
            self._calculated = True
        return self._result
    
    @result.deleter
    def result(self):
        """Clear the cache"""
        self._result = None
        self._calculated = False
        print("Cache cleared")`
    },
    {
      type: 'text',
      content: `**@property and @result.deleter**  
The \`result\` property caches the result of an expensive calculation. The deleter clears the cache, forcing recalculation next time.`
    },
    {
      type: 'code',
      title: 'Testing Cached Property',
      language: 'python',
      code: `calc = ExpensiveCalculation([1, 2, 3, 4, 5])

print("First access:")
print(f"Result: {calc.result}")

print("Second access:")
print(f"Result: {calc.result}")  # Should be instant

del calc.result  # Clear cache
print("After clearing cache:")
print(f"Result: {calc.result}")  # Recalculates`
    },
    {
      type: 'output',
      content: `First access:
Performing expensive calculation...
Result: 55
Second access:
Result: 55
Cache cleared
After clearing cache:
Performing expensive calculation...
Result: 55`
    },
    {
      type: 'code',
      title: 'Read-Only Properties',
      language: 'python',
      code: `import uuid
from datetime import datetime

class Document:
    def __init__(self, title, content):
        self._id = str(uuid.uuid4())
        self._created_at = datetime.now()
        self._title = title
        self._content = content
    
    @property
    def id(self):
        """Read-only unique identifier"""
        return self._id
    
    @property
    def created_at(self):
        """Read-only creation timestamp"""
        return self._created_at
    
    @property
    def title(self):
        return self._title
    
    @title.setter
    def title(self, value):
        if not value.strip():
            raise ValueError("Title cannot be empty")
        self._title = value.strip()`
    },
    {
      type: 'text',
      content: `**@property (read-only)**  
The \`id\` and \`created_at\` properties are read-only: you can access them, but cannot change them. Only \`title\` has a setter for updates.`
    },
    {
      type: 'code',
      title: 'Testing Read-Only Properties',
      language: 'python',
      code: `doc = Document("My Document", "Some content")
print(f"ID: {doc.id}")
print(f"Created: {doc.created_at}")
print(f"Title: {doc.title}")

doc.title = "Updated Title"
print(f"New title: {doc.title}")

# These will fail - read-only properties
try:
    doc.id = "new-id"
except AttributeError as e:
    print(f"ID error: can't set attribute")`
    },
    {
      type: 'output',
      content: `ID: a1b2c3d4-e5f6-7890-abcd-ef1234567890
Created: 2024-01-15 10:30:45.123456
Title: My Document
New title: Updated Title
ID error: can't set attribute`
    },
    {
      type: 'text',
      title: 'Refactoring Attributes to Properties',
      content: `One of the great benefits of properties is that you can refactor simple attributes to properties without breaking existing code. This is perfect for adding validation or computation to existing classes.`
    },
    {
      type: 'code',
      title: 'Before: Simple Attributes',
      language: 'python',
      code: `# Original simple class
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

# Usage works fine
rect = Rectangle(5, 3)
rect.width = 10
print(f"Area: {rect.width * rect.height}")`
    },
    {
      type: 'text',
      content: `This class uses simple public attributes. You can access and modify them directly, but there's no validation or computation.`
    },
    {
      type: 'code',
      title: 'After: Properties with Validation',
      language: 'python',
      code: `# Refactored class with validation
class Rectangle:
    def __init__(self, width, height):
        self._width = width
        self._height = height
    
    @property
    def width(self):
        return self._width
    
    @width.setter
    def width(self, value):
        if value <= 0:
            raise ValueError("Width must be positive")
        self._width = value
    
    @property  
    def height(self):
        return self._height
    
    @height.setter
    def height(self, value):
        if value <= 0:
            raise ValueError("Height must be positive")
        self._height = value
    
    @property
    def area(self):
        return self._width * self._height`
    },
    {
      type: 'text',
      content: `**@property, @width.setter, @height.setter**  
Now, width and height are validated before being set, and area is computed automatically. The interface for users stays the same, but the behavior is safer and more flexible.`
    },
    {
      type: 'code',
      title: 'Same Interface, Better Behavior',
      language: 'python',
      code: `# Same usage, but now with validation
rect = Rectangle(5, 3)
rect.width = 10  # Still works
print(f"Area: {rect.area}")  # Now computed automatically

try:
    rect.width = -2  # Now this is caught
except ValueError as e:
    print(f"Error: {e}")`
    },
    {
      type: 'output',
      content: `Area: 30
Error: Width must be positive`
    },
    {
      type: 'text',
      title: 'Best Practices and Common Patterns',
      content: `**Best Practices:**
- Use underscore prefix: Mark internal attributes with \`_attribute\`
- Validate early: Check values in setters before storing them
- Be consistent: If you use properties for one attribute, consider using them for related ones
- Document behavior: Clearly document what properties do, especially if they have side effects
- Keep it simple: Don't overcomplicate property methods

**Common Patterns:**
- Computed properties: Calculate values from other attributes
- Validation properties: Check values before setting
- Formatting properties: Clean up or format values automatically  
- Cached properties: Store expensive calculations
- Conversion properties: Provide different views of the same data (Celsius/Fahrenheit)

**When to Use Properties:**
- Adding validation to existing attributes
- Creating computed values that should look like attributes
- Maintaining backward compatibility while changing implementation
- Providing different representations of the same data
- Adding logging or debugging to attribute access

**Performance Considerations:**
- Properties have slight overhead compared to simple attributes
- Use caching for expensive computations
- Avoid complex operations in frequently-accessed properties
- Consider using \`__slots__\` with properties for memory efficiency`
    }
  ]
};