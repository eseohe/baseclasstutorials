import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { ArrowRight, BookOpen, Code, Database, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4 py-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Welcome to DataScience Academy
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Master the essential skills for data science. Learn Python programming, SQL databases, 
          and Pandas data analysis through structured, hands-on tutorials.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow duration-200">
          <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Structured Learning</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Follow carefully designed curriculum from basics to advanced topics
          </p>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow duration-200">
          <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Practical Examples</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Learn with real-world examples and hands-on practice
          </p>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow duration-200">
          <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <BarChart3 className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Data Science Focus</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Content tailored specifically for aspiring data scientists
          </p>
        </div>
      </motion.div>

      {/* Courses Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <h2 className="text-3xl font-bold">Available Courses</h2>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {courses.map((course) => (
            
            <motion.div key={course.id} variants={item}>
              <Link to={`/course/${course.id}`}>
                <div className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative p-6 space-y-4">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {course.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {course.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {course.description}
                    </p>
                    
                    {/* Topics Count */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {course.categories ? course.categories.reduce((acc, cat) => acc + cat.topics.length, 0) : 0} topics
                        {' | '}
                        {course.categories
                          ? course.categories.reduce(
                              (catAcc, cat) =>
                                catAcc +
                                cat.topics.reduce(
                                  (topicAcc, topicGroup) =>
                                    topicAcc +
                                    (topicGroup.topics
                                      ? topicGroup.topics.reduce(
                                          (mainAcc, mainTopic) =>
                                            mainAcc + (mainTopic.subtopics ? mainTopic.subtopics.length : 0),
                                          0
                                        )
                                      : topicGroup.subtopics
                                      ? topicGroup.subtopics.length
                                      : 0),
                                  0
                                ),
                              0
                            ) : 0} lessons
                      </span>
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="text-lg mb-6 opacity-90">
          Choose a course above and begin your journey into data science today!
        </p>
        <div className="flex items-center justify-center gap-2 text-sm opacity-75">
          <BookOpen className="w-4 h-4" />
          <span>Click any course card to explore the curriculum</span>
        </div>
      </motion.div>
    </div>
  );
}
