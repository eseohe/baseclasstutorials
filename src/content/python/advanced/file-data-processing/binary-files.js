export const binaryFilesContent = {
  id: 'binary-files',
  title: 'Reading/Writing Binary Files',
  duration: '20 minutes',
  objectives: [
    'Understand what binary files are',
    'Read and write binary data in Python',
    'See basic use of the struct module',
    'Be aware of common binary file formats'
  ],
  sections: [
    {
      type: 'text',
      title: 'What Are Binary Files?',
      content: `
Binary files store data as raw bytes, not readable text. Examples include images, audio, executables, and custom formats.

**Key points:**
- Binary files use bytes, not characters
- You must know the format to interpret the data
- Common operations: reading, writing, packing/unpacking data
`
    },
    {
      type: 'code',
      title: 'Basic Binary Read/Write',
      language: 'python',
      code: `
# Write bytes to a file
with open('hello.bin', 'wb') as f:
    f.write(b'Hello')

# Read bytes from a file
with open('hello.bin', 'rb') as f:
    data = f.read()
    print(data)           # b'Hello'
    print(data.decode())  # Hello
`
    },
    {
      type: 'text',
      content: `Open files in binary mode ('wb' for writing, 'rb' for reading). You can decode bytes to text if you know the encoding.`
    },
    {
      type: 'code',
      title: 'Writing and Reading Integers',
      language: 'python',
      code: `
# Write three integers as bytes
nums = [42, 1337, 255]
with open('nums.bin', 'wb') as f:
    for n in nums:
        f.write(n.to_bytes(4, 'little'))

# Read them back
with open('nums.bin', 'rb') as f:
    while True:
        chunk = f.read(4)
        if not chunk:
            break
        print(int.from_bytes(chunk, 'little'))
`
    },
    {
      type: 'text',
      content: `Use to_bytes and from_bytes to convert between integers and bytes. The 'little' argument sets byte order (endianness).`
    },
    {
      type: 'code',
      title: 'Packing Data with struct',
      language: 'python',
      code: `
import struct

# Pack an int and a float
packed = struct.pack('i f', 7, 3.14)
print(packed)

# Unpack bytes back to values
unpacked = struct.unpack('i f', packed)
print(unpacked)
`
    },
    {
      type: 'text',
      content: `The struct module lets you pack multiple values into bytes and unpack them. Format strings ('i f') specify types: 'i' for int, 'f' for float.`
    },
    {
      type: 'code',
      title: 'Simple Binary Format Example',
      language: 'python',
      code: `
# Write a name and score as binary
import struct

name = 'Alice'
score = 99.5
with open('record.bin', 'wb') as f:
    name_bytes = name.encode()
    f.write(struct.pack('B', len(name_bytes)))  # length as 1 byte
    f.write(name_bytes)
    f.write(struct.pack('f', score))

# Read it back
with open('record.bin', 'rb') as f:
    name_len = struct.unpack('B', f.read(1))[0]
    name = f.read(name_len).decode()
    score = struct.unpack('f', f.read(4))[0]
    print(name, score)
`
    },
    {
      type: 'text',
      content: `This example writes a name and score in binary format, then reads them back. You must read in the same order and sizes you wrote.`
    },
    {
      type: 'text',
      title: 'Common Binary File Formats',
      content: `
- Images: PNG, JPEG, BMP
- Audio: WAV, MP3
- Data: .npy (NumPy), .pkl (pickle)
- Custom: Your own format for fast storage

You need documentation or specs to interpret these formats.
`
    },
    {
      type: 'text',
      title: 'Best Practices',
      content: `
- Always open files in binary mode for binary data
- Know the format before reading/writing
- Use struct for packing/unpacking multiple values
- Validate file size and content before processing
- Use checksums or magic numbers for custom formats

Binary files are powerful for speed and compactness, but require careful handling!
`
    }
  ]
};