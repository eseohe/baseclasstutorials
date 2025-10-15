export const basics = [
  {
    id: 'basics',
    title: 'PostgreSQL Basics',
    topics: [
      {
        id: 'intro-postgresql',
        title: 'Introduction to Databases and PostgreSQL',
        subtopics: [
          { id: 'what-is-db-rdbms', title: 'What is a Database & RDBMS' },
          { id: 'why-postgresql', title: 'Why PostgreSQL (vs MySQL, SQLite, etc.)' },
          { id: 'architecture-overview', title: 'PostgreSQL architecture overview' },
          { id: 'installing-connecting', title: 'Installing PostgreSQL and connecting via psql or GUI (pgAdmin, DBeaver)' }
        ]
      },
      {
        id: 'sql-fundamentals',
        title: 'SQL Fundamentals',
        subtopics: [
          { id: 'what-is-sql', title: 'What is SQL (DDL, DML, DCL, TCL)' },
          { id: 'data-types', title: 'PostgreSQL data types (numeric, text, date/time, JSON, etc.)' },
          { id: 'db-operations', title: 'Creating, listing, and dropping databases' }
        ]
      },
      {
        id: 'tables-schemas',
        title: 'Tables and Schemas',
        subtopics: [
          { id: 'create-alter-table', title: 'Creating and altering tables (CREATE TABLE, ALTER TABLE)' },
          { id: 'schemas-namespaces', title: 'Using schemas and namespaces' },
          { id: 'constraints', title: 'Constraints: PRIMARY KEY, UNIQUE, NOT NULL, CHECK, DEFAULT' }
        ]
      },
      {
        id: 'basic-crud',
        title: 'Basic CRUD Operations',
        subtopics: [
          { id: 'insert-select-update-delete', title: 'INSERT, SELECT, UPDATE, DELETE' },
          { id: 'filtering-data', title: 'Filtering data with WHERE' },
          { id: 'sorting-data', title: 'Sorting data with ORDER BY' },
          { id: 'limit-offset', title: 'Limiting results with LIMIT and OFFSET' }
        ]
      },
      {
        id: 'querying-data',
        title: 'Querying Data',
        subtopics: [
          { id: 'comparison-logical-operators', title: 'Comparison and logical operators (=, >, IN, LIKE, BETWEEN)' },
          { id: 'null-coalesce', title: 'NULL handling and COALESCE()' },
          { id: 'aliases', title: 'Aliases for columns and tables' }
        ]
      },
      {
        id: 'functions-expressions',
        title: 'Functions and Expressions',
        subtopics: [
          { id: 'string-functions', title: 'String functions (CONCAT, SUBSTRING, UPPER)' },
          { id: 'numeric-functions', title: 'Numeric functions (ROUND, CEIL, FLOOR)' },
          { id: 'datetime-functions', title: 'Date/time functions (NOW(), AGE(), EXTRACT)' }
        ]
      },
      {
        id: 'joins',
        title: 'Joins',
        subtopics: [
          { id: 'types-of-joins', title: 'Inner joins, left/right joins, full outer joins' },
          { id: 'self-cross-joins', title: 'Self joins and cross joins' }
        ]
      },
      {
        id: 'aggregation-grouping',
        title: 'Aggregation and Grouping',
        subtopics: [
          { id: 'group-by-having', title: 'GROUP BY and HAVING' },
          { id: 'aggregate-functions', title: 'Aggregate functions (COUNT, SUM, AVG, MAX, MIN)' }
        ]
      },
      {
        id: 'basic-subqueries',
        title: 'Basic Subqueries',
        subtopics: [
          { id: 'types-of-subqueries', title: 'Scalar, row, and table subqueries' },
          { id: 'subqueries-where-from', title: 'Using subqueries in WHERE and FROM clauses' }
        ]
      },
      {
        id: 'import-export',
        title: 'Importing and Exporting Data',
        subtopics: [
          { id: 'copy-commands', title: 'Using COPY and \\copy commands' },
          { id: 'import-export-files', title: 'Import/export CSV and JSON files' }
        ]
      },
      {
        id: 'window-functions',
        title: 'Window Functions',
        subtopics: [
          { id: 'intro-window-functions', title: 'Introduction: what window functions are and why they differ from aggregates' },
          { id: 'syntax-partition-order', title: 'Syntax: OVER(), partitioning (PARTITION BY), ordering (ORDER BY)' },
          { id: 'common-window-functions', title: 'Common functions: ROW_NUMBER(), RANK(), DENSE_RANK(), NTILE(), LAG(), LEAD(), FIRST_VALUE(), LAST_VALUE()' },
          { id: 'frame-clauses', title: 'Frame clauses: ROWS BETWEEN vs RANGE BETWEEN (basic idea)' },
          { id: 'use-cases', title: 'Use cases: running totals, moving averages, top-N per group, gaps-and-islands' },
          { id: 'examples', title: 'Examples: running total, etc.' },
          { id: 'best-practices', title: 'Best practices: when to use window functions vs GROUP BY, performance considerations' }
        ]
      },
      {
        id: 'projects',
        title: 'Projects',
        subtopics: [
          { id: 'student-management-system', title: 'Student Management System: Tables (students, courses, enrollments), CRUD operations, basic joins' },
          { id: 'library-database', title: 'Simple Library Database: Track books, authors, borrowers; use constraints and relationships' },
          { id: 'sales-report-dashboard', title: 'Sales Report Dashboard (SQL-only): Aggregate queries and reports on sales data' },
          { id: 'movie-ratings-database', title: 'Movie Ratings Database: Practice filtering, joins, and aggregates' }
        ]
      }
    ]
  }
];