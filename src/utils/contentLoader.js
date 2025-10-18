/**
 * Content Loader Utility
 * 
 * This utility provides functions to dynamically load lesson content
 * from the modular content structure.
 */

/**
 * Dynamically import lesson content
 * @param {string} courseId - The course identifier (e.g., 'python')
 * @param {string} topicId - The topic identifier (e.g., 'intro') 
 * @param {string} lessonId - The lesson identifier (e.g., 'what-is-python')
 * @returns {Promise<Object>} - The lesson content object
 */
export async function loadLessonContent(courseId, category, topicId, lessonId) {
  // Use Vite's import.meta.glob to statically include all lesson files
  const lessonModules = import.meta.glob('/src/content/**/*.js');
  // Build the file path
  const filePath = `/src/content/${courseId}/${category}/${topicId}/${lessonId}.js`;
  const importFn = lessonModules[filePath];
  if (importFn) {
    try {
      const contentModule = await importFn();
      // Convert lessonId to camelCase for export lookup
      const camelCaseId = lessonId.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      const exportName = `${camelCaseId}Content`;
      if (contentModule[exportName]) {
        return contentModule[exportName];
      }
      if (contentModule.default) {
        return contentModule.default;
      }
    } catch (err) {
      // Fallback below
    }
  }
  // Fallback if not found or error
  return createFallbackContent(courseId, category, topicId, lessonId);
}

/**
 * Create fallback content when specific content file doesn't exist
 * @param {string} courseId 
 * @param {string} category
 * @param {string} topicId 
 * @param {string} lessonId 
 * @returns {Object} - Fallback content structure
 */
function createFallbackContent(courseId, category, topicId, lessonId) {
  return {
    id: lessonId,
    title: formatTitle(lessonId),
    duration: 'Content coming soon',
    overview: 'This lesson content is being developed. Please check back soon!',
    sections: [
      {
        type: 'placeholder',
        title: 'Content Under Development',
        content: `
          This lesson is part of the ${formatTitle(courseId)} course${category ? ` (${formatTitle(category)})` : ''} under the 
          ${formatTitle(topicId)} topic. Comprehensive content will be added soon.
          
          In the meantime, you can:
          - Review the course structure
          - Explore other available lessons
          - Check back for updates
        `
      }
    ],
    placeholder: true
  };
}

/**
 * Format a kebab-case string to title case
 * @param {string} str - The string to format
 * @returns {string} - Formatted title
 */
function formatTitle(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Check if lesson content exists
 * @param {string} courseId 
 * @param {string} category
 * @param {string} topicId 
 * @param {string} lessonId 
 * @returns {Promise<boolean>} - Whether content exists
 */
export async function hasLessonContent(courseId, category, topicId, lessonId) {
  try {
    await loadLessonContent(courseId, category, topicId, lessonId);
    return true;
  } catch {
    return false;
  }
}

/**
 * Get all available content for a topic
 * @param {string} courseId 
 * @param {string} category
 * @param {string} topicId 
 * @param {Array} lessonIds - Array of lesson IDs to check
 * @returns {Promise<Object>} - Map of lessonId to content availability
 */
export async function getTopicContentAvailability(courseId, category, topicId, lessonIds) {
  const availability = {};
  
  await Promise.all(
    lessonIds.map(async (lessonId) => {
      availability[lessonId] = await hasLessonContent(courseId, category, topicId, lessonId);
    })
  );
  
  return availability;
}