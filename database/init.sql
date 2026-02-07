IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'CareerImproverDB')
BEGIN
    CREATE DATABASE CareerImproverDB;
END
GO
