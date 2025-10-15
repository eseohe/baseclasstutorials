// Lesson content for Custom Exceptions
export const customExceptionsContent = {
  id: 'custom-exceptions',
  title: 'Custom Exceptions',
  duration: '30 min',
  overview: `Learn to create your own exception classes in Python! Master custom exception design, inheritance hierarchies, and best practices for building robust error handling systems that provide clear, actionable error information.`,
  objectives: [
    'Create custom exception classes by inheriting from Exception',
    'Design exception hierarchies for different error types',
    'Add custom attributes and methods to exception classes',
    'Implement proper exception messages and formatting',
    'Use custom exceptions in real-world error handling scenarios',
    'Follow best practices for exception design and naming',
  ],
  sections: [
    {
      type: 'text',
      title: 'Understanding Custom Exceptions',
      content: `Custom exceptions allow you to create specific error types for your applications, providing more meaningful error information than generic built-in exceptions.

**Why create custom exceptions:**
- **Specific error types**: Distinguish different kinds of errors
- **Better error messages**: Provide context-specific information
- **Easier debugging**: Clear indication of what went wrong
- **API design**: Create clean, predictable error interfaces
- **Error handling**: Allow callers to handle specific error types

**Custom exception hierarchy:**
- **Base class**: Usually inherit from Exception or built-in exceptions
- **Specific exceptions**: Create classes for different error scenarios
- **Exception families**: Group related exceptions under common base classes

**Design principles:**
- **Descriptive names**: Use clear, specific exception names
- **Meaningful messages**: Provide helpful error descriptions
- **Additional context**: Include relevant data in exception objects
- **Inheritance hierarchy**: Organize exceptions logically

**When to create custom exceptions:**
- Domain-specific errors (ValidationError, AuthenticationError)
- Business logic violations (InsufficientFundsError)
- API or library design (ConfigurationError)
- Complex applications with multiple error types`
    },
    {
      type: 'code',
      title: 'Basic Custom Exception Classes',
      language: 'python',
      code: `# Creating basic custom exception classes
class CustomError(Exception):
    """Base class for custom exceptions"""
    pass

class ValidationError(CustomError):
    """Raised when data validation fails"""
    pass

class AuthenticationError(CustomError):
    """Raised when authentication fails"""
    pass

class ConfigurationError(CustomError):
    """Raised when configuration is invalid"""
    pass

# Functions that use custom exceptions
def validate_age(age):
    if not isinstance(age, int):
        raise ValidationError("Age must be an integer")
    if age < 0:
        raise ValidationError("Age cannot be negative")
    if age > 150:
        raise ValidationError("Age cannot exceed 150")
    return True

def authenticate_user(username, password):
    # Simulate authentication logic
    valid_users = {"admin": "secret123", "user": "pass456"}
    
    if username not in valid_users:
        raise AuthenticationError("Username '" + username + "' not found")
    if valid_users[username] != password:
        raise AuthenticationError("Invalid password for user '" + username + "'")
    return True

def load_config(config_dict):
    required_keys = ["host", "port", "database"]
    
    for key in required_keys:
        if key not in config_dict:
            raise ConfigurationError("Missing required configuration key: " + key)
    
    if not isinstance(config_dict["port"], int):
        raise ConfigurationError("Port must be an integer")
    
    return config_dict

# Test custom exceptions
print("Testing custom exceptions:")

# Test ValidationError
try:
    validate_age(-5)
except ValidationError as e:
    print("Validation failed:", str(e))

try:
    validate_age("twenty")
except ValidationError as e:
    print("Validation failed:", str(e))

# Test AuthenticationError
try:
    authenticate_user("unknown", "password")
except AuthenticationError as e:
    print("Authentication failed:", str(e))

# Test ConfigurationError
try:
    load_config({"host": "localhost", "port": "8080"})
except ConfigurationError as e:
    print("Configuration error:", str(e))

print("\\nAll custom exception tests completed")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Testing custom exceptions:
Validation failed: Age cannot be negative
Validation failed: Age must be an integer
Authentication failed: Username 'unknown' not found
Configuration error: Port must be an integer

All custom exception tests completed`
    },
    {
      type: 'code',
      title: 'Custom Exceptions with Additional Attributes',
      language: 'python',
      code: `# Custom exceptions with additional attributes and methods
class BankingError(Exception):
    """Base class for banking-related errors"""
    def __init__(self, message, error_code=None):
        super().__init__(message)
        self.error_code = error_code
        self.timestamp = "2024-01-15T10:30:00"  # Simulated timestamp

class InsufficientFundsError(BankingError):
    """Raised when account has insufficient funds"""
    def __init__(self, account_number, requested_amount, available_balance):
        self.account_number = account_number
        self.requested_amount = requested_amount
        self.available_balance = available_balance
        
        message = ("Insufficient funds in account " + str(account_number) + 
                  ". Requested: $" + str(requested_amount) + 
                  ", Available: $" + str(available_balance))
        
        super().__init__(message, error_code="INSUFFICIENT_FUNDS")
    
    def get_shortage(self):
        """Calculate how much more money is needed"""
        return self.requested_amount - self.available_balance

class InvalidAccountError(BankingError):
    """Raised when account number is invalid"""
    def __init__(self, account_number, reason="Account not found"):
        self.account_number = account_number
        self.reason = reason
        
        message = "Invalid account " + str(account_number) + ": " + reason
        super().__init__(message, error_code="INVALID_ACCOUNT")

class TransactionLimitError(BankingError):
    """Raised when transaction exceeds limits"""
    def __init__(self, amount, limit_type, limit_value):
        self.amount = amount
        self.limit_type = limit_type
        self.limit_value = limit_value
        
        message = ("Transaction amount $" + str(amount) + 
                  " exceeds " + limit_type + " limit of $" + str(limit_value))
        
        super().__init__(message, error_code="TRANSACTION_LIMIT_EXCEEDED")

# Banking system simulation
class BankAccount:
    def __init__(self, account_number, balance=0):
        self.account_number = account_number
        self.balance = balance
        self.daily_limit = 1000
        self.daily_spent = 0
    
    def withdraw(self, amount):
        # Check if account is valid (simple check)
        if self.account_number <= 0:
            raise InvalidAccountError(self.account_number, "Invalid account number")
        
        # Check daily limit
        if self.daily_spent + amount > self.daily_limit:
            remaining_limit = self.daily_limit - self.daily_spent
            raise TransactionLimitError(amount, "daily", remaining_limit)
        
        # Check sufficient funds
        if amount > self.balance:
            raise InsufficientFundsError(self.account_number, amount, self.balance)
        
        # Process withdrawal
        self.balance = self.balance - amount
        self.daily_spent = self.daily_spent + amount
        return self.balance

# Test banking exceptions
print("Testing banking system exceptions:")

# Test InsufficientFundsError
account1 = BankAccount(12345, 100)
try:
    account1.withdraw(150)
except InsufficientFundsError as e:
    print("Insufficient funds error:")
    print("  Message:", str(e))
    print("  Error code:", e.error_code)
    print("  Shortage: $" + str(e.get_shortage()))
    print("  Timestamp:", e.timestamp)

# Test TransactionLimitError
account2 = BankAccount(67890, 2000)
account2.daily_spent = 800  # Already spent $800 today
try:
    account2.withdraw(300)  # Would exceed $1000 daily limit
except TransactionLimitError as e:
    print("\\nTransaction limit error:")
    print("  Message:", str(e))
    print("  Error code:", e.error_code)
    print("  Amount:", e.amount)
    print("  Limit type:", e.limit_type)

# Test InvalidAccountError
account3 = BankAccount(-1, 500)
try:
    account3.withdraw(50)
except InvalidAccountError as e:
    print("\\nInvalid account error:")
    print("  Message:", str(e))
    print("  Account number:", e.account_number)
    print("  Reason:", e.reason)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Testing banking system exceptions:
Insufficient funds error:
  Message: Insufficient funds in account 12345. Requested: $150, Available: $100
  Error code: INSUFFICIENT_FUNDS
  Shortage: $50
  Timestamp: 2024-01-15T10:30:00

Transaction limit error:
  Message: Transaction amount $300 exceeds daily limit of $200
  Error code: TRANSACTION_LIMIT_EXCEEDED
  Amount: 300
  Limit type: daily

Invalid account error:
  Message: Invalid account -1: Invalid account number
  Account number: -1
  Reason: Invalid account number`
    },
    {
      type: 'text',
      title: 'Exception Inheritance Hierarchies',
      content: `Creating well-organized exception hierarchies helps with error handling and code organization. You can catch groups of related exceptions or specific ones as needed.

**Hierarchy benefits:**
- **Catch groups**: Handle related exceptions together
- **Catch specific**: Handle individual exception types differently
- **Extensibility**: Add new exceptions without breaking existing code
- **Organization**: Logical grouping of error types

**Design patterns:**
- **Base application exception**: Common ancestor for all custom exceptions
- **Category exceptions**: Group related errors (ValidationError, NetworkError)
- **Specific exceptions**: Individual error types (EmailValidationError)

**Exception hierarchy example:**
\`\`\`
AppError (base)
├── ValidationError
│   ├── EmailValidationError
│   ├── PasswordValidationError
│   └── AgeValidationError
├── NetworkError
│   ├── ConnectionTimeoutError
│   └── APIError
└── DataError
    ├── FileNotFoundError
    └── CorruptDataError
\`\`\`

**Catching strategy:**
- Catch specific exceptions first (most specific handling)
- Catch category exceptions for group handling
- Catch base exception as fallback`
    },
    {
      type: 'code',
      title: 'Exception Inheritance Hierarchy',
      language: 'python',
      code: `# Building a comprehensive exception hierarchy
class AppError(Exception):
    """Base exception for all application errors"""
    def __init__(self, message, details=None):
        super().__init__(message)
        self.details = details or {}
        self.timestamp = "2024-01-15T10:30:00"

class ValidationError(AppError):
    """Base class for all validation errors"""
    def __init__(self, field_name, value, message):
        self.field_name = field_name
        self.value = value
        super().__init__(message, {"field": field_name, "value": str(value)})

class EmailValidationError(ValidationError):
    """Raised when email format is invalid"""
    def __init__(self, email):
        super().__init__("email", email, "Invalid email format: " + email)

class PasswordValidationError(ValidationError):
    """Raised when password doesn't meet requirements"""
    def __init__(self, password, requirements):
        self.requirements = requirements
        super().__init__("password", "***", "Password doesn't meet requirements")

class AgeValidationError(ValidationError):
    """Raised when age is invalid"""
    def __init__(self, age, reason):
        self.reason = reason
        super().__init__("age", age, "Invalid age " + str(age) + ": " + reason)

class NetworkError(AppError):
    """Base class for network-related errors"""
    def __init__(self, url, message):
        self.url = url
        super().__init__(message, {"url": url})

class ConnectionTimeoutError(NetworkError):
    """Raised when network connection times out"""
    def __init__(self, url, timeout_seconds):
        self.timeout_seconds = timeout_seconds
        super().__init__(url, "Connection to " + url + " timed out after " + str(timeout_seconds) + " seconds")

class APIError(NetworkError):
    """Raised when API returns an error"""
    def __init__(self, url, status_code, response_message):
        self.status_code = status_code
        self.response_message = response_message
        super().__init__(url, "API error " + str(status_code) + ": " + response_message)

# User registration system demonstrating exception hierarchy
class UserRegistration:
    def validate_email(self, email):
        if "@" not in email or "." not in email:
            raise EmailValidationError(email)
        return True
    
    def validate_password(self, password):
        requirements = []
        if len(password) < 8:
            requirements.append("at least 8 characters")
        if not any(c.isupper() for c in password):
            requirements.append("at least one uppercase letter")
        if not any(c.isdigit() for c in password):
            requirements.append("at least one digit")
        
        if requirements:
            raise PasswordValidationError(password, requirements)
        return True
    
    def validate_age(self, age):
        if not isinstance(age, int):
            raise AgeValidationError(age, "must be an integer")
        if age < 13:
            raise AgeValidationError(age, "must be at least 13")
        if age > 120:
            raise AgeValidationError(age, "must be 120 or less")
        return True
    
    def register_user(self, email, password, age):
        try:
            self.validate_email(email)
            self.validate_password(password)
            self.validate_age(age)
            return "User registered successfully"
        except ValidationError as e:
            return "Registration failed: " + str(e)

# Demonstration of catching different exception levels
def demonstrate_exception_catching():
    registration = UserRegistration()
    
    test_cases = [
        ("invalid-email", "Password123", 25),
        ("user@example.com", "weak", 25),
        ("user@example.com", "Password123", 10),
        ("user@example.com", "Password123", 25)
    ]
    
    for email, password, age in test_cases:
        try:
            result = registration.register_user(email, password, age)
            print("Success:", result)
        except EmailValidationError as e:
            print("Email error:", str(e))
            print("  Field:", e.field_name)
            print("  Value:", e.value)
        except PasswordValidationError as e:
            print("Password error:", str(e))
            print("  Requirements missing:", e.requirements)
        except AgeValidationError as e:
            print("Age error:", str(e))
            print("  Reason:", e.reason)
        except ValidationError as e:
            print("General validation error:", str(e))
            print("  Field:", e.field_name)
        except AppError as e:
            print("Application error:", str(e))
            print("  Details:", e.details)
        except Exception as e:
            print("Unexpected error:", str(e))

print("Demonstrating exception hierarchy:")
demonstrate_exception_catching()`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Demonstrating exception hierarchy:
Success: Registration failed: Invalid email format: invalid-email
Success: Registration failed: Password doesn't meet requirements
Success: Registration failed: Invalid age 10: must be at least 13
Success: User registered successfully`
    },
    {
      type: 'text',
      title: 'Custom Exception Best Practices',
      content: `Following best practices ensures your custom exceptions are useful, maintainable, and integrate well with Python's exception handling system.

**Naming conventions:**
- **End with "Error"**: ValidationError, ConnectionError
- **Be descriptive**: Clearly indicate the error type
- **Follow PascalCase**: Each word capitalized
- **Avoid generic names**: Use specific, meaningful names

**Class design:**
- **Inherit appropriately**: Usually from Exception or built-in exceptions
- **Call super().__init__()**: Properly initialize parent class
- **Add useful attributes**: Store relevant error context
- **Provide helpful messages**: Clear, actionable error descriptions

**Documentation:**
- **Docstrings**: Explain when the exception is raised
- **Examples**: Show how to catch and handle the exception
- **Attributes**: Document additional attributes and methods

**Error messages:**
- **Be specific**: Include relevant details and context
- **Be actionable**: Tell user what they can do to fix it
- **Be consistent**: Use similar format across related exceptions
- **Include values**: Show what value caused the error`
    },
    {
      type: 'code',
      title: 'Exception Best Practices Example',
      language: 'python',
      code: `# Best practices for custom exception design
class DataProcessingError(Exception):
    """
    Base exception for data processing errors.
    
    Attributes:
        message: Error description
        error_code: Unique error identifier
        context: Additional error context
        suggestions: List of possible solutions
    """
    def __init__(self, message, error_code=None, context=None, suggestions=None):
        super().__init__(message)
        self.error_code = error_code
        self.context = context or {}
        self.suggestions = suggestions or []
    
    def __str__(self):
        result = super().__str__()
        if self.error_code:
            result = "[" + self.error_code + "] " + result
        return result
    
    def get_help_text(self):
        """Generate helpful error information"""
        help_text = "Error: " + str(self)
        
        if self.context:
            help_text = help_text + "\\nContext:"
            for key, value in self.context.items():
                help_text = help_text + "\\n  " + key + ": " + str(value)
        
        if self.suggestions:
            help_text = help_text + "\\nSuggestions:"
            for suggestion in self.suggestions:
                help_text = help_text + "\\n  - " + suggestion
        
        return help_text

class FileFormatError(DataProcessingError):
    """
    Raised when file format is not supported or is corrupted.
    
    This exception is raised when attempting to process a file
    that has an unsupported format or appears to be corrupted.
    
    Example:
        try:
            process_file("data.txt")
        except FileFormatError as e:
            print("File format error:", e.get_help_text())
    """
    def __init__(self, filename, expected_format, detected_format=None):
        self.filename = filename
        self.expected_format = expected_format
        self.detected_format = detected_format
        
        message = "Invalid file format for '" + filename + "'"
        if detected_format:
            message = message + ". Expected " + expected_format + ", got " + detected_format
        else:
            message = message + ". Expected " + expected_format
        
        context = {
            "filename": filename,
            "expected_format": expected_format,
            "detected_format": detected_format or "unknown"
        }
        
        suggestions = [
            "Verify the file is in " + expected_format + " format",
            "Check if the file is corrupted",
            "Try converting the file to the correct format"
        ]
        
        super().__init__(
            message,
            error_code="INVALID_FILE_FORMAT",
            context=context,
            suggestions=suggestions
        )

class DataValidationError(DataProcessingError):
    """
    Raised when data fails validation rules.
    
    This exception provides detailed information about which
    validation rules failed and what values caused the failure.
    """
    def __init__(self, field_name, value, rule, row_number=None):
        self.field_name = field_name
        self.value = value
        self.rule = rule
        self.row_number = row_number
        
        message = "Validation failed for field '" + field_name + "'"
        if row_number is not None:
            message = message + " at row " + str(row_number)
        message = message + ": " + rule
        
        context = {
            "field_name": field_name,
            "value": str(value),
            "rule": rule,
            "row_number": row_number
        }
        
        suggestions = [
            "Check the value '" + str(value) + "' meets the requirement: " + rule,
            "Verify data source provides correct format",
            "Consider data cleaning or transformation"
        ]
        
        super().__init__(
            message,
            error_code="DATA_VALIDATION_FAILED",
            context=context,
            suggestions=suggestions
        )

# Data processing system using best practice exceptions
class DataProcessor:
    def __init__(self):
        self.supported_formats = ["csv", "json", "xml"]
    
    def detect_format(self, filename):
        """Simulate format detection"""
        if filename.endswith(".txt"):
            return "txt"
        elif filename.endswith(".csv"):
            return "csv"
        elif filename.endswith(".json"):
            return "json"
        else:
            return "unknown"
    
    def process_file(self, filename, expected_format):
        """Process file with comprehensive error handling"""
        detected = self.detect_format(filename)
        
        if expected_format not in self.supported_formats:
            raise FileFormatError(filename, expected_format)
        
        if detected != expected_format:
            raise FileFormatError(filename, expected_format, detected)
        
        return "File processed successfully"
    
    def validate_data(self, data):
        """Validate data with detailed error reporting"""
        for row_num, record in enumerate(data, 1):
            if "age" in record:
                age = record["age"]
                if not isinstance(age, int) or age < 0:
                    raise DataValidationError(
                        "age", 
                        age, 
                        "must be a non-negative integer",
                        row_num
                    )
            
            if "email" in record:
                email = record["email"]
                if "@" not in email:
                    raise DataValidationError(
                        "email",
                        email,
                        "must contain @ symbol",
                        row_num
                    )

# Demonstrate best practices
processor = DataProcessor()

print("Testing exception best practices:")

# Test FileFormatError
try:
    processor.process_file("data.txt", "csv")
except FileFormatError as e:
    print("File format error occurred:")
    print(e.get_help_text())

print("\\n" + "="*50 + "\\n")

# Test DataValidationError
test_data = [
    {"name": "Alice", "age": 25, "email": "alice@example.com"},
    {"name": "Bob", "age": -5, "email": "bob@example.com"},
    {"name": "Charlie", "age": 30, "email": "invalid-email"}
]

try:
    processor.validate_data(test_data)
except DataValidationError as e:
    print("Data validation error occurred:")
    print(e.get_help_text())`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Testing exception best practices:
File format error occurred:
Error: [INVALID_FILE_FORMAT] Invalid file format for 'data.txt'. Expected csv, got txt
Context:
  filename: data.txt
  expected_format: csv
  detected_format: txt
Suggestions:
  - Verify the file is in csv format
  - Check if the file is corrupted
  - Try converting the file to the correct format

==================================================

Data validation error occurred:
Error: [DATA_VALIDATION_FAILED] Validation failed for field 'age' at row 2: must be a non-negative integer
Context:
  field_name: age
  value: -5
  rule: must be a non-negative integer
  row_number: 2
Suggestions:
  - Check the value '-5' meets the requirement: must be a non-negative integer
  - Verify data source provides correct format
  - Consider data cleaning or transformation`
    },
    {
      type: 'code',
      title: 'Real-World Custom Exception System',
      language: 'python',
      code: `# Complete real-world example: E-commerce order processing system
class ECommerceError(Exception):
    """Base exception for e-commerce system"""
    def __init__(self, message, order_id=None, user_id=None):
        super().__init__(message)
        self.order_id = order_id
        self.user_id = user_id
        self.timestamp = "2024-01-15T10:30:00"

class InventoryError(ECommerceError):
    """Product inventory related errors"""
    pass

class ProductNotFoundError(InventoryError):
    """Raised when product doesn't exist"""
    def __init__(self, product_id, order_id=None):
        self.product_id = product_id
        message = "Product " + str(product_id) + " not found"
        super().__init__(message, order_id=order_id)

class InsufficientStockError(InventoryError):
    """Raised when product is out of stock"""
    def __init__(self, product_id, requested_qty, available_qty, order_id=None):
        self.product_id = product_id
        self.requested_qty = requested_qty
        self.available_qty = available_qty
        
        message = ("Insufficient stock for product " + str(product_id) + 
                  ". Requested: " + str(requested_qty) + 
                  ", Available: " + str(available_qty))
        
        super().__init__(message, order_id=order_id)

class PaymentError(ECommerceError):
    """Payment processing errors"""
    pass

class InvalidPaymentMethodError(PaymentError):
    """Raised when payment method is invalid"""
    def __init__(self, payment_method, order_id=None, user_id=None):
        self.payment_method = payment_method
        message = "Invalid payment method: " + payment_method
        super().__init__(message, order_id=order_id, user_id=user_id)

class PaymentProcessingError(PaymentError):
    """Raised when payment processing fails"""
    def __init__(self, reason, amount, order_id=None, user_id=None):
        self.reason = reason
        self.amount = amount
        message = "Payment processing failed: " + reason + " (Amount: $" + str(amount) + ")"
        super().__init__(message, order_id=order_id, user_id=user_id)

class ShippingError(ECommerceError):
    """Shipping related errors"""
    pass

class InvalidAddressError(ShippingError):
    """Raised when shipping address is invalid"""
    def __init__(self, address_issue, order_id=None, user_id=None):
        self.address_issue = address_issue
        message = "Invalid shipping address: " + address_issue
        super().__init__(message, order_id=order_id, user_id=user_id)

# E-commerce order processing system
class OrderProcessor:
    def __init__(self):
        self.inventory = {
            "laptop": {"stock": 5, "price": 999.99},
            "mouse": {"stock": 20, "price": 29.99},
            "keyboard": {"stock": 0, "price": 79.99}
        }
        self.valid_payment_methods = ["credit_card", "paypal", "bank_transfer"]
    
    def check_product_availability(self, product_id, quantity, order_id):
        if product_id not in self.inventory:
            raise ProductNotFoundError(product_id, order_id)
        
        available = self.inventory[product_id]["stock"]
        if quantity > available:
            raise InsufficientStockError(product_id, quantity, available, order_id)
        
        return True
    
    def process_payment(self, payment_method, amount, order_id, user_id):
        if payment_method not in self.valid_payment_methods:
            raise InvalidPaymentMethodError(payment_method, order_id, user_id)
        
        # Simulate payment processing failure scenarios
        if amount > 5000:
            raise PaymentProcessingError("Amount exceeds limit", amount, order_id, user_id)
        if payment_method == "bank_transfer" and amount < 100:
            raise PaymentProcessingError("Minimum amount not met", amount, order_id, user_id)
        
        return True
    
    def validate_shipping_address(self, address, order_id, user_id):
        required_fields = ["street", "city", "postal_code", "country"]
        
        for field in required_fields:
            if field not in address or not address[field]:
                raise InvalidAddressError("Missing " + field, order_id, user_id)
        
        # Simulate address validation issues
        if len(address["postal_code"]) < 5:
            raise InvalidAddressError("Invalid postal code format", order_id, user_id)
        
        return True
    
    def process_order(self, order_data):
        order_id = order_data["order_id"]
        user_id = order_data["user_id"]
        
        try:
            # Check product availability
            for item in order_data["items"]:
                self.check_product_availability(
                    item["product_id"], 
                    item["quantity"], 
                    order_id
                )
            
            # Calculate total
            total = sum(
                self.inventory[item["product_id"]]["price"] * item["quantity"]
                for item in order_data["items"]
            )
            
            # Process payment
            self.process_payment(
                order_data["payment_method"],
                total,
                order_id,
                user_id
            )
            
            # Validate shipping address
            self.validate_shipping_address(
                order_data["shipping_address"],
                order_id,
                user_id
            )
            
            # Update inventory
            for item in order_data["items"]:
                product_id = item["product_id"]
                self.inventory[product_id]["stock"] -= item["quantity"]
            
            return "Order " + str(order_id) + " processed successfully. Total: $" + str(round(total, 2))
            
        except ECommerceError as e:
            error_log = "Order " + str(order_id) + " failed: " + str(e)
            if hasattr(e, 'timestamp'):
                error_log = error_log + " [" + e.timestamp + "]"
            return error_log

# Test the e-commerce exception system
processor = OrderProcessor()

test_orders = [
    {
        "order_id": "ORD001",
        "user_id": "USER123",
        "items": [{"product_id": "laptop", "quantity": 2}],
        "payment_method": "credit_card",
        "shipping_address": {
            "street": "123 Main St",
            "city": "Anytown", 
            "postal_code": "12345",
            "country": "USA"
        }
    },
    {
        "order_id": "ORD002",
        "user_id": "USER456",
        "items": [{"product_id": "keyboard", "quantity": 1}],
        "payment_method": "paypal",
        "shipping_address": {
            "street": "456 Oak Ave",
            "city": "Somewhere",
            "postal_code": "123",  # Invalid postal code
            "country": "USA"
        }
    },
    {
        "order_id": "ORD003",
        "user_id": "USER789",
        "items": [{"product_id": "phone", "quantity": 1}],  # Non-existent product
        "payment_method": "credit_card",
        "shipping_address": {
            "street": "789 Pine St",
            "city": "Elsewhere",
            "postal_code": "67890",
            "country": "USA"
        }
    }
]

print("Processing e-commerce orders:")
print("=" * 50)

for order in test_orders:
    result = processor.process_order(order)
    print(result)
    print("-" * 30)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Processing e-commerce orders:
==================================================
Order ORD001 processed successfully. Total: $1999.98
------------------------------
Order ORD002 failed: Insufficient stock for product keyboard. Requested: 1, Available: 0 [2024-01-15T10:30:00]
------------------------------
Order ORD003 failed: Product phone not found [2024-01-15T10:30:00]
------------------------------`
    }
  ],
  keyTakeaways: [
    'Custom exceptions inherit from Exception or built-in exception classes',
    'Add meaningful attributes and methods to provide error context and debugging information',
    'Design exception hierarchies to allow both specific and general error handling',
    'Follow naming conventions: descriptive names ending in "Error"',
    'Include helpful error messages with specific details and actionable suggestions',
    'Use custom exceptions to create clean, predictable error interfaces for your applications'
  ]
};