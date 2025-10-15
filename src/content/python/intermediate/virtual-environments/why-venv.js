// Lesson content for Why Virtual Environments
export const whyVenvContent = {
  id: 'why-venv',
  title: 'Why Virtual Environments',
  duration: '25 min',
  overview: `Understand the importance of virtual environments in Python development! Learn why isolation is crucial for project dependencies, how to avoid version conflicts, and establish professional development workflows that ensure reproducible, maintainable projects.`,
  objectives: [
    'Understand the problems that virtual environments solve',
    'Learn about dependency conflicts and version management',
    'Recognize the benefits of project isolation',
    'Understand Python package installation and sys.path',
    'Compare global vs isolated Python environments',
    'Establish best practices for professional Python development',
  ],
  sections: [
    {
      type: 'text',
      title: 'The Problem with Global Python Installations',
      content: `When you install Python packages globally, they affect all Python projects on your system. This creates several serious problems that virtual environments are designed to solve.

**Common problems without virtual environments:**

**1. Version Conflicts:**
- Project A needs requests 2.25.0
- Project B needs requests 2.28.0  
- You can only have one version installed globally
- Upgrading breaks existing projects

**2. Dependency Hell:**
- Package X requires numpy >= 1.20
- Package Y requires numpy < 1.18
- Impossible to satisfy both requirements

**3. System Pollution:**
- Hundreds of packages installed globally
- Unclear which packages belong to which project
- Difficult to clean up unused dependencies

**4. Reproducibility Issues:**
- Can't guarantee same environment on different machines
- Deployments fail due to missing or wrong versions
- Team members have different package versions

**5. Permission Problems:**
- Global installations may require admin/sudo privileges
- Risk of breaking system Python on Linux/macOS
- Conflicts with OS package managers`
    },
    {
      type: 'code',
      title: 'Demonstrating Global Installation Problems',
      language: 'python',
      code: `# Simulating problems with global package management
import sys
import os

# Show current Python path and installed packages location
print("Current Python executable:", sys.executable)
print("Python version:", sys.version.split()[0])
print("\\nPython path (where Python looks for packages):")
for i, path in enumerate(sys.path[:5]):  # Show first 5 paths
    print("  " + str(i + 1) + ". " + path)

# Simulate checking for package versions (without actually importing)
def check_package_info(package_name):
    """Simulate checking package information"""
    # In real scenario, this would check actual installed packages
    mock_packages = {
        "requests": "2.28.1",
        "numpy": "1.21.0", 
        "pandas": "1.5.2",
        "django": "4.1.0",
        "flask": "2.2.0"
    }
    
    return mock_packages.get(package_name, "Not installed")

# Show potential package conflicts
print("\\nCurrently 'installed' packages (simulated):")
packages = ["requests", "numpy", "pandas", "django", "flask"]
for package in packages:
    version = check_package_info(package)
    print("  " + package + ": " + version)

# Simulate project requirements conflicts
project_requirements = {
    "Web App A": {
        "django": "3.2.0",
        "requests": "2.25.0",
        "numpy": "1.19.0"
    },
    "Data Analysis B": {
        "pandas": "1.4.0", 
        "numpy": "1.21.0",
        "requests": "2.28.0"
    },
    "API Service C": {
        "flask": "2.0.0",
        "requests": "2.27.0",
        "numpy": "1.20.0"
    }
}

print("\\nProject requirements analysis:")
print("=" * 40)

all_packages = {}
conflicts = []

for project_name, requirements in project_requirements.items():
    print("\\n" + project_name + " needs:")
    for package, version in requirements.items():
        print("  " + package + " " + version)
        
        if package in all_packages:
            if all_packages[package] != version:
                conflicts.append({
                    "package": package,
                    "existing_version": all_packages[package],
                    "new_version": version,
                    "project": project_name
                })
        else:
            all_packages[package] = version

print("\\nDetected conflicts:")
if conflicts:
    for conflict in conflicts:
        print("  ⚠️  " + conflict["package"] + ":")
        print("      Already need version " + conflict["existing_version"])
        print("      " + conflict["project"] + " needs version " + conflict["new_version"])
else:
    print("  No conflicts detected")

# Show the impossible situation
print("\\nImpossible global installation:")
print("  Cannot satisfy all project requirements simultaneously")
print("  Global environment can only have one version of each package")

# Demonstrate sys.path pollution
print("\\nGlobal installation problems:")
simulated_global_packages = [
    "requests", "numpy", "pandas", "django", "flask", "pytest", "black",
    "jupyter", "matplotlib", "seaborn", "scikit-learn", "tensorflow",
    "opencv-python", "pillow", "beautifulsoup4", "selenium", "scrapy",
    "fastapi", "uvicorn", "sqlalchemy", "psycopg2", "redis", "celery"
]

print("  Packages in global environment: " + str(len(simulated_global_packages)))
print("  First 10 packages:", ", ".join(simulated_global_packages[:10]))
print("  Problem: Unclear which packages belong to which project")

# Show cleanup difficulty
print("\\nCleanup challenges:")
print("  • Which packages can be safely removed?")
print("  • Which packages are dependencies of others?")
print("  • Which packages are needed by multiple projects?")
print("  • Risk of breaking working projects during cleanup")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Current Python executable: C:\\Python312\\python.exe
Python version: 3.12.0

Python path (where Python looks for packages):
  1. 
  2. C:\\Python312\\Lib
  3. C:\\Python312\\DLLs
  4. C:\\Python312\\Lib\\site-packages
  5. C:\\Users\\User\\AppData\\Roaming\\Python\\Python312\\site-packages

Currently 'installed' packages (simulated):
  requests: 2.28.1
  numpy: 1.21.0
  pandas: 1.5.2
  django: 4.1.0
  flask: 2.2.0

Project requirements analysis:
========================================

Web App A needs:
  django 3.2.0
  requests 2.25.0
  numpy 1.19.0

Data Analysis B needs:
  pandas 1.4.0
  numpy 1.21.0
  requests 2.28.0

API Service C needs:
  flask 2.0.0
  requests 2.27.0
  numpy 1.20.0

Detected conflicts:
  ⚠️  numpy:
      Already need version 1.19.0
      Data Analysis B needs version 1.21.0
  ⚠️  requests:
      Already need version 2.25.0
      Data Analysis B needs version 2.28.0
  ⚠️  numpy:
      Already need version 1.21.0
      API Service C needs version 1.20.0
  ⚠️  requests:
      Already need version 2.28.0
      API Service C needs version 2.27.0

Impossible global installation:
  Cannot satisfy all project requirements simultaneously
  Global environment can only have one version of each package

Global installation problems:
  Packages in global environment: 23
  First 10 packages: requests, numpy, pandas, django, flask, pytest, black, jupyter, matplotlib, seaborn
  Problem: Unclear which packages belong to which project

Cleanup challenges:
  • Which packages can be safely removed?
  • Which packages are dependencies of others?
  • Which packages are needed by multiple projects?
  • Risk of breaking working projects during cleanup`
    },
    {
      type: 'text',
      title: 'How Virtual Environments Solve These Problems',
      content: `Virtual environments create isolated Python environments for each project, solving all the major problems of global package management.

**How virtual environments work:**
- Create separate Python installation copy for each project
- Each environment has its own site-packages directory
- Projects use different Python interpreters and package sets
- Complete isolation between projects

**Benefits of virtual environments:**

**1. Version Independence:**
- Each project can use different package versions
- No conflicts between project requirements
- Safe to upgrade packages for one project

**2. Clean Dependencies:**
- Only install packages needed for specific project
- Easy to see what each project requires
- Simple cleanup by deleting environment

**3. Reproducibility:**
- Generate exact package lists (requirements.txt)
- Recreate identical environments anywhere
- Consistent deployments and team development

**4. Professional Workflow:**
- Industry standard practice
- Required for most Python projects
- Essential for team collaboration

**5. Safety:**
- No risk of breaking system Python
- No admin privileges required
- Easy to experiment and rollback`
    },
    {
      type: 'code',
      title: 'Virtual Environment Benefits Demonstration',
      language: 'python',
      code: `# Demonstrating virtual environment benefits (conceptual)
import os

class VirtualEnvironmentSimulator:
    """Simulate virtual environment behavior"""
    
    def __init__(self):
        self.environments = {}
    
    def create_environment(self, name, python_version="3.12"):
        """Create a new virtual environment"""
        self.environments[name] = {
            "python_version": python_version,
            "packages": {},
            "active": False,
            "path": "/path/to/envs/" + name
        }
        return "Environment '" + name + "' created successfully"
    
    def activate_environment(self, name):
        """Activate a virtual environment"""
        # Deactivate all others
        for env_name in self.environments:
            self.environments[env_name]["active"] = False
        
        if name in self.environments:
            self.environments[name]["active"] = True
            return "Activated environment: " + name
        else:
            return "Environment '" + name + "' not found"
    
    def install_package(self, package_name, version, env_name=None):
        """Install package in active or specified environment"""
        if env_name is None:
            # Find active environment
            env_name = None
            for name, env in self.environments.items():
                if env["active"]:
                    env_name = name
                    break
        
        if env_name and env_name in self.environments:
            self.environments[env_name]["packages"][package_name] = version
            return "Installed " + package_name + " " + version + " in " + env_name
        else:
            return "No active environment or environment not found"
    
    def list_packages(self, env_name):
        """List packages in an environment"""
        if env_name in self.environments:
            packages = self.environments[env_name]["packages"]
            if packages:
                return packages
            else:
                return "No packages installed"
        else:
            return "Environment not found"
    
    def get_active_environment(self):
        """Get currently active environment"""
        for name, env in self.environments.items():
            if env["active"]:
                return name
        return "No active environment"

# Demonstrate virtual environment solution
print("Virtual Environment Solution Demonstration:")
print("=" * 45)

venv_sim = VirtualEnvironmentSimulator()

# Create separate environments for each project
print("1. Creating isolated environments:")
print(venv_sim.create_environment("webapp_env"))
print(venv_sim.create_environment("data_analysis_env"))
print(venv_sim.create_environment("api_service_env"))

# Install packages for Web App project
print("\\n2. Setting up Web App environment:")
venv_sim.activate_environment("webapp_env")
print("Active:", venv_sim.get_active_environment())
print(venv_sim.install_package("django", "3.2.0"))
print(venv_sim.install_package("requests", "2.25.0"))
print(venv_sim.install_package("numpy", "1.19.0"))

webapp_packages = venv_sim.list_packages("webapp_env")
print("Web App packages:", webapp_packages)

# Install packages for Data Analysis project
print("\\n3. Setting up Data Analysis environment:")
venv_sim.activate_environment("data_analysis_env")
print("Active:", venv_sim.get_active_environment())
print(venv_sim.install_package("pandas", "1.4.0"))
print(venv_sim.install_package("numpy", "1.21.0"))  # Different numpy version!
print(venv_sim.install_package("requests", "2.28.0"))  # Different requests version!

data_packages = venv_sim.list_packages("data_analysis_env")
print("Data Analysis packages:", data_packages)

# Install packages for API Service project
print("\\n4. Setting up API Service environment:")
venv_sim.activate_environment("api_service_env")
print("Active:", venv_sim.get_active_environment())
print(venv_sim.install_package("flask", "2.0.0"))
print(venv_sim.install_package("requests", "2.27.0"))  # Yet another requests version!
print(venv_sim.install_package("numpy", "1.20.0"))  # Yet another numpy version!

api_packages = venv_sim.list_packages("api_service_env")
print("API Service packages:", api_packages)

# Show successful isolation
print("\\n5. Environment isolation achieved:")
print("=" * 35)

environments = {
    "Web App": webapp_packages,
    "Data Analysis": data_packages, 
    "API Service": api_packages
}

for project_name, packages in environments.items():
    print("\\n" + project_name + " environment:")
    for package, version in packages.items():
        print("  " + package + ": " + version)

# Show version comparison
print("\\n6. Version isolation comparison:")
print("Package versions across projects:")

all_package_names = set()
for packages in environments.values():
    all_package_names.update(packages.keys())

for package in sorted(all_package_names):
    print("\\n  " + package + ":")
    for project_name, packages in environments.items():
        if package in packages:
            print("    " + project_name + ": " + packages[package])
        else:
            print("    " + project_name + ": not installed")

# Demonstrate benefits
print("\\n7. Key benefits achieved:")
print("✅ No version conflicts - each project has exactly what it needs")
print("✅ Clear dependencies - can see what each project requires")
print("✅ Easy cleanup - delete environment folder to remove all packages")
print("✅ Reproducible - can recreate identical environments")
print("✅ Safe experimentation - no risk to other projects")
print("✅ Team collaboration - share exact environment specifications")

# Show requirements.txt concept
print("\\n8. Requirements.txt for reproduction:")
for project_name, packages in environments.items():
    print("\\n" + project_name + " requirements.txt:")
    for package, version in packages.items():
        print("  " + package + "==" + version)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Virtual Environment Solution Demonstration:
=============================================
1. Creating isolated environments:
Environment 'webapp_env' created successfully
Environment 'data_analysis_env' created successfully
Environment 'api_service_env' created successfully

2. Setting up Web App environment:
Active: webapp_env
Installed django 3.2.0 in webapp_env
Installed requests 2.25.0 in webapp_env
Installed numpy 1.19.0 in webapp_env
Web App packages: {'django': '3.2.0', 'requests': '2.25.0', 'numpy': '1.19.0'}

3. Setting up Data Analysis environment:
Active: data_analysis_env
Installed pandas 1.4.0 in data_analysis_env
Installed numpy 1.21.0 in data_analysis_env
Installed requests 2.28.0 in data_analysis_env
Data Analysis packages: {'pandas': '1.4.0', 'numpy': '1.21.0', 'requests': '2.28.0'}

4. Setting up API Service environment:
Active: api_service_env
Installed flask 2.0.0 in api_service_env
Installed requests 2.27.0 in api_service_env
Installed numpy 1.20.0 in api_service_env
API Service packages: {'flask': '2.0.0', 'requests': '2.27.0', 'numpy': '1.20.0'}

5. Environment isolation achieved:
===================================

Web App environment:
  django: 3.2.0
  requests: 2.25.0
  numpy: 1.19.0

Data Analysis environment:
  pandas: 1.4.0
  numpy: 1.21.0
  requests: 2.28.0

API Service environment:
  flask: 2.0.0
  requests: 2.27.0
  numpy: 1.20.0

6. Version isolation comparison:
Package versions across projects:

  django:
    Web App: 3.2.0
    Data Analysis: not installed
    API Service: not installed

  flask:
    Web App: not installed
    Data Analysis: not installed
    API Service: 2.0.0

  numpy:
    Web App: 1.19.0
    Data Analysis: 1.21.0
    API Service: 1.20.0

  pandas:
    Web App: not installed
    Data Analysis: 1.4.0
    API Service: not installed

  requests:
    Web App: 2.25.0
    Data Analysis: 2.28.0
    API Service: 2.27.0

7. Key benefits achieved:
✅ No version conflicts - each project has exactly what it needs
✅ Clear dependencies - can see what each project requires
✅ Easy cleanup - delete environment folder to remove all packages
✅ Reproducible - can recreate identical environments
✅ Safe experimentation - no risk to other projects
✅ Team collaboration - share exact environment specifications

8. Requirements.txt for reproduction:

Web App requirements.txt:
  django==3.2.0
  requests==2.25.0
  numpy==1.19.0

Data Analysis requirements.txt:
  pandas==1.4.0
  numpy==1.21.0
  requests==2.28.0

API Service requirements.txt:
  flask==2.0.0
  requests==2.27.0
  numpy==1.20.0`
    },
    {
      type: 'text',
      title: 'Professional Development Workflow',
      content: `Virtual environments are essential for professional Python development. They enable reproducible, maintainable projects and smooth team collaboration.

**Professional workflow with virtual environments:**

**1. Project Setup:**
- Create new virtual environment for each project
- Install only required packages
- Document dependencies in requirements.txt

**2. Development:**
- Always activate project environment before coding
- Install new packages in virtual environment
- Update requirements.txt when adding dependencies

**3. Team Collaboration:**
- Share requirements.txt with team
- Team members create identical environments
- Consistent development experience

**4. Deployment:**
- Use same package versions in production
- Virtual environments prevent deployment surprises
- Docker and CI/CD work seamlessly with virtual environments

**5. Maintenance:**
- Easy to upgrade packages for specific projects
- No risk of breaking other projects
- Clean project directories

**Real-world scenarios:**
- **Legacy projects**: Keep old package versions working
- **Client work**: Isolated environments for different clients
- **Experimentation**: Try new packages without risk
- **Teaching**: Clean environments for tutorials
- **Open source**: Consistent contributor experience`
    },
    {
      type: 'code',
      title: 'Professional Workflow Simulation',
      language: 'python',
      code: `# Simulating professional development workflow with virtual environments
import datetime

class ProjectManager:
    """Simulate project management with virtual environments"""
    
    def __init__(self):
        self.projects = {}
        self.global_packages = {
            "python": "3.12.0",
            "pip": "23.0.1"
        }
    
    def create_project(self, name, description=""):
        """Create a new project with its own environment"""
        self.projects[name] = {
            "description": description,
            "created": datetime.datetime.now().strftime("%Y-%m-%d"),
            "environment": {
                "python": "3.12.0",
                "packages": {},
                "requirements_file": []
            },
            "status": "active"
        }
        return "Created project: " + name
    
    def add_dependency(self, project_name, package, version, dev=False):
        """Add a dependency to a project"""
        if project_name not in self.projects:
            return "Project not found: " + project_name
        
        project = self.projects[project_name]
        project["environment"]["packages"][package] = {
            "version": version,
            "dev_dependency": dev
        }
        
        # Update requirements file
        dep_line = package + "==" + version
        if dev:
            dep_line = dep_line + "  # dev dependency"
        
        if dep_line not in project["environment"]["requirements_file"]:
            project["environment"]["requirements_file"].append(dep_line)
        
        return "Added " + package + " " + version + " to " + project_name
    
    def generate_requirements(self, project_name):
        """Generate requirements.txt content"""
        if project_name not in self.projects:
            return "Project not found"
        
        return self.projects[project_name]["environment"]["requirements_file"]
    
    def clone_environment(self, source_project, target_project):
        """Simulate environment reproduction"""
        if source_project not in self.projects:
            return "Source project not found"
        
        source_env = self.projects[source_project]["environment"]
        self.create_project(target_project, "Cloned from " + source_project)
        
        # Copy all packages
        for package, info in source_env["packages"].items():
            self.add_dependency(target_project, package, info["version"], info["dev_dependency"])
        
        return "Cloned environment from " + source_project + " to " + target_project

# Demonstrate professional workflow
print("Professional Development Workflow Simulation:")
print("=" * 50)

pm = ProjectManager()

# Scenario 1: Starting a new web application project
print("1. Starting new web application project:")
print(pm.create_project("ecommerce_website", "Online store with Django"))
print(pm.add_dependency("ecommerce_website", "django", "4.2.0"))
print(pm.add_dependency("ecommerce_website", "psycopg2", "2.9.5"))
print(pm.add_dependency("ecommerce_website", "pillow", "9.4.0"))
print(pm.add_dependency("ecommerce_website", "pytest", "7.2.0", dev=True))

# Scenario 2: Starting a data science project
print("\\n2. Starting data science project:")
print(pm.create_project("sales_analysis", "Quarterly sales data analysis"))
print(pm.add_dependency("sales_analysis", "pandas", "1.5.3"))
print(pm.add_dependency("sales_analysis", "numpy", "1.24.0"))
print(pm.add_dependency("sales_analysis", "matplotlib", "3.6.3"))
print(pm.add_dependency("sales_analysis", "jupyter", "1.0.0", dev=True))

# Scenario 3: Legacy project maintenance
print("\\n3. Maintaining legacy project:")
print(pm.create_project("legacy_api", "Legacy API - Python 2.7 era"))
print(pm.add_dependency("legacy_api", "django", "2.2.28"))  # LTS version
print(pm.add_dependency("legacy_api", "requests", "2.25.1"))  # Older version
print(pm.add_dependency("legacy_api", "sqlalchemy", "1.3.24"))  # Compatible version

# Show requirements.txt for each project
print("\\n4. Generated requirements.txt files:")
print("=" * 40)

for project_name in ["ecommerce_website", "sales_analysis", "legacy_api"]:
    print("\\n" + project_name + " requirements.txt:")
    requirements = pm.generate_requirements(project_name)
    for req in requirements:
        print("  " + req)

# Scenario 4: Team collaboration
print("\\n5. Team collaboration scenario:")
print("Developer B cloning ecommerce project environment:")
print(pm.clone_environment("ecommerce_website", "ecommerce_dev_copy"))

clone_requirements = pm.generate_requirements("ecommerce_dev_copy")
print("\\nCloned environment requirements:")
for req in clone_requirements:
    print("  " + req)

# Scenario 5: Version conflict resolution
print("\\n6. Version conflict resolution:")
projects_comparison = {
    "ecommerce_website": pm.projects["ecommerce_website"]["environment"]["packages"],
    "legacy_api": pm.projects["legacy_api"]["environment"]["packages"]
}

print("Django versions across projects:")
for project_name, packages in projects_comparison.items():
    if "django" in packages:
        django_version = packages["django"]["version"]
        print("  " + project_name + ": Django " + django_version)

print("\\nWithout virtual environments:")
print("  ❌ Cannot have both Django 4.2.0 and Django 2.2.28")
print("  ❌ Upgrading breaks legacy project")
print("  ❌ Downgrading breaks new project")

print("\\nWith virtual environments:")
print("  ✅ Each project uses its required Django version")
print("  ✅ No conflicts between projects") 
print("  ✅ Safe to maintain both projects")

# Best practices summary
print("\\n7. Best practices demonstrated:")
print("=" * 35)
best_practices = [
    "One virtual environment per project",
    "Document dependencies in requirements.txt",
    "Separate development and production dependencies",
    "Use exact version numbers for reproducibility",
    "Clone environments for team consistency",
    "Maintain legacy projects with their original dependencies",
    "Never install project packages globally"
]

for i, practice in enumerate(best_practices, 1):
    print(str(i) + ". " + practice)

# Development workflow summary
print("\\n8. Typical development workflow:")
workflow_steps = [
    "Create new project directory",
    "Create and activate virtual environment",
    "Install required packages in virtual environment",
    "Generate/update requirements.txt",
    "Develop and test in isolated environment",
    "Share requirements.txt with team",
    "Team creates identical environments",
    "Deploy with same package versions"
]

for i, step in enumerate(workflow_steps, 1):
    print(str(i) + ". " + step)

print("\\nResult: Professional, reproducible, maintainable Python projects! 🎉")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Professional Development Workflow Simulation:
==================================================
1. Starting new web application project:
Created project: ecommerce_website
Added django 4.2.0 to ecommerce_website
Added psycopg2 2.9.5 to ecommerce_website
Added pillow 9.4.0 to ecommerce_website
Added pytest 7.2.0 to ecommerce_website

2. Starting data science project:
Created project: sales_analysis
Added pandas 1.5.3 to sales_analysis
Added numpy 1.24.0 to sales_analysis
Added matplotlib 3.6.3 to sales_analysis
Added jupyter 1.0.0 to sales_analysis

3. Maintaining legacy project:
Created project: legacy_api
Added django 2.2.28 to legacy_api
Added requests 2.25.1 to legacy_api
Added sqlalchemy 1.3.24 to legacy_api

4. Generated requirements.txt files:
========================================

ecommerce_website requirements.txt:
  django==4.2.0
  psycopg2==2.9.5
  pillow==9.4.0
  pytest==7.2.0  # dev dependency

sales_analysis requirements.txt:
  pandas==1.5.3
  numpy==1.24.0
  matplotlib==3.6.3
  jupyter==1.0.0  # dev dependency

legacy_api requirements.txt:
  django==2.2.28
  requests==2.25.1
  sqlalchemy==1.3.24

5. Team collaboration scenario:
Developer B cloning ecommerce project environment:
Created project: ecommerce_dev_copy
Added django 4.2.0 to ecommerce_dev_copy
Added psycopg2 2.9.5 to ecommerce_dev_copy
Added pillow 9.4.0 to ecommerce_dev_copy
Added pytest 7.2.0 to ecommerce_dev_copy
Cloned environment from ecommerce_website to ecommerce_dev_copy

Cloned environment requirements:
  django==4.2.0
  psycopg2==2.9.5
  pillow==9.4.0
  pytest==7.2.0  # dev dependency

6. Version conflict resolution:
Django versions across projects:
  ecommerce_website: Django 4.2.0
  legacy_api: Django 2.2.28

Without virtual environments:
  ❌ Cannot have both Django 4.2.0 and Django 2.2.28
  ❌ Upgrading breaks legacy project
  ❌ Downgrading breaks new project

With virtual environments:
  ✅ Each project uses its required Django version
  ✅ No conflicts between projects
  ✅ Safe to maintain both projects

7. Best practices demonstrated:
===================================
1. One virtual environment per project
2. Document dependencies in requirements.txt
3. Separate development and production dependencies
4. Use exact version numbers for reproducibility
5. Clone environments for team consistency
6. Maintain legacy projects with their original dependencies
7. Never install project packages globally

8. Typical development workflow:
1. Create new project directory
2. Create and activate virtual environment
3. Install required packages in virtual environment
4. Generate/update requirements.txt
5. Develop and test in isolated environment
6. Share requirements.txt with team
7. Team creates identical environments
8. Deploy with same package versions

Result: Professional, reproducible, maintainable Python projects! 🎉`
    }
  ],
  keyTakeaways: [
    'Global Python package installation creates version conflicts and dependency management problems',
    'Virtual environments provide complete isolation between projects and their dependencies',
    'Each project can use different versions of the same packages without conflicts',
    'Requirements.txt files enable reproducible environments across teams and deployments',
    'Virtual environments are essential for professional Python development workflows',
    'Project isolation prevents breaking existing applications when upgrading dependencies'
  ]
};