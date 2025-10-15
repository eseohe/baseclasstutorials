// Lesson content for Datetime Basics
export const datetimeBasicsContent = {
  id: 'datetime-basics',
  title: 'Datetime Basics',
  duration: '30 min',
  overview: `Master Python's datetime module! Learn to work with dates, times, and datetimes, perform date arithmetic, and handle common date/time operations for applications ranging from data analysis to web development.`,
  objectives: [
    'Work with date, time, and datetime objects in Python',
    'Create and manipulate dates and times programmatically',
    'Perform date arithmetic and calculate time differences',
    'Extract components from datetime objects',
    'Handle current dates and times with datetime.now()',
    'Compare and sort datetime objects effectively',
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Python Datetime',
      content: `Python's datetime module provides classes for working with dates and times. It's essential for applications that need to track time, schedule events, analyze temporal data, or work with user interactions.

**Main datetime classes:**
- **date**: Represents a date (year, month, day)
- **time**: Represents a time (hour, minute, second, microsecond)
- **datetime**: Combines date and time information
- **timedelta**: Represents a duration (difference between dates/times)

**Common use cases:**
- **Logging**: Timestamp events and activities
- **Scheduling**: Plan future events and deadlines
- **Data analysis**: Analyze time-series data
- **User interfaces**: Display and input dates
- **Business logic**: Calculate ages, durations, business days

**Key concepts:**
- **Naive vs Aware**: Datetime objects can be timezone-naive or timezone-aware
- **Immutability**: Datetime objects are immutable (operations return new objects)
- **Precision**: Support for microsecond precision
- **ISO format**: Standard string representation of dates and times`
    },
    {
      type: 'code',
      title: 'Creating Date and Time Objects',
      language: 'python',
      code: `# Working with date, time, and datetime objects
from datetime import date, time, datetime

# Creating date objects
today = date.today()
specific_date = date(2024, 3, 15)  # Year, month, day
new_years = date(2024, 1, 1)

print("Date objects:")
print("  Today:", today)
print("  Specific date:", specific_date)
print("  New Year's:", new_years)

# Creating time objects
current_time = time(14, 30, 45)  # Hour, minute, second
precise_time = time(9, 15, 30, 500000)  # Including microseconds
midnight = time(0, 0, 0)

print("\\nTime objects:")
print("  Current time:", current_time)
print("  Precise time:", precise_time)
print("  Midnight:", midnight)

# Creating datetime objects
now = datetime.now()
specific_datetime = datetime(2024, 3, 15, 14, 30, 45)
christmas = datetime(2024, 12, 25, 0, 0, 0)

print("\\nDatetime objects:")
print("  Now:", now)
print("  Specific datetime:", specific_datetime)
print("  Christmas:", christmas)

# Accessing components of datetime objects
print("\\nDatetime components:")
print("  Year:", now.year)
print("  Month:", now.month)
print("  Day:", now.day)
print("  Hour:", now.hour)
print("  Minute:", now.minute)
print("  Second:", now.second)
print("  Weekday (0=Monday):", now.weekday())
print("  Day name:", now.strftime("%A"))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Date objects:
  Today: 2024-01-15
  Specific date: 2024-03-15
  New Year's: 2024-01-01

Time objects:
  Current time: 14:30:45
  Precise time: 09:15:30.500000
  Midnight: 00:00:00

Datetime objects:
  Now: 2024-01-15 10:30:15.123456
  Specific datetime: 2024-03-15 14:30:45
  Christmas: 2024-12-25 00:00:00

Datetime components:
  Year: 2024
  Month: 1
  Day: 15
  Hour: 10
  Minute: 30
  Second: 15
  Weekday (0=Monday): 0
  Day name: Monday`
    },
    {
      type: 'code',
      title: 'Date and Time Arithmetic',
      language: 'python',
      code: `# Performing arithmetic operations with dates and times
from datetime import date, datetime, timedelta

# Current date and time
today = date.today()
now = datetime.now()

print("Date and time arithmetic:")
print("Today:", today)
print("Now:", now)

# Adding and subtracting time periods
one_day = timedelta(days=1)
one_week = timedelta(weeks=1)
one_hour = timedelta(hours=1)
mixed_delta = timedelta(days=5, hours=3, minutes=30)

tomorrow = today + one_day
last_week = today - one_week
next_hour = now + one_hour
future_time = now + mixed_delta

print("\\nArithmetic results:")
print("  Tomorrow:", tomorrow)
print("  Last week:", last_week)
print("  Next hour:", next_hour)
print("  In 5 days, 3 hours, 30 minutes:", future_time)

# Calculating differences between dates
birthday = date(2024, 6, 15)
days_until_birthday = birthday - today
age_in_days = today - date(2000, 1, 1)

print("\\nDate differences:")
print("  Birthday:", birthday)
print("  Days until birthday:", days_until_birthday.days)
print("  Age in days (if born Jan 1, 2000):", age_in_days.days)

# Working with business days
def add_business_days(start_date, business_days):
    """Add business days (excluding weekends)"""
    current_date = start_date
    days_added = 0
    
    while days_added < business_days:
        current_date = current_date + timedelta(days=1)
        # Skip weekends (Saturday=5, Sunday=6)
        if current_date.weekday() < 5:
            days_added = days_added + 1
    
    return current_date

# Calculate business days
project_start = date(2024, 1, 15)  # Monday
project_deadline = add_business_days(project_start, 10)

print("\\nBusiness day calculation:")
print("  Project start:", project_start, "(" + project_start.strftime("%A") + ")")
print("  10 business days later:", project_deadline, "(" + project_deadline.strftime("%A") + ")")

# Timedelta components
large_delta = timedelta(days=100, hours=5, minutes=30, seconds=45)
print("\\nTimedelta components:")
print("  Total timedelta:", large_delta)
print("  Days:", large_delta.days)
print("  Seconds (remainder):", large_delta.seconds)
print("  Total seconds:", int(large_delta.total_seconds()))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Date and time arithmetic:
Today: 2024-01-15
Now: 2024-01-15 10:30:15.123456

Arithmetic results:
  Tomorrow: 2024-01-16
  Last week: 2024-01-08
  Next hour: 2024-01-15 11:30:15.123456
  In 5 days, 3 hours, 30 minutes: 2024-01-20 14:00:15.123456

Date differences:
  Birthday: 2024-06-15
  Days until birthday: 152
  Age in days (if born Jan 1, 2000): 8780

Business day calculation:
  Project start: 2024-01-15 (Monday)
  10 business days later: 2024-01-29 (Monday)

Timedelta components:
  Total timedelta: 100 days, 5:30:45
  Days: 100
  Seconds (remainder): 19845
  Total seconds: 8659845`
    },
    {
      type: 'text',
      title: 'Comparing and Sorting Dates',
      content: `Datetime objects support comparison operations, making it easy to sort events, find the earliest/latest dates, and create date ranges.

**Comparison operations:**
- **==, !=**: Test for equality
- **<, <=, >, >=**: Compare chronological order
- **min(), max()**: Find earliest/latest dates
- **sorted()**: Sort collections of dates

**Practical applications:**
- **Event scheduling**: Find next available slot
- **Data filtering**: Select records within date ranges
- **Sorting**: Order events chronologically
- **Validation**: Ensure end dates are after start dates

**Date ranges:**
- Generate sequences of dates
- Check if dates fall within ranges
- Calculate overlapping periods
- Schedule recurring events`
    },
    {
      type: 'code',
      title: 'Comparing and Sorting Dates',
      language: 'python',
      code: `# Comparing and sorting datetime objects
from datetime import date, datetime, timedelta

# Sample dates for comparison
dates = [
    date(2024, 3, 15),
    date(2024, 1, 1),
    date(2024, 12, 25),
    date(2024, 6, 15),
    date(2024, 9, 1)
]

# Sample events with datetimes
events = [
    {"name": "Meeting", "datetime": datetime(2024, 1, 15, 14, 30)},
    {"name": "Conference", "datetime": datetime(2024, 1, 15, 9, 0)},
    {"name": "Lunch", "datetime": datetime(2024, 1, 15, 12, 30)},
    {"name": "Deadline", "datetime": datetime(2024, 1, 16, 17, 0)}
]

print("Date comparison and sorting:")
print("Original dates:", dates)

# Sort dates
sorted_dates = sorted(dates)
print("Sorted dates:", sorted_dates)

# Find earliest and latest dates
earliest = min(dates)
latest = max(dates)
print("Earliest date:", earliest)
print("Latest date:", latest)

# Compare specific dates
today = date.today()
new_year = date(2024, 1, 1)

print("\\nDate comparisons:")
print("  Today:", today)
print("  New Year:", new_year)
print("  Today > New Year:", today > new_year)
print("  Days between:", (today - new_year).days)

# Sort events by datetime
sorted_events = sorted(events, key=lambda event: event["datetime"])
print("\\nEvents sorted by time:")
for event in sorted_events:
    event_time = event["datetime"].strftime("%H:%M")
    print("  " + event_time + " - " + event["name"])

# Filter events within a time range
start_time = datetime(2024, 1, 15, 10, 0)
end_time = datetime(2024, 1, 15, 15, 0)

filtered_events = []
for event in events:
    if start_time <= event["datetime"] <= end_time:
        filtered_events.append(event)

print("\\nEvents between 10:00 and 15:00:")
for event in filtered_events:
    event_time = event["datetime"].strftime("%H:%M")
    print("  " + event_time + " - " + event["name"])

# Generate date range
def date_range(start_date, end_date, step_days=1):
    """Generate a range of dates"""
    current_date = start_date
    while current_date <= end_date:
        yield current_date
        current_date = current_date + timedelta(days=step_days)

# Create a week of dates
week_start = date(2024, 1, 15)
week_end = date(2024, 1, 21)

print("\\nWeek of dates:")
for day in date_range(week_start, week_end):
    day_name = day.strftime("%A")
    print("  " + str(day) + " (" + day_name + ")")

# Check if date is in range
def is_date_in_range(check_date, start_date, end_date):
    """Check if a date falls within a range"""
    return start_date <= check_date <= end_date

vacation_start = date(2024, 7, 1)
vacation_end = date(2024, 7, 15)
test_date = date(2024, 7, 10)

print("\\nDate range check:")
print("  Vacation period:", vacation_start, "to", vacation_end)
print("  Test date:", test_date)
print("  Is in vacation period:", is_date_in_range(test_date, vacation_start, vacation_end))`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Date comparison and sorting:
Original dates: [datetime.date(2024, 3, 15), datetime.date(2024, 1, 1), datetime.date(2024, 12, 25), datetime.date(2024, 6, 15), datetime.date(2024, 9, 1)]
Sorted dates: [datetime.date(2024, 1, 1), datetime.date(2024, 3, 15), datetime.date(2024, 6, 15), datetime.date(2024, 9, 1), datetime.date(2024, 12, 25)]
Earliest date: 2024-01-01
Latest date: 2024-12-25

Date comparisons:
  Today: 2024-01-15
  New Year: 2024-01-01
  Today > New Year: True
  Days between: 14

Events sorted by time:
  09:00 - Conference
  12:30 - Lunch
  14:30 - Meeting
  17:00 - Deadline

Events between 10:00 and 15:00:
  12:30 - Lunch
  14:30 - Meeting

Week of dates:
  2024-01-15 (Monday)
  2024-01-16 (Tuesday)
  2024-01-17 (Wednesday)
  2024-01-18 (Thursday)
  2024-01-19 (Friday)
  2024-01-20 (Saturday)
  2024-01-21 (Sunday)

Date range check:
  Vacation period: 2024-07-01 to 2024-07-15
  Test date: 2024-07-10
  Is in vacation period: True`
    },
    {
      type: 'code',
      title: 'Practical Datetime Applications',
      language: 'python',
      code: `# Real-world applications of datetime operations
from datetime import date, datetime, timedelta

class EventScheduler:
    """Example class for managing events and schedules"""
    
    def __init__(self):
        self.events = []
    
    def add_event(self, name, event_date, duration_hours=1):
        """Add an event to the schedule"""
        end_time = event_date + timedelta(hours=duration_hours)
        event = {
            "name": name,
            "start": event_date,
            "end": end_time,
            "duration_hours": duration_hours
        }
        self.events.append(event)
        return event
    
    def get_events_on_date(self, target_date):
        """Get all events on a specific date"""
        events_on_date = []
        for event in self.events:
            if event["start"].date() == target_date:
                events_on_date.append(event)
        return sorted(events_on_date, key=lambda e: e["start"])
    
    def get_upcoming_events(self, days=7):
        """Get events in the next N days"""
        now = datetime.now()
        cutoff = now + timedelta(days=days)
        
        upcoming = []
        for event in self.events:
            if now <= event["start"] <= cutoff:
                upcoming.append(event)
        
        return sorted(upcoming, key=lambda e: e["start"])
    
    def check_conflicts(self, new_start, new_end):
        """Check if a new event conflicts with existing events"""
        conflicts = []
        for event in self.events:
            # Check for time overlap
            if (new_start < event["end"] and new_end > event["start"]):
                conflicts.append(event)
        return conflicts

class AgeCalculator:
    """Calculate ages and age-related information"""
    
    @staticmethod
    def calculate_age(birth_date, reference_date=None):
        """Calculate age in years"""
        if reference_date is None:
            reference_date = date.today()
        
        age = reference_date.year - birth_date.year
        
        # Check if birthday has occurred this year
        if reference_date.month < birth_date.month or \\
           (reference_date.month == birth_date.month and reference_date.day < birth_date.day):
            age = age - 1
        
        return age
    
    @staticmethod
    def days_until_birthday(birth_date, reference_date=None):
        """Calculate days until next birthday"""
        if reference_date is None:
            reference_date = date.today()
        
        # Get this year's birthday
        this_year_birthday = date(reference_date.year, birth_date.month, birth_date.day)
        
        # If birthday already passed this year, use next year
        if this_year_birthday < reference_date:
            next_birthday = date(reference_date.year + 1, birth_date.month, birth_date.day)
        else:
            next_birthday = this_year_birthday
        
        return (next_birthday - reference_date).days

# Test EventScheduler
print("Event Scheduling System:")
print("=" * 30)

scheduler = EventScheduler()

# Add some events
scheduler.add_event("Team Meeting", datetime(2024, 1, 15, 10, 0), 2)
scheduler.add_event("Client Call", datetime(2024, 1, 15, 14, 30), 1)
scheduler.add_event("Project Deadline", datetime(2024, 1, 16, 17, 0), 0.5)
scheduler.add_event("Conference", datetime(2024, 1, 20, 9, 0), 8)

# Get events for a specific date
today_events = scheduler.get_events_on_date(date(2024, 1, 15))
print("Events today (Jan 15):")
for event in today_events:
    start_time = event["start"].strftime("%H:%M")
    end_time = event["end"].strftime("%H:%M")
    print("  " + start_time + "-" + end_time + ": " + event["name"])

# Get upcoming events
upcoming = scheduler.get_upcoming_events(days=7)
print("\\nUpcoming events (next 7 days):")
for event in upcoming:
    event_date = event["start"].strftime("%Y-%m-%d %H:%M")
    print("  " + event_date + ": " + event["name"])

# Check for conflicts
new_meeting_start = datetime(2024, 1, 15, 11, 0)
new_meeting_end = datetime(2024, 1, 15, 12, 0)
conflicts = scheduler.check_conflicts(new_meeting_start, new_meeting_end)

print("\\nConflict check for 11:00-12:00 on Jan 15:")
if conflicts:
    for conflict in conflicts:
        conflict_time = conflict["start"].strftime("%H:%M") + "-" + conflict["end"].strftime("%H:%M")
        print("  Conflict with: " + conflict["name"] + " (" + conflict_time + ")")
else:
    print("  No conflicts found")

# Test AgeCalculator
print("\\nAge Calculation System:")
print("=" * 25)

# Sample birthdates
people = [
    {"name": "Alice", "birth_date": date(1990, 3, 15)},
    {"name": "Bob", "birth_date": date(1985, 8, 22)},
    {"name": "Charlie", "birth_date": date(2000, 12, 1)}
]

reference_date = date(2024, 1, 15)

for person in people:
    age = AgeCalculator.calculate_age(person["birth_date"], reference_date)
    days_to_birthday = AgeCalculator.days_until_birthday(person["birth_date"], reference_date)
    
    print(person["name"] + ":")
    print("  Born:", person["birth_date"])
    print("  Age:", age, "years")
    print("  Days until birthday:", days_to_birthday)
    print()

# Calculate work days between dates
def count_work_days(start_date, end_date):
    """Count business days (excluding weekends) between two dates"""
    work_days = 0
    current_date = start_date
    
    while current_date <= end_date:
        # Monday=0, Sunday=6; weekdays are 0-4
        if current_date.weekday() < 5:
            work_days = work_days + 1
        current_date = current_date + timedelta(days=1)
    
    return work_days

project_start = date(2024, 1, 15)  # Monday
project_end = date(2024, 1, 26)    # Friday

work_days = count_work_days(project_start, project_end)
total_days = (project_end - project_start).days + 1

print("Project timeline:")
print("  Start date:", project_start, "(" + project_start.strftime("%A") + ")")
print("  End date:", project_end, "(" + project_end.strftime("%A") + ")")
print("  Total days:", total_days)
print("  Work days:", work_days)
print("  Weekend days:", total_days - work_days)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Event Scheduling System:
==============================
Events today (Jan 15):
  10:00-12:00: Team Meeting
  14:30-15:30: Client Call

Upcoming events (next 7 days):
  2024-01-15 10:00: Team Meeting
  2024-01-15 14:30: Client Call
  2024-01-16 17:00: Project Deadline
  2024-01-20 09:00: Conference

Conflict check for 11:00-12:00 on Jan 15:
  Conflict with: Team Meeting (10:00-12:00)

Age Calculation System:
=========================
Alice:
  Born: 1990-03-15
  Age: 33
  Days until birthday: 60

Bob:
  Born: 1985-08-22
  Age: 38
  Days until birthday: 220

Charlie:
  Born: 2000-12-01
  Age: 23
  Days until birthday: 321

Project timeline:
  Start date: 2024-01-15 (Monday)
  End date: 2024-01-26 (Friday)
  Total days: 12
  Work days: 10
  Weekend days: 2`
    }
  ],
  keyTakeaways: [
    'Python datetime module provides date, time, datetime, and timedelta classes for temporal operations',
    'Use datetime arithmetic with timedelta objects to add/subtract time periods',
    'Datetime objects support comparison operations for sorting and filtering',
    'Extract components (year, month, day, hour, etc.) from datetime objects for analysis',
    'Generate date ranges and check date membership for scheduling applications',
    'Common patterns include age calculation, business day counting, and event scheduling'
  ]
};