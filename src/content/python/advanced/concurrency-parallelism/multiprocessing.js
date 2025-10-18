export const multiprocessingContent = {
  id: 'multiprocessing',
  title: 'Multiprocessing for True Parallelism',
  duration: '45 min',
  overview: `Overcome Python's GIL limitations with multiprocessing. Learn to create parallel processes, share data safely between processes, and achieve true parallelism for CPU-intensive tasks.`,
  objectives: [
    'Understand the difference between multiprocessing and multithreading',
    'Create and manage processes using the multiprocessing module',
    'Share data between processes using queues, pipes, and shared memory',
    'Use process pools for parallel task execution',
    'Handle inter-process communication and synchronization',
    'Know when to choose multiprocessing over other approaches'
  ],
  sections: [
    {
      type: 'text',
      title: 'Why Multiprocessing?',
      content: `Multiprocessing creates separate Python interpreter processes, each with its own GIL. This enables true parallel execution for CPU-intensive work.

**Threading:** Good for I/O, limited by GIL for CPU.
**Multiprocessing:** True parallelism for CPU, higher memory use, more complex communication.

Use multiprocessing for:  
- Heavy calculations  
- Data analysis  
- Image/video processing  
- Machine learning`
    },
    {
      type: 'code',
      title: 'Basic Process Creation',
      language: 'python',
      code: `
import multiprocessing
import os

def worker(name):
    print(f"Process {name}: PID={os.getpid()}")

if __name__ == '__main__':
    p1 = multiprocessing.Process(target=worker, args=("A",))
    p2 = multiprocessing.Process(target=worker, args=("B",))
    p1.start()
    p2.start()
    p1.join()
    p2.join()
`
    },
    {
      type: 'output',
      content: `Process A: PID=12345
Process B: PID=12346`
    },
    {
      type: 'text',
      content: `This creates two processes running in parallel. Each has its own process ID. Always use the \`if __name__ == '__main__'\` guard.`
    },
    {
      type: 'code',
      title: 'CPU-bound: Sequential vs Parallel',
      language: 'python',
      code: `
import multiprocessing
import time

def cpu_task(n):
    return sum(i*i for i in range(n))

if __name__ == '__main__':
    N = 5_000_000
    # Sequential
    start = time.time()
    for _ in range(4):
        cpu_task(N)
    print("Sequential:", time.time() - start)

    # Parallel
    start = time.time()
    with multiprocessing.Pool() as pool:
        pool.map(cpu_task, [N]*4)
    print("Parallel:", time.time() - start)
`
    },
    {
      type: 'output',
      content: `Sequential: 1.2
Parallel: 0.5`
    },
    {
      type: 'text',
      content: `Multiprocessing can speed up CPU-heavy tasks by using multiple cores. Pool.map runs tasks in parallel.`
    },
    {
      type: 'code',
      title: 'Process Pool for Easy Parallelism',
      language: 'python',
      code: `
import multiprocessing

def square(x):
    return x * x

if __name__ == '__main__':
    with multiprocessing.Pool(4) as pool:
        results = pool.map(square, range(10))
    print(results)
`
    },
    {
      type: 'output',
      content: `[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]`
    },
    {
      type: 'text',
      content: `Process pools let you run many tasks in parallel with a simple interface.`
    },
    {
      type: 'code',
      title: 'Sharing Data: Queue',
      language: 'python',
      code: `
import multiprocessing

def producer(q):
    for i in range(5):
        q.put(i)
        print("Produced", i)

def consumer(q):
    while True:
        item = q.get()
        if item is None: break
        print("Consumed", item)

if __name__ == '__main__':
    q = multiprocessing.Queue()
    p1 = multiprocessing.Process(target=producer, args=(q,))
    p2 = multiprocessing.Process(target=consumer, args=(q,))
    p1.start()
    p2.start()
    p1.join()
    q.put(None)
    p2.join()
`
    },
    {
      type: 'output',
      content: `Produced 0
Produced 1
Produced 2
Produced 3
Produced 4
Consumed 0
Consumed 1
Consumed 2
Consumed 3
Consumed 4`
    },
    {
      type: 'text',
      content: `Use \`multiprocessing.Queue\` for safe communication between processes. The producer puts items, the consumer gets them.`
    },
    {
      type: 'code',
      title: 'Sharing Data: Value and Array',
      language: 'python',
      code: `
import multiprocessing

def increment(val, arr):
    val.value += 1
    arr[0] += 1

if __name__ == '__main__':
    val = multiprocessing.Value('i', 0)
    arr = multiprocessing.Array('i', [0])
    procs = [multiprocessing.Process(target=increment, args=(val, arr)) for _ in range(5)]
    for p in procs: p.start()
    for p in procs: p.join()
    print(val.value, arr[0])
`
    },
    {
      type: 'output',
      content: `5 5`
    },
    {
      type: 'text',
      content: `Use \`Value\` and \`Array\` for simple shared memory. Each process can safely update these objects.`
    },
    {
      type: 'code',
      title: 'Synchronization: Lock',
      language: 'python',
      code: `
import multiprocessing

def safe_increment(val, lock):
    for _ in range(1000):
        with lock:
            val.value += 1

if __name__ == '__main__':
    val = multiprocessing.Value('i', 0)
    lock = multiprocessing.Lock()
    procs = [multiprocessing.Process(target=safe_increment, args=(val, lock)) for _ in range(2)]
    for p in procs: p.start()
    for p in procs: p.join()
    print(val.value)
`
    },
    {
      type: 'output',
      content: `2000`
    },
    {
      type: 'text',
      content: `Use a lock to prevent race conditions when multiple processes update shared data.`
    },
    {
      type: 'text',
      title: 'Best Practices',
      content: `
- Use Pool for many parallel tasks
- Use Queue, Value, Array for sharing data
- Always use the __main__ guard
- Use locks for shared state
- Minimize communication between processes
- Multiprocessing is best for CPU-bound work
`
    }
  ]
};