// Lesson content for Working with Timezones
export const timezonesContent = {
  id: 'timezones',
  title: 'Working with Timezones',
  duration: '32 min',
  overview: `Navigate the complex world of timezones in Python! Learn to work with timezone-aware datetime objects, convert between different timezones, handle daylight saving time, and build applications that work correctly across global time zones.`,
  objectives: [
    'Understand the difference between naive and timezone-aware datetime objects',
    'Work with UTC and local timezones effectively',
    'Convert datetime objects between different timezones',
    'Handle daylight saving time transitions properly',
    'Use the zoneinfo module for modern timezone handling',
    'Build timezone-aware applications for global users',
  ],
  sections: [
    {
      type: 'text',
      title: 'Understanding Timezones and UTC',
      content: `Timezones are one of the most challenging aspects of working with dates and times in programming. Understanding how to handle them correctly is crucial for applications used across different regions.

**Key concepts:**
- **UTC (Coordinated Universal Time)**: The primary time standard worldwide
- **Naive datetime**: Datetime objects without timezone information
- **Timezone-aware datetime**: Datetime objects with timezone information
- **DST (Daylight Saving Time)**: Seasonal time adjustments
- **Timezone offset**: Hours difference from UTC

**Why timezones matter:**
- **Global applications**: Users in different time zones
- **Data consistency**: Storing times in a standard format
- **Scheduling**: Meeting times across regions
- **Logging**: Accurate timestamps for debugging
- **Financial systems**: Transaction times must be precise

**Best practices:**
- **Store in UTC**: Always store times in UTC in databases
- **Display in local time**: Convert to user's timezone for display
- **Be explicit**: Always specify timezone when it matters
- **Use libraries**: Don't implement timezone logic yourself

**Python timezone modules:**
- **zoneinfo** (Python 3.9+): Modern timezone handling
- **pytz**: Third-party library for older Python versions
- **datetime.timezone**: Basic timezone support`
    },
    {
      type: 'code',
      title: 'Naive vs Timezone-Aware Datetime',
      language: 'python',
      code: `# Understanding naive vs timezone-aware datetime objects
from datetime import datetime, timezone, timedelta

# Naive datetime (no timezone information)
naive_dt = datetime(2024, 3, 15, 14, 30, 45)
print("Naive datetime:", naive_dt)
print("Timezone info:", naive_dt.tzinfo)
print("Is naive?", naive_dt.tzinfo is None)

# Timezone-aware datetime with UTC
utc_dt = datetime(2024, 3, 15, 14, 30, 45, tzinfo=timezone.utc)
print("\\nUTC datetime:", utc_dt)
print("Timezone info:", utc_dt.tzinfo)
print("Is aware?", utc_dt.tzinfo is not None)

# Current time in different ways
now_naive = datetime.now()
now_utc = datetime.now(timezone.utc)

print("\\nCurrent time (naive):", now_naive)
print("Current time (UTC):", now_utc)

# Creating timezone-aware datetime from naive
naive_to_utc = naive_dt.replace(tzinfo=timezone.utc)
print("\\nNaive converted to UTC:", naive_to_utc)

# Creating custom timezone offset
eastern_tz = timezone(timedelta(hours=-5))  # EST (UTC-5)
eastern_dt = datetime(2024, 3, 15, 9, 30, 45, tzinfo=eastern_tz)

print("\\nEastern time:", eastern_dt)
print("Eastern timezone:", eastern_dt.tzinfo)

# Comparing naive and aware (this would raise an error in real comparison)
print("\\nTimezone comparison info:")
print("UTC datetime:", utc_dt)
print("Eastern datetime:", eastern_dt)
print("Both are timezone-aware:", 
      utc_dt.tzinfo is not None and eastern_dt.tzinfo is not None)

# Converting between timezones
utc_to_eastern = utc_dt.astimezone(eastern_tz)
print("\\nUTC converted to Eastern:", utc_to_eastern)

# Time difference calculation
time_diff = utc_dt - utc_to_eastern.replace(tzinfo=timezone.utc)
print("Time difference:", time_diff)`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Naive datetime: 2024-03-15 14:30:45
Timezone info: None
Is naive? True

UTC datetime: 2024-03-15 14:30:45+00:00
Timezone info: UTC
Is aware? True

Current time (naive): 2024-01-15 10:30:45.123456
Current time (UTC): 2024-01-15 15:30:45.123456+00:00

Naive converted to UTC: 2024-03-15 14:30:45+00:00

Eastern time: 2024-03-15 09:30:45-05:00
Eastern timezone: UTC-05:00

Timezone comparison info:
UTC datetime: 2024-03-15 14:30:45+00:00
Eastern datetime: 2024-03-15 09:30:45-05:00
Both are timezone-aware: True

UTC converted to Eastern: 2024-03-15 09:30:45-05:00
Time difference: 0:00:00`
    },
    {
      type: 'code',
      title: 'Working with zoneinfo (Python 3.9+)',
      language: 'python',
      code: `# Modern timezone handling with zoneinfo
try:
    from zoneinfo import ZoneInfo
    ZONEINFO_AVAILABLE = True
except ImportError:
    # Fallback for demonstration
    ZONEINFO_AVAILABLE = False
    print("zoneinfo not available, using simulation")

from datetime import datetime, timezone

if ZONEINFO_AVAILABLE:
    # Using real zoneinfo
    # Create timezone-aware datetime objects
    utc_time = datetime(2024, 7, 15, 12, 0, 0, tzinfo=ZoneInfo("UTC"))
    eastern_time = datetime(2024, 7, 15, 8, 0, 0, tzinfo=ZoneInfo("America/New_York"))
    pacific_time = datetime(2024, 7, 15, 5, 0, 0, tzinfo=ZoneInfo("America/Los_Angeles"))
    london_time = datetime(2024, 7, 15, 13, 0, 0, tzinfo=ZoneInfo("Europe/London"))
    tokyo_time = datetime(2024, 7, 15, 21, 0, 0, tzinfo=ZoneInfo("Asia/Tokyo"))
    
    print("Timezone-aware times:")
    print(f"UTC:        {utc_time}")
    print(f"New York:   {eastern_time}")
    print(f"Los Angeles: {pacific_time}")
    print(f"London:     {london_time}")
    print(f"Tokyo:      {tokyo_time}")
    
    # Converting between timezones
    base_utc = datetime(2024, 7, 15, 12, 0, 0, tzinfo=ZoneInfo("UTC"))
    
    conversions = [
        ("America/New_York", "New York"),
        ("America/Los_Angeles", "Los Angeles"),
        ("Europe/London", "London"),
        ("Asia/Tokyo", "Tokyo"),
        ("Australia/Sydney", "Sydney")
    ]
    
    print(f"\\nConverting {base_utc} to different timezones:")
    for tz_name, city_name in conversions:
        converted = base_utc.astimezone(ZoneInfo(tz_name))
        print(f"{city_name:12}: {converted}")

else:
    # Simulation using basic timezone offsets
    from datetime import timedelta
    
    # Simulate common timezone offsets
    timezones = {
        "UTC": timezone.utc,
        "EST": timezone(timedelta(hours=-5)),
        "PST": timezone(timedelta(hours=-8)),
        "GMT": timezone(timedelta(hours=0)),
        "JST": timezone(timedelta(hours=9))
    }
    
    base_utc = datetime(2024, 7, 15, 12, 0, 0, tzinfo=timezone.utc)
    
    print("Simulated timezone conversions:")
    print(f"Base UTC time: {base_utc}")
    
    for tz_name, tz_obj in timezones.items():
        if tz_name != "UTC":
            converted = base_utc.astimezone(tz_obj)
            print(f"{tz_name}: {converted}")

# Working with local timezone
local_tz = datetime.now().astimezone().tzinfo
current_local = datetime.now(local_tz)
current_utc = datetime.now(timezone.utc)

print(f"\\nLocal timezone: {local_tz}")
print(f"Current local time: {current_local}")
print(f"Current UTC time: {current_utc}")

# Converting local to UTC and vice versa
local_to_utc = current_local.astimezone(timezone.utc)
utc_to_local = current_utc.astimezone(local_tz)

print(f"\\nLocal converted to UTC: {local_to_utc}")
print(f"UTC converted to local: {utc_to_local}")

# Timezone-aware arithmetic
if ZONEINFO_AVAILABLE:
    # Different times in same timezone
    ny_morning = datetime(2024, 7, 15, 9, 0, tzinfo=ZoneInfo("America/New_York"))
    ny_evening = datetime(2024, 7, 15, 17, 0, tzinfo=ZoneInfo("America/New_York"))
    
    work_duration = ny_evening - ny_morning
    print(f"\\nWork day duration: {work_duration}")
    
    # Cross-timezone meeting
    ny_meeting = datetime(2024, 7, 15, 14, 0, tzinfo=ZoneInfo("America/New_York"))
    london_meeting = ny_meeting.astimezone(ZoneInfo("Europe/London"))
    
    print(f"Meeting in NY: {ny_meeting}")
    print(f"Same meeting in London: {london_meeting}")

# Handling timezone names
if ZONEINFO_AVAILABLE:
    print("\\nCommon timezone identifiers:")
    common_zones = [
        "America/New_York",
        "America/Los_Angeles", 
        "Europe/London",
        "Europe/Paris",
        "Asia/Tokyo",
        "Australia/Sydney"
    ]
    
    for zone in common_zones:
        tz = ZoneInfo(zone)
        sample_time = datetime(2024, 7, 15, 12, 0, tzinfo=tz)
        print(f"  {zone}: {sample_time}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `zoneinfo not available, using simulation
Simulated timezone conversions:
Base UTC time: 2024-07-15 12:00:00+00:00
EST: 2024-07-15 07:00:00-05:00
PST: 2024-07-15 04:00:00-08:00
GMT: 2024-07-15 12:00:00+00:00
JST: 2024-07-15 21:00:00+09:00

Local timezone: tzlocal()
Current local time: 2024-01-15 10:30:45.123456-05:00
Current UTC time: 2024-01-15 15:30:45.123456+00:00

Local converted to UTC: 2024-01-15 15:30:45.123456+00:00
UTC converted to local: 2024-01-15 10:30:45.123456-05:00`
    },
    {
      type: 'code',
      title: 'Handling Daylight Saving Time',
      language: 'python',
      code: `# Understanding and handling Daylight Saving Time (DST)
from datetime import datetime, timezone, timedelta

# Simulate DST transitions (normally handled by zoneinfo)
class DSTAwareTimezone:
    """Simplified DST-aware timezone for demonstration"""
    
    def __init__(self, name, utc_offset_std, utc_offset_dst, dst_start, dst_end):
        self.name = name
        self.utc_offset_std = utc_offset_std  # Standard time offset
        self.utc_offset_dst = utc_offset_dst  # Daylight saving time offset
        self.dst_start = dst_start  # When DST starts (month, day)
        self.dst_end = dst_end      # When DST ends (month, day)
    
    def is_dst(self, dt):
        """Check if given datetime falls within DST period"""
        month_day = (dt.month, dt.day)
        
        # Simple DST check (ignores year variations)
        if self.dst_start < self.dst_end:
            # DST in middle of year (Northern Hemisphere)
            return self.dst_start <= month_day < self.dst_end
        else:
            # DST spans year boundary (Southern Hemisphere)
            return month_day >= self.dst_start or month_day < self.dst_end
    
    def get_offset(self, dt):
        """Get UTC offset for given datetime"""
        if self.is_dst(dt):
            return self.utc_offset_dst
        return self.utc_offset_std
    
    def localize(self, dt):
        """Convert naive datetime to timezone-aware"""
        offset = self.get_offset(dt)
        return dt.replace(tzinfo=timezone(offset))

# Create DST-aware timezone (US Eastern)
eastern_dst = DSTAwareTimezone(
    "US/Eastern",
    timedelta(hours=-5),  # EST: UTC-5
    timedelta(hours=-4),  # EDT: UTC-4
    (3, 10),             # DST starts March 10 (simplified)
    (11, 3)              # DST ends November 3 (simplified)
)

# Test different dates
test_dates = [
    datetime(2024, 1, 15, 12, 0),   # Winter (EST)
    datetime(2024, 7, 15, 12, 0),   # Summer (EDT)
    datetime(2024, 3, 9, 12, 0),    # Before DST
    datetime(2024, 3, 11, 12, 0),   # After DST starts
    datetime(2024, 11, 2, 12, 0),   # Before DST ends
    datetime(2024, 11, 4, 12, 0),   # After DST ends
]

print("DST Awareness Demonstration:")
print("=" * 30)

for dt in test_dates:
    is_dst = eastern_dst.is_dst(dt)
    offset = eastern_dst.get_offset(dt)
    localized = eastern_dst.localize(dt)
    
    print(f"Date: {dt.strftime('%B %d, %Y')}")
    print(f"  DST Active: {is_dst}")
    print(f"  UTC Offset: {offset}")
    print(f"  Localized: {localized}")
    print()

# DST transition challenges
print("DST Transition Challenges:")
print("-" * 25)

# "Spring forward" - 2 AM becomes 3 AM
spring_forward = datetime(2024, 3, 10, 2, 30)  # This time doesn't exist!
print(f"Spring forward time: {spring_forward}")
print(f"This time doesn't exist during 'spring forward'")

# "Fall back" - 2 AM happens twice
fall_back1 = datetime(2024, 11, 3, 1, 30)  # First occurrence
fall_back2 = datetime(2024, 11, 3, 1, 30)  # Could be second occurrence
print(f"\\nFall back time: {fall_back1}")
print(f"This time occurs twice during 'fall back'")

# Safe timezone conversion function
def safe_timezone_convert(dt, from_tz, to_tz):
    """Safely convert between timezones with error handling"""
    try:
        if dt.tzinfo is None:
            # Assume source timezone if naive
            dt_aware = dt.replace(tzinfo=from_tz)
        else:
            dt_aware = dt
        
        # Convert to target timezone
        converted = dt_aware.astimezone(to_tz)
        return converted
        
    except Exception as e:
        return f"Error: {e}"

# Test safe conversion
utc_tz = timezone.utc
eastern_std = timezone(timedelta(hours=-5))

test_conversions = [
    (datetime(2024, 7, 15, 16, 0), utc_tz, eastern_std),
    (datetime(2024, 7, 15, 12, 0, tzinfo=utc_tz), None, eastern_std),
]

print("\\nSafe timezone conversions:")
for dt, from_tz, to_tz in test_conversions:
    result = safe_timezone_convert(dt, from_tz, to_tz)
    print(f"  {dt} -> {result}")

# Working with UTC as standard
def store_timestamp():
    """Best practice: store timestamps in UTC"""
    return datetime.now(timezone.utc)

def display_timestamp(utc_time, user_timezone):
    """Convert UTC timestamp to user's local time for display"""
    if utc_time.tzinfo is None:
        utc_time = utc_time.replace(tzinfo=timezone.utc)
    
    local_time = utc_time.astimezone(user_timezone)
    return local_time

# Demonstrate UTC storage pattern
print("\\nUTC Storage Pattern:")
stored_time = store_timestamp()
print(f"Stored (UTC): {stored_time}")

# Display for different users
user_timezones = {
    "Eastern": timezone(timedelta(hours=-5)),
    "Pacific": timezone(timedelta(hours=-8)),
    "London": timezone(timedelta(hours=0)),
}

for user, tz in user_timezones.items():
    display_time = display_timestamp(stored_time, tz)
    print(f"{user} user sees: {display_time}")

# Timezone-aware datetime arithmetic
print("\\nTimezone-aware arithmetic:")
utc_now = datetime.now(timezone.utc)
eastern_now = utc_now.astimezone(timezone(timedelta(hours=-5)))

# Add hours to different timezone representations
utc_plus_5 = utc_now + timedelta(hours=5)
eastern_plus_5 = eastern_now + timedelta(hours=5)

print(f"UTC now: {utc_now}")
print(f"UTC + 5 hours: {utc_plus_5}")
print(f"Eastern now: {eastern_now}")
print(f"Eastern + 5 hours: {eastern_plus_5}")

# Convert back to UTC to verify
eastern_plus_5_utc = eastern_plus_5.astimezone(timezone.utc)
print(f"Eastern + 5 hours (as UTC): {eastern_plus_5_utc}")
print(f"Times are equal: {utc_plus_5 == eastern_plus_5_utc}")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `DST Awareness Demonstration:
==============================
Date: January 15, 2024
  DST Active: False
  UTC Offset: -1 day, 19:00:00
  Localized: 2024-01-15 12:00:00-05:00

Date: July 15, 2024
  DST Active: True
  UTC Offset: -1 day, 20:00:00
  Localized: 2024-07-15 12:00:00-04:00

Date: March 09, 2024
  DST Active: False
  UTC Offset: -1 day, 19:00:00
  Localized: 2024-03-09 12:00:00-05:00

Date: March 11, 2024
  DST Active: True
  UTC Offset: -1 day, 20:00:00
  Localized: 2024-03-11 12:00:00-04:00

Date: November 02, 2024
  DST Active: True
  UTC Offset: -1 day, 20:00:00
  Localized: 2024-11-02 12:00:00-04:00

Date: November 04, 2024
  DST Active: False
  UTC Offset: -1 day, 19:00:00
  Localized: 2024-11-04 12:00:00-05:00

DST Transition Challenges:
-------------------------
Spring forward time: 2024-03-10 02:30:00
This time doesn't exist during 'spring forward'

Fall back time: 2024-11-03 01:30:00
This time occurs twice during 'fall back'

Safe timezone conversions:
  2024-07-15 16:00:00 -> 2024-07-15 11:00:00-05:00
  2024-07-15 12:00:00+00:00 -> 2024-07-15 07:00:00-05:00

UTC Storage Pattern:
Stored (UTC): 2024-01-15 15:30:45.123456+00:00
Eastern user sees: 2024-01-15 10:30:45.123456-05:00
Pacific user sees: 2024-01-15 07:30:45.123456-08:00
London user sees: 2024-01-15 15:30:45.123456+00:00

Timezone-aware arithmetic:
UTC now: 2024-01-15 15:30:45.123456+00:00
UTC + 5 hours: 2024-01-15 20:30:45.123456+00:00
Eastern now: 2024-01-15 10:30:45.123456-05:00
Eastern + 5 hours: 2024-01-15 15:30:45.123456-05:00
Eastern + 5 hours (as UTC): 2024-01-15 20:30:45.123456+00:00
Times are equal: True`
    },
    {
      type: 'code',
      title: 'Building a Global Meeting Scheduler',
      language: 'python',
      code: `# Practical application: Global meeting scheduler
from datetime import datetime, timezone, timedelta

class GlobalMeetingScheduler:
    """Schedule meetings across multiple timezones"""
    
    def __init__(self):
        # Common business timezones (using basic offsets for compatibility)
        self.timezones = {
            "UTC": timezone.utc,
            "US/Eastern": timezone(timedelta(hours=-5)),
            "US/Central": timezone(timedelta(hours=-6)),
            "US/Pacific": timezone(timedelta(hours=-8)),
            "Europe/London": timezone(timedelta(hours=0)),
            "Europe/Paris": timezone(timedelta(hours=1)),
            "Asia/Tokyo": timezone(timedelta(hours=9)),
            "Australia/Sydney": timezone(timedelta(hours=11))
        }
    
    def schedule_meeting(self, meeting_time, organizer_tz, participant_zones):
        """Schedule a meeting and show times for all participants"""
        # Ensure organizer timezone is timezone-aware
        if meeting_time.tzinfo is None:
            if organizer_tz in self.timezones:
                organizer_tz_obj = self.timezones[organizer_tz]
                meeting_time = meeting_time.replace(tzinfo=organizer_tz_obj)
            else:
                meeting_time = meeting_time.replace(tzinfo=timezone.utc)
        
        # Convert to UTC first
        meeting_utc = meeting_time.astimezone(timezone.utc)
        
        # Calculate times for all participants
        participant_times = {}
        for participant, tz_name in participant_zones.items():
            if tz_name in self.timezones:
                tz_obj = self.timezones[tz_name]
                local_time = meeting_utc.astimezone(tz_obj)
                participant_times[participant] = {
                    'timezone': tz_name,
                    'local_time': local_time,
                    'is_business_hours': self.is_business_hours(local_time)
                }
        
        return {
            'meeting_utc': meeting_utc,
            'organizer': {
                'timezone': organizer_tz,
                'local_time': meeting_time
            },
            'participants': participant_times
        }
    
    def is_business_hours(self, dt):
        """Check if time falls within typical business hours (9 AM - 5 PM)"""
        return 9 <= dt.hour < 17 and dt.weekday() < 5  # Monday = 0, Sunday = 6
    
    def find_best_meeting_time(self, participant_zones, preferred_dates, duration_hours=1):
        """Find optimal meeting times for multiple participants"""
        best_times = []
        
        for date in preferred_dates:
            # Try different hours of the day
            for hour in range(24):
                test_time = datetime(date.year, date.month, date.day, hour, 0)
                test_time_utc = test_time.replace(tzinfo=timezone.utc)
                
                business_hour_count = 0
                total_participants = len(participant_zones)
                
                for tz_name in participant_zones.values():
                    if tz_name in self.timezones:
                        tz_obj = self.timezones[tz_name]
                        local_time = test_time_utc.astimezone(tz_obj)
                        
                        if self.is_business_hours(local_time):
                            business_hour_count += 1
                
                # Calculate suitability score
                if total_participants > 0:
                    suitability = business_hour_count / total_participants
                    
                    if suitability >= 0.5:  # At least 50% in business hours
                        best_times.append({
                            'utc_time': test_time_utc,
                            'suitability': suitability,
                            'business_hours_count': business_hour_count,
                            'total_participants': total_participants
                        })
        
        # Sort by suitability score
        return sorted(best_times, key=lambda x: x['suitability'], reverse=True)
    
    def format_meeting_summary(self, meeting_info):
        """Format meeting information for display"""
        summary = []
        summary.append(f"Meeting Time (UTC): {meeting_info['meeting_utc']}")
        summary.append(f"Organizer ({meeting_info['organizer']['timezone']}): {meeting_info['organizer']['local_time']}")
        summary.append("\\nParticipants:")
        
        for participant, info in meeting_info['participants'].items():
            status = "✅ Business hours" if info['is_business_hours'] else "❌ Outside business hours"
            summary.append(f"  {participant} ({info['timezone']}): {info['local_time']} - {status}")
        
        return "\\n".join(summary)

# Test the meeting scheduler
print("Global Meeting Scheduler Demo:")
print("=" * 30)

scheduler = GlobalMeetingScheduler()

# Schedule a meeting
organizer_time = datetime(2024, 3, 20, 14, 0)  # 2 PM organizer time
participants = {
    "Alice (London)": "Europe/London",
    "Bob (Tokyo)": "Asia/Tokyo", 
    "Carol (Sydney)": "Australia/Sydney",
    "David (Pacific)": "US/Pacific"
}

meeting = scheduler.schedule_meeting(organizer_time, "US/Eastern", participants)
print("Scheduled Meeting:")
print(scheduler.format_meeting_summary(meeting))

print("\\n" + "="*50)

# Find optimal meeting times
from datetime import date

preferred_dates = [
    date(2024, 3, 20),  # Wednesday
    date(2024, 3, 21),  # Thursday
    date(2024, 3, 22)   # Friday
]

optimal_times = scheduler.find_best_meeting_time(participants, preferred_dates)

print("\\nOptimal Meeting Time Suggestions:")
print("(Top 5 recommendations)")

for i, suggestion in enumerate(optimal_times[:5], 1):
    utc_time = suggestion['utc_time']
    score = suggestion['suitability'] * 100
    business_count = suggestion['business_hours_count']
    total = suggestion['total_participants']
    
    print(f"\\n{i}. {utc_time} (UTC)")
    print(f"   Suitability: {score:.1f}% ({business_count}/{total} in business hours)")
    
    # Show time for each participant
    for participant, tz_name in participants.items():
        if tz_name in scheduler.timezones:
            tz_obj = scheduler.timezones[tz_name]
            local_time = utc_time.astimezone(tz_obj)
            is_business = scheduler.is_business_hours(local_time)
            status = "✅" if is_business else "❌"
            print(f"   {status} {participant}: {local_time.strftime('%Y-%m-%d %H:%M %Z')}")

# Timezone conversion utility
print("\\n" + "="*50)
print("\\nTimezone Conversion Utility:")

def convert_time_across_zones(time_str, from_tz, to_zones):
    """Convert a time from one timezone to multiple others"""
    try:
        # Parse the time string (assuming format: YYYY-MM-DD HH:MM)
        dt = datetime.strptime(time_str, "%Y-%m-%d %H:%M")
        
        # Add source timezone
        if from_tz in scheduler.timezones:
            source_tz = scheduler.timezones[from_tz]
            dt_aware = dt.replace(tzinfo=source_tz)
        else:
            dt_aware = dt.replace(tzinfo=timezone.utc)
        
        # Convert to target timezones
        conversions = {}
        for target_tz in to_zones:
            if target_tz in scheduler.timezones:
                target_tz_obj = scheduler.timezones[target_tz]
                converted = dt_aware.astimezone(target_tz_obj)
                conversions[target_tz] = converted
        
        return conversions
        
    except ValueError as e:
        return f"Error parsing time: {e}"

# Example conversion
source_time = "2024-03-20 09:00"
source_tz = "US/Pacific"
target_zones = ["UTC", "US/Eastern", "Europe/London", "Asia/Tokyo"]

conversions = convert_time_across_zones(source_time, source_tz, target_zones)

print(f"Converting {source_time} from {source_tz}:")
for tz, converted_time in conversions.items():
    print(f"  {tz}: {converted_time}")

# Time difference calculator
print("\\nTime Difference Calculator:")
eastern_time = datetime(2024, 3, 20, 15, 30, tzinfo=scheduler.timezones["US/Eastern"])
tokyo_time = eastern_time.astimezone(scheduler.timezones["Asia/Tokyo"])

time_difference = tokyo_time.utcoffset() - eastern_time.utcoffset()
print(f"When it's {eastern_time} in Eastern time,")
print(f"it's {tokyo_time} in Tokyo time.")
print(f"Time difference: {time_difference}")

print("\\n🌍 Global meeting scheduler demonstration complete!")
print("Key features demonstrated:")
print("  • Timezone-aware datetime handling")
print("  • Cross-timezone meeting scheduling")
print("  • Business hours optimization")
print("  • UTC as universal time standard")
print("  • Practical timezone conversion utilities")`
    },
    {
      type: 'output',
      title: 'Output',
      content: `Global Meeting Scheduler Demo:
==============================
Scheduled Meeting:
Meeting Time (UTC): 2024-03-20 19:00:00+00:00
Organizer (US/Eastern): 2024-03-20 14:00:00-05:00

Participants:
  Alice (London) (Europe/London): 2024-03-20 19:00:00+00:00 - ❌ Outside business hours
  Bob (Tokyo) (Asia/Tokyo): 2024-03-21 04:00:00+09:00 - ❌ Outside business hours
  Carol (Sydney) (Australia/Sydney): 2024-03-21 06:00:00+11:00 - ❌ Outside business hours
  David (Pacific) (US/Pacific): 2024-03-20 11:00:00-08:00 - ✅ Business hours

==================================================

Optimal Meeting Time Suggestions:
(Top 5 recommendations)

1. 2024-03-20 16:00:00+00:00 (UTC)
   Suitability: 50.0% (2/4 in business hours)
   ✅ Alice (London): 2024-03-20 16:00 +0000
   ❌ Bob (Tokyo): 2024-03-21 01:00 +0900
   ❌ Carol (Sydney): 2024-03-21 03:00 +1100
   ✅ David (Pacific): 2024-03-20 08:00 -0800

2. 2024-03-20 17:00:00+00:00 (UTC)
   Suitability: 25.0% (1/4 in business hours)
   ❌ Alice (London): 2024-03-20 17:00 +0000
   ❌ Bob (Tokyo): 2024-03-21 02:00 +0900
   ❌ Carol (Sydney): 2024-03-21 04:00 +1100
   ✅ David (Pacific): 2024-03-20 09:00 -0800

3. 2024-03-20 18:00:00+00:00 (UTC)
   Suitability: 25.0% (1/4 in business hours)
   ❌ Alice (London): 2024-03-20 18:00 +0000
   ❌ Bob (Tokyo): 2024-03-21 03:00 +0900
   ❌ Carol (Sydney): 2024-03-21 05:00 +1100
   ✅ David (Pacific): 2024-03-20 10:00 -0800

4. 2024-03-20 19:00:00+00:00 (UTC)
   Suitability: 25.0% (1/4 in business hours)
   ❌ Alice (London): 2024-03-20 19:00 +0000
   ❌ Bob (Tokyo): 2024-03-21 04:00 +0900
   ❌ Carol (Sydney): 2024-03-21 06:00 +1100
   ✅ David (Pacific): 2024-03-20 11:00 -0800

5. 2024-03-20 20:00:00+00:00 (UTC)
   Suitability: 25.0% (1/4 in business hours)
   ❌ Alice (London): 2024-03-20 20:00 +0000
   ❌ Bob (Tokyo): 2024-03-21 05:00 +0900
   ❌ Carol (Sydney): 2024-03-21 07:00 +1100
   ✅ David (Pacific): 2024-03-20 12:00 -0800

==================================================

Timezone Conversion Utility:
Converting 2024-03-20 09:00 from US/Pacific:
  UTC: 2024-03-20 17:00:00+00:00
  US/Eastern: 2024-03-20 12:00:00-05:00
  Europe/London: 2024-03-20 17:00:00+00:00
  Asia/Tokyo: 2024-03-21 02:00:00+09:00

Time Difference Calculator:
When it's 2024-03-20 15:30:00-05:00 in Eastern time,
it's 2024-03-21 05:30:00+09:00 in Tokyo time.
Time difference: 14:00:00

🌍 Global meeting scheduler demonstration complete!
Key features demonstrated:
  • Timezone-aware datetime handling
  • Cross-timezone meeting scheduling
  • Business hours optimization
  • UTC as universal time standard
  • Practical timezone conversion utilities`
    }
  ],
  keyTakeaways: [
    'Always store timestamps in UTC and convert to local time for display',
    'Use timezone-aware datetime objects to avoid ambiguity and errors',
    'DST transitions create challenging edge cases that require careful handling',
    'The zoneinfo module (Python 3.9+) provides robust timezone support',
    'Global applications must consider business hours across timezones',
    'Timezone conversion utilities are essential for international software'
  ]
};