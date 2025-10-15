// Lesson content for Inheritance and Polymorphism
export const inheritancePolymorphismContent = {
  id: 'inheritance-polymorphism',
  title: 'Inheritance and Polymorphism',
  duration: '32 min',
  overview: `Master advanced OOP concepts! Learn how classes can inherit from other classes, share and override behavior, and achieve polymorphism. Build flexible, reusable class hierarchies that model real-world relationships.`,
  objectives: [
    'Understand inheritance and how classes can extend other classes',
    'Create child classes that inherit attributes and methods from parents',
    'Override parent methods to customize behavior in child classes',
    'Use super() to access parent class functionality',
    'Implement polymorphism to write flexible code',
    'Design effective class hierarchies for real-world problems',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Inheritance',
      content: `Inheritance allows you to create new classes based on existing classes, sharing their attributes and methods while adding new functionality.

**Key inheritance concepts:**
- **Parent class (Base/Super class)**: The class being inherited from
- **Child class (Derived/Sub class)**: The class that inherits from the parent
- **Inheritance**: Child classes automatically get parent attributes and methods
- **Override**: Child classes can replace parent methods with their own versions
- **Extend**: Child classes can add new attributes and methods

**Real-world analogy:**
Think of inheritance like family relationships:
- **Parent**: Animal (has basic traits like eating, sleeping)
- **Children**: Dog, Cat, Bird (inherit basic traits, add specific behaviors)
- **Grandchildren**: Labrador, Persian, Eagle (even more specific traits)

**Benefits of inheritance:**
- **Code reuse**: Don't repeat common functionality
- **Organization**: Group related classes in hierarchies
- **Maintainability**: Changes in parent automatically affect children
- **Extensibility**: Easy to add new types by inheriting`
    },
    {
      type: 'code',
      title: 'Basic Inheritance Example',
      language: 'python',
      code: `# Parent class (base class)
class Animal:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.energy = 100
    
    def eat(self):
        self.energy = self.energy + 20
        return self.name + " is eating and gained energy"
    
    def sleep(self):
        self.energy = self.energy + 30
        return self.name + " is sleeping and recovering"
    
    def get_info(self):
        return self.name + " (age " + str(self.age) + ", energy " + str(self.energy) + ")"

# Child class inherits from Animal
class Dog(Animal):
    def bark(self):
        self.energy = self.energy - 5
        return self.name + " says: Woof! Woof!"
    
    def fetch(self):
        self.energy = self.energy - 15
        return self.name + " is fetching the ball!"

# Child class inherits from Animal
class Cat(Animal):
    def meow(self):
        self.energy = self.energy - 5
        return self.name + " says: Meow!"
    
    def climb(self):
        self.energy = self.energy - 10
        return self.name + " is climbing a tree!"

# Create instances of child classes
buddy = Dog("Buddy", 3)
whiskers = Cat("Whiskers", 2)

# Use inherited methods from Animal
print(buddy.eat())
print(whiskers.sleep())

# Use specific methods from child classes
print(buddy.bark())
print(whiskers.meow())

print("Dog info:", buddy.get_info())
print("Cat info:", whiskers.get_info())`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Buddy is eating and gained energy
Whiskers is sleeping and recovering
Buddy says: Woof! Woof!
Whiskers says: Meow!
Dog info: Buddy (age 3, energy 115)
Cat info: Whiskers (age 2, energy 125)`
    },
    {
      type: 'code',
      title: 'Inheritance with Additional Attributes',
      language: 'python',
      code: `# Parent class for all vehicles
class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.fuel_level = 100
    
    def start_engine(self):
        return self.make + " " + self.model + " engine started"
    
    def get_info(self):
        return str(self.year) + " " + self.make + " " + self.model

# Child class with additional attributes
class Car(Vehicle):
    def __init__(self, make, model, year, doors):
        # Call parent constructor to set up inherited attributes
        super().__init__(make, model, year)
        # Add new attribute specific to cars
        self.doors = doors
        self.passengers = 0
    
    def add_passenger(self):
        max_passengers = self.doors  # Simple rule: 1 passenger per door
        if self.passengers < max_passengers:
            self.passengers = self.passengers + 1
            return "Passenger added. Total: " + str(self.passengers)
        else:
            return "Car is full!"
    
    def drive(self):
        if self.fuel_level > 0:
            self.fuel_level = self.fuel_level - 10
            return "Driving the " + self.make + " " + self.model
        else:
            return "Out of fuel!"

class Motorcycle(Vehicle):
    def __init__(self, make, model, year, engine_size):
        super().__init__(make, model, year)
        self.engine_size = engine_size
        self.has_sidecar = False
    
    def wheelie(self):
        self.fuel_level = self.fuel_level - 5
        return "Performing a wheelie on the " + self.make + "!"
    
    def add_sidecar(self):
        self.has_sidecar = True
        return "Sidecar added to " + self.model

# Create vehicles with different attributes
my_car = Car("Toyota", "Camry", 2020, 4)
my_bike = Motorcycle("Honda", "CBR", 2021, 600)

# Use inherited methods
print(my_car.start_engine())
print(my_bike.start_engine())

# Use child-specific methods
print(my_car.add_passenger())
print(my_car.add_passenger())
print(my_car.drive())

print(my_bike.wheelie())
print(my_bike.add_sidecar())

print("Car info:", my_car.get_info())
print("Bike info:", my_bike.get_info())`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Toyota Camry engine started
Honda CBR engine started
Passenger added. Total: 1
Passenger added. Total: 2
Driving the Toyota Camry
Performing a wheelie on the Honda!
Sidecar added to CBR
Car info: 2020 Toyota Camry
Bike info: 2021 Honda CBR`
    },
    {
      type: 'text',
      title: 'Method Overriding',
      content: `Method overriding allows child classes to provide their own implementation of methods inherited from the parent class.

**How overriding works:**
- Child class defines a method with the same name as a parent method
- When called on a child object, the child's version runs instead of the parent's
- Parent method is completely replaced (unless you use \`super()\`)

**Common reasons to override:**
- **Specialized behavior**: Child needs different implementation
- **Additional functionality**: Add extra steps to parent behavior
- **Input validation**: Child has stricter requirements
- **Format changes**: Different output format for child

**Using super():**
- \`super()\` refers to the parent class
- \`super().method_name()\` calls the parent's version of the method
- Allows you to extend rather than completely replace parent behavior
- Essential for constructors when adding new attributes`
    },
    {
      type: 'code',
      title: 'Method Overriding Examples',
      language: 'python',
      code: `# Parent class with methods to override
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
        self.department = "General"
    
    def get_details(self):
        return self.name + " - $" + str(self.salary) + " (" + self.department + ")"
    
    def calculate_bonus(self):
        return self.salary * 0.05  # 5% bonus
    
    def work(self):
        return self.name + " is working on general tasks"

# Child class that overrides methods
class Developer(Employee):
    def __init__(self, name, salary, programming_language):
        super().__init__(name, salary)  # Call parent constructor
        self.programming_language = programming_language
        self.department = "Engineering"  # Override department
    
    # Override get_details to include programming language
    def get_details(self):
        parent_details = super().get_details()  # Get parent version
        return parent_details + " [" + self.programming_language + "]"
    
    # Override calculate_bonus with different rate
    def calculate_bonus(self):
        return self.salary * 0.10  # 10% bonus for developers
    
    # Override work method
    def work(self):
        return self.name + " is coding in " + self.programming_language

class Manager(Employee):
    def __init__(self, name, salary, team_size):
        super().__init__(name, salary)
        self.team_size = team_size
        self.department = "Management"
    
    # Override get_details to include team size
    def get_details(self):
        base_details = super().get_details()
        return base_details + " [Team: " + str(self.team_size) + "]"
    
    # Override calculate_bonus based on team size
    def calculate_bonus(self):
        base_bonus = super().calculate_bonus()  # Get parent calculation
        team_bonus = self.team_size * 1000  # Extra $1000 per team member
        return base_bonus + team_bonus
    
    # Override work method
    def work(self):
        return self.name + " is managing " + str(self.team_size) + " team members"

# Create different types of employees
regular_employee = Employee("Alice", 50000)
developer = Developer("Bob", 80000, "Python")
manager = Manager("Carol", 90000, 5)

# Compare overridden methods
print("Regular employee:", regular_employee.get_details())
print("Developer:", developer.get_details())
print("Manager:", manager.get_details())

print("Regular bonus:", regular_employee.calculate_bonus())
print("Developer bonus:", developer.calculate_bonus())
print("Manager bonus:", manager.calculate_bonus())

print(regular_employee.work())
print(developer.work())
print(manager.work())`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Regular employee: Alice - $50000 (General)
Developer: Bob - $80000 (Engineering) [Python]
Manager: Carol - $90000 (Management) [Team: 5]
Regular bonus: 2500.0
Developer bonus: 8000.0
Manager bonus: 9500.0
Alice is working on general tasks
Bob is coding in Python
Carol is managing 5 team members`
    },
    {
      type: 'text',
      title: 'Understanding Polymorphism',
      content: `Polymorphism means "many forms" - the ability to use objects of different classes through the same interface, where each class can respond differently to the same method call.

**Key polymorphism concepts:**
- **Same interface**: All objects respond to the same method names
- **Different behavior**: Each class implements methods differently
- **Runtime decision**: Python decides which method to call based on the object type
- **Flexibility**: Code can work with any object that has the required methods

**Benefits of polymorphism:**
- **Flexible code**: Works with multiple types without modification
- **Extensibility**: Easy to add new types that work with existing code
- **Maintainability**: Changes to one class don't affect others
- **Abstraction**: Focus on what objects do, not how they do it

**Duck typing principle:**
"If it walks like a duck and quacks like a duck, it's a duck"
- Python doesn't care about the class hierarchy
- If an object has the required methods, it can be used
- No need for formal interfaces or abstract classes`
    },
    {
      type: 'code',
      title: 'Polymorphism in Action',
      language: 'python',
      code: `# Parent class defining common interface
class Shape:
    def __init__(self, name):
        self.name = name
    
    def area(self):
        return 0  # Default implementation
    
    def perimeter(self):
        return 0  # Default implementation
    
    def describe(self):
        return self.name + " with area " + str(self.area())

# Different child classes implementing the same interface differently
class Rectangle(Shape):
    def __init__(self, width, height):
        super().__init__("Rectangle")
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)

class Circle(Shape):
    def __init__(self, radius):
        super().__init__("Circle")
        self.radius = radius
    
    def area(self):
        return 3.14159 * self.radius * self.radius
    
    def perimeter(self):
        return 2 * 3.14159 * self.radius

class Triangle(Shape):
    def __init__(self, base, height, side1, side2, side3):
        super().__init__("Triangle")
        self.base = base
        self.height = height
        self.side1 = side1
        self.side2 = side2
        self.side3 = side3
    
    def area(self):
        return 0.5 * self.base * self.height
    
    def perimeter(self):
        return self.side1 + self.side2 + self.side3

# Function that works with any shape (polymorphism)
def analyze_shape(shape):
    print("Analyzing " + shape.name)
    print("Area: " + str(round(shape.area(), 2)))
    print("Perimeter: " + str(round(shape.perimeter(), 2)))
    print("Description: " + shape.describe())
    print("---")

# Create different shapes
rectangle = Rectangle(5, 3)
circle = Circle(4)
triangle = Triangle(6, 4, 5, 5, 6)

# Same function works with all shapes (polymorphism!)
analyze_shape(rectangle)
analyze_shape(circle)
analyze_shape(triangle)

# List of different shapes - polymorphism in collections
shapes = [rectangle, circle, triangle]
total_area = 0

for shape in shapes:
    total_area = total_area + shape.area()  # Each calls its own area method

print("Total area of all shapes:", round(total_area, 2))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Analyzing Rectangle
Area: 15
Perimeter: 16
Description: Rectangle with area 15
---
Analyzing Circle
Area: 50.27
Perimeter: 25.13
Description: Circle with area 50.26544
---
Analyzing Triangle
Area: 12.0
Perimeter: 16
Description: Triangle with area 12.0
---
Total area of all shapes: 77.27`
    },
    {
      type: 'code',
      title: 'Advanced Polymorphism Example',
      language: 'python',
      code: `# Polymorphism with different types of media players
class MediaPlayer:
    def __init__(self, name):
        self.name = name
        self.is_playing = False
    
    def play(self):
        self.is_playing = True
        return "Playing " + self.name
    
    def stop(self):
        self.is_playing = False
        return "Stopped " + self.name
    
    def get_status(self):
        status = "playing" if self.is_playing else "stopped"
        return self.name + " is " + status

class AudioPlayer(MediaPlayer):
    def __init__(self, song_title, artist):
        super().__init__(song_title)
        self.artist = artist
        self.volume = 50
    
    def play(self):
        result = super().play()
        return result + " by " + self.artist
    
    def adjust_volume(self, new_volume):
        self.volume = max(0, min(100, new_volume))  # Clamp 0-100
        return "Volume set to " + str(self.volume)

class VideoPlayer(MediaPlayer):
    def __init__(self, movie_title, duration):
        super().__init__(movie_title)
        self.duration = duration
        self.current_time = 0
        self.quality = "HD"
    
    def play(self):
        result = super().play()
        return result + " (" + str(self.duration) + " minutes)"
    
    def seek(self, time):
        self.current_time = max(0, min(self.duration, time))
        return "Seeked to " + str(self.current_time) + " minutes"

class PodcastPlayer(MediaPlayer):
    def __init__(self, episode_title, podcast_name, episode_number):
        super().__init__(episode_title)
        self.podcast_name = podcast_name
        self.episode_number = episode_number
        self.playback_speed = 1.0
    
    def play(self):
        result = super().play()
        return result + " - " + self.podcast_name + " #" + str(self.episode_number)
    
    def change_speed(self, speed):
        self.playback_speed = speed
        return "Playback speed: " + str(speed) + "x"

# Function that can control any type of media player
def control_media(player, action):
    print("Controlling: " + player.name)
    
    if action == "play":
        result = player.play()  # Polymorphic call - each type responds differently
        print(result)
    elif action == "stop":
        result = player.stop()
        print(result)
    elif action == "status":
        result = player.get_status()
        print(result)
    
    print("---")

# Create different types of media players
audio = AudioPlayer("Imagine", "John Lennon")
video = VideoPlayer("Inception", 148)
podcast = PodcastPlayer("Python Basics", "Learn Programming", 5)

# Same control function works with all types (polymorphism)
media_list = [audio, video, podcast]

for media in media_list:
    control_media(media, "play")
    control_media(media, "status")

# Use specific methods when needed
print("Audio specific:", audio.adjust_volume(75))
print("Video specific:", video.seek(30))
print("Podcast specific:", podcast.change_speed(1.5))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Controlling: Imagine
Playing Imagine by John Lennon
---
Controlling: Imagine
Imagine is playing
---
Controlling: Inception
Playing Inception (148 minutes)
---
Controlling: Inception
Inception is playing
---
Controlling: Python Basics
Playing Python Basics - Learn Programming #5
---
Controlling: Python Basics
Python Basics is playing
---
Audio specific: Volume set to 75
Video specific: Seeked to 30 minutes
Podcast specific: Playback speed: 1.5x`
    },
    {
      type: 'text',
      title: 'Multiple Inheritance',
      content: `Python supports multiple inheritance - a class can inherit from multiple parent classes simultaneously.

**Multiple inheritance syntax:**
\`class Child(Parent1, Parent2, Parent3):\`

**Method Resolution Order (MRO):**
- When a method is called, Python searches classes in a specific order
- Uses C3 linearization algorithm
- Generally: Child → Parent1 → Parent2 → Parent3 → object
- Use \`ClassName.mro()\` to see the exact order

**Common patterns:**
- **Mixins**: Small classes that provide specific functionality
- **Interface implementation**: Inheriting behavior from multiple sources
- **Diamond problem**: When multiple parents share a common ancestor

**Best practices:**
- Use multiple inheritance sparingly
- Prefer composition over complex inheritance
- Use mixins for shared utility functionality
- Keep inheritance hierarchies simple and clear`
    },
    {
      type: 'code',
      title: 'Multiple Inheritance Example',
      language: 'python',
      code: `# Base classes providing different capabilities
class Flyable:
    def __init__(self):
        self.altitude = 0
        self.flying = False
    
    def take_off(self):
        self.flying = True
        self.altitude = 100
        return "Taking off! Now flying at " + str(self.altitude) + " feet"
    
    def land(self):
        self.flying = False
        self.altitude = 0
        return "Landing safely"

class Swimmable:
    def __init__(self):
        self.depth = 0
        self.swimming = False
    
    def dive(self):
        self.swimming = True
        self.depth = 10
        return "Diving underwater to " + str(self.depth) + " feet"
    
    def surface(self):
        self.swimming = False
        self.depth = 0
        return "Surfacing to water level"

class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
        self.energy = 100
    
    def eat(self):
        self.energy = self.energy + 20
        return self.name + " is eating"
    
    def rest(self):
        self.energy = self.energy + 30
        return self.name + " is resting"

# Multiple inheritance - Duck inherits from all three classes
class Duck(Animal, Flyable, Swimmable):
    def __init__(self, name):
        # Call all parent constructors
        Animal.__init__(self, name, "Duck")
        Flyable.__init__(self)
        Swimmable.__init__(self)
        self.can_quack = True
    
    def quack(self):
        self.energy = self.energy - 5
        return self.name + " says: Quack!"
    
    # Override flying to use energy
    def take_off(self):
        if self.energy < 20:
            return self.name + " is too tired to fly"
        self.energy = self.energy - 20
        return super().take_off()
    
    def get_abilities(self):
        abilities = []
        if hasattr(self, 'flying'):
            abilities.append("can fly")
        if hasattr(self, 'swimming'):
            abilities.append("can swim")
        if self.can_quack:
            abilities.append("can quack")
        return self.name + " " + ", ".join(abilities)

# Class that only inherits from some parents
class Fish(Animal, Swimmable):
    def __init__(self, name, species):
        Animal.__init__(self, name, species)
        Swimmable.__init__(self)
        self.gill_breathing = True
    
    def breathe_underwater(self):
        return self.name + " is breathing through gills"

# Create animals with different capabilities
donald = Duck("Donald")
nemo = Fish("Nemo", "Clownfish")

# Duck can do everything
print(donald.eat())  # From Animal
print(donald.quack())  # Duck specific
print(donald.take_off())  # From Flyable (overridden)
print(donald.dive())  # From Swimmable
print(donald.get_abilities())

print("---")

# Fish can swim and do animal things, but not fly
print(nemo.eat())  # From Animal
print(nemo.dive())  # From Swimmable
print(nemo.breathe_underwater())  # Fish specific

# Check what methods are available
print("Donald can fly:", hasattr(donald, 'take_off'))
print("Nemo can fly:", hasattr(nemo, 'take_off'))
print("Both can swim:", hasattr(donald, 'dive') and hasattr(nemo, 'dive'))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Donald is eating
Donald says: Quack!
Taking off! Now flying at 100 feet
Diving underwater to 10 feet
Donald can fly, can swim, can quack
---
Nemo is eating
Diving underwater to 10 feet
Nemo is breathing through gills
Donald can fly: True
Nemo can fly: False
Both can swim: True`
    },
    {
      type: 'text',
      title: 'Inheritance Best Practices',
      content: `**Design principles for effective inheritance:**

**1. "Is-a" relationship:**
- Use inheritance when the child "is a" type of parent
- Dog "is an" Animal ✅
- Car "has an" Engine (use composition, not inheritance) ❌

**2. Keep hierarchies shallow:**
- Avoid deep inheritance chains (more than 3-4 levels)
- Deep hierarchies become hard to understand and maintain
- Prefer composition for complex relationships

**3. Design for extension:**
- Make parent classes extensible but not overly complex
- Provide clear extension points for child classes
- Document which methods are meant to be overridden

**4. Use super() properly:**
- Always call \`super().__init__()\` in child constructors
- Use \`super().method_name()\` to extend parent behavior
- Maintain the method resolution order

**5. Avoid multiple inheritance complexity:**
- Use mixins for shared functionality
- Keep multiple inheritance simple
- Prefer composition over complex inheritance patterns

**Common anti-patterns to avoid:**
- Inheriting just to reuse code (use composition)
- Deep inheritance hierarchies
- Overriding too many parent methods
- Making parent classes too specific`
    },
    {
      type: 'code',
      title: 'Inheritance Best Practices Example',
      language: 'python',
      code: `# Well-designed inheritance hierarchy following best practices
class BankAccount:
    """Base class for all bank accounts"""
    
    def __init__(self, account_number, initial_balance=0):
        self.account_number = account_number
        self.balance = initial_balance
        self.transaction_history = []
        self.is_active = True
    
    def deposit(self, amount):
        """Deposit money to account"""
        if not self.is_active:
            return "Account is inactive"
        if amount <= 0:
            return "Amount must be positive"
        
        self.balance = self.balance + amount
        self._record_transaction("Deposit", amount)
        return "Deposited $" + str(amount) + ". New balance: $" + str(self.balance)
    
    def withdraw(self, amount):
        """Withdraw money - can be overridden by child classes"""
        if not self.is_active:
            return "Account is inactive"
        if amount <= 0:
            return "Amount must be positive"
        if amount > self.balance:
            return "Insufficient funds"
        
        self.balance = self.balance - amount
        self._record_transaction("Withdrawal", amount)
        return "Withdrew $" + str(amount) + ". New balance: $" + str(self.balance)
    
    def get_balance(self):
        """Get current balance"""
        return self.balance
    
    def _record_transaction(self, transaction_type, amount):
        """Private method for recording transactions"""
        transaction = transaction_type + ": $" + str(amount)
        self.transaction_history.append(transaction)

class SavingsAccount(BankAccount):
    """Savings account with interest and withdrawal limits"""
    
    def __init__(self, account_number, initial_balance=0, interest_rate=0.02):
        super().__init__(account_number, initial_balance)
        self.interest_rate = interest_rate
        self.monthly_withdrawals = 0
        self.max_monthly_withdrawals = 6
    
    def withdraw(self, amount):
        """Override withdraw to enforce monthly limits"""
        if self.monthly_withdrawals >= self.max_monthly_withdrawals:
            return "Monthly withdrawal limit exceeded"
        
        result = super().withdraw(amount)  # Call parent withdraw
        if "Withdrew" in result:  # If withdrawal was successful
            self.monthly_withdrawals = self.monthly_withdrawals + 1
        
        return result
    
    def add_interest(self):
        """Add monthly interest"""
        interest = self.balance * self.interest_rate / 12
        self.balance = self.balance + interest
        self._record_transaction("Interest", interest)
        return "Added interest: $" + str(round(interest, 2))
    
    def reset_monthly_withdrawals(self):
        """Reset withdrawal counter (called monthly)"""
        self.monthly_withdrawals = 0
        return "Monthly withdrawal counter reset"

class CheckingAccount(BankAccount):
    """Checking account with overdraft protection"""
    
    def __init__(self, account_number, initial_balance=0, overdraft_limit=500):
        super().__init__(account_number, initial_balance)
        self.overdraft_limit = overdraft_limit
        self.overdraft_fee = 35
    
    def withdraw(self, amount):
        """Override withdraw to allow overdrafts"""
        if not self.is_active:
            return "Account is inactive"
        if amount <= 0:
            return "Amount must be positive"
        
        # Check if withdrawal would exceed overdraft limit
        potential_balance = self.balance - amount
        if potential_balance < -self.overdraft_limit:
            return "Exceeds overdraft limit of $" + str(self.overdraft_limit)
        
        # Process withdrawal
        self.balance = self.balance - amount
        self._record_transaction("Withdrawal", amount)
        
        # Apply overdraft fee if balance goes negative
        result = "Withdrew $" + str(amount)
        if self.balance < 0:
            self.balance = self.balance - self.overdraft_fee
            self._record_transaction("Overdraft Fee", self.overdraft_fee)
            result = result + " (Overdraft fee: $" + str(self.overdraft_fee) + ")"
        
        result = result + ". New balance: $" + str(self.balance)
        return result

# Function that works with any type of account (polymorphism)
def process_transactions(account, transactions):
    """Process a list of transactions on any account type"""
    print("Processing transactions for account " + account.account_number)
    
    for transaction_type, amount in transactions:
        if transaction_type == "deposit":
            result = account.deposit(amount)
        elif transaction_type == "withdraw":
            result = account.withdraw(amount)
        print(result)
    
    print("Final balance: $" + str(account.get_balance()))
    print("---")

# Create different account types
savings = SavingsAccount("SAV001", 1000, 0.03)
checking = CheckingAccount("CHK001", 500, 1000)

# Same function works with different account types
savings_transactions = [("withdraw", 100), ("deposit", 50), ("withdraw", 200)]
checking_transactions = [("withdraw", 600), ("withdraw", 500), ("deposit", 100)]

process_transactions(savings, savings_transactions)
process_transactions(checking, checking_transactions)

# Use account-specific features
print("Savings interest:", savings.add_interest())
print("Checking overdraft limit: $" + str(checking.overdraft_limit))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Processing transactions for account SAV001
Withdrew $100. New balance: $900
Deposited $50. New balance: $950
Withdrew $200. New balance: $750
Final balance: $750
---
Processing transactions for account CHK001
Withdrew $600 (Overdraft fee: $35). New balance: $-135
Withdrew $500 (Overdraft fee: $35). New balance: $-670
Deposited $100. New balance: $-570
Final balance: $-570
---
Savings interest: Added interest: $1.88
Checking overdraft limit: $1000`
    },
    {
      type: 'text',
      title: 'Key Takeaways',
      content: `🎯 **Inheritance and Polymorphism Summary:**

**Inheritance Basics:**
\`class Child(Parent):\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, ...):\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super().__init__(...)\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Child-specific initialization\`

**Method Overriding:**
\`def parent_method(self):\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;# Call parent version first\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;result = super().parent_method()\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;# Add child-specific behavior\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;return modified_result\`

**Polymorphism Pattern:**
\`def process_object(obj):\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;# Works with any object that has these methods\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;obj.common_method()  # Each class implements differently\`

**Key Concepts:**
- **Inheritance**: Child classes get parent attributes and methods
- **Override**: Replace parent methods with child-specific versions
- **Extend**: Add new functionality while keeping parent behavior
- **Polymorphism**: Same interface, different implementations

**Best Practices:**
- Use inheritance for "is-a" relationships
- Keep inheritance hierarchies shallow (2-3 levels max)
- Always call \`super().__init__()\` in child constructors
- Design parent classes to be extensible
- Use polymorphism to write flexible code

**Remember:**
- Inheritance promotes code reuse and organization
- Polymorphism enables flexible, extensible designs
- Good inheritance hierarchies model real-world relationships
- Composition is often better than complex inheritance

Master inheritance and polymorphism to build scalable, maintainable object-oriented systems!`
    }
  ]
};