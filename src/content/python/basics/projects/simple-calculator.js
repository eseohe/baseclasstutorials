// Lesson content for Building a simple calculator
const simpleCalculatorContent = {
  id: 'simple-calculator',
  title: 'Building a simple calculator',
  duration: '35 min',
  overview: `Build your first complete Python application! Create a fully functional calculator that performs basic arithmetic operations, handles user input, and includes error handling for a professional user experience.`,
  objectives: [
    'Apply variables, functions, and control flow to build a complete application',
    'Handle user input validation and provide helpful error messages',
    'Implement basic arithmetic operations with proper error handling',
    'Create a user-friendly interface with clear prompts and feedback',
    'Structure code using functions for better organization and reusability',
  ],
  sections: [
    {
      type: 'text',
      title: 'Project Overview: Simple Calculator',
      content: `We'll build a calculator that can perform basic arithmetic operations: addition, subtraction, multiplication, and division. Our calculator will be interactive, allowing users to input numbers and choose operations.

**What we'll build:**
- **Interactive interface**: Clear prompts and user-friendly messages
- **Four operations**: Addition, subtraction, multiplication, division
- **Input validation**: Handle invalid numbers and operations gracefully
- **Error handling**: Prevent crashes from division by zero and invalid input
- **Modular design**: Use functions to organize code logically

**Skills we'll practice:**
- Getting and validating user input
- Converting strings to numbers with error handling
- Using conditional statements to control program flow
- Implementing functions for reusable code
- Handling exceptions to create robust programs

**Real-world application:**
This project demonstrates fundamental programming concepts used in all applications: user interaction, data validation, error handling, and modular design.`
    },
    {
      type: 'code',
      title: 'Step 1: Basic Addition Function',
      language: 'python',
      code: `# Start with a simple addition function
def add_numbers(a, b):
    result = a + b
    return result

print("Testing addition function:")
print("5 + 3 =", add_numbers(5, 3))`
    },
    {
      type: 'output',
      content: `Testing addition function:
5 + 3 = 8`
    },
    {
      type: 'code',
      title: 'Step 2: All Four Operations',
      language: 'python',
      code: `# Create functions for all basic operations
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    return a / b

print("Testing all operations:")
print("10 + 5 =", add(10, 5))
print("10 - 5 =", subtract(10, 5))`
    },
    {
      type: 'output',
      content: `Testing all operations:
10 + 5 = 15
10 - 5 = 5`
    },
    {
      type: 'code',
      title: 'Step 3: Safe Division with Error Handling',
      language: 'python',
      code: `# Add error handling for division by zero
def safe_divide(a, b):
    if b == 0:
        return "Error: Cannot divide by zero!"
    return a / b

print("Testing division:")
print("10 / 2 =", safe_divide(10, 2))
print("10 / 0 =", safe_divide(10, 0))`
    },
    {
      type: 'output',
      content: `Testing division:
10 / 2 = 5.0
10 / 0 = Error: Cannot divide by zero!`
    },
    {
      type: 'code',
      title: 'Step 4: Getting User Input',
      language: 'python',
      code: `# Function to safely get a number from user
def get_number(prompt):
    while True:
        try:
            user_input = input(prompt)
            number = float(user_input)
            return number
        except ValueError:
            print("Please enter a valid number!")

print("Testing input function:")
print("(Simulating user entering '25.5')")`
    },
    {
      type: 'output',
      content: `Testing input function:
(Simulating user entering '25.5')`
    },
    {
      type: 'code',
      title: 'Step 5: Operation Selection',
      language: 'python',
      code: `# Function to get operation choice from user
def get_operation():
    print("Available operations:")
    print("1. Addition (+)")
    print("2. Subtraction (-)")
    print("3. Multiplication (*)")
    print("4. Division (/)")
    
    while True:
        choice = input("Choose operation (1-4): ")
        if choice in ["1", "2", "3", "4"]:
            return choice
        print("Please choose a valid option (1-4)!")`
    },
    {
      type: 'output',
      content: `Available operations:
1. Addition (+)
2. Subtraction (-)
3. Multiplication (*)
4. Division (/)`
    },
    {
      type: 'code',
      title: 'Step 6: Performing Calculations',
      language: 'python',
      code: `# Function to perform the chosen operation
def calculate(num1, num2, operation):
    if operation == "1":
        return add(num1, num2)
    elif operation == "2":
        return subtract(num1, num2)
    elif operation == "3":
        return multiply(num1, num2)
    elif operation == "4":
        return safe_divide(num1, num2)

print("Testing calculation function:")
result = calculate(15, 3, "4")
print("15 / 3 =", result)`
    },
    {
      type: 'output',
      content: `Testing calculation function:
15 / 3 = 5.0`
    },
    {
      type: 'code',
      title: 'Step 7: Main Calculator Function',
      language: 'python',
      code: `# Main function that runs the calculator
def run_calculator():
    print("=== Simple Calculator ===")
    print("Welcome to the Python Calculator!")
    
    num1 = get_number("Enter first number: ")
    operation = get_operation()
    num2 = get_number("Enter second number: ")
    
    result = calculate(num1, num2, operation)
    
    operation_names = {
        "1": "addition",
        "2": "subtraction", 
        "3": "multiplication",
        "4": "division"
    }
    
    print("Result of", operation_names[operation] + ":", result)

print("Calculator function ready to run!")`
    },
    {
      type: 'output',
      content: `Calculator function ready to run!`
    },
    {
      type: 'code',
      title: 'Step 8: Adding Continuous Operation',
      language: 'python',
      code: `# Enhanced version with option to continue
def calculator_with_loop():
    print("=== Advanced Calculator ===")
    
    while True:
        print("\n--- New Calculation ---")
        num1 = get_number("Enter first number: ")
        operation = get_operation()
        num2 = get_number("Enter second number: ")
        
        result = calculate(num1, num2, operation)
        print("Result:", result)
        
        continue_choice = input("Do another calculation? (y/n): ")
        if continue_choice.lower() != "y":
            print("Thanks for using the calculator!")
            break

print("Enhanced calculator ready!")`
    },
    {
      type: 'output',
      content: `Enhanced calculator ready!`
    },
    {
      type: 'code',
      title: 'Step 9: Complete Calculator Program',
      language: 'python',
      code: `# Complete calculator with all features
def main():
    print("=== Python Calculator ===")
    print("Perform basic arithmetic operations")
    
    while True:
        try:
            # Get user input
            num1 = get_number("Enter first number: ")
            operation = get_operation()
            num2 = get_number("Enter second number: ")
            
            # Calculate and display result
            result = calculate(num1, num2, operation)
            
            if isinstance(result, str):  # Error message
                print(result)
            else:
                print("Result: {:.2f}".format(result))
            
            # Ask if user wants to continue
            if input("Continue? (y/n): ").lower() != "y":
                break
                
        except KeyboardInterrupt:
            print("\nCalculator stopped by user.")
            break
    
    print("Thank you for using the calculator!")

print("Complete calculator program ready to run!")`
    },
    {
      type: 'output',
      content: `Complete calculator program ready to run!`
    },
    {
      type: 'code',
      title: 'Step 10: Testing the Complete Calculator',
      language: 'python',
      code: `# Test all functions work together
print("=== Calculator Test ===")
print("Testing with sample values:")

# Test all operations
test_num1, test_num2 = 12, 4
print("Numbers:", test_num1, "and", test_num2)
print("Addition:", calculate(test_num1, test_num2, "1"))
print("Subtraction:", calculate(test_num1, test_num2, "2"))`
    },
    {
      type: 'output',
      content: `=== Calculator Test ===
Testing with sample values:
Numbers: 12 and 4
Addition: 16
Subtraction: 8`
    },
    {
      type: 'text',
      title: 'Project Summary and Next Steps',
      content: `**What you've built:**
You've created a complete calculator application that demonstrates professional programming practices:

**Key features implemented:**
- **User input handling**: Safe number input with validation
- **Error handling**: Graceful handling of invalid input and division by zero
- **Modular design**: Separate functions for different operations
- **User experience**: Clear prompts, helpful error messages, and clean output
- **Continuous operation**: Option to perform multiple calculations

**Programming concepts used:**
- **Functions**: Organizing code into reusable blocks
- **Loops**: Continuous operation until user chooses to exit
- **Conditionals**: Branching logic for different operations
- **Exception handling**: try-except blocks for robust input validation
- **String manipulation**: Processing user input and formatting output
- **Data validation**: Ensuring user input meets requirements

**Possible enhancements:**
- Add more operations (exponentiation, square root, percentage)
- Implement calculation history
- Add support for complex mathematical expressions
- Create a graphical user interface (GUI)
- Save calculation results to a file
- Add scientific calculator functions

**Skills gained:**
- Planning and structuring a complete program
- Breaking complex problems into smaller functions
- Implementing user interaction patterns
- Handling edge cases and errors gracefully
- Writing maintainable and readable code

This calculator project showcases how fundamental Python concepts combine to create practical, real-world applications. You've built something genuinely useful while practicing essential programming skills!`
    }
  ]
};

export { simpleCalculatorContent };