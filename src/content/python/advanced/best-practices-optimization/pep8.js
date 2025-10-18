export const pep8Content = {
  id: 'pep8',
  title: 'Code Readability (PEP 8)',
  duration: '15 min',
  objectives: [
    'Understand why code style matters',
    'Apply key PEP 8 rules for readable Python',
    'Use tools to check code style'
  ],
  sections: [
    {
      type: 'text',
      title: 'Why Care About Code Style?',
      content: `PEP 8 is the official Python style guide. Following it makes your code easier to read, share, and maintain.`
    },
    {
      type: 'code',
      title: 'PEP 8 Basics',
      code: `# Good: spaces around operators\na = 1 + 2\n\n# Good: 4 spaces for indentation\ndef greet(name):\n    print(f"Hello, {name}")\n\n# Good: blank lines between functions\ndef add(x, y):\n    return x + y`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `Use spaces, clear indentation, and blank lines to make code readable.`
    },
    {
      type: 'code',
      title: 'Naming Conventions',
      code: `# Good variable and function names\ntotal_count = 0\ndef calculate_area(radius):\n    return 3.14 * radius ** 2`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `Use descriptive names for variables and functions. Avoid single letters except for counters.`
    },
    {
      type: 'code',
      title: 'Line Length',
      code: `# Keep lines under 79 characters\nmessage = "This is a long message but still under the recommended line length."`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `Long lines are hard to read. Break them up if needed.`
    },
    {
      type: 'text',
      title: 'Tools for Checking Style',
      content: `Use tools like flake8, black, or pylint to check and fix your code style automatically.\n\n    pip install flake8 black pylint\n    flake8 your_script.py\n    black your_script.py\n    pylint your_script.py`
    },
    {
      type: 'text',
      title: 'Best Practices',
      content: `- Be consistent with style\n- Use spaces, not tabs\n- Name things clearly\n- Keep functions short\n- Use comments to explain why, not what\n- Run style checkers before sharing code`
    }
  ]
};