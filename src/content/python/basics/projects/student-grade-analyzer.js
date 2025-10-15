// Lesson content for Building a student grade analyzer
const studentGradeAnalyzerContent = {
  id: 'student-grade-analyzer',
  title: 'Building a student grade analyzer',
  duration: '40 min',
  overview: `Create a comprehensive student grade analyzer! Build a data management system that calculates grades, generates statistics, determines letter grades, and provides detailed academic performance reports.`,
  objectives: [
    'Work with lists and data structures to manage student information',
    'Implement statistical calculations (average, min, max, median)',
    'Create grade classification systems with conditional logic',
    'Design data input and validation systems for educational data',
    'Generate formatted reports with comprehensive academic insights',
  ],
  sections: [
    {
      type: 'text',
      title: 'Project Overview: Student Grade Analyzer',
      content: `We'll build a comprehensive grade analysis system that helps teachers and students understand academic performance. Our analyzer will handle multiple students, calculate various statistics, and generate detailed reports.

**What we'll build:**
- **Student data management**: Store and organize student information and grades
- **Grade calculations**: Average, highest, lowest, and median scores
- **Letter grade assignment**: Convert numerical scores to letter grades
- **Statistical analysis**: Class performance metrics and trends
- **Report generation**: Formatted output with actionable insights
- **Data validation**: Ensure grade data is valid and complete

**Academic features:**
- **Individual analysis**: Per-student performance metrics
- **Class analysis**: Overall class performance statistics
- **Grade distribution**: Breakdown of letter grade frequencies
- **Performance categories**: Identify top performers, struggling students
- **Trend analysis**: Compare performance across different assessments

**Skills we'll practice:**
- Working with lists and nested data structures
- Statistical calculations and data analysis
- Conditional logic for classification systems
- String formatting for professional reports
- Data validation and error handling
- Program organization and code modularity

**Real-world application:**
This project simulates educational management systems used in schools and universities for tracking student progress and generating academic reports.`
    },
    {
      type: 'code',
      title: 'Step 1: Basic Grade Calculation',
      language: 'python',
      code: `# Start with calculating average grade
def calculate_average(grades):
    if len(grades) == 0:
        return 0
    total = sum(grades)
    average = total / len(grades)
    return average

student_grades = [85, 92, 78, 96, 88]
average_grade = calculate_average(student_grades)
print("Student grades:", student_grades)
print("Average grade:", round(average_grade, 1))`
    },
    {
      type: 'output',
      content: `Student grades: [85, 92, 78, 96, 88]
Average grade: 87.8`
    },
    {
      type: 'code',
      title: 'Step 2: Letter Grade Assignment',
      language: 'python',
      code: `# Convert numerical grades to letter grades
def get_letter_grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"

print("Letter grade conversion:")
test_scores = [95, 87, 72, 58, 91]
for score in test_scores:
    letter = get_letter_grade(score)
    print(str(score) + " = " + letter)`
    },
    {
      type: 'output',
      content: `Letter grade conversion:
95 = A
87 = B
72 = C
58 = F
91 = A`
    },
    {
      type: 'code',
      title: 'Step 3: Grade Statistics',
      language: 'python',
      code: `# Calculate comprehensive grade statistics
def calculate_grade_stats(grades):
    if len(grades) == 0:
        return None
    
    stats = {}
    stats["average"] = sum(grades) / len(grades)
    stats["highest"] = max(grades)
    stats["lowest"] = min(grades)
    stats["count"] = len(grades)
    
    return stats

grades = [88, 92, 76, 84, 95, 89, 91]
stats = calculate_grade_stats(grades)
print("Grade statistics:")
print("Average:", round(stats["average"], 1))
print("Highest:", stats["highest"])`
    },
    {
      type: 'output',
      content: `Grade statistics:
Average: 87.9
Highest: 95`
    },
    {
      type: 'code',
      title: 'Step 4: Student Data Structure',
      language: 'python',
      code: `# Create data structure for student information
def create_student(name, grades):
    student = {
        "name": name,
        "grades": grades,
        "average": calculate_average(grades),
        "letter_grade": get_letter_grade(calculate_average(grades))
    }
    return student

# Create sample students
alice = create_student("Alice Johnson", [92, 88, 94, 89, 93])
bob = create_student("Bob Smith", [78, 82, 76, 84, 80])

print("Student: " + alice["name"])
print("Average: " + str(round(alice["average"], 1)))
print("Letter Grade: " + alice["letter_grade"])`
    },
    {
      type: 'output',
      content: `Student: Alice Johnson
Average: 91.2
Letter Grade: A`
    },
    {
      type: 'code',
      title: 'Step 5: Class Data Management',
      language: 'python',
      code: `# Manage multiple students
class_roster = []
class_roster.append(create_student("Alice Johnson", [92, 88, 94, 89, 93]))
class_roster.append(create_student("Bob Smith", [78, 82, 76, 84, 80]))
class_roster.append(create_student("Carol Davis", [95, 97, 92, 98, 94]))
class_roster.append(create_student("David Wilson", [85, 89, 87, 88, 86]))

def display_class_summary(students):
    print("=== Class Summary ===")
    for student in students:
        print(student["name"] + ": " + str(round(student["average"], 1)) + 
              " (" + student["letter_grade"] + ")")

display_class_summary(class_roster)`
    },
    {
      type: 'output',
      content: `=== Class Summary ===
Alice Johnson: 91.2 (A)
Bob Smith: 80.0 (B)
Carol Davis: 95.2 (A)
David Wilson: 87.0 (B)`
    },
    {
      type: 'code',
      title: 'Step 6: Class Statistics',
      language: 'python',
      code: `# Calculate class-wide statistics
def calculate_class_stats(students):
    if len(students) == 0:
        return None
    
    all_averages = []
    for student in students:
        all_averages.append(student["average"])
    
    class_stats = {
        "class_average": sum(all_averages) / len(all_averages),
        "highest_student": max(students, key=lambda s: s["average"]),
        "lowest_student": min(students, key=lambda s: s["average"]),
        "total_students": len(students)
    }
    
    return class_stats

stats = calculate_class_stats(class_roster)
print("Class Statistics:")
print("Class Average:", round(stats["class_average"], 1))
print("Top Student:", stats["highest_student"]["name"])`
    },
    {
      type: 'output',
      content: `Class Statistics:
Class Average: 88.4
Top Student: Carol Davis`
    },
    {
      type: 'code',
      title: 'Step 7: Grade Distribution Analysis',
      language: 'python',
      code: `# Analyze grade distribution
def analyze_grade_distribution(students):
    distribution = {"A": 0, "B": 0, "C": 0, "D": 0, "F": 0}
    
    for student in students:
        letter_grade = student["letter_grade"]
        distribution[letter_grade] += 1
    
    return distribution

def display_distribution(distribution, total_students):
    print("=== Grade Distribution ===")
    for grade, count in distribution.items():
        percentage = (count / total_students) * 100
        print(grade + ": " + str(count) + " students (" + 
              str(round(percentage, 1)) + "%)")

distribution = analyze_grade_distribution(class_roster)
display_distribution(distribution, len(class_roster))`
    },
    {
      type: 'output',
      content: `=== Grade Distribution ===
A: 2 students (50.0%)
B: 2 students (50.0%)
C: 0 students (0.0%)
D: 0 students (0.0%)
F: 0 students (0.0%)`
    },
    {
      type: 'code',
      title: 'Step 8: Individual Student Report',
      language: 'python',
      code: `# Generate detailed individual student report
def generate_student_report(student):
    print("=" * 40)
    print("STUDENT PERFORMANCE REPORT")
    print("=" * 40)
    print("Name: " + student["name"])
    print("Grades: " + str(student["grades"]))
    print("Average: " + str(round(student["average"], 2)))
    print("Letter Grade: " + student["letter_grade"])
    
    # Performance analysis
    if student["average"] >= 90:
        performance = "Excellent"
    elif student["average"] >= 80:
        performance = "Good"
    elif student["average"] >= 70:
        performance = "Satisfactory"
    else:
        performance = "Needs Improvement"
    
    print("Performance Level: " + performance)
    print("Highest Score: " + str(max(student["grades"])))
    print("Lowest Score: " + str(min(student["grades"])))

generate_student_report(class_roster[0])`
    },
    {
      type: 'output',
      content: `========================================
STUDENT PERFORMANCE REPORT
========================================
Name: Alice Johnson
Grades: [92, 88, 94, 89, 93]
Average: 91.2
Letter Grade: A
Performance Level: Excellent
Highest Score: 94
Lowest Score: 88`
    },
    {
      type: 'code',
      title: 'Step 9: Class Performance Report',
      language: 'python',
      code: `# Generate comprehensive class report
def generate_class_report(students):
    print("=" * 50)
    print("CLASS PERFORMANCE ANALYSIS REPORT")
    print("=" * 50)
    
    stats = calculate_class_stats(students)
    distribution = analyze_grade_distribution(students)
    
    print("Total Students: " + str(stats["total_students"]))
    print("Class Average: " + str(round(stats["class_average"], 2)))
    print()
    
    print("Top Performer: " + stats["highest_student"]["name"] + 
          " (" + str(round(stats["highest_student"]["average"], 1)) + ")")
    print("Needs Support: " + stats["lowest_student"]["name"] + 
          " (" + str(round(stats["lowest_student"]["average"], 1)) + ")")
    print()
    
    print("Grade Distribution:")
    for grade, count in distribution.items():
        if count > 0:
            percentage = (count / len(students)) * 100
            print("  " + grade + ": " + str(count) + " (" + 
                  str(round(percentage, 1)) + "%)")

generate_class_report(class_roster)`
    },
    {
      type: 'output',
      content: `==================================================
CLASS PERFORMANCE ANALYSIS REPORT
==================================================
Total Students: 4
Class Average: 88.35

Top Performer: Carol Davis (95.2)
Needs Support: Bob Smith (80.0)

Grade Distribution:
  A: 2 (50.0%)
  B: 2 (50.0%)`
    },
    {
      type: 'code',
      title: 'Step 10: Interactive Grade Input',
      language: 'python',
      code: `# Interactive system for adding students
def add_student_interactive():
    print("=== Add New Student ===")
    name = input("Enter student name: ")
    
    grades = []
    print("Enter grades (type 'done' when finished):")
    
    while True:
        grade_input = input("Enter grade: ")
        if grade_input.lower() == "done":
            break
        
        try:
            grade = float(grade_input)
            if 0 <= grade <= 100:
                grades.append(grade)
                print("Grade " + str(grade) + " added.")
            else:
                print("Please enter a grade between 0 and 100.")
        except ValueError:
            print("Please enter a valid number.")
    
    if len(grades) > 0:
        student = create_student(name, grades)
        print("Student " + name + " added successfully!")
        return student
    else:
        print("No grades entered. Student not added.")
        return None

print("Interactive student input system ready!")
print("(Use add_student_interactive() to add students)")`
    },
    {
      type: 'output',
      content: `Interactive student input system ready!
(Use add_student_interactive() to add students)`
    },
    {
      type: 'code',
      title: 'Step 11: Complete Grade Analyzer System',
      language: 'python',
      code: `# Main program with all features
def run_grade_analyzer():
    students = []
    
    while True:
        print("\n=== Student Grade Analyzer ===")
        print("1. Add student")
        print("2. View all students")
        print("3. Generate individual report")
        print("4. Generate class report")
        print("5. View grade distribution")
        print("6. Exit")
        
        choice = input("Choose option (1-6): ")
        
        if choice == "1":
            student = add_student_interactive()
            if student:
                students.append(student)
        
        elif choice == "2":
            if students:
                display_class_summary(students)
            else:
                print("No students added yet.")
        
        elif choice == "3":
            if students:
                print("Select student:")
                for i, student in enumerate(students):
                    print(str(i+1) + ". " + student["name"])
                try:
                    index = int(input("Enter number: ")) - 1
                    if 0 <= index < len(students):
                        generate_student_report(students[index])
                    else:
                        print("Invalid selection.")
                except ValueError:
                    print("Please enter a valid number.")
            else:
                print("No students added yet.")
        
        elif choice == "4":
            if students:
                generate_class_report(students)
            else:
                print("No students added yet.")
        
        elif choice == "5":
            if students:
                dist = analyze_grade_distribution(students)
                display_distribution(dist, len(students))
            else:
                print("No students added yet.")
        
        elif choice == "6":
            print("Thank you for using the Grade Analyzer!")
            break
        
        else:
            print("Please choose a valid option (1-6).")

print("Complete grade analyzer system ready!")
print("(Use run_grade_analyzer() to start)")`
    },
    {
      type: 'output',
      content: `Complete grade analyzer system ready!
(Use run_grade_analyzer() to start)`
    },
    {
      type: 'text',
      title: 'Project Summary and Educational Impact',
      content: `**What you've built:**
A comprehensive educational data management system that demonstrates real-world application development for academic institutions:

**Key features implemented:**
- **Student data management**: Structured storage and organization of academic records
- **Statistical analysis**: Comprehensive grade calculations and performance metrics
- **Classification systems**: Automated letter grade assignment and performance categorization
- **Report generation**: Professional, formatted output for various stakeholders
- **Interactive interface**: User-friendly system for data input and analysis
- **Data validation**: Robust error handling for educational data integrity

**Educational applications:**
- **Teacher tools**: Quick grade calculation and class performance analysis
- **Student tracking**: Individual progress monitoring and improvement identification
- **Administrative reports**: Class statistics and grade distribution analysis
- **Parent communication**: Clear, comprehensive performance summaries
- **Academic planning**: Data-driven insights for curriculum and teaching adjustments

**Programming concepts mastered:**
- **Data structures**: Dictionaries and lists for complex data organization
- **Statistical computing**: Mathematical calculations for educational metrics
- **Report generation**: Formatted output design for professional presentation
- **Menu-driven interfaces**: Complex user interaction patterns
- **Data validation**: Educational domain-specific validation rules
- **Code organization**: Modular design for maintainable educational software

**Real-world extensions:**
- **Grade weighting**: Different weights for assignments, exams, projects
- **Attendance tracking**: Integration with attendance data
- **Standards-based grading**: Alignment with educational standards
- **Historical analysis**: Semester and year-over-year comparisons
- **Export capabilities**: Integration with school information systems
- **Predictive analytics**: Early warning systems for at-risk students
- **Parent portals**: Web-based access to student performance data
- **Curriculum mapping**: Alignment with learning objectives and outcomes

**Skills gained:**
- Educational software development principles
- Statistical analysis and data interpretation
- User interface design for educational stakeholders
- Data validation in educational contexts
- Report generation and formatting
- Complex data structure management
- Educational domain knowledge application

This grade analyzer demonstrates how programming skills directly apply to educational technology, creating tools that benefit teachers, students, and administrators while improving educational outcomes through data-driven insights.`
    }
  ]
};

export { studentGradeAnalyzerContent };