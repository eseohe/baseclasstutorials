export const profilingContent = {
  id: 'profiling',
  title: 'Profiling and Performance Tuning (Simplified)',
  duration: '15 min',
  objectives: [
    'Measure code speed with cProfile and timeit',
    'Find slow parts of your code',
    'Apply simple optimizations'
  ],
  sections: [
    {
      type: 'text',
      title: 'Why Profile Your Code?',
      content: `Profiling means measuring how fast your code runs and finding bottlenecks. Use it to make your programs faster and more efficient.`
    },
    {
      type: 'code',
      title: 'Quick Profiling with cProfile',
      code: `import cProfile\ndef slow_function():\n    total = 0\n    for i in range(1000000):\n        total += i\n    return total\ncProfile.run('slow_function()')`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `cProfile shows you which functions take the most time. Use it to spot slow code.`
    },
    {
      type: 'code',
      title: 'Timing with timeit',
      code: `import timeit\ndef squares():\n    return [x*x for x in range(1000)]\nprint(timeit.timeit(squares, number=10000))`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `timeit measures how long a small piece of code takes to run. Use it to compare different approaches.`
    },
    {
      type: 'text',
      title: 'Simple Optimization Tips',
      content: `- Use built-in functions (like sum, sorted)\n- Cache results if you repeat expensive work\n- Avoid slow patterns (like string concatenation in loops)`
    },
    {
      type: 'text',
      title: 'Best Practices',
      content: `- Always measure before optimizing\n- Focus on the slowest parts first\n- Test your changes to confirm speedup`
    }
  ]
};