param (
    [string]$Server = "."
)

$scriptOwner = $PSScriptRoot

Write-Host "Setting up CareerImprover Database on server '$Server'..." -ForegroundColor Cyan

# 1. Create Database
Write-Host "1. Initializing Database..."
Invoke-Expression "sqlcmd -S $Server -i `"$scriptOwner\init.sql`""
if ($LASTEXITCODE -ne 0) { 
    Write-Error "Failed to initialize database. Ensure SQL Server is running and accessible."
    exit 1 
}

# 2. Run Schema
Write-Host "2. Creating Tables..."
Invoke-Expression "sqlcmd -S $Server -i `"$scriptOwner\schema.sql`""
if ($LASTEXITCODE -ne 0) { 
    Write-Error "Failed to apply schema."
    exit 1 
}

# 3. Seed Data
Write-Host "3. Seeding Data..."
Invoke-Expression "sqlcmd -S $Server -i `"$scriptOwner\seed.sql`""
if ($LASTEXITCODE -ne 0) { 
    Write-Error "Failed to seed data."
    exit 1 
}

Write-Host "Database build complete! 🚀" -ForegroundColor Green
