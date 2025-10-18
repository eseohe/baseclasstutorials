export const thirdPartyContent = {
  id: 'third-party',
  title: 'Installing and using third-party packages with pip',
  duration: '25 min',
  overview: `Master Python package management with pip! Learn to install, manage, and use third-party packages to extend Python's capabilities with powerful libraries for web development, data analysis, machine learning, and more.`,
  objectives: [
    'Understand what pip is and how it manages Python packages',
    'Install third-party packages from PyPI (Python Package Index)',
    'Manage package versions and handle dependencies',
    'Use requirements.txt files for project dependency management',
    'Understand virtual environments and package isolation',
    'Explore popular third-party packages and their use cases',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to pip and Third-Party Packages',
      content: `pip (Pip Installs Packages) is Python's standard package manager. It allows you to install and manage third-party libraries from the Python Package Index (PyPI).

**What are third-party packages?**
- Libraries created by the Python community
- Extend Python's capabilities beyond the standard library
- Cover virtually every programming domain
- Free and open-source (mostly)

**Benefits of third-party packages:**
- Save time: Don't reinvent the wheel
- Quality: Well-tested, optimized code
- Features: Advanced functionality not in standard library
- Community: Active development and support
- Specialization: Domain-specific tools and libraries

**Popular package categories:**
- Web development: Django, Flask, FastAPI
- Data science: pandas, numpy, matplotlib
- Machine learning: scikit-learn, tensorflow, pytorch
- Networking: requests, urllib3
- Testing: pytest, unittest`
    },
    {
      type: 'text',
      title: 'Checking pip Installation',
      content: `To check if pip is installed, run this command in your terminal or command prompt:

\`\`\`bash
pip --version
\`\`\`

If you see a version number, pip is installed and ready to use.`
    },
    {
      type: 'text',
      title: 'Installing Packages with pip',
      content: `pip makes installing packages simple with the \`pip install\` command. Packages are downloaded from PyPI and installed automatically with their dependencies.

**Basic pip commands:**
- \`pip install package_name\`: Install a package
- \`pip install package_name==version\`: Install specific version
- \`pip list\`: List installed packages
- \`pip show package_name\`: Show package information
- \`pip uninstall package_name\`: Remove a package
- \`pip freeze\`: Export installed packages list

**Installation examples:**
\`\`\`bash
pip install requests          # Latest version
pip install django==4.2.0    # Specific version
pip install "requests>=2.25" # Minimum version
\`\`\`
`
    },
    {
      type: 'text',
      title: 'Using Third-Party Packages',
      content: `Once installed, third-party packages work just like built-in modules. You import them and use their functionality in your programs.

**Example: Using the requests library**

First, install it:
\`\`\`bash
pip install requests
\`\`\`

Then, use it in your Python code:`
    },
    {
      type: 'code',
      title: 'Using requests',
      language: 'python',
      code: `import requests

response = requests.get("https://api.github.com")
print("Status code:", response.status_code)
print("Response JSON:", response.json())`
    },
    {
      type: 'output',
      title: 'Output (example)',
      content: `Status code: 200
Response JSON: {...}`
    },
    {
      type: 'text',
      title: 'Managing Dependencies with requirements.txt',
      content: `A \`requirements.txt\` file lists all the packages your project needs. This makes it easy to recreate the same environment on different machines.

**Creating requirements.txt:**
\`\`\`bash
pip freeze > requirements.txt
\`\`\`

**Sample requirements.txt:**
\`\`\`text
numpy==1.24.3
pandas==2.0.3
matplotlib==3.7.2
scikit-learn==1.3.0
requests==2.31.0
flask==2.3.3
pytest==7.4.0
black==23.7.0
\`\`\`

**Installing from requirements.txt:**
\`\`\`bash
pip install -r requirements.txt
\`\`\`
`
    },
    {
      type: 'text',
      title: 'Popular Third-Party Packages',
      content: `The Python ecosystem includes thousands of useful packages. Here are some of the most popular and widely-used packages across different domains.

**Web Development:**
- requests: HTTP library for making web requests
- flask: Lightweight web framework
- django: Full-featured web framework

**Data Science:**
- numpy: Numerical computing arrays
- pandas: Data manipulation and analysis
- matplotlib: Plotting and visualization

**Machine Learning:**
- scikit-learn: Machine learning algorithms
- tensorflow: Deep learning framework
- pytorch: Neural network library

**Development Tools:**
- pytest: Testing framework
- black: Code formatter
- pylint: Code quality checker`
    },
    {
      type: 'text',
      title: 'Virtual Environments and Package Isolation',
      content: `Virtual environments create isolated Python environments for different projects, preventing package conflicts and version issues.

**Why use virtual environments:**
- Isolation: Each project has its own packages
- Version control: Different projects can use different package versions
- Clean environment: No conflicts between project dependencies
- Reproducibility: Exact environment can be recreated

**Virtual environment workflow:**
1. Create virtual environment:
   \`\`\`bash
   python -m venv myenv
   \`\`\`
2. Activate environment:
   - Windows:
     \`\`\`bash
     myenv\\Scripts\\activate
     \`\`\`
   - macOS/Linux:
     \`\`\`bash
     source myenv/bin/activate
     \`\`\`
3. Install packages:
   \`\`\`bash
   pip install package_name
   \`\`\`
4. Deactivate when done:
   \`\`\`bash
   deactivate
   \`\`\`

**Best practices:**
- One virtual environment per project
- Keep requirements.txt updated
- Don't commit virtual environment folders to version control
- Use descriptive names for environments`
    },
    {
      type: 'text',
      title: 'Project Setup Workflow',
      content: `A typical workflow for starting a new Python project:

1. Create project directory
2. Set up virtual environment
3. Activate virtual environment
4. Install required packages
5. Create requirements.txt
6. Start coding with packages
7. Update requirements as needed

**Example:**
\`\`\`bash
mkdir myproject
cd myproject
python -m venv venv
venv\\Scripts\\activate  # Windows
# or
source venv/bin/activate # macOS/Linux
pip install requests pandas matplotlib
pip freeze > requirements.txt
\`\`\`
`
    },
    {
      type: 'text',
      title: 'Package Usage Example',
      content: `Here's how you might use several third-party packages together in a data analysis workflow:`
    },
    {
      type: 'code',
      title: 'Data Analysis Example',
      language: 'python',
      code: `import requests
import pandas as pd
import matplotlib.pyplot as plt

# Fetch data from an API
response = requests.get("https://jsonplaceholder.typicode.com/posts")
data = response.json()

# Load data into a DataFrame
df = pd.DataFrame(data)

# Analyze and visualize
print("Number of posts:", len(df))
df['userId'].value_counts().plot(kind='bar')
plt.title("Posts per User")
plt.xlabel("User ID")
plt.ylabel("Number of Posts")
plt.show()`
    },
    {
      type: 'text',
      title: 'Key Takeaways',
      content: `🎯 **Key Points to Remember:**

**pip Commands:**
- pip install package_name: Install packages
- pip list: Show installed packages  
- pip freeze: Export package list
- pip install -r requirements.txt: Install from requirements file

**Best Practices:**
- Use virtual environments for project isolation
- Keep requirements.txt updated and version controlled
- Pin package versions for production deployments
- Regularly update packages for security fixes
- Read package documentation before using

**Essential Packages to Learn:**
- requests: HTTP requests and API calls
- numpy/pandas: Data manipulation and analysis
- flask/django: Web development frameworks
- pytest: Testing and quality assurance
- matplotlib: Data visualization

Third-party packages are what make Python incredibly powerful and versatile. Master pip and package management to unlock Python's full potential!`
    }
  ]
};