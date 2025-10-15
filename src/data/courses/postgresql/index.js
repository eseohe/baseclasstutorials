import { basics } from './topics/basics';
import { intermediate } from './topics/intermediate';
import { advanced } from './topics/advanced';

export const postgresqlCourse = {
  id: 'postgresql',
  title: 'PostgreSQL Database',
  description: 'Master relational database concepts, SQL, and advanced PostgreSQL features.',
  icon: '🐘',
  color: 'from-blue-600 to-indigo-700',
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