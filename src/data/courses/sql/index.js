import { basics } from './topics/basics';
import { intermediate } from './topics/intermediate';
import { advanced } from './topics/advanced';

export const sqlCourse = {
  id: 'sql',
  title: 'SQL Database',
  description: 'Learn SQL for data manipulation, querying, and database management',
  icon: '🗄️',
  color: 'from-purple-500 to-pink-500',
  categories: [
    {
      id: 'basics',
      title: 'Basics',
      topics: basics
    },
    {
      id: 'intermediate',
      title: 'Intermediate',
      topics: intermediate
    },
    {
      id: 'advanced',
      title: 'Advanced',
      topics: advanced
    }
  ]
};