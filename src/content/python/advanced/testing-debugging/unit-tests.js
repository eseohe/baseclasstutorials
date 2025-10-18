// Lesson content for Writing Unit Tests with unittest and pytest
export const unitTestsContent = {
  id: 'unit-tests',
  title: 'Unit Testing in Python: unittest & pytest',
  duration: '50 min',
  overview: `Learn to write, organize, and run unit tests in Python using the built-in unittest framework and the popular pytest library. Practice with real code examples and see how to structure your files for effective testing.`,
  objectives: [
    'Understand why unit testing matters',
    'Write and run tests for real Python programs',
    'Organize code and test files in a project',
    'Use unittest and pytest for different styles of testing',
    'Test functions, classes, and error cases',
    'Use fixtures and setup/teardown methods',
    'Measure test coverage'
  ],
  sections: [
    {
      type: 'text',
      title: 'What is Unit Testing?',
      content: `Unit testing means checking small pieces of your code (like functions or classes) to make sure they work as expected. Good unit tests help you catch bugs early, make changes with confidence, and keep your code reliable.\n\nA good unit test is fast, independent, repeatable, and self-validating.\n\nTypical file organization:\n- calculator.py (your code)\n- test_calculator.py (your tests)`
    },
    {
      type: 'code',
      title: 'Your Program: calculator.py',
      language: 'python',
      code: `# calculator.py\ndef add(a, b):\n    return a + b\n\ndef divide(a, b):\n    if b == 0:\n        raise ValueError('Cannot divide by zero')\n    return a / b\n`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `This is a simple calculator module with two functions: add and divide. Save this as calculator.py.`
    },
    {
      type: 'code',
      title: 'Basic Tests with unittest',
      language: 'python',
      code: `# test_calculator.py\nimport unittest\nfrom calculator import add, divide\n\nclass TestCalculator(unittest.TestCase):\n    def test_add(self):\n        self.assertEqual(add(2, 3), 5)\n\n    def test_divide(self):\n        self.assertEqual(divide(10, 2), 5)\n\n    def test_divide_by_zero(self):\n        with self.assertRaises(ValueError):\n            divide(1, 0)\n\nif __name__ == '__main__':\n    unittest.main()`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `This test file checks that add and divide work correctly, and that dividing by zero raises an error. Save as test_calculator.py.`
    },
    {
      type: 'text',
      title: 'How to run unittest tests',
      content: `Open a terminal and run:\n\n    python test_calculator.py\n\nYou should see output showing which tests passed or failed.`
    },
    {
      type: 'code',
      title: 'Basic Tests with pytest',
      language: 'python',
      code: `# test_calculator_pytest.py\nimport pytest\nfrom calculator import add, divide\n\ndef test_add():\n    assert add(2, 3) == 5\n\ndef test_divide():\n    assert divide(10, 2) == 5\n\ndef test_divide_by_zero():\n    with pytest.raises(ValueError):\n        divide(1, 0)`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `pytest uses simple assert statements. Save this as test_calculator_pytest.py. Run with:\n\n    pytest test_calculator_pytest.py` 
    },
    {
      type: 'text',
      title: 'Best Practices',
      content: `- Name your test files starting with test_\n- Use clear, descriptive test names\n- Test normal and error cases\n- Keep tests independent\n- Run your tests often!`
    }
  ]
};