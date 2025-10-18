export const sqlalchemyContent = {
  id: 'sqlalchemy',
  title: 'Using SQLAlchemy ORM',
  duration: '45 minutes',
  objectives: [
    'Understand SQLAlchemy ORM concepts',
    'Define models and relationships',
    'Perform database operations',
    'Handle sessions and transactions'
  ],
  sections: [
    {
      type: 'text',
      title: 'What is SQLAlchemy?',
      content: `
SQLAlchemy is Python's most popular Object Relational Mapping (ORM) library. 
It lets you work with databases using Python classes and objects instead of raw SQL.

**Key Benefits:**
- Database-agnostic queries
- Automatic SQL generation
- Connection pooling
- Transaction management
- Migration support with Alembic
`
    },
    {
      type: 'code',
      title: 'Installation',
      code: `
# Install SQLAlchemy using pip
pip install sqlalchemy
`
    },
    {
      type: 'text',
      content: `Install SQLAlchemy before you start. You can also install a database driver (like \`sqlite3\` for SQLite, \`psycopg2\` for PostgreSQL, etc.) if needed.`
    },
    {
      type: 'code',
      title: 'Basic Setup and Models',
      code: `
from sqlalchemy import create_engine, Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import declarative_base, sessionmaker, relationship
from datetime import datetime

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True)
    username = Column(String(50), unique=True, nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    posts = relationship("Post", back_populates="author")

class Post(Base):
    __tablename__ = 'posts'
    
    id = Column(Integer, primary_key=True)
    title = Column(String(200), nullable=False)
    content = Column(String(1000))
    created_at = Column(DateTime, default=datetime.utcnow)
    user_id = Column(Integer, ForeignKey('users.id'))
    
    author = relationship("User", back_populates="posts")

# Database setup
engine = create_engine('sqlite:///blog.db', echo=True)
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
`
    },
    {
      type: 'text',
      content: `**Explanation:**  
- \`declarative_base()\` creates a base class for your models.
- \`User\` and \`Post\` are Python classes mapped to database tables.
- \`relationship()\` links users and posts for easy navigation.
- \`create_engine()\` sets up the database connection (here, SQLite).
- \`Base.metadata.create_all(engine)\` creates tables if they don't exist.
- \`Session\` is a factory for database sessions (connections).`
    },
    {
      type: 'code',
      title: 'Creating and Adding Records (CREATE)',
      code: `
session = Session()

# Create a new user
user = User(username='alice', email='alice@email.com')
session.add(user)
session.commit()

# Create a new post for the user
post = Post(title='First Post', content='Hello World!', author=user)
session.add(post)
session.commit()
`
    },
    {
      type: 'text',
      content: `**Explanation:**  
- Create a session to interact with the database.
- Create a \`User\` object and add it to the session.
- Commit to save changes.
- Create a \`Post\` object and link it to the user using \`author=user\`.
- Commit again to save the post.`
    },
    {
      type: 'code',
      title: 'Reading Records (READ)',
      code: `
# Get all users
users = session.query(User).all()
for u in users:
    print(u.username, u.email)

# Get a user by username
user_by_name = session.query(User).filter(User.username == 'alice').first()
print("Found user:", user_by_name.username)

# Get all posts with their authors
posts = session.query(Post).all()
for post in posts:
    print(f"{post.title} by {post.author.username}")
`
    },
    {
      type: 'text',
      content: `**Explanation:**  
- \`session.query(User).all()\` gets all users.
- \`filter()\` lets you search for specific users.
- You can access related objects (like \`post.author.username\`) thanks to relationships.`
    },
    {
      type: 'code',
      title: 'Updating Records (UPDATE)',
      code: `
# Update a user's email
user_by_name.email = 'alice.new@email.com'
session.commit()
print("Updated email:", user_by_name.email)
`
    },
    {
      type: 'text',
      content: `**Explanation:**  
- Change an attribute on the object.
- Commit to save the change to the database.`
    },
    {
      type: 'code',
      title: 'Deleting Records (DELETE)',
      code: `
# Delete a user
session.delete(user_by_name)
session.commit()
print("User deleted.")
`
    },
    {
      type: 'text',
      content: `**Explanation:**  
- Use \`session.delete()\` to remove an object.
- Commit to apply the deletion.`
    },
    {
      type: 'code',
      title: 'Query Examples',
      code: `
# Filtering users created after a certain date
recent_users = session.query(User).filter(User.created_at > datetime(2023, 1, 1)).all()

# Users with at least one post
active_users = session.query(User).filter(User.posts.any()).all()

# Ordering users by username
users_by_name = session.query(User).order_by(User.username).all()

# Limiting results
recent_posts = session.query(Post).order_by(Post.created_at.desc()).limit(5).all()

# Aggregation: count posts per user
from sqlalchemy import func
user_post_counts = session.query(
    User.username, 
    func.count(Post.id).label('post_count')
).join(Post).group_by(User.username).all()

for username, count in user_post_counts:
    print(f"{username}: {count} posts")
`
    },
    {
      type: 'text',
      content: `**Explanation:**  
- Use \`filter()\` for conditions, \`order_by()\` for sorting, \`limit()\` for top results.
- \`func.count()\` lets you aggregate data (like counting posts per user).
- \`join()\` combines tables for more complex queries.`
    },
    {
      type: 'code',
      title: 'Raw SQL Queries',
      code: `
# You can run raw SQL if needed
result = session.execute("SELECT * FROM users WHERE username LIKE :pattern", {'pattern': 'a%'})
for row in result:
    print(row)
`
    },
    {
      type: 'text',
      content: `**Explanation:**  
- Use \`session.execute()\` for raw SQL queries.
- Always use parameters (like \`:pattern\`) to avoid SQL injection.`
    },
    {
      type: 'code',
      title: 'Session Management and Cleanup',
      code: `
session.close()
`
    },
    {
      type: 'text',
      content: `**Explanation:**  
- Always close your session when done to free resources and avoid connection leaks.`
    },
    {
      "type": "code",
      "title": "Using a Context Manager for Sessions",
      "code": `
from sqlalchemy.orm import Session

# Recommended way: use a context manager to handle sessions
with Session(engine) as session:
    # Create a new user
    user = User(username='bob', email='bob@email.com')
    session.add(user)
        session.commit()

    # Query users
    users = session.query(User).all()
    for u in users:
        print(u.username)
    `
    },
    {
      "type": "text",
      "content": "**Explanation:**  \n- Using `with Session(engine) as session:` automatically closes the session when the block ends, even if an error occurs.  \n- This is the safest and most Pythonic way to manage database sessions."
    },
    {
      type: 'text',
      title: 'SQLAlchemy Best Practices',
      content: `
**Session Management:**
- Use context managers (\`with Session() as session:\`) for automatic cleanup.
- One session per request/operation.
- Don't share sessions across threads.

**Performance:**
- Use lazy loading wisely.
- Implement proper indexing in your database.
- Use bulk operations for large datasets.
- Enable query logging during development.

**Security:**
- Always use parameterized queries.
- Validate input data.
- Use proper authentication/authorization in production.
- Implement connection pooling limits.

**Summary:**  
SQLAlchemy ORM lets you work with databases using Python objects, making your code cleaner, safer, and easier to maintain.
`
    }
  ]
};