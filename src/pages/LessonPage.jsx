import { useParams, Link, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import { ArrowLeft, ChevronLeft, ChevronRight, BookOpen, List } from 'lucide-react';
import { motion } from 'framer-motion';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../components/ui/collapsible';
import { useEffect, useState } from 'react';
import LessonContentRenderer from '../components/LessonContentRenderer';

function formatTitle(str) {
  return str
    ? str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : '';
}

export default function LessonPage() {
  const { courseId, topicId, lessonId } = useParams();
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId, topicId, lessonId]);

  const course = courses.find(c => c.id === courseId);
  if (!course) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-slate-600 dark:text-slate-400">Course not found</h1>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Return to home</Link>
      </div>
    );
  }

  // Find topic and subtopic for all course structures
  let topic = null;
  let subtopic = null;
  let topicSubtopics = [];
  let localIndex = -1;

  // Find the category containing the topicId
  let foundCategory = null;
  let foundMainTopic = null;
  if (course.categories) {
    for (const cat of course.categories) {
      // Advanced: topics are direct
      const directTopic = cat.topics.find(t => t.id === topicId && t.subtopics);
      if (directTopic) {
        topic = directTopic;
        topicSubtopics = topic.subtopics;
        subtopic = topicSubtopics.find(st => st.id === lessonId);
        localIndex = topicSubtopics.findIndex(st => st.id === lessonId);
        foundCategory = cat;
        break;
      }
      // Basic/Intermediate: topics is an array of main topics
      for (const group of cat.topics) {
        if (group.topics) {
          const mainTopic = group.topics.find(mt => mt.id === topicId);
          if (mainTopic && mainTopic.subtopics) {
            topic = mainTopic;
            topicSubtopics = mainTopic.subtopics;
            subtopic = topicSubtopics.find(st => st.id === lessonId);
            localIndex = topicSubtopics.findIndex(st => st.id === lessonId);
            foundCategory = cat;
            foundMainTopic = mainTopic;
            break;
          }
        }
      }
      if (topic) break;
    }
  }

  // Find previous and next subtopics (local to current topic)
  const localSubtopics = topicSubtopics || [];
  const localIndexNav = localSubtopics.findIndex(st => st.id === lessonId);
  const prevSubtopic = localIndexNav > 0 ? localSubtopics[localIndexNav - 1] : null;
  const nextSubtopic = localIndexNav < localSubtopics.length - 1 ? localSubtopics[localIndexNav + 1] : null;

  return (
    <div className="flex gap-6">
      {/* Sidebar - Desktop */}
      <motion.aside 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="hidden lg:block w-80 flex-shrink-0"
      >
        <div className="sticky top-24 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden max-h-[calc(100vh-7rem)] flex flex-col">
          <div className={`bg-gradient-to-r ${course.color} p-4`}>
            <Link to={`/course/${courseId}`} className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-4 h-4" />
              <span className="font-semibold">{course.title}</span>
            </Link>
          </div>
          <div className="overflow-y-auto flex-1">
            {course.categories && course.categories.map((cat, catIdx) => (
              <div key={cat.id} className="mb-4">
                <div className="px-4 py-2 bg-slate-200 dark:bg-slate-700 font-bold text-xs uppercase tracking-wide text-blue-700 dark:text-blue-300 rounded-t">
                  {cat.title}
                </div>
                {cat.topics.map((topicGroup, topicGroupIdx) => (
                  topicGroup.topics ? (
                    topicGroup.topics.map((topicObj, topicIndex) => (
                      <Collapsible key={topicObj.id} defaultOpen={topicObj.id === topicId}>
                        <CollapsibleTrigger asChild>
                          <button className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 font-semibold text-sm border-b border-slate-200 dark:border-slate-700 focus:outline-none cursor-pointer">
                            {topicObj.title}
                          </button>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="divide-y divide-slate-200 dark:divide-slate-700">
                            {(topicObj.subtopics || []).map((subtopic) => (
                              <Link
                                key={subtopic.id}
                                to={`/course/${courseId}/${topicObj.id}/${subtopic.id}`}
                                className={`block px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors ${
                                  subtopic.id === lessonId && topicObj.id === topicId
                                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium border-l-4 border-blue-600'
                                    : 'text-slate-600 dark:text-slate-400'
                                }`}
                              >
                                {subtopic.title}
                              </Link>
                            ))}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ))
                  ) : (
                    <Collapsible key={topicGroup.id} defaultOpen={topicGroup.id === topicId}>
                      <CollapsibleTrigger asChild>
                        <button className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 font-semibold text-sm border-b border-slate-200 dark:border-slate-700 focus:outline-none cursor-pointer">
                          {topicGroup.title}
                        </button>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="divide-y divide-slate-200 dark:divide-slate-700">
                          {(topicGroup.subtopics || []).map((subtopic) => (
                            <Link
                              key={subtopic.id}
                              to={`/course/${courseId}/${topicGroup.id}/${subtopic.id}`}
                              className={`block px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors ${
                                subtopic.id === lessonId && topicGroup.id === topicId
                                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium border-l-4 border-blue-600'
                                  : 'text-slate-600 dark:text-slate-400'
                              }`}
                            >
                              {subtopic.title}
                            </Link>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  )
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.aside>

      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <List className="w-6 h-6" />
      </button>

      {/* Mobile Sidebar Overlay */}
      {showSidebar && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setShowSidebar(false)}>
          <motion.div 
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            className="w-80 h-full bg-white dark:bg-slate-800 shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`bg-gradient-to-r ${course.color} p-4`}>
              <Link to={`/course/${courseId}`} className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
                <ArrowLeft className="w-4 h-4" />
                <span className="font-semibold">{course.title}</span>
              </Link>
            </div>
            {course.categories && course.categories.flatMap(cat => cat.topics).map((t) => (
              <div key={t.id} className="border-b border-slate-200 dark:border-slate-700 last:border-b-0">
                <div className="px-4 py-3 bg-slate-50 dark:bg-slate-900/50 font-semibold text-sm">
                  {t.title}
                </div>
                <div className="divide-y divide-slate-200 dark:divide-slate-700">
                  {(t.subtopics || []).map((st) => (
                    <Link
                      key={st.id}
                      to={`/course/${courseId}/${t.id}/${st.id}`}
                      onClick={() => setShowSidebar(false)}
                      className={`block px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors ${
                        st.id === lessonId && t.id === topicId
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium border-l-4 border-blue-600'
                          : 'text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {st.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 min-w-0"
      >
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          {/* Lesson Header */}
          <div className="border-b border-slate-200 dark:border-slate-700 p-6 md:p-8">
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-3">
              <Link to={`/course/${courseId}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {course.title}
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span>{topic ? topic.title : formatTitle(topicId)}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{subtopic ? subtopic.title : formatTitle(lessonId)}</h1>
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <BookOpen className="w-4 h-4" />
              <span>Subtopic {localIndex >= 0 ? localIndex + 1 : 1} of {topicSubtopics && topicSubtopics.length ? topicSubtopics.length : 0}</span>
            </div>
          </div>

          {/* Lesson Content */}
          <div className="p-6 md:p-8">
            <LessonContentRenderer 
              courseId={courseId} 
              category={foundCategory ? foundCategory.id : ''} 
              topicId={topicId} 
              lessonId={lessonId} 
            />
          </div>

          {/* Navigation Footer */}
          <div className="border-t border-slate-200 dark:border-slate-700 p-6 bg-slate-50 dark:bg-slate-900/50">
            <div className="flex items-center justify-between gap-4">
              {prevSubtopic ? (
                <Link
                  to={`/course/${courseId}/${topicId}/${prevSubtopic.id}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all group"
                >
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <div className="text-left">
                    <div className="text-xs text-slate-500 dark:text-slate-400">Previous</div>
                    <div className="text-sm font-medium">{prevSubtopic.title}</div>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {/* Next button logic: if nextSubtopic exists, go to it. Otherwise, go to the first subtopic of the next topic in the group (advanced) or next topic in next topic group (basic/intermediate). */}
              {nextSubtopic ? (
                <Link
                  to={`/course/${courseId}/${topicId}/${nextSubtopic.id}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all group ml-auto"
                >
                  <div className="text-right">
                    <div className="text-xs opacity-90">Next</div>
                    <div className="text-sm font-medium">{nextSubtopic.title}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                (() => {
                  let nextTopicId = null;
                  let nextSubtopicId = null;
                  let nextTopicTitle = null;
                  // Advanced structure: topics are direct
                  if (foundCategory && topic && foundCategory.topics && topicSubtopics) {
                    // Check if topics are direct (advanced)
                    const isAdvanced = foundCategory.topics.some(t => t.subtopics);
                    if (isAdvanced) {
                      const topicsArray = foundCategory.topics;
                      let currentTopicIdx = topicsArray.findIndex(t => t.id === topicId);
                      if (currentTopicIdx !== -1 && currentTopicIdx < topicsArray.length - 1) {
                        const nextTopic = topicsArray[currentTopicIdx + 1];
                        if (nextTopic.subtopics && nextTopic.subtopics.length > 0) {
                          nextTopicId = nextTopic.id;
                          nextSubtopicId = nextTopic.subtopics[0].id;
                          nextTopicTitle = nextTopic.subtopics[0].title;
                        }
                      }
                    } else {
                      // Basic/Intermediate: topics are grouped
                      for (let groupIdx = 0; groupIdx < foundCategory.topics.length; groupIdx++) {
                        const group = foundCategory.topics[groupIdx];
                        if (group.topics) {
                          for (let topicIdx = 0; topicIdx < group.topics.length; topicIdx++) {
                            const t = group.topics[topicIdx];
                            if (t.id === topicId) {
                              // If not last topic in group, go to next topic in same group
                              if (topicIdx < group.topics.length - 1) {
                                const nextTopic = group.topics[topicIdx + 1];
                                if (nextTopic.subtopics && nextTopic.subtopics.length > 0) {
                                  nextTopicId = nextTopic.id;
                                  nextSubtopicId = nextTopic.subtopics[0].id;
                                  nextTopicTitle = nextTopic.subtopics[0].title;
                                }
                              } else if (groupIdx < foundCategory.topics.length - 1) {
                                // If last topic in group, go to first topic in next group
                                const nextGroup = foundCategory.topics[groupIdx + 1];
                                if (nextGroup.topics && nextGroup.topics.length > 0) {
                                  const nextTopic = nextGroup.topics[0];
                                  if (nextTopic.subtopics && nextTopic.subtopics.length > 0) {
                                    nextTopicId = nextTopic.id;
                                    nextSubtopicId = nextTopic.subtopics[0].id;
                                    nextTopicTitle = nextTopic.subtopics[0].title;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  if (nextTopicId && nextSubtopicId) {
                    return (
                      <Link
                        to={`/course/${courseId}/${nextTopicId}/${nextSubtopicId}`}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all group ml-auto"
                      >
                        <div className="text-right">
                          <div className="text-xs opacity-90">Next Topic</div>
                          <div className="text-sm font-medium">{nextTopicTitle || 'Next Topic'}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    );
                  } else {
                    return (
                      <Link
                        to={`/course/${courseId}`}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all ml-auto"
                      >
                        <span className="text-sm font-medium">Course Complete! View All Subtopics</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    );
                  }
                })()
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}


