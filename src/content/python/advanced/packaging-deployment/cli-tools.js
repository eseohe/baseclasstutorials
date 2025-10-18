export const cliToolsContent = {
  id: 'cli-tools',
  title: 'Creating Command-line Tools',
  duration: '30 min',
  overview: `Learn how to build Python programs that run from the command line. See how to use argparse and package your tool so users can run it with a single command.`,
  objectives: [
    'Understand what a CLI tool is',
    'Write a Python CLI tool using argparse',
    'Add your CLI to setup.py or pyproject.toml',
    'Test your CLI tool',
    'Distribute your CLI tool as a package'
  ],
  sections: [
    {
      type: 'text',
      title: 'What is a CLI Tool?',
      content: `A command-line interface (CLI) tool is a program you run from the terminal. You type a command, give it options, and it does something useful.\n\nExamples: pip, git, black, pytest.`
    },
    {
      type: 'code',
      title: 'Example: greet.py',
      language: 'python',
      code: `# greet.py\nimport argparse\n\ndef main():\n    parser = argparse.ArgumentParser(description='Greet someone from the command line.')\n    parser.add_argument('name', help='Name to greet')\n    parser.add_argument('--shout', action='store_true', help='Shout the greeting')\n    args = parser.parse_args()\n    greeting = f"Hello, {args.name}!"\n    if args.shout:\n        greeting = greeting.upper()\n    print(greeting)\n\nif __name__ == '__main__':\n    main()`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `This script uses argparse to handle command-line arguments.\n- name: required argument\n- --shout: optional flag to make the greeting uppercase.\n\nTry it in the terminal:\n\n    python greet.py Alice\n    python greet.py Bob --shout` 
    },
    {
      type: 'code',
      title: 'Adding CLI Entry Point to setup.py',
      language: 'python',
      code: `# setup.py\nsetup(\n    ...\n    entry_points={\n        'console_scripts': [\n            'greet=greet:main',\n        ],\n    },\n)`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `This makes greet available as a command after installing your package. Users can run:\n\n    greet Alice --shout` 
    },
    {
      type: 'code',
      title: 'Adding CLI Entry Point to pyproject.toml',
      language: 'toml',
      code: `[project.scripts]\ngreet = 'greet:main'`
    },
    {
      type: 'text',
      title: 'Testing Your CLI Tool',
      content: `Install your package locally and try the command:\n\n    pip install .\n    greet Alice\n    greet Bob --shout` 
    },
    {
      type: 'text',
      title: 'Best Practices',
      content: `- Use argparse for flexible argument parsing\n- Give helpful error messages\n- Document your CLI in README.md\n- Add tests for your CLI logic\n- Use entry points so users can run your tool easily` 
    }
  ]
};