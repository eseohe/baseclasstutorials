// Lesson content for Encapsulation
export const encapsulationContent = {
  id: 'encapsulation',
  title: 'Encapsulation',
  duration: '26 min',
  overview: `Master data protection and access control in Python classes! Learn to use private attributes, property decorators, and getter/setter methods to create secure, maintainable classes with controlled data access.`,
  objectives: [
    'Understand encapsulation and why data hiding is important',
    'Use naming conventions to create private and protected attributes',
    'Implement getter and setter methods for controlled access',
    'Master the @property decorator for Pythonic data access',
    'Validate data through properties and setter methods',
    'Design classes with appropriate levels of data protection',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Encapsulation',
      content: `Encapsulation is the practice of bundling data and methods together while restricting direct access to internal implementation details.

**Core encapsulation principles:**
- **Data hiding**: Internal data should not be directly accessible from outside
- **Controlled access**: Provide specific methods for data interaction
- **Interface design**: Expose only what users need to know
- **Implementation protection**: Changes to internal structure don't break external code

**Why encapsulation matters:**
- **Data integrity**: Prevent invalid data from corrupting object state
- **Security**: Protect sensitive information from unauthorized access
- **Maintainability**: Change internal implementation without affecting users
- **Debugging**: Easier to track data changes through controlled access points

**Python's approach:**
- No true private attributes (everything is accessible)
- Uses naming conventions to indicate intended access levels
- Relies on developer discipline and documentation
- Provides tools like properties for elegant access control

**Access levels in Python:**
- **Public**: \`attribute\` - freely accessible
- **Protected**: \`_attribute\` - internal use, but accessible
- **Private**: \`__attribute\` - name mangled, harder to access`
    },
    {
      type: 'code',
      title: 'Basic Encapsulation with Naming Conventions',
      language: 'python',
      code: `# Demonstrating different access levels
class BankAccount:
    def __init__(self, account_holder, initial_balance):
        # Public attributes - freely accessible
        self.account_holder = account_holder
        self.account_type = "Checking"
        
        # Protected attribute - indicated by single underscore
        # Convention: for internal use by class and subclasses
        self._account_number = "ACC" + str(id(self))[-6:]
        
        # Private attribute - indicated by double underscore
        # Name mangling makes it harder to access from outside
        self.__balance = initial_balance
        self.__pin = "1234"  # Sensitive data
    
    # Public method to access private balance
    def get_balance(self):
        return self.__balance
    
    # Public method to modify private balance with validation
    def deposit(self, amount):
        if amount > 0:
            self.__balance = self.__balance + amount
            return "Deposited $" + str(amount)
        else:
            return "Amount must be positive"
    
    def withdraw(self, amount, pin):
        # Validate PIN before allowing withdrawal
        if pin != self.__pin:
            return "Invalid PIN"
        if amount > self.__balance:
            return "Insufficient funds"
        if amount <= 0:
            return "Amount must be positive"
        
        self.__balance = self.__balance - amount
        return "Withdrew $" + str(amount)
    
    # Protected method - for internal use
    def _validate_pin(self, pin):
        return pin == self.__pin

# Create account and test access levels
account = BankAccount("Alice", 1000)

# Public access works fine
print("Account holder:", account.account_holder)
print("Account type:", account.account_type)

# Protected access (works but not recommended)
print("Account number:", account._account_number)

# Private access through public methods (recommended)
print("Balance:", account.get_balance())
print(account.deposit(500))
print(account.withdraw(200, "1234"))

# Direct private access fails (good!)
try:
    print("Direct balance access:", account.__balance)
except AttributeError as e:
    print("Error accessing private attribute:", str(e))

# Name mangling makes private attributes hard to access
print("Available attributes:", [attr for attr in dir(account) if not attr.startswith('__') or 'balance' in attr])`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Account holder: Alice
Account type: Checking
Account number: ACC140735
Balance: 1000
Deposited $500
Withdrew $200
Error accessing private attribute: 'BankAccount' object has no attribute '__balance'
Available attributes: ['_BankAccount__balance', '_BankAccount__pin', '_account_number', '_validate_pin', 'account_holder', 'account_type', 'deposit', 'get_balance', 'withdraw']`
    },
    {
      type: 'text',
      title: 'Property Decorators',
      content: `Python's \`@property\` decorator provides an elegant way to implement getters and setters that look like simple attribute access.

**Benefits of properties:**
- **Pythonic syntax**: Access like attributes (\`obj.value\`) instead of methods (\`obj.get_value()\`)
- **Validation**: Automatically validate data when setting values
- **Computed values**: Calculate values on-the-fly when accessed
- **Backward compatibility**: Convert simple attributes to properties without changing client code

**Property decorator syntax:**
\`@property\` - Creates a getter method  
\`@attribute.setter\` - Creates a setter method  
\`@attribute.deleter\` - Creates a deleter method (rarely used)

**Common patterns:**
- **Read-only properties**: Only define getter, no setter
- **Validated properties**: Setter validates input before storing
- **Computed properties**: Getter calculates value from other attributes
- **Cached properties**: Compute expensive values once and cache them`
    },
    {
      type: 'code',
      title: 'Properties for Data Validation',
      language: 'python',
      code: `# Using properties for validation and controlled access
class Person:
    def __init__(self, name, age, email):
        # Use setters for validation during initialization
        self.name = name
        self.age = age
        self.email = email
        self._birth_year = 2024 - age  # Private calculated field
    
    @property
    def name(self):
        """Get the person's name"""
        return self._name
    
    @name.setter
    def name(self, value):
        """Set name with validation"""
        if not value or not value.strip():
            raise ValueError("Name cannot be empty")
        if len(value.strip()) < 2:
            raise ValueError("Name must be at least 2 characters")
        self._name = value.strip().title()
    
    @property
    def age(self):
        """Get the person's age"""
        return self._age
    
    @age.setter
    def age(self, value):
        """Set age with validation"""
        if not isinstance(value, int):
            raise TypeError("Age must be an integer")
        if value < 0:
            raise ValueError("Age cannot be negative")
        if value > 150:
            raise ValueError("Age seems unrealistic")
        self._age = value
        self._birth_year = 2024 - value  # Update birth year
    
    @property
    def email(self):
        """Get email address"""
        return self._email
    
    @email.setter
    def email(self, value):
        """Set email with validation"""
        if not value or "@" not in value:
            raise ValueError("Invalid email format")
        if "." not in value.split("@")[1]:
            raise ValueError("Email domain must contain a dot")
        self._email = value.lower()
    
    @property
    def birth_year(self):
        """Read-only computed property"""
        return self._birth_year
    
    @property
    def is_adult(self):
        """Read-only computed property"""
        return self._age >= 18
    
    def get_info(self):
        adult_status = "adult" if self.is_adult else "minor"
        return self.name + " (" + str(self.age) + ") - " + adult_status

# Test property validation
try:
    # Valid person
    person = Person("alice johnson", 25, "alice@email.com")
    print("Created person:", person.get_info())
    print("Email:", person.email)
    print("Birth year:", person.birth_year)
    
    # Test validation through property setters
    person.age = 30
    print("Updated age:", person.age)
    print("Updated birth year:", person.birth_year)
    
    # Test invalid data
    person.name = ""  # This will raise an error
    
except ValueError as e:
    print("Validation error:", e)

# Test email validation
try:
    person2 = Person("Bob", 20, "invalid-email")
except ValueError as e:
    print("Email validation error:", e)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Created person: Alice Johnson (25) - adult
Email: alice@email.com
Birth year: 1999
Updated age: 30
Updated birth year: 1994
Validation error: Name cannot be empty
Email validation error: Invalid email format`
    },
    {
      type: 'code',
      title: 'Advanced Property Examples',
      language: 'python',
      code: `# Advanced property usage patterns
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
        self._area_cache = None  # Cache for expensive calculations
    
    @property
    def width(self):
        return self._width
    
    @width.setter
    def width(self, value):
        if value <= 0:
            raise ValueError("Width must be positive")
        self._width = value
        self._area_cache = None  # Invalidate cache when dimensions change
    
    @property
    def height(self):
        return self._height
    
    @height.setter
    def height(self, value):
        if value <= 0:
            raise ValueError("Height must be positive")
        self._height = value
        self._area_cache = None  # Invalidate cache
    
    @property
    def area(self):
        """Computed property with caching"""
        if self._area_cache is None:
            print("Computing area...")  # Show when calculation happens
            self._area_cache = self._width * self._height
        return self._area_cache
    
    @property
    def perimeter(self):
        """Always computed property (no caching needed for simple calculation)"""
        return 2 * (self._width + self._height)
    
    @property
    def is_square(self):
        """Read-only boolean property"""
        return self._width == self._height
    
    @property
    def diagonal(self):
        """Computed property using math"""
        return (self._width ** 2 + self._height ** 2) ** 0.5

class Temperature:
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
        """Fahrenheit as a computed property"""
        return (self._celsius * 9/5) + 32
    
    @fahrenheit.setter
    def fahrenheit(self, value):
        """Set temperature using Fahrenheit"""
        celsius_value = (value - 32) * 5/9
        self.celsius = celsius_value  # Use celsius setter for validation
    
    @property
    def kelvin(self):
        """Kelvin as a computed property"""
        return self._celsius + 273.15
    
    @kelvin.setter
    def kelvin(self, value):
        """Set temperature using Kelvin"""
        if value < 0:
            raise ValueError("Kelvin cannot be negative")
        self.celsius = value - 273.15

# Test Rectangle with caching
rect = Rectangle(5, 3)
print("Rectangle created: " + str(rect.width) + " x " + str(rect.height))
print("Area (first access):", rect.area)  # Triggers computation
print("Area (second access):", rect.area)  # Uses cache
print("Perimeter:", rect.perimeter)
print("Is square?", rect.is_square)

rect.width = 10  # This invalidates the area cache
print("Width changed to:", rect.width)
print("New area:", rect.area)  # Triggers recomputation

print("---")

# Test Temperature with multiple unit properties
temp = Temperature(25)  # 25 Celsius
print("Temperature:", temp.celsius, "°C")
print("In Fahrenheit:", temp.fahrenheit, "°F")
print("In Kelvin:", temp.kelvin, "K")

# Set temperature using different units
temp.fahrenheit = 100  # Set using Fahrenheit
print("After setting to 100°F:")
print("Celsius:", round(temp.celsius, 1))
print("Kelvin:", round(temp.kelvin, 1))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Rectangle created: 5 x 3
Computing area...
Area (first access): 15
Area (second access): 15
Perimeter: 16
Is square? False
Width changed to: 10
Computing area...
New area: 30
---
Temperature: 25 °C
In Fahrenheit: 77.0 °F
In Kelvin: 298.15 K
After setting to 100°F:
Celsius: 37.8
Kelvin: 310.9`
    },
    {
      type: 'text',
      title: 'Data Validation Patterns',
      content: `Effective encapsulation often involves validating data to ensure object integrity and prevent invalid states.

**Common validation patterns:**
- **Type checking**: Ensure values are the correct data type
- **Range validation**: Check that numbers fall within acceptable ranges
- **Format validation**: Verify strings match expected patterns
- **Business rule validation**: Enforce domain-specific constraints
- **Cross-field validation**: Ensure related fields are consistent

**Validation strategies:**
- **Fail fast**: Validate immediately when data is set
- **Comprehensive errors**: Provide clear, helpful error messages
- **Consistent behavior**: Use the same validation in all entry points
- **Recovery options**: Sometimes auto-correct minor issues

**Where to validate:**
- **Property setters**: Most common location for validation
- **Constructor**: Ensure objects start in valid state
- **Public methods**: Validate parameters before processing
- **Class methods**: Validate in alternative constructors`
    },
    {
      type: 'code',
      title: 'Comprehensive Data Validation',
      language: 'python',
      code: `# Comprehensive validation example
class Product:
    # Class-level validation data
    VALID_CATEGORIES = ["Electronics", "Clothing", "Books", "Food", "Home"]
    MIN_PRICE = 0.01
    MAX_PRICE = 10000.00
    
    def __init__(self, name, price, category, sku=None):
        # Use property setters for validation
        self.name = name
        self.price = price
        self.category = category
        self.sku = sku if sku else self._generate_sku()
        self._creation_date = "2024-01-01"  # Simplified for example
        self._is_active = True
    
    def _generate_sku(self):
        """Generate SKU from name and category"""
        name_part = self.name[:3].upper().replace(" ", "")
        category_part = self.category[:3].upper()
        return name_part + category_part + "001"
    
    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, value):
        """Validate product name"""
        if not value or not isinstance(value, str):
            raise ValueError("Product name must be a non-empty string")
        
        cleaned_name = value.strip()
        if len(cleaned_name) < 2:
            raise ValueError("Product name must be at least 2 characters")
        if len(cleaned_name) > 100:
            raise ValueError("Product name cannot exceed 100 characters")
        
        # Check for invalid characters
        invalid_chars = set(cleaned_name) & set("<>{}[]|\\^\`")
        if invalid_chars:
            raise ValueError("Product name contains invalid characters: " + str(invalid_chars))
        
        self._name = cleaned_name.title()
    
    @property
    def price(self):
        return self._price
    
    @price.setter
    def price(self, value):
        """Validate product price"""
        # Type conversion with validation
        try:
            price_value = float(value)
        except (TypeError, ValueError):
            raise ValueError("Price must be a valid number")
        
        if price_value < self.MIN_PRICE:
            raise ValueError("Price must be at least $" + str(self.MIN_PRICE))
        if price_value > self.MAX_PRICE:
            raise ValueError("Price cannot exceed $" + str(self.MAX_PRICE))
        
        self._price = round(price_value, 2)  # Round to 2 decimal places
    
    @property
    def category(self):
        return self._category
    
    @category.setter
    def category(self, value):
        """Validate product category"""
        if not value or not isinstance(value, str):
            raise ValueError("Category must be a non-empty string")
        
        # Normalize category name
        normalized_category = value.strip().title()
        
        if normalized_category not in self.VALID_CATEGORIES:
            valid_list = ", ".join(self.VALID_CATEGORIES)
            raise ValueError("Category must be one of: " + valid_list)
        
        self._category = normalized_category
    
    @property
    def sku(self):
        return self._sku
    
    @sku.setter
    def sku(self, value):
        """Validate SKU format"""
        if not value or not isinstance(value, str):
            raise ValueError("SKU must be a non-empty string")
        
        sku_value = value.strip().upper()
        
        # Basic SKU format validation (letters + numbers)
        if len(sku_value) < 6 or len(sku_value) > 20:
            raise ValueError("SKU must be 6-20 characters long")
        
        if not sku_value.replace("-", "").replace("_", "").isalnum():
            raise ValueError("SKU can only contain letters, numbers, hyphens, and underscores")
        
        self._sku = sku_value
    
    @property
    def is_active(self):
        """Read-only property"""
        return self._is_active
    
    def deactivate(self):
        """Deactivate product"""
        self._is_active = False
        return "Product deactivated"
    
    def get_info(self):
        """Get product information"""
        status = "Active" if self._is_active else "Inactive"
        return (self._name + " - $" + str(self._price) + 
                " (" + self._category + ") [" + self._sku + "] - " + status)
    
    @classmethod
    def create_book(cls, title, price, author):
        """Alternative constructor for books"""
        book_name = title + " by " + author
        return cls(book_name, price, "Books")

# Test comprehensive validation
try:
    # Valid product
    laptop = Product("Gaming Laptop", 1299.99, "electronics")
    print("Created product:", laptop.get_info())
    
    # Test price validation
    laptop.price = 1500.50
    print("Updated price:", laptop.price)
    
    # Test automatic SKU generation
    book = Product.create_book("Python Programming", 39.99, "John Doe")
    print("Book product:", book.get_info())
    
    # Test validation errors
    test_cases = [
        ("Invalid price", lambda: Product("Test", -5, "Electronics")),
        ("Invalid category", lambda: Product("Test", 10, "InvalidCategory")),
        ("Empty name", lambda: Product("", 10, "Electronics")),
        ("Invalid characters", lambda: Product("Test<>Product", 10, "Electronics"))
    ]
    
    for test_name, test_func in test_cases:
        try:
            test_func()
            print(test_name + ": Unexpectedly passed")
        except ValueError as e:
            print(test_name + ": " + str(e))

except Exception as e:
    print("Error:", e)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Created product: Gaming Laptop - $1299.99 (Electronics) [GAMELEC001] - Active
Updated price: 1500.5
Book product: Python Programming By John Doe - $39.99 (Books) [PYTBOO001] - Active
Invalid price: Price must be at least $0.01
Invalid category: Category must be one of: Electronics, Clothing, Books, Food, Home
Empty name: Product name must be at least 2 characters
Invalid characters: Product name contains invalid characters: {'<', '>'}`
    },
    {
      type: 'code',
      title: 'Encapsulation Design Patterns',
      language: 'python',
      code: `# Advanced encapsulation patterns
class SecureDataStore:
    """Example of layered access control"""
    
    def __init__(self, owner):
        self._owner = owner
        self.__data = {}  # Private data storage
        self.__access_log = []  # Private access tracking
        self._permissions = {"read": True, "write": True, "delete": False}
    
    def _log_access(self, operation, key, success=True):
        """Protected method for logging"""
        log_entry = operation + " " + key + " - " + ("Success" if success else "Failed")
        self.__access_log.append(log_entry)
    
    def _check_permission(self, operation):
        """Protected method for permission checking"""
        return self._permissions.get(operation, False)
    
    @property
    def owner(self):
        """Read-only property"""
        return self._owner
    
    def store_data(self, key, value):
        """Public method with access control"""
        if not self._check_permission("write"):
            self._log_access("STORE", key, False)
            return "Write permission denied"
        
        if not key or not isinstance(key, str):
            return "Invalid key"
        
        self.__data[key] = value
        self._log_access("STORE", key, True)
        return "Data stored successfully"
    
    def get_data(self, key):
        """Public method with access control"""
        if not self._check_permission("read"):
            self._log_access("GET", key, False)
            return None
        
        if key in self.__data:
            self._log_access("GET", key, True)
            return self.__data[key]
        else:
            self._log_access("GET", key, False)
            return None
    
    def delete_data(self, key):
        """Public method with access control"""
        if not self._check_permission("delete"):
            self._log_access("DELETE", key, False)
            return "Delete permission denied"
        
        if key in self.__data:
            del self.__data[key]
            self._log_access("DELETE", key, True)
            return "Data deleted successfully"
        else:
            return "Key not found"
    
    def grant_permission(self, operation):
        """Public method to modify permissions"""
        if operation in self._permissions:
            self._permissions[operation] = True
            return "Permission granted for " + operation
        return "Invalid operation"
    
    def get_access_summary(self):
        """Public method returning summary (not raw log)"""
        total_operations = len(self.__access_log)
        successful_ops = len([log for log in self.__access_log if "Success" in log])
        return ("Total operations: " + str(total_operations) + 
                ", Successful: " + str(successful_ops))

class ConfigManager:
    """Example of controlled configuration access"""
    
    def __init__(self):
        self.__config = {
            "database_url": "postgresql://localhost/app",
            "api_key": "secret-key-12345",
            "debug_mode": False,
            "max_connections": 100
        }
        self.__sensitive_keys = {"api_key", "database_url"}
    
    @property
    def debug_mode(self):
        """Expose safe config as property"""
        return self.__config["debug_mode"]
    
    @debug_mode.setter
    def debug_mode(self, value):
        """Allow controlled modification of debug mode"""
        self.__config["debug_mode"] = bool(value)
    
    def get_config(self, key, mask_sensitive=True):
        """Get configuration with optional masking"""
        if key not in self.__config:
            return None
        
        value = self.__config[key]
        if mask_sensitive and key in self.__sensitive_keys:
            return "*" * 8  # Mask sensitive values
        
        return value
    
    def update_config(self, key, value, allow_sensitive=False):
        """Update configuration with protection"""
        if key not in self.__config:
            return "Unknown configuration key"
        
        if key in self.__sensitive_keys and not allow_sensitive:
            return "Cannot modify sensitive configuration"
        
        # Type validation based on existing value
        current_value = self.__config[key]
        if type(current_value) != type(value):
            return "Type mismatch: expected " + type(current_value).__name__
        
        self.__config[key] = value
        return "Configuration updated"
    
    def get_safe_config(self):
        """Return non-sensitive configuration"""
        safe_config = {}
        for key, value in self.__config.items():
            if key not in self.__sensitive_keys:
                safe_config[key] = value
        return safe_config

# Test layered access control
store = SecureDataStore("Alice")
print("Owner:", store.owner)
print(store.store_data("user_count", 150))
print(store.store_data("app_version", "1.2.3"))
print("Retrieved data:", store.get_data("user_count"))
print(store.delete_data("user_count"))  # Should fail - no delete permission
print(store.grant_permission("delete"))
print(store.delete_data("user_count"))  # Should succeed now
print("Access summary:", store.get_access_summary())

print("---")

# Test configuration management
config = ConfigManager()
print("Debug mode:", config.debug_mode)
print("API key:", config.get_config("api_key"))  # Masked
print("API key (unmasked):", config.get_config("api_key", mask_sensitive=False))
print("Max connections:", config.get_config("max_connections"))

config.debug_mode = True
print("Updated debug mode:", config.debug_mode)
print(config.update_config("max_connections", 200))
print(config.update_config("api_key", "new-key"))  # Should fail
print("Safe config:", config.get_safe_config())`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Owner: Alice
Data stored successfully
Data stored successfully
Retrieved data: 150
Delete permission denied
Permission granted for delete
Data deleted successfully
Access summary: Total operations: 6, Successful: 4
---
Debug mode: False
API key: ********
API key (unmasked): secret-key-12345
Max connections: 100
Updated debug mode: True
Configuration updated
Cannot modify sensitive configuration
Safe config: {'debug_mode': True, 'max_connections': 200}`
    },
    {
      type: 'text',
      title: 'Encapsulation Best Practices',
      content: `**Guidelines for effective encapsulation:**

**1. Start with public, make private as needed:**
- Begin with public attributes and methods
- Add privacy when you need to control access or validate data
- Don't over-encapsulate - it can make code harder to use

**2. Use properties for validation:**
- Properties provide clean syntax with validation
- Validate data at the point of entry
- Provide clear error messages when validation fails

**3. Choose appropriate access levels:**
- **Public**: \`attribute\` - part of the public interface
- **Protected**: \`_attribute\` - internal, but accessible to subclasses
- **Private**: \`__attribute\` - truly internal implementation details

**4. Design clear interfaces:**
- Expose only what users need to know
- Keep public methods simple and focused
- Hide complex implementation details

**5. Validate consistently:**
- Use the same validation rules in all entry points
- Validate in constructors, setters, and public methods
- Don't allow objects to exist in invalid states

**Common patterns:**
\`@property\` + \`@setter\` for validated attributes  
\`_private_method()\` for internal helpers  
\`__sensitive_data\` for truly private information`
    },
    {
      type: 'text',
      title: 'Key Takeaways',
      content: `🎯 **Encapsulation Summary:**

**Access Control Conventions:**
- **Public**: \`self.attribute\` - freely accessible
- **Protected**: \`self._attribute\` - internal use indicator
- **Private**: \`self.__attribute\` - name mangled for privacy

**Property Pattern:**
\`@property\`  
\`def attribute(self):\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;return self._attribute\`

\`@attribute.setter\`  
\`def attribute(self, value):\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;# Validation logic\`  
\`&nbsp;&nbsp;&nbsp;&nbsp;self._attribute = value\`

**Validation Guidelines:**
- Validate immediately when data is set
- Provide clear, helpful error messages
- Use consistent validation across all entry points
- Fail fast to prevent invalid object states

**Key Benefits:**
- **Data integrity**: Prevent invalid states through validation
- **Security**: Control access to sensitive information
- **Maintainability**: Change internals without breaking clients
- **Debugging**: Track data changes through controlled access

**Best Practices:**
- Use properties for complex attributes that need validation
- Keep public interfaces simple and focused
- Validate data at every entry point
- Document intended access levels clearly
- Don't over-encapsulate - balance protection with usability

**Remember:**
- Encapsulation is about controlling access, not hiding everything
- Python relies on conventions and developer discipline
- Good encapsulation makes classes easier to use correctly
- Always validate data to maintain object integrity

Master encapsulation to build robust, maintainable classes that protect their data while providing clean, intuitive interfaces!`
    }
  ]
};