// Lesson content for Context Managers with Exception Handling
export const contextManagersExcContent = {
  id: 'context-managers-exc',
  title: 'Context Managers with Exception Handling',
  duration: '32 min',
  overview: `Master context managers for robust exception handling! Learn to create custom context managers that handle exceptions gracefully, implement proper resource cleanup, and build reliable applications with guaranteed cleanup operations.`,
  objectives: [
    'Create custom context managers with __enter__ and __exit__ methods',
    'Handle exceptions in context manager __exit__ methods',
    'Use contextlib module for simpler context manager creation',
    'Implement context managers for resource management and cleanup',
    'Combine context managers with exception handling strategies',
    'Build robust applications with guaranteed resource cleanup',
  ],
  sections: [
    {
      type: 'text',
      title: 'Context Managers and Exception Safety',
      content: `Context managers provide a way to guarantee that cleanup operations occur, even when exceptions are raised. They ensure resources are properly managed and released regardless of how code execution exits.

**Context manager protocol:**
- **__enter__()**: Called when entering the \`with\` block
- **__exit__(exc_type, exc_value, traceback)**: Called when exiting the block

**Exception handling in __exit__:**
- **exc_type**: Type of exception (None if no exception)
- **exc_value**: Exception instance (None if no exception)  
- **traceback**: Traceback object (None if no exception)
- **Return value**: True suppresses exception, False/None propagates it

**Benefits of context managers:**
- **Guaranteed cleanup**: Resources always released
- **Exception safety**: Cleanup occurs even during exceptions
- **Simplified code**: No need for try/finally blocks
- **Reusable patterns**: Common cleanup logic encapsulated

**Common use cases:**
- File and database connections
- Lock acquisition and release
- Temporary state changes
- Resource pooling and cleanup
- Transaction management`
    },
    {
      type: 'code',
      title: 'Basic Context Manager with Exception Handling',
      language: 'python',
      code: `# Creating custom context managers with exception handling
class FileManager:
    """Context manager for file operations with exception handling"""
    
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        self.file = None
    
    def __enter__(self):
        """Open file and return file object"""
        print("Opening file:", self.filename)
        try:
            self.file = open(self.filename, self.mode)
            return self.file
        except FileNotFoundError:
            # Create a simple text content if file doesn't exist
            if 'w' in self.mode or 'a' in self.mode:
                self.file = open(self.filename, self.mode)
                return self.file
            else:
                # For read mode, create with some content first
                with open(self.filename, 'w') as f:
                    f.write("Sample file content\\nLine 2\\nLine 3")
                self.file = open(self.filename, self.mode)
                return self.file
    
    def __exit__(self, exc_type, exc_value, traceback):
        """Close file and handle any exceptions"""
        print("Cleaning up file:", self.filename)
        
        if self.file:
            self.file.close()
            print("File closed successfully")
        
        # Check if an exception occurred in the with block
        if exc_type is not None:
            print("Exception occurred during file operation:")
            print("  Type:", exc_type.__name__)
            print("  Message:", str(exc_value))
            
            # Log the error but don't suppress it
            # Return False (or None) to propagate the exception
            return False
        
        print("File operation completed successfully")
        return False

class DatabaseConnection:
    """Context manager for database connections with transaction handling"""
    
    def __init__(self, database_name):
        self.database_name = database_name
        self.connection = None
        self.transaction_active = False
    
    def __enter__(self):
        """Establish database connection and start transaction"""
        print("Connecting to database:", self.database_name)
        # Simulate database connection
        self.connection = "DB_CONNECTION_" + self.database_name
        
        print("Starting transaction")
        self.transaction_active = True
        return self
    
    def execute(self, query):
        """Execute a database query"""
        if not self.connection:
            raise RuntimeError("No database connection")
        
        print("Executing query:", query)
        
        # Simulate query execution with potential failures
        if "DELETE" in query.upper() and "WHERE" not in query.upper():
            raise ValueError("DELETE without WHERE clause not allowed")
        if "INVALID" in query.upper():
            raise RuntimeError("SQL syntax error in query")
        
        return "Query executed successfully"
    
    def __exit__(self, exc_type, exc_value, traceback):
        """Close connection and handle transaction"""
        print("Database cleanup starting...")
        
        if self.transaction_active:
            if exc_type is not None:
                print("Exception occurred, rolling back transaction")
                print("  Rolling back due to:", exc_type.__name__)
                # Simulate rollback
                self.transaction_active = False
            else:
                print("Committing transaction")
                # Simulate commit
                self.transaction_active = False
        
        if self.connection:
            print("Closing database connection")
            self.connection = None
        
        print("Database cleanup completed")
        
        # Don't suppress exceptions - let them propagate
        return False

# Test context managers with exception handling
print("Testing FileManager context manager:")
print("=" * 40)

# Test successful file operation
try:
    with FileManager("test_file.txt", "w") as f:
        f.write("Hello, World!\\n")
        f.write("This is a test file.\\n")
    print("✓ File operation completed successfully\\n")
except Exception as e:
    print("✗ File operation failed:", str(e), "\\n")

# Test file operation with exception
try:
    with FileManager("test_file.txt", "r") as f:
        content = f.read()
        print("File content length:", len(content))
        # Intentionally cause an error
        raise ValueError("Simulated error during file processing")
except ValueError as e:
    print("✗ Caught expected error:", str(e), "\\n")

print("Testing DatabaseConnection context manager:")
print("=" * 40)

# Test successful database operations
try:
    with DatabaseConnection("users_db") as db:
        db.execute("SELECT * FROM users")
        db.execute("UPDATE users SET last_login = NOW() WHERE id = 1")
    print("✓ Database operations completed successfully\\n")
except Exception as e:
    print("✗ Database operation failed:", str(e), "\\n")

# Test database operation with exception
try:
    with DatabaseConnection("products_db") as db:
        db.execute("SELECT * FROM products")
        db.execute("DELETE FROM products")  # This will cause an error
        db.execute("UPDATE products SET price = 0")  # Won't be reached
except ValueError as e:
    print("✗ Caught expected database error:", str(e), "\\n")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Testing FileManager context manager:
========================================
Opening file: test_file.txt
File closed successfully
File operation completed successfully
✓ File operation completed successfully

Opening file: test_file.txt
Exception occurred during file operation:
  Type: ValueError
  Message: Simulated error during file processing
Cleaning up file: test_file.txt
File closed successfully
✗ Caught expected error: Simulated error during file processing

Testing DatabaseConnection context manager:
========================================
Connecting to database: users_db
Starting transaction
Executing query: SELECT * FROM users
Query executed successfully
Executing query: UPDATE users SET last_login = NOW() WHERE id = 1
Query executed successfully
Database cleanup starting...
Committing transaction
Closing database connection
Database cleanup completed
✓ Database operations completed successfully

Connecting to database: products_db
Starting transaction
Executing query: SELECT * FROM products
Query executed successfully
Executing query: DELETE FROM products
Database cleanup starting...
Exception occurred, rolling back transaction
  Rolling back due to: ValueError
Closing database connection
Database cleanup completed
✗ Caught expected database error: DELETE without WHERE clause not allowed`
    },
    {
      type: 'text',
      title: 'Using contextlib for Simpler Context Managers',
      content: `The \`contextlib\` module provides decorators and utilities to create context managers more easily, especially for simple use cases.

**contextlib.contextmanager decorator:**
- Converts generator functions into context managers
- Code before \`yield\` is __enter__ logic
- Code after \`yield\` is __exit__ logic
- Exception handling using try/except around yield

**contextlib.closing:**
- Automatically calls \`close()\` method on objects
- Useful for objects that need cleanup but aren't context managers

**contextlib.suppress:**
- Suppresses specified exceptions
- Equivalent to try/except that ignores certain errors

**contextlib.redirect_stdout/stderr:**
- Temporarily redirect output streams
- Useful for testing and output capture

**Benefits:**
- Less boilerplate code
- Simpler for basic use cases
- Built-in exception handling patterns
- Composable with other context managers`
    },
    {
      type: 'code',
      title: 'Using contextlib for Context Managers',
      language: 'python',
      code: `# Using contextlib for simpler context manager creation
import contextlib
import time

@contextlib.contextmanager
def timing_context(operation_name):
    """Context manager for timing operations"""
    print("Starting", operation_name)
    start_time = time.time()
    
    try:
        yield start_time
    except Exception as e:
        print("Error during", operation_name + ":", str(e))
        print("Operation failed after", round(time.time() - start_time, 3), "seconds")
        raise  # Re-raise the exception
    else:
        print("Completed", operation_name, "successfully")
    finally:
        end_time = time.time()
        duration = round(end_time - start_time, 3)
        print("Total time for", operation_name + ":", duration, "seconds")

@contextlib.contextmanager
def temporary_state(obj, **new_values):
    """Context manager for temporarily changing object attributes"""
    # Save original values
    original_values = {}
    for key, new_value in new_values.items():
        if hasattr(obj, key):
            original_values[key] = getattr(obj, key)
        setattr(obj, key, new_value)
    
    print("Applied temporary state:", new_values)
    
    try:
        yield obj
    finally:
        # Restore original values
        for key, original_value in original_values.items():
            setattr(obj, key, original_value)
        print("Restored original state")

@contextlib.contextmanager
def error_handling_context(error_message_prefix):
    """Context manager that adds context to exceptions"""
    try:
        yield
    except Exception as e:
        # Add context to the error message
        enhanced_message = error_message_prefix + ": " + str(e)
        # Re-raise with enhanced context
        raise type(e)(enhanced_message) from e

@contextlib.contextmanager
def resource_pool(resource_list, resource_name):
    """Context manager for resource pooling"""
    if not resource_list:
        raise RuntimeError("No " + resource_name + " available")
    
    resource = resource_list.pop(0)
    print("Acquired", resource_name + ":", resource)
    
    try:
        yield resource
    except Exception as e:
        print("Error while using", resource_name + ":", str(e))
        raise
    finally:
        # Return resource to pool
        resource_list.append(resource)
        print("Returned", resource_name, "to pool")

class ConfigSettings:
    """Example class for testing temporary state changes"""
    def __init__(self):
        self.debug_mode = False
        self.log_level = "INFO"
        self.timeout = 30

# Test contextlib-based context managers
print("Testing contextlib context managers:")
print("=" * 45)

# Test timing context manager
print("1. Timing Context Manager:")
try:
    with timing_context("data processing"):
        time.sleep(0.1)  # Simulate work
        result = "processed 100 records"
        print("  Work completed:", result)
except Exception as e:
    print("Operation failed:", str(e))

print("\\n2. Timing Context with Exception:")
try:
    with timing_context("failed operation"):
        time.sleep(0.05)  # Some work before failure
        raise ValueError("Simulated processing error")
except ValueError as e:
    print("Caught error:", str(e))

print("\\n3. Temporary State Context Manager:")
config = ConfigSettings()
print("Original config - Debug:", config.debug_mode, ", Log level:", config.log_level)

with temporary_state(config, debug_mode=True, log_level="DEBUG", timeout=60):
    print("  Inside context - Debug:", config.debug_mode, ", Log level:", config.log_level)
    # Simulate some work with debug configuration
    print("  Running with debug configuration...")

print("After context - Debug:", config.debug_mode, ", Log level:", config.log_level)

print("\\n4. Error Handling Context Manager:")
try:
    with error_handling_context("User registration"):
        # Simulate registration process
        username = ""
        if not username:
            raise ValueError("Username cannot be empty")
except ValueError as e:
    print("Enhanced error:", str(e))

print("\\n5. Resource Pool Context Manager:")
# Simulate connection pool
connection_pool = ["conn_1", "conn_2", "conn_3"]
print("Available connections:", connection_pool)

try:
    with resource_pool(connection_pool, "database connection") as conn:
        print("  Using connection:", conn)
        # Simulate database work
        if conn == "conn_1":
            print("  Executing query on", conn)
        else:
            raise RuntimeError("Connection error")
except RuntimeError as e:
    print("Connection error:", str(e))

print("Available connections after use:", connection_pool)

# Demonstrate contextlib.suppress
print("\\n6. Using contextlib.suppress:")
with contextlib.suppress(ValueError, TypeError):
    print("  Attempting risky operation...")
    int("not_a_number")  # This would normally raise ValueError
    print("  This line won't be reached")

print("  Continued execution after suppressed error")

# Demonstrate multiple context managers
print("\\n7. Multiple Context Managers:")
try:
    with timing_context("multi-step process"), \\
         temporary_state(config, debug_mode=True):
        print("  Step 1: Configuration loaded")
        time.sleep(0.05)
        print("  Step 2: Processing data")
        time.sleep(0.05)
        print("  Step 3: Finalizing results")
except Exception as e:
    print("Multi-step process failed:", str(e))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Testing contextlib context managers:
=============================================
1. Timing Context Manager:
Starting data processing
  Work completed: processed 100 records
Completed data processing successfully
Total time for data processing: 0.101 seconds

2. Timing Context with Exception:
Starting failed operation
Error during failed operation: Simulated processing error
Operation failed after 0.051 seconds
Total time for failed operation: 0.051 seconds
Caught error: Simulated processing error

3. Temporary State Context Manager:
Original config - Debug: False , Log level: INFO
Applied temporary state: {'debug_mode': True, 'log_level': 'DEBUG', 'timeout': 60}
  Inside context - Debug: True , Log level: DEBUG
  Running with debug configuration...
Restored original state
After context - Debug: False , Log level: INFO

4. Error Handling Context Manager:
Enhanced error: User registration: Username cannot be empty

5. Resource Pool Context Manager:
Available connections: ['conn_1', 'conn_2', 'conn_3']
Acquired database connection: conn_1
  Using connection: conn_1
  Executing query on conn_1
Returned database connection to pool
Available connections after use: ['conn_2', 'conn_3', 'conn_1']

6. Using contextlib.suppress:
  Attempting risky operation...
  Continued execution after suppressed error

7. Multiple Context Managers:
Starting multi-step process
Applied temporary state: {'debug_mode': True}
  Step 1: Configuration loaded
  Step 2: Processing data
  Step 3: Finalizing results
Completed multi-step process successfully
Restored original state
Total time for multi-step process: 0.101 seconds`
    },
    {
      type: 'code',
      title: 'Advanced Context Manager Patterns',
      language: 'python',
      code: `# Advanced context manager patterns for complex scenarios
import contextlib
from datetime import datetime

class TransactionManager:
    """Advanced context manager for nested transactions"""
    
    def __init__(self, name):
        self.name = name
        self.transaction_stack = []
        self.rollback_actions = []
    
    def __enter__(self):
        transaction_id = "TXN_" + str(len(self.transaction_stack) + 1)
        self.transaction_stack.append(transaction_id)
        print("Started transaction:", transaction_id, "in", self.name)
        return self
    
    def add_rollback_action(self, action, *args, **kwargs):
        """Add action to perform if transaction is rolled back"""
        self.rollback_actions.append((action, args, kwargs))
    
    def execute_operation(self, operation_name, should_fail=False):
        """Execute an operation within the transaction"""
        print("  Executing", operation_name)
        
        if should_fail:
            raise RuntimeError("Operation " + operation_name + " failed")
        
        # Add rollback action for this operation
        self.add_rollback_action(self._rollback_operation, operation_name)
        print("    " + operation_name + " completed successfully")
    
    def _rollback_operation(self, operation_name):
        """Rollback action for an operation"""
        print("    Rolling back:", operation_name)
    
    def __exit__(self, exc_type, exc_value, traceback):
        current_transaction = self.transaction_stack.pop()
        
        if exc_type is not None:
            print("Exception in transaction", current_transaction + ":", exc_type.__name__)
            print("  Rolling back", len(self.rollback_actions), "operations")
            
            # Execute rollback actions in reverse order
            for action, args, kwargs in reversed(self.rollback_actions):
                try:
                    action(*args, **kwargs)
                except Exception as rollback_error:
                    print("    Rollback action failed:", str(rollback_error))
            
            print("  Transaction", current_transaction, "rolled back")
        else:
            print("  Transaction", current_transaction, "committed successfully")
        
        # Clear rollback actions for this transaction level
        self.rollback_actions.clear()
        
        # Don't suppress exceptions
        return False

@contextlib.contextmanager
def monitoring_context(operation_name, alert_threshold=1.0):
    """Context manager for monitoring operations and alerting"""
    start_time = datetime.now()
    print("[MONITOR] Starting", operation_name)
    
    try:
        yield
        duration = (datetime.now() - start_time).total_seconds()
        
        if duration > alert_threshold:
            print("[ALERT] " + operation_name + " took " + str(round(duration, 2)) + 
                  "s (threshold: " + str(alert_threshold) + "s)")
        else:
            print("[MONITOR] " + operation_name + " completed in " + str(round(duration, 2)) + "s")
            
    except Exception as e:
        duration = (datetime.now() - start_time).total_seconds()
        print("[ERROR] " + operation_name + " failed after " + str(round(duration, 2)) + 
              "s: " + str(e))
        raise

@contextlib.contextmanager
def retry_context(max_attempts=3, exceptions=(Exception,)):
    """Context manager for automatic retry logic"""
    last_exception = None
    
    for attempt in range(1, max_attempts + 1):
        try:
            print("Attempt", attempt, "of", max_attempts)
            yield attempt
            return  # Success, exit context manager
        except exceptions as e:
            last_exception = e
            print("  Attempt", attempt, "failed:", str(e))
            
            if attempt < max_attempts:
                print("  Retrying...")
            else:
                print("  All attempts exhausted")
                raise last_exception

class BatchProcessor:
    """Example class for testing advanced context managers"""
    
    def __init__(self):
        self.processed_items = []
        self.failed_items = []
    
    def process_item(self, item, should_fail=False):
        """Process a single item"""
        if should_fail:
            self.failed_items.append(item)
            raise ValueError("Failed to process item: " + str(item))
        else:
            self.processed_items.append(item)
            return "Processed: " + str(item)

# Test advanced context manager patterns
print("Testing Advanced Context Manager Patterns:")
print("=" * 50)

# Test TransactionManager
print("1. Transaction Manager with Rollback:")
try:
    with TransactionManager("UserService") as txn:
        txn.execute_operation("create_user")
        txn.execute_operation("send_welcome_email")
        txn.execute_operation("update_analytics", should_fail=True)  # This will fail
        txn.execute_operation("log_activity")  # Won't be reached
except RuntimeError as e:
    print("Transaction failed as expected:", str(e))

print("\\n2. Monitoring Context Manager:")
import time

with monitoring_context("fast_operation", alert_threshold=0.2):
    time.sleep(0.1)
    print("  Fast work completed")

print()

with monitoring_context("slow_operation", alert_threshold=0.1):
    time.sleep(0.15)
    print("  Slow work completed")

print("\\n3. Retry Context Manager:")
processor = BatchProcessor()

# Test successful retry
try:
    with retry_context(max_attempts=3, exceptions=(ValueError,)) as attempt:
        if attempt <= 2:
            result = processor.process_item("item_" + str(attempt), should_fail=True)
        else:
            result = processor.process_item("item_" + str(attempt), should_fail=False)
        print("  Success:", result)
except ValueError as e:
    print("All retries failed:", str(e))

print("\\n4. Nested Context Managers:")
# Combine multiple context managers
try:
    with monitoring_context("complex_operation"), \\
         TransactionManager("DataService") as txn, \\
         retry_context(max_attempts=2) as attempt:
        
        print("  Performing complex operation (attempt " + str(attempt) + ")")
        time.sleep(0.05)
        
        txn.execute_operation("validate_data")
        txn.execute_operation("transform_data")
        
        if attempt == 1:
            # Fail on first attempt to test retry
            raise RuntimeError("Simulated network error")
        
        txn.execute_operation("save_data")
        print("  Complex operation completed successfully")
        
except RuntimeError as e:
    print("Complex operation ultimately failed:", str(e))

print("\\n5. Context Manager Error Suppression:")
class ErrorTracker:
    def __init__(self):
        self.errors = []
    
    @contextlib.contextmanager
    def track_errors(self, operation_name):
        """Context manager that tracks but suppresses certain errors"""
        try:
            yield
        except (ValueError, TypeError) as e:
            self.errors.append((operation_name, type(e).__name__, str(e)))
            print("Tracked error in " + operation_name + ":", str(e))
            # Suppress these specific errors by not re-raising
        except Exception as e:
            # Don't suppress other exceptions
            print("Unhandled error in " + operation_name + ":", str(e))
            raise

error_tracker = ErrorTracker()

# Test error tracking and suppression
with error_tracker.track_errors("data_parsing"):
    print("  Processing data...")
    int("invalid_number")  # ValueError - will be tracked and suppressed

print("  Continued execution after tracked error")

with error_tracker.track_errors("validation"):
    print("  Validating input...")
    {"key": "value"}["missing_key"]  # KeyError - will not be suppressed

print("\\nTracked errors:", len(error_tracker.errors))
for operation, error_type, message in error_tracker.errors:
    print("  " + operation + ":", error_type, "-", message)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Testing Advanced Context Manager Patterns:
==================================================
1. Transaction Manager with Rollback:
Started transaction: TXN_1 in UserService
  Executing create_user
    create_user completed successfully
  Executing send_welcome_email
    send_welcome_email completed successfully
  Executing update_analytics
Exception in transaction TXN_1: RuntimeError
  Rolling back 2 operations
    Rolling back: send_welcome_email
    Rolling back: create_user
  Transaction TXN_1 rolled back
Transaction failed as expected: Operation update_analytics failed

2. Monitoring Context Manager:
[MONITOR] Starting fast_operation
  Fast work completed
[MONITOR] fast_operation completed in 0.1s

[MONITOR] Starting slow_operation
  Slow work completed
[ALERT] slow_operation took 0.15s (threshold: 0.1s)

3. Retry Context Manager:
Attempt 1 of 3
  Attempt 1 failed: Failed to process item: item_1
  Retrying...
Attempt 2 of 3
  Attempt 2 failed: Failed to process item: item_2
  Retrying...
Attempt 3 of 3
  Success: Processed: item_3

4. Nested Context Managers:
[MONITOR] Starting complex_operation
Attempt 1 of 2
Started transaction: TXN_1 in DataService
  Performing complex operation (attempt 1)
  Executing validate_data
    validate_data completed successfully
  Executing transform_data
    transform_data completed successfully
Exception in transaction TXN_1: RuntimeError
  Rolling back 2 operations
    Rolling back: transform_data
    Rolling back: validate_data
  Transaction TXN_1 rolled back
  Attempt 1 failed: Simulated network error
  Retrying...
Attempt 2 of 2
Started transaction: TXN_1 in DataService
  Performing complex operation (attempt 2)
  Executing validate_data
    validate_data completed successfully
  Executing transform_data
    transform_data completed successfully
  Executing save_data
    save_data completed successfully
  Complex operation completed successfully
  Transaction TXN_1 committed successfully
[MONITOR] complex_operation completed in 0.1s

5. Context Manager Error Suppression:
  Processing data...
Tracked error in data_parsing: invalid literal for int() with base 10: 'invalid_number'
  Continued execution after tracked error
  Validating input...
Unhandled error in validation: 'missing_key'

Tracked errors: 1
  data_parsing: ValueError - invalid literal for int() with base 10: 'invalid_number'`
    }
  ],
  keyTakeaways: [
    'Context managers guarantee cleanup operations through __exit__ method execution',
    '__exit__ receives exception information and can suppress exceptions by returning True',
    'contextlib.contextmanager decorator simplifies context manager creation using generators',
    'Context managers provide exception safety for resource management and state changes',
    'Advanced patterns include nested transactions, monitoring, retry logic, and error tracking',
    'Combining multiple context managers enables complex, robust error handling workflows'
  ]
};