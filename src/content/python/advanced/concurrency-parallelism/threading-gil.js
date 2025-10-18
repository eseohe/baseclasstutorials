export const threadingGilContent = {
  id: 'threading-gil',
  title: 'Threading and the GIL',
  duration: '30 min',
  overview: `Learn how Python's Global Interpreter Lock (GIL) affects threading. See when threading is useful, how to use the threading module, and how to keep your code thread-safe.`,
  objectives: [
    'Understand the Global Interpreter Lock (GIL)',
    'Know when threading helps in Python',
    'Create and manage threads',
    'Use locks for thread safety',
    'Choose the right concurrency approach'
  ],
  sections: [
    {
      type: 'text',
      title: 'What is the GIL?',
      content: `
The Global Interpreter Lock (GIL) is a mechanism in CPython that allows only one thread to execute Python bytecode at a time. This means Python threads can't run in true parallel for CPU-bound tasks.

**Why does the GIL exist?**
- Keeps memory management safe
- Prevents race conditions in Python internals
- Makes the interpreter simpler

**Impact:**
- ✅ Threading helps with I/O-bound tasks (network, file, sleep)
- ❌ Threading does NOT speed up CPU-bound tasks (math, loops)
`
    },
    {
      type: 'code',
      title: 'Basic Threading Example',
      language: 'python',
      code: `
import threading
import time

def worker(name):
    print(f"Thread {name} starting")
    time.sleep(1)
    print(f"Thread {name} finished")

t1 = threading.Thread(target=worker, args=("A",))
t2 = threading.Thread(target=worker, args=("B",))

t1.start()
t2.start()
t1.join()
t2.join()
`
    },
    {
      type: 'text',
      content: `This creates two threads that run in parallel. Each thread sleeps for 1 second, releasing the GIL during sleep. Both threads finish in about 1 second total.`
    },
    {
      type: 'code',
      title: 'Threading for I/O-bound Tasks',
      language: 'python',
      code: `
import threading
import requests

def fetch(url):
    print(f"Fetching {url}")
    r = requests.get(url)
    print(f"Done {url}: {r.status_code}")

urls = ["https://httpbin.org/delay/1", "https://httpbin.org/delay/2"]
threads = [threading.Thread(target=fetch, args=(u,)) for u in urls]

for t in threads: t.start()
for t in threads: t.join()
`
    },
    {
      type: 'text',
      content: `Threading speeds up network requests because the GIL is released during I/O. Both requests run at the same time.`
    },
    {
      type: 'code',
      title: 'Threading for CPU-bound Tasks (No Speedup)',
      language: 'python',
      code: `
import threading

def cpu_task():
    total = 0
    for i in range(10**6):
        total += i*i
    print("Done")

threads = [threading.Thread(target=cpu_task) for _ in range(2)]
for t in threads: t.start()
for t in threads: t.join()
`
    },
    {
      type: 'text',
      content: `For CPU-heavy work, threads do NOT run in parallel due to the GIL. The tasks run one after the other, not faster. Use multiprocessing for true parallelism.`
    },
    {
      type: 'code',
      title: 'Race Condition Example',
      language: 'python',
      code: `
import threading

counter = 0

def increment():
    global counter
    for _ in range(10000):
        counter += 1

threads = [threading.Thread(target=increment) for _ in range(2)]
for t in threads: t.start()
for t in threads: t.join()
print("Counter:", counter)
`
    },
    {
      type: 'text',
      content: `This code is NOT thread-safe. Both threads update the same variable, causing unpredictable results (race condition).`
    },
    {
      type: 'code',
      title: 'Thread-Safe Counter with Lock',
      language: 'python',
      code: `
import threading

counter = 0
lock = threading.Lock()

def increment():
    global counter
    for _ in range(10000):
        with lock:
            counter += 1

threads = [threading.Thread(target=increment) for _ in range(2)]
for t in threads: t.start()
for t in threads: t.join()
print("Counter:", counter)
`
    },
    {
      type: 'text',
      content: `Using a lock ensures only one thread updates the counter at a time, preventing race conditions.`
    },
    {
      type: 'code',
      title: 'Thread Communication with Queue',
      language: 'python',
      code: `
import threading, queue

q = queue.Queue()

def producer():
    for i in range(5):
        q.put(i)
        print("Produced", i)

def consumer():
    while True:
        item = q.get()
        print("Consumed", item)
        q.task_done()
        if item == 4: break

t1 = threading.Thread(target=producer)
t2 = threading.Thread(target=consumer)
t1.start()
t2.start()
t1.join()
t2.join()
`
    },
    {
      type: 'text',
      content: `queue.Queue is thread-safe and lets threads communicate safely. The consumer stops after consuming the last item.`
    },
    {
      type: 'text',
      title: 'When to Use Threading',
      content: `
**Good for:**
- Network requests
- File I/O
- Waiting for user input
- Keeping GUIs responsive

**Not good for:**
- Heavy calculations (use multiprocessing)
- Scientific computing (use NumPy, multiprocessing, or C extensions)
`
    },
    {
      type: 'text',
      title: 'Best Practices',
      content: `
- Use locks for shared data
- Use queue.Queue for communication
- Keep threads simple and short-lived
- Use ThreadPoolExecutor for many threads
- Profile your code to see if threading helps
`
    }
  ]
};