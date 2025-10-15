import { useState, useEffect } from 'react';
import { loadLessonContent } from '../utils/contentLoader';
import { CheckCircle, ExternalLink, Lightbulb, Code, FileText, Terminal } from 'lucide-react';

export default function LessonContentRenderer({ courseId, category, topicId, lessonId }) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadContent() {
      try {
        setLoading(true);
  const lessonContent = await loadLessonContent(courseId, category, topicId, lessonId);
        setContent(lessonContent);
      } catch (error) {
        console.error('Error loading content:', error);
        setContent(null);
      } finally {
        setLoading(false);
      }
    }

    loadContent();
  }, [courseId, category, topicId, lessonId]);

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2"></div>
        <div className="h-32 bg-slate-200 dark:bg-slate-700 rounded"></div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 rounded-r-lg">
        <p className="text-sm text-blue-900 dark:text-blue-100 m-0">
          <strong>Note:</strong> Content for this lesson is coming soon!
        </p>
      </div>
    );
  }

  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      {/* Duration Badge */}
      {content.duration && (
        <div className="mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200">
            {content.duration}
          </span>
        </div>
      )}

      {/* Overview */}
      {content.overview && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
          <h3 className="mt-0 mb-3 text-blue-900 dark:text-blue-100">Overview</h3>
          <div 
            className="text-blue-800 dark:text-blue-200 mb-0 whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: parseSimpleMarkdown(content.overview.trim()) }}
          />
        </div>
      )}

      {/* Learning Objectives */}
      {content.objectives && content.objectives.length > 0 && (
        <div className="mb-8">
          <h3 className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            What You'll Learn
          </h3>
          <ul className="space-y-2">
            {content.objectives.map((objective, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Content Sections */}
      {content.sections && content.sections.map((section, index) => (
        <ContentSection key={index} section={section} />
      ))}

      {/* Exercises */}
      {content.exercises && content.exercises.length > 0 && (
        <div className="mt-12 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <h3 className="mt-0 mb-6 text-yellow-900 dark:text-yellow-100 flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Practice & Reflection
          </h3>
          {content.exercises.map((exercise, index) => (
            <ExerciseBlock key={index} exercise={exercise} />
          ))}
        </div>
      )}

      {/* Resources */}
      {content.resources && content.resources.length > 0 && (
        <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg">
          <h3 className="mt-0 mb-4 flex items-center gap-2">
            <ExternalLink className="w-5 h-5" />
            Additional Resources
          </h3>
          <div className="space-y-3">
            {content.resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {resource.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Simple function to parse basic markdown formatting
function parseSimpleMarkdown(text) {
  if (!text) return text;
  
  let parsedText = text;
  
  // Replace `code` first to avoid conflicts with other formatting
  parsedText = parsedText.replace(/`(.*?)`/g, '<code class="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono">$1</code>');
  
  // Replace **bold** with <strong>bold</strong>
  parsedText = parsedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  return parsedText;
}

function ContentSection({ section }) {
    
  switch (section.type) {        
    case 'text':
      return (
        <div className="mb-8">
          {section.title && <h2>{section.title}</h2>}
          <div 
            className="whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: parseSimpleMarkdown(section.content.trim()) }}
          />
        </div>
      );
    case 'highlight':
      return (
        <div className="mb-8">
          {section.title && <h2>{section.title}</h2>}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-l-4 border-green-600 p-6 rounded-r-lg">
            <ul className="mb-0 space-y-2">
              {section.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    case 'code':
      return (
        <div className="mb-8">
          {section.title && (
            <h3 className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              {section.title}
            </h3>
          )}
          <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-sm text-slate-100 m-0">
              <code className={`language-${section.language || 'text'}`}>
                {section.code}
              </code>
            </pre>
          </div>
        </div>
      );
    case 'output':
      return (
        <div className="mb-8">
          {section.title && (
            <h4 className="flex items-center gap-2 text-blue-700 dark:text-blue-300 mb-3">
              <Terminal className="w-4 h-4" />
              {section.title}
            </h4>
          )}
          <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 rounded-r-lg p-4 overflow-x-auto">
            <pre className="text-sm text-blue-900 dark:text-blue-100 m-0 font-mono">
              {section.content}
            </pre>
          </div>
        </div>
      );
    case 'instruction':
      return (
        <div className="mb-8">
          {section.title && (
            <h4 className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 mb-3">
              <Terminal className="w-4 h-4" />
              {section.title}
            </h4>
          )}
          <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 rounded-r-lg p-4 overflow-x-auto">
            <pre className="text-sm text-indigo-900 dark:text-indigo-100 m-0 font-mono">
              {section.content}
            </pre>
          </div>
        </div>
      );
    case 'placeholder':
      return (
        <div className="mb-8">
          {section.title && <h2>{section.title}</h2>}
          <div className="bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-600 p-8 rounded-lg text-center">
            <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <div className="whitespace-pre-line text-slate-600 dark:text-slate-400">
              {section.content.trim()}
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="mb-8">
          {section.title && <h2>{section.title}</h2>}
          <div 
            className="whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: parseSimpleMarkdown(section.content || '') }}
          />
        </div>
      );
  }
}

function ExerciseBlock({ exercise }) {
  const [showHints, setShowHints] = useState(false);

  return (
    <div className="mb-4 last:mb-0">
      <h4 className="text-yellow-900 dark:text-yellow-100 mb-3">{exercise.question}</h4>
      
      {exercise.hints && exercise.hints.length > 0 && (
        <div className="mb-3">
          <button
            onClick={() => setShowHints(!showHints)}
            className="text-sm text-yellow-700 dark:text-yellow-300 hover:text-yellow-900 dark:hover:text-yellow-100 transition-colors cursor-pointer"
          >
            {showHints ? '🔽 Hide Hints' : '🔽 Show Hints'}
          </button>
          
          {showHints && (
            <ul className="mt-2 ml-4 text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
              {exercise.hints.map((hint, index) => (
                <li key={index}>• {hint}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}