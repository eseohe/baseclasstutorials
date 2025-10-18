export const decoratorAdapterContent = {
  id: 'decorator-adapter',
  title: 'Decorator & Adapter Patterns (Simplified)',
  duration: '20 min',
  objectives: [
    'Understand Decorator and Adapter patterns',
    'Write simple decorator and adapter code',
    'Know when to use each pattern'
  ],
  sections: [
    {
      type: 'text',
      title: 'What Are Structural Patterns?',
      content: `Structural patterns help you change or extend how objects work together.\n\n- Decorator: Add new features to objects without changing their code.\n- Adapter: Make one object work with another by changing its interface.`
    },
    {
      type: 'code',
      title: 'Simple Decorator Example',
      code: `def shout_decorator(func):\n    def wrapper(name):\n        result = func(name)\n        return result.upper()\n    return wrapper\n\n@shout_decorator\ndef greet(name):\n    return f"Hello, {name}"\n\nprint(greet('Alice'))  # HELLO, ALICE`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `The decorator adds new behavior (shouting) to the greet function, without changing its code.`
    },
    {
      type: 'code',
      title: 'Simple Adapter Example',
      code: `class OldPrinter:\n    def print_old(self, text):\n        return f"OLD: {text}"\n\nclass PrinterAdapter:\n    def __init__(self, old_printer):\n        self.old_printer = old_printer\n    def print(self, text):\n        return self.old_printer.print_old(text)\n\nprinter = PrinterAdapter(OldPrinter())\nprint(printer.print('Hello'))  # OLD: Hello`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `The adapter lets you use OldPrinter with a new interface. Use adapters to connect code that doesn't match.`
    },
    {
      type: 'text',
      title: 'Best Practices',
      content: `- Decorators: Keep them simple and focused\n- Adapters: Only adapt what you need\n- Use these patterns to make your code flexible and reusable`
    }
  ]
};