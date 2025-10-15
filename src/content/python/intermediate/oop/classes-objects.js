// Lesson content for Classes and objects
export const classesObjectsContent = {
  id: 'classes-objects',
  title: 'Classes and objects',
  duration: '30 min',
  overview: `Master the fundamentals of Object-Oriented Programming in Python! Learn to create classes and objects, understand the relationship between them, and build your first custom data types with attributes and methods.`,
  objectives: [
    'Understand what classes and objects are and their relationship',
    'Create custom classes with attributes and methods',
    'Instantiate objects from classes and use them effectively',
    'Understand the difference between class and instance attributes',
    'Work with methods and understand the self parameter',
    'Apply OOP principles to solve real-world programming problems',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Object-Oriented Programming',
      content: `Object-Oriented Programming (OOP) is a programming paradigm that organizes code around objects - things that have both data (attributes) and behavior (methods).

**Key OOP concepts:**
- **Class**: A blueprint or template for creating objects
- **Object**: An instance of a class with actual data
- **Attributes**: Data stored in objects (variables)
- **Methods**: Functions that belong to objects
- **Instance**: A specific object created from a class

**Think of classes like:**
- **Car class**: Blueprint for all cars
- **Car object**: A specific car (your Toyota, neighbor's Honda)
- **Attributes**: Color, model, year, mileage
- **Methods**: start(), stop(), accelerate(), brake()

**Benefits of OOP:**
- **Organization**: Group related data and functions together
- **Reusability**: Create multiple objects from one class
- **Modularity**: Separate concerns into different classes
- **Maintainability**: Easier to modify and extend code`
    },
    {
      type: 'code',
      title: 'Creating Your First Class',
      language: 'python',
      code: `# Creating a simple Person class
class Person:
    pass  # Empty class for now

# Creating objects (instances) from the class
person1 = Person()
person2 = Person()

print("Person1 type:", type(person1))
print("Person2 type:", type(person2))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Person1 type: <class '__main__.Person'>
Person2 type: <class '__main__.Person'>`
    },
    {
      type: 'code',
      title: 'Adding Attributes to Objects',
      language: 'python',
      code: `# Adding attributes to objects dynamically
class Person:
    pass

# Create a person and add attributes
alice = Person()
alice.name = "Alice"
alice.age = 25

bob = Person()
bob.name = "Bob"
bob.age = 30

print("Alice's name:", alice.name)
print("Bob's age:", bob.age)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Alice's name: Alice
Bob's age: 30`
    },
    {
      type: 'text',
      title: 'Creating Classes with Methods',
      content: `Methods are functions that belong to a class and operate on objects of that class. They have access to the object's data through the special \`self\` parameter.

**Understanding self:**
- \`self\` refers to the current object instance
- It's automatically passed as the first parameter to methods
- Use \`self\` to access object attributes and other methods
- You don't pass \`self\` when calling methods

**Method syntax:**
\`\`\`python
class MyClass:
    def my_method(self):
        # Method code here
        pass
\`\`\``
    },
    {
      type: 'code',
      title: 'Class with Methods',
      language: 'python',
      code: `# Creating a class with methods
class Dog:
    def set_name(self, name):
        self.name = name
    
    def bark(self):
        return "Woof! My name is " + self.name

# Create a dog object and use methods
my_dog = Dog()
my_dog.set_name("Buddy")
bark_sound = my_dog.bark()

print("Dog's name:", my_dog.name)
print("Bark:", bark_sound)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Dog's name: Buddy
Bark: Woof! My name is Buddy`
    },
    {
      type: 'code',
      title: 'Methods with Parameters',
      language: 'python',
      code: `# Methods can accept additional parameters
class Calculator:
    def add(self, a, b):
        return a + b
    
    def multiply(self, a, b):
        result = a * b
        return result

# Create calculator and use methods
calc = Calculator()
sum_result = calc.add(5, 3)
product_result = calc.multiply(4, 7)

print("5 + 3 =", sum_result)
print("4 × 7 =", product_result)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `5 + 3 = 8
4 × 7 = 28`
    },
    {
      type: 'text',
      title: 'Instance Attributes vs Class Attributes',
      content: `There are two types of attributes in Python classes:

**Instance Attributes:**
- Unique to each object
- Created using \`self.attribute_name\`
- Different objects can have different values
- Most commonly used type

**Class Attributes:**
- Shared by all objects of the class
- Defined directly in the class (not in methods)
- Same value for all instances
- Used for constants or shared data

**When to use each:**
- **Instance attributes**: Data unique to each object (name, age, ID)
- **Class attributes**: Data shared by all objects (species, constants)`
    },
    {
      type: 'code',
      title: 'Instance vs Class Attributes',
      language: 'python',
      code: `# Demonstrating instance vs class attributes
class Student:
    # Class attribute (shared by all students)
    school_name = "Python Academy"
    
    def set_info(self, name, grade):
        # Instance attributes (unique to each student)
        self.name = name
        self.grade = grade

# Create multiple students
alice = Student()
alice.set_info("Alice", "A")

bob = Student()
bob.set_info("Bob", "B")

print("Alice attends:", alice.school_name)
print("Alice's grade:", alice.grade)
print("Bob attends:", bob.school_name)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Alice attends: Python Academy
Alice's grade: A
Bob attends: Python Academy`
    },
    {
      type: 'code',
      title: 'Modifying Attributes',
      language: 'python',
      code: `# Modifying object attributes
class BankAccount:
    def set_balance(self, initial_balance):
        self.balance = initial_balance
    
    def deposit(self, amount):
        self.balance = self.balance + amount
    
    def get_balance(self):
        return self.balance

# Create account and modify balance
account = BankAccount()
account.set_balance(100)
account.deposit(50)
current_balance = account.get_balance()

print("Current balance:", current_balance)
print("Account type:", type(account).__name__)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Current balance: 150
Account type: BankAccount`
    },
    {
      type: 'text',
      title: 'Building a Complete Class Example',
      content: `Let's build a more comprehensive class that demonstrates all the concepts we've learned: attributes, methods, and object interaction.

**Design considerations:**
- What data does the object need? (attributes)
- What actions can the object perform? (methods)
- How do objects interact with each other?
- What information should be hidden or exposed?

**Best practices:**
- Use descriptive names for classes, methods, and attributes
- Keep methods focused on a single responsibility
- Group related functionality together
- Make classes reusable and flexible`
    },
    {
      type: 'code',
      title: 'Complete Book Class Example',
      language: 'python',
      code: `# Complete class example: Book
class Book:
    def set_info(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
        self.current_page = 1
    
    def read_pages(self, num_pages):
        if self.current_page + num_pages <= self.pages:
            self.current_page = self.current_page + num_pages
            return "Read " + str(num_pages) + " pages"
        else:
            return "Not enough pages remaining"
    
    def get_progress(self):
        percentage = (self.current_page / self.pages) * 100
        return round(percentage, 1)

# Create and use a book object
my_book = Book()
my_book.set_info("Python Programming", "Jane Doe", 300)
read_result = my_book.read_pages(50)
progress = my_book.get_progress()

print("Book:", my_book.title)
print("Reading result:", read_result)
print("Progress:", str(progress) + "%")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Book: Python Programming
Reading result: Read 50 pages
Progress: 17.0%`
    },
    {
      type: 'code',
      title: 'Multiple Objects Interaction',
      language: 'python',
      code: `# Creating multiple objects and comparing them
class Rectangle:
    def set_dimensions(self, width, height):
        self.width = width
        self.height = height
    
    def get_area(self):
        return self.width * self.height
    
    def compare_area(self, other_rectangle):
        my_area = self.get_area()
        other_area = other_rectangle.get_area()
        if my_area > other_area:
            return "This rectangle is larger"
        elif my_area < other_area:
            return "This rectangle is smaller"
        else:
            return "Both rectangles have equal area"

# Create two rectangles
rect1 = Rectangle()
rect1.set_dimensions(5, 4)

rect2 = Rectangle()
rect2.set_dimensions(3, 6)

comparison = rect1.compare_area(rect2)
print("Rectangle 1 area:", rect1.get_area())
print("Rectangle 2 area:", rect2.get_area())
print("Comparison:", comparison)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Rectangle 1 area: 20
Rectangle 2 area: 18
Comparison: This rectangle is larger`
    },
    {
      type: 'text',
      title: 'Practical Applications',
      content: `Classes and objects are fundamental to organizing code and modeling real-world entities in your programs.

**Common use cases:**
- **Data modeling**: Representing users, products, transactions
- **Game development**: Players, enemies, items, levels
- **Web applications**: Database records, user sessions, API responses
- **Scientific computing**: Experiments, measurements, simulations
- **Business applications**: Customers, orders, inventory items
- **GUI applications**: Windows, buttons, menus, forms

**When to create a class:**
- When you have related data and functions
- When you need multiple instances of something
- When you want to model real-world entities
- When you need to organize complex functionality`
    },
    {
      type: 'code',
      title: 'Practical Example: Employee Management',
      language: 'python',
      code: `# Practical class for employee management
class Employee:
    company_name = "Tech Solutions Inc"  # Class attribute
    
    def set_employee_info(self, name, department, salary):
        self.name = name
        self.department = department
        self.salary = salary
        self.years_employed = 0
    
    def give_raise(self, percentage):
        increase = self.salary * (percentage / 100)
        self.salary = self.salary + increase
        return "Salary increased by " + str(percentage) + "%"
    
    def add_years(self, years):
        self.years_employed = self.years_employed + years
    
    def get_summary(self):
        return (self.name + " works in " + self.department + 
                " and earns $" + str(int(self.salary)))

# Create employee
alice = Employee()
alice.set_employee_info("Alice Johnson", "Engineering", 75000)
alice.add_years(2)
raise_message = alice.give_raise(10)

print("Employee summary:", alice.get_summary())
print("Company:", alice.company_name)
print("Years employed:", alice.years_employed)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Employee summary: Alice Johnson works in Engineering and earns $82500
Company: Tech Solutions Inc
Years employed: 2`
    },
    {
      type: 'code',
      title: 'Practical Example: Shopping Cart',
      language: 'python',
      code: `# Shopping cart class for e-commerce
class ShoppingCart:
    def __init_cart(self):
        self.items = []
        self.total = 0
    
    def add_item(self, name, price, quantity):
        if not hasattr(self, 'items'):
            self.__init_cart()
        
        item = {
            "name": name,
            "price": price,
            "quantity": quantity,
            "subtotal": price * quantity
        }
        self.items.append(item)
        self.total = self.total + item["subtotal"]
    
    def get_item_count(self):
        if not hasattr(self, 'items'):
            return 0
        return len(self.items)
    
    def get_total(self):
        if not hasattr(self, 'total'):
            return 0
        return self.total

# Create shopping cart and add items
cart = ShoppingCart()
cart.add_item("Python Book", 29.99, 1)
cart.add_item("Coffee Mug", 12.50, 2)

print("Items in cart:", cart.get_item_count())
print("Total cost: $" + str(cart.get_total()))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Items in cart: 2
Total cost: $54.99`
    },
    {
      type: 'text',
      title: 'Key Takeaways',
      content: `🎯 **Key Points to Remember:**

**Classes and Objects:**
- **Class**: Blueprint for creating objects
- **Object**: Instance of a class with actual data
- **self**: Reference to the current object instance

**Creating Classes:**
\`class MyClass:\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;def my_method(self):\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pass\`

**Creating Objects:**
\`obj = MyClass()\`  
\`obj.my_method()\`

**Attributes:**
- **Instance attributes**: \`self.attribute = value\`
- **Class attributes**: Defined in class body, shared by all instances

**Methods:**
- Functions that belong to a class
- Always have \`self\` as first parameter
- Can access and modify object attributes

**Best Practices:**
- Use descriptive class and method names
- Group related data and behavior together
- Keep methods focused and simple
- Use classes when you need multiple instances
- Think about real-world entities when designing classes

Object-Oriented Programming helps you write organized, reusable, and maintainable code. Start thinking in terms of objects and their interactions!`
    }
  ]
};