// Lesson content for Installing and using third-party packages with pip
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
      content: `pip (Pip Installs Packages) is Python's standard package manager that allows you to install and manage third-party libraries from the Python Package Index (PyPI).

**What are third-party packages?**
- Libraries created by the Python community
- Extend Python's capabilities beyond the standard library
- Cover virtually every programming domain
- Free and open-source (mostly)

**Benefits of third-party packages:**
- **Save time**: Don't reinvent the wheel
- **Quality**: Well-tested, optimized code
- **Features**: Advanced functionality not in standard library
- **Community**: Active development and support
- **Specialization**: Domain-specific tools and libraries

**Popular package categories:**
- **Web development**: Django, Flask, FastAPI
- **Data science**: pandas, numpy, matplotlib
- **Machine learning**: scikit-learn, tensorflow, pytorch
- **GUI**: tkinter, PyQt, kivy
- **Networking**: requests, urllib3
- **Testing**: pytest, unittest`
    },
    {
      type: 'code',
      title: 'Checking pip Installation',
      language: 'python',
      code: `# Checking if pip is installed and its version
import subprocess
import sys

def check_pip():
    try:
        result = subprocess.run([sys.executable, "-m", "pip", "--version"], 
                              capture_output=True, text=True)
        if result.returncode == 0:
            return result.stdout.strip()
        else:
            return "pip not found"
    except Exception:
        return "Error checking pip"

pip_info = check_pip()
print("pip status:", pip_info[:30] + "...")
print("pip is available for package management")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `pip status: pip 23.2.1 from C:\\Python311\\...
pip is available for package management`
    },
    {
      type: 'text',
      title: 'Installing Packages with pip',
      content: `pip makes installing packages simple with the \`pip install\` command. Packages are downloaded from PyPI and installed automatically with their dependencies.

**Basic pip commands:**
- **pip install package_name**: Install a package
- **pip install package_name==version**: Install specific version
- **pip list**: List installed packages
- **pip show package_name**: Show package information
- **pip uninstall package_name**: Remove a package
- **pip freeze**: Export installed packages list

**Installation examples:**
\`\`\`bash
pip install requests          # Latest version
pip install django==4.2.0    # Specific version
pip install "requests>=2.25"  # Minimum version
\`\`\``
    },
    {
      type: 'code',
      title: 'Simulating Package Installation',
      language: 'python',
      code: `# Simulating pip package installation workflow
def simulate_pip_install(package_name):
    """Simulate the pip install process."""
    print(f"Collecting {package_name}")
    print(f"Downloading {package_name}-1.2.3-py3-none-any.whl")
    print(f"Installing collected packages: {package_name}")
    print(f"Successfully installed {package_name}-1.2.3")

def simulate_pip_list():
    """Simulate pip list output."""
    packages = [
        ("requests", "2.31.0"),
        ("urllib3", "2.0.4"),
        ("certifi", "2023.7.22")
    ]
    print("Package    Version")
    print("---------- -------")
    for name, version in packages:
        print(f"{name:<10} {version}")

# Simulate installing a package
simulate_pip_install("requests")
print()
print("Installed packages:")
simulate_pip_list()`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Collecting requests
Downloading requests-1.2.3-py3-none-any.whl
Installing collected packages: requests
Successfully installed requests-1.2.3

Installed packages:
Package    Version
---------- -------
requests   2.31.0
urllib3    2.0.4
certifi    2023.7.22`
    },
    {
      type: 'text',
      title: 'Using Third-Party Packages',
      content: `Once installed, third-party packages work just like built-in modules. You import them and use their functionality in your programs.

**Using installed packages:**
1. Import the package in your Python code
2. Use the package's functions and classes
3. Follow the package's documentation for API usage
4. Handle any package-specific exceptions

**Example workflow:**
\`\`\`python
# After: pip install requests
import requests
response = requests.get("https://api.github.com")
print(response.status_code)
\`\`\``
    },
    {
      type: 'code',
      title: 'Simulating requests Package Usage',
      language: 'python',
      code: `# Simulating usage of the requests library
class MockResponse:
    """Mock response object to simulate requests library."""
    def __init__(self, status_code, text):
        self.status_code = status_code
        self.text = text
    
    def json(self):
        return {"message": "Mock API response", "status": "success"}

class MockRequests:
    """Mock requests module."""
    @staticmethod
    def get(url):
        print(f"Making GET request to: {url}")
        return MockResponse(200, "Mock response data")

# Using the "requests" library (simulated)
requests = MockRequests()
response = requests.get("https://httpbin.org/json")

print("Status code:", response.status_code)
print("Response data:", response.json())`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Making GET request to: https://httpbin.org/json
Status code: 200
Response data: {'message': 'Mock API response', 'status': 'success'}`
    },
    {
      type: 'text',
      title: 'Managing Dependencies with requirements.txt',
      content: `requirements.txt is a standard file that lists all the packages your project needs. This makes it easy to recreate the same environment on different machines.

**benefits of requirements.txt:**
- **Reproducibility**: Others can install exact same packages
- **Version control**: Track dependency changes over time
- **Deployment**: Easily set up production environments
- **Collaboration**: Team members get consistent environments

**Creating requirements.txt:**
\`\`\`bash
pip freeze > requirements.txt
\`\`\`

**Installing from requirements.txt:**
\`\`\`bash
pip install -r requirements.txt
\`\`\``
    },
    {
      type: 'code',
      title: 'Creating and Using requirements.txt',
      language: 'python',
      code: `# Creating a sample requirements.txt file
requirements_content = """# Data Science Project Dependencies
numpy==1.24.3
pandas==2.0.3
matplotlib==3.7.2
scikit-learn==1.3.0

# Web development
requests==2.31.0
flask==2.3.3

# Development tools
pytest==7.4.0
black==23.7.0
"""

# Write requirements.txt
with open("requirements.txt", "w") as f:
    f.write(requirements_content)

print("Created requirements.txt with project dependencies")

# Read and display the requirements
with open("requirements.txt", "r") as f:
    content = f.read()

print("Requirements file contents:")
print(content[:100] + "...")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Created requirements.txt with project dependencies
Requirements file contents:
# Data Science Project Dependencies
numpy==1.24.3
pandas==2.0.3
matplotlib==3.7.2
sci...`
    },
    {
      type: 'code',
      title: 'Parsing requirements.txt',
      language: 'python',
      code: `# Reading and parsing requirements.txt
def parse_requirements(filename):
    """Parse a requirements.txt file."""
    packages = []
    try:
        with open(filename, "r") as f:
            for line in f:
                line = line.strip()
                # Skip comments and empty lines
                if line and not line.startswith("#"):
                    packages.append(line)
        return packages
    except FileNotFoundError:
        return []

# Parse the requirements file
required_packages = parse_requirements("requirements.txt")

print("Required packages:")
for package in required_packages[:3]:  # Show first 3
    print(f"  {package}")

print(f"Total packages: {len(required_packages)}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Required packages:
  numpy==1.24.3
  pandas==2.0.3
  matplotlib==3.7.2
Total packages: 8`
    },
    {
      type: 'text',
      title: 'Popular Third-Party Packages',
      content: `The Python ecosystem includes thousands of useful packages. Here are some of the most popular and widely-used packages across different domains.

**Essential packages to know:**

**Web Development:**
- **requests**: HTTP library for making web requests
- **flask**: Lightweight web framework
- **django**: Full-featured web framework

**Data Science:**
- **numpy**: Numerical computing arrays
- **pandas**: Data manipulation and analysis
- **matplotlib**: Plotting and visualization

**Machine Learning:**
- **scikit-learn**: Machine learning algorithms
- **tensorflow**: Deep learning framework
- **pytorch**: Neural network library

**Development Tools:**
- **pytest**: Testing framework
- **black**: Code formatter
- **pylint**: Code quality checker`
    },
    {
      type: 'code',
      title: 'Exploring Package Information',
      language: 'python',
      code: `# Simulating package information display
def show_package_info(package_name, version, description):
    """Display information about a package."""
    print(f"Package: {package_name}")
    print(f"Version: {version}")
    print(f"Description: {description}")
    print(f"Install command: pip install {package_name}")
    print("-" * 40)

# Popular package examples
packages = [
    ("requests", "2.31.0", "HTTP library for Python"),
    ("numpy", "1.24.3", "Fundamental package for scientific computing"),
    ("pandas", "2.0.3", "Data manipulation and analysis library")
]

print("Popular Python Packages:")
print("=" * 40)
for name, version, desc in packages:
    show_package_info(name, version, desc)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Popular Python Packages:
========================================
Package: requests
Version: 2.31.0
Description: HTTP library for Python
Install command: pip install requests
----------------------------------------
Package: numpy
Version: 1.24.3
Description: Fundamental package for scientific computing
Install command: pip install numpy
----------------------------------------
Package: pandas
Version: 2.0.3
Description: Data manipulation and analysis library
Install command: pip install pandas
----------------------------------------`
    },
    {
      type: 'text',
      title: 'Virtual Environments and Package Isolation',
      content: `Virtual environments create isolated Python environments for different projects, preventing package conflicts and version issues.

**Why use virtual environments:**
- **Isolation**: Each project has its own packages
- **Version control**: Different projects can use different package versions
- **Clean environment**: No conflicts between project dependencies
- **Reproducibility**: Exact environment can be recreated

**Virtual environment workflow:**
1. Create virtual environment: \`python -m venv myenv\`
2. Activate environment: \`myenv\\Scripts\\activate\` (Windows)
3. Install packages: \`pip install package_name\`
4. Work on project with isolated packages
5. Deactivate when done: \`deactivate\`

**Best practices:**
- One virtual environment per project
- Keep requirements.txt updated
- Don't commit virtual environment to version control
- Use descriptive names for environments`
    },
    {
      type: 'code',
      title: 'Virtual Environment Simulation',
      language: 'python',
      code: `# Simulating virtual environment workflow
class VirtualEnvironment:
    """Simulate a virtual environment."""
    def __init__(self, name):
        self.name = name
        self.packages = {}
        self.is_active = False
    
    def activate(self):
        self.is_active = True
        print(f"({self.name}) Virtual environment activated")
    
    def deactivate(self):
        self.is_active = False
        print("Virtual environment deactivated")
    
    def install_package(self, package, version):
        if self.is_active:
            self.packages[package] = version
            print(f"({self.name}) Installed {package}=={version}")
        else:
            print("Error: Virtual environment not activated")

# Simulate virtual environment usage
myproject_env = VirtualEnvironment("myproject")
myproject_env.activate()
myproject_env.install_package("requests", "2.31.0")
myproject_env.install_package("flask", "2.3.3")

print(f"Packages in {myproject_env.name}:")
for pkg, ver in myproject_env.packages.items():
    print(f"  {pkg}=={ver}")

myproject_env.deactivate()`
    },
    {
      type: 'output',
      title: 'Output',
      content: `(myproject) Virtual environment activated
(myproject) Installed requests==2.31.0
(myproject) Installed flask==2.3.3
Packages in myproject:
  requests==2.31.0
  flask==2.3.3
Virtual environment deactivated`
    },
    {
      type: 'text',
      title: 'Package Development Workflow',
      content: `Understanding how to work with third-party packages is essential for modern Python development. Here's a typical workflow for starting a new project.

**Project setup workflow:**
1. **Create project directory**
2. **Set up virtual environment**
3. **Activate virtual environment**
4. **Install required packages**
5. **Create requirements.txt**
6. **Start coding with packages**
7. **Update requirements as needed**

**Maintenance tasks:**
- Regular package updates
- Security vulnerability checks
- Dependency conflict resolution
- Environment recreation for deployment`
    },
    {
      type: 'code',
      title: 'Project Setup Simulation',
      language: 'python',
      code: `# Simulating a complete project setup
def setup_project(project_name):
    """Simulate setting up a new Python project."""
    print(f"Setting up project: {project_name}")
    print("1. Creating project directory...")
    print("2. Creating virtual environment...")
    print("3. Activating virtual environment...")
    print("4. Installing base packages...")
    
    # Simulate package installation
    base_packages = ["requests", "pytest", "black"]
    for package in base_packages:
        print(f"   Installing {package}...")
    
    print("5. Creating requirements.txt...")
    print("6. Project setup complete!")
    
    return {
        "name": project_name,
        "packages": base_packages,
        "status": "ready"
    }

# Simulate project setup
project_info = setup_project("data_analysis_tool")
print(f"\\nProject '{project_info['name']}' is {project_info['status']}")
print(f"Installed packages: {', '.join(project_info['packages'])}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Setting up project: data_analysis_tool
1. Creating project directory...
2. Creating virtual environment...
3. Activating virtual environment...
4. Installing base packages...
   Installing requests...
   Installing pytest...
   Installing black...
5. Creating requirements.txt...
6. Project setup complete!

Project 'data_analysis_tool' is ready
Installed packages: requests, pytest, black`
    },
    {
      type: 'code',
      title: 'Package Usage Example',
      language: 'python',
      code: `# Example of using multiple third-party packages together
def demonstrate_package_usage():
    """Show how third-party packages work together."""
    
    # Simulating data processing workflow
    print("Data Processing Workflow:")
    print("1. requests: Fetch data from API")
    print("2. pandas: Load data into DataFrame")
    print("3. numpy: Perform numerical calculations")
    print("4. matplotlib: Create visualizations")
    
    # Mock data processing steps
    steps = [
        "Fetching user data from API...",
        "Loading 1000 records into DataFrame...",
        "Calculating statistical summaries...",
        "Generating charts and graphs..."
    ]
    
    for i, step in enumerate(steps, 1):
        print(f"Step {i}: {step}")
    
    print("\\nData analysis complete!")
    return "Analysis saved to report.pdf"

result = demonstrate_package_usage()
print("Result:", result)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Data Processing Workflow:
1. requests: Fetch data from API
2. pandas: Load data into DataFrame
3. numpy: Perform numerical calculations
4. matplotlib: Create visualizations
Step 1: Fetching user data from API...
Step 2: Loading 1000 records into DataFrame...
Step 3: Calculating statistical summaries...
Step 4: Generating charts and graphs...

Data analysis complete!
Result: Analysis saved to report.pdf`
    },
    {
      type: 'text',
      title: 'Key Takeaways',
      content: `🎯 **Key Points to Remember:**

**pip Commands:**
- **pip install package_name**: Install packages
- **pip list**: Show installed packages  
- **pip freeze**: Export package list
- **pip install -r requirements.txt**: Install from requirements file

**Best Practices:**
- Use virtual environments for project isolation
- Keep requirements.txt updated and version controlled
- Pin package versions for production deployments
- Regularly update packages for security fixes
- Read package documentation before using

**Essential Packages to Learn:**
- **requests**: HTTP requests and API calls
- **numpy/pandas**: Data manipulation and analysis
- **flask/django**: Web development frameworks
- **pytest**: Testing and quality assurance
- **matplotlib**: Data visualization

**Virtual Environments:**
- Create isolated environments per project
- Activate before installing packages
- Export requirements.txt for reproducibility
- Don't commit virtual environments to git

**Project Workflow:**
1. Create virtual environment
2. Activate environment
3. Install packages
4. Create requirements.txt
5. Code with packages
6. Update requirements as needed

Third-party packages are what make Python incredibly powerful and versatile. Master pip and package management to unlock Python's full potential!`
    }
  ]
};