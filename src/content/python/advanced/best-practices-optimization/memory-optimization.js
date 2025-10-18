
export const memoryOptimizationContent = {
  id: 'memory-optimization',
  title: 'Memory Optimization Techniques',
  duration: '15 min',
  objectives: [
    'Understand why memory optimization matters',
    'Use simple techniques to reduce memory usage',
    'Profile memory in Python'
  ],
  sections: [
    {
      type: 'text',
      title: 'Why Optimize Memory?',
      content: `Efficient memory use makes your programs faster and lets them handle more data. It’s especially important for big data, web servers, and embedded systems.`
    },
    {
      type: 'code',
      title: 'Profile Memory Usage',
      code: `# pip install memory-profiler\nfrom memory_profiler import profile\n\n@profile\ndef create_big_list():\n    return [x for x in range(1000000)]\n\ncreate_big_list()`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `Use memory_profiler to see how much memory your functions use. Add @profile above the function and run with:\n\n    python -m memory_profiler your_script.py`
    },
    {
      type: 'code',
      title: 'Use Generators for Large Data',
      code: `def big_range():\n    for x in range(1000000):\n        yield x\n\nfor num in big_range():\n    pass  # Uses much less memory than a list`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `Generators produce items one at a time, so they use less memory than lists.`
    },
    {
      type: 'code',
      title: 'Optimize Data Structures',
      code: `# Use __slots__ to save memory in classes\nclass Point:\n    __slots__ = ['x', 'y']\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `__slots__ tells Python not to use a dict for attributes, saving memory for many objects.`
    },
    {
      type: 'text',
      title: 'Best Practices',
      content: `- Profile memory before optimizing\n- Use generators for big data\n- Use __slots__ for simple classes\n- Delete objects you don’t need (del obj)\n- Avoid keeping unnecessary references`
    }
  ]
};