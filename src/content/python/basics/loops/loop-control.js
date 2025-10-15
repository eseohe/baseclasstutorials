// Lesson content for Loop control: break, continue, else
export const loopControlContent = {
  id: 'loop-control',
  title: 'Loop control: break, continue, else',
  duration: '20 min',
  overview: `Take control of your loops! Master break, continue, and the surprising else clause to create more sophisticated and efficient loop logic. Learn when and how to use each control statement effectively.`,
  objectives: [
    'Use break to exit loops early when conditions are met',
    'Use continue to skip specific iterations and jump to the next one',
    'Understand the loop else clause and when it executes',
    'Combine loop control statements for complex logic',
    'Apply loop control in practical programming scenarios',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Loop Control',
      content: `Loop control statements give you fine-grained control over how your loops behave. Instead of always running every iteration, you can:

**Break Statement:**
- Immediately exit the loop completely
- Skip all remaining iterations
- Jump to the code after the loop

**Continue Statement:**
- Skip the rest of the current iteration
- Jump directly to the next iteration
- The loop continues running

**Else Clause:**
- Runs after the loop completes normally
- Does NOT run if the loop was exited with break
- Useful for "search and not found" scenarios

These tools make your loops more efficient and your code more readable.`
    },
    {
      type: 'code',
      title: 'Basic Break Statement',
      language: 'python',
      code: `# Using break to exit a loop early
for i in range(10):
    if i == 3:
        break
    print("Number:", i)`
    },
    {
      type: 'output',
      content: `Number: 0
Number: 1
Number: 2`
    },
    {
      type: 'code',
      title: 'Break in While Loop',
      language: 'python',
      code: `# Break in while loop
count = 0
while True:
    print("Count:", count)
    count = count + 1
    if count >= 2:
        break`
    },
    {
      type: 'output',
      content: `Count: 0
Count: 1`
    },
    {
      type: 'code',
      title: 'Basic Continue Statement',
      language: 'python',
      code: `# Using continue to skip iterations
for i in range(5):
    if i == 2:
        continue
    print("Number:", i)`
    },
    {
      type: 'output',
      content: `Number: 0
Number: 1
Number: 3
Number: 4`
    },
    {
      type: 'code',
      title: 'Continue with Condition',
      language: 'python',
      code: `# Skip even numbers
for i in range(8):
    if i % 2 == 0:
        continue
    print("Odd number:", i)`
    },
    {
      type: 'output',
      content: `Odd number: 1
Odd number: 3
Odd number: 5
Odd number: 7`
    },
    {
      type: 'text',
      title: 'The Loop Else Clause',
      content: `Python has a unique feature: loops can have an else clause! The else block runs when:

- The loop completes all iterations normally (for loops)
- The while loop condition becomes False naturally

The else block does NOT run when:
- The loop is exited with a break statement
- An exception occurs in the loop

This is particularly useful for search operations where you want to know if something was found or not.`
    },
    {
      type: 'code',
      title: 'For Loop with Else',
      language: 'python',
      code: `# Loop completes normally - else runs
for i in range(3):
    print("Number:", i)
else:
    print("Loop completed successfully")`
    },
    {
      type: 'output',
      content: `Number: 0
Number: 1
Number: 2
Loop completed successfully`
    },
    {
      type: 'code',
      title: 'For Loop with Break - Else Skipped',
      language: 'python',
      code: `# Loop exits with break - else does NOT run
for i in range(5):
    if i == 2:
        break
    print("Number:", i)
else:
    print("This will not print")`
    },
    {
      type: 'output',
      content: `Number: 0
Number: 1`
    },
    {
      type: 'code',
      title: 'While Loop with Else',
      language: 'python',
      code: `# While loop with natural completion
count = 0
while count < 2:
    print("Count:", count)
    count = count + 1
else:
    print("While loop finished normally")`
    },
    {
      type: 'output',
      content: `Count: 0
Count: 1
While loop finished normally`
    },
    {
      type: 'code',
      title: 'Practical Example - Finding in List',
      language: 'python',
      code: `# Search for an item in a list
numbers = [1, 3, 5, 7]
target = 6
for num in numbers:
    if num == target:
        print("Found", target)
        break
else:
    print("Target", target, "not found")`
    },
    {
      type: 'output',
      content: `Target 6 not found`
    },
    {
      type: 'code',
      title: 'Finding an Item Successfully',
      language: 'python',
      code: `# Search for an item that exists
fruits = ["apple", "banana", "orange"]
search = "banana"
for fruit in fruits:
    if fruit == search:
        print("Found", search)
        break
else:
    print("Fruit not found")`
    },
    {
      type: 'output',
      content: `Found banana`
    },
    {
      type: 'code',
      title: 'Processing Only Valid Data',
      language: 'python',
      code: `# Skip invalid data with continue
numbers = [1, -2, 3, -4, 5]
for num in numbers:
    if num < 0:
        continue
    print("Positive number:", num)`
    },
    {
      type: 'output',
      content: `Positive number: 1
Positive number: 3
Positive number: 5`
    },
    {
      type: 'code',
      title: 'Input Validation with Break',
      language: 'python',
      code: `# Simulate input validation (hardcoded for demo)
attempts = ["abc", "12", "xyz"]
for attempt in attempts:
    print("Trying:", attempt)
    if attempt.isdigit():
        print("Valid number found:", attempt)
        break
else:
    print("No valid number found")`
    },
    {
      type: 'output',
      content: `Trying: abc
Trying: 12
Valid number found: 12`
    },
    {
      type: 'code',
      title: 'Combining Break and Continue',
      language: 'python',
      code: `# Process numbers, skip negatives, stop at zero
numbers = [5, -2, 3, 0, 8]
for num in numbers:
    if num < 0:
        continue
    if num == 0:
        break
    print("Processing:", num)`
    },
    {
      type: 'output',
      content: `Processing: 5
Processing: 3`
    },
    {
      type: 'text',
      title: 'Best Practices for Loop Control',
      content: `**When to use Break:**
- Early exit when you've found what you're looking for
- Stopping infinite loops when a condition is met
- Exiting nested loops (though consider functions for complex cases)

**When to use Continue:**
- Skipping invalid or unwanted data
- Filtering items during iteration
- Avoiding deeply nested if statements

**When to use Else:**
- Search operations ("found" vs "not found")
- Validation loops that need completion confirmation
- Any scenario where you need to know if the loop finished naturally

**Avoid:**
- Overusing break/continue (sometimes restructuring is clearer)
- Complex logic that makes the loop hard to understand
- Multiple break statements in the same loop (consider functions)`
    }
  ]
};