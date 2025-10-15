// Lesson content for nested conditionals
export const nestedConditionalsContent = {
  id: 'nested-conditionals',
  title: 'Nested Conditionals',
  duration: '22 min',
  overview: `Learn to create sophisticated decision-making logic by nesting conditional statements inside each other. Master the art of multi-level conditions to handle complex scenarios and build more intelligent programs.`,
  objectives: [
    'Understand the concept and syntax of nested conditionals',
    'Write if statements inside other if statements',
    'Manage proper indentation for nested structures',
    'Create complex decision trees with multiple levels',
    'Apply nested conditionals to real-world problems',
    'Recognize when to use nested vs. logical operators',
  ],
  sections: [
    {
      type: 'text',
      title: 'What Are Nested Conditionals?',
      content: `Nested conditionals are **if statements inside other if statements**. They allow you to create more complex decision-making logic by checking additional conditions only after certain primary conditions are met.

**Think of it like a decision tree:**
- First, check if it's a weekday
- If it is a weekday, then check if it's before 9 AM
- If both conditions are true, then set an alarm

**Structure:**
\`\`\`python
if outer_condition:
    if inner_condition:
        # Execute when both conditions are true
    else:
        # Execute when outer is true, inner is false
else:
    # Execute when outer condition is false
\`\`\`

The key is **proper indentation** - each nested level adds another level of indentation.`
    },
    {
      type: 'code',
      title: 'Basic Nested Conditional Example',
      language: 'python',
      code: `# Weather and activity planner
weather = "sunny"
temperature = 75

print("Planning outdoor activities...")

if weather == "sunny":
    print("☀️ It's sunny outside!")
    
    if temperature >= 80:
        print("🏊 Perfect for swimming!")
        activity = "swimming"
    elif temperature >= 70:
        print("🚶 Great for walking or hiking!")
        activity = "walking"
    else:
        print("🧥 A bit cool, bring a jacket for outdoor activities")
        activity = "light outdoor activity"
else:
    print("🏠 Might be better to stay indoors")
    activity = "indoor activity"

print(f"Recommended activity: {activity}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Planning outdoor activities...
☀️ It's sunny outside!
🚶 Great for walking or hiking!
Recommended activity: walking`
    },
    {
      type: 'text',
      title: 'Understanding Indentation Levels',
      content: `In nested conditionals, **indentation is critical**. Each level of nesting requires an additional level of indentation (typically 4 spaces per level):

- Level 0: No indentation (main program)
- Level 1: 4 spaces (first if statement)
- Level 2: 8 spaces (nested if statement)
- Level 3: 12 spaces (double-nested if statement)

**Python uses indentation to determine which code belongs to which conditional block.**`
    },
    {
      type: 'code',
      title: 'Indentation Levels Demonstration',
      language: 'python',
      code: `# Demonstrating indentation levels
age = 25
has_license = True
has_car = True

print("Checking driving eligibility...")

if age >= 18:                                    # Level 1
    print("✅ Age requirement met")
    
    if has_license:                              # Level 2
        print("✅ Has valid license")
        
        if has_car:                              # Level 3
            print("✅ Has access to vehicle")
            print("🚗 Ready to drive!")
            status = "can drive"
        else:                                    # Level 3
            print("❌ No vehicle available")
            print("🚶 Consider public transport")
            status = "need vehicle"
            
    else:                                        # Level 2
        print("❌ No valid license")
        print("📚 Need to get driver's license first")
        status = "need license"
        
else:                                            # Level 1
    print("❌ Too young to drive")
    status = "too young"

print(f"Final status: {status}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Checking driving eligibility...
✅ Age requirement met
✅ Has valid license
✅ Has access to vehicle
🚗 Ready to drive!
Final status: can drive`
    },
    {
      type: 'text',
      title: 'Nested vs. Logical Operators',
      content: `Sometimes you can achieve the same result using either nested conditionals or logical operators. Here's when to use each:

**Use Nested Conditionals when:**
- You need different actions at each level
- The logic is easier to read when separated
- You want to check inner conditions only if outer conditions are met

**Use Logical Operators when:**
- You need the same action for combined conditions
- The logic is simple enough to read on one line
- Performance matters (slightly faster)`
    },
    {
      type: 'code',
      title: 'Nested vs. Logical Operators Comparison',
      language: 'python',
      code: `# Same logic, different approaches
age = 25
income = 50000

print("=== Using NESTED CONDITIONALS ===")
if age >= 21:
    print("Age requirement met for loan")
    if income >= 30000:
        print("Income requirement met")
        print("✅ LOAN APPROVED")
        loan_status = "approved"
    else:
        print("❌ Income too low")
        loan_status = "denied - income"
else:
    print("❌ Too young for loan")
    loan_status = "denied - age"

print(f"Status: {loan_status}")

print("\\n=== Using LOGICAL OPERATORS ===")
if age >= 21 and income >= 30000:
    print("✅ LOAN APPROVED (all requirements met)")
    loan_status_2 = "approved"
elif age < 21:
    print("❌ LOAN DENIED - Age requirement not met")
    loan_status_2 = "denied - age"
else:
    print("❌ LOAN DENIED - Income requirement not met")
    loan_status_2 = "denied - income"

print(f"Status: {loan_status_2}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `=== Using NESTED CONDITIONALS ===
Age requirement met for loan
Income requirement met
✅ LOAN APPROVED
Status: approved

=== Using LOGICAL OPERATORS ===
✅ LOAN APPROVED (all requirements met)
Status: approved`
    },
    {
      type: 'code',
      title: 'Student Grade and Scholarship System',
      language: 'python',
      code: `# Complex scholarship determination system
gpa = 3.7
extracurricular_hours = 15
family_income = 45000
essay_score = 85

print("🎓 Scholarship Application Evaluation")
print("=" * 40)

if gpa >= 3.5:
    print("✅ GPA requirement met (3.5+)")
    
    if extracurricular_hours >= 10:
        print("✅ Extracurricular requirement met (10+ hours)")
        
        if family_income <= 50000:
            print("✅ Financial need requirement met")
            
            if essay_score >= 80:
                print("✅ Essay score requirement met")
                print("🏆 FULL SCHOLARSHIP AWARDED!")
                scholarship = "Full Scholarship"
            else:
                print("⚠️ Essay score below threshold")
                print("🥉 PARTIAL SCHOLARSHIP AWARDED")
                scholarship = "Partial Scholarship"
                
        else:
            print("⚠️ Family income above threshold")
            print("🥉 MERIT SCHOLARSHIP AWARDED")
            scholarship = "Merit Scholarship"
            
    else:
        print("❌ Insufficient extracurricular activities")
        print("📚 ACADEMIC SCHOLARSHIP ONLY")
        scholarship = "Academic Scholarship"
        
else:
    print("❌ GPA below minimum requirement")
    print("❌ NO SCHOLARSHIP AWARDED")
    scholarship = "None"

print(f"\\nFinal Decision: {scholarship}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `🎓 Scholarship Application Evaluation
========================================
✅ GPA requirement met (3.5+)
✅ Extracurricular requirement met (10+ hours)
✅ Financial need requirement met
✅ Essay score requirement met
🏆 FULL SCHOLARSHIP AWARDED!

Final Decision: Full Scholarship`
    },
    {
      type: 'code',
      title: 'E-commerce Shipping Calculator',
      language: 'python',
      code: `# Complex shipping cost calculator
order_total = 75
is_premium_member = True
shipping_method = "express"
destination = "domestic"

print("📦 Shipping Cost Calculator")
print("=" * 30)

if destination == "domestic":
    print("🏠 Domestic shipping")
    
    if is_premium_member:
        print("⭐ Premium member benefits apply")
        
        if order_total >= 50:
            print("✅ Free shipping threshold met!")
            shipping_cost = 0
        else:
            print("⚠️ Below free shipping threshold")
            if shipping_method == "express":
                shipping_cost = 5.99
            else:
                shipping_cost = 2.99
                
    else:
        print("👤 Standard member")
        
        if order_total >= 100:
            print("✅ Free shipping for orders $100+")
            shipping_cost = 0
        else:
            print("⚠️ Shipping fees apply")
            if shipping_method == "express":
                shipping_cost = 9.99
            else:
                shipping_cost = 4.99
                
else:
    print("🌍 International shipping")
    
    if order_total >= 200:
        print("✅ Free international shipping!")
        shipping_cost = 0
    else:
        print("⚠️ International shipping fees apply")
        if shipping_method == "express":
            shipping_cost = 24.99
        else:
            shipping_cost = 14.99

final_total = order_total + shipping_cost
print(f"\\nOrder subtotal: \${order_total:.2f}")
print(f"Shipping cost: \${shipping_cost:.2f}")
print(f"Final total: \${final_total:.2f}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `📦 Shipping Cost Calculator
==============================
🏠 Domestic shipping
⭐ Premium member benefits apply
✅ Free shipping threshold met!

Order subtotal: $75.00
Shipping cost: $0.00
Final total: $75.00`
    },
    {
      type: 'text',
      title: 'Complex Decision Trees',
      content: `Nested conditionals are perfect for creating **decision trees** - logical structures that guide you through a series of yes/no questions to reach a conclusion. Each level narrows down the possibilities.

**Common use cases:**
- Medical diagnosis systems
- Product recommendation engines
- Game AI decision making
- Form validation with multiple criteria`
    },
    {
      type: 'code',
      title: 'Career Recommendation System',
      language: 'python',
      code: `# Career path recommendation system
enjoys_math = True
enjoys_people = False
enjoys_creativity = True
prefers_stability = False

print("🎯 Career Path Recommendation System")
print("=" * 40)

if enjoys_math:
    print("✅ Shows aptitude for mathematical thinking")
    
    if enjoys_people:
        print("✅ Enjoys working with people")
        
        if enjoys_creativity:
            print("🎨 Creative + Math + People oriented")
            career = "UX Designer or Product Manager"
        else:
            print("📊 Analytical + People oriented")
            career = "Business Analyst or Consultant"
            
    else:
        print("🤖 Prefers working with systems/data")
        
        if prefers_stability:
            print("🏛️ Values stable, structured environment")
            career = "Accountant or Financial Analyst"
        else:
            print("🚀 Open to dynamic, challenging environment")
            if enjoys_creativity:
                career = "Software Developer or Data Scientist"
            else:
                career = "Systems Administrator or Database Administrator"
                
else:
    print("🎨 Less math-focused, more creative/interpersonal")
    
    if enjoys_people:
        print("👥 People-oriented career path")
        
        if enjoys_creativity:
            career = "Marketing Manager or Teacher"
        else:
            career = "Human Resources or Sales"
    else:
        print("🎭 Individual contributor, creative work")
        career = "Writer, Artist, or Graphic Designer"

print(f"\\n🎯 Recommended career path: {career}")

# Additional recommendations based on the choice
if "Developer" in career or "Data Scientist" in career:
    print("\\n💡 Next steps:")
    print("- Learn programming languages (Python, JavaScript)")
    print("- Build a portfolio of projects")
    print("- Consider computer science courses")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `🎯 Career Path Recommendation System
========================================
✅ Shows aptitude for mathematical thinking
🤖 Prefers working with systems/data
🚀 Open to dynamic, challenging environment
🎯 Recommended career path: Software Developer or Data Scientist

💡 Next steps:
- Learn programming languages (Python, JavaScript)
- Build a portfolio of projects
- Consider computer science courses`
    },
    {
      type: 'code',
      title: 'Game Character Class Selection',
      language: 'python',
      code: `# RPG character class selection system
prefers_combat = True
likes_magic = False
enjoys_strategy = True
prefers_support = False

print("⚔️ Character Class Selection")
print("=" * 30)

if prefers_combat:
    print("⚔️ Combat-oriented character")
    
    if likes_magic:
        print("✨ Magic-enhanced combat")
        
        if enjoys_strategy:
            character_class = "Battle Mage"
            description = "Combines spells with tactical combat"
        else:
            character_class = "Spellsword"
            description = "Direct magical combat specialist"
            
    else:
        print("💪 Pure physical combat")
        
        if enjoys_strategy:
            print("🧠 Tactical combat approach")
            if prefers_support:
                character_class = "Paladin"
                description = "Defensive fighter who protects allies"
            else:
                character_class = "Warrior"
                description = "Strategic melee combat specialist"
        else:
            print("⚡ Aggressive combat style")
            character_class = "Berserker"
            description = "High-damage, high-risk fighter"
            
else:
    print("🎯 Non-combat focused character")
    
    if likes_magic:
        print("🔮 Magic-based abilities")
        
        if prefers_support:
            character_class = "Healer"
            description = "Supports team with healing and buffs"
        else:
            character_class = "Wizard"
            description = "Powerful offensive magic user"
    else:
        print("🏹 Skill-based abilities")
        
        if enjoys_strategy:
            character_class = "Rogue"
            description = "Stealth and precision specialist"
        else:
            character_class = "Ranger"
            description = "Ranged combat and nature skills"

print(f"\\n🎭 Recommended class: {character_class}")
print(f"📋 Description: {description}")

# Provide starting tips based on class
if character_class in ["Battle Mage", "Spellsword", "Wizard"]:
    print("\\n💡 Magic user tips:")
    print("- Focus on intelligence stats")
    print("- Learn spell combinations")
    print("- Manage mana carefully")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `⚔️ Character Class Selection
==============================
⚔️ Combat-oriented character
💪 Pure physical combat
🧠 Tactical combat approach

🎭 Recommended class: Warrior
📋 Description: Strategic melee combat specialist`
    },
    {
      type: 'text',
      title: 'Best Practices for Nested Conditionals',
      content: `When working with nested conditionals, follow these best practices:

**1. Keep it readable:** Don't nest too deeply (max 3-4 levels)
**2. Use consistent indentation:** Stick to 4 spaces per level
**3. Add comments:** Explain complex logic
**4. Consider refactoring:** Break complex conditions into functions
**5. Use meaningful variable names:** Make conditions self-documenting`
    },
    {
      type: 'code',
      title: 'Best Practices Example',
      language: 'python',
      code: `# ✅ GOOD: Well-structured nested conditionals
def evaluate_loan_application(age, credit_score, income, employment_years):
    """
    Evaluate loan application with clear decision tree
    """
    print("🏦 Loan Application Evaluation")
    
    # Primary eligibility check
    if age >= 18:
        print("✅ Age requirement met")
        
        # Credit worthiness check
        if credit_score >= 650:
            print("✅ Credit score acceptable")
            
            # Income stability check
            if income >= 40000 and employment_years >= 2:
                print("✅ Income and employment stable")
                return "APPROVED - Standard rate"
            elif income >= 30000:
                print("⚠️ Lower income, higher rate")
                return "APPROVED - Higher rate"
            else:
                print("❌ Insufficient income")
                return "DENIED - Income too low"
        else:
            print("❌ Credit score too low")
            return "DENIED - Poor credit"
    else:
        print("❌ Age requirement not met")
        return "DENIED - Underage"

# Test the function
result = evaluate_loan_application(
    age=28, 
    credit_score=720, 
    income=55000, 
    employment_years=3
)
print(f"\\nDecision: {result}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `🏦 Loan Application Evaluation
✅ Age requirement met
✅ Credit score acceptable
✅ Income and employment stable

Decision: APPROVED - Standard rate`
    },
    {
      type: 'text',
      title: 'Common Mistakes to Avoid',
      content: `Here are common mistakes when working with nested conditionals:

**1. Inconsistent indentation:** Python is very strict about this
**2. Too much nesting:** Makes code hard to read and maintain
**3. Forgetting else cases:** Can lead to unexpected behavior
**4. Logic errors:** Not considering all possible paths through the decision tree`
    },
    {
      type: 'code',
      title: 'Refactoring Deep Nesting',
      language: 'python',
      code: `# ❌ BAD: Too deeply nested (hard to read)
def bad_example(score, attendance, participation, extra_credit):
    if score >= 90:
        if attendance >= 95:
            if participation >= 80:
                if extra_credit > 0:
                    return "A+"
                else:
                    return "A"
            else:
                return "A-"
        else:
            return "B+"
    else:
        return "B or lower"

# ✅ GOOD: Flattened with early returns
def good_example(score, attendance, participation, extra_credit):
    # Handle low scores early
    if score < 90:
        return "B or lower"
    
    # Handle low attendance early
    if attendance < 95:
        return "B+"
    
    # Handle low participation early
    if participation < 80:
        return "A-"
    
    # Only check extra credit if all other requirements are met
    if extra_credit > 0:
        return "A+"
    else:
        return "A"

# Test both functions
print("Bad example result:", bad_example(95, 98, 85, 5))
print("Good example result:", good_example(95, 98, 85, 5))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Bad example result: A+
Good example result: A+`
    },
    {
      type: 'text',
      title: 'Practice Challenge',
      content: `**Challenge:** Create a movie recommendation system that considers:
1. User's preferred genre (action, comedy, drama, sci-fi)
2. Desired movie length (short: <90min, medium: 90-120min, long: >120min)
3. Rating preference (family-friendly: G/PG, teen: PG-13, adult: R)
4. Whether they want recent movies (last 5 years) or classics

Use nested conditionals to provide specific movie recommendations for each combination.`
    },
    {
      type: 'code',
      title: 'Movie Recommendation System',
      language: 'python',
      code: `# Movie recommendation system using nested conditionals
preferred_genre = "sci-fi"
preferred_length = "medium"  # short, medium, long
rating_preference = "teen"   # family, teen, adult
wants_recent = True          # True for recent, False for classics

print("🎬 Movie Recommendation System")
print("=" * 35)

if preferred_genre == "action":
    print("💥 Action movies")
    
    if wants_recent:
        if rating_preference == "teen":
            recommendation = "Spider-Man: No Way Home (2021)"
        else:
            recommendation = "John Wick 4 (2023)"
    else:
        recommendation = "Die Hard (1988)"
        
elif preferred_genre == "sci-fi":
    print("🚀 Science Fiction movies")
    
    if wants_recent:
        print("🆕 Recent sci-fi films")
        
        if preferred_length == "short":
            if rating_preference == "family":
                recommendation = "Luca (2021) - 95 min"
            else:
                recommendation = "Ex Machina (2014) - 108 min"
        elif preferred_length == "medium":
            if rating_preference == "teen":
                recommendation = "Dune (2021) - 155 min"
            else:
                recommendation = "Arrival (2016) - 116 min"
        else:  # long
            recommendation = "Interstellar (2014) - 169 min"
    else:
        print("📼 Classic sci-fi films")
        
        if preferred_length == "short":
            recommendation = "2001: A Space Odyssey (1968)"
        else:
            recommendation = "Blade Runner (1982)"
            
elif preferred_genre == "comedy":
    print("😄 Comedy movies")
    recommendation = "The Grand Budapest Hotel (2014)"
    
else:  # drama
    print("🎭 Drama movies")
    recommendation = "Parasite (2019)"

print(f"\\n🎯 Recommended movie: {recommendation}")
print("\\n🍿 Enjoy your movie!")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `🎬 Movie Recommendation System
===================================
🚀 Science Fiction movies
🆕 Recent sci-fi films

🎯 Recommended movie: Dune (2021) - 155 min

🍿 Enjoy your movie!`
    }
  ]
};