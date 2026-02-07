# SQL Server Setup Guide

I have created the T-SQL scripts to set up your Sql Server database for the Career Improver project.

## Files Created
1.  **`database/schema.sql`**: Contains the table definitions, relationships (Foreign Keys), and constraints.
2.  **`database/seed.sql`**: Contains initial demo data for Domains, Questions, and Courses.

## How to Run

### Option 1: Using SQL Server Management Studio (SSMS)
1.  Open SSMS and connect to your SQL Server instance.
2.  Create a new Empty Database called `CareerImproverDB`.
3.  Open `database/schema.sql` (File -> Open -> File...).
4.  Ensure `CareerImproverDB` is selected in the dropdown.
5.  Click **Execute**.
6.  Open `database/seed.sql`.
7.  Click **Execute**.

### Option 2: Using SQLCMD (Command Line)
If you have the command line tools installed:
```bash
sqlcmd -S . -d CareerImproverDB -i database/schema.sql
sqlcmd -S . -d CareerImproverDB -i database/seed.sql
```

## Next Steps for Integration
To connect your React application to this SQL Server database, you will need a backend API (Node.js/Express `backend` folder) because browsers cannot connect directly to SQL Server for security reasons.

The recommended stack would be:
`React App` -> `Node.js API (Express + mssql/Sequelize/TypeORM)` -> `SQL Server`
