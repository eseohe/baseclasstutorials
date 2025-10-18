/**
 * Content Registry
 * 
 * This file maintains a registry of available lesson content.
 * Add entries here as you create new lesson content files.
 */

export const contentRegistry = {
  python: {
    intro: {
      'what-is-python': true,
      'installation': false,        // Content not created yet
      'first-program': false       // Content not created yet
    },
    basics: {
      'syntax-variables': true,
      'data-types': true,
      'control-flow': true,
      'loops': true,
      'functions-modules': true,
      'strings': true,
      'lists-tuples-dicts': true,
      'input-output': true,
      'error-handling': true,
      'file-operations': true,
      'python-ides': true,
      'comments-documentation': true
    },
    'data-structures': {
      'lists': false,
      'tuples': false,
      'dictionaries': false,
      'sets': false
    },
    functions: {
      'defining-functions': false,
      'parameters': false,
      'lambda': false,
      'decorators': false
    },
    oop: {
      'classes': false,
      'inheritance': false,
      'polymorphism': false,
      'encapsulation': false
    },
    advanced: {
      // Advanced OOP Concepts
      'abstract-classes': true,
      'multiple-inheritance': true,
      'property-decorators': true,
      'metaclasses': true,
      
      // Advanced Data Handling
      'pandas-analysis': true,
      'numpy-arrays': true,
      'data-visualization': false,
      
      // Database Connections
      'sqlite3': false,
      'sqlalchemy': false,
      'postgresql-mysql': false,
      
      // File and Data Processing
      'binary-files': false,
      'excel': false,
      'xml-html-parsing': false,
      
      // Concurrency and Parallelism
      'threading-gil': false,
      'multiprocessing': false,
      'asyncio': true,
      'async-await': false,
      
      // Networking and APIs
      'requests-rest': true,
      'auth-headers': false,
      'json-apis': false,
      'build-api': false,
      
      // Testing and Debugging
      'unit-tests': false,
      'mocking': false,
      'breakpoints': false,
      'test-coverage': false,
      
      // Packaging and Deployment
      'project-structure': false,
      'setup-py': false,
      'versioning-pypi': false,
      'cli-tools': false,
      
      // Design Patterns
      'singleton-factory': false,
      'decorator-adapter': false,
      'observer-strategy': false,
      
      // Best Practices & Optimization
      'pep8': false,
      'profiling': false,
      'memory-optimization': false,
      'logging-config': false,
      
      // Real-world Projects
      'cli-todo': false,
      'rest-api-fastapi': false,
      'web-scraper': false,
      'data-dashboard': false
    }
  },
  sql: {
    intro: {
      'what-is-sql': false,
      'databases': false,
      'setup': false
    },
    'basic-queries': {
      'select': false,
      'where': false,
      'order-by': false,
      'limit': false
    },
    joins: {
      'inner-join': false,
      'left-join': false,
      'right-join': false,
      'full-join': false
    },
    aggregation: {
      'count': false,
      'sum-avg': false,
      'group-by': false,
      'having': false
    },
    advanced: {
      'subqueries': false,
      'cte': false,
      'window-functions': false,
      'indexes': false
    }
  },
  pandas: {
    intro: {
      'what-is-pandas': false,
      'installation': false,
      'data-structures': false
    },
    'data-loading': {
      'read-csv': false,
      'read-excel': false,
      'read-sql': false,
      'read-json': false
    },
    'data-manipulation': {
      'selecting': false,
      'filtering': false,
      'sorting': false,
      'adding-columns': false
    },
    'data-cleaning': {
      'missing-data': false,
      'duplicates': false,
      'data-types': false,
      'string-operations': false
    },
    analysis: {
      'groupby': false,
      'aggregation': false,
      'merging': false,
      'pivot-tables': false
    }
  }
};

/**
 * Check if content exists for a lesson
 * @param {string} courseId 
 * @param {string} topicId 
 * @param {string} lessonId 
 * @returns {boolean} - Whether content exists
 */
export function hasContent(courseId, topicId, lessonId) {
  return contentRegistry[courseId]?.[topicId]?.[lessonId] === true;
}

/**
 * Get content completion percentage for a course
 * @param {string} courseId 
 * @returns {number} - Completion percentage (0-100)
 */
export function getCourseContentCompletion(courseId) {
  const courseContent = contentRegistry[courseId];
  if (!courseContent) return 0;
  
  let total = 0;
  let completed = 0;
  
  Object.values(courseContent).forEach(topic => {
    Object.values(topic).forEach(hasContent => {
      total++;
      if (hasContent) completed++;
    });
  });
  
  return total > 0 ? Math.round((completed / total) * 100) : 0;
}

/**
 * Get content completion percentage for a topic
 * @param {string} courseId 
 * @param {string} topicId 
 * @returns {number} - Completion percentage (0-100)
 */
export function getTopicContentCompletion(courseId, topicId) {
  const topicContent = contentRegistry[courseId]?.[topicId];
  if (!topicContent) return 0;
  
  const lessons = Object.values(topicContent);
  const completed = lessons.filter(hasContent => hasContent).length;
  
  return lessons.length > 0 ? Math.round((completed / lessons.length) * 100) : 0;
}