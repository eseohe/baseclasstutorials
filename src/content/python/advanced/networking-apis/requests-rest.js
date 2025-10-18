export const requestsRestContent = {
  id: 'requests-rest',
  title: 'Using requests for REST APIs',
  duration: '35 min',
  overview: `Master the requests library for consuming REST APIs in Python. Learn to make HTTP requests, handle authentication, process JSON responses, and implement robust error handling for real-world API integrations.`,
  objectives: [
    'Make HTTP requests using the requests library',
    'Handle different HTTP methods (GET, POST, PUT, DELETE)',
    'Work with JSON data and API responses',
    'Implement proper error handling and status code checking',
    'Apply authentication and headers for secure API access'
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to REST APIs and requests',
      content: `REST APIs let applications communicate over the web using HTTP. The requests library makes it easy to interact with APIs in Python.

**Key concepts:**
- Resources: Data entities (users, posts, etc.)
- HTTP Methods: GET, POST, PUT, PATCH, DELETE
- Status Codes: 200 (success), 404 (not found), etc.
- Headers: Metadata about requests/responses
- JSON: Standard format for API data`
    },
    {
      type: 'code',
      title: 'Installing and Importing requests',
      language: 'python',
      code: `
# Install requests if needed:
# pip install requests

import requests

print(f"requests version: {requests.__version__}")
BASE_URL = "https://jsonplaceholder.typicode.com/"
print(f"Using API: {BASE_URL}")
`
    },
    {
      type: 'output',
      content: `requests version: 2.31.0
Using API: https://jsonplaceholder.typicode.com/`
    },
    {
      type: 'text',
      content: `Install requests and import it. We'll use JSONPlaceholder, a free test API.`
    },
    {
      type: 'code',
      title: 'Basic GET Request',
      language: 'python',
      code: `
url = BASE_URL + "posts/1"
response = requests.get(url)
print(f"Status Code: {response.status_code}")
print("Response Text (first 100 chars):")
print(response.text[:100])
`
    },
    {
      type: 'output',
      content: `Status Code: 200
Response Text (first 100 chars):
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit`
    },
    {
      type: 'text',
      content: `This sends a GET request and prints the status code and part of the response.`
    },
    {
      type: 'code',
      title: 'Parsing JSON Responses',
      language: 'python',
      code: `
data = response.json()
print("Post ID:", data['id'])
print("Title:", data['title'])
`
    },
    {
      type: 'output',
      content: `Post ID: 1
Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit`
    },
    {
      type: 'text',
      content: `Use \`response.json()\` to parse JSON data from the API.`
    },
    {
      type: 'code',
      title: 'GET Request with Parameters',
      language: 'python',
      code: `
params = {'userId': 1, '_limit': 2}
response = requests.get(BASE_URL + "posts", params=params)
posts = response.json()
for post in posts:
    print(f"Post {post['id']}: {post['title'][:40]}...")
`
    },
    {
      type: 'output',
      content: `Post 1: sunt aut facere repellat provident occ...
Post 2: qui est esse...`
    },
    {
      type: 'text',
      content: `Pass query parameters using the \`params\` argument. The API returns filtered results.`
    },
    {
      type: 'code',
      title: 'POST Request - Creating Data',
      language: 'python',
      code: `
new_post = {
    'title': 'My New Post',
    'body': 'This is the content.',
    'userId': 1
}
response = requests.post(BASE_URL + "posts", json=new_post)
print("Status Code:", response.status_code)
created = response.json()
print("Created ID:", created['id'])
`
    },
    {
      type: 'output',
      content: `Status Code: 201
Created ID: 101`
    },
    {
      type: 'text',
      content: `Send data with POST to create new resources. Use \`json=\` to send JSON.`
    },
    {
      type: 'code',
      title: 'PUT Request - Updating Data',
      language: 'python',
      code: `
updated_post = {
    'id': 1,
    'title': 'Updated Title',
    'body': 'Updated content.',
    'userId': 1
}
response = requests.put(BASE_URL + "posts/1", json=updated_post)
print("Status Code:", response.status_code)
print("Updated Title:", response.json()['title'])
`
    },
    {
      type: 'output',
      content: `Status Code: 200
Updated Title: Updated Title`
    },
    {
      type: 'text',
      content: `PUT replaces the entire resource. The API returns the updated data.`
    },
    {
      type: 'code',
      title: 'PATCH Request - Partial Update',
      language: 'python',
      code: `
partial_update = {'title': 'Partially Updated'}
response = requests.patch(BASE_URL + "posts/1", json=partial_update)
print("Status Code:", response.status_code)
print("New Title:", response.json()['title'])
`
    },
    {
      type: 'output',
      content: `Status Code: 200
New Title: Partially Updated`
    },
    {
      type: 'text',
      content: `PATCH updates only specified fields. Here, just the title is changed.`
    },
    {
      type: 'code',
      title: 'DELETE Request',
      language: 'python',
      code: `
response = requests.delete(BASE_URL + "posts/1")
print("Status Code:", response.status_code)
print("Response:", response.json())
`
    },
    {
      type: 'output',
      content: `Status Code: 200
Response: {}`
    },
    {
      type: 'text',
      content: `DELETE removes a resource. The API returns an empty object.`
    },
    {
      type: 'code',
      title: 'Error Handling',
      language: 'python',
      code: `
try:
    bad_response = requests.get(BASE_URL + "posts/999999", timeout=5)
    bad_response.raise_for_status()
except requests.exceptions.HTTPError:
    print("Resource not found (404)")
except requests.exceptions.Timeout:
    print("Request timed out")
except requests.exceptions.RequestException as e:
    print("Other error:", e)
`
    },
    {
      type: 'output',
      content: `Resource not found (404)`
    },
    {
      type: 'text',
      content: `Use exceptions and \`raise_for_status()\` to handle errors robustly.`
    },
    {
      type: 'code',
      title: 'Using Sessions for Efficiency',
      language: 'python',
      code: `
session = requests.Session()
session.headers.update({'User-Agent': 'MyApp/1.0'})
response = session.get(BASE_URL + "posts/2")
print("Title:", response.json()['title'])
session.close()
`
    },
    {
      type: 'output',
      content: `Title: qui est esse`
    },
    {
      type: 'text',
      content: `Sessions reuse connections and can store headers/cookies for multiple requests.`
    },
    {
      type: 'code',
      title: 'Custom Headers',
      language: 'python',
      code: `
headers = {
    'User-Agent': 'MyPythonApp/1.0',
    'Accept': 'application/json'
}
response = requests.get("https://httpbin.org/headers", headers=headers)
print("Sent headers:", response.json()['headers'])
`
    },
    {
      type: 'output',
      content: `Sent headers: {'User-Agent': 'MyPythonApp/1.0', 'Accept': 'application/json', ...}`
    },
    {
      type: 'text',
      content: `Set custom headers for authentication, language, or other requirements.`
    },
    {
      type: 'code',
      title: 'Handling Different Content Types',
      language: 'python',
      code: `
response = requests.get("https://jsonplaceholder.typicode.com/posts/1")
print("Content-Type:", response.headers['content-type'])
if 'application/json' in response.headers['content-type']:
    print("JSON keys:", list(response.json().keys()))
`
    },
    {
      type: 'output',
      content: `Content-Type: application/json; charset=utf-8
JSON keys: ['userId', 'id', 'title', 'body']`
    },
    {
      type: 'text',
      content: `Check content-type before parsing. APIs may return JSON, HTML, or plain text.`
    },
    {
      type: 'code',
      title: 'Pagination Example',
      language: 'python',
      code: `
all_posts = []
for page in range(1, 4):
    params = {'_page': page, '_limit': 5}
    response = requests.get(BASE_URL + "posts", params=params)
    posts = response.json()
    all_posts.extend(posts)
    print(f"Page {page}: {len(posts)} posts")
print("Total posts fetched:", len(all_posts))
`
    },
    {
      type: 'output',
      content: `Page 1: 5 posts
Page 2: 5 posts
Page 3: 5 posts
Total posts fetched: 15`
    },
    {
      type: 'text',
      content: `Many APIs use pagination. Loop through pages to fetch all data.`
    },
    {
      type: 'text',
      title: 'Best Practices',
      content: `
- Always check status codes and handle errors
- Use sessions for repeated requests
- Set timeouts to avoid hanging
- Validate and parse JSON carefully
- Respect API rate limits and documentation
- Secure sensitive data (tokens, passwords)
- Log errors and unexpected responses
`
    }
  ]
};