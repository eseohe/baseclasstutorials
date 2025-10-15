export const intermediate = [
  {
    id: 'intermediate',
    title: 'PostgreSQL Intermediate',
    topics: [
      {
        id: 'advanced-window-topics',
        title: 'Advanced Window Topics',
        subtopics: [
          { id: 'frame-types', title: 'Frame types in-depth: UNBOUNDED PRECEDING, CURRENT ROW, FOLLOWING and how they affect results' },
          { id: 'window-performance', title: 'Performance: how ORDER BY and partitioning affect planning; avoiding unnecessary sorting' },
          { id: 'window-combinations', title: 'Window function combinations: using FILTER with aggregates and windows, mixing aggregates + window functions in the same query' },
          { id: 'window-use-cases', title: 'Use cases & patterns: sessionization, event sequence analysis, lead/lag pattern detection, percentiles with PERCENT_RANK() / CUME_DIST()' },
          { id: 'rewriting-window-queries', title: 'Rewriting window queries for scale (materialized views or pre-aggregation where appropriate)' }
        ]
      },
      {
        id: 'relationships-normalization',
        title: 'Relationships and Normalization',
        subtopics: [
          { id: 'relationship-types', title: 'One-to-one, one-to-many, many-to-many relationships' },
          { id: 'foreign-keys', title: 'Foreign keys and referential integrity' },
          { id: 'normalization', title: 'Database normalization (1NF, 2NF, 3NF, BCNF)' },
          { id: 'denormalization', title: 'Denormalization trade-offs' }
        ]
      },
      {
        id: 'advanced-joins-subqueries',
        title: 'Advanced Joins and Subqueries',
        subtopics: [
          { id: 'nested-subqueries', title: 'Nested subqueries' },
          { id: 'correlated-subqueries', title: 'Correlated subqueries' },
          { id: 'ctes', title: 'CTEs (Common Table Expressions) with WITH' },
          { id: 'recursive-ctes', title: 'Recursive CTEs' }
        ]
      },
      {
        id: 'views-materialized-views',
        title: 'Views and Materialized Views',
        subtopics: [
          { id: 'creating-views', title: 'Creating and using views' },
          { id: 'views-advantages-limitations', title: 'Advantages and limitations' },
          { id: 'materialized-views', title: 'Refreshing and indexing materialized views' }
        ]
      },
      {
        id: 'indexes',
        title: 'Indexes',
        subtopics: [
          { id: 'index-types', title: 'B-tree, Hash, GIN, GiST indexes' },
          { id: 'index-usage', title: 'Index usage and performance impact' },
          { id: 'partial-expression-indexes', title: 'Partial and expression indexes' }
        ]
      },
      {
        id: 'transactions-concurrency',
        title: 'Transactions and Concurrency',
        subtopics: [
          { id: 'acid', title: 'ACID principles' },
          { id: 'begin-commit-rollback', title: 'BEGIN, COMMIT, ROLLBACK' },
          { id: 'savepoints', title: 'Savepoints' },
          { id: 'isolation-locking', title: 'Isolation levels and locking' }
        ]
      },
      {
        id: 'triggers-functions',
        title: 'Triggers and Functions',
        subtopics: [
          { id: 'plpgsql-functions', title: 'Creating functions with PL/pgSQL' },
          { id: 'returns-declare-blocks', title: 'Using RETURNS, DECLARE, BEGIN/END blocks' },
          { id: 'writing-triggers', title: 'Writing triggers for audit or validation logic' }
        ]
      },
      {
        id: 'user-management-security',
        title: 'User Management and Security',
        subtopics: [
          { id: 'roles-users', title: 'Creating roles and users' },
          { id: 'role-inheritance', title: 'Role inheritance and privileges' },
          { id: 'granting-permissions', title: 'Granting permissions (GRANT, REVOKE)' },
          { id: 'password-auth', title: 'Password management and authentication' }
        ]
      },
      {
        id: 'data-types-depth',
        title: 'Data Types in Depth',
        subtopics: [
          { id: 'json-jsonb', title: 'JSON and JSONB storage' },
          { id: 'arrays-hstore', title: 'Arrays and hstore' },
          { id: 'enums-composite', title: 'ENUMs and composite types' }
        ]
      },
      {
        id: 'extensions',
        title: 'Extensions',
        subtopics: [
          { id: 'installing-extensions', title: 'Installing and using PostgreSQL extensions' },
          { id: 'popular-extensions', title: 'Popular ones: uuid-ossp, pgcrypto, PostGIS, pg_stat_statements' }
        ]
      },
      {
        id: 'backup-restore',
        title: 'Backup and Restore',
        subtopics: [
          { id: 'logical-backup', title: 'Logical backup: pg_dump, pg_restore' },
          { id: 'physical-backup', title: 'Physical backup and WAL files' },
          { id: 'partial-restore', title: 'Restoring partial databases' }
        ]
      },
      {
        id: 'projects',
        title: 'Projects',
        subtopics: [
          { id: 'ecommerce-db', title: 'E-Commerce Database: users, products, orders, payments; foreign keys, views, triggers for inventory updates' },
          { id: 'blog-cms-db', title: 'Blog CMS Database: authors, posts, tags, comments; use CTEs and full-text search' },
          { id: 'analytics-dashboard', title: 'Analytics Dashboard: materialized views for performance stats and user behavior analysis' },
          { id: 'banking-transaction-system', title: 'Banking Transaction System: simulate deposits, withdrawals, transfers with ACID transactions' },
          { id: 'json-log-parser', title: 'JSON-based Log Parser: store logs as JSONB, query fields using JSON operators' }
        ]
      }
    ]
  }
];