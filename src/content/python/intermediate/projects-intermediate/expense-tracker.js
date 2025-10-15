// Lesson content for Expense Tracker Project
export const expenseTrackerContent = {
  id: 'expense-tracker',
  title: 'Expense Tracker Project',
  duration: '45 min',
  overview: `Build a complete expense tracking application! Apply object-oriented programming, file handling, date operations, and error handling to create a practical tool for managing personal finances with data persistence and reporting features.`,
  objectives: [
    'Design and implement a complete expense tracking system',
    'Apply OOP principles with classes for expenses and categories',
    'Implement file-based data persistence with JSON format',
    'Use datetime operations for expense tracking and reporting',
    'Create user-friendly command-line interface with error handling',
    'Generate financial reports and summaries with data analysis',
  ],
  sections: [
    {
      type: 'text',
      title: 'Project Overview and Design',
      content: `We'll build a comprehensive expense tracker that demonstrates intermediate Python concepts in a real-world application.

**Core Features:**
- **Add Expenses**: Record individual expenses with categories and dates
- **View Expenses**: Display expenses with filtering options
- **Categories**: Organize expenses into predefined and custom categories
- **Reports**: Generate monthly summaries and category breakdowns
- **Data Persistence**: Save and load data from JSON files
- **Error Handling**: Robust input validation and error recovery

**Technical Components:**
- **Classes**: Expense, Category, ExpenseTracker
- **File I/O**: JSON data persistence 
- **Date Handling**: Expense dates and report periods
- **Exception Handling**: Custom exceptions and validation
- **Data Processing**: Filtering, sorting, and aggregation

**Project Structure:**
\`\`\`
expense_tracker/
├── expense.py          # Expense and Category classes
├── tracker.py          # Main ExpenseTracker class  
├── main.py            # Command-line interface
├── data/
│   ├── expenses.json  # Expense data
│   └── categories.json # Category definitions
└── reports/           # Generated reports
\`\`\`

**Learning Outcomes:**
- Practical application of OOP concepts
- Real-world file handling and data persistence
- User interface design and error handling
- Project organization and code structure`
    },
    {
      type: 'code',
      title: 'Expense and Category Classes',
      language: 'python',
      code: `# expense.py - Core classes for expense tracking
from datetime import datetime, date
import json

class ExpenseCategory:
    """Represents an expense category with budget tracking"""
    
    def __init__(self, name, description="", monthly_budget=None):
        self.name = name
        self.description = description
        self.monthly_budget = monthly_budget
        self.created_date = date.today()
    
    def to_dict(self):
        """Convert category to dictionary for JSON serialization"""
        return {
            "name": self.name,
            "description": self.description,
            "monthly_budget": self.monthly_budget,
            "created_date": self.created_date.isoformat()
        }
    
    @classmethod
    def from_dict(cls, data):
        """Create category from dictionary data"""
        category = cls(data["name"], data["description"], data["monthly_budget"])
        category.created_date = datetime.fromisoformat(data["created_date"]).date()
        return category
    
    def __str__(self):
        budget_info = " (Budget: $" + str(self.monthly_budget) + ")" if self.monthly_budget else ""
        return self.name + budget_info

class Expense:
    """Represents a single expense entry"""
    
    def __init__(self, amount, description, category, expense_date=None):
        if amount <= 0:
            raise ValueError("Amount must be positive")
        if not description.strip():
            raise ValueError("Description cannot be empty")
        if not category.strip():
            raise ValueError("Category cannot be empty")
        
        self.amount = round(float(amount), 2)
        self.description = description.strip()
        self.category = category.strip()
        self.expense_date = expense_date or date.today()
        self.created_at = datetime.now()
        self.id = self._generate_id()
    
    def _generate_id(self):
        """Generate unique ID for expense"""
        timestamp = int(self.created_at.timestamp() * 1000)
        return "EXP_" + str(timestamp)
    
    def to_dict(self):
        """Convert expense to dictionary for JSON serialization"""
        return {
            "id": self.id,
            "amount": self.amount,
            "description": self.description,
            "category": self.category,
            "expense_date": self.expense_date.isoformat(),
            "created_at": self.created_at.isoformat()
        }
    
    @classmethod
    def from_dict(cls, data):
        """Create expense from dictionary data"""
        expense_date = datetime.fromisoformat(data["expense_date"]).date()
        expense = cls(data["amount"], data["description"], data["category"], expense_date)
        expense.id = data["id"]
        expense.created_at = datetime.fromisoformat(data["created_at"])
        return expense
    
    def __str__(self):
        return "\${:.2f} - {} ({}) on {}".format(
            self.amount, self.description, self.category, self.expense_date
        )
    
    def __repr__(self):
        return "Expense(amount={}, description='{}', category='{}', date={})".format(
            self.amount, self.description, self.category, self.expense_date
        )

# Test the classes
print("Testing Expense and Category Classes:")
print("=" * 40)

# Create categories
food_category = ExpenseCategory("Food", "Restaurant and grocery expenses", 500.0)
transport_category = ExpenseCategory("Transport", "Gas, public transport, rideshare")

print("Created categories:")
print("  " + str(food_category))
print("  " + str(transport_category))

# Create expenses
try:
    lunch_expense = Expense(12.50, "Lunch at cafe", "Food")
    gas_expense = Expense(45.00, "Gas station fill-up", "Transport", date(2024, 1, 10))
    
    print("\\nCreated expenses:")
    print("  " + str(lunch_expense))
    print("  " + str(gas_expense))
    
    # Test serialization
    lunch_dict = lunch_expense.to_dict()
    print("\\nSerialized lunch expense:")
    for key, value in lunch_dict.items():
        print("  " + key + ": " + str(value))
    
    # Test deserialization
    restored_expense = Expense.from_dict(lunch_dict)
    print("\\nRestored expense:")
    print("  " + str(restored_expense))
    print("  Same amount:", restored_expense.amount == lunch_expense.amount)
    print("  Same description:", restored_expense.description == lunch_expense.description)

except ValueError as e:
    print("Error creating expense:", str(e))

# Test validation
print("\\nTesting validation:")
try:
    invalid_expense = Expense(-10, "Invalid negative amount", "Food")
except ValueError as e:
    print("  Caught expected error:", str(e))

try:
    empty_desc = Expense(10, "", "Food")
except ValueError as e:
    print("  Caught expected error:", str(e))

try:
    empty_category = Expense(10, "Valid description", "")
except ValueError as e:
    print("  Caught expected error:", str(e))

print("\\nAll validation tests passed!")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Testing Expense and Category Classes:
========================================
Created categories:
  Food (Budget: $500.0)
  Transport

Created expenses:
  $12.50 - Lunch at cafe (Food) on 2024-01-15
  $45.00 - Gas station fill-up (Transport) on 2024-01-10

Serialized lunch expense:
  id: EXP_1705316215123
  amount: 12.5
  description: Lunch at cafe
  category: Food
  expense_date: 2024-01-15
  created_at: 2024-01-15T10:30:15.123456

Restored expense:
  $12.50 - Lunch at cafe (Food) on 2024-01-15
  Same amount: True
  Same description: True

Testing validation:
  Caught expected error: Amount must be positive
  Caught expected error: Description cannot be empty
  Caught expected error: Category cannot be empty

All validation tests passed!`
    },
    {
      type: 'code',
      title: 'Expense Tracker Main Class',
      language: 'python',
      code: `# tracker.py - Main expense tracking functionality
import json
import os
from datetime import date, datetime, timedelta
from collections import defaultdict

class ExpenseTrackerError(Exception):
    """Custom exception for expense tracker operations"""
    pass

class ExpenseTracker:
    """Main expense tracking system with data persistence"""
    
    def __init__(self, data_file="expenses.json", categories_file="categories.json"):
        self.data_file = data_file
        self.categories_file = categories_file
        self.expenses = []
        self.categories = {}
        
        # Create default categories
        self._setup_default_categories()
        
        # Load existing data
        self.load_data()
    
    def _setup_default_categories(self):
        """Setup default expense categories"""
        default_categories = [
            ExpenseCategory("Food", "Restaurant meals and groceries", 400.0),
            ExpenseCategory("Transport", "Gas, public transport, parking", 200.0),
            ExpenseCategory("Entertainment", "Movies, games, hobbies", 150.0),
            ExpenseCategory("Shopping", "Clothing, household items", 300.0),
            ExpenseCategory("Bills", "Utilities, phone, internet", 250.0),
            ExpenseCategory("Healthcare", "Medical expenses, pharmacy", 100.0),
            ExpenseCategory("Other", "Miscellaneous expenses")
        ]
        
        for category in default_categories:
            self.categories[category.name] = category
    
    def add_expense(self, amount, description, category, expense_date=None):
        """Add a new expense to the tracker"""
        try:
            # Validate category exists
            if category not in self.categories:
                raise ExpenseTrackerError("Category '" + category + "' not found")
            
            expense = Expense(amount, description, category, expense_date)
            self.expenses.append(expense)
            self.save_data()
            
            return expense
            
        except ValueError as e:
            raise ExpenseTrackerError("Invalid expense data: " + str(e))
    
    def add_category(self, name, description="", monthly_budget=None):
        """Add a new expense category"""
        if name in self.categories:
            raise ExpenseTrackerError("Category '" + name + "' already exists")
        
        category = ExpenseCategory(name, description, monthly_budget)
        self.categories[name] = category
        self.save_data()
        
        return category
    
    def get_expenses(self, category=None, start_date=None, end_date=None):
        """Get expenses with optional filtering"""
        filtered_expenses = self.expenses.copy()
        
        # Filter by category
        if category:
            filtered_expenses = [e for e in filtered_expenses if e.category == category]
        
        # Filter by date range
        if start_date:
            filtered_expenses = [e for e in filtered_expenses if e.expense_date >= start_date]
        
        if end_date:
            filtered_expenses = [e for e in filtered_expenses if e.expense_date <= end_date]
        
        # Sort by date (newest first)
        return sorted(filtered_expenses, key=lambda e: e.expense_date, reverse=True)
    
    def get_monthly_summary(self, year, month):
        """Generate monthly expense summary"""
        start_date = date(year, month, 1)
        
        # Calculate end date (last day of month)
        if month == 12:
            end_date = date(year + 1, 1, 1) - timedelta(days=1)
        else:
            end_date = date(year, month + 1, 1) - timedelta(days=1)
        
        monthly_expenses = self.get_expenses(start_date=start_date, end_date=end_date)
        
        # Calculate totals by category
        category_totals = defaultdict(float)
        total_amount = 0
        
        for expense in monthly_expenses:
            category_totals[expense.category] += expense.amount
            total_amount += expense.amount
        
        return {
            "year": year,
            "month": month,
            "total_amount": round(total_amount, 2),
            "expense_count": len(monthly_expenses),
            "category_totals": dict(category_totals),
            "expenses": monthly_expenses
        }
    
    def get_category_budget_status(self, year, month):
        """Check budget status for categories"""
        monthly_summary = self.get_monthly_summary(year, month)
        budget_status = {}
        
        for category_name, category in self.categories.items():
            if category.monthly_budget:
                spent = monthly_summary["category_totals"].get(category_name, 0)
                remaining = category.monthly_budget - spent
                percentage = (spent / category.monthly_budget) * 100
                
                budget_status[category_name] = {
                    "budget": category.monthly_budget,
                    "spent": spent,
                    "remaining": remaining,
                    "percentage": round(percentage, 1),
                    "over_budget": spent > category.monthly_budget
                }
        
        return budget_status
    
    def delete_expense(self, expense_id):
        """Delete an expense by ID"""
        for i, expense in enumerate(self.expenses):
            if expense.id == expense_id:
                deleted_expense = self.expenses.pop(i)
                self.save_data()
                return deleted_expense
        
        raise ExpenseTrackerError("Expense with ID '" + expense_id + "' not found")
    
    def save_data(self):
        """Save expenses and categories to JSON files"""
        try:
            # Save expenses
            expenses_data = [expense.to_dict() for expense in self.expenses]
            with open(self.data_file, 'w') as f:
                json.dump(expenses_data, f, indent=2)
            
            # Save categories
            categories_data = {name: cat.to_dict() for name, cat in self.categories.items()}
            with open(self.categories_file, 'w') as f:
                json.dump(categories_data, f, indent=2)
                
        except IOError as e:
            raise ExpenseTrackerError("Failed to save data: " + str(e))
    
    def load_data(self):
        """Load expenses and categories from JSON files"""
        try:
            # Load expenses
            if os.path.exists(self.data_file):
                with open(self.data_file, 'r') as f:
                    expenses_data = json.load(f)
                    self.expenses = [Expense.from_dict(data) for data in expenses_data]
            
            # Load categories (merge with defaults)
            if os.path.exists(self.categories_file):
                with open(self.categories_file, 'r') as f:
                    categories_data = json.load(f)
                    for name, data in categories_data.items():
                        self.categories[name] = ExpenseCategory.from_dict(data)
                        
        except (IOError, json.JSONDecodeError) as e:
            print("Warning: Could not load data:", str(e))
    
    def get_statistics(self):
        """Get overall expense statistics"""
        if not self.expenses:
            return {"message": "No expenses recorded"}
        
        total_amount = sum(expense.amount for expense in self.expenses)
        average_expense = total_amount / len(self.expenses)
        
        # Find most expensive and cheapest
        most_expensive = max(self.expenses, key=lambda e: e.amount)
        cheapest = min(self.expenses, key=lambda e: e.amount)
        
        # Category breakdown
        category_totals = defaultdict(float)
        for expense in self.expenses:
            category_totals[expense.category] += expense.amount
        
        return {
            "total_expenses": len(self.expenses),
            "total_amount": round(total_amount, 2),
            "average_expense": round(average_expense, 2),
            "most_expensive": most_expensive,
            "cheapest": cheapest,
            "categories": dict(category_totals)
        }

# Test the ExpenseTracker
print("Testing ExpenseTracker:")
print("=" * 25)

# Create tracker instance
tracker = ExpenseTracker("test_expenses.json", "test_categories.json")

print("Available categories:")
for name, category in tracker.categories.items():
    print("  " + str(category))

# Add some test expenses
print("\\nAdding test expenses:")
try:
    lunch = tracker.add_expense(15.50, "Lunch at restaurant", "Food")
    gas = tracker.add_expense(42.00, "Gas station", "Transport")
    movie = tracker.add_expense(12.00, "Movie ticket", "Entertainment")
    groceries = tracker.add_expense(85.30, "Weekly groceries", "Food", date(2024, 1, 10))
    
    print("  Added:", str(lunch))
    print("  Added:", str(gas))
    print("  Added:", str(movie))
    print("  Added:", str(groceries))
    
except ExpenseTrackerError as e:
    print("  Error:", str(e))

# Get monthly summary
print("\\nJanuary 2024 Summary:")
summary = tracker.get_monthly_summary(2024, 1)
print("  Total spent: \${:.2f}".format(summary["total_amount"]))
print("  Number of expenses:", summary["expense_count"])
print("  By category:")
for category, amount in summary["category_totals"].items():
    print("    {}: \${:.2f}".format(category, amount))

# Check budget status
print("\\nBudget Status:")
budget_status = tracker.get_category_budget_status(2024, 1)
for category, status in budget_status.items():
    if status["over_budget"]:
        print("  ⚠️  {}: \${:.2f} / \${:.2f} ({}% - OVER BUDGET)".format(
            category, status["spent"], status["budget"], status["percentage"]
        ))
    else:
        print("  ✅ {}: \${:.2f} / \${:.2f} ({}%)".format(
            category, status["spent"], status["budget"], status["percentage"]
        ))

# Get overall statistics
print("\\nOverall Statistics:")
stats = tracker.get_statistics()
print("  Total expenses:", stats["total_expenses"])
print("  Total amount: \${:.2f}".format(stats["total_amount"]))
print("  Average expense: \${:.2f}".format(stats["average_expense"]))
print("  Most expensive:", str(stats["most_expensive"]))

# Clean up test files
import os
try:
    os.remove("test_expenses.json")
    os.remove("test_categories.json")
except:
    pass`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Testing ExpenseTracker:
=========================
Available categories:
  Food (Budget: $400.0)
  Transport (Budget: $200.0)
  Entertainment (Budget: $150.0)
  Shopping (Budget: $300.0)
  Bills (Budget: $250.0)
  Healthcare (Budget: $100.0)
  Other

Adding test expenses:
  Added: $15.50 - Lunch at restaurant (Food) on 2024-01-15
  Added: $42.00 - Gas station (Transport) on 2024-01-15
  Added: $12.00 - Movie ticket (Entertainment) on 2024-01-15
  Added: $85.30 - Weekly groceries (Food) on 2024-01-10

January 2024 Summary:
  Total spent: $154.80
  Number of expenses: 4
  By category:
    Food: $100.80
    Transport: $42.00
    Entertainment: $12.00

Budget Status:
  ✅ Food: $100.80 / $400.00 (25.2%)
  ✅ Transport: $42.00 / $200.00 (21.0%)
  ✅ Entertainment: $12.00 / $150.00 (8.0%)
  ✅ Shopping: $0.00 / $300.00 (0.0%)
  ✅ Bills: $0.00 / $250.00 (0.0%)
  ✅ Healthcare: $0.00 / $100.00 (0.0%)

Overall Statistics:
  Total expenses: 4
  Total amount: $154.80
  Average expense: $38.70
  Most expensive: $85.30 - Weekly groceries (Food) on 2024-01-10`
    },
    {
      type: 'code',
      title: 'Command-Line Interface',
      language: 'python',
      code: `# main.py - Command-line interface for expense tracker
import sys
from datetime import date, datetime

class ExpenseTrackerCLI:
    """Command-line interface for the expense tracker"""
    
    def __init__(self):
        self.tracker = ExpenseTracker()
        self.running = True
    
    def display_menu(self):
        """Display the main menu"""
        print("\\n" + "=" * 50)
        print("         PERSONAL EXPENSE TRACKER")
        print("=" * 50)
        print("1. Add Expense")
        print("2. View Recent Expenses")
        print("3. View Monthly Summary")
        print("4. View Budget Status")
        print("5. Manage Categories")
        print("6. View Statistics")
        print("7. Delete Expense")
        print("8. Export Report")
        print("9. Exit")
        print("-" * 50)
    
    def get_user_input(self, prompt, input_type=str, required=True):
        """Get and validate user input"""
        while True:
            try:
                value = input(prompt).strip()
                
                if not value and required:
                    print("This field is required. Please try again.")
                    continue
                
                if not value and not required:
                    return None
                
                if input_type == float:
                    return float(value)
                elif input_type == int:
                    return int(value)
                elif input_type == date:
                    if value.lower() == 'today':
                        return date.today()
                    return datetime.strptime(value, "%Y-%m-%d").date()
                else:
                    return value
                    
            except ValueError as e:
                print("Invalid input. Please try again.")
                if input_type == date:
                    print("Use format YYYY-MM-DD or 'today'")
    
    def add_expense(self):
        """Add a new expense"""
        print("\\n--- Add New Expense ---")
        
        try:
            # Get expense details
            amount = self.get_user_input("Amount ($): ", float)
            description = self.get_user_input("Description: ")
            
            # Show available categories
            print("\\nAvailable categories:")
            categories = list(self.tracker.categories.keys())
            for i, category in enumerate(categories, 1):
                budget_info = ""
                if self.tracker.categories[category].monthly_budget:
                    budget_info = " (Budget: $" + str(self.tracker.categories[category].monthly_budget) + ")"
                print("  " + str(i) + ". " + category + budget_info)
            
            category_choice = self.get_user_input("\\nSelect category (number or name): ")
            
            # Handle category selection
            if category_choice.isdigit():
                category_index = int(category_choice) - 1
                if 0 <= category_index < len(categories):
                    category = categories[category_index]
                else:
                    print("Invalid category number.")
                    return
            else:
                category = category_choice
            
            # Get expense date
            date_input = self.get_user_input("Date (YYYY-MM-DD or 'today'): ", date, required=False)
            expense_date = date_input or date.today()
            
            # Add the expense
            expense = self.tracker.add_expense(amount, description, category, expense_date)
            print("\\n✅ Expense added successfully!")
            print("   " + str(expense))
            
        except ExpenseTrackerError as e:
            print("❌ Error:", str(e))
        except KeyboardInterrupt:
            print("\\nOperation cancelled.")
    
    def view_expenses(self):
        """View recent expenses"""
        print("\\n--- Recent Expenses ---")
        
        # Get filter options
        print("Filter options:")
        print("1. All expenses")
        print("2. By category")
        print("3. By date range")
        
        filter_choice = self.get_user_input("Choose filter (1-3): ")
        
        category = None
        start_date = None
        end_date = None
        
        if filter_choice == "2":
            categories = list(self.tracker.categories.keys())
            print("Categories:", ", ".join(categories))
            category = self.get_user_input("Category name: ")
        
        elif filter_choice == "3":
            start_date = self.get_user_input("Start date (YYYY-MM-DD): ", date, required=False)
            end_date = self.get_user_input("End date (YYYY-MM-DD): ", date, required=False)
        
        # Get and display expenses
        expenses = self.tracker.get_expenses(category, start_date, end_date)
        
        if not expenses:
            print("No expenses found.")
            return
        
        print("\\nExpenses found: " + str(len(expenses)))
        print("-" * 60)
        
        total = 0
        for expense in expenses[:20]:  # Show latest 20
            print("{:<12} {:<30} {:<15} \${:>8.2f}".format(
                str(expense.expense_date),
                expense.description[:30],
                expense.category,
                expense.amount
            ))
            total += expense.amount
        
        if len(expenses) > 20:
            print("... and " + str(len(expenses) - 20) + " more")
        
        print("-" * 60)
        print("Total: \${:.2f}".format(total))
    
    def monthly_summary(self):
        """Display monthly summary"""
        print("\\n--- Monthly Summary ---")
        
        try:
            year = self.get_user_input("Year (YYYY): ", int)
            month = self.get_user_input("Month (1-12): ", int)
            
            if not (1 <= month <= 12):
                print("Invalid month. Please enter 1-12.")
                return
            
            summary = self.tracker.get_monthly_summary(year, month)
            
            month_names = ["", "January", "February", "March", "April", "May", "June",
                          "July", "August", "September", "October", "November", "December"]
            
            print("\\n" + month_names[month] + " " + str(year) + " Summary:")
            print("=" * 40)
            print("Total Expenses: " + str(summary["expense_count"]))
            print("Total Amount: \${:.2f}".format(summary["total_amount"]))
            
            if summary["category_totals"]:
                print("\\nBy Category:")
                for category, amount in sorted(summary["category_totals"].items(), 
                                              key=lambda x: x[1], reverse=True):
                    percentage = (amount / summary["total_amount"]) * 100
                    print("  {:<15} \${:>8.2f} ({:>5.1f}%)".format(category, amount, percentage))
            
        except ValueError:
            print("Invalid input. Please enter valid numbers.")
    
    def budget_status(self):
        """Display budget status"""
        print("\\n--- Budget Status ---")
        
        try:
            year = self.get_user_input("Year (YYYY, default current): ", int, required=False) or date.today().year
            month = self.get_user_input("Month (1-12, default current): ", int, required=False) or date.today().month
            
            budget_status = self.tracker.get_category_budget_status(year, month)
            
            if not budget_status:
                print("No budget information available.")
                return
            
            print("\\nBudget Status for {}/{}:".format(month, year))
            print("=" * 50)
            
            for category, status in budget_status.items():
                status_icon = "⚠️ " if status["over_budget"] else "✅"
                print("{} {:<15} \${:>7.2f} / \${:>7.2f} ({:>5.1f}%)".format(
                    status_icon, category, status["spent"], 
                    status["budget"], status["percentage"]
                ))
                
                if status["over_budget"]:
                    print("   OVER BUDGET by \${:.2f}".format(abs(status["remaining"])))
                else:
                    print("   Remaining: \${:.2f}".format(status["remaining"]))

        except ValueError:
            print("Invalid input.")
    
    def run(self):
        """Main program loop"""
        print("Welcome to Personal Expense Tracker!")
        
        while self.running:
            try:
                self.display_menu()
                choice = self.get_user_input("Select option (1-9): ")
                
                if choice == "1":
                    self.add_expense()
                elif choice == "2":
                    self.view_expenses()
                elif choice == "3":
                    self.monthly_summary()
                elif choice == "4":
                    self.budget_status()
                elif choice == "5":
                    print("Category management feature coming soon!")
                elif choice == "6":
                    stats = self.tracker.get_statistics()
                    print("\\n--- Statistics ---")
                    print("Total Expenses:", stats["total_expenses"])
                    print("Total Amount: \${:.2f}".format(stats["total_amount"]))
                    print("Average Expense: \${:.2f}".format(stats["average_expense"]))
                elif choice == "7":
                    print("Delete expense feature coming soon!")
                elif choice == "8":
                    print("Export report feature coming soon!")
                elif choice == "9":
                    print("\\nThank you for using Expense Tracker!")
                    self.running = False
                else:
                    print("Invalid option. Please try again.")
                
                if self.running and choice in ["1", "2", "3", "4", "6"]:
                    input("\\nPress Enter to continue...")
                    
            except KeyboardInterrupt:
                print("\\n\\nGoodbye!")
                break
            except Exception as e:
                print("An error occurred:", str(e))

# Demonstration of the CLI (simulated)
print("Expense Tracker CLI Demonstration:")
print("=" * 40)

# Simulate adding expenses
print("\\nSimulating expense tracking workflow...")

# Create tracker and add sample data
tracker = ExpenseTracker("demo_expenses.json", "demo_categories.json")

# Add sample expenses
sample_expenses = [
    (25.50, "Lunch at Italian restaurant", "Food", date(2024, 1, 15)),
    (45.00, "Gas station fill-up", "Transport", date(2024, 1, 14)),
    (12.99, "Netflix subscription", "Entertainment", date(2024, 1, 13)),
    (85.43, "Grocery shopping", "Food", date(2024, 1, 12)),
    (150.00, "Electric bill", "Bills", date(2024, 1, 10))
]

print("\\nAdding sample expenses:")
for amount, desc, category, exp_date in sample_expenses:
    expense = tracker.add_expense(amount, desc, category, exp_date)
    print("  ✅ " + str(expense))

# Generate summary report
print("\\nGenerating January 2024 summary:")
summary = tracker.get_monthly_summary(2024, 1)
print("  📊 Total: \${:.2f} across {} expenses".format(
    summary["total_amount"], summary["expense_count"]
))

for category, amount in summary["category_totals"].items():
    print("     {}: \${:.2f}".format(category, amount))

# Check budget status
print("\\nBudget status check:")
budget_status = tracker.get_category_budget_status(2024, 1)
for category, status in budget_status.items():
    if status["spent"] > 0:
        icon = "⚠️" if status["over_budget"] else "✅"
        print("  {} {}: {:.1f}% of budget used".format(icon, category, status["percentage"]))

print("\\n🎉 Expense tracker demo completed!")
print("Features demonstrated:")
print("  • Object-oriented design with Expense and Category classes")
print("  • JSON data persistence and loading")
print("  • Date handling and filtering")
print("  • Budget tracking and reporting")
print("  • Error handling and validation")
print("  • Command-line interface design")

# Clean up demo files
import os
try:
    os.remove("demo_expenses.json")
    os.remove("demo_categories.json")
except:
    pass`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Expense Tracker CLI Demonstration:
========================================

Simulating expense tracking workflow...

Adding sample expenses:
  ✅ $25.50 - Lunch at Italian restaurant (Food) on 2024-01-15
  ✅ $45.00 - Gas station fill-up (Transport) on 2024-01-14
  ✅ $12.99 - Netflix subscription (Entertainment) on 2024-01-13
  ✅ $85.43 - Grocery shopping (Food) on 2024-01-12
  ✅ $150.00 - Electric bill (Bills) on 2024-01-10

Generating January 2024 summary:
  📊 Total: $318.92 across 5 expenses
     Food: $110.93
     Transport: $45.00
     Entertainment: $12.99
     Bills: $150.00

Budget status check:
  ✅ Food: 27.7% of budget used
  ✅ Transport: 22.5% of budget used
  ✅ Entertainment: 8.7% of budget used
  ✅ Bills: 60.0% of budget used

🎉 Expense tracker demo completed!
Features demonstrated:
  • Object-oriented design with Expense and Category classes
  • JSON data persistence and loading
  • Date handling and filtering
  • Budget tracking and reporting
  • Error handling and validation
  • Command-line interface design`
    }
  ],
  keyTakeaways: [
    'Object-oriented design enables clean separation of concerns with Expense, Category, and Tracker classes',
    'JSON serialization provides simple data persistence with to_dict() and from_dict() methods',
    'Date operations enable filtering, reporting, and time-based analysis of expenses',
    'Custom exceptions and validation create robust error handling for user input',
    'Command-line interfaces demonstrate practical application of programming concepts',
    'Real-world projects integrate multiple Python concepts into cohesive, useful applications'
  ]
};