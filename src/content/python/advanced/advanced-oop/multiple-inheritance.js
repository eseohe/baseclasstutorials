// Lesson content for Multiple Inheritance and MRO
export const multipleInheritanceContent = {
  id: 'multiple-inheritance',
  title: 'Multiple Inheritance and MRO',
  duration: '35 min',
  overview: `Master Python's multiple inheritance system and Method Resolution Order (MRO). Learn to create complex class hierarchies, understand how Python resolves method calls, and avoid common pitfalls while leveraging the power of multiple inheritance.`,
  objectives: [
    'Understand multiple inheritance and its benefits/challenges',
    'Learn how Method Resolution Order (MRO) works in Python',
    'Create classes that inherit from multiple parents',
    'Handle conflicts and diamond problems in inheritance',
    'Apply super() correctly in multiple inheritance scenarios'
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Multiple Inheritance',
      content: `Multiple inheritance allows a class to inherit from more than one parent class. This powerful feature lets you combine functionality from different sources, but it also introduces complexity that must be managed carefully.

**Benefits:**
- **Code reuse**: Combine features from multiple classes
- **Flexibility**: Mix and match different capabilities
- **Modeling**: Better represent real-world relationships
- **Composition**: Build complex behaviors from simple parts

**Challenges:**
- **Method conflicts**: Multiple parents may define the same method
- **Diamond problem**: Complex inheritance hierarchies
- **Complexity**: Harder to understand and debug
- **Coupling**: Changes in parent classes can have wide effects

**Real-world example:**
A smartphone inherits from both "Phone" (can make calls) and "Computer" (can run apps). It combines the capabilities of both parents.`
    },
    {
      type: 'code',
      title: 'Basic Multiple Inheritance',
      language: 'python',
      code: `class Flying:
    def fly(self):
        return "Flying through the air"

class Swimming:
    def swim(self):
        return "Swimming in the water"`
    },
    {
      type: 'text',
      content: `Here we have two simple parent classes, each with their own capability.`
    },
    {
      type: 'code',
      title: 'Class with Multiple Parents',
      language: 'python',
      code: `class Duck(Flying, Swimming):
    def __init__(self, name):
        self.name = name
    
    def quack(self):
        return f"{self.name} says Quack!"`
    },
    {
      type: 'text',
      content: `The \`Duck\` class inherits from both \`Flying\` and \`Swimming\`, gaining both capabilities.`
    },
    {
      type: 'code',
      title: 'Using Multiple Inheritance',
      language: 'python',
      code: `duck = Duck("Donald")
print(duck.quack())
print(duck.fly())
print(duck.swim())`
    },
    {
      type: 'output',
      content: `Donald says Quack!
Flying through the air
Swimming in the water`
    },
    {
      type: 'text',
      title: 'Method Resolution Order (MRO)',
      content: `When multiple parent classes define the same method, Python needs to decide which one to use. The Method Resolution Order (MRO) determines this sequence. Python uses the C3 linearization algorithm to create a consistent, predictable order.`
    },
    {
      type: 'code',
      title: 'Checking MRO',
      language: 'python',
      code: `# Check the method resolution order
print("Duck MRO:")
print(Duck.__mro__)
print()
print("MRO in readable format:")
for cls in Duck.__mro__:
    print(cls.__name__)`
    },
    {
      type: 'output',
      content: `Duck MRO:
(<class '__main__.Duck'>, <class '__main__.Flying'>, <class '__main__.Swimming'>, <class 'object'>)

MRO in readable format:
Duck
Flying
Swimming
object`
    },
    {
      type: 'code',
      title: 'Method Conflicts Example',
      language: 'python',
      code: `class Vehicle:
    def start(self):
        return "Vehicle starting..."

class Boat:
    def start(self):
        return "Boat engine starting..."

class Car:
    def start(self):
        return "Car engine starting..."`
    },
    {
      type: 'text',
      content: `All three classes have a \`start()\` method. Let's see what happens when we inherit from multiple classes.`
    },
    {
      type: 'code',
      title: 'Multiple Inheritance with Conflicts',
      language: 'python',
      code: `class AmphibiousVehicle(Boat, Car, Vehicle):
    def __init__(self, name):
        self.name = name`
    },
    {
      type: 'code',
      title: 'Testing Method Resolution',
      language: 'python',
      code: `amphibious = AmphibiousVehicle("SeaCar")
print(amphibious.start())
print()
print("AmphibiousVehicle MRO:")
for cls in AmphibiousVehicle.__mro__:
    print(cls.__name__)`
    },
    {
      type: 'output',
      content: `Boat engine starting...

AmphibiousVehicle MRO:
AmphibiousVehicle
Boat
Car
Vehicle
object`
    },
    {
      type: 'text',
      content: `Python chose \`Boat.start()\` because \`Boat\` appears first in the inheritance list. The MRO shows the exact order Python searches for methods.`
    },
    {
      type: 'code',
      title: 'Using super() with Multiple Inheritance',
      language: 'python',
      code: `class A:
    def method(self):
        print("A.method()")

class B(A):
    def method(self):
        print("B.method() start")
        super().method()
        print("B.method() end")`
    },
    {
      type: 'code',
      title: 'Multiple Parents with super()',
      language: 'python',
      code: `class C(A):
    def method(self):
        print("C.method() start")
        super().method()
        print("C.method() end")

class D(B, C):
    def method(self):
        print("D.method() start")
        super().method()
        print("D.method() end")`
    },
    {
      type: 'code',
      title: 'Testing super() Chain',
      language: 'python',
      code: `d = D()
d.method()
print()
print("D's MRO:")
for cls in D.__mro__:
    print(cls.__name__)`
    },
    {
      type: 'output',
      content: `D.method() start
B.method() start
C.method() start
A.method()
C.method() end
B.method() end
D.method() end

D's MRO:
D
B
C
A
object`
    },
    {
      type: 'text',
      content: `Notice how \`super()\` follows the MRO, ensuring each method is called exactly once. This cooperative inheritance pattern is crucial for multiple inheritance to work correctly.`
    },
    {
      type: 'code',
      title: 'Diamond Problem Example',
      language: 'python',
      code: `class Animal:
    def __init__(self, name):
        self.name = name
        print(f"Animal.__init__({name})")
    
    def speak(self):
        return f"{self.name} makes a sound"`
    },
    {
      type: 'code',
      title: 'Creating the Diamond Structure',
      language: 'python',
      code: `class Mammal(Animal):
    def __init__(self, name, warm_blooded=True):
        print(f"Mammal.__init__({name})")
        super().__init__(name)
        self.warm_blooded = warm_blooded

class Aquatic(Animal):
    def __init__(self, name, can_swim=True):
        print(f"Aquatic.__init__({name})")
        super().__init__(name)
        self.can_swim = can_swim`
    },
    {
      type: 'code',
      title: 'Multiple Inheritance at Bottom',
      language: 'python',
      code: `class Whale(Mammal, Aquatic):
    def __init__(self, name):
        print(f"Whale.__init__({name})")
        super().__init__(name)
    
    def speak(self):
        return f"{self.name} sings whale songs"`
    },
    {
      type: 'code',
      title: 'Testing Diamond Inheritance',
      language: 'python',
      code: `whale = Whale("Willy")
print(whale.speak())
print(f"Warm blooded: {whale.warm_blooded}")
print(f"Can swim: {whale.can_swim}")
print()
print("Whale MRO:")
for cls in Whale.__mro__:
    print(cls.__name__)`
    },
    {
      type: 'output',
      content: `Whale.__init__(Willy)
Mammal.__init__(Willy)
Aquatic.__init__(Willy)
Animal.__init__(Willy)
Willy sings whale songs
Warm blooded: True
Can swim: True

Whale MRO:
Whale
Mammal
Aquatic
Animal
object`
    },
    {
      type: 'text',
      content: `The diamond problem is solved! Even though both \`Mammal\` and \`Aquatic\` inherit from \`Animal\`, the \`Animal.__init__()\` is called only once, thanks to the MRO and proper use of \`super()\`.`
    },
    {
      type: 'code',
      title: 'Mixin Classes Pattern',
      language: 'python',
      code: `class TimestampMixin:
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        from datetime import datetime
        self.created_at = datetime.now()
    
    def age_in_seconds(self):
        from datetime import datetime
        return (datetime.now() - self.created_at).total_seconds()`
    },
    {
      type: 'text',
      content: `Mixins are classes designed to be inherited alongside other classes. They provide specific functionality without being complete classes themselves.`
    },
    {
      type: 'code',
      title: 'JSON Serialization Mixin',
      language: 'python',
      code: `class JSONMixin:
    def to_json(self):
        import json
        # Get all non-method attributes
        data = {}
        for key, value in self.__dict__.items():
            if not key.startswith('_'):
                # Handle datetime objects
                if hasattr(value, 'isoformat'):
                    data[key] = value.isoformat()
                else:
                    data[key] = value
        return json.dumps(data, indent=2)`
    },
    {
      type: 'code',
      title: 'Using Multiple Mixins',
      language: 'python',
      code: `class Product(TimestampMixin, JSONMixin):
    def __init__(self, name, price):
        self.name = name
        self.price = price
        super().__init__()  # Initialize mixins`
    },
    {
      type: 'code',
      title: 'Testing Mixin Functionality',
      language: 'python',
      code: `product = Product("Laptop", 999.99)
print("Product JSON:")
print(product.to_json())
print()
import time
time.sleep(1)  # Wait a second
print(f"Product age: {product.age_in_seconds():.2f} seconds")`
    },
    {
      type: 'output',
      content: `Product JSON:
{
  "name": "Laptop",
  "price": 999.99,
  "created_at": "2024-01-15T10:30:45.123456"
}

Product age: 1.00 seconds`
    },
    {
      type: 'code',
      title: 'Practical Multiple Inheritance Example',
      language: 'python',
      code: `class Readable:
    def read(self):
        return f"Reading from {self.__class__.__name__}"

class Writable:
    def write(self, data):
        return f"Writing '{data}' to {self.__class__.__name__}"

class Seekable:
    def seek(self, position):
        return f"Seeking to position {position} in {self.__class__.__name__}"`
    },
    {
      type: 'code',
      title: 'File Classes with Different Capabilities',
      language: 'python',
      code: `class ReadOnlyFile(Readable):
    def __init__(self, filename):
        self.filename = filename

class WriteOnlyFile(Writable):
    def __init__(self, filename):
        self.filename = filename

class RandomAccessFile(Readable, Writable, Seekable):
    def __init__(self, filename):
        self.filename = filename`
    },
    {
      type: 'code',
      title: 'Using Different File Types',
      language: 'python',
      code: `# Different files with different capabilities
read_file = ReadOnlyFile("document.txt")
write_file = WriteOnlyFile("output.txt")
random_file = RandomAccessFile("database.db")

print(read_file.read())
print(write_file.write("Hello"))
print(random_file.read())
print(random_file.write("Data"))
print(random_file.seek(100))`
    },
    {
      type: 'output',
      content: `Reading from ReadOnlyFile
Writing 'Hello' to WriteOnlyFile
Reading from RandomAccessFile
Writing 'Data' to RandomAccessFile
Seeking to position 100 in RandomAccessFile`
    },
    {
      type: 'text',
      title: 'Best Practices and Common Pitfalls',
      content: `**Best Practices:**
- **Use super() consistently**: Always use \`super()\` instead of direct parent calls
- **Design for cooperation**: Make sure parent classes work well together
- **Keep it simple**: Don't create overly complex inheritance hierarchies
- **Document MRO**: Understand and document the method resolution order
- **Use mixins**: Prefer composition-like mixins over complex inheritance

**Common Pitfalls:**
- **Forgetting super()**: Not calling \`super()\` breaks the inheritance chain
- **Order matters**: The order of classes in inheritance list affects MRO
- **Constructor conflicts**: Different \`__init__()\` signatures can cause issues
- **Tight coupling**: Changes in one parent affect all children

**When to Use Multiple Inheritance:**
- **Mixins**: Adding specific functionality to classes
- **Interfaces**: Implementing multiple protocols
- **Cross-cutting concerns**: Logging, timing, caching functionality
- **Framework design**: Plugin systems and extensibility

**Alternatives to Consider:**
- **Composition**: Has-a relationships instead of is-a
- **Delegation**: Forward method calls to contained objects
- **Protocols**: Use typing.Protocol for interface definition
- **Dependency injection**: Pass capabilities as parameters`
    }
  ]
};