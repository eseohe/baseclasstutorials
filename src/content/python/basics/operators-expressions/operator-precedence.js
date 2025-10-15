// Lesson content for Operator precedence and associativity
export const operatorPrecedenceContent = {
  id: 'operator-precedence',
  title: 'Operator Precedence and Associativity',
  duration: '20 min',
  overview: `Master the rules that govern how Python evaluates complex expressions! Learn operator precedence to understand which operations happen first, explore associativity for operations of equal precedence, and discover how to write clear, predictable code that behaves exactly as intended.`,
  objectives: [
    'Understand Python\'s operator precedence hierarchy from highest to lowest',
    'Apply associativity rules for operators of equal precedence (left-to-right vs right-to-left)',
    'Write complex expressions that evaluate correctly without relying on memorization',
    'Use parentheses strategically to override precedence and improve code clarity',
    'Debug expression evaluation errors caused by precedence misunderstandings',
    'Follow best practices for writing maintainable and readable complex expressions'
  ],
  sections: [
    {
      type: 'text',
      title: 'Understanding Operator Precedence',
      content: `When Python encounters an expression with multiple operators, it doesn't evaluate them from left to right. Instead, it follows **operator precedence rules** - a hierarchy that determines which operations happen first.

**Think of it like mathematical order of operations (PEMDAS/BODMAS):**
- Parentheses first
- Exponents (powers)
- Multiplication and Division  
- Addition and Subtraction

Python extends this concept to include all its operators, from arithmetic to logical to bitwise. Understanding precedence is crucial for writing correct code and avoiding subtle bugs.

**Why Precedence Matters:**
Without precedence rules, the expression \`2 + 3 * 4\` could mean either \`(2 + 3) * 4 = 20\` or \`2 + (3 * 4) = 14\`. Precedence rules ensure consistent, predictable behavior.`
    },
    
    {
      type: 'text',
      title: 'Python Operator Precedence Table',
      content: `Here's Python's operator precedence from **highest** to **lowest** priority:

**1. Parentheses** \`( )\`
**2. Exponentiation** \`**\`
**3. Unary plus, minus, bitwise NOT** \`+x -x ~x\`
**4. Multiplication, Division, Floor Division, Modulo** \`* / // %\`
**5. Addition, Subtraction** \`+ -\`
**6. Bitwise Shifts** \`<< >>\`
**7. Bitwise AND** \`&\`
**8. Bitwise XOR** \`^\`
**9. Bitwise OR** \`|\`
**10. Comparisons** \`== != < > <= >=\`
**11. Boolean NOT** \`not\`
**12. Boolean AND** \`and\`
**13. Boolean OR** \`or\`

Higher numbers in the table have **lower** precedence (evaluated later).`
    },
    
    {
      type: 'code',
      title: 'Addition and Multiplication Precedence',
      language: 'python',
      code: `# Python follows math rules: multiplication before addition
result1 = 2 + 3 * 4
print("2 + 3 * 4 =", result1)
print("Multiplication happens first: 2 + 12 = 14")

# Use parentheses to change the order
result2 = (2 + 3) * 4
print("(2 + 3) * 4 =", result2)
print("Parentheses first: 5 * 4 = 20")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `2 + 3 * 4 = 14
Multiplication happens first: 2 + 12 = 14
(2 + 3) * 4 = 20
Parentheses first: 5 * 4 = 20`
    },
    
    {
      type: 'code',
      title: 'Exponentiation Has Highest Precedence',
      language: 'python',
      code: `# Exponentiation (**) happens before multiplication
result1 = 2 * 3 ** 2
print("2 * 3 ** 2 =", result1)
print("Power first: 2 * 9 = 18")

# Use parentheses to multiply first
result2 = (2 * 3) ** 2
print("(2 * 3) ** 2 =", result2)
print("Parentheses first: 6 ** 2 = 36")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `2 * 3 ** 2 = 18
Power first: 2 * 9 = 18
(2 * 3) ** 2 = 36
Parentheses first: 6 ** 2 = 36`
    },
    
    {
      type: 'code',
      title: 'Same Precedence: Left to Right',
      language: 'python',
      code: `# When operators have same precedence, go left to right
result1 = 12 / 3 * 2
print("12 / 3 * 2 =", result1)
print("Left to right: (12 / 3) * 2 = 4.0 * 2 = 8.0")

# Parentheses can change this
result2 = 12 / (3 * 2)
print("12 / (3 * 2) =", result2)
print("Parentheses first: 12 / 6 = 2.0")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `12 / 3 * 2 = 8.0
Left to right: (12 / 3) * 2 = 4.0 * 2 = 8.0
12 / (3 * 2) = 2.0
Parentheses first: 12 / 6 = 2.0`
    },
    
    {
      type: 'text',
      title: 'Associativity Rules',
      content: `When operators have the **same precedence**, Python uses **associativity** rules to determine evaluation order:

**Left-to-Right Associativity (Most operators):**
- Arithmetic: \`+ - * / // %\`
- Comparisons: \`< > <= >= == !=\`
- Bitwise: \`& | ^\`

**Right-to-Left Associativity (Special cases):**
- Exponentiation: \`**\`

**Non-Associative:**
- Comparison chains: \`a < b < c\` has special handling`
    },
    
    {
      type: 'code',
      title: 'Left-to-Right: Subtraction',
      language: 'python',
      code: `# Most operators work left-to-right
# Subtraction example
result1 = 10 - 5 - 2
print("10 - 5 - 2 =", result1)
print("This works like: (10 - 5) - 2 = 5 - 2 = 3")

# Compare with parentheses on the right
result2 = 10 - (5 - 2)
print("10 - (5 - 2) =", result2)
print("This works like: 10 - 3 = 7")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `10 - 5 - 2 = 3
This works like: (10 - 5) - 2 = 5 - 2 = 3
10 - (5 - 2) = 7
This works like: 10 - 3 = 7`
    },
    
    {
      type: 'code',
      title: 'Left-to-Right: Division',
      language: 'python',
      code: `# Division also works left-to-right
result1 = 24 / 4 / 2
print("24 / 4 / 2 =", result1)
print("This works like: (24 / 4) / 2 = 6.0 / 2 = 3.0")

# Compare with parentheses on the right
result2 = 24 / (4 / 2)
print("24 / (4 / 2) =", result2)
print("This works like: 24 / 2.0 = 12.0")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `24 / 4 / 2 = 3.0
This works like: (24 / 4) / 2 = 6.0 / 2 = 3.0
24 / (4 / 2) = 12.0
This works like: 24 / 2.0 = 12.0`
    },
    
    {
      type: 'code',
      title: 'Right-to-Left: Exponentiation',
      language: 'python',
      code: `# Exponentiation (**) is special - it works RIGHT-TO-LEFT
# This follows math rules

result1 = 2 ** 3 ** 2
print("2 ** 3 ** 2 =", result1)
print("This works like: 2 ** (3 ** 2) = 2 ** 9 = 512")

# Compare with left-to-right grouping
result2 = (2 ** 3) ** 2
print("(2 ** 3) ** 2 =", result2)
print("This works like: 8 ** 2 = 64")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `2 ** 3 ** 2 = 512
This works like: 2 ** (3 ** 2) = 2 ** 9 = 512
(2 ** 3) ** 2 = 64
This works like: 8 ** 2 = 64`
    },
    
    {
      type: 'code',
      title: 'Another Exponentiation Example',
      language: 'python',
      code: `# Another example showing right-to-left
result1 = 3 ** 2 ** 3
print("3 ** 2 ** 3 =", result1)

# Let's break this down step by step
step1 = 2 ** 3  # The rightmost exponentiation first
print("Step 1: 2 ** 3 =", step1)

step2 = 3 ** step1  # Then the left exponentiation
print("Step 2: 3 **", step1, "=", step2)

print("So 3 ** 2 ** 3 = 3 ** (2 ** 3) =", result1)

# Compare with left-to-right
result2 = (3 ** 2) ** 3
print("(3 ** 2) ** 3 =", result2)
print("The difference is huge!")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `3 ** 2 ** 3 = 6561
Step 1: 2 ** 3 = 8
Step 2: 3 ** 8 = 6561
So 3 ** 2 ** 3 = 3 ** (2 ** 3) = 6561
(3 ** 2) ** 3 = 729
The difference is huge!`
    },
    
    {
      type: 'text',
      title: 'Comparison and Logical Operator Precedence',
      content: `Understanding precedence with comparison and logical operators is crucial for writing correct conditional logic.

**Key Points:**
- **Comparisons** have higher precedence than **logical operators**
- **\`not\`** has higher precedence than **\`and\`** and **\`or\`**
- **\`and\`** has higher precedence than **\`or\`**`
    },
    
    {
      type: 'code',
      title: 'Comparison Happens Before Logical Operators',
      language: 'python',
      code: `# Comparisons happen before logical operators
x = 5
y = 10
z = 15

# Without parentheses - comparisons first
result1 = x < y and y < z
print("x < y and y < z =", result1)
print("This works like: (x < y) and (y < z)")

# Let's verify each part
part1 = x < y
part2 = y < z
print("x < y =", part1)
print("y < z =", part2)
print("Final:", part1, "and", part2, "=", part1 and part2)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `x < y and y < z = True
This works like: (x < y) and (y < z)
x < y = True
y < z = True
Final: True and True = True`
    },
    
    {
      type: 'code',
      title: 'NOT Has Higher Precedence than AND',
      language: 'python',
      code: `# 'not' has higher precedence than 'and'
x = 5
y = 10
z = 15

result1 = not x > y and z > y
print("not x > y and z > y =", result1)

# Let's break this down
step1 = x > y  # 5 > 10 = False
print("Step 1: x > y =", step1)

step2 = not step1  # not False = True
print("Step 2: not", step1, "=", step2)

step3 = z > y  # 15 > 10 = True
print("Step 3: z > y =", step3)

final = step2 and step3  # True and True = True
print("Final:", step2, "and", step3, "=", final)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `not x > y and z > y = True
Step 1: x > y = False
Step 2: not False = True
Step 3: z > y = True
Final: True and True = True`
    },
    
    {
      type: 'code',
      title: 'AND Has Higher Precedence than OR',
      language: 'python',
      code: `# 'and' has higher precedence than 'or'
result1 = True or False and False
print("True or False and False =", result1)

# This is evaluated as: True or (False and False)
step1 = False and False
print("Step 1: False and False =", step1)

step2 = True or step1
print("Step 2: True or", step1, "=", step2)

# Compare with explicit grouping
result2 = (True or False) and False
print("(True or False) and False =", result2)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `True or False and False = True
Step 1: False and False = False
Step 2: True or False = True
(True or False) and False = False`
    },
    
    {
      type: 'text',
      title: 'Complex Expression Examples',
      content: `Let's examine realistic examples that combine multiple operator types and precedence levels. We'll break down complex expressions step by step to understand how they work.`
    },
    
    {
      type: 'code',
      title: 'Breaking Down a Complex Expression',
      language: 'python',
      code: `# Complex expression with multiple operators
base_score = 85
bonus_points = 5
max_score = 100

# This expression has multiple precedence levels
result = base_score + bonus_points * 2 <= max_score and base_score >= 60
print("Final result:", result)

# Let's break it down step by step:
step1 = bonus_points * 2
print("Step 1 - bonus_points * 2 =", step1)

step2 = base_score + step1
print("Step 2 - base_score + step1 =", step2)

step3 = step2 <= max_score
print("Step 3 - step2 <= max_score =", step3)

step4 = base_score >= 60
print("Step 4 - base_score >= 60 =", step4)

step5 = step3 and step4
print("Step 5 - step3 and step4 =", step5)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Final result: True
Step 1 - bonus_points * 2 = 10
Step 2 - base_score + step1 = 95
Step 3 - step2 <= max_score = True
Step 4 - base_score >= 60 = True
Step 5 - step3 and step4 = True`
    },
    
    {
      type: 'code',
      title: 'Temperature Range Check',
      language: 'python',
      code: `# Check if temperature is in a comfortable range
temperature = 22
min_temp = 18
max_temp = 25

# Complex expression: check if temp is in range AND not too close to limits
is_comfortable = temperature >= min_temp and temperature <= max_temp and temperature != min_temp
print("Is temperature comfortable?", is_comfortable)

# Breaking it down:
check1 = temperature >= min_temp
print("Temperature >= min_temp:", check1)

check2 = temperature <= max_temp  
print("Temperature <= max_temp:", check2)

check3 = temperature != min_temp
print("Temperature != min_temp:", check3)

# All checks combined with AND
final_check = check1 and check2 and check3
print("All checks combined:", final_check)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Is temperature comfortable? True
Temperature >= min_temp: True
Temperature <= max_temp: True
Temperature != min_temp: True
All checks combined: True`
    },
    
    {
      type: 'code',
      title: 'Arithmetic with Mixed Operations',
      language: 'python',
      code: `# Calculate total cost with tax and discount
price = 100
tax_rate = 0.1
discount = 15
shipping = 5

# Complex calculation: (price - discount) * (1 + tax_rate) + shipping
total_cost = (price - discount) * (1 + tax_rate) + shipping
print("Total cost:", total_cost)

# Step-by-step breakdown:
step1 = price - discount
print("After discount:", step1)

step2 = 1 + tax_rate  
print("Tax multiplier:", step2)

step3 = step1 * step2
print("After tax:", step3)

step4 = step3 + shipping
print("Final total:", step4)

# Without parentheses - let's see what happens
without_parentheses = price - discount * 1 + tax_rate + shipping
print("Without proper parentheses:", without_parentheses)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Total cost: 98.5
After discount: 85
Tax multiplier: 1.1
After tax: 93.5
Final total: 98.5
Without proper parentheses: 90.1`
    },
    
    {
      type: 'text',
      title: 'Common Precedence Mistakes',
      content: `Even experienced programmers make precedence mistakes. Here are the most common errors and how to avoid them.`
    },
    
    {
      type: 'code',
      title: 'Mistake: Mixing Arithmetic and Comparisons',
      language: 'python',
      code: `# Common mistake: not understanding arithmetic vs comparison precedence
x = 5
y = 10

# This might not do what you expect at first glance
result1 = x + y > 12
print("x + y > 12 =", result1)

# Breaking it down:
sum_result = x + y  # Addition first
print("x + y =", sum_result)

comparison_result = sum_result > 12  # Then comparison
print("15 > 12 =", comparison_result)

# This is the same as:
result2 = (x + y) > 12
print("(x + y) > 12 =", result2)

# What if we accidentally thought comparison came first?
# x + (y > 12) would be different!
wrong_logic = x + (y > 12)
print("x + (y > 12) =", wrong_logic, "(This adds x + True = x + 1)")`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `x + y > 12 = True
x + y = 15
15 > 12 = True
(x + y) > 12 = True
x + (y > 12) = 6 (This adds x + True = x + 1)`
    },
    
    {
      type: 'code',
      title: 'Mistake: Logical Operator Confusion',
      language: 'python',
      code: `# Common mistake with logical operators
age = 16
has_license = False
has_permit = True

# Wrong: This doesn't work as intended
# We want: age >= 16 AND (has_license OR has_permit)
wrong_result = age >= 16 and has_license or has_permit
print("Wrong logic result:", wrong_result)

# What actually happens:
step1 = age >= 16  # True
print("Step 1: age >= 16 =", step1)

step2 = step1 and has_license  # True and False = False
print("Step 2: step1 and has_license =", step2)

step3 = step2 or has_permit  # False or True = True
print("Step 3: step2 or has_permit =", step3)

# Correct way: use parentheses
correct_result = age >= 16 and (has_license or has_permit)
print("Correct logic result:", correct_result)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Wrong logic result: True
Step 1: age >= 16 = True
Step 2: step1 and has_license = False
Step 3: step2 or has_permit = True
Correct logic result: True`
    },
    
    {
      type: 'text',
      title: 'Best Practices for Clear Code',
      content: `Follow these guidelines to write expressions that are both correct and easy to understand:`
    },
    
    {
      type: 'code',
      title: 'Best Practice 1: Use Parentheses for Clarity',
      language: 'python',
      code: `# Even when not required, parentheses improve readability

# Without parentheses (correct but harder to read)
result1 = 2 + 3 * 4 - 1
print("Without parentheses:", result1)

# With parentheses (same result, clearer intent)
result2 = 2 + (3 * 4) - 1
print("With parentheses:", result2)

# Complex logical expression
x = 10
y = 5
z = 15

# Hard to read
result3 = x > y and y < z or x == 10
print("Hard to read:", result3)

# Clearer with parentheses  
result4 = (x > y and y < z) or (x == 10)
print("Clearer:", result4)

# Even clearer: break into parts
condition1 = x > y and y < z
condition2 = x == 10
result5 = condition1 or condition2
print("Step by step:", result5)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `Without parentheses: 13
With parentheses: 13
Hard to read: True
Clearer: True
Step by step: True`
    },
    
    {
      type: 'code',
      title: 'Best Practice 2: Break Complex Expressions',
      language: 'python',
      code: `# Instead of one complex line, use multiple simple lines

# Complex one-liner (hard to debug)
price = 29.99
tax_rate = 0.08  
discount = 5
shipping = 7.50

total = price - discount + (price - discount) * tax_rate + shipping
print("One-liner total:", total)

# Broken into clear steps (easier to understand and debug)
discounted_price = price - discount
print("After discount:", discounted_price)

tax_amount = discounted_price * tax_rate
print("Tax amount:", tax_amount)

subtotal = discounted_price + tax_amount
print("Subtotal with tax:", subtotal)

final_total = subtotal + shipping
print("Final total:", final_total)

# Verify both methods give same result
print("Results match:", abs(total - final_total) < 0.01)`
    },
    
    {
      type: 'output',
      title: 'Output',
      content: `One-liner total: 34.4892
After discount: 24.99
Tax amount: 1.9992000000000001
Subtotal with tax: 26.989200000000002
Final total: 34.489200000000004
Results match: True`
    },
    
    {
      type: 'text',
      title: 'Summary and Key Takeaways',
      content: `**🎯 Essential Points About Operator Precedence:**

**1. Precedence Hierarchy (High to Low):**
- Parentheses \`( )\`
- Exponentiation \`**\`
- Multiplication, Division \`* / // %\`
- Addition, Subtraction \`+ -\`
- Comparisons \`== != < > <= >=\`
- Logical NOT \`not\`
- Logical AND \`and\`
- Logical OR \`or\`

**2. Associativity Rules:**
- Most operators: **Left-to-Right**
- Exponentiation: **Right-to-Left**

**3. Best Practices:**
- Use parentheses when in doubt
- Break complex expressions into steps
- Test your understanding with simple examples
- Remember: readable code is more important than clever one-liners

**4. Common Mistakes to Avoid:**
- Mixing arithmetic and logical operators without parentheses
- Forgetting that comparisons happen before logical operators
- Assuming all operators work left-to-right (exponentiation doesn't!)
- Writing overly complex expressions that are hard to debug

**🔍 When in doubt, use parentheses and break expressions into smaller, testable parts!**`
    }
  ]
};