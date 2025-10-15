// Lesson content for 'What is Python, features & use cases'
const whatIsPythonContent = {
  id: 'what-is-python',
  title: 'What is Python?',
  duration: '12 min',
  overview: `
    Python is a beginner-friendly programming language that's easy to read and write. It's like writing instructions in plain English! This lesson introduces you to Python and shows you why it's perfect for learning programming.
  `,
  objectives: [
    'Understand what Python is and why it\'s popular',
    'Learn about Python\'s key features that make it beginner-friendly',
    'Discover real-world applications of Python',
    'Get excited about what you can build with Python!'
  ],
  sections: [
    {
      type: 'text',
      title: 'What is Python?',
      content: `
        Python is a programming language that helps you tell computers what to do. Think of it like giving directions to a friend - but instead of telling them how to get to your house, you're telling the computer how to solve problems or create amazing things!

        Python was created by Guido van Rossum in 1991. He named it after the British comedy group "Monty Python's Flying Circus" - so yes, it's supposed to be fun!
      `
    },
    {
      type: 'text',
      title: 'Why Python is Perfect for Beginners',
      content: `
        Python is like the friendly neighbor of programming languages. Here's why beginners love it:
      `
    },
    {
      type: 'code',
      title: 'Python Code Example',
      language: 'python',
      code: `print("Hello, World!")
print("Python is easy!")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Hello, World!
Python is easy!`
    },
    {
      type: 'text',
      title: 'Compare with Other Languages',
      content: `
        Look how simple Python is compared to other languages. This is the same "Hello, World!" program in different languages:
      `
    },
    {
      type: 'code',
      title: 'Java Version (More Complex)',
      language: 'java',
      code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    },
    {
      type: 'code',
      title: 'Python Version (Simple!)',
      language: 'python',
      code: `print("Hello, World!")`
    },
    {
      type: 'text',
      title: 'Python\'s Superpowers',
      content: `
        Python has several "superpowers" that make it special:
      `
    },
    {
      type: 'list',
      title: 'Key Features',
      items: [
        '**Easy to Read**: Python code looks almost like English sentences',
        '**Easy to Write**: Less typing, more creating!',
        '**Powerful Libraries**: Pre-built tools for almost everything',
        '**Cross-Platform**: Works on Windows, Mac, and Linux',
        '**Free and Open**: Anyone can use Python for free',
        '**Huge Community**: Millions of developers ready to help'
      ]
    },
    {
      type: 'text',
      title: 'What Can You Build with Python?',
      content: `
        Python is incredibly versatile. Here are some amazing things you can create:
      `
    },
    {
      type: 'list',
      title: 'Real-World Applications',
      items: [
        '**Websites**: Instagram, YouTube, and Spotify use Python',
        '**Games**: Civilization IV and EVE Online were built with Python',
        '**Data Science**: Netflix uses Python to recommend movies',
        '**Artificial Intelligence**: Tesla\'s self-driving cars use Python',
        '**Automation**: Automate boring tasks like organizing files',
        '**Scientific Research**: NASA uses Python for space missions'
      ]
    },
    {
      type: 'text',
      title: 'Famous Companies Using Python',
      content: `
        Some of the world's biggest companies trust Python for their most important projects:
        
        • **Google**: Uses Python for many of its services
        • **Netflix**: Powers their recommendation engine
        • **Instagram**: Handles millions of photos daily
        • **Spotify**: Manages music streaming and playlists
        • **Dropbox**: Built their file-sharing platform
        • **NASA**: Uses Python for space exploration
      `
    },
    {
      type: 'highlight',
      title: 'Fun Python Facts',
      items: [
        'Python is named after Monty Python, not the snake! 🐍',
        'Instagram serves over 400 million users with Python',
        'Python code is often 3-10 times shorter than equivalent Java code',
        'The Python Package Index (PyPI) has over 400,000 packages',
        'Python is the most popular language for teaching programming'
      ]
    },
    {
      type: 'text',
      title: 'Your Journey Starts Here',
      content: `
        You're about to join millions of developers worldwide who chose Python as their programming language. Whether you want to build websites, analyze data, create games, or automate tasks - Python will be your trusty companion.

        Ready to write your first line of Python code? Let's get Python installed on your computer in the next lesson!
      `
    }
  ],
  resources: [
    {
      title: 'Official Python Website',
      url: 'https://www.python.org/'
    },
    {
      title: 'Python Success Stories',
      url: 'https://www.python.org/success-stories/'
    },
    {
      title: 'Python in the Real World',
      url: 'https://realpython.com/what-can-i-do-with-python/'
    }
  ]
};

export default whatIsPythonContent;
