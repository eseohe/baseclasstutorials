export const expenseTrackerContent = {
  id: 'expense-tracker',
  title: 'Expense Tracker Project',
  duration: '45 min',
  overview: `Build a practical expense tracker! Apply object-oriented programming, file handling, and date operations to manage personal finances with data persistence and reporting.`,
  objectives: [
    'Design and implement an expense tracking system',
    'Use OOP with classes for expenses and categories',
    'Persist data with JSON files',
    'Work with dates for tracking and reporting',
    'Create a simple command-line interface',
    'Generate reports and summaries',
  ],
  sections: [
    {
      type: 'text',
      title: 'Project Overview',
      content: `We'll build an expense tracker that lets you add expenses, organize them by category, and generate reports. You'll learn OOP, file I/O, and date handling in a real-world context.

**Features:**
- Add and view expenses
- Organize by category
- Save/load data with JSON
- Generate monthly summaries
- Simple CLI for user interaction`
    },
    {
      type: 'text',
      title: 'Step 1: The ExpenseCategory Class',
      content: `Let's start by defining a class for expense categories. Each category can have a name, description, and an optional monthly budget.`
    },
    {
      type: 'code',
      title: 'expense_category.py',
      language: 'python',
      code: `from datetime import date

class ExpenseCategory:
    def __init__(self, name, description="", monthly_budget=None):
        self.name = name
        self.description = description
        self.monthly_budget = monthly_budget
        self.created_date = date.today()

    def __str__(self):
        budget = f" (Budget: \${self.monthly_budget})" if self.monthly_budget else ""
        return self.name + budget
`
    },
    {
      type: 'text',
      title: 'Step 2: The Expense Class',
      content: `Now, let's define a class for individual expenses. Each expense has an amount, description, category, and date.`
    },
    {
      type: 'code',
      title: 'expense.py',
      language: 'python',
      code: `from datetime import date, datetime

class Expense:
    def __init__(self, amount, description, category, expense_date=None):
        if amount <= 0:
            raise ValueError("Amount must be positive")
        self.amount = round(float(amount), 2)
        self.description = description.strip()
        self.category = category.strip()
        self.expense_date = expense_date or date.today()
        self.created_at = datetime.now()

    def __str__(self):
        return f"\${self.amount:.2f} - {self.description} ({self.category}) on {self.expense_date}"
`
    },
    {
      type: 'text',
      title: 'Step 3: Instantiating Categories and Expenses',
      content: `Let's create some categories and expenses to see how these classes work.`
    },
    {
      type: 'code',
      title: 'example_usage.py',
      language: 'python',
      code: `from expense_category import ExpenseCategory
from expense import Expense

# Create categories
food = ExpenseCategory("Food", "Meals and groceries", 300)
transport = ExpenseCategory("Transport", "Bus, taxi, fuel")

print(food)
print(transport)

# Create expenses
lunch = Expense(12.50, "Lunch at cafe", "Food")
bus = Expense(2.75, "Bus ticket", "Transport")

print(lunch)
print(bus)
`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Food (Budget: $300)
Transport
$12.50 - Lunch at cafe (Food) on 2024-01-15
$2.75 - Bus ticket (Transport) on 2024-01-15`
    },
    {
      type: 'text',
      title: 'Step 4: The ExpenseTracker Class',
      content: `Now, let's create a class to manage all expenses and categories. This class will let us add expenses, view them, and generate summaries.`
    },
    {
      type: 'code',
      title: 'expense_tracker.py',
      language: 'python',
      code: `import json
from expense import Expense
from expense_category import ExpenseCategory

class ExpenseTracker:
    def __init__(self):
        self.categories = {}
        self.expenses = []

    def add_category(self, name, description="", monthly_budget=None):
        if name in self.categories:
            raise ValueError("Category already exists")
        self.categories[name] = ExpenseCategory(name, description, monthly_budget)

    def add_expense(self, amount, description, category, expense_date=None):
        if category not in self.categories:
            raise ValueError("Category does not exist")
        expense = Expense(amount, description, category, expense_date)
        self.expenses.append(expense)

    def list_expenses(self, category=None):
        for exp in self.expenses:
            if category is None or exp.category == category:
                print(exp)

    def save_to_file(self, filename):
        data = {
            "categories": [
                {"name": c.name, "description": c.description, "monthly_budget": c.monthly_budget}
                for c in self.categories.values()
            ],
            "expenses": [
                {
                    "amount": e.amount,
                    "description": e.description,
                    "category": e.category,
                    "expense_date": e.expense_date.isoformat()
                }
                for e in self.expenses
            ]
        }
        with open(filename, "w") as f:
            json.dump(data, f, indent=2)

    def load_from_file(self, filename):
        with open(filename) as f:
            data = json.load(f)
        self.categories = {c["name"]: ExpenseCategory(**c) for c in data["categories"]}
        self.expenses = [
            Expense(
                e["amount"], e["description"], e["category"],
                expense_date=date.fromisoformat(e["expense_date"])
            )
            for e in data["expenses"]
        ]
`
    },
    {
      type: 'text',
      title: 'Step 5: Using the ExpenseTracker',
      content: `Let's use the tracker to add categories and expenses, and then save/load data.`
    },
    {
      type: 'code',
      title: 'example_tracker_usage.py',
      language: 'python',
      code: `from expense_tracker import ExpenseTracker

tracker = ExpenseTracker()
tracker.add_category("Food", "Meals and groceries", 300)
tracker.add_category("Transport", "Bus, taxi, fuel")

tracker.add_expense(10, "Breakfast", "Food")
tracker.add_expense(20, "Taxi ride", "Transport")

print("All expenses:")
tracker.list_expenses()

tracker.save_to_file("expenses.json")
print("Data saved to expenses.json")

# To load data later:
tracker2 = ExpenseTracker()
tracker2.load_from_file("expenses.json")
print("Loaded expenses:")
tracker2.list_expenses()
`
    },
    {
      type: 'output',
      title: 'Output',
      content: `All expenses:
$10.00 - Breakfast (Food) on 2024-01-15
$20.00 - Taxi ride (Transport) on 2024-01-15
Data saved to expenses.json
Loaded expenses:
$10.00 - Breakfast (Food) on 2024-01-15
$20.00 - Taxi ride (Transport) on 2024-01-15`
    },
    {
      type: 'text',
      title: 'Step 6: Generating a Monthly Summary',
      content: `Let's add a method to the tracker to summarize expenses by month and category.`
    },
    {
      type: 'code',
      title: 'expense_tracker.py (add this method)',
      language: 'python',
      code: `from collections import defaultdict

class ExpenseTracker:
    # ...existing code...

    def monthly_summary(self, year, month):
        summary = defaultdict(float)
        for exp in self.expenses:
            if exp.expense_date.year == year and exp.expense_date.month == month:
                summary[exp.category] += exp.amount
        print(f"Summary for {year}-{month:02d}:")
        for cat, total in summary.items():
            print(f"  {cat}: \${total:.2f}")
`
    },
    {
      type: 'text',
      title: 'Step 7: Using the Monthly Summary',
      content: `Now you can easily see how much you spent in each category for a given month.`
    },
    {
      type: 'code',
      title: 'example_summary.py',
      language: 'python',
      code: `from expense_tracker import ExpenseTracker

tracker = ExpenseTracker()
tracker.load_from_file("expenses.json")
tracker.monthly_summary(2024, 1)
`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Summary for 2024-01:
  Food: $10.00
  Transport: $20.00`
    },
    {
      type: 'text',
      title: 'Key Takeaways',
      content: `- Use classes to organize your code and data.
- Keep each class focused on a single responsibility.
- Separate your code into modules for clarity.
- Use JSON for simple data persistence.
- Build up your project step by step, testing as you go.

This modular approach makes your code easier to understand, extend, and maintain!`
    }
  ]
};