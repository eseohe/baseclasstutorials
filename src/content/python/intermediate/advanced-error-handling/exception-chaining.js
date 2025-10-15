// Lesson content for Exception Chaining
export const exceptionChainingContent = {
  id: 'exception-chaining',
  title: 'Exception Chaining',
  duration: '28 min',
  overview: `Master exception chaining in Python! Learn to preserve the original error context when handling and re-raising exceptions using 'raise from' syntax, creating clear error trails for better debugging and troubleshooting.`,
  objectives: [
    'Understand exception chaining and its benefits for debugging',
    'Use "raise from" syntax to chain exceptions explicitly',
    'Handle implicit exception chaining in except blocks',
    'Suppress exception chaining when appropriate using "raise from None"',
    'Design error handling strategies that preserve error context',
    'Debug complex applications using exception chains',
  ],
  sections: [
    {
      type: 'text',
      title: 'Understanding Exception Chaining',
      content: `Exception chaining allows you to preserve the context of original exceptions when handling errors and raising new ones. This creates a chain of exceptions that helps with debugging complex error scenarios.

**Why exception chaining matters:**
- **Preserve context**: Keep the original error information
- **Better debugging**: See the full error history
- **Root cause analysis**: Trace back to the original problem
- **Error transformation**: Convert low-level errors to application-specific ones

**Types of exception chaining:**
- **Explicit chaining**: Using \`raise from\` to explicitly chain exceptions
- **Implicit chaining**: Automatic chaining when raising in except blocks
- **Suppressed chaining**: Using \`raise from None\` to break the chain

**Exception attributes:**
- **__cause__**: The explicitly chained exception (from \`raise from\`)
- **__context__**: The implicitly chained exception
- **__suppress_context__**: Boolean to suppress implicit chaining

**When to use chaining:**
- Converting between exception types
- Adding application context to system errors
- Wrapping third-party library exceptions
- Creating cleaner error interfaces while preserving debug info`
    },
    {
      type: 'code',
      title: 'Basic Exception Chaining with "raise from"',
      language: 'python',
      code: `# Explicit exception chaining using "raise from"
class DatabaseError(Exception):
    """Custom exception for database operations"""
    pass

class UserNotFoundError(Exception):
    """Raised when user cannot be found"""
    pass

def connect_to_database():
    """Simulate database connection that might fail"""
    # Simulate various connection failures
    import random
    failure_type = random.choice(["network", "auth", "success"])
    
    if failure_type == "network":
        raise ConnectionError("Cannot connect to database server")
    elif failure_type == "auth":
        raise PermissionError("Authentication failed for database")
    
    return "Connected successfully"

def find_user_by_id(user_id):
    """Find user with exception chaining"""
    try:
        # Simulate database connection
        connection = connect_to_database()
        
        # Simulate user lookup
        if user_id <= 0:
            raise ValueError("User ID must be positive")
        if user_id == 999:
            raise UserNotFoundError("User with ID " + str(user_id) + " not found")
        
        return {"id": user_id, "name": "User " + str(user_id)}
        
    except ConnectionError as e:
        # Explicit chaining: raise new exception with original as cause
        raise DatabaseError("Failed to connect to user database") from e
    except PermissionError as e:
        # Chain with different message
        raise DatabaseError("Database access denied") from e
    except ValueError as e:
        # Chain validation errors
        raise UserNotFoundError("Invalid user ID provided") from e

def get_user_profile(user_id):
    """Higher-level function that uses find_user_by_id"""
    try:
        user = find_user_by_id(user_id)
        return "Profile for " + user["name"]
    except DatabaseError as e:
        # Re-raise with additional context
        raise RuntimeError("Profile service unavailable") from e
    except UserNotFoundError as e:
        # Convert to application-specific error
        raise ValueError("Cannot display profile for invalid user") from e

# Demonstrate exception chaining
print("Testing exception chaining:")

test_cases = [123, -5, 999]
for user_id in test_cases:
    try:
        profile = get_user_profile(user_id)
        print("Success:", profile)
    except Exception as e:
        print("\\nError for user ID " + str(user_id) + ":")
        print("  Final error:", type(e).__name__ + ":", str(e))
        
        # Check the exception chain
        current = e
        level = 1
        while current.__cause__ is not None:
            current = current.__cause__
            print("  Caused by (" + str(level) + "):", type(current).__name__ + ":", str(current))
            level = level + 1`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Testing exception chaining:

Error for user ID -5:
  Final error: ValueError: Cannot display profile for invalid user
  Caused by (1): UserNotFoundError: Invalid user ID provided
  Caused by (2): ValueError: User ID must be positive

Error for user ID 999:
  Final error: ValueError: Cannot display profile for invalid user
  Caused by (1): UserNotFoundError: User with ID 999 not found`
    },
    {
      type: 'text',
      title: 'Implicit Exception Chaining',
      content: `When an exception is raised in an except block without using \`raise from\`, Python automatically chains the exceptions implicitly. This happens when handling one exception leads to raising another.

**Implicit chaining behavior:**
- Occurs automatically when raising in except blocks
- Original exception stored in \`__context__\` attribute
- New exception shows with "During handling of the above exception..."
- Helps track errors that occur during error handling

**When implicit chaining happens:**
- Raising new exceptions in except blocks
- Errors occurring during exception handling
- Cleanup code that fails during exception processing

**Implicit vs Explicit:**
- **Implicit**: Automatic, uses \`__context__\`
- **Explicit**: Manual with \`raise from\`, uses \`__cause__\`
- **Both**: Can have both implicit and explicit chains

**Best practices:**
- Use explicit chaining (\`raise from\`) for better clarity
- Implicit chaining is useful for unexpected errors during handling
- Consider what information is most valuable for debugging`
    },
    {
      type: 'code',
      title: 'Implicit Exception Chaining',
      language: 'python',
      code: `# Demonstrating implicit exception chaining
class FileProcessingError(Exception):
    """Error during file processing"""
    pass

class LoggingError(Exception):
    """Error during logging operations"""
    pass

def log_error(error_message):
    """Simulate logging function that might fail"""
    # Simulate logging failures
    if "database" in error_message.lower():
        raise LoggingError("Failed to write to error log: disk full")
    return "Logged: " + error_message

def process_file(filename):
    """Process file with implicit chaining during error handling"""
    try:
        # Simulate file processing
        if filename.endswith(".corrupt"):
            raise FileNotFoundError("File " + filename + " is corrupted")
        elif filename.endswith(".locked"):
            raise PermissionError("File " + filename + " is locked by another process")
        else:
            return "File " + filename + " processed successfully"
            
    except FileNotFoundError as e:
        # Try to log the error, but logging might fail
        try:
            log_error("File not found: " + str(e))
        except LoggingError:
            # This creates implicit chaining
            raise FileProcessingError("Failed to process file and log error")
        
        # Re-raise original with context
        raise FileProcessingError("Cannot process missing file") from e
        
    except PermissionError as e:
        # Implicit chaining - no explicit "from"
        error_msg = "Permission denied for " + filename
        log_error(error_msg)  # This might raise LoggingError
        raise FileProcessingError("Access denied to file")

def batch_process_files(filenames):
    """Process multiple files and handle chained exceptions"""
    results = []
    for filename in filenames:
        try:
            result = process_file(filename)
            results.append("✓ " + result)
        except FileProcessingError as e:
            error_info = "✗ " + filename + ": " + str(e)
            
            # Check for exception chain
            if e.__context__:
                error_info = error_info + " (Context: " + str(e.__context__) + ")"
            if e.__cause__:
                error_info = error_info + " (Cause: " + str(e.__cause__) + ")"
            
            results.append(error_info)
    
    return results

def demonstrate_implicit_chaining():
    """Show how implicit chaining works"""
    try:
        # This will raise ValueError
        int("not_a_number")
    except ValueError:
        # This creates implicit chaining
        raise RuntimeError("Failed to parse input")

# Test implicit chaining
print("Testing implicit exception chaining:")

files_to_process = [
    "document.txt",
    "data.corrupt",
    "database.locked"
]

results = batch_process_files(files_to_process)
for result in results:
    print(result)

print("\\nDemonstrating implicit chaining:")
try:
    demonstrate_implicit_chaining()
except RuntimeError as e:
    print("Final error:", str(e))
    print("Context error:", str(e.__context__))
    print("Has implicit chain:", e.__context__ is not None)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Testing implicit exception chaining:
✓ File document.txt processed successfully
✗ data.corrupt: Cannot process missing file (Cause: File data.corrupt is corrupted)
✗ database.locked: Failed to process file and log error (Context: Failed to write to error log: disk full)

Demonstrating implicit chaining:
Final error: Failed to parse input
Context error: invalid literal for int() with base 10: 'not_a_number'
Has implicit chain: True`
    },
    {
      type: 'text',
      title: 'Suppressing Exception Chaining',
      content: `Sometimes you want to raise a new exception without preserving the chain from the original error. Python provides \`raise from None\` to suppress exception chaining.

**When to suppress chaining:**
- **User-facing errors**: When internal details aren't helpful to users
- **Security reasons**: Avoid exposing sensitive system information
- **Clean interfaces**: Provide simple error messages for API responses
- **Known conversions**: When the original error is expected and handled

**Syntax:**
\`raise NewException("message") from None\`

**Effects of suppression:**
- Breaks the exception chain
- \`__cause__\` and \`__context__\` are None
- Only the new exception is visible
- Original error context is lost

**Best practices:**
- Use sparingly - debugging context is usually valuable
- Document why chaining is suppressed
- Consider logging original error before suppressing
- Ensure sufficient information in new exception message`
    },
    {
      type: 'code',
      title: 'Suppressing Exception Chaining',
      language: 'python',
      code: `# Suppressing exception chaining with "raise from None"
class UserError(Exception):
    """User-friendly error messages"""
    pass

class SystemError(Exception):
    """Internal system errors"""
    pass

class APIError(Exception):
    """API response errors"""
    pass

def internal_operation():
    """Simulate internal system operation that might fail"""
    import random
    error_types = [
        "database_connection",
        "memory_limit", 
        "network_timeout",
        "permission_denied"
    ]
    
    error_type = random.choice(error_types)
    
    if error_type == "database_connection":
        raise ConnectionError("Database server at 192.168.1.100:5432 is unreachable")
    elif error_type == "memory_limit":
        raise MemoryError("Cannot allocate 2GB for operation buffer")
    elif error_type == "network_timeout":
        raise TimeoutError("Operation timed out after 30 seconds")
    else:
        raise PermissionError("Access denied to /etc/sensitive_config")

def user_facing_operation_with_suppression():
    """Operation that provides clean user-facing errors"""
    try:
        result = internal_operation()
        return result
    except (ConnectionError, MemoryError, TimeoutError, PermissionError) as e:
        # Log the technical error for debugging (in real app)
        print("  [Internal Log] Technical error:", type(e).__name__, "-", str(e))
        
        # Raise user-friendly error with suppressed chaining
        raise UserError("Service temporarily unavailable. Please try again later.") from None

def user_facing_operation_with_chaining():
    """Same operation but preserving exception chain"""
    try:
        result = internal_operation()
        return result
    except (ConnectionError, MemoryError, TimeoutError, PermissionError) as e:
        # Preserve technical details for debugging
        raise UserError("Service temporarily unavailable") from e

def api_endpoint_handler(operation_type):
    """Simulate API endpoint with different error handling strategies"""
    try:
        if operation_type == "suppressed":
            return user_facing_operation_with_suppression()
        else:
            return user_facing_operation_with_chaining()
            
    except UserError as e:
        # Return API-appropriate error response
        return {
            "status": "error",
            "message": str(e),
            "has_technical_details": e.__cause__ is not None
        }

def security_sensitive_operation():
    """Operation where technical details should be hidden"""
    try:
        # Simulate sensitive operation
        raise PermissionError("Access denied to /admin/users/passwords.db")
    except PermissionError:
        # Hide sensitive file paths from users
        raise APIError("Authentication required") from None

def debugging_friendly_operation():
    """Operation that preserves error context for debugging"""
    try:
        # Simulate operation with multiple failure points
        raise ValueError("Invalid configuration in section 'database.connections[2].ssl_cert'")
    except ValueError as e:
        # Preserve detailed context for developers
        raise SystemError("System configuration error") from e

# Test different chaining strategies
print("Testing exception chaining suppression:")
print("=" * 50)

# Test suppressed vs chained errors
print("1. API responses with different error handling:")

for strategy in ["suppressed", "chained"]:
    try:
        response = api_endpoint_handler(strategy)
        print("Success:", response)
    except Exception as e:
        print("Strategy:", strategy)
        print("  Error type:", type(e).__name__)
        print("  Message:", str(e))
        print("  Has cause:", e.__cause__ is not None)
        if e.__cause__:
            print("  Cause:", type(e.__cause__).__name__, "-", str(e.__cause__))
        print()

print("2. Security-sensitive operation:")
try:
    security_sensitive_operation()
except APIError as e:
    print("Security error:", str(e))
    print("Cause suppressed:", e.__cause__ is None)
    print("Context suppressed:", e.__context__ is None)

print("\\n3. Debugging-friendly operation:")
try:
    debugging_friendly_operation()
except SystemError as e:
    print("System error:", str(e))
    print("Detailed cause:", str(e.__cause__))

# Compare error information
print("\\n4. Information comparison:")
try:
    raise ValueError("Original technical error")
except ValueError:
    try:
        raise UserError("User-friendly message") from None
    except UserError as suppressed_error:
        try:
            raise ValueError("Original technical error")
        except ValueError as original:
            try:
                raise UserError("User-friendly message") from original
            except UserError as chained_error:
                print("Suppressed error info available:", 
                      suppressed_error.__cause__ is not None or suppressed_error.__context__ is not None)
                print("Chained error info available:", 
                      chained_error.__cause__ is not None or chained_error.__context__ is not None)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Testing exception chaining suppression:
==================================================
1. API responses with different error handling:
  [Internal Log] Technical error: ConnectionError - Database server at 192.168.1.100:5432 is unreachable
Strategy: suppressed
  Error type: UserError
  Message: Service temporarily unavailable. Please try again later.
  Has cause: False

  [Internal Log] Technical error: MemoryError - Cannot allocate 2GB for operation buffer
Strategy: chained
  Error type: UserError
  Message: Service temporarily unavailable
  Has cause: True
  Cause: MemoryError - Cannot allocate 2GB for operation buffer

2. Security-sensitive operation:
Security error: Authentication required
Cause suppressed: True
Context suppressed: True

3. Debugging-friendly operation:
System error: System configuration error
Detailed cause: Invalid configuration in section 'database.connections[2].ssl_cert'

4. Information comparison:
Suppressed error info available: False
Chained error info available: True`
    },
    {
      type: 'text',
      title: 'Exception Chaining Best Practices',
      content: `Effective exception chaining requires thoughtful design to balance debugging information with user experience and security considerations.

**Design strategies:**
- **Preserve context**: Use explicit chaining for debugging
- **Transform appropriately**: Convert technical errors to domain errors
- **Consider audience**: Different error details for users vs developers
- **Security awareness**: Avoid exposing sensitive information

**Layered error handling:**
1. **Technical layer**: Preserve all debugging information
2. **Application layer**: Add business context
3. **Interface layer**: Provide user-appropriate messages

**Logging strategy:**
- Log technical details before suppressing chains
- Include correlation IDs for error tracking
- Separate user-facing and technical error logs

**Error transformation patterns:**
- **Wrap**: Add context while preserving original
- **Convert**: Transform to domain-appropriate exceptions
- **Suppress**: Hide technical details when necessary
- **Aggregate**: Combine multiple errors into summary`
    },
    {
      type: 'code',
      title: 'Exception Chaining Best Practices',
      language: 'python',
      code: `# Comprehensive exception chaining best practices
import random
from datetime import datetime

class AppError(Exception):
    """Base application error with correlation ID"""
    def __init__(self, message, correlation_id=None, details=None):
        super().__init__(message)
        self.correlation_id = correlation_id or self._generate_correlation_id()
        self.details = details or {}
        self.timestamp = datetime.now().isoformat()
    
    def _generate_correlation_id(self):
        return "ERR-" + str(random.randint(100000, 999999))

class TechnicalError(AppError):
    """Technical system errors"""
    pass

class BusinessError(AppError):
    """Business logic errors"""
    pass

class UserError(AppError):
    """User-facing errors"""
    pass

class ErrorLogger:
    """Centralized error logging system"""
    @staticmethod
    def log_technical_error(error, correlation_id):
        """Log technical error details"""
        print("[TECH LOG] " + correlation_id + " - " + type(error).__name__ + ": " + str(error))
        
        # In real app, this would write to log file or monitoring system
        current = error
        level = 0
        while current is not None:
            if level > 0:
                print("  Chain[" + str(level) + "]: " + type(current).__name__ + " - " + str(current))
            current = current.__cause__ or current.__context__
            level = level + 1
    
    @staticmethod
    def log_user_error(error, user_id=None):
        """Log user-facing error for support"""
        print("[USER LOG] " + error.correlation_id + " - User error: " + str(error))
        if user_id:
            print("  User ID: " + str(user_id))

class PaymentProcessor:
    """Example payment processing with layered error handling"""
    
    def _validate_card(self, card_number):
        """Low-level card validation"""
        if not card_number:
            raise ValueError("Card number is required")
        if len(card_number) < 16:
            raise ValueError("Card number must be at least 16 digits")
        if not card_number.isdigit():
            raise ValueError("Card number must contain only digits")
        return True
    
    def _charge_card(self, card_number, amount):
        """Simulate external payment gateway"""
        # Simulate various gateway failures
        failure_type = random.choice(["success", "network", "declined", "fraud"])
        
        if failure_type == "network":
            raise ConnectionError("Payment gateway unreachable at gateway.payments.com")
        elif failure_type == "declined":
            raise PermissionError("Card declined by issuing bank")
        elif failure_type == "fraud":
            raise SecurityError("Transaction blocked by fraud detection")
        
        return "txn_" + str(random.randint(100000, 999999))
    
    def validate_payment_details(self, card_number, amount):
        """Business logic layer validation"""
        correlation_id = "VAL-" + str(random.randint(100000, 999999))
        
        try:
            # Technical validation
            self._validate_card(card_number)
            
            # Business validation
            if amount <= 0:
                raise BusinessError("Payment amount must be positive", correlation_id)
            if amount > 10000:
                raise BusinessError("Payment exceeds maximum limit", correlation_id)
            
            return True
            
        except ValueError as e:
            # Transform technical validation to business error
            ErrorLogger.log_technical_error(e, correlation_id)
            raise BusinessError("Invalid payment details provided", correlation_id) from e
    
    def process_payment(self, card_number, amount, user_id):
        """Main payment processing with comprehensive error handling"""
        correlation_id = "PAY-" + str(random.randint(100000, 999999))
        
        try:
            # Validate payment details
            self.validate_payment_details(card_number, amount)
            
            # Process the charge
            transaction_id = self._charge_card(card_number, amount)
            
            return {
                "status": "success",
                "transaction_id": transaction_id,
                "amount": amount
            }
            
        except BusinessError as e:
            # Business errors are logged but re-raised with context
            ErrorLogger.log_technical_error(e, correlation_id)
            raise UserError("Payment validation failed", correlation_id) from e
            
        except (ConnectionError, PermissionError, SecurityError) as e:
            # Technical payment errors are transformed for users
            ErrorLogger.log_technical_error(e, correlation_id)
            
            if isinstance(e, ConnectionError):
                user_message = "Payment system temporarily unavailable"
            elif isinstance(e, PermissionError):
                user_message = "Payment was declined"
            else:  # SecurityError
                user_message = "Payment blocked for security reasons"
            
            raise UserError(user_message, correlation_id) from e

class SecurityError(Exception):
    """Security-related errors"""
    pass

# Comprehensive testing of error handling strategies
def test_payment_scenarios():
    """Test different payment scenarios and error handling"""
    processor = PaymentProcessor()
    
    test_scenarios = [
        {"card": "1234567890123456", "amount": 100, "user": "USER123", "desc": "Valid payment"},
        {"card": "123", "amount": 50, "user": "USER456", "desc": "Invalid card"},
        {"card": "1234567890123456", "amount": -50, "user": "USER789", "desc": "Negative amount"},
        {"card": "1234567890123456", "amount": 15000, "user": "USER321", "desc": "Exceeds limit"},
        {"card": "1234567890123456", "amount": 200, "user": "USER654", "desc": "Gateway issues"}
    ]
    
    print("Payment Processing Error Handling Test")
    print("=" * 50)
    
    for scenario in test_scenarios:
        print("\\nScenario:", scenario["desc"])
        print("Card:", scenario["card"], "Amount: $" + str(scenario["amount"]))
        
        try:
            result = processor.process_payment(
                scenario["card"], 
                scenario["amount"], 
                scenario["user"]
            )
            print("✓ Success:", result["status"], "- Transaction ID:", result["transaction_id"])
            
        except UserError as e:
            # Log user error for support tracking
            ErrorLogger.log_user_error(e, scenario["user"])
            
            # Display user-friendly error
            print("✗ Payment failed:", str(e))
            print("  Error ID:", e.correlation_id)
            print("  User can reference this ID when contacting support")
            
            # For demo: show technical chain (normally hidden from users)
            if e.__cause__:
                print("  [Hidden technical details]:")
                current = e.__cause__
                level = 1
                while current:
                    print("    Level " + str(level) + ":", type(current).__name__, "-", str(current))
                    current = current.__cause__ or current.__context__
                    level = level + 1

# Run comprehensive test
test_payment_scenarios()`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Payment Processing Error Handling Test
==================================================

Scenario: Valid payment
Card: 1234567890123456 Amount: $100
✓ Success: success - Transaction ID: txn_384829

Scenario: Invalid card
Card: 123 Amount: $50
[TECH LOG] VAL-592847 - ValueError: Card number must be at least 16 digits
[TECH LOG] PAY-743295 - BusinessError: Invalid payment details provided
  Chain[1]: ValueError - Card number must be at least 16 digits
[USER LOG] PAY-743295 - User error: Payment validation failed
  User ID: USER456
✗ Payment failed: Payment validation failed
  Error ID: PAY-743295
  User can reference this ID when contacting support
  [Hidden technical details]:
    Level 1: BusinessError - Invalid payment details provided
    Level 2: ValueError - Card number must be at least 16 digits

Scenario: Negative amount
Card: 1234567890123456 Amount: $-50
[TECH LOG] PAY-158473 - BusinessError: Payment amount must be positive
[USER LOG] PAY-158473 - User error: Payment validation failed
  User ID: USER789
✗ Payment failed: Payment validation failed
  Error ID: PAY-158473
  User can reference this ID when contacting support
  [Hidden technical details]:
    Level 1: BusinessError - Payment amount must be positive

Scenario: Exceeds limit
Card: 1234567890123456 Amount: $15000
[TECH LOG] PAY-629384 - BusinessError: Payment exceeds maximum limit
[USER LOG] PAY-629384 - User error: Payment validation failed
  User ID: USER321
✗ Payment failed: Payment validation failed
  Error ID: PAY-629384
  User can reference this ID when contacting support
  [Hidden technical details]:
    Level 1: BusinessError - Payment exceeds maximum limit

Scenario: Gateway issues
Card: 1234567890123456 Amount: $200
[TECH LOG] PAY-847392 - PermissionError: Card declined by issuing bank
[USER LOG] PAY-847392 - User error: Payment was declined
  User ID: USER654
✗ Payment failed: Payment was declined
  Error ID: PAY-847392
  User can reference this ID when contacting support
  [Hidden technical details]:
    Level 1: PermissionError - Card declined by issuing bank`
    }
  ],
  keyTakeaways: [
    'Exception chaining preserves error context using "raise from" for explicit chaining',
    'Implicit chaining occurs automatically when exceptions are raised in except blocks',
    'Use "raise from None" to suppress chaining when technical details should be hidden',
    'Design layered error handling: technical, business, and user-facing levels',
    'Log technical details before suppressing chains for debugging purposes',
    'Exception chains help with root cause analysis and debugging complex error scenarios'
  ]
};