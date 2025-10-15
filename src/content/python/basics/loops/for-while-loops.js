// Lesson content for for loops and while loops
export const forWhileLoopsContent = {
  id: 'for-while-loops',
  title: 'for loops and while loops',
  duration: '25 min',
  overview: `Master Python's two main loop types! Learn when to use for loops vs while loops, understand their syntax and behavior, and practice with hands-on examples that build your confidence with iteration.`,
  objectives: [
    'Understand the difference between for loops and while loops',
    'Write for loops to iterate over sequences and ranges',
    'Create while loops with proper conditions and avoid infinite loops',
    'Choose the right loop type for different programming scenarios',
    'Use loops to solve practical problems and automate repetitive tasks',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Loops',
      content: `Loops are fundamental programming constructs that allow you to repeat code multiple times. Python provides two main types of loops:

**For Loops:**
- Best for iterating over sequences (lists, strings, ranges)
- You know in advance how many times to loop
- More concise for common iteration patterns

**While Loops:**
- Best when you don't know how many iterations you need
- Continue looping while a condition is True
- More flexible but requires careful condition management

**When to use each:**
- Use **for loops** when iterating over collections or known ranges
- Use **while loops** for condition-based repetition or user input validation`
    },
    {
      type: 'code',
      title: 'Simple For Loop with Range',
      language: 'python',
      code: `# Basic for loop with range
for i in range(3):
    print("Iteration number:", i)`
    },
    {
      type: 'output',
      content: `Iteration number: 0
Iteration number: 1
Iteration number: 2`
    },
    {
      type: 'code',
      title: 'For Loop with Custom Range',
      language: 'python',
      code: `# For loop with start and end values
for num in range(1, 4):
    print("Number:", num)`
    },
    {
      type: 'output',
      content: `Number: 1
Number: 2
Number: 3`
    },
    {
      type: 'code',
      title: 'For Loop with Step',
      language: 'python',
      code: `# For loop with step (increment by 2)
for i in range(0, 10, 2):
    print("Even number:", i)`
    },
    {
      type: 'output',
      content: `Even number: 0
Even number: 2
Even number: 4
Even number: 6
Even number: 8`
    },
    {
      type: 'code',
      title: 'For Loop with Lists',
      language: 'python',
      code: `# Iterating over a list
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print("I like", fruit)`
    },
    {
      type: 'output',
      content: `I like apple
I like banana
I like orange`
    },
    {
      type: 'code',
      title: 'For Loop with Strings',
      language: 'python',
      code: `# Iterating over characters in a string
word = "Python"
for letter in word:
    print("Letter:", letter)`
    },
    {
      type: 'output',
      content: `Letter: P
Letter: y
Letter: t
Letter: h
Letter: o
Letter: n`
    },
    {
      type: 'text',
      title: 'While Loops',
      content: `While loops continue executing as long as their condition remains True. They're perfect for situations where you don't know exactly how many iterations you need.

**Key points for while loops:**
- Always ensure the condition can eventually become False
- Update variables inside the loop to avoid infinite loops
- Check the condition before each iteration
- Great for user input validation and game loops`
    },
    {
      type: 'code',
      title: 'Basic While Loop',
      language: 'python',
      code: `# Simple counting with while loop
count = 0
while count < 3:
    print("Count is:", count)
    count = count + 1`
    },
    {
      type: 'output',
      content: `Count is: 0
Count is: 1
Count is: 2`
    },
    {
      type: 'code',
      title: 'While Loop with Condition',
      language: 'python',
      code: `# While loop with a changing condition
number = 10
while number > 5:
    print("Number:", number)
    number = number - 2`
    },
    {
      type: 'output',
      content: `Number: 10
Number: 8
Number: 6`
    },
    {
      type: 'code',
      title: 'While Loop for List Processing',
      language: 'python',
      code: `# Using while loop with lists
numbers = [1, 2, 3, 4, 5]
index = 0
while index < len(numbers):
    print("Number at index", index, "is", numbers[index])
    index = index + 1`
    },
    {
      type: 'output',
      content: `Number at index 0 is 1
Number at index 1 is 2`
    },
    {
      type: 'code',
      title: 'While Loop with Boolean Flag',
      language: 'python',
      code: `# Using a boolean flag to control the loop
keep_going = True
counter = 1
while keep_going:
    print("Round", counter)
    if counter >= 2:
        keep_going = False
    counter = counter + 1`
    },
    {
      type: 'output',
      content: `Round 1
Round 2`
    },
    {
      type: 'text',
      title: 'Choosing Between For and While Loops',
      content: `**Use FOR loops when:**
- Iterating over a known collection (list, string, range)
- You know the number of iterations in advance
- Working with sequences or ranges

**Use WHILE loops when:**
- You don't know how many iterations you need
- Waiting for a condition to change
- Processing user input until they choose to stop
- Implementing game loops or real-time systems

**Example scenarios:**
- **For loop**: "Print each item in this shopping list"
- **While loop**: "Keep asking for user input until they type 'quit'"`
    },
    {
      type: 'code',
      title: 'Practical Example - For Loop',
      language: 'python',
      code: `# Calculate sum of numbers 1 to 5
total = 0
for i in range(1, 6):
    total = total + i
print("Sum of 1 to 5:", total)`
    },
    {
      type: 'output',
      content: `Sum of 1 to 5: 15`
    },
    {
      type: 'code',
      title: 'Practical Example - While Loop',
      language: 'python',
      code: `# Find first number divisible by 7
number = 15
while number % 7 != 0:
    number = number + 1
print("First number >= 15 divisible by 7:", number)`
    },
    {
      type: 'output',
      content: `First number >= 15 divisible by 7: 21`
    },
    {
      type: 'text',
      title: 'Common Mistakes to Avoid',
      content: `**Infinite Loops:** Make sure your while loop condition can eventually become False.

**Off-by-One Errors:** Remember that range(5) goes from 0 to 4, not 1 to 5.

**Forgetting to Update Variables:** In while loops, always update the variables that affect your condition.

**Using Wrong Loop Type:** Choose for loops for known iterations, while loops for condition-based repetition.

**Index Out of Range:** When using while loops with lists, make sure your index doesn't exceed the list length.`
    }
  ]
};