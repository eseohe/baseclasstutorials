import { basics } from './topics/basics';
import { intermediate } from './topics/intermediate';
import { advanced } from './topics/advanced';

export const pandasCourse = {
  id: 'pandas',
  title: 'Pandas for Data Analysis',
  description: 'Learn data manipulation, cleaning, and analysis with Pandas.',
  icon: '🐼',
  color: 'from-yellow-500 to-green-500',
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