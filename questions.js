// Original DP-900 practice questions aligned to the Microsoft Learn study guide. Not real exam dumps.
const QUESTIONS = [
  {
    "domain": "Describe core data concepts",
    "question": "Which term best matches this description: Data organized in a fixed schema, typically rows and columns with defined data types.",
    "options": [
      "Structured data",
      "Semi-structured data",
      "Unstructured data",
      "Streaming data"
    ],
    "answer": "Structured data",
    "explanation": "Store customer records in a table with consistent columns such as CustomerID, Name, and Email.",
    "id": "DP900-001"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A company has this requirement: Store customer records in a table with consistent columns such as CustomerID, Name, and Email. Which concept or service is the best fit?",
    "options": [
      "Structured data",
      "Semi-structured data",
      "Unstructured data",
      "Streaming data"
    ],
    "answer": "Structured data",
    "explanation": "Data organized in a fixed schema, typically rows and columns with defined data types.",
    "id": "DP900-002"
  },
  {
    "domain": "Describe core data concepts",
    "question": "Which term best matches this description: Data that has tags or keys that provide organization but does not require a rigid tabular schema.",
    "options": [
      "Semi-structured data",
      "Structured data",
      "Unstructured data",
      "Relational data"
    ],
    "answer": "Semi-structured data",
    "explanation": "Store JSON documents whose fields can vary between records.",
    "id": "DP900-003"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A company has this requirement: Store JSON documents whose fields can vary between records. Which concept or service is the best fit?",
    "options": [
      "Semi-structured data",
      "Structured data",
      "Unstructured data",
      "Relational data"
    ],
    "answer": "Semi-structured data",
    "explanation": "Data that has tags or keys that provide organization but does not require a rigid tabular schema.",
    "id": "DP900-004"
  },
  {
    "domain": "Describe core data concepts",
    "question": "Which term best matches this description: Data without a predefined model, such as images, audio, video, and free-form text.",
    "options": [
      "Unstructured data",
      "Structured data",
      "Semi-structured data",
      "Transactional data"
    ],
    "answer": "Unstructured data",
    "explanation": "Store a large collection of photographs and recorded calls.",
    "id": "DP900-005"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A company has this requirement: Store a large collection of photographs and recorded calls. Which concept or service is the best fit?",
    "options": [
      "Unstructured data",
      "Structured data",
      "Semi-structured data",
      "Transactional data"
    ],
    "answer": "Unstructured data",
    "explanation": "Data without a predefined model, such as images, audio, video, and free-form text.",
    "id": "DP900-006"
  },
  {
    "domain": "Describe core data concepts",
    "question": "Which term best matches this description: A workload optimized for many small, fast read and write operations that preserve data consistency.",
    "options": [
      "Transactional workload",
      "Analytical workload",
      "Batch processing",
      "Data visualization"
    ],
    "answer": "Transactional workload",
    "explanation": "Process online orders and update inventory immediately.",
    "id": "DP900-007"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A company has this requirement: Process online orders and update inventory immediately. Which concept or service is the best fit?",
    "options": [
      "Transactional workload",
      "Analytical workload",
      "Batch processing",
      "Data visualization"
    ],
    "answer": "Transactional workload",
    "explanation": "A workload optimized for many small, fast read and write operations that preserve data consistency.",
    "id": "DP900-008"
  },
  {
    "domain": "Describe core data concepts",
    "question": "Which term best matches this description: A workload optimized for reading large volumes of historical data to identify trends and support decisions.",
    "options": [
      "Analytical workload",
      "Transactional workload",
      "OLTP",
      "Point lookup"
    ],
    "answer": "Analytical workload",
    "explanation": "Analyze several years of sales to discover seasonal patterns.",
    "id": "DP900-009"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A company has this requirement: Analyze several years of sales to discover seasonal patterns. Which concept or service is the best fit?",
    "options": [
      "Analytical workload",
      "Transactional workload",
      "OLTP",
      "Point lookup"
    ],
    "answer": "Analytical workload",
    "explanation": "A workload optimized for reading large volumes of historical data to identify trends and support decisions.",
    "id": "DP900-010"
  },
  {
    "domain": "Describe core data concepts",
    "question": "Which term best matches this description: Processing data in collected groups at scheduled intervals.",
    "options": [
      "Batch processing",
      "Stream processing",
      "OLTP",
      "Interactive reporting"
    ],
    "answer": "Batch processing",
    "explanation": "Calculate daily totals every night after business hours.",
    "id": "DP900-011"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A company has this requirement: Calculate daily totals every night after business hours. Which concept or service is the best fit?",
    "options": [
      "Batch processing",
      "Stream processing",
      "OLTP",
      "Interactive reporting"
    ],
    "answer": "Batch processing",
    "explanation": "Processing data in collected groups at scheduled intervals.",
    "id": "DP900-012"
  },
  {
    "domain": "Describe core data concepts",
    "question": "Which term best matches this description: Processing continuously arriving events with low latency.",
    "options": [
      "Stream processing",
      "Batch processing",
      "Normalization",
      "Archiving"
    ],
    "answer": "Stream processing",
    "explanation": "Detect suspicious card transactions seconds after they occur.",
    "id": "DP900-013"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A company has this requirement: Detect suspicious card transactions seconds after they occur. Which concept or service is the best fit?",
    "options": [
      "Stream processing",
      "Batch processing",
      "Normalization",
      "Archiving"
    ],
    "answer": "Stream processing",
    "explanation": "Processing continuously arriving events with low latency.",
    "id": "DP900-014"
  },
  {
    "domain": "Describe core data concepts",
    "question": "Which term best matches this description: A role commonly responsible for database availability, security, backup, recovery, and performance.",
    "options": [
      "Database administrator",
      "Data analyst",
      "Data engineer",
      "Business user"
    ],
    "answer": "Database administrator",
    "explanation": "Configure backups, permissions, and performance settings for production databases.",
    "id": "DP900-015"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A company has this requirement: Configure backups, permissions, and performance settings for production databases. Which concept or service is the best fit?",
    "options": [
      "Database administrator",
      "Data analyst",
      "Data engineer",
      "Business user"
    ],
    "answer": "Database administrator",
    "explanation": "A role commonly responsible for database availability, security, backup, recovery, and performance.",
    "id": "DP900-016"
  },
  {
    "domain": "Describe core data concepts",
    "question": "Which term best matches this description: A role commonly responsible for integrating, transforming, and preparing data for analytics.",
    "options": [
      "Data engineer",
      "Database administrator",
      "Data analyst",
      "Report consumer"
    ],
    "answer": "Data engineer",
    "explanation": "Build pipelines that ingest data from several systems into an analytical store.",
    "id": "DP900-017"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A company has this requirement: Build pipelines that ingest data from several systems into an analytical store. Which concept or service is the best fit?",
    "options": [
      "Data engineer",
      "Database administrator",
      "Data analyst",
      "Report consumer"
    ],
    "answer": "Data engineer",
    "explanation": "A role commonly responsible for integrating, transforming, and preparing data for analytics.",
    "id": "DP900-018"
  },
  {
    "domain": "Describe core data concepts",
    "question": "Which term best matches this description: A role commonly responsible for exploring data, building models, and creating reports and visualizations.",
    "options": [
      "Data analyst",
      "Database administrator",
      "Data engineer",
      "System administrator"
    ],
    "answer": "Data analyst",
    "explanation": "Create a Power BI dashboard that explains monthly sales performance.",
    "id": "DP900-019"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A company has this requirement: Create a Power BI dashboard that explains monthly sales performance. Which concept or service is the best fit?",
    "options": [
      "Data analyst",
      "Database administrator",
      "Data engineer",
      "System administrator"
    ],
    "answer": "Data analyst",
    "explanation": "A role commonly responsible for exploring data, building models, and creating reports and visualizations.",
    "id": "DP900-020"
  },
  {
    "domain": "Describe core data concepts",
    "question": "Which term best matches this description: A delimited text file format commonly used for tabular data.",
    "options": [
      "CSV",
      "JSON",
      "Parquet",
      "JPEG"
    ],
    "answer": "CSV",
    "explanation": "Exchange a simple table of product data between systems using comma-separated values.",
    "id": "DP900-021"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A company has this requirement: Exchange a simple table of product data between systems using comma-separated values. Which concept or service is the best fit?",
    "options": [
      "CSV",
      "JSON",
      "Parquet",
      "JPEG"
    ],
    "answer": "CSV",
    "explanation": "A delimited text file format commonly used for tabular data.",
    "id": "DP900-022"
  },
  {
    "domain": "Describe core data concepts",
    "question": "Which term best matches this description: A text format that represents objects and arrays using key-value pairs.",
    "options": [
      "JSON",
      "CSV",
      "Parquet",
      "PNG"
    ],
    "answer": "JSON",
    "explanation": "Represent an API response with nested customer and order objects.",
    "id": "DP900-023"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A company has this requirement: Represent an API response with nested customer and order objects. Which concept or service is the best fit?",
    "options": [
      "JSON",
      "CSV",
      "Parquet",
      "PNG"
    ],
    "answer": "JSON",
    "explanation": "A text format that represents objects and arrays using key-value pairs.",
    "id": "DP900-024"
  },
  {
    "domain": "Describe core data concepts",
    "question": "Which term best matches this description: A columnar file format suited to efficient storage and analytical queries over large datasets.",
    "options": [
      "Parquet",
      "CSV",
      "XML",
      "TXT"
    ],
    "answer": "Parquet",
    "explanation": "Store a large analytical dataset while reducing storage and reading only needed columns.",
    "id": "DP900-025"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A company has this requirement: Store a large analytical dataset while reducing storage and reading only needed columns. Which concept or service is the best fit?",
    "options": [
      "Parquet",
      "CSV",
      "XML",
      "TXT"
    ],
    "answer": "Parquet",
    "explanation": "A columnar file format suited to efficient storage and analytical queries over large datasets.",
    "id": "DP900-026"
  },
  {
    "domain": "Describe core data concepts",
    "question": "Which term best matches this description: A scalable store that can hold large volumes of raw structured, semi-structured, and unstructured data.",
    "options": [
      "Data lake",
      "Relational table",
      "OLTP database",
      "Dashboard"
    ],
    "answer": "Data lake",
    "explanation": "Retain raw logs, images, JSON, and CSV files for future analysis.",
    "id": "DP900-027"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A company has this requirement: Retain raw logs, images, JSON, and CSV files for future analysis. Which concept or service is the best fit?",
    "options": [
      "Data lake",
      "Relational table",
      "OLTP database",
      "Dashboard"
    ],
    "answer": "Data lake",
    "explanation": "A scalable store that can hold large volumes of raw structured, semi-structured, and unstructured data.",
    "id": "DP900-028"
  },
  {
    "domain": "Describe core data concepts",
    "question": "Which term best matches this description: A curated analytical store organized for reporting and business intelligence.",
    "options": [
      "Data warehouse",
      "Data lake",
      "Blob container",
      "Message queue"
    ],
    "answer": "Data warehouse",
    "explanation": "Provide governed, integrated historical data for enterprise reporting.",
    "id": "DP900-029"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A company has this requirement: Provide governed, integrated historical data for enterprise reporting. Which concept or service is the best fit?",
    "options": [
      "Data warehouse",
      "Data lake",
      "Blob container",
      "Message queue"
    ],
    "answer": "Data warehouse",
    "explanation": "A curated analytical store organized for reporting and business intelligence.",
    "id": "DP900-030"
  },
  {
    "domain": "Describe core data concepts",
    "question": "Which characteristic is most associated with an OLTP system?",
    "options": [
      "Many short transactions",
      "Complex scans over years of history",
      "Primarily unstructured files",
      "Data processed only once per month"
    ],
    "answer": "Many short transactions",
    "explanation": "Online transaction processing systems handle frequent, small, low-latency inserts and updates.",
    "id": "DP900-031"
  },
  {
    "domain": "Describe core data concepts",
    "question": "Which characteristic is most associated with an OLAP system?",
    "options": [
      "Complex aggregations over large datasets",
      "Very frequent single-row updates",
      "A fixed requirement for millisecond writes",
      "Storing only image files"
    ],
    "answer": "Complex aggregations over large datasets",
    "explanation": "Online analytical processing supports trend analysis and complex queries across large historical datasets.",
    "id": "DP900-032"
  },
  {
    "domain": "Describe core data concepts",
    "question": "Which data type is commonly considered unstructured?",
    "options": [
      "Audio recordings",
      "Relational tables",
      "CSV rows",
      "Parquet tables"
    ],
    "answer": "Audio recordings",
    "explanation": "Audio recordings are unstructured. Relational tables, CSV rows, and Parquet tables have an explicit structure.",
    "id": "DP900-033"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "Which term best matches this description: A column or combination of columns that uniquely identifies each row in a table.",
    "options": [
      "Primary key",
      "Foreign key",
      "View",
      "Index"
    ],
    "answer": "Primary key",
    "explanation": "Ensure every customer row has a unique identifier.",
    "id": "DP900-034"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A company has this requirement: Ensure every customer row has a unique identifier. Which concept or service is the best fit?",
    "options": [
      "Primary key",
      "Foreign key",
      "View",
      "Index"
    ],
    "answer": "Primary key",
    "explanation": "A column or combination of columns that uniquely identifies each row in a table.",
    "id": "DP900-035"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "Which term best matches this description: A column that references a key in another table to create a relationship.",
    "options": [
      "Foreign key",
      "Primary key",
      "Stored procedure",
      "Index"
    ],
    "answer": "Foreign key",
    "explanation": "Link each order to the customer who placed it.",
    "id": "DP900-036"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A company has this requirement: Link each order to the customer who placed it. Which concept or service is the best fit?",
    "options": [
      "Foreign key",
      "Primary key",
      "Stored procedure",
      "Index"
    ],
    "answer": "Foreign key",
    "explanation": "A column that references a key in another table to create a relationship.",
    "id": "DP900-037"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "Which term best matches this description: Organizing relational data to reduce duplication and improve integrity.",
    "options": [
      "Normalization",
      "Denormalization",
      "Partitioning",
      "Streaming"
    ],
    "answer": "Normalization",
    "explanation": "Separate repeating customer details from orders into related tables.",
    "id": "DP900-038"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A company has this requirement: Separate repeating customer details from orders into related tables. Which concept or service is the best fit?",
    "options": [
      "Normalization",
      "Denormalization",
      "Partitioning",
      "Streaming"
    ],
    "answer": "Normalization",
    "explanation": "Organizing relational data to reduce duplication and improve integrity.",
    "id": "DP900-039"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "Which term best matches this description: The SQL statement used to retrieve rows and columns from a database.",
    "options": [
      "SELECT",
      "INSERT",
      "UPDATE",
      "DELETE"
    ],
    "answer": "SELECT",
    "explanation": "Read product names and prices from a table.",
    "id": "DP900-040"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A company has this requirement: Read product names and prices from a table. Which concept or service is the best fit?",
    "options": [
      "SELECT",
      "INSERT",
      "UPDATE",
      "DELETE"
    ],
    "answer": "SELECT",
    "explanation": "The SQL statement used to retrieve rows and columns from a database.",
    "id": "DP900-041"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "Which term best matches this description: The SQL statement used to add new rows to a table.",
    "options": [
      "INSERT",
      "SELECT",
      "UPDATE",
      "DROP"
    ],
    "answer": "INSERT",
    "explanation": "Add a newly registered customer to the Customers table.",
    "id": "DP900-042"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A company has this requirement: Add a newly registered customer to the Customers table. Which concept or service is the best fit?",
    "options": [
      "INSERT",
      "SELECT",
      "UPDATE",
      "DROP"
    ],
    "answer": "INSERT",
    "explanation": "The SQL statement used to add new rows to a table.",
    "id": "DP900-043"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "Which term best matches this description: The SQL statement used to change existing rows.",
    "options": [
      "UPDATE",
      "SELECT",
      "INSERT",
      "CREATE"
    ],
    "answer": "UPDATE",
    "explanation": "Change the shipping status of an existing order.",
    "id": "DP900-044"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A company has this requirement: Change the shipping status of an existing order. Which concept or service is the best fit?",
    "options": [
      "UPDATE",
      "SELECT",
      "INSERT",
      "CREATE"
    ],
    "answer": "UPDATE",
    "explanation": "The SQL statement used to change existing rows.",
    "id": "DP900-045"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "Which term best matches this description: The SQL statement used to remove rows from a table.",
    "options": [
      "DELETE",
      "DROP",
      "SELECT",
      "ALTER"
    ],
    "answer": "DELETE",
    "explanation": "Remove a discontinued product row while keeping the table itself.",
    "id": "DP900-046"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A company has this requirement: Remove a discontinued product row while keeping the table itself. Which concept or service is the best fit?",
    "options": [
      "DELETE",
      "DROP",
      "SELECT",
      "ALTER"
    ],
    "answer": "DELETE",
    "explanation": "The SQL statement used to remove rows from a table.",
    "id": "DP900-047"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "Which term best matches this description: A saved query that presents data as a virtual table.",
    "options": [
      "View",
      "Stored procedure",
      "Index",
      "Trigger"
    ],
    "answer": "View",
    "explanation": "Give users a simplified representation of selected columns from several tables.",
    "id": "DP900-048"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A company has this requirement: Give users a simplified representation of selected columns from several tables. Which concept or service is the best fit?",
    "options": [
      "View",
      "Stored procedure",
      "Index",
      "Trigger"
    ],
    "answer": "View",
    "explanation": "A saved query that presents data as a virtual table.",
    "id": "DP900-049"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "Which term best matches this description: A database object that can improve query performance by providing a faster access path to data.",
    "options": [
      "Index",
      "View",
      "Foreign key",
      "Schema"
    ],
    "answer": "Index",
    "explanation": "Speed up searches that frequently filter by CustomerID.",
    "id": "DP900-050"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A company has this requirement: Speed up searches that frequently filter by CustomerID. Which concept or service is the best fit?",
    "options": [
      "Index",
      "View",
      "Foreign key",
      "Schema"
    ],
    "answer": "Index",
    "explanation": "A database object that can improve query performance by providing a faster access path to data.",
    "id": "DP900-051"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "Which term best matches this description: A named set of SQL statements stored in the database and executed as a unit.",
    "options": [
      "Stored procedure",
      "View",
      "Index",
      "Table"
    ],
    "answer": "Stored procedure",
    "explanation": "Reuse a controlled multi-step database operation from several applications.",
    "id": "DP900-052"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A company has this requirement: Reuse a controlled multi-step database operation from several applications. Which concept or service is the best fit?",
    "options": [
      "Stored procedure",
      "View",
      "Index",
      "Table"
    ],
    "answer": "Stored procedure",
    "explanation": "A named set of SQL statements stored in the database and executed as a unit.",
    "id": "DP900-053"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "Which term best matches this description: A fully managed platform-as-a-service relational database for modern cloud applications.",
    "options": [
      "Azure SQL Database",
      "SQL Server on Azure Virtual Machines",
      "Azure Blob Storage",
      "Azure Table Storage"
    ],
    "answer": "Azure SQL Database",
    "explanation": "Use a managed SQL database without managing the operating system or SQL Server instance.",
    "id": "DP900-054"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A company has this requirement: Use a managed SQL database without managing the operating system or SQL Server instance. Which concept or service is the best fit?",
    "options": [
      "Azure SQL Database",
      "SQL Server on Azure Virtual Machines",
      "Azure Blob Storage",
      "Azure Table Storage"
    ],
    "answer": "Azure SQL Database",
    "explanation": "A fully managed platform-as-a-service relational database for modern cloud applications.",
    "id": "DP900-055"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "Which term best matches this description: A managed SQL service designed for high compatibility with SQL Server instance-level features.",
    "options": [
      "Azure SQL Managed Instance",
      "Azure SQL Database",
      "Azure Cosmos DB",
      "Azure Files"
    ],
    "answer": "Azure SQL Managed Instance",
    "explanation": "Migrate an application that relies on SQL Server instance features with minimal changes.",
    "id": "DP900-056"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A company has this requirement: Migrate an application that relies on SQL Server instance features with minimal changes. Which concept or service is the best fit?",
    "options": [
      "Azure SQL Managed Instance",
      "Azure SQL Database",
      "Azure Cosmos DB",
      "Azure Files"
    ],
    "answer": "Azure SQL Managed Instance",
    "explanation": "A managed SQL service designed for high compatibility with SQL Server instance-level features.",
    "id": "DP900-057"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "Which term best matches this description: Infrastructure as a service that provides full control of SQL Server and the operating system.",
    "options": [
      "SQL Server on Azure Virtual Machines",
      "Azure SQL Database",
      "Azure SQL Managed Instance",
      "Azure Database for PostgreSQL"
    ],
    "answer": "SQL Server on Azure Virtual Machines",
    "explanation": "Run SQL Server in Azure while retaining OS-level and instance-level control.",
    "id": "DP900-058"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A company has this requirement: Run SQL Server in Azure while retaining OS-level and instance-level control. Which concept or service is the best fit?",
    "options": [
      "SQL Server on Azure Virtual Machines",
      "Azure SQL Database",
      "Azure SQL Managed Instance",
      "Azure Database for PostgreSQL"
    ],
    "answer": "SQL Server on Azure Virtual Machines",
    "explanation": "Infrastructure as a service that provides full control of SQL Server and the operating system.",
    "id": "DP900-059"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "Which term best matches this description: A managed Azure relational database service for PostgreSQL workloads.",
    "options": [
      "Azure Database for PostgreSQL",
      "Azure SQL Database",
      "Azure Cosmos DB",
      "Azure Table Storage"
    ],
    "answer": "Azure Database for PostgreSQL",
    "explanation": "Move a PostgreSQL application to a managed Azure service.",
    "id": "DP900-060"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A company has this requirement: Move a PostgreSQL application to a managed Azure service. Which concept or service is the best fit?",
    "options": [
      "Azure Database for PostgreSQL",
      "Azure SQL Database",
      "Azure Cosmos DB",
      "Azure Table Storage"
    ],
    "answer": "Azure Database for PostgreSQL",
    "explanation": "A managed Azure relational database service for PostgreSQL workloads.",
    "id": "DP900-061"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "Which term best matches this description: A managed Azure relational database service for MySQL workloads.",
    "options": [
      "Azure Database for MySQL",
      "Azure SQL Managed Instance",
      "Azure Blob Storage",
      "Azure Databricks"
    ],
    "answer": "Azure Database for MySQL",
    "explanation": "Host a MySQL application without managing database servers.",
    "id": "DP900-062"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A company has this requirement: Host a MySQL application without managing database servers. Which concept or service is the best fit?",
    "options": [
      "Azure Database for MySQL",
      "Azure SQL Managed Instance",
      "Azure Blob Storage",
      "Azure Databricks"
    ],
    "answer": "Azure Database for MySQL",
    "explanation": "A managed Azure relational database service for MySQL workloads.",
    "id": "DP900-063"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A table contains CustomerID, CustomerName, ProductID, ProductName, and Quantity. Customer and product names repeat in many rows. What should you do to reduce duplication?",
    "options": [
      "Normalize the data into related tables",
      "Store the data as image files",
      "Add more duplicate columns",
      "Use stream processing"
    ],
    "answer": "Normalize the data into related tables",
    "explanation": "Normalization separates entities such as customers, products, and orders and relates them using keys.",
    "id": "DP900-064"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "Which SQL clause filters rows returned by a SELECT statement?",
    "options": [
      "WHERE",
      "ORDER BY",
      "GROUP BY",
      "JOIN"
    ],
    "answer": "WHERE",
    "explanation": "WHERE applies a condition to determine which rows are returned.",
    "id": "DP900-065"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "Which SQL operation combines rows from related tables based on matching columns?",
    "options": [
      "JOIN",
      "DROP",
      "INSERT",
      "TRUNCATE"
    ],
    "answer": "JOIN",
    "explanation": "A JOIN combines rows from two or more tables by using a related column.",
    "id": "DP900-066"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "Which service is the best choice when an organization must install custom software on the database server operating system?",
    "options": [
      "SQL Server on Azure Virtual Machines",
      "Azure SQL Database",
      "Azure SQL Managed Instance",
      "Azure Database for PostgreSQL"
    ],
    "answer": "SQL Server on Azure Virtual Machines",
    "explanation": "A virtual machine provides operating-system access; PaaS database services do not.",
    "id": "DP900-067"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "Which term best matches this description: Object storage optimized for massive amounts of unstructured data such as images, video, backups, and logs.",
    "options": [
      "Azure Blob Storage",
      "Azure Files",
      "Azure Table Storage",
      "Azure SQL Database"
    ],
    "answer": "Azure Blob Storage",
    "explanation": "Store millions of product images and archived log files.",
    "id": "DP900-068"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A company has this requirement: Store millions of product images and archived log files. Which concept or service is the best fit?",
    "options": [
      "Azure Blob Storage",
      "Azure Files",
      "Azure Table Storage",
      "Azure SQL Database"
    ],
    "answer": "Azure Blob Storage",
    "explanation": "Object storage optimized for massive amounts of unstructured data such as images, video, backups, and logs.",
    "id": "DP900-069"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "Which term best matches this description: Managed file shares accessible through common file-sharing protocols such as SMB.",
    "options": [
      "Azure Files",
      "Azure Blob Storage",
      "Azure Table Storage",
      "Azure Cosmos DB"
    ],
    "answer": "Azure Files",
    "explanation": "Replace an on-premises shared folder with a cloud-hosted file share.",
    "id": "DP900-070"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A company has this requirement: Replace an on-premises shared folder with a cloud-hosted file share. Which concept or service is the best fit?",
    "options": [
      "Azure Files",
      "Azure Blob Storage",
      "Azure Table Storage",
      "Azure Cosmos DB"
    ],
    "answer": "Azure Files",
    "explanation": "Managed file shares accessible through common file-sharing protocols such as SMB.",
    "id": "DP900-071"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "Which term best matches this description: A schema-less key-attribute store for large volumes of non-relational structured data.",
    "options": [
      "Azure Table Storage",
      "Azure Blob Storage",
      "Azure Files",
      "Azure SQL Database"
    ],
    "answer": "Azure Table Storage",
    "explanation": "Store simple entities addressed by partition and row keys at low cost.",
    "id": "DP900-072"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A company has this requirement: Store simple entities addressed by partition and row keys at low cost. Which concept or service is the best fit?",
    "options": [
      "Azure Table Storage",
      "Azure Blob Storage",
      "Azure Files",
      "Azure SQL Database"
    ],
    "answer": "Azure Table Storage",
    "explanation": "A schema-less key-attribute store for large volumes of non-relational structured data.",
    "id": "DP900-073"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "Which term best matches this description: A globally distributed NoSQL database designed for low latency and elastic scale.",
    "options": [
      "Azure Cosmos DB",
      "Azure SQL Database",
      "Azure Files",
      "Azure Data Factory"
    ],
    "answer": "Azure Cosmos DB",
    "explanation": "Serve a globally distributed application that needs fast reads and writes in multiple regions.",
    "id": "DP900-074"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A company has this requirement: Serve a globally distributed application that needs fast reads and writes in multiple regions. Which concept or service is the best fit?",
    "options": [
      "Azure Cosmos DB",
      "Azure SQL Database",
      "Azure Files",
      "Azure Data Factory"
    ],
    "answer": "Azure Cosmos DB",
    "explanation": "A globally distributed NoSQL database designed for low latency and elastic scale.",
    "id": "DP900-075"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "Which term best matches this description: The native Azure Cosmos DB API for JSON document data queried with a SQL-like syntax.",
    "options": [
      "Azure Cosmos DB for NoSQL",
      "Azure Cosmos DB for MongoDB",
      "Azure Cosmos DB for Apache Cassandra",
      "Azure Cosmos DB for Apache Gremlin"
    ],
    "answer": "Azure Cosmos DB for NoSQL",
    "explanation": "Build a new document database application using the native Cosmos DB experience.",
    "id": "DP900-076"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A company has this requirement: Build a new document database application using the native Cosmos DB experience. Which concept or service is the best fit?",
    "options": [
      "Azure Cosmos DB for NoSQL",
      "Azure Cosmos DB for MongoDB",
      "Azure Cosmos DB for Apache Cassandra",
      "Azure Cosmos DB for Apache Gremlin"
    ],
    "answer": "Azure Cosmos DB for NoSQL",
    "explanation": "The native Azure Cosmos DB API for JSON document data queried with a SQL-like syntax.",
    "id": "DP900-077"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "Which term best matches this description: An API that supports applications and tools using the MongoDB wire protocol.",
    "options": [
      "Azure Cosmos DB for MongoDB",
      "Azure Cosmos DB for NoSQL",
      "Azure Cosmos DB for Apache Gremlin",
      "Azure Table Storage"
    ],
    "answer": "Azure Cosmos DB for MongoDB",
    "explanation": "Migrate an application that uses MongoDB drivers to Azure Cosmos DB.",
    "id": "DP900-078"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A company has this requirement: Migrate an application that uses MongoDB drivers to Azure Cosmos DB. Which concept or service is the best fit?",
    "options": [
      "Azure Cosmos DB for MongoDB",
      "Azure Cosmos DB for NoSQL",
      "Azure Cosmos DB for Apache Gremlin",
      "Azure Table Storage"
    ],
    "answer": "Azure Cosmos DB for MongoDB",
    "explanation": "An API that supports applications and tools using the MongoDB wire protocol.",
    "id": "DP900-079"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "Which term best matches this description: An API for applications designed around Cassandra-compatible wide-column data.",
    "options": [
      "Azure Cosmos DB for Apache Cassandra",
      "Azure Cosmos DB for MongoDB",
      "Azure Cosmos DB for Apache Gremlin",
      "Azure Files"
    ],
    "answer": "Azure Cosmos DB for Apache Cassandra",
    "explanation": "Move a Cassandra application while continuing to use compatible drivers.",
    "id": "DP900-080"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A company has this requirement: Move a Cassandra application while continuing to use compatible drivers. Which concept or service is the best fit?",
    "options": [
      "Azure Cosmos DB for Apache Cassandra",
      "Azure Cosmos DB for MongoDB",
      "Azure Cosmos DB for Apache Gremlin",
      "Azure Files"
    ],
    "answer": "Azure Cosmos DB for Apache Cassandra",
    "explanation": "An API for applications designed around Cassandra-compatible wide-column data.",
    "id": "DP900-081"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "Which term best matches this description: A graph API for storing vertices and edges and traversing relationships.",
    "options": [
      "Azure Cosmos DB for Apache Gremlin",
      "Azure Cosmos DB for NoSQL",
      "Azure Table Storage",
      "Azure Blob Storage"
    ],
    "answer": "Azure Cosmos DB for Apache Gremlin",
    "explanation": "Model social connections and find paths between people.",
    "id": "DP900-082"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A company has this requirement: Model social connections and find paths between people. Which concept or service is the best fit?",
    "options": [
      "Azure Cosmos DB for Apache Gremlin",
      "Azure Cosmos DB for NoSQL",
      "Azure Table Storage",
      "Azure Blob Storage"
    ],
    "answer": "Azure Cosmos DB for Apache Gremlin",
    "explanation": "A graph API for storing vertices and edges and traversing relationships.",
    "id": "DP900-083"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "Which term best matches this description: A non-relational model that retrieves a value by using a unique key.",
    "options": [
      "Key-value store",
      "Graph database",
      "Relational database",
      "Data warehouse"
    ],
    "answer": "Key-value store",
    "explanation": "Store user session data that is accessed by a session identifier.",
    "id": "DP900-084"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A company has this requirement: Store user session data that is accessed by a session identifier. Which concept or service is the best fit?",
    "options": [
      "Key-value store",
      "Graph database",
      "Relational database",
      "Data warehouse"
    ],
    "answer": "Key-value store",
    "explanation": "A non-relational model that retrieves a value by using a unique key.",
    "id": "DP900-085"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "Which term best matches this description: A non-relational model that stores self-contained JSON-like documents with flexible schemas.",
    "options": [
      "Document database",
      "Graph database",
      "Relational table",
      "File share"
    ],
    "answer": "Document database",
    "explanation": "Store product catalog records whose attributes differ by product category.",
    "id": "DP900-086"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A company has this requirement: Store product catalog records whose attributes differ by product category. Which concept or service is the best fit?",
    "options": [
      "Document database",
      "Graph database",
      "Relational table",
      "File share"
    ],
    "answer": "Document database",
    "explanation": "A non-relational model that stores self-contained JSON-like documents with flexible schemas.",
    "id": "DP900-087"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "Which term best matches this description: A non-relational model optimized for entities and the relationships between them.",
    "options": [
      "Graph database",
      "Key-value store",
      "Columnar file",
      "Relational view"
    ],
    "answer": "Graph database",
    "explanation": "Analyze fraud rings by traversing relationships among accounts, devices, and transactions.",
    "id": "DP900-088"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A company has this requirement: Analyze fraud rings by traversing relationships among accounts, devices, and transactions. Which concept or service is the best fit?",
    "options": [
      "Graph database",
      "Key-value store",
      "Columnar file",
      "Relational view"
    ],
    "answer": "Graph database",
    "explanation": "A non-relational model optimized for entities and the relationships between them.",
    "id": "DP900-089"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "Which term best matches this description: A value used to distribute data and requests across logical partitions in a scalable database.",
    "options": [
      "Partition key",
      "Foreign key",
      "Primary filegroup",
      "View"
    ],
    "answer": "Partition key",
    "explanation": "Choose a property that spreads Cosmos DB requests and storage evenly.",
    "id": "DP900-090"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A company has this requirement: Choose a property that spreads Cosmos DB requests and storage evenly. Which concept or service is the best fit?",
    "options": [
      "Partition key",
      "Foreign key",
      "Primary filegroup",
      "View"
    ],
    "answer": "Partition key",
    "explanation": "A value used to distribute data and requests across logical partitions in a scalable database.",
    "id": "DP900-091"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "Which term best matches this description: A Blob Storage tier optimized for data accessed frequently.",
    "options": [
      "Hot access tier",
      "Cool access tier",
      "Archive access tier",
      "Offline tier"
    ],
    "answer": "Hot access tier",
    "explanation": "Store website images that users request throughout the day.",
    "id": "DP900-092"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A company has this requirement: Store website images that users request throughout the day. Which concept or service is the best fit?",
    "options": [
      "Hot access tier",
      "Cool access tier",
      "Archive access tier",
      "Offline tier"
    ],
    "answer": "Hot access tier",
    "explanation": "A Blob Storage tier optimized for data accessed frequently.",
    "id": "DP900-093"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "Which term best matches this description: A Blob Storage tier for infrequently accessed data that still needs online access.",
    "options": [
      "Cool access tier",
      "Hot access tier",
      "Archive access tier",
      "Memory tier"
    ],
    "answer": "Cool access tier",
    "explanation": "Store monthly reports that are occasionally downloaded.",
    "id": "DP900-094"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A company has this requirement: Store monthly reports that are occasionally downloaded. Which concept or service is the best fit?",
    "options": [
      "Cool access tier",
      "Hot access tier",
      "Archive access tier",
      "Memory tier"
    ],
    "answer": "Cool access tier",
    "explanation": "A Blob Storage tier for infrequently accessed data that still needs online access.",
    "id": "DP900-095"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "Which term best matches this description: A low-cost Blob Storage tier for rarely accessed data that can tolerate retrieval delay.",
    "options": [
      "Archive access tier",
      "Hot access tier",
      "Cool access tier",
      "Premium file share"
    ],
    "answer": "Archive access tier",
    "explanation": "Retain compliance backups for years with very rare retrieval.",
    "id": "DP900-096"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A company has this requirement: Retain compliance backups for years with very rare retrieval. Which concept or service is the best fit?",
    "options": [
      "Archive access tier",
      "Hot access tier",
      "Cool access tier",
      "Premium file share"
    ],
    "answer": "Archive access tier",
    "explanation": "A low-cost Blob Storage tier for rarely accessed data that can tolerate retrieval delay.",
    "id": "DP900-097"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "Which Azure Storage service is best for lift-and-shift applications that expect a traditional shared folder?",
    "options": [
      "Azure Files",
      "Azure Blob Storage",
      "Azure Table Storage",
      "Azure Cosmos DB"
    ],
    "answer": "Azure Files",
    "explanation": "Azure Files exposes managed file shares and supports common file-sharing protocols.",
    "id": "DP900-098"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "Which feature of Azure Cosmos DB helps applications serve users close to their geographic location?",
    "options": [
      "Global distribution",
      "Normalization",
      "Stored procedures only",
      "SMB file shares"
    ],
    "answer": "Global distribution",
    "explanation": "Cosmos DB can replicate data across Azure regions to reduce latency and improve availability.",
    "id": "DP900-099"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A product catalog has different properties for books, clothing, and electronics. Which data model is most appropriate?",
    "options": [
      "Document model",
      "Strictly normalized relational model only",
      "Graph model only",
      "Audio file model"
    ],
    "answer": "Document model",
    "explanation": "Documents support flexible schemas, so each product can contain the properties it needs.",
    "id": "DP900-100"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "Which storage option is optimized for binary large objects such as videos and backups?",
    "options": [
      "Azure Blob Storage",
      "Azure Table Storage",
      "Azure SQL Database",
      "Azure Files only"
    ],
    "answer": "Azure Blob Storage",
    "explanation": "Blob Storage is Azure object storage for unstructured binary and text data.",
    "id": "DP900-101"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "Which term best matches this description: A process in which data is transformed before it is loaded into the target analytical store.",
    "options": [
      "Extract, transform, load (ETL)",
      "ELT",
      "Stream processing",
      "Normalization"
    ],
    "answer": "Extract, transform, load (ETL)",
    "explanation": "Clean and reshape data in a pipeline before loading it into a warehouse.",
    "id": "DP900-102"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company has this requirement: Clean and reshape data in a pipeline before loading it into a warehouse. Which concept or service is the best fit?",
    "options": [
      "Extract, transform, load (ETL)",
      "ELT",
      "Stream processing",
      "Normalization"
    ],
    "answer": "Extract, transform, load (ETL)",
    "explanation": "A process in which data is transformed before it is loaded into the target analytical store.",
    "id": "DP900-103"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "Which term best matches this description: A process in which raw data is loaded first and transformed by the target analytical system.",
    "options": [
      "Extract, load, transform (ELT)",
      "ETL",
      "OLTP",
      "Backup and restore"
    ],
    "answer": "Extract, load, transform (ELT)",
    "explanation": "Load raw data into a scalable analytical platform and transform it there.",
    "id": "DP900-104"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company has this requirement: Load raw data into a scalable analytical platform and transform it there. Which concept or service is the best fit?",
    "options": [
      "Extract, load, transform (ELT)",
      "ETL",
      "OLTP",
      "Backup and restore"
    ],
    "answer": "Extract, load, transform (ELT)",
    "explanation": "A process in which raw data is loaded first and transformed by the target analytical system.",
    "id": "DP900-105"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "Which term best matches this description: A cloud data integration service for creating and orchestrating data movement and transformation pipelines.",
    "options": [
      "Azure Data Factory",
      "Power BI",
      "Azure Files",
      "Azure SQL Database"
    ],
    "answer": "Azure Data Factory",
    "explanation": "Schedule a pipeline that copies data from several sources into an analytical store.",
    "id": "DP900-106"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company has this requirement: Schedule a pipeline that copies data from several sources into an analytical store. Which concept or service is the best fit?",
    "options": [
      "Azure Data Factory",
      "Power BI",
      "Azure Files",
      "Azure SQL Database"
    ],
    "answer": "Azure Data Factory",
    "explanation": "A cloud data integration service for creating and orchestrating data movement and transformation pipelines.",
    "id": "DP900-107"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "Which term best matches this description: An Apache Spark-based analytics platform for large-scale data engineering, analytics, and machine learning.",
    "options": [
      "Azure Databricks",
      "Azure Files",
      "Azure Table Storage",
      "Power BI Desktop"
    ],
    "answer": "Azure Databricks",
    "explanation": "Use collaborative Spark notebooks to transform a very large dataset.",
    "id": "DP900-108"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company has this requirement: Use collaborative Spark notebooks to transform a very large dataset. Which concept or service is the best fit?",
    "options": [
      "Azure Databricks",
      "Azure Files",
      "Azure Table Storage",
      "Power BI Desktop"
    ],
    "answer": "Azure Databricks",
    "explanation": "An Apache Spark-based analytics platform for large-scale data engineering, analytics, and machine learning.",
    "id": "DP900-109"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "Which term best matches this description: A unified SaaS analytics platform that brings together data engineering, data science, warehousing, real-time analytics, and Power BI.",
    "options": [
      "Microsoft Fabric",
      "Azure Files",
      "Azure DNS",
      "SQL Server on a VM"
    ],
    "answer": "Microsoft Fabric",
    "explanation": "Provide an integrated end-to-end analytics environment with OneLake and Power BI.",
    "id": "DP900-110"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company has this requirement: Provide an integrated end-to-end analytics environment with OneLake and Power BI. Which concept or service is the best fit?",
    "options": [
      "Microsoft Fabric",
      "Azure Files",
      "Azure DNS",
      "SQL Server on a VM"
    ],
    "answer": "Microsoft Fabric",
    "explanation": "A unified SaaS analytics platform that brings together data engineering, data science, warehousing, real-time analytics, and Power BI.",
    "id": "DP900-111"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "Which term best matches this description: An analytics service that combines SQL-based data warehousing and big-data analytics capabilities.",
    "options": [
      "Azure Synapse Analytics",
      "Azure Blob Storage",
      "Azure Files",
      "Azure App Service"
    ],
    "answer": "Azure Synapse Analytics",
    "explanation": "Query and analyze large enterprise datasets using integrated SQL and Spark experiences.",
    "id": "DP900-112"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company has this requirement: Query and analyze large enterprise datasets using integrated SQL and Spark experiences. Which concept or service is the best fit?",
    "options": [
      "Azure Synapse Analytics",
      "Azure Blob Storage",
      "Azure Files",
      "Azure App Service"
    ],
    "answer": "Azure Synapse Analytics",
    "explanation": "An analytics service that combines SQL-based data warehousing and big-data analytics capabilities.",
    "id": "DP900-113"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "Which term best matches this description: A managed real-time analytics service that processes streaming events using SQL-like queries.",
    "options": [
      "Azure Stream Analytics",
      "Azure Data Factory",
      "Azure SQL Managed Instance",
      "Power BI Desktop"
    ],
    "answer": "Azure Stream Analytics",
    "explanation": "Calculate rolling averages from live IoT events as they arrive.",
    "id": "DP900-114"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company has this requirement: Calculate rolling averages from live IoT events as they arrive. Which concept or service is the best fit?",
    "options": [
      "Azure Stream Analytics",
      "Azure Data Factory",
      "Azure SQL Managed Instance",
      "Power BI Desktop"
    ],
    "answer": "Azure Stream Analytics",
    "explanation": "A managed real-time analytics service that processes streaming events using SQL-like queries.",
    "id": "DP900-115"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "Which term best matches this description: A highly scalable event ingestion service for receiving large streams of telemetry and events.",
    "options": [
      "Azure Event Hubs",
      "Azure Files",
      "Azure SQL Database",
      "Power BI Report Server"
    ],
    "answer": "Azure Event Hubs",
    "explanation": "Ingest millions of device events per second for downstream processing.",
    "id": "DP900-116"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company has this requirement: Ingest millions of device events per second for downstream processing. Which concept or service is the best fit?",
    "options": [
      "Azure Event Hubs",
      "Azure Files",
      "Azure SQL Database",
      "Power BI Report Server"
    ],
    "answer": "Azure Event Hubs",
    "explanation": "A highly scalable event ingestion service for receiving large streams of telemetry and events.",
    "id": "DP900-117"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "Which term best matches this description: A business intelligence platform for connecting to data, modeling it, and creating interactive reports and dashboards.",
    "options": [
      "Power BI",
      "Azure Files",
      "Azure Cosmos DB",
      "Azure Event Hubs"
    ],
    "answer": "Power BI",
    "explanation": "Create an interactive sales dashboard for business users.",
    "id": "DP900-118"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company has this requirement: Create an interactive sales dashboard for business users. Which concept or service is the best fit?",
    "options": [
      "Power BI",
      "Azure Files",
      "Azure Cosmos DB",
      "Azure Event Hubs"
    ],
    "answer": "Power BI",
    "explanation": "A business intelligence platform for connecting to data, modeling it, and creating interactive reports and dashboards.",
    "id": "DP900-119"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "Which term best matches this description: A model that defines tables, relationships, calculations, and business logic for reporting.",
    "options": [
      "Power BI semantic model",
      "Blob container",
      "Message queue",
      "File share"
    ],
    "answer": "Power BI semantic model",
    "explanation": "Create reusable measures and relationships for multiple Power BI reports.",
    "id": "DP900-120"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company has this requirement: Create reusable measures and relationships for multiple Power BI reports. Which concept or service is the best fit?",
    "options": [
      "Power BI semantic model",
      "Blob container",
      "Message queue",
      "File share"
    ],
    "answer": "Power BI semantic model",
    "explanation": "A model that defines tables, relationships, calculations, and business logic for reporting.",
    "id": "DP900-121"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "Which term best matches this description: A dimensional model with a central fact table connected to dimension tables.",
    "options": [
      "Star schema",
      "Normalized OLTP schema",
      "Graph traversal",
      "Key-value model"
    ],
    "answer": "Star schema",
    "explanation": "Model sales facts by date, product, customer, and store for reporting.",
    "id": "DP900-122"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company has this requirement: Model sales facts by date, product, customer, and store for reporting. Which concept or service is the best fit?",
    "options": [
      "Star schema",
      "Normalized OLTP schema",
      "Graph traversal",
      "Key-value model"
    ],
    "answer": "Star schema",
    "explanation": "A dimensional model with a central fact table connected to dimension tables.",
    "id": "DP900-123"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "Which term best matches this description: A table in a dimensional model that stores measurable business events and foreign keys to dimensions.",
    "options": [
      "Fact table",
      "Dimension table",
      "View only",
      "Blob container"
    ],
    "answer": "Fact table",
    "explanation": "Store sales amount, quantity, date key, and product key for each transaction.",
    "id": "DP900-124"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company has this requirement: Store sales amount, quantity, date key, and product key for each transaction. Which concept or service is the best fit?",
    "options": [
      "Fact table",
      "Dimension table",
      "View only",
      "Blob container"
    ],
    "answer": "Fact table",
    "explanation": "A table in a dimensional model that stores measurable business events and foreign keys to dimensions.",
    "id": "DP900-125"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "Which term best matches this description: A table in a dimensional model that stores descriptive attributes used to filter and group facts.",
    "options": [
      "Dimension table",
      "Fact table",
      "Event stream",
      "Binary file"
    ],
    "answer": "Dimension table",
    "explanation": "Store product name, category, and brand for sales analysis.",
    "id": "DP900-126"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company has this requirement: Store product name, category, and brand for sales analysis. Which concept or service is the best fit?",
    "options": [
      "Dimension table",
      "Fact table",
      "Event stream",
      "Binary file"
    ],
    "answer": "Dimension table",
    "explanation": "A table in a dimensional model that stores descriptive attributes used to filter and group facts.",
    "id": "DP900-127"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "Which term best matches this description: A visualization well suited to comparing values across discrete categories.",
    "options": [
      "Bar chart",
      "Line chart",
      "Scatter plot",
      "Card"
    ],
    "answer": "Bar chart",
    "explanation": "Compare total sales across product categories.",
    "id": "DP900-128"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company has this requirement: Compare total sales across product categories. Which concept or service is the best fit?",
    "options": [
      "Bar chart",
      "Line chart",
      "Scatter plot",
      "Card"
    ],
    "answer": "Bar chart",
    "explanation": "A visualization well suited to comparing values across discrete categories.",
    "id": "DP900-129"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "Which term best matches this description: A visualization well suited to showing trends over time.",
    "options": [
      "Line chart",
      "Pie chart",
      "Table only",
      "Gauge"
    ],
    "answer": "Line chart",
    "explanation": "Show monthly revenue across the last two years.",
    "id": "DP900-130"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company has this requirement: Show monthly revenue across the last two years. Which concept or service is the best fit?",
    "options": [
      "Line chart",
      "Pie chart",
      "Table only",
      "Gauge"
    ],
    "answer": "Line chart",
    "explanation": "A visualization well suited to showing trends over time.",
    "id": "DP900-131"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "Which term best matches this description: A visualization used to examine the relationship or correlation between two numeric variables.",
    "options": [
      "Scatter chart",
      "Card",
      "Donut chart",
      "Slicer"
    ],
    "answer": "Scatter chart",
    "explanation": "Compare advertising spend with sales revenue for many campaigns.",
    "id": "DP900-132"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company has this requirement: Compare advertising spend with sales revenue for many campaigns. Which concept or service is the best fit?",
    "options": [
      "Scatter chart",
      "Card",
      "Donut chart",
      "Slicer"
    ],
    "answer": "Scatter chart",
    "explanation": "A visualization used to examine the relationship or correlation between two numeric variables.",
    "id": "DP900-133"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "Which term best matches this description: A visualization used to display a single prominent value or KPI.",
    "options": [
      "Card visualization",
      "Scatter chart",
      "Matrix",
      "Decomposition tree"
    ],
    "answer": "Card visualization",
    "explanation": "Show total year-to-date revenue as one large number.",
    "id": "DP900-134"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company has this requirement: Show total year-to-date revenue as one large number. Which concept or service is the best fit?",
    "options": [
      "Card visualization",
      "Scatter chart",
      "Matrix",
      "Decomposition tree"
    ],
    "answer": "Card visualization",
    "explanation": "A visualization used to display a single prominent value or KPI.",
    "id": "DP900-135"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company wants to process telemetry within seconds of arrival. Which type of processing should it use?",
    "options": [
      "Streaming processing",
      "Monthly batch processing",
      "Manual export",
      "Normalization only"
    ],
    "answer": "Streaming processing",
    "explanation": "Streaming handles continuously arriving events with low latency.",
    "id": "DP900-136"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "Which component typically receives events before a real-time analytics engine processes them?",
    "options": [
      "Azure Event Hubs",
      "Azure Files",
      "Azure SQL Managed Instance",
      "Power BI Desktop"
    ],
    "answer": "Azure Event Hubs",
    "explanation": "Event Hubs is designed for high-throughput event ingestion.",
    "id": "DP900-137"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "Which Power BI feature lets a user interactively limit the data shown in report visuals?",
    "options": [
      "Slicer",
      "Primary key",
      "Stored procedure",
      "Partition key"
    ],
    "answer": "Slicer",
    "explanation": "A slicer provides an on-canvas control for filtering report data.",
    "id": "DP900-138"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "Which visualization is generally best for showing the parts of a whole when there are only a few categories?",
    "options": [
      "Pie or donut chart",
      "Scatter chart",
      "Line chart",
      "Detailed table only"
    ],
    "answer": "Pie or donut chart",
    "explanation": "Pie and donut charts can show proportions effectively when the category count is small.",
    "id": "DP900-139"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "In a star schema, where should numeric measures such as SalesAmount normally be stored?",
    "options": [
      "Fact table",
      "Dimension table",
      "Blob metadata",
      "File share"
    ],
    "answer": "Fact table",
    "explanation": "Fact tables contain measurable events and keys to descriptive dimensions.",
    "id": "DP900-140"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A data team is classifying a new workload. The required capability is: Data organized in a fixed schema, typically rows and columns with defined data types. Which option should the team identify?",
    "options": [
      "Structured data",
      "Semi-structured data",
      "Unstructured data",
      "Streaming data"
    ],
    "answer": "Structured data",
    "explanation": "Store customer records in a table with consistent columns such as CustomerID, Name, and Email.",
    "id": "DP900-141"
  },
  {
    "domain": "Describe core data concepts",
    "question": "While reviewing a data solution, an architect identifies the following need. The solution must store customer records in a table with consistent columns such as CustomerID, Name, and Email. Which option is the best fit?",
    "options": [
      "Structured data",
      "Semi-structured data",
      "Unstructured data",
      "Streaming data"
    ],
    "answer": "Structured data",
    "explanation": "Data organized in a fixed schema, typically rows and columns with defined data types.",
    "id": "DP900-142"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A DP-900 candidate is comparing common data concepts. The required capability is: Data that has tags or keys that provide organization but does not require a rigid tabular schema. Which option should the team identify?",
    "options": [
      "Semi-structured data",
      "Structured data",
      "Unstructured data",
      "Relational data"
    ],
    "answer": "Semi-structured data",
    "explanation": "Store JSON documents whose fields can vary between records.",
    "id": "DP900-143"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A company is deciding how to describe its data requirement. The solution must store JSON documents whose fields can vary between records. Which option is the best fit?",
    "options": [
      "Semi-structured data",
      "Structured data",
      "Unstructured data",
      "Relational data"
    ],
    "answer": "Semi-structured data",
    "explanation": "Data that has tags or keys that provide organization but does not require a rigid tabular schema.",
    "id": "DP900-144"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A data team is classifying a new workload. The required capability is: Data without a predefined model, such as images, audio, video, and free-form text. Which option should the team identify?",
    "options": [
      "Unstructured data",
      "Structured data",
      "Semi-structured data",
      "Transactional data"
    ],
    "answer": "Unstructured data",
    "explanation": "Store a large collection of photographs and recorded calls.",
    "id": "DP900-145"
  },
  {
    "domain": "Describe core data concepts",
    "question": "While reviewing a data solution, an architect identifies the following need. The solution must store a large collection of photographs and recorded calls. Which option is the best fit?",
    "options": [
      "Unstructured data",
      "Structured data",
      "Semi-structured data",
      "Transactional data"
    ],
    "answer": "Unstructured data",
    "explanation": "Data without a predefined model, such as images, audio, video, and free-form text.",
    "id": "DP900-146"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A DP-900 candidate is comparing common data concepts. The required capability is: A workload optimized for many small, fast read and write operations that preserve data consistency. Which option should the team identify?",
    "options": [
      "Transactional workload",
      "Analytical workload",
      "Batch processing",
      "Data visualization"
    ],
    "answer": "Transactional workload",
    "explanation": "Process online orders and update inventory immediately.",
    "id": "DP900-147"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A company is deciding how to describe its data requirement. The solution must process online orders and update inventory immediately. Which option is the best fit?",
    "options": [
      "Transactional workload",
      "Analytical workload",
      "Batch processing",
      "Data visualization"
    ],
    "answer": "Transactional workload",
    "explanation": "A workload optimized for many small, fast read and write operations that preserve data consistency.",
    "id": "DP900-148"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A data team is classifying a new workload. The required capability is: A workload optimized for reading large volumes of historical data to identify trends and support decisions. Which option should the team identify?",
    "options": [
      "Analytical workload",
      "Transactional workload",
      "OLTP",
      "Point lookup"
    ],
    "answer": "Analytical workload",
    "explanation": "Analyze several years of sales to discover seasonal patterns.",
    "id": "DP900-149"
  },
  {
    "domain": "Describe core data concepts",
    "question": "While reviewing a data solution, an architect identifies the following need. The solution must analyze several years of sales to discover seasonal patterns. Which option is the best fit?",
    "options": [
      "Analytical workload",
      "Transactional workload",
      "OLTP",
      "Point lookup"
    ],
    "answer": "Analytical workload",
    "explanation": "A workload optimized for reading large volumes of historical data to identify trends and support decisions.",
    "id": "DP900-150"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A DP-900 candidate is comparing common data concepts. The required capability is: Processing data in collected groups at scheduled intervals. Which option should the team identify?",
    "options": [
      "Batch processing",
      "Stream processing",
      "OLTP",
      "Interactive reporting"
    ],
    "answer": "Batch processing",
    "explanation": "Calculate daily totals every night after business hours.",
    "id": "DP900-151"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A company is deciding how to describe its data requirement. The solution must calculate daily totals every night after business hours. Which option is the best fit?",
    "options": [
      "Batch processing",
      "Stream processing",
      "OLTP",
      "Interactive reporting"
    ],
    "answer": "Batch processing",
    "explanation": "Processing data in collected groups at scheduled intervals.",
    "id": "DP900-152"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A data team is classifying a new workload. The required capability is: Processing continuously arriving events with low latency. Which option should the team identify?",
    "options": [
      "Stream processing",
      "Batch processing",
      "Normalization",
      "Archiving"
    ],
    "answer": "Stream processing",
    "explanation": "Detect suspicious card transactions seconds after they occur.",
    "id": "DP900-153"
  },
  {
    "domain": "Describe core data concepts",
    "question": "While reviewing a data solution, an architect identifies the following need. The solution must detect suspicious card transactions seconds after they occur. Which option is the best fit?",
    "options": [
      "Stream processing",
      "Batch processing",
      "Normalization",
      "Archiving"
    ],
    "answer": "Stream processing",
    "explanation": "Processing continuously arriving events with low latency.",
    "id": "DP900-154"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A DP-900 candidate is comparing common data concepts. The required capability is: A role commonly responsible for database availability, security, backup, recovery, and performance. Which option should the team identify?",
    "options": [
      "Database administrator",
      "Data analyst",
      "Data engineer",
      "Business user"
    ],
    "answer": "Database administrator",
    "explanation": "Configure backups, permissions, and performance settings for production databases.",
    "id": "DP900-155"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A company is deciding how to describe its data requirement. The solution must configure backups, permissions, and performance settings for production databases. Which option is the best fit?",
    "options": [
      "Database administrator",
      "Data analyst",
      "Data engineer",
      "Business user"
    ],
    "answer": "Database administrator",
    "explanation": "A role commonly responsible for database availability, security, backup, recovery, and performance.",
    "id": "DP900-156"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A data team is classifying a new workload. The required capability is: A role commonly responsible for integrating, transforming, and preparing data for analytics. Which option should the team identify?",
    "options": [
      "Data engineer",
      "Database administrator",
      "Data analyst",
      "Report consumer"
    ],
    "answer": "Data engineer",
    "explanation": "Build pipelines that ingest data from several systems into an analytical store.",
    "id": "DP900-157"
  },
  {
    "domain": "Describe core data concepts",
    "question": "While reviewing a data solution, an architect identifies the following need. The solution must build pipelines that ingest data from several systems into an analytical store. Which option is the best fit?",
    "options": [
      "Data engineer",
      "Database administrator",
      "Data analyst",
      "Report consumer"
    ],
    "answer": "Data engineer",
    "explanation": "A role commonly responsible for integrating, transforming, and preparing data for analytics.",
    "id": "DP900-158"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A DP-900 candidate is comparing common data concepts. The required capability is: A role commonly responsible for exploring data, building models, and creating reports and visualizations. Which option should the team identify?",
    "options": [
      "Data analyst",
      "Database administrator",
      "Data engineer",
      "System administrator"
    ],
    "answer": "Data analyst",
    "explanation": "Create a Power BI dashboard that explains monthly sales performance.",
    "id": "DP900-159"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A company is deciding how to describe its data requirement. The solution must create a Power BI dashboard that explains monthly sales performance. Which option is the best fit?",
    "options": [
      "Data analyst",
      "Database administrator",
      "Data engineer",
      "System administrator"
    ],
    "answer": "Data analyst",
    "explanation": "A role commonly responsible for exploring data, building models, and creating reports and visualizations.",
    "id": "DP900-160"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A data team is classifying a new workload. The required capability is: A delimited text file format commonly used for tabular data. Which option should the team identify?",
    "options": [
      "CSV",
      "JSON",
      "Parquet",
      "JPEG"
    ],
    "answer": "CSV",
    "explanation": "Exchange a simple table of product data between systems using comma-separated values.",
    "id": "DP900-161"
  },
  {
    "domain": "Describe core data concepts",
    "question": "While reviewing a data solution, an architect identifies the following need. The solution must exchange a simple table of product data between systems using comma-separated values. Which option is the best fit?",
    "options": [
      "CSV",
      "JSON",
      "Parquet",
      "JPEG"
    ],
    "answer": "CSV",
    "explanation": "A delimited text file format commonly used for tabular data.",
    "id": "DP900-162"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A DP-900 candidate is comparing common data concepts. The required capability is: A text format that represents objects and arrays using key-value pairs. Which option should the team identify?",
    "options": [
      "JSON",
      "CSV",
      "Parquet",
      "PNG"
    ],
    "answer": "JSON",
    "explanation": "Represent an API response with nested customer and order objects.",
    "id": "DP900-163"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A company is deciding how to describe its data requirement. The solution must represent an API response with nested customer and order objects. Which option is the best fit?",
    "options": [
      "JSON",
      "CSV",
      "Parquet",
      "PNG"
    ],
    "answer": "JSON",
    "explanation": "A text format that represents objects and arrays using key-value pairs.",
    "id": "DP900-164"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A data team is classifying a new workload. The required capability is: A columnar file format suited to efficient storage and analytical queries over large datasets. Which option should the team identify?",
    "options": [
      "Parquet",
      "CSV",
      "XML",
      "TXT"
    ],
    "answer": "Parquet",
    "explanation": "Store a large analytical dataset while reducing storage and reading only needed columns.",
    "id": "DP900-165"
  },
  {
    "domain": "Describe core data concepts",
    "question": "While reviewing a data solution, an architect identifies the following need. The solution must store a large analytical dataset while reducing storage and reading only needed columns. Which option is the best fit?",
    "options": [
      "Parquet",
      "CSV",
      "XML",
      "TXT"
    ],
    "answer": "Parquet",
    "explanation": "A columnar file format suited to efficient storage and analytical queries over large datasets.",
    "id": "DP900-166"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A DP-900 candidate is comparing common data concepts. The required capability is: A scalable store that can hold large volumes of raw structured, semi-structured, and unstructured data. Which option should the team identify?",
    "options": [
      "Data lake",
      "Relational table",
      "OLTP database",
      "Dashboard"
    ],
    "answer": "Data lake",
    "explanation": "Retain raw logs, images, JSON, and CSV files for future analysis.",
    "id": "DP900-167"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A company is deciding how to describe its data requirement. The solution must retain raw logs, images, JSON, and CSV files for future analysis. Which option is the best fit?",
    "options": [
      "Data lake",
      "Relational table",
      "OLTP database",
      "Dashboard"
    ],
    "answer": "Data lake",
    "explanation": "A scalable store that can hold large volumes of raw structured, semi-structured, and unstructured data.",
    "id": "DP900-168"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A data team is classifying a new workload. The required capability is: A curated analytical store organized for reporting and business intelligence. Which option should the team identify?",
    "options": [
      "Data warehouse",
      "Data lake",
      "Blob container",
      "Message queue"
    ],
    "answer": "Data warehouse",
    "explanation": "Provide governed, integrated historical data for enterprise reporting.",
    "id": "DP900-169"
  },
  {
    "domain": "Describe core data concepts",
    "question": "While reviewing a data solution, an architect identifies the following need. The solution must provide governed, integrated historical data for enterprise reporting. Which option is the best fit?",
    "options": [
      "Data warehouse",
      "Data lake",
      "Blob container",
      "Message queue"
    ],
    "answer": "Data warehouse",
    "explanation": "A curated analytical store organized for reporting and business intelligence.",
    "id": "DP900-170"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A DP-900 candidate is comparing common data concepts. Consider this requirement: Online transaction processing systems handle frequent, small, low-latency inserts and updates. Which option best addresses it?",
    "options": [
      "Many short transactions",
      "Complex scans over years of history",
      "Primarily unstructured files",
      "Data processed only once per month"
    ],
    "answer": "Many short transactions",
    "explanation": "Online transaction processing systems handle frequent, small, low-latency inserts and updates.",
    "id": "DP900-171"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A company is deciding how to describe its data requirement. Consider this requirement: Online analytical processing supports trend analysis and complex queries across large historical datasets. Which option best addresses it?",
    "options": [
      "Complex aggregations over large datasets",
      "Very frequent single-row updates",
      "A fixed requirement for millisecond writes",
      "Storing only image files"
    ],
    "answer": "Complex aggregations over large datasets",
    "explanation": "Online analytical processing supports trend analysis and complex queries across large historical datasets.",
    "id": "DP900-172"
  },
  {
    "domain": "Describe core data concepts",
    "question": "A data team is classifying a new workload. Consider this requirement: Audio recordings are unstructured. Relational tables, CSV rows, and Parquet tables have an explicit structure. Which option best addresses it?",
    "options": [
      "Audio recordings",
      "Relational tables",
      "CSV rows",
      "Parquet tables"
    ],
    "answer": "Audio recordings",
    "explanation": "Audio recordings are unstructured. Relational tables, CSV rows, and Parquet tables have an explicit structure.",
    "id": "DP900-173"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "During a database migration review, the team identifies this requirement. The required capability is: A column or combination of columns that uniquely identifies each row in a table. Which option should the team identify?",
    "options": [
      "Primary key",
      "Foreign key",
      "View",
      "Index"
    ],
    "answer": "Primary key",
    "explanation": "Ensure every customer row has a unique identifier.",
    "id": "DP900-174"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "An administrator is selecting a relational data feature or service. The solution must ensure every customer row has a unique identifier. Which option is the best fit?",
    "options": [
      "Primary key",
      "Foreign key",
      "View",
      "Index"
    ],
    "answer": "Primary key",
    "explanation": "A column or combination of columns that uniquely identifies each row in a table.",
    "id": "DP900-175"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A developer is modeling data for a cloud application. The required capability is: A column that references a key in another table to create a relationship. Which option should the team identify?",
    "options": [
      "Foreign key",
      "Primary key",
      "Stored procedure",
      "Index"
    ],
    "answer": "Foreign key",
    "explanation": "Link each order to the customer who placed it.",
    "id": "DP900-176"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A company is designing a relational solution in Azure. The solution must link each order to the customer who placed it. Which option is the best fit?",
    "options": [
      "Foreign key",
      "Primary key",
      "Stored procedure",
      "Index"
    ],
    "answer": "Foreign key",
    "explanation": "A column that references a key in another table to create a relationship.",
    "id": "DP900-177"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "During a database migration review, the team identifies this requirement. The required capability is: Organizing relational data to reduce duplication and improve integrity. Which option should the team identify?",
    "options": [
      "Normalization",
      "Denormalization",
      "Partitioning",
      "Streaming"
    ],
    "answer": "Normalization",
    "explanation": "Separate repeating customer details from orders into related tables.",
    "id": "DP900-178"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "An administrator is selecting a relational data feature or service. The solution must separate repeating customer details from orders into related tables. Which option is the best fit?",
    "options": [
      "Normalization",
      "Denormalization",
      "Partitioning",
      "Streaming"
    ],
    "answer": "Normalization",
    "explanation": "Organizing relational data to reduce duplication and improve integrity.",
    "id": "DP900-179"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A developer is modeling data for a cloud application. The required capability is: The SQL statement used to retrieve rows and columns from a database. Which option should the team identify?",
    "options": [
      "SELECT",
      "INSERT",
      "UPDATE",
      "DELETE"
    ],
    "answer": "SELECT",
    "explanation": "Read product names and prices from a table.",
    "id": "DP900-180"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A company is designing a relational solution in Azure. The solution must read product names and prices from a table. Which option is the best fit?",
    "options": [
      "SELECT",
      "INSERT",
      "UPDATE",
      "DELETE"
    ],
    "answer": "SELECT",
    "explanation": "The SQL statement used to retrieve rows and columns from a database.",
    "id": "DP900-181"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "During a database migration review, the team identifies this requirement. The required capability is: The SQL statement used to add new rows to a table. Which option should the team identify?",
    "options": [
      "INSERT",
      "SELECT",
      "UPDATE",
      "DROP"
    ],
    "answer": "INSERT",
    "explanation": "Add a newly registered customer to the Customers table.",
    "id": "DP900-182"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "An administrator is selecting a relational data feature or service. The solution must add a newly registered customer to the Customers table. Which option is the best fit?",
    "options": [
      "INSERT",
      "SELECT",
      "UPDATE",
      "DROP"
    ],
    "answer": "INSERT",
    "explanation": "The SQL statement used to add new rows to a table.",
    "id": "DP900-183"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A developer is modeling data for a cloud application. The required capability is: The SQL statement used to change existing rows. Which option should the team identify?",
    "options": [
      "UPDATE",
      "SELECT",
      "INSERT",
      "CREATE"
    ],
    "answer": "UPDATE",
    "explanation": "Change the shipping status of an existing order.",
    "id": "DP900-184"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A company is designing a relational solution in Azure. The solution must change the shipping status of an existing order. Which option is the best fit?",
    "options": [
      "UPDATE",
      "SELECT",
      "INSERT",
      "CREATE"
    ],
    "answer": "UPDATE",
    "explanation": "The SQL statement used to change existing rows.",
    "id": "DP900-185"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "During a database migration review, the team identifies this requirement. The required capability is: The SQL statement used to remove rows from a table. Which option should the team identify?",
    "options": [
      "DELETE",
      "DROP",
      "SELECT",
      "ALTER"
    ],
    "answer": "DELETE",
    "explanation": "Remove a discontinued product row while keeping the table itself.",
    "id": "DP900-186"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "An administrator is selecting a relational data feature or service. The solution must remove a discontinued product row while keeping the table itself. Which option is the best fit?",
    "options": [
      "DELETE",
      "DROP",
      "SELECT",
      "ALTER"
    ],
    "answer": "DELETE",
    "explanation": "The SQL statement used to remove rows from a table.",
    "id": "DP900-187"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A developer is modeling data for a cloud application. The required capability is: A saved query that presents data as a virtual table. Which option should the team identify?",
    "options": [
      "View",
      "Stored procedure",
      "Index",
      "Trigger"
    ],
    "answer": "View",
    "explanation": "Give users a simplified representation of selected columns from several tables.",
    "id": "DP900-188"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A company is designing a relational solution in Azure. The solution must give users a simplified representation of selected columns from several tables. Which option is the best fit?",
    "options": [
      "View",
      "Stored procedure",
      "Index",
      "Trigger"
    ],
    "answer": "View",
    "explanation": "A saved query that presents data as a virtual table.",
    "id": "DP900-189"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "During a database migration review, the team identifies this requirement. The required capability is: A database object that can improve query performance by providing a faster access path to data. Which option should the team identify?",
    "options": [
      "Index",
      "View",
      "Foreign key",
      "Schema"
    ],
    "answer": "Index",
    "explanation": "Speed up searches that frequently filter by CustomerID.",
    "id": "DP900-190"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "An administrator is selecting a relational data feature or service. The solution must speed up searches that frequently filter by CustomerID. Which option is the best fit?",
    "options": [
      "Index",
      "View",
      "Foreign key",
      "Schema"
    ],
    "answer": "Index",
    "explanation": "A database object that can improve query performance by providing a faster access path to data.",
    "id": "DP900-191"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A developer is modeling data for a cloud application. The required capability is: A named set of SQL statements stored in the database and executed as a unit. Which option should the team identify?",
    "options": [
      "Stored procedure",
      "View",
      "Index",
      "Table"
    ],
    "answer": "Stored procedure",
    "explanation": "Reuse a controlled multi-step database operation from several applications.",
    "id": "DP900-192"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A company is designing a relational solution in Azure. The solution must reuse a controlled multi-step database operation from several applications. Which option is the best fit?",
    "options": [
      "Stored procedure",
      "View",
      "Index",
      "Table"
    ],
    "answer": "Stored procedure",
    "explanation": "A named set of SQL statements stored in the database and executed as a unit.",
    "id": "DP900-193"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "During a database migration review, the team identifies this requirement. The required capability is: A fully managed platform-as-a-service relational database for modern cloud applications. Which option should the team identify?",
    "options": [
      "Azure SQL Database",
      "SQL Server on Azure Virtual Machines",
      "Azure Blob Storage",
      "Azure Table Storage"
    ],
    "answer": "Azure SQL Database",
    "explanation": "Use a managed SQL database without managing the operating system or SQL Server instance.",
    "id": "DP900-194"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "An administrator is selecting a relational data feature or service. The solution must use a managed SQL database without managing the operating system or SQL Server instance. Which option is the best fit?",
    "options": [
      "Azure SQL Database",
      "SQL Server on Azure Virtual Machines",
      "Azure Blob Storage",
      "Azure Table Storage"
    ],
    "answer": "Azure SQL Database",
    "explanation": "A fully managed platform-as-a-service relational database for modern cloud applications.",
    "id": "DP900-195"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A developer is modeling data for a cloud application. The required capability is: A managed SQL service designed for high compatibility with SQL Server instance-level features. Which option should the team identify?",
    "options": [
      "Azure SQL Managed Instance",
      "Azure SQL Database",
      "Azure Cosmos DB",
      "Azure Files"
    ],
    "answer": "Azure SQL Managed Instance",
    "explanation": "Migrate an application that relies on SQL Server instance features with minimal changes.",
    "id": "DP900-196"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A company is designing a relational solution in Azure. The solution must migrate an application that relies on SQL Server instance features with minimal changes. Which option is the best fit?",
    "options": [
      "Azure SQL Managed Instance",
      "Azure SQL Database",
      "Azure Cosmos DB",
      "Azure Files"
    ],
    "answer": "Azure SQL Managed Instance",
    "explanation": "A managed SQL service designed for high compatibility with SQL Server instance-level features.",
    "id": "DP900-197"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "During a database migration review, the team identifies this requirement. The required capability is: Infrastructure as a service that provides full control of SQL Server and the operating system. Which option should the team identify?",
    "options": [
      "SQL Server on Azure Virtual Machines",
      "Azure SQL Database",
      "Azure SQL Managed Instance",
      "Azure Database for PostgreSQL"
    ],
    "answer": "SQL Server on Azure Virtual Machines",
    "explanation": "Run SQL Server in Azure while retaining OS-level and instance-level control.",
    "id": "DP900-198"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "An administrator is selecting a relational data feature or service. The solution must run SQL Server in Azure while retaining OS-level and instance-level control. Which option is the best fit?",
    "options": [
      "SQL Server on Azure Virtual Machines",
      "Azure SQL Database",
      "Azure SQL Managed Instance",
      "Azure Database for PostgreSQL"
    ],
    "answer": "SQL Server on Azure Virtual Machines",
    "explanation": "Infrastructure as a service that provides full control of SQL Server and the operating system.",
    "id": "DP900-199"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A developer is modeling data for a cloud application. The required capability is: A managed Azure relational database service for PostgreSQL workloads. Which option should the team identify?",
    "options": [
      "Azure Database for PostgreSQL",
      "Azure SQL Database",
      "Azure Cosmos DB",
      "Azure Table Storage"
    ],
    "answer": "Azure Database for PostgreSQL",
    "explanation": "Move a PostgreSQL application to a managed Azure service.",
    "id": "DP900-200"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A company is designing a relational solution in Azure. The solution must move a PostgreSQL application to a managed Azure service. Which option is the best fit?",
    "options": [
      "Azure Database for PostgreSQL",
      "Azure SQL Database",
      "Azure Cosmos DB",
      "Azure Table Storage"
    ],
    "answer": "Azure Database for PostgreSQL",
    "explanation": "A managed Azure relational database service for PostgreSQL workloads.",
    "id": "DP900-201"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "During a database migration review, the team identifies this requirement. The required capability is: A managed Azure relational database service for MySQL workloads. Which option should the team identify?",
    "options": [
      "Azure Database for MySQL",
      "Azure SQL Managed Instance",
      "Azure Blob Storage",
      "Azure Databricks"
    ],
    "answer": "Azure Database for MySQL",
    "explanation": "Host a MySQL application without managing database servers.",
    "id": "DP900-202"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "An administrator is selecting a relational data feature or service. The solution must host a MySQL application without managing database servers. Which option is the best fit?",
    "options": [
      "Azure Database for MySQL",
      "Azure SQL Managed Instance",
      "Azure Blob Storage",
      "Azure Databricks"
    ],
    "answer": "Azure Database for MySQL",
    "explanation": "A managed Azure relational database service for MySQL workloads.",
    "id": "DP900-203"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A developer is modeling data for a cloud application. Consider this requirement: Normalization separates entities such as customers, products, and orders and relates them using keys. Which option best addresses it?",
    "options": [
      "Normalize the data into related tables",
      "Store the data as image files",
      "Add more duplicate columns",
      "Use stream processing"
    ],
    "answer": "Normalize the data into related tables",
    "explanation": "Normalization separates entities such as customers, products, and orders and relates them using keys.",
    "id": "DP900-204"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "A company is designing a relational solution in Azure. Consider this requirement: WHERE applies a condition to determine which rows are returned. Which option best addresses it?",
    "options": [
      "WHERE",
      "ORDER BY",
      "GROUP BY",
      "JOIN"
    ],
    "answer": "WHERE",
    "explanation": "WHERE applies a condition to determine which rows are returned.",
    "id": "DP900-205"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "During a database migration review, the team identifies this requirement. Consider this requirement: A JOIN combines rows from two or more tables by using a related column. Which option best addresses it?",
    "options": [
      "JOIN",
      "DROP",
      "INSERT",
      "TRUNCATE"
    ],
    "answer": "JOIN",
    "explanation": "A JOIN combines rows from two or more tables by using a related column.",
    "id": "DP900-206"
  },
  {
    "domain": "Identify considerations for relational data on Azure",
    "question": "An administrator is selecting a relational data feature or service. Consider this requirement: A virtual machine provides operating-system access; PaaS database services do not. Which option best addresses it?",
    "options": [
      "SQL Server on Azure Virtual Machines",
      "Azure SQL Database",
      "Azure SQL Managed Instance",
      "Azure Database for PostgreSQL"
    ],
    "answer": "SQL Server on Azure Virtual Machines",
    "explanation": "A virtual machine provides operating-system access; PaaS database services do not.",
    "id": "DP900-207"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A developer must choose an appropriate Azure data service. The required capability is: Object storage optimized for massive amounts of unstructured data such as images, video, backups, and logs. Which option should the team identify?",
    "options": [
      "Azure Blob Storage",
      "Azure Files",
      "Azure Table Storage",
      "Azure SQL Database"
    ],
    "answer": "Azure Blob Storage",
    "explanation": "Store millions of product images and archived log files.",
    "id": "DP900-208"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A cloud solution requires a non-relational data store. The solution must store millions of product images and archived log files. Which option is the best fit?",
    "options": [
      "Azure Blob Storage",
      "Azure Files",
      "Azure Table Storage",
      "Azure SQL Database"
    ],
    "answer": "Azure Blob Storage",
    "explanation": "Object storage optimized for massive amounts of unstructured data such as images, video, backups, and logs.",
    "id": "DP900-209"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "An architect is selecting an Azure storage or NoSQL option. The required capability is: Managed file shares accessible through common file-sharing protocols such as SMB. Which option should the team identify?",
    "options": [
      "Azure Files",
      "Azure Blob Storage",
      "Azure Table Storage",
      "Azure Cosmos DB"
    ],
    "answer": "Azure Files",
    "explanation": "Replace an on-premises shared folder with a cloud-hosted file share.",
    "id": "DP900-210"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A company is reviewing how to store data that does not fit a traditional relational schema. The solution must replace an on-premises shared folder with a cloud-hosted file share. Which option is the best fit?",
    "options": [
      "Azure Files",
      "Azure Blob Storage",
      "Azure Table Storage",
      "Azure Cosmos DB"
    ],
    "answer": "Azure Files",
    "explanation": "Managed file shares accessible through common file-sharing protocols such as SMB.",
    "id": "DP900-211"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A developer must choose an appropriate Azure data service. The required capability is: A schema-less key-attribute store for large volumes of non-relational structured data. Which option should the team identify?",
    "options": [
      "Azure Table Storage",
      "Azure Blob Storage",
      "Azure Files",
      "Azure SQL Database"
    ],
    "answer": "Azure Table Storage",
    "explanation": "Store simple entities addressed by partition and row keys at low cost.",
    "id": "DP900-212"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A cloud solution requires a non-relational data store. The solution must store simple entities addressed by partition and row keys at low cost. Which option is the best fit?",
    "options": [
      "Azure Table Storage",
      "Azure Blob Storage",
      "Azure Files",
      "Azure SQL Database"
    ],
    "answer": "Azure Table Storage",
    "explanation": "A schema-less key-attribute store for large volumes of non-relational structured data.",
    "id": "DP900-213"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "An architect is selecting an Azure storage or NoSQL option. The required capability is: A globally distributed NoSQL database designed for low latency and elastic scale. Which option should the team identify?",
    "options": [
      "Azure Cosmos DB",
      "Azure SQL Database",
      "Azure Files",
      "Azure Data Factory"
    ],
    "answer": "Azure Cosmos DB",
    "explanation": "Serve a globally distributed application that needs fast reads and writes in multiple regions.",
    "id": "DP900-214"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A company is reviewing how to store data that does not fit a traditional relational schema. The solution must serve a globally distributed application that needs fast reads and writes in multiple regions. Which option is the best fit?",
    "options": [
      "Azure Cosmos DB",
      "Azure SQL Database",
      "Azure Files",
      "Azure Data Factory"
    ],
    "answer": "Azure Cosmos DB",
    "explanation": "A globally distributed NoSQL database designed for low latency and elastic scale.",
    "id": "DP900-215"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A developer must choose an appropriate Azure data service. The required capability is: The native Azure Cosmos DB API for JSON document data queried with a SQL-like syntax. Which option should the team identify?",
    "options": [
      "Azure Cosmos DB for NoSQL",
      "Azure Cosmos DB for MongoDB",
      "Azure Cosmos DB for Apache Cassandra",
      "Azure Cosmos DB for Apache Gremlin"
    ],
    "answer": "Azure Cosmos DB for NoSQL",
    "explanation": "Build a new document database application using the native Cosmos DB experience.",
    "id": "DP900-216"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A cloud solution requires a non-relational data store. The solution must build a new document database application using the native Cosmos DB experience. Which option is the best fit?",
    "options": [
      "Azure Cosmos DB for NoSQL",
      "Azure Cosmos DB for MongoDB",
      "Azure Cosmos DB for Apache Cassandra",
      "Azure Cosmos DB for Apache Gremlin"
    ],
    "answer": "Azure Cosmos DB for NoSQL",
    "explanation": "The native Azure Cosmos DB API for JSON document data queried with a SQL-like syntax.",
    "id": "DP900-217"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "An architect is selecting an Azure storage or NoSQL option. The required capability is: An API that supports applications and tools using the MongoDB wire protocol. Which option should the team identify?",
    "options": [
      "Azure Cosmos DB for MongoDB",
      "Azure Cosmos DB for NoSQL",
      "Azure Cosmos DB for Apache Gremlin",
      "Azure Table Storage"
    ],
    "answer": "Azure Cosmos DB for MongoDB",
    "explanation": "Migrate an application that uses MongoDB drivers to Azure Cosmos DB.",
    "id": "DP900-218"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A company is reviewing how to store data that does not fit a traditional relational schema. The solution must migrate an application that uses MongoDB drivers to Azure Cosmos DB. Which option is the best fit?",
    "options": [
      "Azure Cosmos DB for MongoDB",
      "Azure Cosmos DB for NoSQL",
      "Azure Cosmos DB for Apache Gremlin",
      "Azure Table Storage"
    ],
    "answer": "Azure Cosmos DB for MongoDB",
    "explanation": "An API that supports applications and tools using the MongoDB wire protocol.",
    "id": "DP900-219"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A developer must choose an appropriate Azure data service. The required capability is: An API for applications designed around Cassandra-compatible wide-column data. Which option should the team identify?",
    "options": [
      "Azure Cosmos DB for Apache Cassandra",
      "Azure Cosmos DB for MongoDB",
      "Azure Cosmos DB for Apache Gremlin",
      "Azure Files"
    ],
    "answer": "Azure Cosmos DB for Apache Cassandra",
    "explanation": "Move a Cassandra application while continuing to use compatible drivers.",
    "id": "DP900-220"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A cloud solution requires a non-relational data store. The solution must move a Cassandra application while continuing to use compatible drivers. Which option is the best fit?",
    "options": [
      "Azure Cosmos DB for Apache Cassandra",
      "Azure Cosmos DB for MongoDB",
      "Azure Cosmos DB for Apache Gremlin",
      "Azure Files"
    ],
    "answer": "Azure Cosmos DB for Apache Cassandra",
    "explanation": "An API for applications designed around Cassandra-compatible wide-column data.",
    "id": "DP900-221"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "An architect is selecting an Azure storage or NoSQL option. The required capability is: A graph API for storing vertices and edges and traversing relationships. Which option should the team identify?",
    "options": [
      "Azure Cosmos DB for Apache Gremlin",
      "Azure Cosmos DB for NoSQL",
      "Azure Table Storage",
      "Azure Blob Storage"
    ],
    "answer": "Azure Cosmos DB for Apache Gremlin",
    "explanation": "Model social connections and find paths between people.",
    "id": "DP900-222"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A company is reviewing how to store data that does not fit a traditional relational schema. The solution must model social connections and find paths between people. Which option is the best fit?",
    "options": [
      "Azure Cosmos DB for Apache Gremlin",
      "Azure Cosmos DB for NoSQL",
      "Azure Table Storage",
      "Azure Blob Storage"
    ],
    "answer": "Azure Cosmos DB for Apache Gremlin",
    "explanation": "A graph API for storing vertices and edges and traversing relationships.",
    "id": "DP900-223"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A developer must choose an appropriate Azure data service. The required capability is: A non-relational model that retrieves a value by using a unique key. Which option should the team identify?",
    "options": [
      "Key-value store",
      "Graph database",
      "Relational database",
      "Data warehouse"
    ],
    "answer": "Key-value store",
    "explanation": "Store user session data that is accessed by a session identifier.",
    "id": "DP900-224"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A cloud solution requires a non-relational data store. The solution must store user session data that is accessed by a session identifier. Which option is the best fit?",
    "options": [
      "Key-value store",
      "Graph database",
      "Relational database",
      "Data warehouse"
    ],
    "answer": "Key-value store",
    "explanation": "A non-relational model that retrieves a value by using a unique key.",
    "id": "DP900-225"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "An architect is selecting an Azure storage or NoSQL option. The required capability is: A non-relational model that stores self-contained JSON-like documents with flexible schemas. Which option should the team identify?",
    "options": [
      "Document database",
      "Graph database",
      "Relational table",
      "File share"
    ],
    "answer": "Document database",
    "explanation": "Store product catalog records whose attributes differ by product category.",
    "id": "DP900-226"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A company is reviewing how to store data that does not fit a traditional relational schema. The solution must store product catalog records whose attributes differ by product category. Which option is the best fit?",
    "options": [
      "Document database",
      "Graph database",
      "Relational table",
      "File share"
    ],
    "answer": "Document database",
    "explanation": "A non-relational model that stores self-contained JSON-like documents with flexible schemas.",
    "id": "DP900-227"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A developer must choose an appropriate Azure data service. The required capability is: A non-relational model optimized for entities and the relationships between them. Which option should the team identify?",
    "options": [
      "Graph database",
      "Key-value store",
      "Columnar file",
      "Relational view"
    ],
    "answer": "Graph database",
    "explanation": "Analyze fraud rings by traversing relationships among accounts, devices, and transactions.",
    "id": "DP900-228"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A cloud solution requires a non-relational data store. The solution must analyze fraud rings by traversing relationships among accounts, devices, and transactions. Which option is the best fit?",
    "options": [
      "Graph database",
      "Key-value store",
      "Columnar file",
      "Relational view"
    ],
    "answer": "Graph database",
    "explanation": "A non-relational model optimized for entities and the relationships between them.",
    "id": "DP900-229"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "An architect is selecting an Azure storage or NoSQL option. The required capability is: A value used to distribute data and requests across logical partitions in a scalable database. Which option should the team identify?",
    "options": [
      "Partition key",
      "Foreign key",
      "Primary filegroup",
      "View"
    ],
    "answer": "Partition key",
    "explanation": "Choose a property that spreads Cosmos DB requests and storage evenly.",
    "id": "DP900-230"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A company is reviewing how to store data that does not fit a traditional relational schema. The solution must choose a property that spreads Cosmos DB requests and storage evenly. Which option is the best fit?",
    "options": [
      "Partition key",
      "Foreign key",
      "Primary filegroup",
      "View"
    ],
    "answer": "Partition key",
    "explanation": "A value used to distribute data and requests across logical partitions in a scalable database.",
    "id": "DP900-231"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A developer must choose an appropriate Azure data service. The required capability is: A Blob Storage tier optimized for data accessed frequently. Which option should the team identify?",
    "options": [
      "Hot access tier",
      "Cool access tier",
      "Archive access tier",
      "Offline tier"
    ],
    "answer": "Hot access tier",
    "explanation": "Store website images that users request throughout the day.",
    "id": "DP900-232"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A cloud solution requires a non-relational data store. The solution must store website images that users request throughout the day. Which option is the best fit?",
    "options": [
      "Hot access tier",
      "Cool access tier",
      "Archive access tier",
      "Offline tier"
    ],
    "answer": "Hot access tier",
    "explanation": "A Blob Storage tier optimized for data accessed frequently.",
    "id": "DP900-233"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "An architect is selecting an Azure storage or NoSQL option. The required capability is: A Blob Storage tier for infrequently accessed data that still needs online access. Which option should the team identify?",
    "options": [
      "Cool access tier",
      "Hot access tier",
      "Archive access tier",
      "Memory tier"
    ],
    "answer": "Cool access tier",
    "explanation": "Store monthly reports that are occasionally downloaded.",
    "id": "DP900-234"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A company is reviewing how to store data that does not fit a traditional relational schema. The solution must store monthly reports that are occasionally downloaded. Which option is the best fit?",
    "options": [
      "Cool access tier",
      "Hot access tier",
      "Archive access tier",
      "Memory tier"
    ],
    "answer": "Cool access tier",
    "explanation": "A Blob Storage tier for infrequently accessed data that still needs online access.",
    "id": "DP900-235"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A developer must choose an appropriate Azure data service. The required capability is: A low-cost Blob Storage tier for rarely accessed data that can tolerate retrieval delay. Which option should the team identify?",
    "options": [
      "Archive access tier",
      "Hot access tier",
      "Cool access tier",
      "Premium file share"
    ],
    "answer": "Archive access tier",
    "explanation": "Retain compliance backups for years with very rare retrieval.",
    "id": "DP900-236"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A cloud solution requires a non-relational data store. The solution must retain compliance backups for years with very rare retrieval. Which option is the best fit?",
    "options": [
      "Archive access tier",
      "Hot access tier",
      "Cool access tier",
      "Premium file share"
    ],
    "answer": "Archive access tier",
    "explanation": "A low-cost Blob Storage tier for rarely accessed data that can tolerate retrieval delay.",
    "id": "DP900-237"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "An architect is selecting an Azure storage or NoSQL option. Consider this requirement: Azure Files exposes managed file shares and supports common file-sharing protocols. Which option best addresses it?",
    "options": [
      "Azure Files",
      "Azure Blob Storage",
      "Azure Table Storage",
      "Azure Cosmos DB"
    ],
    "answer": "Azure Files",
    "explanation": "Azure Files exposes managed file shares and supports common file-sharing protocols.",
    "id": "DP900-238"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A company is reviewing how to store data that does not fit a traditional relational schema. Consider this requirement: Cosmos DB can replicate data across Azure regions to reduce latency and improve availability. Which option best addresses it?",
    "options": [
      "Global distribution",
      "Normalization",
      "Stored procedures only",
      "SMB file shares"
    ],
    "answer": "Global distribution",
    "explanation": "Cosmos DB can replicate data across Azure regions to reduce latency and improve availability.",
    "id": "DP900-239"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A developer must choose an appropriate Azure data service. Consider this requirement: Documents support flexible schemas, so each product can contain the properties it needs. Which option best addresses it?",
    "options": [
      "Document model",
      "Strictly normalized relational model only",
      "Graph model only",
      "Audio file model"
    ],
    "answer": "Document model",
    "explanation": "Documents support flexible schemas, so each product can contain the properties it needs.",
    "id": "DP900-240"
  },
  {
    "domain": "Describe considerations for working with non-relational data on Azure",
    "question": "A cloud solution requires a non-relational data store. Consider this requirement: Blob Storage is Azure object storage for unstructured binary and text data. Which option best addresses it?",
    "options": [
      "Azure Blob Storage",
      "Azure Table Storage",
      "Azure SQL Database",
      "Azure Files only"
    ],
    "answer": "Azure Blob Storage",
    "explanation": "Blob Storage is Azure object storage for unstructured binary and text data.",
    "id": "DP900-241"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A data team is designing a reporting and analytics architecture. The required capability is: A process in which data is transformed before it is loaded into the target analytical store. Which option should the team identify?",
    "options": [
      "Extract, transform, load (ETL)",
      "ELT",
      "Stream processing",
      "Normalization"
    ],
    "answer": "Extract, transform, load (ETL)",
    "explanation": "Clean and reshape data in a pipeline before loading it into a warehouse.",
    "id": "DP900-242"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "An organization needs to process and visualize business data. The solution must clean and reshape data in a pipeline before loading it into a warehouse. Which option is the best fit?",
    "options": [
      "Extract, transform, load (ETL)",
      "ELT",
      "Stream processing",
      "Normalization"
    ],
    "answer": "Extract, transform, load (ETL)",
    "explanation": "A process in which data is transformed before it is loaded into the target analytical store.",
    "id": "DP900-243"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A data engineer is selecting a service for an analytical workload. The required capability is: A process in which raw data is loaded first and transformed by the target analytical system. Which option should the team identify?",
    "options": [
      "Extract, load, transform (ELT)",
      "ETL",
      "OLTP",
      "Backup and restore"
    ],
    "answer": "Extract, load, transform (ELT)",
    "explanation": "Load raw data into a scalable analytical platform and transform it there.",
    "id": "DP900-244"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company is building an analytics solution in Azure. The solution must load raw data into a scalable analytical platform and transform it there. Which option is the best fit?",
    "options": [
      "Extract, load, transform (ELT)",
      "ETL",
      "OLTP",
      "Backup and restore"
    ],
    "answer": "Extract, load, transform (ELT)",
    "explanation": "A process in which raw data is loaded first and transformed by the target analytical system.",
    "id": "DP900-245"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A data team is designing a reporting and analytics architecture. The required capability is: A cloud data integration service for creating and orchestrating data movement and transformation pipelines. Which option should the team identify?",
    "options": [
      "Azure Data Factory",
      "Power BI",
      "Azure Files",
      "Azure SQL Database"
    ],
    "answer": "Azure Data Factory",
    "explanation": "Schedule a pipeline that copies data from several sources into an analytical store.",
    "id": "DP900-246"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "An organization needs to process and visualize business data. The solution must schedule a pipeline that copies data from several sources into an analytical store. Which option is the best fit?",
    "options": [
      "Azure Data Factory",
      "Power BI",
      "Azure Files",
      "Azure SQL Database"
    ],
    "answer": "Azure Data Factory",
    "explanation": "A cloud data integration service for creating and orchestrating data movement and transformation pipelines.",
    "id": "DP900-247"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A data engineer is selecting a service for an analytical workload. The required capability is: An Apache Spark-based analytics platform for large-scale data engineering, analytics, and machine learning. Which option should the team identify?",
    "options": [
      "Azure Databricks",
      "Azure Files",
      "Azure Table Storage",
      "Power BI Desktop"
    ],
    "answer": "Azure Databricks",
    "explanation": "Use collaborative Spark notebooks to transform a very large dataset.",
    "id": "DP900-248"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company is building an analytics solution in Azure. The solution must use collaborative Spark notebooks to transform a very large dataset. Which option is the best fit?",
    "options": [
      "Azure Databricks",
      "Azure Files",
      "Azure Table Storage",
      "Power BI Desktop"
    ],
    "answer": "Azure Databricks",
    "explanation": "An Apache Spark-based analytics platform for large-scale data engineering, analytics, and machine learning.",
    "id": "DP900-249"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A data team is designing a reporting and analytics architecture. The required capability is: A unified SaaS analytics platform that brings together data engineering, data science, warehousing, real-time analytics, and Power BI. Which option should the team identify?",
    "options": [
      "Microsoft Fabric",
      "Azure Files",
      "Azure DNS",
      "SQL Server on a VM"
    ],
    "answer": "Microsoft Fabric",
    "explanation": "Provide an integrated end-to-end analytics environment with OneLake and Power BI.",
    "id": "DP900-250"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "An organization needs to process and visualize business data. The solution must provide an integrated end-to-end analytics environment with OneLake and Power BI. Which option is the best fit?",
    "options": [
      "Microsoft Fabric",
      "Azure Files",
      "Azure DNS",
      "SQL Server on a VM"
    ],
    "answer": "Microsoft Fabric",
    "explanation": "A unified SaaS analytics platform that brings together data engineering, data science, warehousing, real-time analytics, and Power BI.",
    "id": "DP900-251"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A data engineer is selecting a service for an analytical workload. The required capability is: An analytics service that combines SQL-based data warehousing and big-data analytics capabilities. Which option should the team identify?",
    "options": [
      "Azure Synapse Analytics",
      "Azure Blob Storage",
      "Azure Files",
      "Azure App Service"
    ],
    "answer": "Azure Synapse Analytics",
    "explanation": "Query and analyze large enterprise datasets using integrated SQL and Spark experiences.",
    "id": "DP900-252"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company is building an analytics solution in Azure. The solution must query and analyze large enterprise datasets using integrated SQL and Spark experiences. Which option is the best fit?",
    "options": [
      "Azure Synapse Analytics",
      "Azure Blob Storage",
      "Azure Files",
      "Azure App Service"
    ],
    "answer": "Azure Synapse Analytics",
    "explanation": "An analytics service that combines SQL-based data warehousing and big-data analytics capabilities.",
    "id": "DP900-253"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A data team is designing a reporting and analytics architecture. The required capability is: A managed real-time analytics service that processes streaming events using SQL-like queries. Which option should the team identify?",
    "options": [
      "Azure Stream Analytics",
      "Azure Data Factory",
      "Azure SQL Managed Instance",
      "Power BI Desktop"
    ],
    "answer": "Azure Stream Analytics",
    "explanation": "Calculate rolling averages from live IoT events as they arrive.",
    "id": "DP900-254"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "An organization needs to process and visualize business data. The solution must calculate rolling averages from live IoT events as they arrive. Which option is the best fit?",
    "options": [
      "Azure Stream Analytics",
      "Azure Data Factory",
      "Azure SQL Managed Instance",
      "Power BI Desktop"
    ],
    "answer": "Azure Stream Analytics",
    "explanation": "A managed real-time analytics service that processes streaming events using SQL-like queries.",
    "id": "DP900-255"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A data engineer is selecting a service for an analytical workload. The required capability is: A highly scalable event ingestion service for receiving large streams of telemetry and events. Which option should the team identify?",
    "options": [
      "Azure Event Hubs",
      "Azure Files",
      "Azure SQL Database",
      "Power BI Report Server"
    ],
    "answer": "Azure Event Hubs",
    "explanation": "Ingest millions of device events per second for downstream processing.",
    "id": "DP900-256"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company is building an analytics solution in Azure. The solution must ingest millions of device events per second for downstream processing. Which option is the best fit?",
    "options": [
      "Azure Event Hubs",
      "Azure Files",
      "Azure SQL Database",
      "Power BI Report Server"
    ],
    "answer": "Azure Event Hubs",
    "explanation": "A highly scalable event ingestion service for receiving large streams of telemetry and events.",
    "id": "DP900-257"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A data team is designing a reporting and analytics architecture. The required capability is: A business intelligence platform for connecting to data, modeling it, and creating interactive reports and dashboards. Which option should the team identify?",
    "options": [
      "Power BI",
      "Azure Files",
      "Azure Cosmos DB",
      "Azure Event Hubs"
    ],
    "answer": "Power BI",
    "explanation": "Create an interactive sales dashboard for business users.",
    "id": "DP900-258"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "An organization needs to process and visualize business data. The solution must create an interactive sales dashboard for business users. Which option is the best fit?",
    "options": [
      "Power BI",
      "Azure Files",
      "Azure Cosmos DB",
      "Azure Event Hubs"
    ],
    "answer": "Power BI",
    "explanation": "A business intelligence platform for connecting to data, modeling it, and creating interactive reports and dashboards.",
    "id": "DP900-259"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A data engineer is selecting a service for an analytical workload. The required capability is: A model that defines tables, relationships, calculations, and business logic for reporting. Which option should the team identify?",
    "options": [
      "Power BI semantic model",
      "Blob container",
      "Message queue",
      "File share"
    ],
    "answer": "Power BI semantic model",
    "explanation": "Create reusable measures and relationships for multiple Power BI reports.",
    "id": "DP900-260"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company is building an analytics solution in Azure. The solution must create reusable measures and relationships for multiple Power BI reports. Which option is the best fit?",
    "options": [
      "Power BI semantic model",
      "Blob container",
      "Message queue",
      "File share"
    ],
    "answer": "Power BI semantic model",
    "explanation": "A model that defines tables, relationships, calculations, and business logic for reporting.",
    "id": "DP900-261"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A data team is designing a reporting and analytics architecture. The required capability is: A dimensional model with a central fact table connected to dimension tables. Which option should the team identify?",
    "options": [
      "Star schema",
      "Normalized OLTP schema",
      "Graph traversal",
      "Key-value model"
    ],
    "answer": "Star schema",
    "explanation": "Model sales facts by date, product, customer, and store for reporting.",
    "id": "DP900-262"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "An organization needs to process and visualize business data. The solution must model sales facts by date, product, customer, and store for reporting. Which option is the best fit?",
    "options": [
      "Star schema",
      "Normalized OLTP schema",
      "Graph traversal",
      "Key-value model"
    ],
    "answer": "Star schema",
    "explanation": "A dimensional model with a central fact table connected to dimension tables.",
    "id": "DP900-263"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A data engineer is selecting a service for an analytical workload. The required capability is: A table in a dimensional model that stores measurable business events and foreign keys to dimensions. Which option should the team identify?",
    "options": [
      "Fact table",
      "Dimension table",
      "View only",
      "Blob container"
    ],
    "answer": "Fact table",
    "explanation": "Store sales amount, quantity, date key, and product key for each transaction.",
    "id": "DP900-264"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company is building an analytics solution in Azure. The solution must store sales amount, quantity, date key, and product key for each transaction. Which option is the best fit?",
    "options": [
      "Fact table",
      "Dimension table",
      "View only",
      "Blob container"
    ],
    "answer": "Fact table",
    "explanation": "A table in a dimensional model that stores measurable business events and foreign keys to dimensions.",
    "id": "DP900-265"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A data team is designing a reporting and analytics architecture. The required capability is: A table in a dimensional model that stores descriptive attributes used to filter and group facts. Which option should the team identify?",
    "options": [
      "Dimension table",
      "Fact table",
      "Event stream",
      "Binary file"
    ],
    "answer": "Dimension table",
    "explanation": "Store product name, category, and brand for sales analysis.",
    "id": "DP900-266"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "An organization needs to process and visualize business data. The solution must store product name, category, and brand for sales analysis. Which option is the best fit?",
    "options": [
      "Dimension table",
      "Fact table",
      "Event stream",
      "Binary file"
    ],
    "answer": "Dimension table",
    "explanation": "A table in a dimensional model that stores descriptive attributes used to filter and group facts.",
    "id": "DP900-267"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A data engineer is selecting a service for an analytical workload. The required capability is: A visualization well suited to comparing values across discrete categories. Which option should the team identify?",
    "options": [
      "Bar chart",
      "Line chart",
      "Scatter plot",
      "Card"
    ],
    "answer": "Bar chart",
    "explanation": "Compare total sales across product categories.",
    "id": "DP900-268"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company is building an analytics solution in Azure. The solution must compare total sales across product categories. Which option is the best fit?",
    "options": [
      "Bar chart",
      "Line chart",
      "Scatter plot",
      "Card"
    ],
    "answer": "Bar chart",
    "explanation": "A visualization well suited to comparing values across discrete categories.",
    "id": "DP900-269"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A data team is designing a reporting and analytics architecture. The required capability is: A visualization well suited to showing trends over time. Which option should the team identify?",
    "options": [
      "Line chart",
      "Pie chart",
      "Table only",
      "Gauge"
    ],
    "answer": "Line chart",
    "explanation": "Show monthly revenue across the last two years.",
    "id": "DP900-270"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "An organization needs to process and visualize business data. The solution must show monthly revenue across the last two years. Which option is the best fit?",
    "options": [
      "Line chart",
      "Pie chart",
      "Table only",
      "Gauge"
    ],
    "answer": "Line chart",
    "explanation": "A visualization well suited to showing trends over time.",
    "id": "DP900-271"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A data engineer is selecting a service for an analytical workload. The required capability is: A visualization used to examine the relationship or correlation between two numeric variables. Which option should the team identify?",
    "options": [
      "Scatter chart",
      "Card",
      "Donut chart",
      "Slicer"
    ],
    "answer": "Scatter chart",
    "explanation": "Compare advertising spend with sales revenue for many campaigns.",
    "id": "DP900-272"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company is building an analytics solution in Azure. The solution must compare advertising spend with sales revenue for many campaigns. Which option is the best fit?",
    "options": [
      "Scatter chart",
      "Card",
      "Donut chart",
      "Slicer"
    ],
    "answer": "Scatter chart",
    "explanation": "A visualization used to examine the relationship or correlation between two numeric variables.",
    "id": "DP900-273"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A data team is designing a reporting and analytics architecture. The required capability is: A visualization used to display a single prominent value or KPI. Which option should the team identify?",
    "options": [
      "Card visualization",
      "Scatter chart",
      "Matrix",
      "Decomposition tree"
    ],
    "answer": "Card visualization",
    "explanation": "Show total year-to-date revenue as one large number.",
    "id": "DP900-274"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "An organization needs to process and visualize business data. The solution must show total year-to-date revenue as one large number. Which option is the best fit?",
    "options": [
      "Card visualization",
      "Scatter chart",
      "Matrix",
      "Decomposition tree"
    ],
    "answer": "Card visualization",
    "explanation": "A visualization used to display a single prominent value or KPI.",
    "id": "DP900-275"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A data engineer is selecting a service for an analytical workload. Consider this requirement: Streaming handles continuously arriving events with low latency. Which option best addresses it?",
    "options": [
      "Streaming processing",
      "Monthly batch processing",
      "Manual export",
      "Normalization only"
    ],
    "answer": "Streaming processing",
    "explanation": "Streaming handles continuously arriving events with low latency.",
    "id": "DP900-276"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A company is building an analytics solution in Azure. Consider this requirement: Event Hubs is designed for high-throughput event ingestion. Which option best addresses it?",
    "options": [
      "Azure Event Hubs",
      "Azure Files",
      "Azure SQL Managed Instance",
      "Power BI Desktop"
    ],
    "answer": "Azure Event Hubs",
    "explanation": "Event Hubs is designed for high-throughput event ingestion.",
    "id": "DP900-277"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A data team is designing a reporting and analytics architecture. Consider this requirement: A slicer provides an on-canvas control for filtering report data. Which option best addresses it?",
    "options": [
      "Slicer",
      "Primary key",
      "Stored procedure",
      "Partition key"
    ],
    "answer": "Slicer",
    "explanation": "A slicer provides an on-canvas control for filtering report data.",
    "id": "DP900-278"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "An organization needs to process and visualize business data. Consider this requirement: Pie and donut charts can show proportions effectively when the category count is small. Which option best addresses it?",
    "options": [
      "Pie or donut chart",
      "Scatter chart",
      "Line chart",
      "Detailed table only"
    ],
    "answer": "Pie or donut chart",
    "explanation": "Pie and donut charts can show proportions effectively when the category count is small.",
    "id": "DP900-279"
  },
  {
    "domain": "Describe an analytics workload on Azure",
    "question": "A data engineer is selecting a service for an analytical workload. Consider this requirement: Fact tables contain measurable events and keys to descriptive dimensions. Which option best addresses it?",
    "options": [
      "Fact table",
      "Dimension table",
      "Blob metadata",
      "File share"
    ],
    "answer": "Fact table",
    "explanation": "Fact tables contain measurable events and keys to descriptive dimensions.",
    "id": "DP900-280"
  }
];
