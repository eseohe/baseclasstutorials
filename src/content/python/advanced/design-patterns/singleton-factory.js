export const singletonFactoryContent = {
  id: 'singleton-factory',
  title: 'Singleton & Factory Patterns (Simplified)',
  duration: '25 min',
  objectives: [
    'Understand Singleton and Factory patterns',
    'Write simple Singleton and Factory code',
    'Know when to use each pattern',
    'Be aware of thread safety'
  ],
  sections: [
    {
      type: 'text',
      title: 'What Are Creational Patterns?',
      content: `Creational patterns help you control how objects are created.

- Singleton: Only one instance of a class exists.
- Factory: Lets you create objects without knowing their exact class.`
    },
    {
      type: 'code',
      title: 'Simple Singleton Example',
      code: `# Singleton using __new__
class Singleton:
    _instance = None
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance


a = Singleton()
b = Singleton()
print(a is b)  # True`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `The Singleton class always returns the same instance. Use this when you need a single shared object (like a config manager).`
    },
    {
      type: 'code',
      title: 'Simple Factory Example',
      code: `class Dog:
    def speak(self):
        return 'Woof!'

class Cat:
    def speak(self):
        return 'Meow!'


def animal_factory(kind):
    if kind == 'dog':
        return Dog()
    elif kind == 'cat':
        return Cat()
    else:
        raise ValueError('Unknown animal')


pet = animal_factory('dog')
print(pet.speak())  # Woof!`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `The factory function creates a Dog or Cat based on input. Use factories when you want to hide object creation details.`
    },
    {
      type: 'code',
      title: 'Thread-Safe Singleton',
      code: `import threading
class ThreadSafeSingleton:
    _instance = None
    _lock = threading.Lock()
    def __new__(cls):
        with cls._lock:
            if cls._instance is None:
                cls._instance = super().__new__(cls)
        return cls._instance`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `Use a lock to make your singleton safe in multi-threaded programs.`
    },
    {
      type: 'text',
      title: 'Best Practices',
      content: `- Use Singleton only when truly needed (single config, logger, etc.)
- Use Factory to simplify object creation and keep code flexible
- Keep your code simple and easy to test
- Document what your factory can create`
    }
  ]
};