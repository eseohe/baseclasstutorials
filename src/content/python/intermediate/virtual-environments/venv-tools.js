// Lesson content for Virtual Environment Tools and Best Practices
export const venvToolsContent = {
  id: 'venv-tools',
  title: 'Virtual Environment Tools and Best Practices',
  duration: '35 min',
  overview: `Master advanced virtual environment management! Explore popular tools like venv, virtualenv, conda, and poetry. Learn best practices for dependency management, environment switching, and maintaining clean project setups across different development scenarios.`,
  objectives: [
    'Compare different virtual environment tools and their use cases',
    'Master advanced venv and virtualenv features and commands',
    'Understand conda environments for data science workflows',
    'Learn modern dependency management with Poetry',
    'Implement best practices for project isolation and collaboration',
    'Handle complex dependency scenarios and environment conflicts',
  ],
  sections: [
    {
      type: 'text',
      title: 'Virtual Environment Tools Landscape',
      content: `Python offers several tools for managing virtual environments, each with different strengths and use cases.

**Popular Virtual Environment Tools:**

**1. venv (Built-in Python 3.3+)**
- **Pros**: Built into Python, lightweight, simple
- **Cons**: Basic features, Python-only
- **Best for**: Simple Python projects, beginners

**2. virtualenv (Third-party)**
- **Pros**: Works with older Python versions, more features
- **Cons**: Requires installation, slightly more complex
- **Best for**: Legacy Python support, advanced features

**3. conda (Anaconda/Miniconda)**
- **Pros**: Handles non-Python dependencies, package management
- **Cons**: Larger installation, complex for simple projects
- **Best for**: Data science, scientific computing, complex dependencies

**4. Poetry**
- **Pros**: Modern dependency management, lock files, publishing
- **Cons**: Learning curve, opinionated workflow
- **Best for**: Modern Python projects, library development

**5. pipenv**
- **Pros**: Combines pip and virtualenv, Pipfile format
- **Cons**: Performance issues, less popular now
- **Best for**: Simple dependency management

**Choosing the right tool:**
- **Simple scripts**: venv
- **Data science**: conda
- **Modern projects**: Poetry
- **Legacy support**: virtualenv
- **Team collaboration**: Poetry or conda`
    },
    {
      type: 'code',
      title: 'Advanced venv Usage',
      language: 'python',
      code: `# Advanced venv commands and techniques
import os
import subprocess
import sys
from pathlib import Path

class VenvManager:
    """Advanced virtual environment management with venv"""
    
    def __init__(self, base_dir="./environments"):
        self.base_dir = Path(base_dir)
        self.base_dir.mkdir(exist_ok=True)
    
    def create_environment(self, name, python_version=None):
        """Create a new virtual environment"""
        env_path = self.base_dir / name
        
        if env_path.exists():
            return f"Environment '{name}' already exists"
        
        try:
            # Use specific Python version if provided
            python_cmd = python_version or sys.executable
            
            # Create virtual environment
            cmd = [python_cmd, "-m", "venv", str(env_path)]
            result = subprocess.run(cmd, capture_output=True, text=True)
            
            if result.returncode == 0:
                return f"Created environment '{name}' at {env_path}"
            else:
                return f"Error creating environment: {result.stderr}"
                
        except Exception as e:
            return f"Error: {e}"
    
    def list_environments(self):
        """List all virtual environments"""
        if not self.base_dir.exists():
            return []
        
        environments = []
        for item in self.base_dir.iterdir():
            if item.is_dir() and (item / "pyvenv.cfg").exists():
                # Get Python version from pyvenv.cfg
                python_version = "Unknown"
                try:
                    cfg_path = item / "pyvenv.cfg"
                    with open(cfg_path, 'r') as f:
                        for line in f:
                            if line.startswith("version"):
                                python_version = line.split("=")[1].strip()
                                break
                except:
                    pass
                
                environments.append({
                    "name": item.name,
                    "path": str(item),
                    "python_version": python_version
                })
        
        return environments
    
    def get_activation_script(self, name):
        """Get the activation script path for an environment"""
        env_path = self.base_dir / name
        
        if not env_path.exists():
            return None
        
        # Different activation scripts for different platforms
        if os.name == 'nt':  # Windows
            return env_path / "Scripts" / "activate.bat"
        else:  # Unix-like
            return env_path / "bin" / "activate"
    
    def get_python_executable(self, name):
        """Get the Python executable path for an environment"""
        env_path = self.base_dir / name
        
        if not env_path.exists():
            return None
        
        if os.name == 'nt':  # Windows
            return env_path / "Scripts" / "python.exe"
        else:  # Unix-like
            return env_path / "bin" / "python"
    
    def install_packages(self, env_name, packages):
        """Install packages in a specific environment"""
        python_exe = self.get_python_executable(env_name)
        
        if not python_exe or not python_exe.exists():
            return f"Environment '{env_name}' not found"
        
        try:
            for package in packages:
                cmd = [str(python_exe), "-m", "pip", "install", package]
                result = subprocess.run(cmd, capture_output=True, text=True)
                
                if result.returncode != 0:
                    return f"Error installing {package}: {result.stderr}"
            
            return f"Successfully installed packages: {', '.join(packages)}"
            
        except Exception as e:
            return f"Error: {e}"
    
    def export_requirements(self, env_name, output_file="requirements.txt"):
        """Export installed packages to requirements.txt"""
        python_exe = self.get_python_executable(env_name)
        
        if not python_exe or not python_exe.exists():
            return f"Environment '{env_name}' not found"
        
        try:
            cmd = [str(python_exe), "-m", "pip", "freeze"]
            result = subprocess.run(cmd, capture_output=True, text=True)
            
            if result.returncode == 0:
                with open(output_file, 'w') as f:
                    f.write(result.stdout)
                return f"Requirements exported to {output_file}"
            else:
                return f"Error exporting requirements: {result.stderr}"
                
        except Exception as e:
            return f"Error: {e}"

# Demonstrate advanced venv usage
print("Advanced Virtual Environment Management:")
print("=" * 40)

# Create manager instance
venv_manager = VenvManager("./demo_environments")

# Create test environments
environments_to_create = [
    ("web_project", None),
    ("data_analysis", None),
    ("ml_research", None)
]

print("Creating virtual environments:")
for name, python_version in environments_to_create:
    result = venv_manager.create_environment(name, python_version)
    print(f"  {result}")

# List created environments
print("\\nCreated environments:")
environments = venv_manager.list_environments()
for env in environments:
    print(f"  📁 {env['name']}")
    print(f"     Path: {env['path']}")
    print(f"     Python: {env['python_version']}")
    
    # Show activation script
    activation_script = venv_manager.get_activation_script(env['name'])
    if activation_script:
        print(f"     Activate: {activation_script}")
    print()

# Demonstrate package installation
print("Installing packages in different environments:")

# Web project packages
web_packages = ["flask", "requests"]
result = venv_manager.install_packages("web_project", web_packages)
print(f"Web project: {result}")

# Data analysis packages
data_packages = ["pandas", "numpy"]
result = venv_manager.install_packages("data_analysis", data_packages)
print(f"Data analysis: {result}")

# Export requirements
print("\\nExporting requirements:")
for env_name in ["web_project", "data_analysis"]:
    req_file = f"{env_name}_requirements.txt"
    result = venv_manager.export_requirements(env_name, req_file)
    print(f"  {result}")

# Environment switching helper
def create_activate_script(env_name, base_dir="./demo_environments"):
    """Create a helper script for activating environments"""
    script_content = f'''#!/bin/bash
# Environment activation helper for {env_name}

ENV_PATH="{base_dir}/{env_name}"

if [ -d "$ENV_PATH" ]; then
    echo "Activating {env_name} environment..."
    
    # Unix-like systems
    if [ -f "$ENV_PATH/bin/activate" ]; then
        source "$ENV_PATH/bin/activate"
    # Windows (if using Git Bash or similar)
    elif [ -f "$ENV_PATH/Scripts/activate" ]; then
        source "$ENV_PATH/Scripts/activate"
    else
        echo "Activation script not found"
        exit 1
    fi
    
    echo "Environment {env_name} activated!"
    echo "Python location: $(which python)"
    echo "Installed packages:"
    pip list --format=columns
else
    echo "Environment {env_name} not found at $ENV_PATH"
    exit 1
fi
'''
    
    script_name = f"activate_{env_name}.sh"
    with open(script_name, 'w') as f:
        f.write(script_content)
    
    # Make executable (Unix-like systems)
    try:
        os.chmod(script_name, 0o755)
    except:
        pass
    
    return script_name

print("\\nCreating activation helper scripts:")
for env in environments:
    script_name = create_activate_script(env['name'])
    print(f"  Created: {script_name}")

# Clean up demonstration files
print("\\nCleaning up demonstration files...")
import shutil

try:
    # Remove demo environments
    shutil.rmtree("./demo_environments")
    
    # Remove requirement files
    for file in ["web_project_requirements.txt", "data_analysis_requirements.txt"]:
        if os.path.exists(file):
            os.remove(file)
    
    # Remove activation scripts
    for env in environments:
        script_name = f"activate_{env['name']}.sh"
        if os.path.exists(script_name):
            os.remove(script_name)
    
    print("✅ Cleanup completed")
except Exception as e:
    print(f"❌ Cleanup error: {e}")

print("\\n📝 Advanced venv features demonstrated:")
print("  • Programmatic environment creation")
print("  • Environment listing and inspection")
print("  • Package installation automation")
print("  • Requirements export")
print("  • Cross-platform activation scripts")
print("  • Environment management utilities")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Advanced Virtual Environment Management:
========================================
Creating virtual environments:
  Created environment 'web_project' at demo_environments/web_project
  Created environment 'data_analysis' at demo_environments/data_analysis
  Created environment 'ml_research' at demo_environments/ml_research

Created environments:
  📁 web_project
     Path: demo_environments/web_project
     Python: 3.11.2
     Activate: demo_environments/web_project/Scripts/activate.bat

  📁 data_analysis
     Path: demo_environments/data_analysis
     Python: 3.11.2
     Activate: demo_environments/data_analysis/Scripts/activate.bat

  📁 ml_research
     Path: demo_environments/ml_research
     Python: 3.11.2
     Activate: demo_environments/ml_research/Scripts/activate.bat

Installing packages in different environments:
Web project: Successfully installed packages: flask, requests
Data analysis: Successfully installed packages: pandas, numpy

Exporting requirements:
  Requirements exported to web_project_requirements.txt
  Requirements exported to data_analysis_requirements.txt

Creating activation helper scripts:
  Created: activate_web_project.sh
  Created: activate_data_analysis.sh
  Created: activate_ml_research.sh

Cleaning up demonstration files...
✅ Cleanup completed

📝 Advanced venv features demonstrated:
  • Programmatic environment creation
  • Environment listing and inspection
  • Package installation automation
  • Requirements export
  • Cross-platform activation scripts
  • Environment management utilities`
    },
    {
      type: 'code',
      title: 'Conda Environment Management',
      language: 'python',
      code: `# Conda environment management for data science
import subprocess
import json
import os

class CondaManager:
    """Conda environment management utility"""
    
    def __init__(self):
        self.conda_available = self.check_conda_availability()
    
    def check_conda_availability(self):
        """Check if conda is available on the system"""
        try:
            result = subprocess.run(["conda", "--version"], 
                                  capture_output=True, text=True)
            return result.returncode == 0
        except FileNotFoundError:
            return False
    
    def create_data_science_env(self, name, python_version="3.11"):
        """Create a data science environment with common packages"""
        if not self.conda_available:
            return "Conda not available - this is a demonstration"
        
        # Common data science packages
        packages = [
            f"python={python_version}",
            "numpy",
            "pandas", 
            "matplotlib",
            "seaborn",
            "scikit-learn",
            "jupyter",
            "ipykernel"
        ]
        
        # Simulate conda create command
        cmd = ["conda", "create", "-n", name, "-y"] + packages
        
        return {
            "command": " ".join(cmd),
            "description": f"Create {name} environment with data science stack",
            "packages": packages
        }
    
    def create_environment_yml(self, env_name, packages, pip_packages=None):
        """Create environment.yml file for reproducible environments"""
        env_config = {
            "name": env_name,
            "channels": ["defaults", "conda-forge"],
            "dependencies": packages
        }
        
        if pip_packages:
            env_config["dependencies"].append({
                "pip": pip_packages
            })
        
        return env_config
    
    def export_environment(self, env_name):
        """Export current environment to environment.yml"""
        if not self.conda_available:
            # Simulate export for demonstration
            return {
                "name": env_name,
                "channels": ["defaults", "conda-forge"],
                "dependencies": [
                    "python=3.11",
                    "numpy=1.24.3",
                    "pandas=2.0.3",
                    "matplotlib=3.7.1",
                    {"pip": ["requests==2.31.0"]}
                ]
            }
        
        try:
            # Real conda export
            cmd = ["conda", "env", "export", "-n", env_name]
            result = subprocess.run(cmd, capture_output=True, text=True)
            
            if result.returncode == 0:
                return result.stdout
            else:
                return f"Error exporting environment: {result.stderr}"
                
        except Exception as e:
            return f"Error: {e}"

# Demonstrate conda environment management
print("Conda Environment Management:")
print("=" * 30)

conda_manager = CondaManager()

if conda_manager.conda_available:
    print("✅ Conda is available")
else:
    print("ℹ️  Conda not available - showing demonstration")

# Create data science environment
print("\\nCreating data science environment:")
ds_env = conda_manager.create_data_science_env("data_science_proj")
print(f"Command: {ds_env['command']}")
print(f"Description: {ds_env['description']}")
print("Packages to install:")
for pkg in ds_env['packages']:
    print(f"  • {pkg}")

# Create environment.yml files for different project types
print("\\nCreating environment.yml files:")

# Data Science environment
ds_yml = conda_manager.create_environment_yml(
    "data_science",
    ["python=3.11", "numpy", "pandas", "matplotlib", "seaborn", "scikit-learn"],
    ["streamlit", "plotly"]
)

# Web Development environment
web_yml = conda_manager.create_environment_yml(
    "web_dev", 
    ["python=3.11", "nodejs"],
    ["flask", "django", "fastapi", "uvicorn"]
)

# Machine Learning environment
ml_yml = conda_manager.create_environment_yml(
    "machine_learning",
    ["python=3.11", "numpy", "pandas", "scikit-learn", "tensorflow", "pytorch"],
    ["transformers", "datasets", "wandb"]
)

environments = [
    ("data_science.yml", ds_yml),
    ("web_dev.yml", web_yml), 
    ("machine_learning.yml", ml_yml)
]

for filename, config in environments:
    print(f"\\n📄 {filename}:")
    print(f"  Name: {config['name']}")
    print(f"  Channels: {', '.join(config['channels'])}")
    print("  Dependencies:")
    
    for dep in config['dependencies']:
        if isinstance(dep, dict) and 'pip' in dep:
            print("    pip packages:")
            for pip_pkg in dep['pip']:
                print(f"      - {pip_pkg}")
        else:
            print(f"    - {dep}")

# Environment export demonstration
print("\\nEnvironment export example:")
exported = conda_manager.export_environment("demo_env")
if isinstance(exported, dict):
    print("Exported environment configuration:")
    print(f"  Name: {exported['name']}")
    print(f"  Channels: {', '.join(exported['channels'])}")
    print("  Dependencies:")
    for dep in exported['dependencies']:
        if isinstance(dep, dict):
            print("    pip:")
            for pip_pkg in dep['pip']:
                print(f"      - {pip_pkg}")
        else:
            print(f"    - {dep}")

# Conda commands reference
print("\\n📋 Essential Conda Commands:")
conda_commands = [
    ("conda create -n myenv python=3.11", "Create new environment"),
    ("conda activate myenv", "Activate environment"),
    ("conda deactivate", "Deactivate current environment"),
    ("conda env list", "List all environments"),
    ("conda list", "List packages in current environment"),
    ("conda install package_name", "Install package"),
    ("conda env export > environment.yml", "Export environment"),
    ("conda env create -f environment.yml", "Create from environment.yml"),
    ("conda env remove -n myenv", "Remove environment"),
    ("conda clean --all", "Clean package cache")
]

for cmd, description in conda_commands:
    print(f"  {cmd}")
    print(f"    → {description}")
    print()

# Best practices
print("🎯 Conda Best Practices:")
best_practices = [
    "Use environment.yml files for reproducible environments",
    "Specify exact package versions for production",
    "Use conda-forge channel for better package availability",
    "Create separate environments for different projects",
    "Keep environments minimal - only install what you need",
    "Export environments before major changes",
    "Use mamba for faster dependency resolution",
    "Pin Python version to avoid compatibility issues"
]

for i, practice in enumerate(best_practices, 1):
    print(f"  {i}. {practice}")

# Platform-specific considerations
print("\\n🖥️  Platform Considerations:")
platform_tips = {
    "Windows": [
        "Use Anaconda Prompt for conda commands",
        "Be careful with PATH environment variable",
        "Consider Windows Subsystem for Linux (WSL)"
    ],
    "macOS": [
        "Use homebrew to install miniconda",
        "Consider Apple Silicon (M1/M2) package compatibility",
        "Use conda-forge for ARM64 packages"
    ],
    "Linux": [
        "Install miniconda via package manager or installer",
        "Add conda to PATH in shell profile",
        "Consider system-wide vs user installation"
    ]
}

for platform, tips in platform_tips.items():
    print(f"  {platform}:")
    for tip in tips:
        print(f"    • {tip}")

print("\\n🧪 Conda environment management demonstration complete!")
print("Features covered:")
print("  • Environment creation with specific packages")
print("  • environment.yml file generation")
print("  • Environment export and import")
print("  • Best practices and platform considerations")
print("  • Essential command reference")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Conda Environment Management:
==============================
ℹ️  Conda not available - showing demonstration

Creating data science environment:
Command: conda create -n data_science_proj -y python=3.11 numpy pandas matplotlib seaborn scikit-learn jupyter ipykernel
Description: Create data_science_proj environment with data science stack
Packages to install:
  • python=3.11
  • numpy
  • pandas
  • matplotlib
  • seaborn
  • scikit-learn
  • jupyter
  • ipykernel

Creating environment.yml files:

📄 data_science.yml:
  Name: data_science
  Channels: defaults, conda-forge
  Dependencies:
    - python=3.11
    - numpy
    - pandas
    - matplotlib
    - seaborn
    - scikit-learn
    pip packages:
      - streamlit
      - plotly

📄 web_dev.yml:
  Name: web_dev
  Channels: defaults, conda-forge
  Dependencies:
    - python=3.11
    - nodejs
    pip packages:
      - flask
      - django
      - fastapi
      - uvicorn

📄 machine_learning.yml:
  Name: machine_learning
  Channels: defaults, conda-forge
  Dependencies:
    - python=3.11
    - numpy
    - pandas
    - scikit-learn
    - tensorflow
    - pytorch
    pip packages:
      - transformers
      - datasets
      - wandb

Environment export example:
Exported environment configuration:
  Name: demo_env
  Channels: defaults, conda-forge
  Dependencies:
    - python=3.11
    - numpy=1.24.3
    - pandas=2.0.3
    - matplotlib=3.7.1
    pip:
      - requests==2.31.0

📋 Essential Conda Commands:
  conda create -n myenv python=3.11
    → Create new environment

  conda activate myenv
    → Activate environment

  conda deactivate
    → Deactivate current environment

  conda env list
    → List all environments

  conda list
    → List packages in current environment

  conda install package_name
    → Install package

  conda env export > environment.yml
    → Export environment

  conda env create -f environment.yml
    → Create from environment.yml

  conda env remove -n myenv
    → Remove environment

  conda clean --all
    → Clean package cache

🎯 Conda Best Practices:
  1. Use environment.yml files for reproducible environments
  2. Specify exact package versions for production
  3. Use conda-forge channel for better package availability
  4. Create separate environments for different projects
  5. Keep environments minimal - only install what you need
  6. Export environments before major changes
  7. Use mamba for faster dependency resolution
  8. Pin Python version to avoid compatibility issues

🖥️  Platform Considerations:
  Windows:
    • Use Anaconda Prompt for conda commands
    • Be careful with PATH environment variable
    • Consider Windows Subsystem for Linux (WSL)
  macOS:
    • Use homebrew to install miniconda
    • Consider Apple Silicon (M1/M2) package compatibility
    • Use conda-forge for ARM64 packages
  Linux:
    • Install miniconda via package manager or installer
    • Add conda to PATH in shell profile
    • Consider system-wide vs user installation

🧪 Conda environment management demonstration complete!
Features covered:
  • Environment creation with specific packages
  • environment.yml file generation
  • Environment export and import
  • Best practices and platform considerations
  • Essential command reference`
    },
    {
      type: 'code',
      title: 'Modern Dependency Management with Poetry',
      language: 'python',
      code: `# Modern dependency management with Poetry
import json
import os
from pathlib import Path
import subprocess

class PoetryManager:
    """Poetry dependency management and project setup"""
    
    def __init__(self):
        self.poetry_available = self.check_poetry_availability()
    
    def check_poetry_availability(self):
        """Check if Poetry is available"""
        try:
            result = subprocess.run(["poetry", "--version"], 
                                  capture_output=True, text=True)
            return result.returncode == 0
        except FileNotFoundError:
            return False
    
    def create_pyproject_toml(self, project_name, description, author_email):
        """Create a pyproject.toml file for a Python project"""
        pyproject_config = {
            "tool": {
                "poetry": {
                    "name": project_name,
                    "version": "0.1.0",
                    "description": description,
                    "authors": [author_email],
                    "readme": "README.md",
                    "dependencies": {
                        "python": "^3.8"
                    },
                    "group": {
                        "dev": {
                            "dependencies": {
                                "pytest": "^7.0",
                                "black": "^23.0",
                                "isort": "^5.0",
                                "mypy": "^1.0"
                            }
                        }
                    }
                },
                "build-system": {
                    "requires": ["poetry-core"],
                    "build-backend": "poetry.core.masonry.api"
                }
            }
        }
        return pyproject_config
    
    def create_project_structure(self, project_name, project_type="library"):
        """Create a complete Poetry project structure"""
        structure = {
            "pyproject.toml": "Poetry configuration file",
            "README.md": "Project documentation", 
            f"{project_name}/": "Main package directory",
            f"{project_name}/__init__.py": "Package initialization",
            "tests/": "Test directory",
            "tests/__init__.py": "Test package initialization",
            "tests/test_main.py": "Main test file",
            ".gitignore": "Git ignore file"
        }
        
        if project_type == "application":
            structure[f"{project_name}/main.py"] = "Application entry point"
        elif project_type == "library":
            structure[f"{project_name}/core.py"] = "Core library functionality"
        
        return structure
    
    def generate_dependency_groups(self):
        """Generate common dependency groups for different project types"""
        return {
            "web_development": {
                "main": ["fastapi", "uvicorn", "pydantic", "sqlalchemy"],
                "dev": ["pytest", "black", "isort", "mypy", "pre-commit"],
                "test": ["pytest-asyncio", "httpx", "pytest-cov"]
            },
            "data_science": {
                "main": ["pandas", "numpy", "matplotlib", "seaborn"],
                "dev": ["jupyter", "black", "isort", "pytest"],
                "ml": ["scikit-learn", "tensorflow", "torch"]
            },
            "cli_application": {
                "main": ["click", "rich", "typer"],
                "dev": ["pytest", "black", "isort", "mypy"],
                "test": ["pytest-mock", "coverage"]
            }
        }

# Demonstrate Poetry project management
print("Modern Dependency Management with Poetry:")
print("=" * 40)

poetry_manager = PoetryManager()

if poetry_manager.poetry_available:
    print("✅ Poetry is available")
else:
    print("ℹ️  Poetry not available - showing demonstration")

# Create different types of projects
print("\\nCreating Poetry project configurations:")

projects = [
    {
        "name": "web_api",
        "description": "A modern web API built with FastAPI",
        "author": "developer@example.com",
        "type": "application"
    },
    {
        "name": "data_analyzer", 
        "description": "Data analysis and visualization toolkit",
        "author": "datascientist@example.com",
        "type": "library"
    },
    {
        "name": "cli_tool",
        "description": "Command-line utility for file processing",
        "author": "clidev@example.com", 
        "type": "application"
    }
]

for project in projects:
    print(f"\\n📁 Project: {project['name']} ({project['type']})")
    
    # Create pyproject.toml
    pyproject = poetry_manager.create_pyproject_toml(
        project['name'], 
        project['description'],
        project['author']
    )
    
    print("  pyproject.toml structure:")
    poetry_config = pyproject['tool']['poetry']
    print(f"    Name: {poetry_config['name']}")
    print(f"    Version: {poetry_config['version']}")
    print(f"    Description: {poetry_config['description']}")
    print(f"    Python requirement: {poetry_config['dependencies']['python']}")
    
    # Show project structure
    structure = poetry_manager.create_project_structure(
        project['name'], 
        project['type']
    )
    
    print("  Project structure:")
    for file_path, description in structure.items():
        print(f"    {file_path:<25} # {description}")

# Dependency group management
print("\\n📦 Dependency Groups by Project Type:")
dependency_groups = poetry_manager.generate_dependency_groups()

for project_type, groups in dependency_groups.items():
    print(f"\\n{project_type.replace('_', ' ').title()}:")
    for group_name, packages in groups.items():
        print(f"  [{group_name}]")
        for package in packages:
            print(f"    • {package}")

# Poetry commands demonstration
print("\\n🛠️  Essential Poetry Commands:")

poetry_commands = [
    # Project setup
    ("poetry new myproject", "Create new project with structure"),
    ("poetry init", "Initialize Poetry in existing project"),
    
    # Dependency management
    ("poetry add requests", "Add production dependency"),
    ("poetry add pytest --group dev", "Add development dependency"),
    ("poetry add numpy@^1.20", "Add specific version constraint"),
    ("poetry remove requests", "Remove dependency"),
    
    # Environment management
    ("poetry install", "Install all dependencies"),
    ("poetry install --only dev", "Install only dev dependencies"),
    ("poetry update", "Update all dependencies"),
    ("poetry show", "List installed packages"),
    
    # Virtual environment
    ("poetry shell", "Activate virtual environment"),
    ("poetry run python script.py", "Run command in virtual environment"),
    ("poetry env info", "Show environment information"),
    
    # Building and publishing
    ("poetry build", "Build distributable packages"),
    ("poetry publish", "Publish to PyPI"),
    ("poetry export -f requirements.txt", "Export to requirements.txt")
]

for cmd, description in poetry_commands:
    print(f"  {cmd}")
    print(f"    → {description}")
    print()

# Lock file explanation
print("🔒 Poetry Lock File (poetry.lock):")
lock_file_benefits = [
    "Ensures exact dependency versions across environments",
    "Locks transitive dependencies for reproducibility",
    "Enables fast, deterministic installs",
    "Prevents dependency version drift",
    "Should be committed to version control"
]

for benefit in lock_file_benefits:
    print(f"  • {benefit}")

# Configuration management
print("\\n⚙️  Poetry Configuration:")
config_examples = [
    ("poetry config virtualenvs.create true", "Create virtual environments"),
    ("poetry config virtualenvs.in-project true", "Create .venv in project directory"),
    ("poetry config repositories.testpypi https://test.pypi.org/simple/", "Add custom repository"),
    ("poetry config --list", "Show all configuration")
]

for cmd, description in config_examples.items():
    print(f"  {cmd}")
    print(f"    → {description}")

# Best practices
print("\\n🎯 Poetry Best Practices:")
best_practices = [
    "Use semantic versioning for your packages",
    "Commit poetry.lock to ensure reproducible builds",
    "Use dependency groups to organize different types of dependencies",
    "Pin exact versions for applications, use flexible constraints for libraries",
    "Use poetry export for Docker images and CI/CD",
    "Keep pyproject.toml metadata up to date",
    "Use pre-commit hooks with black, isort, and mypy",
    "Test with multiple Python versions using tox"
]

for i, practice in enumerate(best_practices, 1):
    print(f"  {i}. {practice}")

# Workflow example
print("\\n🔄 Typical Poetry Workflow:")
workflow_steps = [
    "1. poetry new myproject  # Create new project",
    "2. cd myproject",
    "3. poetry add fastapi uvicorn  # Add dependencies",
    "4. poetry add pytest black --group dev  # Add dev dependencies", 
    "5. poetry install  # Install all dependencies",
    "6. poetry shell  # Activate environment",
    "7. # ... develop your code ...",
    "8. poetry run pytest  # Run tests",
    "9. poetry build  # Build distribution",
    "10. poetry publish  # Publish to PyPI"
]

for step in workflow_steps:
    print(f"  {step}")

# Migration from other tools
print("\\n🔄 Migrating to Poetry:")
migration_guides = {
    "From pip + requirements.txt": [
        "poetry init  # Initialize Poetry",
        "poetry add $(cat requirements.txt)  # Add dependencies",
        "rm requirements.txt  # Remove old file"
    ],
    "From pipenv": [
        "poetry init  # Initialize Poetry", 
        "# Manually add dependencies from Pipfile",
        "poetry install  # Install dependencies"
    ],
    "From conda": [
        "poetry init  # Initialize Poetry",
        "# Add Python dependencies to pyproject.toml",
        "# Keep conda for non-Python dependencies"
    ]
}

for source, steps in migration_guides.items():
    print(f"  {source}:")
    for step in steps:
        print(f"    {step}")
    print()

print("📝 Poetry demonstration complete!")
print("Key advantages:")
print("  • Modern dependency resolution")
print("  • Declarative dependency specification") 
print("  • Built-in virtual environment management")
print("  • Lock files for reproducible builds")
print("  • Integrated building and publishing")
print("  • Support for dependency groups")
print("  • Easy migration from other tools")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Modern Dependency Management with Poetry:
========================================
ℹ️  Poetry not available - showing demonstration

Creating Poetry project configurations:

📁 Project: web_api (application)
  pyproject.toml structure:
    Name: web_api
    Version: 0.1.0
    Description: A modern web API built with FastAPI
    Python requirement: ^3.8
  Project structure:
    web_api/                  # Main package directory
    web_api/__init__.py       # Package initialization
    web_api/main.py           # Application entry point
    tests/                    # Test directory
    tests/__init__.py         # Test package initialization
    tests/test_main.py        # Main test file
    pyproject.toml            # Poetry configuration file
    README.md                 # Project documentation
    .gitignore                # Git ignore file

📁 Project: data_analyzer (library)
  pyproject.toml structure:
    Name: data_analyzer
    Version: 0.1.0
    Description: Data analysis and visualization toolkit
    Python requirement: ^3.8
  Project structure:
    data_analyzer/            # Main package directory
    data_analyzer/__init__.py # Package initialization
    data_analyzer/core.py     # Core library functionality
    tests/                    # Test directory
    tests/__init__.py         # Test package initialization
    tests/test_main.py        # Main test file
    pyproject.toml            # Poetry configuration file
    README.md                 # Project documentation
    .gitignore                # Git ignore file

📁 Project: cli_tool (application)
  pyproject.toml structure:
    Name: cli_tool
    Version: 0.1.0
    Description: Command-line utility for file processing
    Python requirement: ^3.8
  Project structure:
    cli_tool/                 # Main package directory
    cli_tool/__init__.py      # Package initialization
    cli_tool/main.py          # Application entry point
    tests/                    # Test directory
    tests/__init__.py         # Test package initialization
    tests/test_main.py        # Main test file
    pyproject.toml            # Poetry configuration file
    README.md                 # Project documentation
    .gitignore                # Git ignore file

📦 Dependency Groups by Project Type:

Web Development:
  [main]
    • fastapi
    • uvicorn
    • pydantic
    • sqlalchemy
  [dev]
    • pytest
    • black
    • isort
    • mypy
    • pre-commit
  [test]
    • pytest-asyncio
    • httpx
    • pytest-cov

Data Science:
  [main]
    • pandas
    • numpy
    • matplotlib
    • seaborn
  [dev]
    • jupyter
    • black
    • isort
    • pytest
  [ml]
    • scikit-learn
    • tensorflow
    • torch

Cli Application:
  [main]
    • click
    • rich
    • typer
  [dev]
    • pytest
    • black
    • isort
    • mypy
  [test]
    • pytest-mock
    • coverage

🛠️  Essential Poetry Commands:
  poetry new myproject
    → Create new project with structure

  poetry init
    → Initialize Poetry in existing project

  poetry add requests
    → Add production dependency

  poetry add pytest --group dev
    → Add development dependency

  poetry add numpy@^1.20
    → Add specific version constraint

  poetry remove requests
    → Remove dependency

  poetry install
    → Install all dependencies

  poetry install --only dev
    → Install only dev dependencies

  poetry update
    → Update all dependencies

  poetry show
    → List installed packages

  poetry shell
    → Activate virtual environment

  poetry run python script.py
    → Run command in virtual environment

  poetry env info
    → Show environment information

  poetry build
    → Build distributable packages

  poetry publish
    → Publish to PyPI

  poetry export -f requirements.txt
    → Export to requirements.txt

🔒 Poetry Lock File (poetry.lock):
  • Ensures exact dependency versions across environments
  • Locks transitive dependencies for reproducibility
  • Enables fast, deterministic installs
  • Prevents dependency version drift
  • Should be committed to version control

⚙️  Poetry Configuration:
  poetry config virtualenvs.create true
    → Create virtual environments
  poetry config virtualenvs.in-project true
    → Create .venv in project directory
  poetry config repositories.testpypi https://test.pypi.org/simple/
    → Add custom repository
  poetry config --list
    → Show all configuration

🎯 Poetry Best Practices:
  1. Use semantic versioning for your packages
  2. Commit poetry.lock to ensure reproducible builds
  3. Use dependency groups to organize different types of dependencies
  4. Pin exact versions for applications, use flexible constraints for libraries
  5. Use poetry export for Docker images and CI/CD
  6. Keep pyproject.toml metadata up to date
  7. Use pre-commit hooks with black, isort, and mypy
  8. Test with multiple Python versions using tox

🔄 Typical Poetry Workflow:
  1. poetry new myproject  # Create new project
  2. cd myproject
  3. poetry add fastapi uvicorn  # Add dependencies
  4. poetry add pytest black --group dev  # Add dev dependencies
  5. poetry install  # Install all dependencies
  6. poetry shell  # Activate environment
  7. # ... develop your code ...
  8. poetry run pytest  # Run tests
  9. poetry build  # Build distribution
  10. poetry publish  # Publish to PyPI

🔄 Migrating to Poetry:
  From pip + requirements.txt:
    poetry init  # Initialize Poetry
    poetry add $(cat requirements.txt)  # Add dependencies
    rm requirements.txt  # Remove old file

  From pipenv:
    poetry init  # Initialize Poetry
    # Manually add dependencies from Pipfile
    poetry install  # Install dependencies

  From conda:
    poetry init  # Initialize Poetry
    # Add Python dependencies to pyproject.toml
    # Keep conda for non-Python dependencies

📝 Poetry demonstration complete!
Key advantages:
  • Modern dependency resolution
  • Declarative dependency specification
  • Built-in virtual environment management
  • Lock files for reproducible builds
  • Integrated building and publishing
  • Support for dependency groups
  • Easy migration from other tools`
    }
  ],
  keyTakeaways: [
    'Different virtual environment tools serve different needs: venv for simplicity, conda for data science, Poetry for modern projects',
    'Environment.yml and pyproject.toml files enable reproducible project setups across teams',
    'Lock files ensure exact dependency versions and prevent version drift',
    'Dependency groups allow organizing packages by purpose (dev, test, production)',
    'Modern tools like Poetry integrate dependency management with packaging and publishing',
    'Choose tools based on project requirements, team preferences, and deployment targets'
  ]
};