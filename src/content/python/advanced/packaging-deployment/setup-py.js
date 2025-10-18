// Lesson content for Using setup.py / pyproject.toml
export const setupPyContent = {
  id: 'setup-py',
  title: 'Simple Python Packaging: setup.py & pyproject.toml',
  duration: '30 min',
  overview: `Learn how to turn your Python code into a reusable package. See how to use setup.py (classic) and pyproject.toml (modern) with lots of explanations.`,
  objectives: [
    'Understand basic Python package structure',
    'Create a package with setup.py',
    'Use pyproject.toml for modern packaging',
    'Add dependencies and metadata',
    'Build and install your package',
    'Know best practices for packaging'
  ],
  sections: [
    {
      type: 'text',
      title: 'What is a Python Package?',
      content: `A Python package is a folder with Python files and an __init__.py file. Packaging lets you share your code with others and install it easily.\n\nTypical structure:\n\nmy_package/\n├── my_package/\n│   ├── __init__.py\n│   └── core.py\n├── setup.py\n├── pyproject.toml\n├── README.md\n└── tests/\n    └── test_core.py` 
    },
    {
      type: 'code',
      title: 'Minimal setup.py Example',
      language: 'python',
      code: `# setup.py\nfrom setuptools import setup, find_packages\n\nsetup(\n    name='my_package',\n    version='0.1.0',\n    packages=find_packages(),\n    install_requires=['requests'],\n)`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `setup.py is the classic way to define your package.\n- name: your package name\n- version: version number\n- packages: which folders to include\n- install_requires: dependencies your package needs` 
    },
    {
      type: 'code',
      title: 'Minimal pyproject.toml Example',
      language: 'toml',
      code: `[build-system]\nrequires = ['setuptools', 'wheel']\nbuild-backend = 'setuptools.build_meta'\n\n[project]\nname = 'my_package'\nversion = '0.1.0'\ndescription = 'A simple package'\nreadme = 'README.md'\nrequires-python = '>=3.7'\ndependencies = ['requests']`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `pyproject.toml is the modern way. It uses a simple format to declare your package info and dependencies.\n- [build-system]: tells Python how to build your package\n- [project]: your package details and dependencies` 
    },
    {
      type: 'code',
      title: 'How to Build and Install',
      language: 'bash',
      code: `# Build your package\npip install build\npython -m build\n\n# Install locally\npip install dist/my_package-0.1.0-py3-none-any.whl`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `Use pip and build to create a distributable package. The .whl file is a wheel (ready-to-install).` 
    },
    {
      type: 'text',
      title: 'Best Practices',
      content: `- Use pyproject.toml for new projects\n- Keep your code in a src/ folder for clarity\n- Write a README.md to explain your package\n- Add tests in a tests/ folder\n- Pin dependencies only if needed\n- Always include __init__.py in your package folder` 
    }
  ]
};