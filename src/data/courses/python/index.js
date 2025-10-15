import { basics } from './topics/basics';
import { intermediate } from './topics/intermediate';
import { advanced } from './topics/advanced';

export const pythonCourse = {
  id: 'python',
  title: 'Python Programming',
  description: 'Master Python fundamentals and advanced concepts for data science',
  icon: '🐍',
  color: 'from-blue-500 to-cyan-500',
  categories: [
    {
      id: 'basics',
      title: 'Basic',
      topics: [...basics]
    },
    {
      id: 'intermediate',
      title: 'Intermediate',
      topics: [...intermediate]
    },
    {
      id: 'advanced',
      title: 'Advanced',
      topics: [...advanced]
    }
  ]
};