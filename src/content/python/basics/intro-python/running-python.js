// Lesson content for Running Python scripts and using the interactive shell
const runningPythonContent = {
  id: 'running-python',
  title: 'Running Python Scripts and Using the Interactive Shell',
  duration: '18 min',
  overview: `Now that Python is installed, let's learn how to actually use it! You'll discover two ways to run Python code: interactive mode for quick experiments, and script mode for saving your programs. Both are essential skills for every Python programmer.`,
  objectives: [
    'Master the Python interactive shell (REPL) for quick experiments',
    'Create and run your first Python script file',
    'Navigate files and folders using the command line',
    'Know when to use interactive mode vs script files',
    'Practice with hands-on exercises'
  ],
  sections: [
    {
      type: 'text',
      title: 'Two Ways to Run Python',
      content: `
        Python gives you two main ways to write and run code:

        **1. Interactive Mode (REPL)**: Perfect for quick tests, learning, and experimenting
        **2. Script Files**: For saving longer programs and running them multiple times

        Think of interactive mode like having a conversation with Python, while scripts are like writing a letter that you can read many times.
      `
    },
    {
      type: 'text',
      title: 'Part 1: Interactive Mode (REPL)',
      content: `
        REPL stands for "Read-Eval-Print Loop" - Python reads your code, evaluates it, prints the result, and loops back for more. Let's try it!
      `
    },
    {
      type: 'instruction',
      title: 'Start Python interactive mode',
      content: `python`
    },
    {
      type: 'text',
      title: '',
      content: `
        You should see the Python prompt that looks like \`>>>\`. This means Python is listening and ready for your commands!
      `
    },
    {
      type: 'code',
      title: 'Your First Interactive Commands',
      language: 'python',
      code: `>>> print("Welcome to Python!")
Welcome to Python!`
    },
    {
      type: 'code',
      title: 'Try Some Math',
      language: 'python',
      code: `>>> 5 + 3
8`
    },
    {
      type: 'code',
      title: 'Create Variables',
      language: 'python',
      code: `>>> name = "Python Learner"
>>> print("Hello,", name)
Hello, Python Learner`
    },
    {
      type: 'text',
      title: 'Interactive Mode Practice',
      content: `
        Try these exercises in your Python shell. Type each line and see what happens:
      `
    },
    {
      type: 'code',
      title: 'Exercise 1: Calculator',
      language: 'python',
      code: `>>> 10 * 5
50
>>> 100 / 4
25.0
>>> 2 ** 3
8`
    },
    {
      type: 'code',
      title: 'Exercise 2: Text Fun',
      language: 'python',
      code: `>>> "Hello" + " " + "World"
'Hello World'
>>> "Python" * 3
'PythonPythonPython'`
    },
    {
      type: 'instruction',
      title: 'Exit Python interactive mode',
      content: `exit()`
    },
    {
      type: 'text',
      title: '',
      content: `
        Great job! You can also exit by typing \`quit()\` or pressing \`Ctrl+D\` (Linux/Mac) or \`Ctrl+Z\` then Enter (Windows).
      `
    },
    {
      type: 'text',
      title: 'Part 2: Creating and Running Python Scripts',
      content: `
        Interactive mode is great for quick tests, but for longer programs, we create script files. These are regular text files with a \`.py\` extension that contain Python code.
      `
    },
    {
      type: 'text',
      title: 'Create Your First Python Script',
      content: `
        Let's create a simple Python script. You can use any text editor (Notepad on Windows, TextEdit on Mac, nano on Linux, or a code editor like VS Code).
      `
    },
    {
      type: 'instruction',
      title: 'Create a file called hello.py',
      content: `Create a new file and save it as "hello.py"`
    },
    {
      type: 'text',
      title: '',
      content: `
        Add this content to your hello.py file:
      `
    },
    {
      type: 'code',
      title: 'Contents of hello.py',
      language: 'python',
      code: `# My first Python script!
print("Hello, World!")
print("Python is awesome!")

# Let's do some math
result = 15 + 25
print("15 + 25 =", result)`
    },
    {
      type: 'text',
      title: 'Run Your Script',
      content: `
        Now let's run your script! Open your command line and navigate to the folder where you saved hello.py.
      `
    },
    {
      type: 'instruction',
      title: 'Navigate to your file location',
      content: `cd path/to/your/file`
    },
    {
      type: 'instruction',
      title: 'Run your Python script',
      content: `python hello.py`
    },
    {
      type: 'output',
      title: 'Expected Output',
      content: `Hello, World!
Python is awesome!
15 + 25 = 40`
    },
    {
      type: 'text',
      title: 'Understanding File Navigation',
      content: `
        Don't worry if navigating folders in the command line feels unfamiliar. Here are some helpful commands:
      `
    },
    {
      type: 'instruction',
      title: 'See where you are now',
      content: `pwd`
    },
    {
      type: 'instruction',
      title: 'List files in current folder',
      content: `ls` 
    },
    {
      type: 'instruction',
      title: 'On Windows, use this to list files',
      content: `dir`
    },
    {
      type: 'instruction',
      title: 'Go to your Documents folder',
      content: `cd Documents`
    },
    {
      type: 'instruction',
      title: 'Go back one folder',
      content: `cd ..`
    },
    {
      type: 'text',
      title: 'Practice Exercise: Personal Greeting',
      content: `
        Let's create a more interesting script! Create a new file called \`greeting.py\`:
      `
    },
    {
      type: 'code',
      title: 'Contents of greeting.py',
      language: 'python',
      code: `# Personal greeting script
name = "Your Name Here"
age = 25
favorite_color = "blue"

print("=== Personal Information ===")
print("Name:", name)
print("Age:", age)
print("Favorite Color:", favorite_color)
print("=== Fun Facts ===")
print("In 10 years, you'll be", age + 10, "years old!")
print("Your name has", len(name), "characters.")`
    },
    {
      type: 'instruction',
      title: 'Run your greeting script',
      content: `python greeting.py`
    },
    {
      type: 'output',
      title: 'Sample Output',
      content: `=== Personal Information ===
Name: Your Name Here
Age: 25
Favorite Color: blue
=== Fun Facts ===
In 10 years, you'll be 35 years old!
Your name has 14 characters.`
    },
    {
      type: 'text',
      title: 'Interactive Mode vs Script Files: When to Use Each',
      content: `
        **Use Interactive Mode When:**
        • Testing small pieces of code
        • Learning new Python features
        • Doing quick calculations
        • Experimenting with ideas

        **Use Script Files When:**
        • Writing programs longer than a few lines
        • Saving your work for later
        • Sharing code with others
        • Building real applications
      `
    },
    {
      type: 'text',
      title: 'Advanced Tips for Interactive Mode',
      content: `
        Here are some pro tips for using Python's interactive shell:
      `
    },
    {
      type: 'code',
      title: 'Useful Interactive Commands',
      language: 'python',
      code: `>>> help()  # Opens Python's built-in help system
>>> help(print)  # Get help about a specific function
>>> dir()  # List all available names/variables
>>> import this  # The Zen of Python!`
    },
    {
      type: 'highlight',
      title: 'Pro Tips',
      items: [
        '**Arrow Keys**: Use ↑ and ↓ to repeat previous commands',
        '**Tab Completion**: Press Tab to auto-complete names and functions',
        '**Underscore**: In interactive mode, \`_\` contains the result of the last expression',
        '**Multi-line Code**: Use triple quotes for multi-line strings',
        '**Clear Screen**: Type \`import os; os.system("cls")\` (Windows) or \`os.system("clear")\` (Mac/Linux)'
      ]
    },
    {
      type: 'text',
      title: 'Common Issues and Solutions',
      content: `
        **Problem**: "python is not recognized"
        **Solution**: Make sure Python is in your PATH (see previous lesson)

        **Problem**: "No such file or directory"
        **Solution**: Navigate to the correct folder using \`cd\` command

        **Problem**: Script runs but closes immediately
        **Solution**: You're probably double-clicking the .py file. Always run from command line.

        **Problem**: SyntaxError when running script
        **Solution**: Check your code for typos, missing quotes, or incorrect indentation
      `
    },
    {
      type: 'text',
      title: 'Challenge Exercise',
      content: `
        Ready for a challenge? Create a script called \`calculator.py\` that does some fun calculations:
      `
    },
    {
      type: 'code',
      title: 'Challenge: calculator.py',
      language: 'python',
      code: `# Simple calculator script
print("=== Python Calculator ===")

# Basic arithmetic
a = 12
b = 4

print(a, "+", b, "=", a + b)
print(a, "-", b, "=", a - b)
print(a, "*", b, "=", a * b)
print(a, "/", b, "=", a / b)

# Fun with powers
print(a, "squared =", a ** 2)
print("Square root of", a, "=", a ** 0.5)

print("=== End Calculator ===")`
    },
    {
      type: 'output',
      title: 'Expected Output',
      content: `=== Python Calculator ===
12 + 4 = 16
12 - 4 = 8
12 * 4 = 48
12 / 4 = 3.0
12 squared = 144
Square root of 12 = 3.4641016151377544
=== End Calculator ===`
    },
    {
      type: 'text',
      title: 'Congratulations! 🎉',
      content: `
        You've mastered the basics of running Python code! You now know how to:
        • Use interactive mode for quick experiments
        • Create and run Python script files
        • Navigate folders in the command line
        • Choose the right tool for the job

        In our next lesson, we'll dive into Python's syntax rules and learn about indentation - one of Python's most distinctive features.
      `
    }
  ],
  resources: [
    {
      title: 'Python REPL Documentation',
      url: 'https://docs.python.org/3/tutorial/interpreter.html'
    },
    {
      title: 'Running Python Scripts',
      url: 'https://docs.python.org/3/tutorial/appendix.html#executing-python-scripts'
    },
    {
      title: 'Command Line Basics',
      url: 'https://tutorial.djangogirls.org/en/intro_to_command_line/'
    },
    {
      title: 'Python Built-in Functions',
      url: 'https://docs.python.org/3/library/functions.html'
    }
  ]
};

export default runningPythonContent;
