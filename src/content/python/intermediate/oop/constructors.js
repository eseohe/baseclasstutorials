// Lesson content for Constructors
export const constructorsContent = {
  id: 'constructors',
  title: 'Constructors',
  duration: '28 min',
  overview: `Master Python class constructors and initialization! Learn to create objects with custom initial data, understand the __init__ method, use default parameters, and handle object setup automatically when instances are created.`,
  objectives: [
    'Understand what constructors are and why they are essential',
    'Master the __init__ method for object initialization',
    'Use constructor parameters to set initial object state',
    'Implement default parameter values in constructors',
    'Handle validation and setup logic during object creation',
    'Build classes with robust initialization patterns',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Constructors',
      content: `A constructor is a special method that automatically runs when you create a new object from a class. In Python, the constructor is the \`__init__\` method.

**Why constructors are important:**
- **Automatic initialization**: Set up object data when it's created
- **Required setup**: Ensure objects start in a valid state
- **Convenience**: Pass initial values directly when creating objects
- **Consistency**: Guarantee all objects have necessary attributes

**Constructor vs regular methods:**
- **Constructor**: Runs automatically during object creation
- **Regular method**: Must be called manually after object creation

**The __init__ method:**
- Always named \`__init__\` (double underscores on both sides)
- First parameter is always \`self\`
- Called automatically when you create an object
- Cannot return a value (returns None implicitly)`
    },
    {
      type: 'code',
      title: 'Basic Constructor Example',
      language: 'python',
      code: `# Class without constructor (manual setup required)
class PersonWithoutConstructor:
    def set_info(self, name, age):
        self.name = name
        self.age = age

# Class with constructor (automatic setup)
class PersonWithConstructor:
    def __init__(self, name, age):
        self.name = name
        self.age = age

# Compare the difference
# Without constructor - extra step needed
person1 = PersonWithoutConstructor()
person1.set_info("Alice", 25)

# With constructor - setup happens automatically
person2 = PersonWithConstructor("Bob", 30)

print("Person 1:", person1.name)
print("Person 2:", person2.name)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Person 1: Alice
Person 2: Bob`
    },
    {
      type: 'code',
      title: 'Constructor with Multiple Attributes',
      language: 'python',
      code: `# Constructor setting up multiple attributes
class Student:
    def __init__(self, name, student_id, major):
        self.name = name
        self.student_id = student_id
        self.major = major
        self.gpa = 0.0  # Default value set in constructor
        self.credits = 0  # Default value set in constructor

# Create students with initial data
alice = Student("Alice Johnson", "S12345", "Computer Science")
bob = Student("Bob Smith", "S67890", "Mathematics")

print("Student:", alice.name)
print("ID:", alice.student_id)
print("Major:", alice.major)
print("GPA:", alice.gpa)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Student: Alice Johnson
ID: S12345
Major: Computer Science
GPA: 0.0`
    },
    {
      type: 'text',
      title: 'Default Parameters in Constructors',
      content: `Constructors can have default parameter values, making some arguments optional when creating objects.

**Benefits of default parameters:**
- **Flexibility**: Some objects need minimal setup, others need more
- **Convenience**: Provide sensible defaults for common values
- **Backward compatibility**: Add new parameters without breaking existing code
- **Simplicity**: Reduce the number of required arguments

**Parameter order rules:**
- Required parameters come first
- Optional parameters (with defaults) come after
- Most common defaults should be near the end

**Common default patterns:**
- Empty collections: \`items=[]\` (but be careful with mutable defaults!)
- Zero/None values: \`count=0\`, \`parent=None\`
- Boolean flags: \`active=True\`, \`visible=False\``
    },
    {
      type: 'code',
      title: 'Constructor with Default Parameters',
      language: 'python',
      code: `# Constructor with optional parameters
class BankAccount:
    def __init__(self, account_holder, initial_balance=0, account_type="Checking"):
        self.account_holder = account_holder
        self.balance = initial_balance
        self.account_type = account_type
        self.transaction_count = 0

# Create accounts with different amounts of information
# Minimal - only required parameter
basic_account = BankAccount("John Doe")

# With initial balance
funded_account = BankAccount("Jane Smith", 1000)

# With all parameters
premium_account = BankAccount("Bob Johnson", 5000, "Savings")

print("Basic account:", basic_account.account_holder)
print("Basic balance:", basic_account.balance)
print("Funded balance:", funded_account.balance)
print("Premium type:", premium_account.account_type)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Basic account: John Doe
Basic balance: 0
Funded balance: 1000
Premium type: Savings`
    },
    {
      type: 'code',
      title: 'Constructor with Validation',
      language: 'python',
      code: `# Constructor that validates input data
class Rectangle:
    def __init__(self, width, height):
        # Validate input before setting attributes
        if width <= 0:
            print("Warning: Width must be positive, setting to 1")
            width = 1
        if height <= 0:
            print("Warning: Height must be positive, setting to 1")
            height = 1
        
        self.width = width
        self.height = height
        self.area = width * height
    
    def get_info(self):
        return "Rectangle: " + str(self.width) + " x " + str(self.height)

# Test with valid and invalid values
valid_rect = Rectangle(5, 3)
invalid_rect = Rectangle(-2, 4)

print("Valid rectangle:", valid_rect.get_info())
print("Invalid rectangle:", invalid_rect.get_info())`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Warning: Width must be positive, setting to 1
Valid rectangle: Rectangle: 5 x 3
Invalid rectangle: Rectangle: 1 x 4`
    },
    {
      type: 'text',
      title: 'Avoiding Mutable Default Arguments',
      content: `**Critical Python gotcha**: Never use mutable objects (lists, dictionaries) as default parameter values!

**The problem:**
\`def __init__(self, items=[]):\`  - This creates ONE list shared by ALL objects!

**Why this happens:**
- Default values are created once when the function is defined
- The same list object is reused for every function call
- All objects end up sharing the same list

**The solution:**
\`def __init__(self, items=None):\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;if items is None:\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;items = []\`

**Safe patterns:**
- Use \`None\` as default, create new object inside constructor
- Use immutable defaults: strings, numbers, tuples
- Document when parameters will be modified`
    },
    {
      type: 'code',
      title: 'Mutable Default Arguments - Problem and Solution',
      language: 'python',
      code: `# ❌ WRONG: Mutable default argument
class BadShoppingCart:
    def __init__(self, items=[]):
        self.items = items  # All objects share the same list!

# ✅ CORRECT: Avoid mutable defaults
class GoodShoppingCart:
    def __init__(self, items=None):
        if items is None:
            self.items = []  # New list for each object
        else:
            self.items = items

# Demonstrate the problem
cart1 = BadShoppingCart()
cart2 = BadShoppingCart()

cart1.items.append("Apple")
print("Cart1 items:", cart1.items)
print("Cart2 items:", cart2.items)  # Accidentally shares the list!

# Show the solution
good_cart1 = GoodShoppingCart()
good_cart2 = GoodShoppingCart()

good_cart1.items.append("Orange")
print("Good cart1:", good_cart1.items)
print("Good cart2:", good_cart2.items)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Cart1 items: ['Apple']
Cart2 items: ['Apple']
Good cart1: ['Orange']
Good cart2: []`
    },
    {
      type: 'code',
      title: 'Complex Constructor Example',
      language: 'python',
      code: `# Comprehensive constructor with validation and setup
class Employee:
    company_name = "Tech Solutions Inc"
    
    def __init__(self, name, department, salary=50000, manager=None):
        # Validate and set basic info
        self.name = name.strip()  # Clean up whitespace
        self.department = department.title()  # Standardize capitalization
        
        # Validate salary
        if salary < 0:
            print("Warning: Salary cannot be negative, setting to 0")
            salary = 0
        self.salary = salary
        
        # Set optional manager
        self.manager = manager
        
        # Initialize computed attributes
        self.employee_id = self._generate_id()
        self.years_employed = 0
        self.performance_reviews = []
    
    def _generate_id(self):
        # Simple ID generation (in real systems, this would be more sophisticated)
        name_part = self.name.replace(" ", "").upper()[:3]
        dept_part = self.department[:3].upper()
        return name_part + dept_part + "001"
    
    def get_summary(self):
        manager_info = " (Manager: " + self.manager + ")" if self.manager else ""
        return self.name + " - " + self.department + manager_info

# Create employees with different initialization patterns
alice = Employee("alice johnson", "engineering", 75000)
bob = Employee("Bob Smith", "MARKETING", manager="Alice Johnson")
charlie = Employee("Charlie Brown", "Sales", -1000)  # Invalid salary

print("Alice ID:", alice.employee_id)
print("Alice summary:", alice.get_summary())
print("Bob summary:", bob.get_summary())
print("Charlie salary:", charlie.salary)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Warning: Salary cannot be negative, setting to 0
Alice ID: ALIENG001
Alice summary: Alice Johnson - Engineering
Bob summary: Bob Smith - Marketing (Manager: Alice Johnson)
Charlie salary: 0`
    },
    {
      type: 'code',
      title: 'Constructor for Data Processing',
      language: 'python',
      code: `# Constructor that processes and transforms input data
class DataProcessor:
    def __init__(self, data_source, processing_options=None):
        self.data_source = data_source
        
        # Set default processing options
        if processing_options is None:
            processing_options = {
                "remove_duplicates": True,
                "sort_data": False,
                "max_items": 1000
            }
        self.options = processing_options
        
        # Process data during initialization
        self.raw_data = self._load_data()
        self.processed_data = self._process_data()
        self.stats = self._calculate_stats()
    
    def _load_data(self):
        # Simulate loading data from source
        if self.data_source == "test":
            return [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
        else:
            return []
    
    def _process_data(self):
        data = self.raw_data.copy()  # Don't modify original
        
        if self.options["remove_duplicates"]:
            # Remove duplicates while preserving order
            seen = set()
            data = [x for x in data if not (x in seen or seen.add(x))]
        
        if self.options["sort_data"]:
            data.sort()
        
        # Limit items
        max_items = self.options["max_items"]
        if len(data) > max_items:
            data = data[:max_items]
        
        return data
    
    def _calculate_stats(self):
        if not self.processed_data:
            return {"count": 0, "average": 0}
        
        return {
            "count": len(self.processed_data),
            "average": sum(self.processed_data) / len(self.processed_data)
        }
    
    def get_summary(self):
        return ("Processed " + str(self.stats["count"]) + 
                " items, average: " + str(round(self.stats["average"], 2)))

# Create processor with automatic data processing
processor = DataProcessor("test", {"remove_duplicates": True, "sort_data": True})

print("Original data:", processor.raw_data)
print("Processed data:", processor.processed_data)
print("Summary:", processor.get_summary())`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Original data: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
Processed data: [1, 2, 3, 4, 5, 6, 9]
Summary: Processed 7 items, average: 4.29`
    },
    {
      type: 'text',
      title: 'Constructor Best Practices',
      content: `**Essential constructor guidelines:**

**1. Keep constructors focused:**
- Set up object state and essential attributes
- Avoid complex business logic
- Prefer simple, predictable initialization

**2. Validate input data:**
- Check for required parameters
- Validate ranges and formats
- Provide helpful error messages or corrections

**3. Use meaningful parameter names:**
- \`Customer(name, email)\` not \`Customer(n, e)\`
- \`Rectangle(width, height)\` not \`Rectangle(x, y)\`

**4. Provide sensible defaults:**
- Most common values should be defaults
- Make objects usable with minimal parameters
- Document what defaults mean

**5. Initialize all attributes:**
- Set all attributes in the constructor
- Don't leave attributes undefined
- Use \`None\` for attributes that will be set later

**6. Avoid expensive operations:**
- Don't load large files or make network requests
- Keep constructors fast and lightweight
- Use lazy loading for expensive resources`
    },
    {
      type: 'code',
      title: 'Best Practices Example',
      language: 'python',
      code: `# Well-designed constructor following best practices
class TaskManager:
    def __init__(self, user_name, max_tasks=100, auto_save=True):
        # Validate required parameters
        if not user_name or user_name.strip() == "":
            raise ValueError("User name cannot be empty")
        
        # Set core attributes with validation
        self.user_name = user_name.strip()
        self.max_tasks = max(1, min(max_tasks, 1000))  # Clamp between 1-1000
        self.auto_save = auto_save
        
        # Initialize collections with safe defaults
        self.tasks = []
        self.completed_tasks = []
        
        # Initialize tracking attributes
        self.created_date = "2024-01-01"  # In real app, use datetime
        self.last_modified = None
        self.task_id_counter = 1
        
        # Setup logging
        self.changes_log = []
        self._log_action("TaskManager created for " + self.user_name)
    
    def _log_action(self, action):
        """Private method to log actions"""
        log_entry = "[" + str(len(self.changes_log) + 1) + "] " + action
        self.changes_log.append(log_entry)
    
    def add_task(self, task_description):
        if len(self.tasks) >= self.max_tasks:
            return False  # Task limit reached
        
        task = {
            "id": self.task_id_counter,
            "description": task_description,
            "completed": False
        }
        self.tasks.append(task)
        self.task_id_counter = self.task_id_counter + 1
        self._log_action("Added task: " + task_description)
        return True
    
    def get_status(self):
        total_tasks = len(self.tasks) + len(self.completed_tasks)
        return ("User: " + self.user_name + ", Active: " + str(len(self.tasks)) + 
                ", Total: " + str(total_tasks))

# Create task manager with good practices
try:
    manager = TaskManager("Alice", max_tasks=5)
    manager.add_task("Learn Python OOP")
    manager.add_task("Build a project")
    
    print("Status:", manager.get_status())
    print("Recent actions:", manager.changes_log[-2:])
    
    # Test validation
    empty_manager = TaskManager("")  # This will raise an error
except ValueError as e:
    print("Error:", e)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Status: User: Alice, Active: 2, Total: 2
Recent actions: ['[2] Added task: Learn Python OOP', '[3] Added task: Build a project']
Error: User name cannot be empty`
    },
    {
      type: 'text',
      title: 'Key Takeaways',
      content: `🎯 **Essential Constructor Concepts:**

**The __init__ Method:**
- Special method that runs automatically when objects are created
- Always has \`self\` as the first parameter
- Cannot return values (implicitly returns None)
- Sets up initial object state

**Parameters and Defaults:**
- Required parameters come first
- Optional parameters use default values
- Avoid mutable defaults (use None, then create new objects)
- Validate input parameters for robustness

**Best Practices:**
\`def __init__(self, required_param, optional_param=default):\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;self.attribute = validated_value\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;self.computed_attribute = self._calculate_value()\`

**Common Patterns:**
- **Validation**: Check parameters before assignment
- **Transformation**: Clean and standardize input data
- **Initialization**: Set up collections and computed values
- **Configuration**: Apply default settings and options

**Remember:**
- Constructors make object creation convenient and safe
- Good constructors ensure objects start in valid states
- Always initialize all attributes your class will use
- Keep constructors simple and focused on setup

Constructors are the foundation of well-designed classes - they ensure every object starts life properly configured and ready to use!`
    }
  ]
};