// Lesson content for Intro to Data Visualization (matplotlib, seaborn)
export const dataVisualizationContent = {
  id: 'data-visualization',
  title: 'Intro to Data Visualization (matplotlib, seaborn)',
  duration: '45 min',
  overview: `Learn to create compelling data visualizations in Python using matplotlib and seaborn. Master the fundamentals of plotting, customize charts for better communication, and discover advanced visualization techniques for data analysis.`,
  objectives: [
    'Set up matplotlib and seaborn for data visualization',
    'Create basic plots: line plots, bar charts, scatter plots, histograms',
    'Customize plot appearance with colors, labels, and styles',
    'Use seaborn for statistical visualizations',
    'Create subplots and complex multi-panel figures',
    'Export high-quality plots for presentations and reports'
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Data Visualization',
      content: `Data visualization is the art and science of presenting data in visual formats that make patterns, trends, and insights easier to understand. Python offers powerful libraries for creating everything from simple charts to complex interactive visualizations.

**Why Data Visualization Matters:**
- **Pattern Recognition**: Visual patterns are easier to spot than numerical patterns
- **Communication**: Charts communicate insights faster than tables of numbers
- **Exploration**: Visualizations help discover unexpected relationships in data
- **Decision Making**: Clear visuals support better business and research decisions
- **Storytelling**: Good visualizations tell compelling data stories

**Key Libraries:**
- **matplotlib**: The foundational plotting library, highly customizable
- **seaborn**: Built on matplotlib, specialized for statistical visualization
- **pandas**: Integrates plotting directly into DataFrames`
    },
    {
      type: 'code',
      title: 'Setting Up Visualization Libraries',
      language: 'python',
      code: `import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import pandas as pd

# Set up matplotlib for better defaults
plt.style.use('default')
sns.set_palette("husl")

# For Jupyter notebooks, enable inline plotting
# %matplotlib inline`
    },
    {
      type: 'text',
      title: 'Basic Plotting with Matplotlib',
      content: `Matplotlib follows a simple pattern: create data, plot it, customize it, and display or save it.`
    },
    {
      type: 'code',
      title: 'Your First Line Plot',
      language: 'python',
      code: `# Create sample data
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Create the plot
plt.figure(figsize=(10, 6))
plt.plot(x, y, label='sin(x)', color='blue', linewidth=2)
plt.xlabel('X values')
plt.ylabel('Y values')
plt.title('Simple Sine Wave')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()`
    },
    {
      type: 'code',
      title: 'Multiple Lines on One Plot',
      language: 'python',
      code: `x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)
y3 = np.sin(x) * np.cos(x)

plt.figure(figsize=(12, 6))
plt.plot(x, y1, label='sin(x)', linewidth=2)
plt.plot(x, y2, label='cos(x)', linewidth=2)
plt.plot(x, y3, label='sin(x)*cos(x)', linewidth=2, linestyle='--')

plt.xlabel('X values')
plt.ylabel('Y values')
plt.title('Trigonometric Functions')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()`
    },
    {
      type: 'code',
      title: 'Scatter Plot',
      language: 'python',
      code: `# Generate random data
np.random.seed(42)
n = 100
x = np.random.randn(n)
y = 2 * x + 1 + np.random.randn(n) * 0.5

plt.figure(figsize=(8, 6))
plt.scatter(x, y, alpha=0.6, c='red', s=50)
plt.xlabel('X values')
plt.ylabel('Y values')
plt.title('Scatter Plot Example')
plt.grid(True, alpha=0.3)
plt.show()`
    },
    {
      type: 'code',
      title: 'Bar Chart',
      language: 'python',
      code: `# Sample data
categories = ['Python', 'JavaScript', 'Java', 'C++', 'Go']
popularity = [85, 75, 60, 45, 40]

plt.figure(figsize=(10, 6))
bars = plt.bar(categories, popularity, color=['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'])

# Add value labels on bars
for bar in bars:
    height = bar.get_height()
    plt.text(bar.get_x() + bar.get_width()/2., height + 1,
             f'{height}%', ha='center', va='bottom')

plt.xlabel('Programming Languages')
plt.ylabel('Popularity Score')
plt.title('Programming Language Popularity')
plt.ylim(0, 100)
plt.show()`
    },
    {
      type: 'code',
      title: 'Histogram',
      language: 'python',
      code: `# Generate sample data
np.random.seed(42)
data = np.random.normal(100, 15, 1000)  # Mean=100, std=15, 1000 samples

plt.figure(figsize=(10, 6))
plt.hist(data, bins=30, alpha=0.7, color='skyblue', edgecolor='black')
plt.xlabel('Values')
plt.ylabel('Frequency')
plt.title('Normal Distribution Histogram')
plt.grid(True, alpha=0.3)

# Add vertical line for mean
mean_value = np.mean(data)
plt.axvline(mean_value, color='red', linestyle='--', linewidth=2, label=f'Mean: {mean_value:.1f}')
plt.legend()
plt.show()`
    },
    {
      type: 'text',
      title: 'Introduction to Seaborn',
      content: `Seaborn builds on matplotlib and provides a higher-level interface for creating statistical visualizations. It has beautiful default styles and handles many common visualization patterns automatically.`
    },
    {
      type: 'code',
      title: 'Creating Sample Dataset',
      language: 'python',
      code: `# Create a sample dataset
np.random.seed(42)
n = 200

df = pd.DataFrame({
    'height': np.random.normal(170, 10, n),
    'weight': np.random.normal(70, 15, n),
    'age': np.random.randint(18, 65, n),
    'gender': np.random.choice(['Male', 'Female'], n),
    'city': np.random.choice(['New York', 'London', 'Tokyo', 'Sydney'], n)
})

# Add some correlation between height and weight
df['weight'] = df['height'] * 0.8 + np.random.normal(0, 5, n)

print(df.head())`
    },
    {
      type: 'output',
      content: `    height     weight  age  gender      city
0  174.967142  139.890414   47    Male     Tokyo
1  186.616928  148.723529   48  Female    London
2  173.231339  134.405063   64    Male  New York
3  175.202344  142.154955   50    Male    Sydney
4  176.103773  143.302829   28  Female     Tokyo`
    },
    {
      type: 'code',
      title: 'Seaborn Scatter Plot with Categories',
      language: 'python',
      code: `plt.figure(figsize=(10, 8))
sns.scatterplot(data=df, x='height', y='weight', hue='gender', style='city', s=100)
plt.title('Height vs Weight by Gender and City')
plt.show()`
    },
    {
      type: 'code',
      title: 'Box Plot',
      language: 'python',
      code: `plt.figure(figsize=(12, 6))
sns.boxplot(data=df, x='city', y='height', hue='gender')
plt.title('Height Distribution by City and Gender')
plt.xticks(rotation=45)
plt.show()`
    },
    {
      type: 'code',
      title: 'Correlation Heatmap',
      language: 'python',
      code: `# Create correlation matrix for numeric columns
correlation_matrix = df[['height', 'weight', 'age']].corr()

plt.figure(figsize=(8, 6))
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', center=0,
            square=True, cbar_kws={'label': 'Correlation'})
plt.title('Correlation Matrix')
plt.show()`
    },
    {
      type: 'code',
      title: 'Pair Plot',
      language: 'python',
      code: `# Create pair plot to see relationships between all variables
sns.pairplot(df, hue='gender', vars=['height', 'weight', 'age'])
plt.suptitle('Pair Plot of Height, Weight, and Age', y=1.02)
plt.show()`
    },
    {
      type: 'text',
      title: 'Creating Subplots',
      content: `Subplots allow you to create multiple charts in a single figure, perfect for comparing different aspects of your data or showing a dashboard-style view.`
    },
    {
      type: 'code',
      title: 'Multiple Subplots',
      language: 'python',
      code: `# Create a 2x2 grid of subplots
fig, axes = plt.subplots(2, 2, figsize=(15, 10))

# Plot 1: Line plot
x = np.linspace(0, 10, 100)
axes[0, 0].plot(x, np.sin(x), 'b-', label='sin(x)')
axes[0, 0].set_title('Sine Wave')
axes[0, 0].grid(True)

# Plot 2: Histogram
axes[0, 1].hist(df['height'], bins=20, alpha=0.7, color='green')
axes[0, 1].set_title('Height Distribution')
axes[0, 1].set_xlabel('Height (cm)')

# Plot 3: Scatter plot
axes[1, 0].scatter(df['height'], df['weight'], alpha=0.6)
axes[1, 0].set_title('Height vs Weight')
axes[1, 0].set_xlabel('Height (cm)')
axes[1, 0].set_ylabel('Weight (kg)')

# Plot 4: Bar chart
city_counts = df['city'].value_counts()
axes[1, 1].bar(city_counts.index, city_counts.values, color='orange')
axes[1, 1].set_title('Count by City')
axes[1, 1].tick_params(axis='x', rotation=45)

plt.tight_layout()
plt.show()`
    },
    {
      type: 'code',
      title: 'Advanced Seaborn Plot: Distribution Plot',
      language: 'python',
      code: `# Create a comprehensive distribution plot
plt.figure(figsize=(12, 8))

# Create a 2x2 subplot layout using seaborn's FacetGrid
g = sns.FacetGrid(df, col='gender', row='city', margin_titles=True, height=3)
g.map(sns.histplot, 'height', alpha=0.7)
g.add_legend()
plt.show()`
    },
    {
      type: 'code',
      title: 'Customizing Plot Appearance',
      language: 'python',
      code: `# Create a highly customized plot
plt.figure(figsize=(12, 8))

# Custom color palette
colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4']

# Create violin plot
sns.violinplot(data=df, x='city', y='weight', hue='gender', palette=colors)

# Customize the plot
plt.title('Weight Distribution by City and Gender', fontsize=16, fontweight='bold', pad=20)
plt.xlabel('City', fontsize=12)
plt.ylabel('Weight (kg)', fontsize=12)

# Rotate x-axis labels
plt.xticks(rotation=45)

# Add grid
plt.grid(True, alpha=0.3)

# Adjust layout and show
plt.tight_layout()
plt.show()`
    },
    {
      type: 'code',
      title: 'Saving High-Quality Plots',
      language: 'python',
      code: `# Create a plot for saving
plt.figure(figsize=(10, 6))
sns.scatterplot(data=df, x='height', y='weight', hue='gender', s=100)
plt.title('Height vs Weight Analysis')

# Save in multiple formats
plt.savefig('height_weight_plot.png', dpi=300, bbox_inches='tight')
plt.savefig('height_weight_plot.pdf', bbox_inches='tight')  # Vector format
plt.savefig('height_weight_plot.svg', bbox_inches='tight')  # Vector format

print("Plots saved as PNG, PDF, and SVG files")
plt.show()`
    },
    {
      type: 'text',
      title: 'Plot Styling and Themes',
      content: `Both matplotlib and seaborn offer various styling options to make your plots look professional and match your presentation or brand requirements.`
    },
    {
      type: 'code',
      title: 'Using Different Styles',
      language: 'python',
      code: `# Check available matplotlib styles
print("Available matplotlib styles:")
print(plt.style.available)

# Apply different styles
styles = ['default', 'seaborn', 'ggplot', 'bmh']

fig, axes = plt.subplots(2, 2, figsize=(15, 10))

for i, style in enumerate(styles):
    plt.style.use(style)
    ax = axes[i//2, i%2]
    
    x = np.linspace(0, 10, 50)
    y = np.sin(x)
    
    ax.plot(x, y, linewidth=3)
    ax.set_title(f'Style: {style}')
    ax.grid(True)

plt.tight_layout()
plt.show()

# Reset to default style
plt.style.use('default')`
    },
    {
      type: 'text',
      title: 'Best Practices and Tips',
      content: `**Design Principles:**
- **Clarity**: Choose the right chart type for your data
- **Simplicity**: Remove unnecessary elements (chartjunk)
- **Consistency**: Use consistent colors, fonts, and styles
- **Accessibility**: Ensure plots are readable and colorblind-friendly

**Performance Tips:**
- Use \`plt.ioff()\` to turn off interactive mode for faster batch plotting
- Close figures with \`plt.close()\` to free memory
- Use appropriate DPI settings when saving (300 DPI for print, 72-96 for web)

**Common Chart Types:**
- **Line plots**: Time series, continuous data trends
- **Scatter plots**: Relationships between two continuous variables  
- **Bar charts**: Comparing categories
- **Histograms**: Distribution of continuous data
- **Box plots**: Distribution summaries and outliers
- **Heatmaps**: Correlation matrices, 2D data

**Color Guidelines:**
- Use ColorBrewer palettes for professional appearance
- Consider colorblind accessibility
- Use colors meaningfully (red for negative, green for positive)
- Limit color palette to 3-5 colors for clarity`
    }
  ]
};

export default dataVisualizationContent;