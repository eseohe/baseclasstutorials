// Lesson content for Installing Python
const installingPythonContent = {
  id: 'installing-python',
  title: 'Installing Python & Setting Up Your Environment',
  duration: '15 min',
  overview: `Time to get Python on your computer! This step-by-step guide will help you download, install, and verify Python installation. Don't worry - we'll walk through everything together, and you'll be coding in no time!`,
  objectives: [
    'Download and install Python from the official website',
    'Set up Python correctly on Windows, macOS, or Linux',
    'Verify your installation works properly',
    'Understand what PATH means and why it matters',
    'Get ready to write your first Python program'
  ],
  sections: [
    {
      type: 'text',
      title: 'Before We Start',
      content: `
        Installing Python is like setting up a new app on your phone, but for your computer. We'll download it from the official source and make sure your computer knows how to find and use Python.

        **Important**: We recommend Python version 3.8 or newer. Python 2 is old and no longer supported, so always choose Python 3!
      `
    },
    {
      type: 'text',
      title: 'Step 1: Download Python',
      content: `
        Let's get Python from the official source - this ensures you get the real, safe version.
      `
    },
    {
      type: 'instruction',
      title: 'Go to the official Python website',
      content: `Visit: https://www.python.org/downloads/`
    },
    {
      type: 'text',
      title: '',
      content: `
        The website will automatically detect your operating system (Windows, Mac, or Linux) and show you the best version to download. Look for a big yellow button that says "Download Python 3.x.x" - click it!
      `
    },
    {
      type: 'text',
      title: 'Step 2: Install Python (Windows)',
      content: `
        If you're using Windows, here's exactly what to do:
      `
    },
    {
      type: 'instruction',
      title: 'Run the installer',
      content: `Double-click the downloaded file (usually in your Downloads folder)`
    },
    {
      type: 'text',
      title: '',
      content: `
        **IMPORTANT**: Before clicking "Install Now", make sure to:
        ✅ Check the box that says "Add Python to PATH"
        ✅ Check "Install pip" (this helps install additional Python packages)
        
        This step is crucial! If you forget this, Python won't work from the command line.
      `
    },
    {
      type: 'instruction',
      title: 'Click Install Now',
      content: `Wait for the installation to complete (usually takes 2-5 minutes)`
    },
    {
      type: 'text',
      title: 'Step 2: Install Python (macOS)',
      content: `
        If you're using a Mac:
      `
    },
    {
      type: 'instruction',
      title: 'Run the installer',
      content: `Double-click the downloaded .pkg file`
    },
    {
      type: 'instruction',
      title: 'Follow the setup wizard',
      content: `Click "Continue" through all the steps, then "Install"`
    },
    {
      type: 'text',
      title: '',
      content: `
        Mac users: You might already have Python 2 installed, but we want Python 3. The new installation won't interfere with the old one.
      `
    },
    {
      type: 'text',
      title: 'Step 2: Install Python (Linux)',
      content: `
        Most Linux systems come with Python pre-installed, but let's make sure you have Python 3:
      `
    },
    {
      type: 'instruction',
      title: 'Ubuntu/Debian users',
      content: `sudo apt update && sudo apt install python3 python3-pip`
    },
    {
      type: 'instruction',
      title: 'Fedora/CentOS users',
      content: `sudo dnf install python3 python3-pip`
    },
    {
      type: 'instruction',
      title: 'Arch Linux users',
      content: `sudo pacman -S python python-pip`
    },
    {
      type: 'text',
      title: 'Step 3: Verify Your Installation',
      content: `
        Now let's make sure Python is installed correctly. We'll test this using the command line (don't worry, it's easier than it sounds!).
      `
    },
    {
      type: 'text',
      title: 'Opening the Command Line',
      content: `
        • **Windows**: Press \`Win + R\`, type \`cmd\`, and press Enter
        • **macOS**: Press \`Cmd + Space\`, type "Terminal", and press Enter  
        • **Linux**: Press \`Ctrl + Alt + T\` or search for "Terminal"
      `
    },
    {
      type: 'instruction',
      title: 'Check Python version',
      content: `python --version`
    },
    {
      type: 'text',
      title: '',
      content: `
        You should see something like "Python 3.11.2" (the exact numbers may differ). If that doesn't work, try:
      `
    },
    {
      type: 'instruction',
      title: 'Alternative command',
      content: `python3 --version`
    },
    {
      type: 'text',
      title: 'Test Python Interactive Mode',
      content: `
        Let's make sure Python actually works by running a simple command:
      `
    },
    {
      type: 'instruction',
      title: 'Start Python',
      content: `python`
    },
    {
      type: 'text',
      title: '',
      content: `
        You should see something like this:
      `
    },
    {
      type: 'code',
      title: 'Python Interactive Shell',
      language: 'python',
      code: `Python 3.11.2 (tags/v3.11.2:878ead1, Feb  7 2023, 16:38:35) [MSC v.1934 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>>`
    },
    {
      type: 'text',
      title: '',
      content: `
        Great! The \`>>>\` symbols mean Python is ready for your commands. Let's test it:
      `
    },
    {
      type: 'instruction',
      title: 'Type this in Python',
      content: `print("Hello, Python!")`
    },
    {
      type: 'output',
      title: 'Expected Output',
      content: `Hello, Python!`
    },
    {
      type: 'instruction',
      title: 'Exit Python',
      content: `exit()`
    },
    {
      type: 'text',
      title: '',
      content: `
        Perfect! If you saw "Hello, Python!" appear, your installation is working correctly.
      `
    },
    {
      type: 'text',
      title: 'Understanding PATH (Important!)',
      content: `
        When you "Add Python to PATH" during installation, you're telling your computer where to find Python. Think of PATH as a phone book - when you type "python" in the command line, your computer checks the PATH to find where Python lives.

        Without PATH, you'd have to type the full address every time (like C:\\Python311\\python.exe instead of just python).
      `
    },
    {
      type: 'highlight',
      title: 'Troubleshooting Common Issues',
      items: [
        '**"python is not recognized"**: Python isn\'t in your PATH. Try reinstalling with "Add to PATH" checked.',
        '**Permission denied**: On Linux/Mac, you might need sudo for installation.',
        '**Multiple Python versions**: Use python3 instead of python to ensure you\'re using Python 3.',
        '**Still having trouble?**: Restart your terminal or computer after installation.'
      ]
    },
    {
      type: 'text',
      title: 'What About Code Editors?',
      content: `
        While you can write Python in any text editor, using a proper code editor makes life much easier. Here are some great free options:

        • **VS Code**: Microsoft's popular, beginner-friendly editor
        • **PyCharm Community**: JetBrains' Python-focused IDE
        • **Thonny**: Simple editor designed for Python beginners
        • **IDLE**: Comes built-in with Python (basic but functional)

        For now, you can use any text editor or even try Python's built-in IDLE to get started!
      `
    },
    {
      type: 'text',
      title: 'Congratulations! 🎉',
      content: `
        You've successfully installed Python! You now have one of the world's most popular programming languages ready to use on your computer. 

        In the next lesson, we'll learn how to run Python programs and use the interactive shell for quick experiments.
      `
    }
  ],
  resources: [
    {
      title: 'Official Python Downloads',
      url: 'https://www.python.org/downloads/'
    },
    {
      title: 'Python Installation Guide (Official Docs)',
      url: 'https://docs.python.org/3/using/index.html'
    },
    {
      title: 'VS Code for Python',
      url: 'https://code.visualstudio.com/docs/python/python-tutorial'
    },
    {
      title: 'Thonny Python IDE',
      url: 'https://thonny.org/'
    }
  ]
};

export default installingPythonContent;
