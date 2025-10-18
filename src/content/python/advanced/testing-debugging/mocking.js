export const mockingContent = {
  id: 'mocking',
  title: 'Mocking and Patching in Python Unit Tests',
  duration: '30 min',
  overview: `Learn how to use mocking and patching to isolate your code from dependencies and external systems during testing. Practice with real examples using unittest.mock.`,
  objectives: [
    'Understand what mocking is and why it is useful',
    'Use unittest.mock to replace objects and functions in tests',
    'Patch functions, methods, and objects with mock',
    'Check how your code interacts with dependencies',
    'Write tests that don’t depend on real files, APIs, or databases'
  ],
  sections: [
    {
      type: 'text',
      title: 'What is Mocking?',
      content: `Mocking means replacing parts of your system under test with fake objects. This lets you test your code in isolation, without relying on real files, APIs, or databases.\n\nFor example, you can mock a function that fetches data from the internet so your tests run fast and don’t depend on network access.`
    },
    {
      type: 'code',
      title: 'A Function to Test',
      language: 'python',
      code: `# fetcher.py\nimport requests\n\ndef fetch_data(url):\n    response = requests.get(url)\n    return response.json()`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `This function fetches JSON data from a URL. In tests, you don’t want to make real HTTP requests.`
    },
    {
      type: 'code',
      title: 'Mocking requests.get with unittest.mock',
      language: 'python',
      code: `# test_fetcher.py\nimport unittest\nfrom unittest.mock import patch\nfrom fetcher import fetch_data\n\nclass TestFetcher(unittest.TestCase):\n    @patch('fetcher.requests.get')\n    def test_fetch_data(self, mock_get):\n        mock_response = mock_get.return_value\n        mock_response.json.return_value = {'result': 42}\n        data = fetch_data('http://example.com')\n        self.assertEqual(data, {'result': 42})\n        mock_get.assert_called_once_with('http://example.com')\n\nif __name__ == '__main__':\n    unittest.main()`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `@patch replaces requests.get with a mock object. You control what it returns. This test checks that fetch_data returns the fake data and that requests.get was called with the right URL.`
    },
    {
      type: 'code',
      title: 'Mocking File I/O',
      language: 'python',
      code: `# file_reader.py\ndef read_file(path):\n    with open(path) as f:\n        return f.read()`
    },
    {
      type: 'code',
      title: 'Testing with mock_open',
      language: 'python',
      code: `# test_file_reader.py\nimport unittest\nfrom unittest.mock import mock_open, patch\nfrom file_reader import read_file\n\nclass TestFileReader(unittest.TestCase):\n    @patch('builtins.open', new_callable=mock_open, read_data='hello world')\n    def test_read_file(self, mock_file):\n        result = read_file('dummy.txt')\n        self.assertEqual(result, 'hello world')\n        mock_file.assert_called_once_with('dummy.txt')\n\nif __name__ == '__main__':\n    unittest.main()`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `mock_open lets you fake file reading and writing. This test checks that read_file returns the fake file content and that open was called with the right filename.`
    },
    {
      type: 'text',
      title: 'Best Practices',
      content: `- Use patch as a decorator or context manager\n- Always check that your mocks were called as expected\n- Only mock what you need\n- Use mock_open for file I/O\n- Use return_value and side_effect to control mock behavior\n- Clean up patches after your test (patch as decorator/context manager does this for you)`
    }
  ]
};