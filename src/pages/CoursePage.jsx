import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { ChevronRight, BookOpen, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../components/ui/collapsible';
import { motion } from 'framer-motion';

export default function CoursePage() {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-slate-600 dark:text-slate-400">Course not found</h1>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
          Return to home
        </Link>
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };


  return (
    <div className="space-y-8">
      {/* Back Button */}
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to courses</span>
      </Link>

      {/* Course Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
      >
        <div className={`bg-gradient-to-br ${course.color} p-8 md:p-12`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-4xl">
              {course.icon}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {course.title}
              </h1>
            </div>
          </div>
          <p className="text-white/90 text-lg max-w-3xl">
            {course.description}
          </p>
        </div>
        
        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-slate-500" />
              <span className="text-slate-600 dark:text-slate-400">
                {course.categories ? course.categories.reduce((acc, cat) => acc + cat.topics.length, 0) : 0} topics
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-slate-500" />
              <span className="text-slate-600 dark:text-slate-400">
                {course.categories ? course.categories.reduce((acc, cat) => acc + cat.topics.reduce((tAcc, topic) => tAcc + (topic.subtopics ? topic.subtopics.length : 0), 0), 0) : 0} subtopics
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Table of Contents - Modular & Collapsible */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          Course Contents
        </h2>
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          {course.categories.map((category, catIdx) => (
            <div key={category.id} className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">{category.title}</h3>
              {category.topics.map((topicObj, topicIndex) => (
                topicObj.topics && Array.isArray(topicObj.topics) ? (
                  topicObj.topics.map((mainTopic, mainTopicIndex) => (
                    <Collapsible key={mainTopic.id} defaultOpen={catIdx === 0 && topicIndex === 0 && mainTopicIndex === 0}>
                      <CollapsibleTrigger asChild>
                        <button className="w-full flex items-center gap-3 px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 font-semibold text-lg rounded-t-lg focus:outline-none cursor-pointer">
                          <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center text-white font-bold text-sm`}>{mainTopicIndex + 1}</span>
                          <span>{mainTopic.title}</span>
                          <span className="ml-auto text-sm text-slate-500 dark:text-slate-400">{mainTopic.subtopics ? mainTopic.subtopics.length : 0} subtopics</span>
                        </button>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="pl-4">
                          {(mainTopic.subtopics || []).map((subtopic, subtopicIndex) => (
                            <div key={subtopic.id} className="mb-2">
                              <Link
                                to={`/course/${courseId}/${mainTopic.id}/${subtopic.id}`}
                                className="group flex items-center gap-4 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors duration-200 rounded"
                              >
                                <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-xs font-medium text-slate-600 dark:text-slate-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                  {subtopicIndex + 1}
                                </div>
                                <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                  {subtopic.title}
                                </span>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  ))
                ) : (
                  <Collapsible key={topicObj.id} defaultOpen={catIdx === 0 && topicIndex === 0}>
                    <CollapsibleTrigger asChild>
                      <button className="w-full flex items-center gap-3 px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 font-semibold text-lg rounded-t-lg focus:outline-none cursor-pointer">
                        <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center text-white font-bold text-sm`}>{topicIndex + 1}</span>
                        <span>{topicObj.title}</span>
                        <span className="ml-auto text-sm text-slate-500 dark:text-slate-400">{topicObj.subtopics ? topicObj.subtopics.length : 0} subtopics</span>
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="pl-4">
                        {(topicObj.subtopics || []).map((subtopic, subtopicIndex) => (
                          <div key={subtopic.id} className="mb-2">
                            <Link
                              to={`/course/${courseId}/${topicObj.id}/${subtopic.id}`}
                              className="group flex items-center gap-4 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors duration-200 rounded"
                            >
                              <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-xs font-medium text-slate-600 dark:text-slate-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                {subtopicIndex + 1}
                              </div>
                              <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                {subtopic.title}
                              </span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                )
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className={`bg-gradient-to-r ${course.color} rounded-xl p-6 text-center text-white shadow-lg`}
      >
        <h3 className="text-xl font-bold mb-2">Ready to dive in?</h3>
        <p className="opacity-90 mb-4">Start with the first lesson and work your way through!</p>
        {course.categories && course.categories[0] && course.categories[0].topics && course.categories[0].topics[0] && course.categories[0].topics[0].subtopics && course.categories[0].topics[0].subtopics[0] ? (
          <Link
            to={`/course/${courseId}/${course.categories[0].topics[0].id}/${course.categories[0].topics[0].subtopics[0].id}`}
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-200"
          >
            Start Learning
            <ChevronRight className="w-4 h-4" />
          </Link>
        ) : (
          <span className="inline-flex items-center gap-2 bg-gray-300 text-gray-600 px-6 py-3 rounded-lg font-semibold cursor-not-allowed">
            No subtopics available
          </span>
        )}
      </motion.div>
    </div>
  );
}
