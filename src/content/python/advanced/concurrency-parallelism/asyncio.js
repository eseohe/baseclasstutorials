export const asyncioContent = {
  id: 'asyncio',
  title: 'Asynchronous Programming with asyncio',
  duration: '35 min',
  overview: `Master asynchronous programming in Python using the asyncio library. Learn to write concurrent code that can handle multiple tasks efficiently, perfect for I/O-bound operations like web requests, file operations, and network communication.`,
  objectives: [
    'Understand the concepts of asynchronous programming and event loops',
    'Create and manage coroutines using async and await syntax',
    'Handle multiple concurrent tasks efficiently with asyncio',
    'Apply asyncio for real-world scenarios like web scraping and API calls',
    'Debug and optimize asynchronous Python applications'
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to Asynchronous Programming',
      content: `Asynchronous programming lets your program handle multiple tasks concurrently without blocking. Instead of waiting for slow I/O operations to finish, your program can switch to other tasks and come back when the I/O is ready.

**Key Concepts:**
- **Concurrency vs Parallelism**: Concurrency is managing multiple tasks at once; parallelism is doing multiple tasks simultaneously.
- **Event Loop**: The core of asyncio that schedules and runs asynchronous tasks.
- **Coroutines**: Special functions that can pause and resume.
- **Non-blocking**: Operations that don't halt the entire program while waiting.

**Use asyncio for:**
- I/O-bound tasks (network, file, database)
- Handling many connections (web servers, chat apps)
- Responsive applications

**Don't use asyncio for:**
- CPU-bound tasks (use multiprocessing)
- Simple scripts with little I/O
`
    },
    {
      type: 'code',
      title: 'Basic Async Function',
      language: 'python',
      code: `
import asyncio

async def say_hello():
    print("Hello ...")
    await asyncio.sleep(1)
    print("... world!")

asyncio.run(say_hello())
`
    },
    {
      type: 'output',
      content: `Hello ...
... world!`
    },
    {
      type: 'text',
      content: `This is a simple coroutine. \`await asyncio.sleep(1)\` pauses the function without blocking the whole program.`
    },
    {
      type: 'code',
      title: 'Running Multiple Tasks Concurrently',
      language: 'python',
      code: `
import asyncio

async def greet(name, delay):
    await asyncio.sleep(delay)
    print(f"Hello, {name}!")

async def main():
    await asyncio.gather(
        greet("Alice", 2),
        greet("Bob", 1),
        greet("Charlie", 3)
    )

asyncio.run(main())
`
    },
    {
      type: 'output',
      content: `Hello, Bob!
Hello, Alice!
Hello, Charlie!`
    },
    {
      type: 'text',
      content: `\`asyncio.gather()\` runs all coroutines at the same time. Each finishes as soon as its delay is done.`
    },
    {
      type: 'code',
      title: 'Using asyncio with HTTP Requests',
      language: 'python',
      code: `
import asyncio
import aiohttp  # pip install aiohttp

async def fetch(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            text = await response.text()
            print(f"Fetched {url}: {len(text)} chars")

async def main():
    urls = [
        "https://www.python.org",
        "https://www.example.com",
        "https://httpbin.org/get"
    ]
    await asyncio.gather(*(fetch(url) for url in urls))

asyncio.run(main())
`
    },
    {
      type: 'output',
      content: `Fetched https://www.example.com: 1256 chars
Fetched https://www.python.org: 48876 chars
Fetched https://httpbin.org/get: 306 chars`
    },
    {
      type: 'text',
      content: `aiohttp lets you make many HTTP requests at once. Each fetch runs concurrently, speeding up network operations.`
    },
    {
      type: 'code',
      title: 'Async File Operations',
      language: 'python',
      code: `
import asyncio
import aiofiles  # pip install aiofiles

async def write_file(filename, text):
    async with aiofiles.open(filename, 'w') as f:
        await f.write(text)

async def read_file(filename):
    async with aiofiles.open(filename, 'r') as f:
        content = await f.read()
        print(f"Read from {filename}: {content}")

async def main():
    await write_file("test.txt", "Async file write!")
    await read_file("test.txt")

asyncio.run(main())
`
    },
    {
      type: 'output',
      content: `Read from test.txt: Async file write!`
    },
    {
      type: 'text',
      content: `aiofiles allows non-blocking file operations, useful when working with many files or in web servers.`
    },
    {
      type: 'code',
      title: 'Async Database Example (aiosqlite)',
      language: 'python',
      code: `
import asyncio
import aiosqlite  # pip install aiosqlite

async def db_example():
    async with aiosqlite.connect("example.db") as db:
        await db.execute("CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY, name TEXT)")
        await db.execute("INSERT INTO items (name) VALUES ('apple')")
        await db.commit()
        async with db.execute("SELECT * FROM items") as cursor:
            async for row in cursor:
                print(row)

asyncio.run(db_example())
`
    },
    {
      type: 'output',
      content: `(1, 'apple')`
    },
    {
      type: 'text',
      content: `aiosqlite lets you run database queries asynchronously, so your app can handle other tasks while waiting for the database.`
    },
    {
      type: 'code',
      title: 'Timeouts and Cancellation',
      language: 'python',
      code: `
import asyncio

async def slow_task():
    await asyncio.sleep(5)
    return "Done!"

async def main():
    try:
        result = await asyncio.wait_for(slow_task(), timeout=2)
        print(result)
    except asyncio.TimeoutError:
        print("Task timed out!")

asyncio.run(main())
`
    },
    {
      type: 'output',
      content: `Task timed out!`
    },
    {
      type: 'text',
      content: `Use \`asyncio.wait_for()\` to set timeouts for tasks. If the task takes too long, it raises a TimeoutError.`
    },
    {
      type: 'code',
      title: 'Producer-Consumer with Queue',
      language: 'python',
      code: `
import asyncio

async def producer(queue):
    for i in range(3):
        await queue.put(f"item {i}")
        print(f"Produced item {i}")
        await asyncio.sleep(1)
    await queue.put(None)  # Signal consumer to stop

async def consumer(queue):
    while True:
        item = await queue.get()
        if item is None:
            break
        print(f"Consumed {item}")
        queue.task_done()

async def main():
    queue = asyncio.Queue()
    await asyncio.gather(producer(queue), consumer(queue))

asyncio.run(main())
`
    },
    {
      type: 'output',
      content: `Produced item 0
Consumed item 0
Produced item 1
Consumed item 1
Produced item 2
Consumed item 2`
    },
    {
      type: 'text',
      content: `Use \`asyncio.Queue\` for safe communication between coroutines. The producer adds items, the consumer processes them.`
    },
    {
      type: 'code',
      title: 'Async Context Manager Example',
      language: 'python',
      code: `
import asyncio

class AsyncResource:
    async def __aenter__(self):
        print("Resource acquired")
        await asyncio.sleep(0.5)
        return self

    async def __aexit__(self, exc_type, exc, tb):
        print("Resource released")
        await asyncio.sleep(0.2)

    async def do_work(self):
        print("Working...")
        await asyncio.sleep(0.3)
        print("Work done!")

async def main():
    async with AsyncResource() as res:
        await res.do_work()

asyncio.run(main())
`
    },
    {
      type: 'output',
      content: `Resource acquired
Working...
Work done!
Resource released`
    },
    {
      type: 'text',
      content: `Async context managers let you manage resources (like connections) cleanly in async code.`
    },
    {
      type: 'text',
      title: 'Best Practices',
      content: `
- Always use \`await\` for async operations
- Use \`asyncio.run()\` for the main entry point
- Use \`gather()\` for concurrent tasks
- Use queues for communication
- Use timeouts for reliability
- Prefer async libraries for I/O (aiohttp, aiofiles, aiosqlite)
- Don't use asyncio for CPU-bound work
`
    }
  ]
};