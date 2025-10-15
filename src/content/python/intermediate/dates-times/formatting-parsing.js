// Lesson content for Date and Time Formatting and Parsing
export const formattingParsingContent = {
  id: 'formatting-parsing',
  title: 'Date and Time Formatting and Parsing',
  duration: '28 min',
  overview: `Master the art of converting dates and times between strings and datetime objects! Learn to format dates for display, parse user input, and handle various date formats with Python's powerful strftime and strptime methods.`,
  objectives: [
    'Format datetime objects into readable strings using strftime',
    'Parse string dates into datetime objects using strptime',
    'Work with common date format codes and patterns',
    'Handle user input and validate date strings',
    'Convert between different date format standards',
    'Build robust date parsing functions for real applications',
  ],
  sections: [
    {
      type: 'text',
      title: 'Understanding Date Formatting and Parsing',
      content: `Date formatting and parsing are essential skills for working with dates from files, user input, and APIs. Python provides powerful tools for these operations.

**Key concepts:**
- **Formatting**: Converting datetime objects to strings (strftime)
- **Parsing**: Converting strings to datetime objects (strptime)
- **Format codes**: Special codes that represent date/time components
- **Locale-aware formatting**: Handling different languages and regions

**Common use cases:**
- **Display dates**: Format for user interfaces and reports
- **File processing**: Read dates from CSV files and logs
- **API integration**: Parse dates from web services
- **User input**: Validate and convert date strings from forms
- **Data analysis**: Convert date columns in datasets

**The datetime.strftime() method:**
- Converts datetime objects to formatted strings
- Uses format codes to specify the output format
- Returns a string representation

**The datetime.strptime() method:**
- Converts formatted strings to datetime objects
- Uses format codes to specify the input format
- Returns a datetime object`
    },
    {
      type: 'code',
      title: 'Basic Date Formatting with strftime',
      language: 'python',
      code: `# Formatting datetime objects into strings
from datetime import datetime

# Create a datetime object
now = datetime(2024, 3, 15, 14, 30, 45)

# Basic formatting examples
basic_format = now.strftime("%Y-%m-%d")
time_format = now.strftime("%H:%M:%S")
full_format = now.strftime("%Y-%m-%d %H:%M:%S")

print("Basic date:", basic_format)
print("Time only:", time_format)
print("Full datetime:", full_format)

# More readable formats
readable_date = now.strftime("%B %d, %Y")
short_date = now.strftime("%b %d, %Y")

print("Readable date:", readable_date)
print("Short date:", short_date)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Basic date: 2024-03-15
Time only: 14:30:45
Full datetime: 2024-03-15 14:30:45
Readable date: March 15, 2024
Short date: Mar 15, 2024`
    },
    {
      type: 'code',
      title: 'Common Format Codes',
      language: 'python',
      code: `# Comprehensive format code examples
from datetime import datetime

# Sample datetime
dt = datetime(2024, 7, 4, 15, 30, 45)

# Date components
year_formats = {
    "%Y": dt.strftime("%Y"),  # 4-digit year
    "%y": dt.strftime("%y"),  # 2-digit year
}

month_formats = {
    "%m": dt.strftime("%m"),  # Month as number (01-12)
    "%B": dt.strftime("%B"),  # Full month name
    "%b": dt.strftime("%b"),  # Abbreviated month name
}

day_formats = {
    "%d": dt.strftime("%d"),  # Day of month (01-31)
    "%A": dt.strftime("%A"),  # Full weekday name
    "%a": dt.strftime("%a"),  # Abbreviated weekday name
}

time_formats = {
    "%H": dt.strftime("%H"),  # Hour (00-23)
    "%I": dt.strftime("%I"),  # Hour (01-12)
    "%M": dt.strftime("%M"),  # Minute (00-59)
    "%S": dt.strftime("%S"),  # Second (00-59)
    "%p": dt.strftime("%p"),  # AM/PM
}

print("Year formats:")
for code, result in year_formats.items():
    print(f"  {code}: {result}")

print("\\nMonth formats:")
for code, result in month_formats.items():
    print(f"  {code}: {result}")

print("\\nDay formats:")
for code, result in day_formats.items():
    print(f"  {code}: {result}")

print("\\nTime formats:")
for code, result in time_formats.items():
    print(f"  {code}: {result}")

# Practical format combinations
print("\\nPractical combinations:")
formats = [
    ("%Y-%m-%d", "ISO format"),
    ("%m/%d/%Y", "US format"),
    ("%d/%m/%Y", "European format"),
    ("%B %d, %Y", "Long date"),
    ("%a, %b %d", "Short date with weekday"),
    ("%I:%M %p", "12-hour time"),
    ("%H:%M", "24-hour time")
]

for format_code, description in formats:
    result = dt.strftime(format_code)
    print(f"  {description}: {result}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Year formats:
  %Y: 2024
  %y: 24

Month formats:
  %m: 07
  %B: July
  %b: Jul

Day formats:
  %d: 04
  %A: Thursday
  %a: Thu

Time formats:
  %H: 15
  %I: 03
  %M: 30
  %S: 45
  %p: PM

Practical combinations:
  ISO format: 2024-07-04
  US format: 07/04/2024
  European format: 04/07/2024
  Long date: July 04, 2024
  Short date with weekday: Thu, Jul 04
  12-hour time: 03:30 PM
  24-hour time: 15:30`
    },
    {
      type: 'code',
      title: 'Parsing Strings to Datetime with strptime',
      language: 'python',
      code: `# Converting strings to datetime objects
from datetime import datetime

# Basic parsing examples
date_string = "2024-03-15"
parsed_date = datetime.strptime(date_string, "%Y-%m-%d")

time_string = "14:30:45"
parsed_time = datetime.strptime(time_string, "%H:%M:%S")

full_string = "2024-03-15 14:30:45"
parsed_full = datetime.strptime(full_string, "%Y-%m-%d %H:%M:%S")

print("Original string:", date_string)
print("Parsed date:", parsed_date)
print("Date type:", type(parsed_date))

print("\\nOriginal string:", time_string)
print("Parsed time:", parsed_time)

print("\\nOriginal string:", full_string)
print("Parsed full:", parsed_full)

# Parsing different formats
formats_and_strings = [
    ("March 15, 2024", "%B %d, %Y"),
    ("15/03/2024", "%d/%m/%Y"),
    ("03-15-24", "%m-%d-%y"),
    ("Thu, Mar 15", "%a, %b %d"),
    ("3:30 PM", "%I:%M %p")
]

print("\\nParsing various formats:")
for date_str, format_code in formats_and_strings:
    try:
        parsed = datetime.strptime(date_str, format_code)
        print(f"'{date_str}' -> {parsed}")
    except ValueError as e:
        print(f"'{date_str}' -> Error: {e}")

# Extracting components from parsed dates
birthday_str = "July 4, 1976"
birthday = datetime.strptime(birthday_str, "%B %d, %Y")

print(f"\\nBirthday string: {birthday_str}")
print(f"Year: {birthday.year}")
print(f"Month: {birthday.month}")
print(f"Day: {birthday.day}")
print(f"Weekday: {birthday.strftime('%A')}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Original string: 2024-03-15
Parsed date: 2024-03-15 00:00:00
Date type: <class 'datetime.datetime'>

Original string: 14:30:45
Parsed time: 1900-01-01 14:30:45

Original string: 2024-03-15 14:30:45
Parsed full: 2024-03-15 14:30:45

Parsing various formats:
'March 15, 2024' -> 2024-03-15 00:00:00
'15/03/2024' -> 2024-03-15 00:00:00
'03-15-24' -> 2024-03-15 00:00:00
'Thu, Mar 15' -> 1900-03-15 00:00:00
'3:30 PM' -> 1900-01-01 15:30:00

Birthday string: July 4, 1976
Year: 1976
Month: 7
Day: 4
Weekday: Monday`
    },
    {
      type: 'code',
      title: 'Error Handling and Validation',
      language: 'python',
      code: `# Robust date parsing with error handling
from datetime import datetime

def parse_date_safely(date_string, format_string):
    """Safely parse a date string with error handling"""
    try:
        return datetime.strptime(date_string, format_string)
    except ValueError as e:
        return f"Error: {e}"

def try_multiple_formats(date_string, formats):
    """Try parsing a date string with multiple format options"""
    for format_str in formats:
        try:
            return datetime.strptime(date_string, format_str)
        except ValueError:
            continue
    return None

# Test safe parsing
test_dates = [
    ("2024-03-15", "%Y-%m-%d"),
    ("invalid-date", "%Y-%m-%d"),
    ("2024-13-45", "%Y-%m-%d"),  # Invalid month and day
    ("March 15, 2024", "%B %d, %Y")
]

print("Safe parsing results:")
for date_str, format_str in test_dates:
    result = parse_date_safely(date_str, format_str)
    print(f"  '{date_str}' -> {result}")

# Test multiple format parsing
common_formats = [
    "%Y-%m-%d",           # 2024-03-15
    "%m/%d/%Y",           # 03/15/2024
    "%d/%m/%Y",           # 15/03/2024
    "%B %d, %Y",          # March 15, 2024
    "%b %d, %Y",          # Mar 15, 2024
    "%Y-%m-%d %H:%M:%S"   # 2024-03-15 14:30:45
]

ambiguous_dates = [
    "2024-03-15",
    "03/15/2024",
    "March 15, 2024",
    "unknown format",
    "2024-03-15 14:30:45"
]

print("\\nTrying multiple formats:")
for date_str in ambiguous_dates:
    result = try_multiple_formats(date_str, common_formats)
    if result:
        print(f"  '{date_str}' -> {result}")
    else:
        print(f"  '{date_str}' -> Could not parse with any format")

# Validation function
def validate_date_input(user_input):
    """Validate and parse user date input"""
    if not user_input.strip():
        return "Error: Empty input"
    
    # Try common formats
    formats = ["%Y-%m-%d", "%m/%d/%Y", "%B %d, %Y"]
    
    for fmt in formats:
        try:
            parsed = datetime.strptime(user_input.strip(), fmt)
            
            # Additional validation: check if date is reasonable
            current_year = datetime.now().year
            if parsed.year < 1900 or parsed.year > current_year + 100:
                return f"Error: Year {parsed.year} seems unreasonable"
            
            return parsed
            
        except ValueError:
            continue
    
    return f"Error: Could not parse '{user_input}'"

# Test validation
test_inputs = [
    "2024-03-15",
    "03/15/2024", 
    "March 15, 2024",
    "1800-01-01",  # Too old
    "3000-01-01",  # Too far in future
    "invalid",
    ""
]

print("\\nDate validation results:")
for user_input in test_inputs:
    result = validate_date_input(user_input)
    print(f"  Input: '{user_input}' -> {result}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Safe parsing results:
  '2024-03-15' -> 2024-03-15 00:00:00
  'invalid-date' -> Error: time data 'invalid-date' does not match format '%Y-%m-%d'
  '2024-13-45' -> Error: time data '2024-13-45' does not match format '%Y-%m-%d'
  'March 15, 2024' -> 2024-03-15 00:00:00

Trying multiple formats:
  '2024-03-15' -> 2024-03-15 00:00:00
  '03/15/2024' -> 2024-03-15 00:00:00
  'March 15, 2024' -> 2024-03-15 00:00:00
  'unknown format' -> Could not parse with any format
  '2024-03-15 14:30:45' -> 2024-03-15 14:30:45

Date validation results:
  Input: '2024-03-15' -> 2024-03-15 00:00:00
  Input: '03/15/2024' -> 2024-03-15 00:00:00
  Input: 'March 15, 2024' -> 2024-03-15 00:00:00
  Input: '1800-01-01' -> Error: Year 1800 seems unreasonable
  Input: '3000-01-01' -> Error: Year 3000 seems unreasonable
  Input: 'invalid' -> Error: Could not parse 'invalid'
  Input: '' -> Error: Empty input`
    },
    {
      type: 'code',
      title: 'Real-World Application: Log Parser',
      language: 'python',
      code: `# Practical application: parsing dates from log files
from datetime import datetime

class LogParser:
    """Parser for application log files with timestamps"""
    
    def __init__(self):
        # Common log timestamp formats
        self.timestamp_formats = [
            "%Y-%m-%d %H:%M:%S",                    # 2024-03-15 14:30:45
            "%Y-%m-%d %H:%M:%S.%f",                 # 2024-03-15 14:30:45.123456
            "%d/%b/%Y:%H:%M:%S",                    # 15/Mar/2024:14:30:45
            "%Y-%m-%dT%H:%M:%S",                    # 2024-03-15T14:30:45 (ISO)
            "%b %d %H:%M:%S",                       # Mar 15 14:30:45
        ]
    
    def parse_timestamp(self, timestamp_str):
        """Parse timestamp from log entry"""
        timestamp_str = timestamp_str.strip()
        
        for fmt in self.timestamp_formats:
            try:
                return datetime.strptime(timestamp_str, fmt)
            except ValueError:
                continue
        
        return None
    
    def parse_log_line(self, log_line):
        """Parse a complete log line"""
        # Simple log format: [TIMESTAMP] LEVEL: MESSAGE
        if not log_line.startswith('['):
            return None
        
        # Extract timestamp
        end_bracket = log_line.find(']')
        if end_bracket == -1:
            return None
        
        timestamp_str = log_line[1:end_bracket]
        remainder = log_line[end_bracket + 1:].strip()
        
        # Parse timestamp
        timestamp = self.parse_timestamp(timestamp_str)
        if not timestamp:
            return None
        
        # Extract level and message
        parts = remainder.split(':', 1)
        if len(parts) != 2:
            return None
        
        level = parts[0].strip()
        message = parts[1].strip()
        
        return {
            'timestamp': timestamp,
            'level': level,
            'message': message
        }
    
    def analyze_logs(self, log_lines):
        """Analyze a list of log entries"""
        parsed_entries = []
        parse_errors = 0
        
        for line in log_lines:
            entry = self.parse_log_line(line)
            if entry:
                parsed_entries.append(entry)
            else:
                parse_errors += 1
        
        if not parsed_entries:
            return {"error": "No valid log entries found"}
        
        # Calculate statistics
        timestamps = [entry['timestamp'] for entry in parsed_entries]
        earliest = min(timestamps)
        latest = max(timestamps)
        duration = latest - earliest
        
        # Count by level
        level_counts = {}
        for entry in parsed_entries:
            level = entry['level']
            level_counts[level] = level_counts.get(level, 0) + 1
        
        return {
            'total_entries': len(parsed_entries),
            'parse_errors': parse_errors,
            'earliest_entry': earliest,
            'latest_entry': latest,
            'duration': duration,
            'level_counts': level_counts,
            'entries': parsed_entries
        }

# Test the log parser
print("Testing Log Parser:")
print("=" * 20)

parser = LogParser()

# Sample log entries in different formats
sample_logs = [
    "[2024-03-15 10:30:45] INFO: Application started",
    "[2024-03-15 10:30:46] DEBUG: Loading configuration",
    "[2024-03-15 10:30:47] WARNING: Configuration file not found",
    "[2024-03-15 10:30:48] ERROR: Database connection failed",
    "[15/Mar/2024:10:30:49] INFO: Retrying database connection",
    "[2024-03-15T10:30:50] INFO: Database connected successfully",
    "Invalid log line without timestamp",
    "[2024-03-15 10:30:51] INFO: Application ready to serve requests"
]

# Analyze the logs
analysis = parser.analyze_logs(sample_logs)

print("Log Analysis Results:")
print(f"Total valid entries: {analysis['total_entries']}")
print(f"Parse errors: {analysis['parse_errors']}")
print(f"Time span: {analysis['earliest_entry']} to {analysis['latest_entry']}")
print(f"Duration: {analysis['duration']}")

print("\\nEntries by level:")
for level, count in analysis['level_counts'].items():
    print(f"  {level}: {count}")

print("\\nFirst few parsed entries:")
for entry in analysis['entries'][:3]:
    formatted_time = entry['timestamp'].strftime("%Y-%m-%d %H:%M:%S")
    print(f"  {formatted_time} [{entry['level']}] {entry['message']}")

# Test date formatting for reports
print("\\nFormatted for report:")
for entry in analysis['entries'][:2]:
    readable_time = entry['timestamp'].strftime("%B %d, %Y at %I:%M:%S %p")
    print(f"  {readable_time}: {entry['message']}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Testing Log Parser:
====================
Log Analysis Results:
Total valid entries: 6
Parse errors: 1
Time span: 2024-03-15 10:30:45 to 2024-03-15 10:30:51
Duration: 0:00:06

Entries by level:
  INFO: 4
  DEBUG: 1
  WARNING: 1
  ERROR: 1

First few parsed entries:
  2024-03-15 10:30:45 [INFO] Application started
  2024-03-15 10:30:46 [DEBUG] Loading configuration
  2024-03-15 10:30:47 [WARNING] Configuration file not found

Formatted for report:
  March 15, 2024 at 10:30:45 AM: Application started
  March 15, 2024 at 10:30:46 AM: Loading configuration`
    }
  ],
  keyTakeaways: [
    'strftime() converts datetime objects to formatted strings for display and output',
    'strptime() converts formatted strings to datetime objects for processing',
    'Format codes like %Y, %m, %d, %H, %M, %S define date and time components',
    'Error handling is essential when parsing user input or external data',
    'Multiple format attempts allow flexible parsing of various date formats',
    'Real-world applications often require robust parsing with validation and fallbacks'
  ]
};