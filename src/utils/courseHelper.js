/**
 * Course Helper Utilities
 * 
 * Utilities to help with adding and managing courses in the modular structure
 */

/**
 * Template for creating a new course structure
 * @param {Object} courseConfig - Course configuration
 * @returns {string} - Course index.js file content
 */
export function generateCourseTemplate(courseConfig) {
  const { id, title, description, icon, color, topics } = courseConfig;
  
  const topicImports = topics.map(topic => 
    `import { ${topic.varName} } from './topics/${topic.id}';`
  ).join('\n');
  
  const topicArray = topics.map(topic => topic.varName).join(',\n    ');
  
  return `${topicImports}

export const ${id}Course = {
  id: '${id}',
  title: '${title}',
  description: '${description}',
  icon: '${icon}',
  color: '${color}',
  topics: [
    ${topicArray}
  ]
};`;
}

/**
 * Template for creating a new topic structure
 * @param {Object} topicConfig - Topic configuration
 * @returns {string} - Topic file content
 */
export function generateTopicTemplate(topicConfig) {
  const { id, title, lessons } = topicConfig;
  
  const lessonsArray = lessons.map(lesson => 
    `    { id: '${lesson.id}', title: '${lesson.title}' }`
  ).join(',\n');
  
  return `export const ${toCamelCase(id)} = {
  id: '${id}',
  title: '${title}',
  lessons: [
${lessonsArray}
  ]
};`;
}

/**
 * Template for creating a new lesson content file
 * @param {Object} lessonConfig - Lesson configuration
 * @returns {string} - Lesson content file
 */
export function generateLessonContentTemplate(lessonConfig) {
  const { id, title, overview = '', objectives = [] } = lessonConfig;
  const varName = toCamelCase(id) + 'Content';
  
  const objectivesArray = objectives.map(obj => `    '${obj}'`).join(',\n');
  
  return `export const ${varName} = {
  id: '${id}',
  title: '${title}',
  duration: '10 min read',
  
  overview: \`${overview}\`,
  
  objectives: [
${objectivesArray}
  ],
  
  sections: [
    {
      type: 'text',
      title: 'Introduction',
      content: \`
        Content for ${title} goes here.
      \`
    }
  ],
  
  exercises: [
    {
      type: 'reflection',
      question: 'What did you learn about ${title.toLowerCase()}?',
      hints: ['Think about the key concepts', 'Consider practical applications']
    }
  ],
  
  resources: [
    {
      type: 'external',
      title: 'Additional Reading',
      url: '#'
    }
  ]
};`;
}

/**
 * Convert kebab-case to camelCase
 * @param {string} str - String to convert
 * @returns {string} - camelCase string
 */
function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

/**
 * Convert string to PascalCase
 * @param {string} str - String to convert  
 * @returns {string} - PascalCase string
 */
function toPascalCase(str) {
  return str.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

/**
 * Generate directory structure for a new course
 * @param {string} courseId - Course identifier
 * @param {Array} topics - Array of topic objects
 * @returns {Array} - Array of directory paths to create
 */
export function generateCourseDirectories(courseId, topics) {
  const dirs = [
    `src/data/courses/${courseId}`,
    `src/data/courses/${courseId}/topics`,
    `src/content/${courseId}`
  ];
  
  topics.forEach(topic => {
    dirs.push(`src/content/${courseId}/${topic.id}`);
  });
  
  return dirs;
}

/**
 * Validate course configuration
 * @param {Object} courseConfig - Course configuration to validate
 * @returns {Object} - Validation result with success boolean and errors array
 */
export function validateCourseConfig(courseConfig) {
  const errors = [];
  
  if (!courseConfig.id) errors.push('Course ID is required');
  if (!courseConfig.title) errors.push('Course title is required');
  if (!courseConfig.description) errors.push('Course description is required');
  if (!courseConfig.topics || !Array.isArray(courseConfig.topics)) {
    errors.push('Topics array is required');
  }
  
  // Validate topics
  if (courseConfig.topics) {
    courseConfig.topics.forEach((topic, index) => {
      if (!topic.id) errors.push(`Topic ${index + 1} is missing ID`);
      if (!topic.title) errors.push(`Topic ${index + 1} is missing title`);
      if (!topic.lessons || !Array.isArray(topic.lessons)) {
        errors.push(`Topic ${index + 1} is missing lessons array`);
      }
    });
  }
  
  return {
    success: errors.length === 0,
    errors
  };
}