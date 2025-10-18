export const authHeadersContent = {
  id: 'auth-headers',
  title: 'Handling Authentication and Headers',
  duration: '35 min',
  overview: `Learn to handle API authentication and custom headers in Python. See how to use API keys, basic auth, bearer tokens, and custom headers for secure API access.`,
  objectives: [
    'Understand common API authentication methods',
    'Use API keys, basic auth, and bearer tokens',
    'Send custom headers in requests',
    'Handle authentication errors safely'
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to API Authentication',
      content: `
APIs often require authentication to protect data. Common methods include:

- **API Key**: A unique string sent as a header or query parameter.
- **Basic Auth**: Username and password, usually in the Authorization header.
- **Bearer Token**: A token (often JWT) sent in the Authorization header.
- **Custom Headers**: Some APIs require special headers for authentication.

**Always use HTTPS and never share your credentials.**
`
    },
    {
      type: 'code',
      title: 'API Key in Header',
      language: 'python',
      code: `
import requests

headers = {'X-API-Key': 'demo_api_key_12345'}
response = requests.get('https://api.example.com/data', headers=headers)
print(response.status_code)
`
    },
    {
      type: 'text',
      content: `Send your API key in a custom header. The header name depends on the API documentation.`
    },
    {
      type: 'code',
      title: 'API Key in Query Parameter',
      language: 'python',
      code: `
params = {'api_key': 'demo_api_key_12345'}
response = requests.get('https://api.example.com/data', params=params)
print(response.url)
`
    },
    {
      type: 'text',
      content: `Some APIs accept the key as a URL parameter. This is less secure—prefer headers if possible.`
    },
    {
      type: 'code',
      title: 'Basic Authentication',
      language: 'python',
      code: `
from requests.auth import HTTPBasicAuth

response = requests.get(
    'https://httpbin.org/basic-auth/user/pass',
    auth=HTTPBasicAuth('user', 'pass')
)
print(response.status_code)
`
    },
    {
      type: 'text',
      content: `Use \`auth=HTTPBasicAuth(username, password)\` for basic authentication. The credentials are sent in the Authorization header.`
    },
    {
      type: 'code',
      title: 'Bearer Token Authentication',
      language: 'python',
      code: `
token = "demo_bearer_token_abc123"
headers = {'Authorization': f'Bearer {token}'}
response = requests.get('https://api.example.com/protected', headers=headers)
print(response.status_code)
`
    },
    {
      type: 'text',
      content: `Bearer tokens (like JWT) are sent in the Authorization header. Many modern APIs use this method.`
    },
    {
      type: 'code',
      title: 'Custom Headers Example',
      language: 'python',
      code: `
headers = {
    'User-Agent': 'MyApp/1.0',
    'Accept-Language': 'en-US',
    'X-Custom-Header': 'value'
}
response = requests.get('https://httpbin.org/headers', headers=headers)
print(response.json()['headers'])
`
    },
    {
      type: 'text',
      content: `You can send any custom headers required by the API. This is useful for versioning, localization, or special features.`
    },
    {
      type: 'code',
      title: 'Session-Based Authentication (Cookies)',
      language: 'python',
      code: `
import requests

session = requests.Session()
login_data = {'username': 'user', 'password': 'pass'}
session.post('https://httpbin.org/cookies/set/sessionid/12345', data=login_data)
response = session.get('https://httpbin.org/cookies')
print(response.json())
`
    },
    {
      type: 'text',
      content: `Sessions remember cookies between requests. This is common for web apps that use login forms.`
    },
    {
      type: 'code',
      title: 'Error Handling for Authentication',
      language: 'python',
      code: `
response = requests.get('https://httpbin.org/status/401')
if response.status_code == 401:
    print("Unauthorized! Check your credentials.")
elif response.status_code == 403:
    print("Forbidden! You do not have access.")
else:
    print("Request OK:", response.status_code)
`
    },
    {
      type: 'text',
      content: `Always check for 401 (unauthorized) and 403 (forbidden) errors. Handle them gracefully in your code.`
    },
    {
      type: 'text',
      title: 'Best Practices',
      content: `
- Store credentials in environment variables, not code
- Use HTTPS for all API requests
- Never log or print sensitive keys or tokens
- Rotate and revoke credentials regularly
- Read API docs for required headers and authentication methods
`
    }
  ]
};