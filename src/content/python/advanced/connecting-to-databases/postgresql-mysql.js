export const postgresqlMysqlContent = {
  id: 'postgresql-mysql',
  title: 'Connecting to PostgreSQL/MySQL',
  duration: '40 minutes',
  objectives: [
    'Connect to PostgreSQL and MySQL databases',
    'Handle connection pooling',
    'Implement error handling',
    'Use database-specific features'
  ],
  sections: [
    {
      type: 'text',
      title: 'Getting a Database: Installation or Docker',
      content: `
Before you can connect to PostgreSQL or MySQL from Python, you need a running database server. There are two common ways to get one:

### 1. Install Locally
- **PostgreSQL:** Download from https://www.postgresql.org/download/
- **MySQL:** Download from https://dev.mysql.com/downloads/mysql/
- Follow the installer instructions for your operating system.
- During installation, you'll set up a username, password, and database name.

### 2. Use Docker (Recommended for Testing)
Docker lets you run databases in isolated containers without installing them directly on your system.

**PostgreSQL Docker Example:**
\`\`\`bash
docker run --name my-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=mydb -p 5432:5432 -d postgres
\`\`\`

**MySQL Docker Example:**
\`\`\`bash
docker run --name my-mysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=mydb -e MYSQL_USER=root -e MYSQL_PASSWORD=password -p 3306:3306 -d mysql
\`\`\`

**Parameter Mapping:**
- \`host\`: Use \`localhost\` if running Docker on your machine.
- \`port\`: The \`-p\` flag in Docker maps the container port to your local port (5432 for PostgreSQL, 3306 for MySQL).
- \`user\`, \`password\`, \`database\`: Set by the \`-e\` environment variables in the Docker command.
- These same values are used in your Python connection code.

**Example:**
If you run the PostgreSQL Docker command above, your Python connection parameters should be:
- host: 'localhost'
- port: 5432
- user: 'postgres'
- password: 'password'
- database: 'mydb'

The same applies for MySQL with the corresponding values.
`
    },
    {
      type: 'overview',
      title: 'Database Drivers and Connection',
      code: `
Python provides several drivers for connecting to PostgreSQL and MySQL:

### PostgreSQL:
- **psycopg2**: Most popular, C-based
- **asyncpg**: Async support
- **psycopg3**: Latest version with async support

### MySQL:
- **mysql-connector-python**: Official Oracle driver
- **PyMySQL**: Pure Python implementation
- **mysqlclient**: C-based, fastest
`
    },
    {
      type: 'code',
      title: 'PostgreSQL Connection',
      language: 'python',
      code: `
# pip install psycopg2-binary

import psycopg2
from psycopg2 import pool
import os
from contextlib import contextmanager

# Connection parameters (match your Docker or local setup)
DATABASE_CONFIG = {
    'host': 'localhost',
    'database': 'mydb',
    'user': 'postgres',
    'password': 'password',
    'port': 5432
}

# Basic connection
try:
    conn = psycopg2.connect(**DATABASE_CONFIG)
    cursor = conn.cursor()
    
    # Execute query
    cursor.execute("SELECT version();")
    version = cursor.fetchone()
    print(f"PostgreSQL version: {version[0]}")
    
except psycopg2.Error as e:
    print(f"Database error: {e}")
finally:
    if cursor:
        cursor.close()
    if conn:
        conn.close()
`
    },
    {
      type: 'text',
      content: `This code connects to a PostgreSQL database using the parameters you set up (either in Docker or during installation).`
    },
    {
      type: 'code',
      title: 'MySQL Connection',
      language: 'python',
      code: `
# pip install mysql-connector-python

import mysql.connector
from mysql.connector import Error

# Connection configuration (match your Docker or local setup)
MYSQL_CONFIG = {
    'host': 'localhost',
    'database': 'mydb',
    'user': 'root',
    'password': 'password',
    'port': 3306
}

try:
    connection = mysql.connector.connect(**MYSQL_CONFIG)
    
    if connection.is_connected():
        cursor = connection.cursor()
        cursor.execute("SELECT DATABASE();")
        db_name = cursor.fetchone()
        print(f"Connected to database: {db_name[0]}")

except Error as e:
    print(f"MySQL error: {e}")
finally:
    if connection.is_connected():
        cursor.close()
        connection.close()
`
    },
    {
      type: 'text',
      content: `This code connects to a MySQL database using the parameters you set up (either in Docker or during installation).`
    },
    {
      type: 'code',
      title: 'Connection Pooling',
      language: 'python',
      code: `
# PostgreSQL connection pool
pg_pool = psycopg2.pool.SimpleConnectionPool(
    minconn=1,
    maxconn=10,
    **DATABASE_CONFIG
)

@contextmanager
def get_db_connection():
    connection = pg_pool.getconn()
    try:
        yield connection
    finally:
        pg_pool.putconn(connection)

# Usage
with get_db_connection() as conn:
    with conn.cursor() as cursor:
        cursor.execute("SELECT * FROM users LIMIT 5")
        users = cursor.fetchall()

# MySQL connection pool
mysql_pool = mysql.connector.pooling.MySQLConnectionPool(
    pool_name="mypool",
    pool_size=5,
    **MYSQL_CONFIG
)

def execute_query(query, params=None):
    connection = mysql_pool.get_connection()
    try:
        cursor = connection.cursor()
        cursor.execute(query, params or ())
        if query.strip().upper().startswith('SELECT'):
            return cursor.fetchall()
        connection.commit()
        return cursor.rowcount
    finally:
        cursor.close()
        connection.close()
`
    },
    {
      type: 'text',
      content: `Connection pooling allows your application to reuse database connections efficiently, which is important for performance in production systems.`
    },
    {
      type: 'code',
      title: 'CRUD Operations with Error Handling',
      code: `
def create_user(username, email, db_type='postgresql'):
    if db_type == 'postgresql':
        query = "INSERT INTO users (username, email) VALUES (%s, %s) RETURNING id"
        with get_db_connection() as conn:
            with conn.cursor() as cursor:
                cursor.execute(query, (username, email))
                user_id = cursor.fetchone()[0]
                conn.commit()
                return user_id
    
    elif db_type == 'mysql':
        query = "INSERT INTO users (username, email) VALUES (%s, %s)"
        connection = mysql_pool.get_connection()
        try:
            cursor = connection.cursor()
            cursor.execute(query, (username, email))
            connection.commit()
            return cursor.lastrowid
        except Error as e:
            connection.rollback()
            raise e
        finally:
            cursor.close()
            connection.close()

# Usage
try:
    user_id = create_user("alice", "alice@example.com")
    print(f"Created user with ID: {user_id}")
except Exception as e:
    print(f"Failed to create user: {e}")
`
    },
    {
      type: 'text',
      content: `This function demonstrates how to insert a user into either PostgreSQL or MySQL, using the correct connection and error handling for each.`
    },
    {
      type: 'code',
      title: 'Database-Specific Features',
      code: `
# PostgreSQL - JSONB operations
def update_user_metadata(user_id, metadata):
    query = """
    UPDATE users 
    SET metadata = metadata || %s 
    WHERE id = %s
    """
    with get_db_connection() as conn:
        with conn.cursor() as cursor:
            cursor.execute(query, (json.dumps(metadata), user_id))
            conn.commit()

# PostgreSQL - Array operations
def get_users_by_tags(tags):
    query = "SELECT * FROM users WHERE tags && %s"
    with get_db_connection() as conn:
        with conn.cursor() as cursor:
            cursor.execute(query, (tags,))
            return cursor.fetchall()

# MySQL - JSON operations
def update_user_settings(user_id, settings):
    query = """
    UPDATE users 
    SET settings = JSON_MERGE_PATCH(settings, %s)
    WHERE id = %s
    """
    return execute_query(query, (json.dumps(settings), user_id))
`
    },
    {
      type: 'text',
      content: `These examples show how to use advanced features like JSON and arrays in PostgreSQL and MySQL.`
    },
    {
      type: 'text',
      title: 'Database Connection Best Practices',
      content: `
### Connection Management:
- Use connection pooling for production
- Set appropriate timeout values
- Implement retry logic for transient failures
- Monitor connection usage

### Security:
- Use environment variables for credentials
- Implement SSL connections
- Use parameterized queries
- Rotate passwords regularly

### Performance:
- Prepare statements when executing repeatedly
- Use batch operations for bulk inserts
- Implement proper indexing
- Monitor slow queries
`
    }
  ]
};
