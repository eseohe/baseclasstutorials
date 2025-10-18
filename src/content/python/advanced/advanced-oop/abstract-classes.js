// Lesson content for Abstract Classes and Interfaces (abc module)
export const abstractClassesContent = {
  id: 'abstract-classes',
  title: 'Abstract Classes and Interfaces (abc module)',
  duration: '30 min',
  overview: `Master abstract classes and interfaces in Python using the abc module. Learn to define contracts for inheritance, enforce method implementation, and create robust object-oriented designs that prevent common programming errors.`,
  objectives: [
    'Understand what abstract classes are and when to use them',
    'Create abstract classes using the abc module',
    'Define abstract methods and properties',
    'Implement interfaces and contracts in Python',
    'Apply abstract classes to enforce consistent inheritance patterns'
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Abstract Classes',
      content: `Abstract classes are like blueprints that define the structure other classes must follow. They cannot be instantiated directly and typically contain one or more abstract methods that must be implemented by subclasses.

**Why use abstract classes?**
- **Enforce structure**: Ensure all subclasses implement required methods
- **Prevent instantiation**: Stop creation of incomplete objects
- **Define contracts**: Specify what methods a class family must have
- **Code consistency**: All subclasses follow the same interface
- **Better design**: Forces you to think about class hierarchies

**Real-world analogy:**
Think of an abstract class as a job description. It defines what skills and responsibilities are required, but it's not a person who can actually do the job. Only specific people (concrete classes) who meet all the requirements can fill the position.`
    },
    {
      type: 'code',
      title: 'Importing the ABC Module',
      language: 'python',
      code: `from abc import ABC, abstractmethod`
    },
    {
      type: 'text',
      content: `The \`abc\` module provides the \`ABC\` class (Abstract Base Class) and \`abstractmethod\` decorator for creating abstract classes.`
    },
    {
      type: 'code',
      title: 'Creating an Abstract Class',
      language: 'python',
      code: `class Animal(ABC):
    def __init__(self, name, species):
        self.name = name
        self.species = species
    
    @abstractmethod
    def make_sound(self):
        pass`
    },
    {
      type: 'text',
      content: `This abstract class defines the structure all animals must have - a name, species, and the ability to make a sound. The \`@abstractmethod\` decorator ensures subclasses must implement \`make_sound()\`.`
    },
    {
      type: 'code',
      title: 'Attempting to Instantiate Abstract Class',
      language: 'python',
      code: `# This will raise an error!
try:
    animal = Animal("Generic", "Unknown")
except TypeError as e:
    print("Error:", e)`
    },
    {
      type: 'output',
      content: `Error: Can't instantiate abstract class Animal with abstract method make_sound`
    },
    {
      type: 'code',
      title: 'Creating Concrete Subclasses',
      language: 'python',
      code: `class Dog(Animal):
    def make_sound(self):
        return f"{self.name} says Woof!"
    
    def fetch(self):
        return f"{self.name} fetches the ball"`
    },
    {
      type: 'text',
      content: `The \`Dog\` class inherits from \`Animal\` and implements the required \`make_sound()\` method. It can also have its own specific methods like \`fetch()\`.`
    },
    {
      type: 'code',
      title: 'Another Concrete Implementation',
      language: 'python',
      code: `class Cat(Animal):
    def make_sound(self):
        return f"{self.name} says Meow!"
    
    def scratch(self):
        return f"{self.name} scratches the furniture"`
    },
    {
      type: 'code',
      title: 'Using Concrete Classes',
      language: 'python',
      code: `# Now we can create instances
dog = Dog("Buddy", "Golden Retriever")
cat = Cat("Whiskers", "Persian")

print(dog.make_sound())
print(cat.make_sound())
print(dog.fetch())
print(cat.scratch())`
    },
    {
      type: 'output',
      content: `Buddy says Woof!
Whiskers says Meow!
Buddy fetches the ball
Whiskers scratches the furniture`
    },
    {
      type: 'code',
      title: 'Multiple Abstract Methods',
      language: 'python',
      code: `class Vehicle(ABC):
    @abstractmethod
    def start_engine(self):
        pass
    
    @abstractmethod
    def stop_engine(self):
        pass
    
    @abstractmethod
    def get_max_speed(self):
        pass`
    },
    {
      type: 'text',
      content: `A class can have multiple abstract methods. All must be implemented by subclasses.`
    },
    {
      type: 'code',
      title: 'Implementing All Abstract Methods',
      language: 'python',
      code: `class Car(Vehicle):
    def __init__(self, model, max_speed):
        self.model = model
        self.max_speed = max_speed
        self.engine_running = False
    
    def start_engine(self):
        self.engine_running = True
        return f"{self.model} engine started"
    
    def stop_engine(self):
        self.engine_running = False
        return f"{self.model} engine stopped"
    
    def get_max_speed(self):
        return f"{self.model} max speed: {self.max_speed} mph"`
    },
    {
      type: 'code',
      title: 'Testing the Car Implementation',
      language: 'python',
      code: `car = Car("Tesla Model 3", 155)
print(car.start_engine())
print(car.get_max_speed())
print(car.stop_engine())`
    },
    {
      type: 'output',
      content: `Tesla Model 3 engine started
Tesla Model 3 max speed: 155 mph
Tesla Model 3 engine stopped`
    },
    {
      type: 'code',
      title: 'Abstract Properties',
      language: 'python',
      code: `from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
    
    @abstractmethod
    def perimeter(self):
        pass`
    },
    {
      type: 'text',
      content: `Abstract methods can represent properties that subclasses must provide. Here, every shape must be able to calculate its area and perimeter.`
    },
    {
      type: 'code',
      title: 'Implementing Shape Subclass',
      language: 'python',
      code: `class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)`
    },
    {
      type: 'code',
      title: 'Using the Rectangle',
      language: 'python',
      code: `rect = Rectangle(5, 3)
print(f"Area: {rect.area()}")
print(f"Perimeter: {rect.perimeter()}")`
    },
    {
      type: 'output',
      content: `Area: 15
Perimeter: 16`
    },
    {
      type: 'code',
      title: 'Mixed Abstract and Concrete Methods',
      language: 'python',
      code: `class GameCharacter(ABC):
    def __init__(self, name, health):
        self.name = name
        self.health = health
    
    # Concrete method - available to all subclasses
    def take_damage(self, damage):
        self.health -= damage
        print(f"{self.name} takes {damage} damage. Health: {self.health}")
    
    # Abstract method - must be implemented by subclasses
    @abstractmethod
    def special_attack(self):
        pass`
    },
    {
      type: 'text',
      content: `Abstract classes can contain both abstract and concrete methods. Concrete methods provide common functionality, while abstract methods enforce specific implementations.`
    },
    {
      type: 'code',
      title: 'Implementing Game Character',
      language: 'python',
      code: `class Warrior(GameCharacter):
    def special_attack(self):
        return f"{self.name} performs a powerful sword strike!"

class Mage(GameCharacter):
    def special_attack(self):
        return f"{self.name} casts a devastating fireball!"`
    },
    {
      type: 'code',
      title: 'Using Game Characters',
      language: 'python',
      code: `warrior = Warrior("Conan", 100)
mage = Mage("Gandalf", 80)

print(warrior.special_attack())
warrior.take_damage(20)

print(mage.special_attack())
mage.take_damage(15)`
    },
    {
      type: 'output',
      content: `Conan performs a powerful sword strike!
Conan takes 20 damage. Health: 80
Gandalf casts a devastating fireball!
Gandalf takes 15 damage. Health: 65`
    },
    {
      type: 'text',
      title: 'Polymorphism with Abstract Classes',
      content: `Abstract classes work excellently with polymorphism. You can treat all subclass instances uniformly while ensuring they implement required behavior.`
    },
    {
      type: 'code',
      title: 'Polymorphic Function',
      language: 'python',
      code: `def character_battle(characters):
    for character in characters:
        print(character.special_attack())
        character.take_damage(10)`
    },
    {
      type: 'code',
      title: 'Using Polymorphic Function',
      language: 'python',
      code: `characters = [
    Warrior("Arthur", 120),
    Mage("Merlin", 90),
    Warrior("Lancelot", 110)
]

character_battle(characters)`
    },
    {
      type: 'output',
      content: `Arthur performs a powerful sword strike!
Arthur takes 10 damage. Health: 110
Merlin casts a devastating fireball!
Merlin takes 10 damage. Health: 80
Lancelot performs a powerful sword strike!
Lancelot takes 10 damage. Health: 100`
    },
    {
      type: 'text',
      title: 'Best Practices and Common Patterns',
      content: `**When to Use Abstract Classes:**
- When you have a group of related classes that should share common interface
- When you want to provide some common functionality but enforce certain methods
- When you need to prevent instantiation of base classes
- When designing frameworks or libraries where others will extend your classes

**Design Tips:**
- Keep abstract methods focused and single-purpose
- Provide meaningful error messages in abstract methods if needed
- Use descriptive names that clearly indicate what subclasses should implement
- Consider providing default implementations in concrete methods when appropriate
- Document the expected behavior of abstract methods clearly

**Common Use Cases:**
- Payment processors (different payment methods, same interface)
- File formats (different parsers, same reading/writing interface)
- Game characters (different types, same basic actions)
- Database connections (different databases, same connection interface)`
    }
  ]
};

export default abstractClassesContent;