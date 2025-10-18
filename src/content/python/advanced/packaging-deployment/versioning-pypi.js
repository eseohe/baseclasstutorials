export const versioningPypiContent = {
  id: 'versioning-pypi',
  title: 'Versioning and Publishing to PyPI',
  duration: '25 min',
  overview: `Learn how to version your Python package and publish it to the Python Package Index (PyPI) so others can install it with pip.`,
  objectives: [
    'Understand semantic versioning',
    'Update your package version correctly',
    'Build your package for distribution',
    'Publish your package to PyPI',
    'Test your package before release'
  ],
  sections: [
    {
      type: 'text',
      title: 'Semantic Versioning',
      content: `Semantic versioning uses three numbers: MAJOR.MINOR.PATCH (e.g. 1.2.3).\n- MAJOR: Breaking changes\n- MINOR: New features, no breaking changes\n- PATCH: Bug fixes, no breaking changes\n\nUpdate your version in setup.py or pyproject.toml before publishing.`
    },
    {
      type: 'code',
      title: 'Where to Set Your Version',
      language: 'python',
      code: `# setup.py\nsetup(\n    name='my_package',\n    version='1.2.3',\n    ...\n)`
    },
    {
      type: 'code',
      title: 'Or in pyproject.toml',
      language: 'toml',
      code: `[project]\nname = 'my_package'\nversion = '1.2.3'`
    },
    {
      type: 'text',
      title: 'Building Your Package',
      content: `Use the build tool to create a distributable package. This makes a .whl (wheel) and .tar.gz (source) file in the dist/ folder.`
    },
    {
      type: 'code',
      title: 'Build Command',
      language: 'bash',
      code: `pip install build\npython -m build`
    },
    {
      type: 'text',
      title: 'Test Your Package Locally',
      content: `Before publishing, install your package locally and test it:`
    },
    {
      type: 'code',
      title: 'Install Locally',
      language: 'bash',
      code: `pip install dist/my_package-1.2.3-py3-none-any.whl`
    },
    {
      type: 'text',
      title: 'Publish to TestPyPI First',
      content: `TestPyPI is a sandbox for testing uploads. Always try here before the real PyPI.`
    },
    {
      type: 'code',
      title: 'Upload to TestPyPI',
      language: 'bash',
      code: `pip install twine\npython -m twine upload --repository testpypi dist/*`
    },
    {
      type: 'text',
      title: 'Publish to PyPI',
      content: `Once you’re sure everything works, upload to the real PyPI.`
    },
    {
      type: 'code',
      title: 'Upload to PyPI',
      language: 'bash',
      code: `python -m twine upload dist/*`
    },
    {
      type: 'text',
      title: 'Best Practices',
      content: `- Always bump your version for each release\n- Write clear release notes\n- Test your package before publishing\n- Use TestPyPI for practice\n- Keep your credentials safe (use .pypirc or environment variables)`
    }
  ]
};