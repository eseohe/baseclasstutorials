// Lesson content for Building a CLI temperature converter
const temperatureConverterContent = {
  id: 'temperature-converter',
  title: 'Building a CLI temperature converter',
  duration: '30 min',
  overview: `Create a professional command-line temperature converter! Build an interactive tool that converts between Celsius, Fahrenheit, and Kelvin with input validation, error handling, and a polished user interface.`,
  objectives: [
    'Apply mathematical formulas for temperature conversions in Python',
    'Create an interactive command-line interface with clear navigation',
    'Implement input validation and error handling for robust operation',
    'Design user-friendly prompts and informative output formatting',
    'Structure a complete application using functions and control flow',
  ],
  sections: [
    {
      type: 'text',
      title: 'Project Overview: Temperature Converter',
      content: `We'll build a temperature converter that handles three temperature scales: Celsius, Fahrenheit, and Kelvin. Our converter will be interactive and professional, with clear prompts and helpful error messages.

**Temperature conversion formulas:**
- **Celsius to Fahrenheit**: F = (C × 9/5) + 32
- **Fahrenheit to Celsius**: C = (F - 32) × 5/9
- **Celsius to Kelvin**: K = C + 273.15
- **Kelvin to Celsius**: C = K - 273.15
- **Fahrenheit to Kelvin**: K = (F - 32) × 5/9 + 273.15
- **Kelvin to Fahrenheit**: F = (K - 273.15) × 9/5 + 32

**What we'll build:**
- **Multiple conversions**: All six possible temperature conversions
- **Interactive menu**: User-friendly selection system
- **Input validation**: Handle invalid temperatures (e.g., below absolute zero)
- **Formatted output**: Clean, professional result display
- **Error handling**: Graceful handling of invalid input

**Skills we'll practice:**
- Mathematical calculations and formula implementation
- Menu-driven program design
- Input validation with scientific constraints
- String formatting for professional output
- Function organization and code reusability`
    },
    {
      type: 'code',
      title: 'Step 1: Basic Celsius to Fahrenheit',
      language: 'python',
      code: `# Start with the most common conversion
def celsius_to_fahrenheit(celsius):
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

print("Testing Celsius to Fahrenheit:")
temp_c = 25
temp_f = celsius_to_fahrenheit(temp_c)
print(str(temp_c) + "°C = " + str(temp_f) + "°F")`
    },
    {
      type: 'output',
      content: `Testing Celsius to Fahrenheit:
25°C = 77.0°F`
    },
    {
      type: 'code',
      title: 'Step 2: Fahrenheit to Celsius',
      language: 'python',
      code: `# Add the reverse conversion
def fahrenheit_to_celsius(fahrenheit):
    celsius = (fahrenheit - 32) * 5/9
    return celsius

print("Testing Fahrenheit to Celsius:")
temp_f = 77
temp_c = fahrenheit_to_celsius(temp_f)
print(str(temp_f) + "°F = " + str(round(temp_c, 1)) + "°C")`
    },
    {
      type: 'output',
      content: `Testing Fahrenheit to Celsius:
77°F = 25.0°C`
    },
    {
      type: 'code',
      title: 'Step 3: Adding Kelvin Conversions',
      language: 'python',
      code: `# Add Kelvin conversions
def celsius_to_kelvin(celsius):
    kelvin = celsius + 273.15
    return kelvin

def kelvin_to_celsius(kelvin):
    celsius = kelvin - 273.15
    return celsius

print("Testing Kelvin conversions:")
temp_c = 0  # Freezing point of water
temp_k = celsius_to_kelvin(temp_c)
print(str(temp_c) + "°C = " + str(temp_k) + "K")`
    },
    {
      type: 'output',
      content: `Testing Kelvin conversions:
0°C = 273.15K`
    },
    {
      type: 'code',
      title: 'Step 4: Complete Conversion Functions',
      language: 'python',
      code: `# All six conversion functions
def fahrenheit_to_kelvin(fahrenheit):
    celsius = fahrenheit_to_celsius(fahrenheit)
    kelvin = celsius_to_kelvin(celsius)
    return kelvin

def kelvin_to_fahrenheit(kelvin):
    celsius = kelvin_to_celsius(kelvin)
    fahrenheit = celsius_to_fahrenheit(celsius)
    return fahrenheit

print("Testing cross-conversions:")
temp_f = 32  # Freezing point in Fahrenheit
temp_k = fahrenheit_to_kelvin(temp_f)
print(str(temp_f) + "°F = " + str(temp_k) + "K")`
    },
    {
      type: 'output',
      content: `Testing cross-conversions:
32°F = 273.15K`
    },
    {
      type: 'code',
      title: 'Step 5: Input Validation',
      language: 'python',
      code: `# Validate temperature input
def get_temperature():
    while True:
        try:
            temp_input = input("Enter temperature: ")
            temperature = float(temp_input)
            return temperature
        except ValueError:
            print("Please enter a valid number!")

def validate_temperature(temp, scale):
    absolute_zero = {"C": -273.15, "F": -459.67, "K": 0}
    
    if temp < absolute_zero[scale]:
        return False
    return True

print("Validation functions ready!")
print("Absolute zero limits: -273.15°C, -459.67°F, 0K")`
    },
    {
      type: 'output',
      content: `Validation functions ready!
Absolute zero limits: -273.15°C, -459.67°F, 0K`
    },
    {
      type: 'code',
      title: 'Step 6: Conversion Menu',
      language: 'python',
      code: `# Display conversion options
def show_menu():
    print("\n=== Temperature Converter ===")
    print("1. Celsius to Fahrenheit")
    print("2. Fahrenheit to Celsius")
    print("3. Celsius to Kelvin")
    print("4. Kelvin to Celsius")
    print("5. Fahrenheit to Kelvin")
    print("6. Kelvin to Fahrenheit")
    print("7. Exit")

def get_menu_choice():
    while True:
        choice = input("Choose conversion (1-7): ")
        if choice in ["1", "2", "3", "4", "5", "6", "7"]:
            return choice
        print("Please choose a valid option (1-7)!")

show_menu()`
    },
    {
      type: 'output',
      content: `
=== Temperature Converter ===
1. Celsius to Fahrenheit
2. Fahrenheit to Celsius
3. Celsius to Kelvin
4. Kelvin to Celsius
5. Fahrenheit to Kelvin
6. Kelvin to Fahrenheit
7. Exit`
    },
    {
      type: 'code',
      title: 'Step 7: Perform Conversion',
      language: 'python',
      code: `# Execute the chosen conversion
def perform_conversion(choice, temperature):
    conversions = {
        "1": (celsius_to_fahrenheit, "C", "F"),
        "2": (fahrenheit_to_celsius, "F", "C"),
        "3": (celsius_to_kelvin, "C", "K"),
        "4": (kelvin_to_celsius, "K", "C"),
        "5": (fahrenheit_to_kelvin, "F", "K"),
        "6": (kelvin_to_fahrenheit, "K", "F")
    }
    
    func, from_scale, to_scale = conversions[choice]
    
    # Validate input temperature
    if not validate_temperature(temperature, from_scale):
        return "Error: Temperature below absolute zero!"
    
    result = func(temperature)
    return round(result, 2), from_scale, to_scale

print("Conversion function ready!")
result = perform_conversion("1", 100)
print("100°C to °F:", result)`
    },
    {
      type: 'output',
      content: `Conversion function ready!
100°C to °F: (212.0, 'C', 'F')`
    },
    {
      type: 'code',
      title: 'Step 8: Formatted Output',
      language: 'python',
      code: `# Format conversion results nicely
def display_result(original_temp, result_data, choice):
    if isinstance(result_data, str):  # Error message
        print(result_data)
        return
    
    converted_temp, from_scale, to_scale = result_data
    
    # Add degree symbols and units
    from_unit = "°" + from_scale if from_scale != "K" else "K"
    to_unit = "°" + to_scale if to_scale != "K" else "K"
    
    print("Result: " + str(original_temp) + from_unit + 
          " = " + str(converted_temp) + to_unit)

print("Testing formatted output:")
display_result(0, (273.15, "C", "K"), "3")
display_result(32, (0.0, "F", "C"), "2")`
    },
    {
      type: 'output',
      content: `Testing formatted output:
Result: 0°C = 273.15K
Result: 32°F = 0.0°C`
    },
    {
      type: 'code',
      title: 'Step 9: Main Program Loop',
      language: 'python',
      code: `# Main program with continuous operation
def run_temperature_converter():
    print("Welcome to the Temperature Converter!")
    print("Convert between Celsius, Fahrenheit, and Kelvin")
    
    while True:
        show_menu()
        choice = get_menu_choice()
        
        if choice == "7":
            print("Thank you for using the Temperature Converter!")
            break
        
        temperature = get_temperature()
        result = perform_conversion(choice, temperature)
        display_result(temperature, result, choice)
        
        print()  # Add blank line for readability

print("Temperature converter ready to run!")
print("(Use run_temperature_converter() to start)")`
    },
    {
      type: 'output',
      content: `Temperature converter ready to run!
(Use run_temperature_converter() to start)`
    },
    {
      type: 'code',
      title: 'Step 10: Enhanced Features',
      language: 'python',
      code: `# Add helpful temperature references
def show_temperature_references():
    print("\n=== Temperature References ===")
    print("Water freezes: 0°C = 32°F = 273.15K")
    print("Water boils: 100°C = 212°F = 373.15K")
    print("Room temperature: ~20°C = ~68°F = ~293K")
    print("Body temperature: 37°C = 98.6°F = 310.15K")
    print("Absolute zero: -273.15°C = -459.67°F = 0K")

def enhanced_converter():
    print("=== Enhanced Temperature Converter ===")
    show_temperature_references()
    
    while True:
        print("\nOptions:")
        print("1. Convert temperature")
        print("2. Show temperature references")
        print("3. Exit")
        
        option = input("Choose option (1-3): ")
        
        if option == "1":
            run_temperature_converter()
        elif option == "2":
            show_temperature_references()
        elif option == "3":
            print("Goodbye!")
            break
        else:
            print("Please choose 1, 2, or 3!")

print("Enhanced converter ready!")`
    },
    {
      type: 'output',
      content: `Enhanced converter ready!`
    },
    {
      type: 'code',
      title: 'Step 11: Testing All Conversions',
      language: 'python',
      code: `# Test all conversion functions
def test_all_conversions():
    print("=== Testing All Conversions ===")
    test_temps = [0, 25, 100, -10]
    
    for temp in test_temps:
        print("Testing with " + str(temp) + "°C:")
        
        # Test C to F and F to K
        temp_f = celsius_to_fahrenheit(temp)
        temp_k = celsius_to_kelvin(temp)
        
        print("  " + str(temp) + "°C = " + str(round(temp_f, 1)) + "°F")
        print("  " + str(temp) + "°C = " + str(round(temp_k, 1)) + "K")

test_all_conversions()`
    },
    {
      type: 'output',
      content: `=== Testing All Conversions ===
Testing with 0°C:
  0°C = 32.0°F
  0°C = 273.1K
Testing with 25°C:
  25°C = 77.0°F
  25°C = 298.1K
Testing with 100°C:
  100°C = 212.0°F
  100°C = 373.1K
Testing with -10°C:
  -10°C = 14.0°F
  -10°C = 263.1K`
    },
    {
      type: 'text',
      title: 'Project Summary and Extensions',
      content: `**What you've built:**
A professional temperature converter that demonstrates real-world application development:

**Key features implemented:**
- **Complete conversion support**: All six possible temperature conversions
- **Scientific validation**: Prevents temperatures below absolute zero
- **User-friendly interface**: Clear menus and helpful prompts
- **Error handling**: Graceful handling of invalid input
- **Professional output**: Properly formatted results with appropriate units
- **Educational features**: Temperature reference points for context

**Programming concepts mastered:**
- **Mathematical implementations**: Converting formulas into code
- **Menu-driven programs**: Creating intuitive user interfaces
- **Input validation**: Both technical (data types) and scientific (physical limits)
- **Function organization**: Logical separation of concerns
- **String formatting**: Creating polished, professional output
- **Loop control**: Continuous operation with clean exit options

**Real-world applications:**
- Weather applications
- Scientific instruments
- Cooking and baking tools
- HVAC system interfaces
- Educational software
- International travel apps

**Possible enhancements:**
- Add more temperature scales (Rankine, Réaumur)
- Implement batch conversion (multiple temperatures at once)
- Add file input/output for temperature data processing
- Create temperature conversion tables
- Add historical temperature data lookup
- Implement unit conversion beyond temperature (length, weight, volume)
- Create a web interface version
- Add temperature trend analysis features

**Skills gained:**
- Scientific computation in programming
- User interface design principles
- Data validation strategies
- Professional error handling
- Code organization and modularity
- Testing and quality assurance

This temperature converter showcases how Python can be used to create practical, scientific tools while demonstrating professional programming practices and user experience design.`
    }
  ]
};

export { temperatureConverterContent };