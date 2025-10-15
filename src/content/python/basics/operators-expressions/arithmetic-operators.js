// Lesson content for Arithmetic, comparison, logical, bitwise operators
export const arithmeticOperatorsContent = {
  id: 'arithmetic-operators',
  title: 'Arithmetic, Comparison, Logical, and Bitwise Operators',
  duration: '25 min',
  overview: `Master Python's powerful operator system! Learn arithmetic operations for mathematical calculations, comparison operators for conditional logic, logical operators for complex decision-making, and bitwise operators for low-level data manipulation. Build a solid foundation for writing expressive and efficient Python code.`,
  objectives: [
    'Perform mathematical calculations using arithmetic operators (+, -, *, /, //, %, **)',
    'Compare values using comparison operators (==, !=, <, >, <=, >=)',
    'Combine boolean expressions with logical operators (and, or, not)',
    'Understand bitwise operations for binary data manipulation (&, |, ^, ~, <<, >>)',
    'Apply operator precedence rules to write correct expressions',
    'Recognize common operator mistakes and debug them effectively'
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Python Operators',
      content: `Operators are special symbols that perform operations on values and variables. Python provides a rich set of operators that allow you to:

**🔢 Arithmetic Operations** - Perform mathematical calculations
**⚖️ Comparisons** - Test relationships between values  
**🧠 Logical Operations** - Combine and evaluate boolean expressions
**💻 Bitwise Operations** - Manipulate data at the binary level

Understanding operators is essential for writing effective Python code, as they form the building blocks of expressions and decision-making logic.`
    },
    
    {
      type: 'text', 
      title: 'Arithmetic Operators',
      content: `Arithmetic operators perform mathematical operations on numeric values. Python supports all standard mathematical operations plus some powerful extras:`
    },
    
    {
      type: 'code',
      title: 'Addition and Subtraction',
      language: 'python',
      code: `# Addition operator (+)
a = 15
b = 4
result_add = a + b
print(a, "+", b, "=", result_add)

# Subtraction operator (-)
result_sub = a - b
print(a, "-", b, "=", result_sub)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `15 + 4 = 19
15 - 4 = 11`
    },
    
    {
      type: 'code',
      title: 'Multiplication and Division',
      language: 'python',
      code: `# Multiplication operator (*)
a = 15
b = 4
result_mul = a * b
print(a, "*", b, "=", result_mul)

# Division operator (/) - always returns a float
result_div = a / b
print(a, "/", b, "=", result_div)
print("Notice that division always gives a decimal number!")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `15 * 4 = 60
15 / 4 = 3.75
Notice that division always gives a decimal number!`
    },
    
    {
      type: 'code',
      title: 'Floor Division and Modulo',
      language: 'python',
      code: `# Floor division (//) - returns integer, rounds down
a = 17
b = 5
floor_div = a // b
print(a, "//", b, "=", floor_div)
print("Floor division gives the whole number part")

# Modulo (%) - gives remainder after division  
remainder = a % b
print(a, "%", b, "=", remainder)
print("Modulo gives the remainder")`
    },
    
    {
      type: 'output', 
      title: 'Output',
      content: `17 // 5 = 3
Floor division gives the whole number part
17 % 5 = 2
Modulo gives the remainder`
    },
    
    {
      type: 'code',
      title: 'Exponentiation (Power)',
      language: 'python',
      code: `# Exponentiation (**) - raises to a power
a = 17
b = 5
power = a ** b
print(a, "**", b, "=", power)
print("This means 17 to the power of 5")

# Smaller example
x = 3
y = 2
result = x ** y
print(x, "**", y, "=", result, "(which is 3 * 3)")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `17 ** 5 = 1419857
This means 17 to the power of 5
3 ** 2 = 9 (which is 3 * 3)`
    },
    
    {
      type: 'code',
      title: 'Working with Negative Numbers',
      language: 'python',
      code: `# Operations with negative numbers
c = -10
d = 3
addition = c + d
print(c, "+", d, "=", addition)

multiplication = c * d  
print(c, "*", d, "=", multiplication)

# Negative times negative gives positive
e = -5
f = -2
result = e * f
print(e, "*", f, "=", result)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `-10 + 3 = -7
-10 * 3 = -30
-5 * -2 = 10`
    },
    
    {
      type: 'code',
      title: 'Real-World Example: Calculating Cost with Tax',
      language: 'python',
      code: `# Calculate total cost with tax
price = 29.99
tax_rate = 0.08

# Calculate the tax amount
tax_amount = price * tax_rate
print("Price:", price)
print("Tax amount:", tax_amount)

# Calculate total cost
total_cost = price + tax_amount
print("Total cost:", total_cost)`
    },
    
    {
      type: 'output',
      title: 'Output', 
      content: `Price: 29.99
Tax amount: 2.3992
Total cost: 32.3892`
    },
    
    {
      type: 'code',
      title: 'Real-World Example: Temperature Conversion',
      language: 'python',
      code: `# Convert temperature from Fahrenheit to Celsius
fahrenheit = 98.6

# Formula: (F - 32) * 5 / 9
celsius = (fahrenheit - 32) * 5 / 9
print("Temperature in Fahrenheit:", fahrenheit)
print("Temperature in Celsius:", celsius)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Temperature in Fahrenheit: 98.6
Temperature in Celsius: 37.0`
    },
    
    {
      type: 'code',
      title: 'Real-World Example: Even or Odd Check',
      language: 'python',
      code: `# Check if a number is even or odd using modulo
number = 17
remainder = number % 2

print("Number:", number)
print("Remainder when divided by 2:", remainder)

# If remainder is 0, number is even
# If remainder is 1, number is odd
if remainder == 0:
    print("The number is even")
else:
    print("The number is odd")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Number: 17
Remainder when divided by 2: 1
The number is odd`
    },
    
    {
      type: 'text',
      title: 'Comparison Operators',
      content: `Comparison operators test relationships between values and return boolean results (True or False). These are essential for conditional statements and decision-making logic.`
    },
    
    {
      type: 'code',
      title: 'Equal To and Not Equal To',
      language: 'python', 
      code: `# Comparison operators test relationships between values
x = 10
y = 15
z = 10

# Equal to (==)
result1 = x == y
print(x, "==", y, ":", result1)

result2 = x == z  
print(x, "==", z, ":", result2)

# Not equal to (!=)
result3 = x != y
print(x, "!=", y, ":", result3)

result4 = x != z
print(x, "!=", z, ":", result4)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `10 == 15 : False
10 == 10 : True
10 != 15 : True
10 != 10 : False`
    },
    
    {
      type: 'code',
      title: 'Greater Than and Less Than',
      language: 'python',
      code: `x = 10
y = 15

# Greater than (>)
result1 = y > x
print(y, ">", x, ":", result1)

result2 = x > y
print(x, ">", y, ":", result2)

# Less than (<)
result3 = x < y
print(x, "<", y, ":", result3)

result4 = y < x
print(y, "<", x, ":", result4)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `15 > 10 : True
10 > 15 : False
10 < 15 : True
15 < 10 : False`
    },
    
    {
      type: 'code',
      title: 'Greater Than or Equal, Less Than or Equal',
      language: 'python',
      code: `x = 10
y = 15
z = 10

# Greater than or equal to (>=)
result1 = x >= z
print(x, ">=", z, ":", result1)

result2 = x >= y
print(x, ">=", y, ":", result2)

# Less than or equal to (<=)
result3 = x <= z
print(x, "<=", z, ":", result3)

result4 = y <= x
print(y, "<=", x, ":", result4)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `10 >= 10 : True
10 >= 15 : False
10 <= 10 : True
15 <= 10 : False`
    },
    
    {
      type: 'code',
      title: 'Comparing Strings',
      language: 'python',
      code: `# Comparing strings
name1 = "Alice"
name2 = "Bob" 
name3 = "Alice"

# Check if strings are equal
result1 = name1 == name2
print('"Alice" == "Bob":', result1)

result2 = name1 == name3
print('"Alice" == "Alice":', result2)

# String comparison uses alphabetical order
result3 = name1 < name2
print('"Alice" < "Bob":', result3)
print("A comes before B in the alphabet")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `"Alice" == "Bob": False
"Alice" == "Alice": True
"Alice" < "Bob": True
A comes before B in the alphabet`
    },
    
    {
      type: 'code',
      title: 'Comparing Numbers: Integers and Floats',
      language: 'python',
      code: `# Comparing integers and floats
num_int = 5
num_float = 5.0

result = num_int == num_float
print("5 ==", num_float, ":", result)
print("Python sees 5 and 5.0 as equal values!")

# Check their types
print("Type of 5:", type(num_int))
print("Type of 5.0:", type(num_float))`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `5 == 5.0 : True
Python sees 5 and 5.0 as equal values!
Type of 5: <class 'int'>
Type of 5.0: <class 'float'>`
    },
    
    {
      type: 'code',
      title: 'Comparing Booleans',
      language: 'python',
      code: `# Comparing boolean values
bool1 = True
bool2 = False

result = bool1 > bool2
print("True > False:", result)
print("Python treats True as 1 and False as 0")

# Prove this:
print("True equals:", int(True))
print("False equals:", int(False))`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `True > False: True
Python treats True as 1 and False as 0
True equals: 1
False equals: 0`
    },
    
    {
      type: 'text',
      title: 'Logical Operators',
      content: `Logical operators combine boolean expressions and return boolean results. They're essential for creating complex conditions and decision-making logic.

**Python Logical Operators:**
- **and** - Returns True if both operands are True
- **or** - Returns True if at least one operand is True  
- **not** - Returns the opposite boolean value`
    },
    
    {
      type: 'code',
      title: 'The "and" Logical Operator',
      language: 'python',
      code: `# The 'and' operator - returns True only if BOTH values are True
a = True
b = False

result1 = a and b
print("True and False:", result1)

result2 = a and a
print("True and True:", result2)

result3 = b and b
print("False and False:", result3)`
    },
    
    {
      type: 'output',
      title: 'Output', 
      content: `True and False: False
True and True: True
False and False: False`
    },
    
    {
      type: 'code',
      title: 'The "or" Logical Operator',
      language: 'python',
      code: `# The 'or' operator - returns True if AT LEAST ONE value is True
a = True
b = False

result1 = a or b
print("True or False:", result1)

result2 = a or a  
print("True or True:", result2)

result3 = b or b
print("False or False:", result3)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `True or False: True
True or True: True
False or False: False`
    },
    
    {
      type: 'code',
      title: 'The "not" Logical Operator',
      language: 'python',
      code: `# The 'not' operator - flips the boolean value
a = True
b = False

result1 = not a
print("not True:", result1)

result2 = not b
print("not False:", result2)

# Double negative
result3 = not not a
print("not not True:", result3)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `not True: False
not False: True
not not True: True`
    },
    
    {
      type: 'code',
      title: 'Combining Comparisons with Logical Operators',
      language: 'python',
      code: `# Logical operators with comparison results
age = 25
income = 50000
has_license = True

# Check individual conditions
is_adult = age >= 18
has_good_income = income >= 30000

print("Age:", age)
print("Income:", income) 
print("Has license:", has_license)
print("Is adult (age >= 18):", is_adult)
print("Has good income (>= 30000):", has_good_income)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Age: 25
Income: 50000
Has license: True
Is adult (age >= 18): True
Has good income (>= 30000): True`
    },
    
    {
      type: 'code',
      title: 'Combining Multiple Conditions',
      language: 'python',
      code: `# Continue from previous example
age = 25
income = 50000  
has_license = True

is_adult = age >= 18
has_good_income = income >= 30000

# Combine all conditions with 'and'
eligible = is_adult and has_good_income and has_license
print("Eligible for loan:", eligible)

# All conditions must be True for 'and' to return True
print("All conditions are True, so eligible =", eligible)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Eligible for loan: True
All conditions are True, so eligible = True`
    },
    
    {
      type: 'code',
      title: 'Complex Logic with "or" and "and"',
      language: 'python',
      code: `# More complex logic example
score = 85
attendance = 0.9

# Check individual conditions
high_score = score >= 70
decent_score = score >= 60
good_attendance = attendance >= 0.8

print("Score:", score)
print("Attendance:", attendance)
print("High score (>= 70):", high_score)
print("Decent score (>= 60):", decent_score)  
print("Good attendance (>= 0.8):", good_attendance)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Score: 85
Attendance: 0.9
High score (>= 70): True
Decent score (>= 60): True
Good attendance (>= 0.8): True`
    },
    
    {
      type: 'code',
      title: 'Final Logic Decision',
      language: 'python',
      code: `# Continue from previous example  
score = 85
attendance = 0.9

high_score = score >= 70
decent_score = score >= 60
good_attendance = attendance >= 0.8

# Pass if: high score OR (decent score AND good attendance)
passes = high_score or (decent_score and good_attendance)
print("Student passes:", passes)

# Since high_score is True, the student passes
# (Even if the other conditions were false)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Student passes: True`
    },
    
    {
      type: 'code',
      title: 'How Python Evaluates Logical Expressions',
      language: 'python',
      code: `# Python is smart about logical operators
# With 'and': if first is False, Python doesn't check the second
# With 'or': if first is True, Python doesn't check the second

# Example with 'and'
x = 5
result1 = (x > 10) and (x < 20)
print("x > 10:", x > 10)
print("Since first condition is False, result is:", result1)

# Example with 'or'  
result2 = (x > 0) or (x < 20)
print("x > 0:", x > 0)
print("Since first condition is True, result is:", result2)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `x > 10: False
Since first condition is False, result is: False
x > 0: True
Since first condition is True, result is: True`
    },
    
    {
      type: 'text',
      title: 'Bitwise Operators',
      content: `Bitwise operators work on binary representations of numbers, manipulating individual bits. These are mainly used in systems programming, cryptography, and optimization scenarios.

**Python Bitwise Operators:**
- **&** (AND) - Returns 1 if both bits are 1
- **|** (OR) - Returns 1 if at least one bit is 1  
- **^** (XOR) - Returns 1 if bits are different
- **~** (NOT) - Flips all bits
- **<<** (Left Shift) - Shifts bits left
- **>>** (Right Shift) - Shifts bits right`
    },
    
    {
      type: 'code',
      title: 'Understanding Binary Numbers',
      language: 'python',
      code: `# First, let's see how Python shows binary numbers
a = 12  # This is 1100 in binary
b = 10  # This is 1010 in binary

print("a =", a, "which is", bin(a), "in binary")
print("b =", b, "which is", bin(b), "in binary")

# The bin() function shows binary representation
print("Binary of 5:", bin(5))
print("Binary of 8:", bin(8))`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `a = 12 which is 0b1100 in binary
b = 10 which is 0b1010 in binary
Binary of 5: 0b101
Binary of 8: 0b1000`
    },
    
    {
      type: 'code',
      title: 'Bitwise AND (&) Operation',
      language: 'python',
      code: `# Bitwise AND (&) - returns 1 only if both bits are 1
a = 12  # Binary: 1100
b = 10  # Binary: 1010

and_result = a & b
print("a & b =", and_result)
print("Binary result:", bin(and_result))

# Show the logic:
print("12 in binary: 1100")
print("10 in binary: 1010") 
print("AND result:   1000 (which is 8)")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `a & b = 8
Binary result: 0b1000
12 in binary: 1100
10 in binary: 1010
AND result:   1000 (which is 8)`
    },
    
    {
      type: 'code',
      title: 'Bitwise OR (|) and XOR (^) Operations',
      language: 'python',
      code: `a = 12  # Binary: 1100
b = 10  # Binary: 1010

# Bitwise OR (|) - returns 1 if at least one bit is 1
or_result = a | b
print("a | b =", or_result)
print("OR result in binary:", bin(or_result))

# Bitwise XOR (^) - returns 1 if bits are different
xor_result = a ^ b
print("a ^ b =", xor_result)
print("XOR result in binary:", bin(xor_result))`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `a | b = 14
OR result in binary: 0b1110
a ^ b = 6
XOR result in binary: 0b110`
    },
    
    {
      type: 'code',
      title: 'Bitwise Shift Operations',
      language: 'python',
      code: `# Bit shifting operations
number = 5  # Binary: 101

print("Original:", number, "binary:", bin(number))

# Left shift (<<) - like multiplying by 2
left_shift = number << 1  
print(number, "<< 1 =", left_shift, "binary:", bin(left_shift))

# Left shift by 2 positions
left_shift2 = number << 2
print(number, "<< 2 =", left_shift2, "binary:", bin(left_shift2))`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Original: 5 binary: 0b101
5 << 1 = 10 binary: 0b1010
5 << 2 = 20 binary: 0b10100`
    },
    
    {
      type: 'code',
      title: 'Right Shift Operation',
      language: 'python',
      code: `# Right shift (>>) - like dividing by 2
number = 8  # Binary: 1000

print("Original:", number, "binary:", bin(number))

# Right shift by 1 position  
right_shift = number >> 1
print(number, ">> 1 =", right_shift, "binary:", bin(right_shift))

# Right shift by 2 positions
right_shift2 = number >> 2
print(number, ">> 2 =", right_shift2, "binary:", bin(right_shift2))`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Original: 8 binary: 0b1000
8 >> 1 = 4 binary: 0b100
8 >> 2 = 2 binary: 0b10`
    },
    
    {
      type: 'code',
      title: 'Practical Example: Check Even Numbers',
      language: 'python',
      code: `# Using bitwise AND to check if number is even
# If a number AND 1 equals 0, the number is even

num1 = 4
num2 = 7

result1 = num1 & 1
print(num1, "& 1 =", result1)
if result1 == 0:
    print(num1, "is even")
else:
    print(num1, "is odd")

result2 = num2 & 1  
print(num2, "& 1 =", result2)
if result2 == 0:
    print(num2, "is even")
else:
    print(num2, "is odd")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `4 & 1 = 0
4 is even
7 & 1 = 1
7 is odd`
    },
    
    {
      type: 'text',
      title: 'Combining Different Operator Types',
      content: `In real-world programming, you'll often combine different types of operators. Understanding how they work together is crucial for writing correct and efficient code.`
    },
    
    {
      type: 'code',
      title: 'Combining Arithmetic and Comparison',
      language: 'python',
      code: `# Example: Analyze a number using multiple operators
num = 8

# Arithmetic operations
squared = num ** 2
remainder = num % 2

print("Number:", num)
print("Squared:", squared)
print("Remainder when divided by 2:", remainder)

# Comparison operations
is_positive = num > 0
is_even = remainder == 0

print("Is positive:", is_positive)
print("Is even:", is_even)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Number: 8
Squared: 64
Remainder when divided by 2: 0
Is positive: True
Is even: True`
    },
    
    {
      type: 'code',
      title: 'Combining All Operator Types',
      language: 'python',
      code: `# Example: Using arithmetic, comparison, and logical together
num = 12

# Multiple conditions
is_positive = num > 0
is_even = num % 2 == 0  
is_small = num < 20

# Logical combinations
is_positive_and_even = is_positive and is_even
is_small_or_negative = is_small or num < 0

print("Number:", num)
print("Is positive:", is_positive)
print("Is even:", is_even)
print("Is small (< 20):", is_small)
print("Is positive AND even:", is_positive_and_even)
print("Is small OR negative:", is_small_or_negative)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Number: 12
Is positive: True
Is even: True
Is small (< 20): True
Is positive AND even: True
Is small OR negative: True`
    },
    
    {
      type: 'text',
      title: 'Common Operator Mistakes and Debugging',
      content: `Understanding common mistakes helps you write bug-free code and debug issues more effectively. Let's explore frequent pitfalls and their solutions.`
    },
    
    {
      type: 'code',
      title: 'Common Mistake: Assignment vs Equality',
      language: 'python',
      code: `# Remember: = is assignment, == is comparison
x = 5  # This assigns the value 5 to x

# Check if x equals 5
if x == 5:
    print("x equals 5")
else:
    print("x does not equal 5")

# Assign a new value to x
x = 10  # This changes x to 10
print("x is now:", x)

# Check the new value
result = x == 10
print("x equals 10:", result)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `x equals 5
x is now: 10
x equals 10: True`
    },
    
    {
      type: 'code',
      title: 'Understanding Division Operators',
      language: 'python',
      code: `# Two types of division in Python
a = 17
b = 5

# Regular division (/) - always gives decimal result
regular_div = a / b
print(a, "/", b, "=", regular_div)
print("Type:", type(regular_div))

# Floor division (//) - gives whole number result
floor_div = a // b  
print(a, "//", b, "=", floor_div)
print("Type:", type(floor_div))`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `17 / 5 = 3.4
Type: <class 'float'>
17 // 5 = 3
Type: <class 'int'>`
    },
    
    {
      type: 'code',
      title: 'Using Parentheses for Clarity',
      language: 'python',
      code: `# When combining operators, use parentheses to be clear
x = 5
y = 10  
z = 15

# Without parentheses - harder to understand
result1 = x > 3 and y < 12 or z > 20
print("x > 3 and y < 12 or z > 20 =", result1)

# With parentheses - much clearer
result2 = (x > 3 and y < 12) or z > 20
print("(x > 3 and y < 12) or z > 20 =", result2)

# Different grouping gives same result in this case
result3 = x > 3 and (y < 12 or z > 20)
print("x > 3 and (y < 12 or z > 20) =", result3)`
    },
    
    {
      type: 'output', 
      title: 'Output',
      content: `x > 3 and y < 12 or z > 20 = True
(x > 3 and y < 12) or z > 20 = True
x > 3 and (y < 12 or z > 20) = True`
    },
    
    {
      type: 'text',
      title: 'Best Practices and Tips',
      content: `**🎯 Key Takeaways for Using Operators Effectively:**

1. **Use parentheses** for complex expressions to make intent clear
2. **Understand operator precedence** to avoid unexpected results
3. **Choose the right division operator** (/ for float, // for integer)
4. **Leverage short-circuit evaluation** for efficient logical operations
5. **Use meaningful variable names** when storing operator results
6. **Test edge cases** especially with comparisons and divisions
7. **Remember that == compares values** while 'is' compares object identity

**Performance Tips:**
- Use bitwise operators for powers of 2 calculations
- Leverage short-circuit evaluation to avoid expensive operations
- Use floor division (//) when you only need integer results

**Common Use Cases:**
- **Arithmetic**: Mathematical calculations, unit conversions
- **Comparison**: Conditionals, sorting, filtering
- **Logical**: Complex decision trees, validation logic  
- **Bitwise**: Flags, permissions, low-level optimizations`
    }
  ]
};