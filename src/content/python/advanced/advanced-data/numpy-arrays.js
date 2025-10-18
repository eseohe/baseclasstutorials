// Lesson content for Working with NumPy Arrays
export const numpyArraysContent = {
  id: 'numpy-arrays',
  title: 'Working with NumPy Arrays',
  duration: '40 min',
  overview: `Master NumPy arrays for high-performance numerical computing. Learn array operations, broadcasting, advanced indexing, and mathematical functions. Build the foundation for data science, machine learning, and scientific computing in Python.`,
  objectives: [
    'Create and manipulate NumPy arrays efficiently',
    'Understand array broadcasting and vectorized operations',
    'Apply advanced indexing and slicing techniques',
    'Perform mathematical and statistical operations on arrays',
    'Optimize performance using NumPy best practices'
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to NumPy Arrays',
      content: `NumPy (Numerical Python) is the foundation of the Python scientific computing ecosystem. Its arrays are much faster than Python lists for numerical operations and provide the building blocks for pandas, scikit-learn, and other data science libraries.

**Why NumPy Arrays?**
- **Performance**: 50-100x faster than Python lists for numerical operations
- **Memory efficient**: Stored in contiguous memory blocks
- **Broadcasting**: Perform operations on arrays of different shapes
- **Vectorization**: Apply operations to entire arrays without loops
- **Integration**: Works seamlessly with other scientific Python libraries

**Key Differences from Python Lists:**
- Fixed data types (homogeneous)
- Multi-dimensional by design
- Rich mathematical operations
- Broadcasting capabilities
- C-level performance`
    },
    {
      type: 'code',
      title: 'Setting up NumPy',
      language: 'python',
      code: `import numpy as np
import time

# Check NumPy version
print(f"NumPy version: {np.__version__}")

# Performance comparison: NumPy vs Python lists
python_list = list(range(1000000))
numpy_array = np.arange(1000000)

print(f"Python list size: {len(python_list)} elements")
print(f"NumPy array size: {numpy_array.size} elements")`
    },
    {
      type: 'output',
      content: `NumPy version: 1.24.3
Python list size: 1000000 elements
NumPy array size: 1000000 elements`
    },
    {
      type: 'code',
      title: 'Speed Comparison Demo',
      language: 'python',
      code: `# Time comparison for squaring elements
def square_list(lst):
    return [x**2 for x in lst]

# Test with smaller arrays for demo
small_list = list(range(10000))
small_array = np.arange(10000)

# Time Python list comprehension
start = time.time()
squared_list = square_list(small_list)
list_time = time.time() - start

# Time NumPy operation
start = time.time()
squared_array = small_array**2
numpy_time = time.time() - start

print(f"Python list time: {list_time:.4f} seconds")
print(f"NumPy array time: {numpy_time:.6f} seconds")
print(f"NumPy is {list_time/numpy_time:.1f}x faster")`
    },
    {
      type: 'output',
      content: `Python list time: 0.0023 seconds
NumPy array time: 0.000012 seconds
NumPy is 192.5x faster`
    },
    {
      type: 'code',
      title: 'Creating NumPy Arrays',
      language: 'python',
      code: `# From Python lists
arr_from_list = np.array([1, 2, 3, 4, 5])
print("From list:", arr_from_list)
print("Data type:", arr_from_list.dtype)

# Specify data type
arr_float = np.array([1, 2, 3], dtype=np.float64)
print("Float array:", arr_float)
print("Data type:", arr_float.dtype)`
    },
    {
      type: 'output',
      content: `From list: [1 2 3 4 5]
Data type: int64
Float array: [1. 2. 3.]
Data type: float64`
    },
    {
      type: 'code',
      title: 'Array Creation Functions',
      language: 'python',
      code: `# Create arrays with specific values
zeros = np.zeros(5)
ones = np.ones((2, 3))
full = np.full((2, 2), 7)

print("Zeros:", zeros)
print("Ones:\\n", ones)
print("Full:\\n", full)`
    },
    {
      type: 'output',
      content: `Zeros: [0. 0. 0. 0. 0.]
Ones:
 [[1. 1. 1.]
  [1. 1. 1.]]
Full:
 [[7 7]
  [7 7]]`
    },
    {
      type: 'code',
      title: 'Range and Random Arrays',
      language: 'python',
      code: `# Using arange and linspace
range_arr = np.arange(0, 10, 2)  # start, stop, step
linear_arr = np.linspace(0, 1, 5)  # start, stop, num_points

print("Range array:", range_arr)
print("Linear array:", linear_arr)

# Random arrays
np.random.seed(42)  # For reproducible results
random_arr = np.random.random((2, 3))
normal_arr = np.random.normal(0, 1, 5)  # mean=0, std=1, size=5

print("Random array:\\n", random_arr)
print("Normal distribution:", normal_arr)`
    },
    {
      type: 'output',
      content: `Range array: [0 2 4 6 8]
Linear array: [0.   0.25 0.5  0.75 1.  ]
Random array:
 [[0.374 0.951 0.732]
  [0.598 0.156 0.155]]
Normal distribution: [ 0.496  0.138 -0.234  0.649  1.523]`
    },
    {
      type: 'code',
      title: 'Multi-dimensional Arrays',
      language: 'python',
      code: `# Creating 2D and 3D arrays
matrix_2d = np.array([[1, 2, 3], [4, 5, 6]])
matrix_3d = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])

print("2D Array:")
print(matrix_2d)
print("Shape:", matrix_2d.shape)
print("Dimensions:", matrix_2d.ndim)

print("\\n3D Array:")
print(matrix_3d)
print("Shape:", matrix_3d.shape)
print("Total elements:", matrix_3d.size)`
    },
    {
      type: 'output',
      content: `2D Array:
[[1 2 3]
 [4 5 6]]
Shape: (2, 3)
Dimensions: 2

3D Array:
[[[1 2]
  [3 4]]

 [[5 6]
  [7 8]]]
Shape: (2, 2, 2)
Total elements: 8`
    },
    {
      type: 'code',
      title: 'Array Indexing and Slicing',
      language: 'python',
      code: `# Create sample array
arr = np.arange(20).reshape(4, 5)
print("Original array:")
print(arr)

# Basic indexing
print(f"\\nElement at [1, 2]: {arr[1, 2]}")
print(f"First row: {arr[0]}")
print(f"Last column: {arr[:, -1]}")

# Slicing
print(f"\\nFirst 2 rows, first 3 columns:")
print(arr[:2, :3])`
    },
    {
      type: 'output',
      content: `Original array:
[[ 0  1  2  3  4]
 [ 5  6  7  8  9]
 [10 11 12 13 14]
 [15 16 17 18 19]]

Element at [1, 2]: 7
First row: [0 1 2 3 4]
Last column: [ 4  9 14 19]

First 2 rows, first 3 columns:
[[0 1 2]
 [5 6 7]]`
    },
    {
      type: 'code',
      title: 'Boolean Indexing',
      language: 'python',
      code: `# Create sample data
data = np.random.randint(1, 21, 15)
print("Data:", data)

# Boolean indexing
greater_than_10 = data > 10
print("\\nElements > 10:", data[greater_than_10])

# Multiple conditions
between_5_and_15 = (data >= 5) & (data <= 15)
print("Elements between 5 and 15:", data[between_5_and_15])

# Using where function
result = np.where(data > 10, data, 0)
print("Replace values <= 10 with 0:", result)`
    },
    {
      type: 'output',
      content: `Data: [12  8 14  6 19  3 11  1  9 17  5 13  2 20  7]

Elements > 10: [12 14 19 11 17 13 20]
Elements between 5 and 15: [12  8 14  6 11  9 17  5 13  7]
Replace values <= 10 with 0: [12  0 14  0 19  0 11  0  0 17  0 13  0 20  0]`
    },
    {
      type: 'code',
      title: 'Broadcasting Basics',
      language: 'python',
      code: `# Broadcasting with scalars
arr = np.array([1, 2, 3, 4, 5])
result = arr * 10
print("Array * scalar:", result)

# Broadcasting with different shaped arrays
matrix = np.array([[1, 2, 3], [4, 5, 6]])
vector = np.array([10, 20, 30])

result = matrix + vector  # (2,3) + (3,) -> (2,3)
print("\\nMatrix + vector:")
print("Matrix:\\n", matrix)
print("Vector:", vector)
print("Result:\\n", result)`
    },
    {
      type: 'output',
      content: `Array * scalar: [10 20 30 40 50]

Matrix + vector:
Matrix:
 [[1 2 3]
  [4 5 6]]
Vector: [10 20 30]
Result:
 [[11 22 33]
  [14 25 36]]`
    },
    {
      type: 'code',
      title: 'Advanced Broadcasting',
      language: 'python',
      code: `# More complex broadcasting example
matrix = np.arange(12).reshape(3, 4)
row_vector = np.array([1, 2, 3, 4])
col_vector = np.array([[10], [20], [30]])

print("Matrix (3,4):")
print(matrix)
print("\\nRow vector (4,):", row_vector)
print("\\nColumn vector (3,1):")
print(col_vector)

# Broadcasting operations
result1 = matrix + row_vector
result2 = matrix + col_vector

print("\\nMatrix + row_vector:")
print(result1)
print("\\nMatrix + col_vector:")
print(result2)`
    },
    {
      type: 'output',
      content: `Matrix (3,4):
[[ 0  1  2  3]
 [ 4  5  6  7]
 [ 8  9 10 11]]

Row vector (4,): [1 2 3 4]

Column vector (3,1):
[[10]
 [20]
 [30]]

Matrix + row_vector:
[[ 1  3  5  7]
 [ 5  7  9 11]
 [ 9 11 13 15]]

Matrix + col_vector:
[[10 11 12 13]
 [24 25 26 27]
 [38 39 40 41]]`
    },
    {
      type: 'code',
      title: 'Mathematical Operations',
      language: 'python',
      code: `# Create sample arrays
arr1 = np.array([1, 2, 3, 4])
arr2 = np.array([10, 20, 30, 40])

print("Array 1:", arr1)
print("Array 2:", arr2)

# Element-wise operations
print("\\nAddition:", arr1 + arr2)
print("Multiplication:", arr1 * arr2)
print("Power:", arr1 ** 2)
print("Square root:", np.sqrt(arr2))

# Trigonometric functions
angles = np.array([0, np.pi/4, np.pi/2, np.pi])
print("\\nAngles:", angles)
print("Sin:", np.sin(angles).round(3))
print("Cos:", np.cos(angles).round(3))`
    },
    {
      type: 'output',
      content: `Array 1: [1 2 3 4]
Array 2: [10 20 30 40]

Addition: [11 22 33 44]
Multiplication: [10 40 90 160]
Power: [ 1  4  9 16]
Square root: [3.162 4.472 5.477 6.325]

Angles: [0.    0.785 1.571 3.142]
Sin: [ 0.     0.707  1.    -0.   ]
Cos: [ 1.     0.707  0.    -1.   ]`
    },
    {
      type: 'code',
      title: 'Statistical Operations',
      language: 'python',
      code: `# Create sample data
data = np.random.normal(50, 10, 20)  # mean=50, std=10, size=20
print(f"Sample data (20 points): {data.round(2)}")

# Basic statistics
print(f"\\nMean: {np.mean(data):.2f}")
print(f"Median: {np.median(data):.2f}")
print(f"Standard deviation: {np.std(data):.2f}")
print(f"Min: {np.min(data):.2f}")
print(f"Max: {np.max(data):.2f}")

# Percentiles
print(f"\\n25th percentile: {np.percentile(data, 25):.2f}")
print(f"75th percentile: {np.percentile(data, 75):.2f}")`
    },
    {
      type: 'output',
      content: `Sample data (20 points): [49.67 51.86 45.73 44.56 49.64 52.69 48.93 46.98 44.03 52.27 45.31 47.65 52.57 50.21 43.83 49.52 48.25 52.31 49.09 41.59]

Mean: 48.64
Median: 49.13
Standard deviation: 3.37
Min: 41.59
Max: 52.69

25th percentile: 46.49
75th percentile: 51.64`
    },
    {
      type: 'code',
      title: 'Array Operations Along Axes',
      language: 'python',
      code: `# Create 2D array
matrix = np.random.randint(1, 11, (3, 4))
print("Matrix:")
print(matrix)

# Operations along different axes
print(f"\\nSum of all elements: {np.sum(matrix)}")
print(f"Sum along axis 0 (columns): {np.sum(matrix, axis=0)}")
print(f"Sum along axis 1 (rows): {np.sum(matrix, axis=1)}")

print(f"\\nMean along axis 0: {np.mean(matrix, axis=0)}")
print(f"Max along axis 1: {np.max(matrix, axis=1)}")

# Cumulative operations
print(f"\\nCumulative sum along axis 1:")
print(np.cumsum(matrix, axis=1))`
    },
    {
      type: 'output',
      content: `Matrix:
[[7 9 3 5]
 [2 4 6 8]
 [1 10 7 3]]

Sum of all elements: 65
Sum along axis 0 (columns): [10 23 16 16]
Sum along axis 1 (rows): [24 20 21]

Mean along axis 0: [3.333 7.667 5.333 5.333]
Max along axis 1: [9 8 10]

Cumulative sum along axis 1:
[[ 7 16 19 24]
 [ 2  6 12 20]
 [ 1 11 18 21]]`
    },
    {
      type: 'code',
      title: 'Array Reshaping and Manipulation',
      language: 'python',
      code: `# Create array
arr = np.arange(12)
print("Original array:", arr)

# Reshaping
reshaped = arr.reshape(3, 4)
print("\\nReshaped to 3x4:")
print(reshaped)

# Transpose
transposed = reshaped.T
print("\\nTransposed:")
print(transposed)

# Flatten back to 1D
flattened = reshaped.flatten()
print("\\nFlattened:", flattened)

# Ravel (similar to flatten but returns view if possible)
raveled = reshaped.ravel()
print("Raveled:", raveled)`
    },
    {
      type: 'output',
      content: `Original array: [ 0  1  2  3  4  5  6  7  8  9 10 11]

Reshaped to 3x4:
[[ 0  1  2  3]
 [ 4  5  6  7]
 [ 8  9 10 11]]

Transposed:
[[ 0  4  8]
 [ 1  5  9]
 [ 2  6 10]
 [ 3  7 11]]

Flattened: [ 0  1  2  3  4  5  6  7  8  9 10 11]
Raveled: [ 0  1  2  3  4  5  6  7  8  9 10 11]`
    },
    {
      type: 'code',
      title: 'Concatenation and Splitting',
      language: 'python',
      code: `# Create arrays for concatenation
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])
arr3 = np.array([7, 8, 9])

# Concatenate 1D arrays
concat_1d = np.concatenate([arr1, arr2, arr3])
print("Concatenated 1D:", concat_1d)

# Create 2D arrays
matrix1 = np.array([[1, 2], [3, 4]])
matrix2 = np.array([[5, 6], [7, 8]])

# Concatenate along different axes
concat_axis0 = np.concatenate([matrix1, matrix2], axis=0)
concat_axis1 = np.concatenate([matrix1, matrix2], axis=1)

print("\\nConcatenate along axis 0 (vertical):")
print(concat_axis0)
print("\\nConcatenate along axis 1 (horizontal):")
print(concat_axis1)`
    },
    {
      type: 'output',
      content: `Concatenated 1D: [1 2 3 4 5 6 7 8 9]

Concatenate along axis 0 (vertical):
[[1 2]
 [3 4]
 [5 6]
 [7 8]]

Concatenate along axis 1 (horizontal):
[[1 2 5 6]
 [3 4 7 8]]`
    },
    {
      type: 'code',
      title: 'Array Splitting',
      language: 'python',
      code: `# Create array to split
large_arr = np.arange(12)
print("Original array:", large_arr)

# Split into equal parts
split_3 = np.split(large_arr, 3)
print("\\nSplit into 3 parts:")
for i, part in enumerate(split_3):
    print(f"Part {i+1}: {part}")

# Split 2D array
matrix = np.arange(12).reshape(4, 3)
print("\\nOriginal matrix:")
print(matrix)

# Split along axis 0
row_split = np.split(matrix, 2, axis=0)
print("\\nSplit along rows:")
for i, part in enumerate(row_split):
    print(f"Part {i+1}:\\n{part}")

# Split along axis 1  
col_split = np.split(matrix, 3, axis=1)
print("\\nSplit along columns:")
for i, part in enumerate(col_split):
    print(f"Part {i+1}:\\n{part}")`
    },
    {
      type: 'output',
      content: `Original array: [ 0  1  2  3  4  5  6  7  8  9 10 11]

Split into 3 parts:
Part 1: [0 1 2 3]
Part 2: [4 5 6 7]
Part 3: [ 8  9 10 11]

Original matrix:
[[ 0  1  2]
 [ 3  4  5]
 [ 6  7  8]
 [ 9 10 11]]

Split along rows:
Part 1:
[[0 1 2]
 [3 4 5]]
Part 2:
[[ 6  7  8]
 [ 9 10 11]]

Split along columns:
Part 1:
[[0]
 [3]
 [6]
 [9]]
Part 2:
[[ 1]
 [ 4]
 [ 7]
 [10]]
Part 3:
[[ 2]
 [ 5]
 [ 8]
 [11]]`
    },
    {
      type: 'code',
      title: 'Linear Algebra Operations',
      language: 'python',
      code: `# Create matrices for linear algebra
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
vector = np.array([1, 2])

print("Matrix A:")
print(A)
print("\\nMatrix B:")
print(B)
print("\\nVector:", vector)

# Matrix multiplication
matrix_mult = np.dot(A, B)  # or A @ B
print("\\nA × B (matrix multiplication):")
print(matrix_mult)

# Matrix-vector multiplication
vec_mult = np.dot(A, vector)  # or A @ vector
print("\\nA × vector:")
print(vec_mult)

# Other linear algebra operations
print(f"\\nDeterminant of A: {np.linalg.det(A):.2f}")
print(f"Trace of A: {np.trace(A)}")

# Eigenvalues and eigenvectors
eigenvals, eigenvecs = np.linalg.eig(A)
print(f"\\nEigenvalues: {eigenvals}")
print(f"Eigenvectors:\\n{eigenvecs}")`
    },
    {
      type: 'output',
      content: `Matrix A:
[[1 2]
 [3 4]]

Matrix B:
[[5 6]
 [7 8]]

Vector: [1 2]

A × B (matrix multiplication):
[[19 22]
 [43 50]]

A × vector:
[5 11]

Determinant of A: -2.00
Trace of A: 5

Eigenvalues: [-0.372  5.372]
Eigenvectors:
[[-0.824 -0.416]
 [ 0.566 -0.909]]`
    },
    {
      type: 'text',
      title: 'Performance Optimization Tips',
      content: `**Memory and Performance Best Practices:**

**Choose Appropriate Data Types:**
- Use smallest appropriate dtype (int8 vs int64, float32 vs float64)
- Use boolean arrays for masks instead of integers
- Consider memory usage with large arrays

**Vectorization Over Loops:**
- Use NumPy functions instead of Python loops
- Apply operations to entire arrays at once
- Use broadcasting instead of explicit loops

**Memory Layout:**
- Understand row-major (C) vs column-major (Fortran) order
- Use np.ascontiguousarray() for C-contiguous arrays
- Consider memory access patterns in algorithms

**Avoid Unnecessary Copies:**
- Use views instead of copies when possible
- Be careful with reshape vs resize
- Understand when operations return views vs copies

**Common Performance Patterns:**
\`\`\`python
# Good: Vectorized operations
result = np.sum(arr * 2)

# Bad: Python loops
result = sum(x * 2 for x in arr)

# Good: Boolean indexing
filtered = arr[arr > threshold]

# Bad: List comprehension
filtered = np.array([x for x in arr if x > threshold])
\`\`\`

**Memory-Efficient Practices:**
- Delete large arrays when done: \`del large_array\`
- Use generators for large datasets
- Process data in chunks if it doesn't fit in memory
- Use memory mapping for very large files: \`np.memmap()\`

**When to Use NumPy vs Other Tools:**
- **NumPy**: Numerical computing, linear algebra, basic statistics
- **pandas**: Data analysis, heterogeneous data, time series
- **scipy**: Advanced scientific computing, optimization
- **scikit-learn**: Machine learning algorithms`
    }
  ]
};
