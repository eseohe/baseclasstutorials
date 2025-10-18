export const observerStrategyContent = {
  id: 'observer-strategy',
  title: 'Behavioral: Observer, Strategy',
  duration: '20 min',
  objectives: [
    'Understand Observer and Strategy patterns',
    'Write simple observer and strategy code',
    'Know when to use each pattern'
  ],
  sections: [
    {
      type: 'text',
      title: 'What Are Behavioral Patterns?',
      content: `Behavioral patterns help you control how objects interact and behave.\n\n- Observer: Lets objects get notified when something changes.\n- Strategy: Lets you swap out algorithms or behaviors easily.`
    },
    {
      type: 'code',
      title: 'Simple Observer Example',
      code: `class Subject:\n    def __init__(self):\n        self._observers = []\n    def attach(self, observer):\n        self._observers.append(observer)\n    def notify(self, message):\n        for obs in self._observers:\n            obs.update(message)\n\nclass Observer:\n    def update(self, message):\n        print(f"Received: {message}")\n\nsubject = Subject()\nobserver1 = Observer()\nobserver2 = Observer()\nsubject.attach(observer1)\nsubject.attach(observer2)\nsubject.notify('Hello!')`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `Observers get notified when the subject changes. Use this for event systems, GUIs, or data updates.`
    },
    {
      type: 'code',
      title: 'Simple Strategy Example',
      code: `class Sorter:\n    def __init__(self, strategy):\n        self.strategy = strategy\n    def sort(self, data):\n        return self.strategy(data)\n\ndef bubble_sort(data):\n    return sorted(data)  # Just for demo\n\ndef reverse_sort(data):\n    return sorted(data, reverse=True)\n\nsorter = Sorter(bubble_sort)\nprint(sorter.sort([3, 1, 2]))  # [1, 2, 3]\n\nsorter.strategy = reverse_sort\nprint(sorter.sort([3, 1, 2]))  # [3, 2, 1]`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `The strategy pattern lets you change the sorting method at runtime. Use this when you want flexible algorithms.`
    },
    {
      type: 'text',
      title: 'Best Practices',
      content: `- Observer: Use for event-driven code\n- Strategy: Use for flexible algorithms\n- Keep your code simple and easy to test\n- Document what behaviors can be swapped`
    }
  ]
};