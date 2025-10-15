// Lesson content for Reading user input with input()
export const readingInputContent = {
  id: 'reading-input',
  title: 'Reading User Input with input()',
  duration: '15 min',
  overview: `Learn how to make your Python programs interactive! Master the input() function to collect data from users, handle different types of input, and create engaging programs that respond to user interactions. Build the foundation for creating dynamic, user-driven applications.`,
  objectives: [
    'Use the input() function to collect user data from the keyboard',
    'Understand that input() always returns strings and convert to appropriate types',
    'Handle numeric input with proper type conversion (int, float)',
    'Create interactive programs that respond to user input',
    'Apply input validation basics to prevent common errors',
    'Build simple interactive examples using input() and output'
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to User Input',
      content: `Interactive programs are much more engaging than static ones! The \`input()\` function allows your Python programs to:

**📝 Collect Information** - Get data directly from users
**🎮 Create Interactive Experiences** - Build programs that respond to user choices
**🔄 Enable Dynamic Behavior** - Programs that adapt based on user input
**💬 Facilitate Communication** - Create conversational interfaces

The \`input()\` function pauses program execution and waits for the user to type something and press Enter. This makes your programs feel alive and responsive!

**Key Point:** The \`input()\` function **always returns a string**, even if the user types numbers. You'll need to convert the input to the appropriate data type when working with numbers.`
    },
    
    {
      type: 'text',
      title: 'Basic input() Function',
      content: `The \`input()\` function is simple to use:

**Syntax:** \`variable = input()\`
**With Prompt:** \`variable = input("Your prompt message: ")\`

When Python encounters \`input()\`, it:
1. Displays the prompt message (if provided)
2. Waits for user to type and press Enter
3. Returns what the user typed as a string
4. Stores the result in your variable`
    },
    
    {
      type: 'code',
      title: 'Basic Input Example',
      language: 'python',
      code: `# Simple input without prompt
print("What's your name?")
name = input()
print("Hello,", name)

# Input with prompt message
age = input("How old are you? ")
print("You are", age, "years old")`
    },
    
    {
      type: 'output',
      title: 'Sample Output (user types "Alice" and "25")',
      content: `What's your name?
Alice
Hello, Alice
How old are you? 25
You are 25 years old`
    },
    
    {
      type: 'code',
      title: 'Multiple Inputs',
      language: 'python',
      code: `# Collecting multiple pieces of information
first_name = input("Enter your first name: ")
last_name = input("Enter your last name: ")
city = input("What city do you live in? ")

print("Nice to meet you,", first_name, last_name)
print("I hope you enjoy living in", city)`
    },
    
    {
      type: 'output',
      title: 'Sample Output (user types "John", "Doe", "Seattle")',
      content: `Enter your first name: John
Enter your last name: Doe
What city do you live in? Seattle
Nice to meet you, John Doe
I hope you enjoy living in Seattle`
    },
    
    {
      type: 'text',
      title: 'Understanding String Input',
      content: `**Critical Concept:** The \`input()\` function always returns a **string**, regardless of what the user types.

Even if a user types the number \`42\`, Python receives it as the string \`"42"\`. This is important when you need to perform calculations or comparisons with the input.

Let's see this in action:`
    },
    
    {
      type: 'code',
      title: 'Input Always Returns Strings',
      language: 'python',
      code: `# Get user input
user_input = input("Type the number 5: ")

# Check what we actually received
print("You typed:", user_input)
print("Type of input:", type(user_input))

# This shows it's a string, not a number
print("Is it equal to string '5'?", user_input == "5")
print("Is it equal to number 5?", user_input == 5)`
    },
    
    {
      type: 'output',
      title: 'Sample Output (user types "5")',
      content: `Type the number 5: 5
You typed: 5
Type of input: <class 'str'>
Is it equal to string '5'? True
Is it equal to number 5? False`
    },
    
    {
      type: 'text',
      title: 'Converting Input to Numbers',
      content: `To use numeric input for calculations, you must convert strings to numbers using:

**\`int()\`** - Convert to integer (whole numbers)
**\`float()\`** - Convert to floating-point (decimal numbers)

This process is called **type conversion** or **type casting**.`
    },
    
    {
      type: 'code',
      title: 'Converting to Integer',
      language: 'python',
      code: `# Get age as string and convert to integer
age_string = input("Enter your age: ")
age_number = int(age_string)

print("Age as string:", age_string, "Type:", type(age_string))
print("Age as number:", age_number, "Type:", type(age_number))

# Now we can do math with it
next_year_age = age_number + 1
print("Next year you'll be", next_year_age, "years old")`
    },
    
    {
      type: 'output',
      title: 'Sample Output (user types "25")',
      content: `Enter your age: 25
Age as string: 25 Type: <class 'str'>
Age as number: 25 Type: <class 'int'>
Next year you'll be 26 years old`
    },
    
    {
      type: 'code',
      title: 'Converting to Float',
      language: 'python',
      code: `# Get height with decimals
height_string = input("Enter your height in meters (e.g., 1.75): ")
height_number = float(height_string)

print("Height as string:", height_string)
print("Height as float:", height_number)

# Calculate height in centimeters
height_cm = height_number * 100
print("Your height in centimeters:", height_cm)`
    },
    
    {
      type: 'output',
      title: 'Sample Output (user types "1.75")',
      content: `Enter your height in meters (e.g., 1.75): 1.75
Height as string: 1.75
Height as float: 1.75
Your height in centimeters: 175.0`
    },
    
    {
      type: 'code',
      title: 'Direct Conversion (Common Pattern)',
      language: 'python',
      code: `# Convert input directly in one line
age = int(input("Enter your age: "))
weight = float(input("Enter your weight in kg: "))
name = input("Enter your name: ")  # Keep as string

print("Hello", name)
print("You are", age, "years old")
print("You weigh", weight, "kg")

# Now we can do calculations directly
print("In 5 years you'll be", age + 5)
print("Your weight in pounds is approximately", weight * 2.2)`
    },
    
    {
      type: 'output',
      title: 'Sample Output (user types "28", "70.5", "Sarah")',
      content: `Enter your age: 28
Enter your weight in kg: 70.5
Enter your name: Sarah
Hello Sarah
You are 28 years old
You weigh 70.5 kg
In 5 years you'll be 33
Your weight in pounds is approximately 155.1`
    },
    
    {
      type: 'text',
      title: 'Simple Interactive Examples',
      content: `Let's build some practical interactive programs using input() and basic operations. These examples show how user input makes programs much more engaging and useful.`
    },
    
    {
      type: 'code',
      title: 'Simple Calculator',
      language: 'python',
      code: `# Interactive calculator for two numbers
print("Simple Calculator")
print("-" * 15)

# Get two numbers from user
first_number = float(input("Enter first number: "))
second_number = float(input("Enter second number: "))

# Perform basic operations
addition = first_number + second_number
subtraction = first_number - second_number
multiplication = first_number * second_number
division = first_number / second_number

# Display results
print("Results:")
print(first_number, "+", second_number, "=", addition)
print(first_number, "-", second_number, "=", subtraction)
print(first_number, "*", second_number, "=", multiplication)
print(first_number, "/", second_number, "=", division)`
    },
    
    {
      type: 'output',
      title: 'Sample Output (user types "10" and "3")',
      content: `Simple Calculator
---------------
Enter first number: 10
Enter second number: 3
Results:
10.0 + 3.0 = 13.0
10.0 - 3.0 = 7.0
10.0 * 3.0 = 30.0
10.0 / 3.0 = 3.3333333333333335`
    },
    
    {
      type: 'code',
      title: 'Personal Information Collector',
      language: 'python',
      code: `# Collect and display personal information
print("Personal Information Form")
print("=" * 25)

# Collect various types of information
full_name = input("Full name: ")
age = int(input("Age: "))
height = float(input("Height in meters: "))
favorite_color = input("Favorite color: ")
is_student = input("Are you a student? (yes/no): ")

# Display collected information
print("\\nYour Information:")
print("=" * 17)
print("Name:", full_name)
print("Age:", age, "years")
print("Height:", height, "meters")
print("Favorite color:", favorite_color)
print("Student status:", is_student)

# Some simple calculations
birth_year = 2024 - age
height_cm = height * 100

print("\\nCalculated Info:")
print("Approximate birth year:", birth_year)
print("Height in centimeters:", height_cm)`
    },
    
    {
      type: 'output',
      title: 'Sample Output (user provides sample data)',
      content: `Personal Information Form
=========================
Full name: Alex Johnson
Age: 22
Height in meters: 1.68
Favorite color: Blue
Are you a student? (yes/no): yes

Your Information:
=================
Name: Alex Johnson
Age: 22 years
Height: 1.68 meters
Favorite color: Blue
Student status: yes

Calculated Info:
Approximate birth year: 2002
Height in centimeters: 168.0`
    },
    
    {
      type: 'code',
      title: 'Shopping Total Calculator',
      language: 'python',
      code: `# Calculate shopping total with tax
print("Shopping Receipt Calculator")
print("=" * 27)

# Get item information
item_name = input("Item name: ")
price = float(input("Item price: \\$"))
quantity = int(input("Quantity: "))
tax_rate = float(input("Tax rate (as decimal, e.g., 0.08): "))

# Calculations
subtotal = price * quantity
tax_amount = subtotal * tax_rate
total = subtotal + tax_amount

# Display receipt
print("\\nReceipt:")
print("-" * 20)
print("Item:", item_name)
print("Price: \\$" + str(price))
print("Quantity:", quantity)
print("Subtotal: \\$" + str(subtotal))
print("Tax: \\$" + str(round(tax_amount, 2)))
print("Total: \\$" + str(round(total, 2)))`
    },
    
    {
      type: 'output',
      title: 'Sample Output (user buys 3 books at $15.99 each)',
      content: `Shopping Receipt Calculator
===========================
Item name: Python Book
Item price: $15.99
Quantity: 3
Tax rate (as decimal, e.g., 0.08): 0.08

Receipt:
--------------------
Item: Python Book
Price: $15.99
Quantity: 3
Subtotal: $47.97
Tax: $3.84
Total: $51.81`
    },
    
    {
      type: 'text',
      title: 'Input Validation Basics',
      content: `While we haven't learned error handling yet, it's good to be aware that user input can cause problems:

**Common Issues:**
- Users might type letters when you expect numbers
- Empty input (just pressing Enter)
- Unexpected formats or values

**Simple Prevention:**
- Use clear, specific prompts
- Give examples in your prompts
- Test your programs with various inputs

We'll learn proper error handling in later lessons, but for now, clear prompts help users provide the right input.`
    },
    
    {
      type: 'code',
      title: 'Clear Prompts Prevent Errors',
      language: 'python',
      code: `# Good: Clear, specific prompts with examples
print("Age Calculator")

# Clear prompt with example
birth_year = int(input("Enter your birth year (e.g., 1995): "))
current_year = 2024

age = current_year - birth_year

print("You are approximately", age, "years old")

# Another example with format specification
temperature = float(input("Enter temperature in Celsius (e.g., 23.5): "))
fahrenheit = temperature * 9/5 + 32

print("Temperature in Fahrenheit:", fahrenheit)`
    },
    
    {
      type: 'output',
      title: 'Sample Output (user types "1998" and "25.0")',
      content: `Age Calculator
Enter your birth year (e.g., 1995): 1998
You are approximately 26 years old
Enter temperature in Celsius (e.g., 23.5): 25.0
Temperature in Fahrenheit: 77.0`
    },
    
    {
      type: 'code',
      title: 'Interactive Greeting Program',
      language: 'python',
      code: `# Create a personalized greeting
print("Welcome to the Greeting Generator!")
print("=" * 35)

# Collect user information
first_name = input("Enter your first name: ")
hobby = input("What's your favorite hobby? ")
dream_job = input("What's your dream job? ")

# Create personalized messages
print("\\nPersonalized Greeting:")
print("-" * 21)
print("Hello,", first_name + "!")
print("It's wonderful that you enjoy", hobby)
print("I hope you achieve your dream of becoming a", dream_job)
print("Have a fantastic day,", first_name + "!")

# Show some fun facts
name_length = len(first_name)
print("\\nFun fact: Your name has", name_length, "letters!")`
    },
    
    {
      type: 'output',
      title: 'Sample Output (user input example)',
      content: `Welcome to the Greeting Generator!
===================================
Enter your first name: Emma
What's your favorite hobby? reading
What's your dream job? teacher

Personalized Greeting:
---------------------
Hello, Emma!
It's wonderful that you enjoy reading
I hope you achieve your dream of becoming a teacher
Have a fantastic day, Emma!

Fun fact: Your name has 4 letters!`
    },
    
    {
      type: 'text',
      title: 'Best Practices for User Input',
      content: `**🎯 Key Guidelines for Effective Input:**

**1. Write Clear Prompts:**
- Be specific about what you want
- Include examples when helpful
- Use friendly, conversational language

**2. Handle Data Types Properly:**
- Remember input() always returns strings
- Convert to appropriate types (int, float) when needed
- Use direct conversion for efficiency: \`int(input("Age: "))\`

**3. Make Programs User-Friendly:**
- Explain what the program does
- Use clear section headers and formatting
- Give feedback about what the program is doing

**4. Test Thoroughly:**
- Try different types of input
- Test with edge cases (very large/small numbers)
- Consider what happens with unexpected input

**5. Keep It Simple:**
- Start with basic input/output patterns
- Build complexity gradually
- Focus on making programs that work reliably

**💡 Remember:** Good user input handling makes the difference between a program that works and a program that feels professional and polished!`
    }
  ]
};