export const sqlite3Content = {
  id: 'sqlite3',
  title: 'SQLite Database Operations',
  duration: '35 min',
  overview: `Master SQLite database operations in Python using the built-in sqlite3 module. Learn to create databases, execute queries, handle transactions, and build robust data storage solutions.`,
  objectives: [
    'Connect to SQLite databases using the sqlite3 module',
    'Create tables and manage database schema',
    'Perform CRUD operations (Create, Read, Update, Delete)',
    'Use parameterized queries to prevent SQL injection',
    'Handle transactions and error management',
    'Work with different data types and constraints'
  ],
  sections: [
    {
      type: 'text',
      title: 'Introduction to SQLite',
      content: `SQLite is a lightweight, serverless database engine built into Python. It's perfect for small applications, prototyping, and local data storage.

**Why SQLite?**
- No server setup required
- Database is a single file
- Cross-platform and ACID compliant
- Uses standard SQL syntax
- Great for desktop apps, testing, and data analysis`
    },
    {
      type: 'code',
      title: 'Connecting to a Database',
      language: 'python',
      code: `import sqlite3

# Connect to a database file (creates it if it doesn't exist)
conn = sqlite3.connect('example.db')
print("Connected to SQLite database!")`
    },
    {
      type: 'text',
      content: `This code connects to a SQLite database file named \`example.db\`. If the file doesn't exist, it will be created automatically.`
    },
    {
      type: 'code',
      title: 'Creating a Users Table',
      language: 'python',
      code: `cursor = conn.cursor()

cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL,
        age INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
''')
conn.commit()
print("Users table created!")`
    },
    {
      type: 'text',
      content: `This creates a \`users\` table with columns for ID, username, email, age, and a timestamp. The \`AUTOINCREMENT\` keyword automatically generates unique IDs.`
    },
    {
      type: 'code',
      title: 'Creating a Posts Table with Foreign Key',
      language: 'python',
      code: `cursor.execute('''
    CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        title TEXT NOT NULL,
        content TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users (id)
    )
''')
conn.commit()
print("Posts table created!")`
    },
    {
      type: 'text',
      content: `This creates a \`posts\` table. Each post is linked to a user by \`user_id\`, which is a foreign key referencing the \`users\` table.`
    },
    {
      type: 'code',
      title: 'Inserting a User (Parameterized Query)',
      language: 'python',
      code: `user_data = ('alice', 'alice@example.com', 30)
cursor.execute(
    "INSERT INTO users (username, email, age) VALUES (?, ?, ?)",
    user_data
)
conn.commit()
print("Inserted user:", user_data[0])`
    },
    {
      type: 'text',
      content: `This code inserts a new user using a parameterized query. Parameterized queries help prevent SQL injection and are safer for user input.`
    },
    {
      type: 'code',
      title: 'Reading Users from the Database',
      language: 'python',
      code: `cursor.execute("SELECT id, username, email, age FROM users")
users = cursor.fetchall()
for user in users:
    print(user)`
    },
    {
      type: 'text',
      content: `This code selects all users from the database and prints each row. \`fetchall()\` returns a list of tuples, one for each user.`
    },
    {
      type: 'code',
      title: 'Updating a User\'s Age',
      language: 'python',
      code: `cursor.execute(
    "UPDATE users SET age = ? WHERE username = ?",
    (31, 'alice')
)
conn.commit()
print("Updated Alice's age!")`
    },
    {
      type: 'text',
      content: `This code updates the age of the user named 'alice'. Always use parameterized queries for updates.`
    },
    {
      type: 'code',
      title: 'Deleting a User',
      language: 'python',
      code: `cursor.execute(
    "DELETE FROM users WHERE username = ?",
    ('alice',)
)
conn.commit()
print("Deleted user 'alice'!")`
    },
    {
      type: 'text',
      content: `This code deletes the user named 'alice' from the database.`
    },
    {
      type: 'code',
      title: 'Inserting a Post',
      language: 'python',
      code: `post_data = (1, "Hello World", "This is my first post!")
cursor.execute(
    "INSERT INTO posts (user_id, title, content) VALUES (?, ?, ?)",
    post_data
)
conn.commit()
print("Inserted post for user_id 1!")`
    },
    {
      type: 'text',
      content: `This code inserts a new post for the user with ID 1. The \`user_id\` links the post to the user.`
    },
    {
      type: 'code',
      title: 'Joining Tables: Get Posts with User Info',
      language: 'python',
      code: `cursor.execute('''
    SELECT users.username, posts.title, posts.content
    FROM posts
    JOIN users ON posts.user_id = users.id
''')
for row in cursor.fetchall():
    print(row)`
    },
    {
      type: 'text',
      content: `This code joins the \`posts\` and \`users\` tables to show each post along with the username of its author.`
    },
    {
      type: 'code',
      title: 'Using Transactions for Safety',
      language: 'python',
      code: `try:
    cursor.execute("BEGIN TRANSACTION")
    cursor.execute("UPDATE users SET age = age + 1 WHERE username = 'bob'")
    cursor.execute("UPDATE users SET age = age - 1 WHERE username = 'charlie'")
    conn.commit()
    print("Transaction successful!")
except Exception as e:
    conn.rollback()
    print("Transaction failed:", e)`
    },
    {
      type: 'text',
      content: `This code demonstrates a transaction. If any operation fails, all changes are rolled back to keep the database consistent.`
    },
    {
      type: 'code',
      title: 'Closing the Connection',
      language: 'python',
      code: `conn.close()
print("Connection closed.")`
    },
    {
      type: 'text',
      content: `Always close the database connection when you're done to free up resources.`
    },
    {
      type: 'text',
      title: 'Best Practices',
      content: `- Use parameterized queries for all user input
- Always commit changes after INSERT, UPDATE, or DELETE
- Use transactions for related operations
- Handle exceptions and roll back on errors
- Use foreign keys for data integrity
- Close connections when done

**SQLite is perfect for small projects, prototyping, and learning SQL. For larger applications, consider PostgreSQL or MySQL.**`
    }
  ]
};