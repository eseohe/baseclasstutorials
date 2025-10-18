export const advanced = [
	{
		id: 'advanced-oop',
		title: 'Advanced OOP Concepts',
		subtopics: [
			{ id: 'abstract-classes', title: 'Abstract Classes and Interfaces (abc module)' },
			{ id: 'multiple-inheritance', title: 'Multiple Inheritance and MRO' },
			{ id: 'property-decorators', title: 'Property Decorators (@property, setters, deleters)' },
		],
	},
	{
		id: 'advanced-data',
		title: 'Advanced Data Handling',
		subtopics: [
			{ id: 'pandas-analysis', title: 'Using pandas for Data Analysis' },
			{ id: 'numpy-arrays', title: 'Working with NumPy Arrays' },
			{ id: 'data-visualization', title: 'Intro to Data Visualization (matplotlib, seaborn)' },
		],
	},
	{
		id: 'connecting-to-databases',
		title: 'Connecting to Databases',
		subtopics: [
			{ id: 'sqlite3', title: 'SQLite Database Operations' },
			{ id: 'sqlalchemy', title: 'Using SQLAlchemy ORM' },
			{ id: 'postgresql-mysql', title: 'Connecting to PostgreSQL/MySQL' },
		],

	},
	{
		id: 'file-data-processing',
		title: 'File and Data Processing',
		subtopics: [
			{ id: 'binary-files', title: 'Reading/Writing Binary Files' },
			{ id: 'excel', title: 'Working with Excel (openpyxl, pandas)' },
			{ id: 'xml-html-parsing', title: 'XML and HTML Parsing (xml.etree, BeautifulSoup)' },
		],
	},
	{
		id: 'concurrency-parallelism',
		title: 'Concurrency and Parallelism',
		subtopics: [
			{ id: 'threading-gil', title: 'Threading and the GIL' },
			{ id: 'multiprocessing', title: 'Multiprocessing for True Parallelism' },
			{ id: 'asyncio', title: 'Asynchronous Programming with asyncio' },
		],
	},
	{
		id: 'networking-apis',
		title: 'Networking and APIs',
		subtopics: [
			{ id: 'requests-rest', title: 'Using requests for REST APIs' },
			{ id: 'auth-headers', title: 'Handling Authentication and Headers' },
			{ id: 'build-api', title: 'Building Simple APIs with FastAPI' },
		],
	},
	{
		id: 'testing-debugging',
		title: 'Testing and Debugging',
		subtopics: [
			{ id: 'unit-tests', title: 'Writing Unit Tests with unittest and pytest' },
			{ id: 'mocking', title: 'Mocking and Patching' },
		],
	},
	{
		id: 'packaging-deployment',
		title: 'Packaging and Deployment',
		subtopics: [
			{ id: 'setup-py', title: 'Using setup.py / pyproject.toml' },
			{ id: 'versioning-pypi', title: 'Versioning and Publishing to PyPI' },
			{ id: 'cli-tools', title: 'Creating Command-line Tools' },
		],
	},
	{
		id: 'design-patterns',
		title: 'Design Patterns',
		subtopics: [
			{ id: 'singleton-factory', title: 'Creational: Singleton, Factory' },
			{ id: 'decorator-adapter', title: 'Structural: Decorator, Adapter' },
			{ id: 'observer-strategy', title: 'Behavioral: Observer, Strategy' },
		],
	},
	{
		id: 'best-practices-optimization',
		title: 'Best Practices & Optimization',
		subtopics: [
			{ id: 'pep8', title: 'Code Readability (PEP 8)' },
			{ id: 'profiling', title: 'Profiling and Performance Tuning (cProfile, timeit)' },
			{ id: 'memory-optimization', title: 'Memory Optimization Techniques' },
		],
	},
    {
        id: 'projects-advanced',
        title: 'Projects',
        subtopics: [
            { id: 'rest-api-fastapi', title: 'Implement CRUD endpoints with SQLite and ORM models.' },
            { id: 'stock-market-analyser', title: 'Building a stock market analyser with pandas and matplotlib' },
        ]
    }
];
