# DataScience Academy - Tutorial Website

A beautiful, responsive tutorial website for learning data science fundamentals including Python, SQL, and Pandas.

## Features

### 🎨 Beautiful Design
- Modern gradient designs for each course (Blue/Cyan for Python, Purple/Pink for SQL, Green/Emerald for Pandas)
- Smooth animations and transitions using Framer Motion
- Responsive layout that works on all devices
- Dark mode support (inherited from Tailwind configuration)

### 🧭 Easy Navigation
- **Home Page**: Overview with course cards leading to each subject
- **Course Pages**: Table of contents showing all topics and lessons
- **Lesson Pages**: Individual lesson content with sidebar navigation
- Previous/Next buttons for sequential learning
- Breadcrumb navigation showing current location

### 📚 Course Structure

#### Python Programming (19 lessons)
1. Introduction to Python
2. Python Basics
3. Data Structures
4. Functions
5. Object-Oriented Programming

#### SQL Database (19 lessons)
1. Introduction to SQL
2. Basic Queries
3. Joins
4. Aggregation Functions
5. Advanced SQL

#### Pandas Library (19 lessons)
1. Introduction to Pandas
2. Loading Data
3. Data Manipulation
4. Data Cleaning
5. Data Analysis

## Technology Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Package Manager**: npm

## Project Structure

```
datascience-tutorial/
├── src/
│   ├── components/
│   │   ├── Layout.jsx          # Main layout with navigation
│   │   └── ui/                 # shadcn/ui components
│   ├── data/
│   │   └── courses.js          # Course content structure
│   ├── pages/
│   │   ├── HomePage.jsx        # Landing page with course cards
│   │   ├── CoursePage.jsx      # Table of contents for each course
│   │   └── LessonPage.jsx      # Individual lesson pages
│   ├── App.jsx                 # Main app with routing
│   ├── App.css                 # Global styles
│   └── main.jsx                # Entry point
├── public/                     # Static assets
└── dist/                       # Production build
```

## Development

### Prerequisites
- Node.js 22.13.0 or higher
- npm

### Installation
```bash
cd datascience-tutorial
npm install
```

### Development Server
```bash
npm run dev
```
Visit http://localhost:5173

### Build for Production
```bash
npm run build
```
Output will be in the `dist/` directory.

## Adding Content

The website structure is complete and ready for content. To add detailed lesson content:

1. Open `src/pages/LessonPage.jsx`
2. Replace the placeholder content section with actual tutorial content
3. You can add:
   - Code examples with syntax highlighting
   - Interactive exercises
   - Images and diagrams
   - Video embeds
   - Practice problems

### Adding New Courses

To add a new course, edit `src/data/courses.js`:

```javascript
{
  id: 'new-course',
  title: 'New Course Title',
  description: 'Course description',
  icon: '🎯',
  color: 'from-red-500 to-orange-500',
  topics: [
    {
      id: 'topic-id',
      title: 'Topic Title',
      lessons: [
        { id: 'lesson-id', title: 'Lesson Title' }
      ]
    }
  ]
}
```

## Features Implemented

✅ Responsive home page with animated course cards  
✅ Course overview pages with table of contents  
✅ Lesson pages with sidebar navigation  
✅ Previous/Next lesson navigation  
✅ Breadcrumb navigation  
✅ Mobile-friendly sidebar (hamburger menu)  
✅ Smooth animations and transitions  
✅ Hover effects and micro-interactions  
✅ Color-coded courses for easy identification  
✅ Progress indicators (lesson X of Y)  

## Future Enhancements (Optional)

- Add detailed lesson content with code examples
- Implement progress tracking (mark lessons as complete)
- Add search functionality
- Include code playgrounds for interactive learning
- Add quizzes and exercises
- Implement user authentication
- Add bookmarking functionality
- Include downloadable resources
- Add comments/discussion sections

## Credits

Built with React, Vite, Tailwind CSS, and shadcn/ui.
