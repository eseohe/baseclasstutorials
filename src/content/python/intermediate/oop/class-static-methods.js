// Lesson content for Class and Static Methods
export const classStaticMethodsContent = {
  id: 'class-static-methods',
  title: 'Class and Static Methods',
  duration: '25 min',
  overview: `Discover advanced method types in Python classes! Learn the difference between instance, class, and static methods. Master @classmethod and @staticmethod decorators to create flexible, well-organized class designs.`,
  objectives: [
    'Understand the three types of methods: instance, class, and static',
    'Use @classmethod decorator for methods that work with the class itself',
    'Use @staticmethod decorator for utility functions within classes',
    'Create alternative constructors using class methods',
    'Organize utility functions logically within classes',
    'Choose the right method type for different scenarios',
  ],
  sections: [
    {
      type: 'text',
      title: 'Types of Methods in Python Classes',
      content: `Python classes can have three different types of methods, each serving different purposes:

**1. Instance Methods (Regular Methods):**
- Work with individual object instances
- Have access to \`self\` and object attributes
- Can modify object state
- Most common type of method

**2. Class Methods:**
- Work with the class itself, not individual instances
- Have access to \`cls\` (the class) and class attributes
- Cannot access instance attributes directly
- Use \`@classmethod\` decorator

**3. Static Methods:**
- Independent utility functions inside the class
- No access to \`self\` or \`cls\`
- Cannot access instance or class attributes
- Use \`@staticmethod\` decorator

**When to use each:**
- **Instance methods**: When you need to work with object data
- **Class methods**: When you need to work with class-level data or create alternative constructors
- **Static methods**: When you have utility functions that belong logically with the class`
    },
    {
      type: 'code',
      title: 'Basic Method Types Comparison',
      language: 'python',
      code: `# Demonstration of all three method types
class Calculator:
    # Class attribute
    calculation_count = 0
    
    def __init__(self, name):
        # Instance attribute
        self.name = name
        self.history = []
    
    # Instance method - works with individual calculator objects
    def add(self, a, b):
        result = a + b
        self.history.append("Added " + str(a) + " + " + str(b) + " = " + str(result))
        Calculator.calculation_count = Calculator.calculation_count + 1
        return result
    
    # Class method - works with the class itself
    @classmethod
    def get_total_calculations(cls):
        return "Total calculations performed: " + str(cls.calculation_count)
    
    # Static method - utility function (no access to self or cls)
    @staticmethod
    def is_even(number):
        return number % 2 == 0

# Test different method types
calc1 = Calculator("Basic Calculator")
calc2 = Calculator("Advanced Calculator")

# Instance methods - need specific calculator objects
result1 = calc1.add(5, 3)
result2 = calc2.add(10, 7)

print("Result 1:", result1)
print("Calc1 history:", calc1.history)

# Class method - can be called on class or any instance
print(Calculator.get_total_calculations())
print(calc1.get_total_calculations())  # Same result

# Static method - can be called on class or any instance
print("Is 8 even?", Calculator.is_even(8))
print("Is 7 even?", calc1.is_even(7))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Result 1: 8
Calc1 history: ['Added 5 + 3 = 8']
Total calculations performed: 2
Total calculations performed: 2
Is 8 even? True
Is 7 even? False`
    },
    {
      type: 'text',
      title: 'Class Methods in Detail',
      content: `Class methods receive the class itself as the first parameter (conventionally named \`cls\`) instead of an instance.

**Key characteristics:**
- Use \`@classmethod\` decorator above the method definition
- First parameter is \`cls\` (the class, not an instance)
- Can access and modify class attributes
- Cannot access instance attributes directly
- Can be called on the class or any instance

**Common use cases:**
- **Alternative constructors**: Create objects in different ways
- **Class-level operations**: Work with shared class data
- **Factory methods**: Create specialized instances
- **Utility methods**: Operations that need class information

**Alternative constructors pattern:**
Class methods are often used to create objects with different initialization logic than the main constructor.`
    },
    {
      type: 'code',
      title: 'Class Methods as Alternative Constructors',
      language: 'python',
      code: `# Using class methods for alternative constructors
class Person:
    def __init__(self, name, age, email):
        self.name = name
        self.age = age
        self.email = email
    
    @classmethod
    def from_string(cls, person_string):
        """Create Person from comma-separated string"""
        name, age, email = person_string.split(",")
        return cls(name.strip(), int(age.strip()), email.strip())
    
    @classmethod
    def from_birth_year(cls, name, birth_year, email):
        """Create Person from birth year instead of age"""
        current_year = 2024  # In real code, use datetime
        age = current_year - birth_year
        return cls(name, age, email)
    
    @classmethod
    def create_anonymous(cls):
        """Create anonymous person with default values"""
        return cls("Anonymous", 0, "no-email@example.com")
    
    def get_info(self):
        return self.name + " (" + str(self.age) + ") - " + self.email

# Different ways to create Person objects
# Regular constructor
person1 = Person("Alice", 25, "alice@email.com")

# From string (alternative constructor)
person2 = Person.from_string("Bob Smith, 30, bob@email.com")

# From birth year (alternative constructor)
person3 = Person.from_birth_year("Charlie", 1990, "charlie@email.com")

# Anonymous person (alternative constructor)
person4 = Person.create_anonymous()

print("Person 1:", person1.get_info())
print("Person 2:", person2.get_info())
print("Person 3:", person3.get_info())
print("Person 4:", person4.get_info())`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Person 1: Alice (25) - alice@email.com
Person 2: Bob Smith (30) - bob@email.com
Person 3: Charlie (34) - charlie@email.com
Person 4: Anonymous (0) - no-email@example.com`
    },
    {
      type: 'code',
      title: 'Class Methods for Class-Level Operations',
      language: 'python',
      code: `# Class methods working with class-level data
class Student:
    # Class attributes
    school_name = "Python Academy"
    total_students = 0
    grade_boundaries = {"A": 90, "B": 80, "C": 70, "D": 60}
    
    def __init__(self, name, student_id):
        self.name = name
        self.student_id = student_id
        self.grades = []
        # Increment class counter when new student is created
        Student.total_students = Student.total_students + 1
    
    def add_grade(self, grade):
        self.grades.append(grade)
    
    def get_average(self):
        if not self.grades:
            return 0
        return sum(self.grades) / len(self.grades)
    
    @classmethod
    def get_school_info(cls):
        """Get information about the school"""
        return ("School: " + cls.school_name + 
                ", Total Students: " + str(cls.total_students))
    
    @classmethod
    def set_grade_boundaries(cls, new_boundaries):
        """Update grade boundaries for all students"""
        cls.grade_boundaries = new_boundaries
        return "Grade boundaries updated"
    
    @classmethod
    def get_letter_grade(cls, numeric_grade):
        """Convert numeric grade to letter grade using class boundaries"""
        for letter, boundary in cls.grade_boundaries.items():
            if numeric_grade >= boundary:
                return letter
        return "F"

# Create students
alice = Student("Alice", "S001")
bob = Student("Bob", "S002")

alice.add_grade(95)
bob.add_grade(85)

# Use class methods
print(Student.get_school_info())
print("Alice's letter grade:", Student.get_letter_grade(alice.get_average()))
print("Bob's letter grade:", Student.get_letter_grade(bob.get_average()))

# Update class-level data
Student.set_grade_boundaries({"A": 95, "B": 85, "C": 75, "D": 65})
print("Updated Alice grade:", Student.get_letter_grade(alice.get_average()))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `School: Python Academy, Total Students: 2
Alice's letter grade: A
Bob's letter grade: B
Updated Alice grade: A`
    },
    {
      type: 'text',
      title: 'Static Methods in Detail',
      content: `Static methods are regular functions that live inside a class for organizational purposes. They don't receive \`self\` or \`cls\` automatically.

**Key characteristics:**
- Use \`@staticmethod\` decorator above the method definition
- No automatic first parameter (\`self\` or \`cls\`)
- Cannot access instance or class attributes directly
- Can be called on the class or any instance
- Essentially independent functions grouped with the class

**When to use static methods:**
- **Utility functions**: Helper functions related to the class
- **Validation functions**: Input validation logic
- **Conversion functions**: Data format transformations  
- **Mathematical operations**: Calculations related to the class concept

**Advantages:**
- **Organization**: Keep related functions together with the class
- **Namespace**: Avoid polluting the global namespace
- **Discoverability**: Easy to find functions related to a class
- **Testing**: Easier to test when grouped logically`
    },
    {
      type: 'code',
      title: 'Static Methods for Utility Functions',
      language: 'python',
      code: `# Static methods for validation and utility functions
class EmailValidator:
    # Class attribute
    valid_domains = ["gmail.com", "yahoo.com", "outlook.com", "company.com"]
    
    def __init__(self, email):
        if not EmailValidator.is_valid_email(email):
            raise ValueError("Invalid email format")
        self.email = email
        self.domain = EmailValidator.extract_domain(email)
    
    @staticmethod
    def is_valid_email(email):
        """Check if email has basic valid format"""
        if "@" not in email:
            return False
        parts = email.split("@")
        if len(parts) != 2:
            return False
        local, domain = parts
        return len(local) > 0 and len(domain) > 0 and "." in domain
    
    @staticmethod
    def extract_domain(email):
        """Extract domain from email address"""
        if "@" not in email:
            return ""
        return email.split("@")[1]
    
    @staticmethod
    def mask_email(email):
        """Mask email for privacy (keep first char and domain)"""
        if not EmailValidator.is_valid_email(email):
            return "invalid-email"
        
        local, domain = email.split("@")
        if len(local) <= 1:
            masked_local = "*"
        else:
            masked_local = local[0] + "*" * (len(local) - 1)
        return masked_local + "@" + domain
    
    @classmethod
    def is_company_domain(cls, email):
        """Check if email uses company domain (uses class data)"""
        domain = cls.extract_domain(email)
        return domain in cls.valid_domains

# Use static methods directly on the class
print("Valid email?", EmailValidator.is_valid_email("user@example.com"))
print("Valid email?", EmailValidator.is_valid_email("invalid-email"))
print("Domain:", EmailValidator.extract_domain("alice@company.com"))
print("Masked:", EmailValidator.mask_email("bobsmith@gmail.com"))

# Static methods work on instances too
validator = EmailValidator("test@company.com")
print("Instance domain:", validator.extract_domain("another@test.com"))

# Class method (needs class access)
print("Company domain?", EmailValidator.is_company_domain("user@gmail.com"))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Valid email? True
Valid email? False
Domain: company.com
Masked: b*******@gmail.com
Instance domain: test.com
Company domain? True`
    },
    {
      type: 'code',
      title: 'Complex Example: Date Utility Class',
      language: 'python',
      code: `# Comprehensive example with all method types
class DateUtils:
    # Class attributes
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
              "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    default_format = "MM/DD/YYYY"
    
    def __init__(self, month, day, year):
        # Validate using static method
        if not DateUtils.is_valid_date(month, day, year):
            raise ValueError("Invalid date")
        
        self.month = month
        self.day = day
        self.year = year
    
    # Instance method - works with specific date object
    def format_date(self, format_style="default"):
        if format_style == "long":
            month_name = DateUtils.months[self.month - 1]
            return month_name + " " + str(self.day) + ", " + str(self.year)
        else:
            return str(self.month) + "/" + str(self.day) + "/" + str(self.year)
    
    # Class method - alternative constructor
    @classmethod
    def from_string(cls, date_string):
        """Create date from MM/DD/YYYY string"""
        parts = date_string.split("/")
        if len(parts) != 3:
            raise ValueError("Date must be in MM/DD/YYYY format")
        month, day, year = int(parts[0]), int(parts[1]), int(parts[2])
        return cls(month, day, year)
    
    @classmethod
    def today(cls):
        """Create date for today (simplified)"""
        return cls(1, 15, 2024)  # Simplified for example
    
    @classmethod
    def get_format_info(cls):
        """Get information about supported formats"""
        return "Default format: " + cls.default_format
    
    # Static methods - utility functions
    @staticmethod
    def is_valid_date(month, day, year):
        """Check if date values are valid"""
        if not (1 <= month <= 12):
            return False
        if not (1 <= day <= 31):
            return False
        if year < 1:
            return False
        return True
    
    @staticmethod
    def is_leap_year(year):
        """Check if year is a leap year"""
        return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)
    
    @staticmethod
    def days_in_month(month, year):
        """Get number of days in a month"""
        days_per_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        if month == 2 and DateUtils.is_leap_year(year):
            return 29
        return days_per_month[month - 1]

# Test all method types
# Static methods (no object needed)
print("Valid date?", DateUtils.is_valid_date(2, 29, 2024))
print("Leap year?", DateUtils.is_leap_year(2024))
print("Days in Feb 2024:", DateUtils.days_in_month(2, 2024))

# Class methods (alternative constructors)
date1 = DateUtils.from_string("3/15/2024")
date2 = DateUtils.today()
print("Format info:", DateUtils.get_format_info())

# Instance methods (work with specific dates)
print("Date1 short:", date1.format_date())
print("Date1 long:", date1.format_date("long"))
print("Date2 short:", date2.format_date())`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Valid date? True
Leap year? True
Days in Feb 2024: 29
Format info: Default format: MM/DD/YYYY
Date1 short: 3/15/2024
Date1 long: Mar 15, 2024
Date2 short: 1/15/2024`
    },
    {
      type: 'text',
      title: 'Choosing the Right Method Type',
      content: `**Decision guide for method types:**

**Use Instance Methods when:**
- Method needs to access or modify object attributes
- Method operates on the specific object's data
- Method behavior depends on the object's state
- Most common method type

**Use Class Methods when:**
- Creating alternative constructors
- Working with class attributes or shared data
- Method logic applies to the class as a whole
- Need access to the class itself (not instances)

**Use Static Methods when:**
- Function is related to the class but doesn't need class/instance data
- Creating utility functions that belong logically with the class
- Validation functions that work with raw data
- Mathematical or conversion functions

**Examples by category:**
- **Instance**: \`calculate_balance(self)\`, \`send_email(self)\`
- **Class**: \`from_json(cls, data)\`, \`get_total_count(cls)\`
- **Static**: \`validate_email(email)\`, \`format_phone(number)\`

**Common patterns:**
\`@classmethod\` for alternative constructors  
\`@staticmethod\` for validation and utility functions  
Regular methods for object operations`
    },
    {
      type: 'code',
      title: 'Method Types Best Practices',
      language: 'python',
      code: `# Best practices example showing proper method usage
class User:
    # Class attributes
    total_users = 0
    valid_roles = ["admin", "user", "guest"]
    
    def __init__(self, username, email, role="user"):
        # Validate using static methods
        if not User.is_valid_username(username):
            raise ValueError("Invalid username")
        if not User.is_valid_email(email):
            raise ValueError("Invalid email")
        if not User.is_valid_role(role):
            raise ValueError("Invalid role")
        
        self.username = username
        self.email = email
        self.role = role
        self.login_count = 0
        
        # Update class counter
        User.total_users = User.total_users + 1
    
    # Instance methods - work with specific user data
    def login(self):
        """Record user login"""
        self.login_count = self.login_count + 1
        return "User " + self.username + " logged in"
    
    def get_profile(self):
        """Get user profile information"""
        return {
            "username": self.username,
            "email": User.mask_email(self.email),  # Use static method
            "role": self.role,
            "logins": self.login_count
        }
    
    # Class methods - alternative constructors and class operations
    @classmethod
    def from_csv_line(cls, csv_line):
        """Create user from CSV line: username,email,role"""
        parts = csv_line.strip().split(",")
        if len(parts) != 3:
            raise ValueError("CSV line must have 3 parts")
        return cls(parts[0], parts[1], parts[2])
    
    @classmethod
    def create_admin(cls, username, email):
        """Create admin user"""
        return cls(username, email, "admin")
    
    @classmethod
    def get_user_stats(cls):
        """Get statistics about all users"""
        return "Total users: " + str(cls.total_users)
    
    # Static methods - validation and utility functions
    @staticmethod
    def is_valid_username(username):
        """Validate username format"""
        if not username or len(username) < 3:
            return False
        return username.isalnum()
    
    @staticmethod
    def is_valid_email(email):
        """Validate email format"""
        return "@" in email and "." in email.split("@")[1]
    
    @staticmethod
    def is_valid_role(role):
        """Validate user role"""
        return role in User.valid_roles
    
    @staticmethod
    def mask_email(email):
        """Mask email for privacy"""
        if "@" not in email:
            return email
        local, domain = email.split("@")
        if len(local) <= 2:
            return "*" * len(local) + "@" + domain
        return local[0] + "*" * (len(local) - 2) + local[-1] + "@" + domain

# Demonstrate proper usage of all method types
# Static methods for validation (before creating objects)
print("Valid username?", User.is_valid_username("alice123"))

# Class methods for alternative creation
admin = User.create_admin("admin", "admin@company.com")
csv_user = User.from_csv_line("bob,bob@email.com,user")

# Instance methods for object operations
admin.login()
admin.login()

print("Admin profile:", admin.get_profile())
print("CSV user profile:", csv_user.get_profile())

# Class method for class-level information
print(User.get_user_stats())`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Valid username? True
Admin profile: {'username': 'admin', 'email': 'a***n@company.com', 'role': 'admin', 'logins': 2}
CSV user profile: {'username': 'bob', 'email': 'b*b@email.com', 'role': 'user', 'logins': 0}
Total users: 2`
    },
    {
      type: 'text',
      title: 'Key Takeaways',
      content: `🎯 **Method Types Summary:**

**Instance Methods (Regular):**
\`def method_name(self, parameters):\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;# Can access self.attributes\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;return result\`

**Class Methods:**
\`@classmethod\`  
\`def method_name(cls, parameters):\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;# Can access cls.class_attributes\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;return cls(...)  # Often return new instance\`

**Static Methods:**
\`@staticmethod\`  
\`def method_name(parameters):\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;# No access to self or cls\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;return result\`

**Key Differences:**
- **Instance methods**: Work with object data (\`self\`)
- **Class methods**: Work with class data (\`cls\`)
- **Static methods**: Independent utility functions (no \`self\`/\`cls\`)

**Common Use Cases:**
- **@classmethod**: Alternative constructors, class-level operations
- **@staticmethod**: Validation, utility functions, pure functions
- **Instance methods**: Object behavior and state manipulation

**Best Practices:**
- Use class methods for alternative ways to create objects
- Use static methods for utilities that belong logically with the class
- Keep static methods pure (no side effects when possible)
- Instance methods are the default choice for object operations

Understanding method types helps you design cleaner, more organized classes with clear separation of concerns!`
    }
  ]
};