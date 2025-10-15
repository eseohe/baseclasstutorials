export const advanced = [
  {
    id: 'advanced',
    title: 'PostgreSQL Advanced',
    topics: [
      {
        id: 'query-optimization',
        title: 'Query Optimization and Performance Tuning',
        subtopics: [
          { id: 'explain', title: 'Understanding EXPLAIN and EXPLAIN ANALYZE' },
          { id: 'query-planning', title: 'Query planning and indexing strategies' },
          { id: 'reducing-io', title: 'Reducing I/O and optimizing joins' },
          { id: 'vacuuming', title: 'Vacuuming, analyzing, and autovacuum' }
        ]
      },
      {
        id: 'advanced-indexing-partitioning',
        title: 'Advanced Indexing and Partitioning',
        subtopics: [
          { id: 'multi-column-indexes', title: 'Multi-column and covering indexes' },
          { id: 'table-partitioning', title: 'Table partitioning (range, list, hash)' },
          { id: 'partitioning-performance', title: 'Performance benefits and maintenance' }
        ]
      },
      {
        id: 'advanced-plpgsql',
        title: 'Advanced PL/pgSQL Programming',
        subtopics: [
          { id: 'control-structures', title: 'Control structures (IF, LOOP, FOR)' },
          { id: 'exception-handling', title: 'Exception handling in functions' },
          { id: 'dynamic-sql', title: 'Using dynamic SQL' },
          { id: 'stored-procedures', title: 'Writing stored procedures' }
        ]
      },
      {
        id: 'triggers-events-automation',
        title: 'Triggers, Events, and Automation',
        subtopics: [
          { id: 'row-vs-statement-triggers', title: 'Row-level vs statement-level triggers' },
          { id: 'event-triggers', title: 'Event triggers' },
          { id: 'scheduling', title: 'Scheduling with pg_cron or external jobs' }
        ]
      },
      {
        id: 'replication-high-availability',
        title: 'Replication and High Availability',
        subtopics: [
          { id: 'streaming-replication', title: 'Streaming replication and logical replication' },
          { id: 'failover-strategies', title: 'Failover strategies' },
          { id: 'wal-archiving', title: 'WAL archiving and replication slots' }
        ]
      },
      {
        id: 'advanced-security-auditing',
        title: 'Advanced Security and Auditing',
        subtopics: [
          { id: 'row-level-security', title: 'Row-level security (RLS)' },
          { id: 'data-encryption', title: 'Data encryption (at rest and in transit)' },
          { id: 'auditing', title: 'Auditing with pgaudit' },
          { id: 'role-based-access', title: 'Role-based access control' }
        ]
      },
      {
        id: 'analytics',
        title: 'PostgreSQL for Analytics',
        subtopics: [
          { id: 'window-functions', title: 'Window functions (ROW_NUMBER, RANK, LAG, LEAD)' },
          { id: 'pivot-unpivot', title: 'Pivoting and unpivoting data' },
          { id: 'advanced-aggregates', title: 'Advanced aggregates (percentiles, histograms)' },
          { id: 'time-series', title: 'Time-series analysis' }
        ]
      },
      {
        id: 'big-data',
        title: 'Working with Big Data',
        subtopics: [
          { id: 'partitioned-tables', title: 'Partitioned tables for large datasets' },
          { id: 'fdw', title: 'Foreign data wrappers (FDW)' },
          { id: 'integration', title: 'Integration with Spark or Kafka' }
        ]
      },
      {
        id: 'monitoring-maintenance',
        title: 'Monitoring and Maintenance',
        subtopics: [
          { id: 'pg-stat', title: 'Using pg_stat_activity, pg_stat_user_tables' },
          { id: 'slow-queries', title: 'Tracking slow queries and deadlocks' },
          { id: 'automating-maintenance', title: 'Automating maintenance tasks' }
        ]
      },
      {
        id: 'deployment-scaling',
        title: 'Deployment and Scaling',
        subtopics: [
          { id: 'docker', title: 'Dockerizing PostgreSQL' },
          { id: 'connection-pooling', title: 'Connection pooling with PgBouncer' },
          { id: 'sharding', title: 'Sharding and distributed databases (Citus)' }
        ]
      },
      {
        id: 'projects',
        title: 'Projects',
        subtopics: [
          { id: 'enterprise-inventory', title: 'Enterprise Inventory System: complex schema with partitioning and indexing, high-performance queries, triggers for auditing' },
          { id: 'realtime-analytics', title: 'Real-time Analytics Engine: combine replication, materialized views, window functions, near real-time reports from transactional data' },
          { id: 'geospatial-db', title: 'GeoSpatial Database with PostGIS: store and query geolocation data, analyze distances, regions, and maps' }
        ]
      }
    ]
  }
];