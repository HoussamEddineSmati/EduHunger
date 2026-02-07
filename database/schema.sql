-- Create Database
-- CREATE DATABASE CareerImproverDB;
-- GO
USE CareerImproverDB;
GO

-- 1. Users & Auth
CREATE TABLE Users (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(255) NOT NULL UNIQUE,
    PasswordHash NVARCHAR(255) NOT NULL, -- Store hashed passwords
    CreatedAt DATETIME2 DEFAULT GETDATE(),
    UpdatedAt DATETIME2 DEFAULT GETDATE()
);
GO

-- 2. metadata for Skills
CREATE TABLE SkillDomains (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL UNIQUE, -- Frontend, Backend, etc.
    Description NVARCHAR(500),
    Icon NVARCHAR(50) -- Icon name in UI library
);
GO

-- 3. Assessments
CREATE TABLE Assessments (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    SkillDomainId INT NOT NULL,
    Title NVARCHAR(200) NOT NULL,
    Description NVARCHAR(MAX),
    TotalQuestions INT DEFAULT 15,
    CreatedAt DATETIME2 DEFAULT GETDATE(),
    CONSTRAINT FK_Assessments_SkillDomains FOREIGN KEY (SkillDomainId) REFERENCES SkillDomains(Id)
);
GO

-- 4. Questions
CREATE TABLE Questions (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    AssessmentId INT NOT NULL,
    QuestionText NVARCHAR(MAX) NOT NULL,
    DifficultyLevel NVARCHAR(50) CHECK (DifficultyLevel IN ('Beginner', 'Intermediate', 'Advanced', 'Expert')),
    CreatedAt DATETIME2 DEFAULT GETDATE(),
    CONSTRAINT FK_Questions_Assessments FOREIGN KEY (AssessmentId) REFERENCES Assessments(Id) ON DELETE CASCADE
);
GO

-- 5. Answers
CREATE TABLE AnswerOptions (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    QuestionId INT NOT NULL,
    AnswerText NVARCHAR(MAX) NOT NULL,
    IsCorrect BIT DEFAULT 0,
    CONSTRAINT FK_AnswerOptions_Questions FOREIGN KEY (QuestionId) REFERENCES Questions(Id) ON DELETE CASCADE
);
GO

-- 6. User Activity - Assessment Attempts
CREATE TABLE AssessmentAttempts (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT NOT NULL,
    AssessmentId INT NOT NULL,
    Score INT NOT NULL, -- Percentage 0-100
    SkillLevel NVARCHAR(50),
    CompletedAt DATETIME2 DEFAULT GETDATE(),
    CONSTRAINT FK_AssessmentAttempts_Users FOREIGN KEY (UserId) REFERENCES Users(Id) ON DELETE CASCADE,
    CONSTRAINT FK_AssessmentAttempts_Assessments FOREIGN KEY (AssessmentId) REFERENCES Assessments(Id)
);
GO

-- 7. User Activity - Detailed Answers (Optional for detailed analytics)
CREATE TABLE UserAnswers (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    AttemptId INT NOT NULL,
    QuestionId INT NOT NULL,
    AnswerOptionId INT NOT NULL,
    IsCorrect BIT NOT NULL,
    CONSTRAINT FK_UserAnswers_Attempts FOREIGN KEY (AttemptId) REFERENCES AssessmentAttempts(Id) ON DELETE CASCADE,
    CONSTRAINT FK_UserAnswers_Questions FOREIGN KEY (QuestionId) REFERENCES Questions(Id), -- No cascade, keep history even if question changes? Debatable.
    CONSTRAINT FK_UserAnswers_Options FOREIGN KEY (AnswerOptionId) REFERENCES AnswerOptions(Id)
);
GO

-- 8. Aggregated Skill Results (For fast lookup of user level)
CREATE TABLE SkillResults (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT NOT NULL,
    SkillDomainId INT NOT NULL,
    Score INT NOT NULL,
    SkillLevel NVARCHAR(50),
    LastAssessedAt DATETIME2 DEFAULT GETDATE(),
    CONSTRAINT FK_SkillResults_Users FOREIGN KEY (UserId) REFERENCES Users(Id) ON DELETE CASCADE,
    CONSTRAINT FK_SkillResults_Domains FOREIGN KEY (SkillDomainId) REFERENCES SkillDomains(Id)
);
GO

-- 9. Courses
CREATE TABLE Courses (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    SkillDomainId INT NOT NULL,
    Title NVARCHAR(200) NOT NULL,
    Description NVARCHAR(MAX),
    Level NVARCHAR(50), -- Beginner, Intermediate, Advanced
    EstimatedHours DECIMAL(5,2),
    ThumbnailUrl NVARCHAR(500),
    CreatedAt DATETIME2 DEFAULT GETDATE(),
    CONSTRAINT FK_Courses_Domains FOREIGN KEY (SkillDomainId) REFERENCES SkillDomains(Id)
);
GO

-- 10. Lessons
CREATE TABLE Lessons (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    CourseId INT NOT NULL,
    Title NVARCHAR(200) NOT NULL,
    Content NVARCHAR(MAX), -- Markdown or HTML
    OrderIndex INT NOT NULL,
    DurationMinutes INT,
    CONSTRAINT FK_Lessons_Courses FOREIGN KEY (CourseId) REFERENCES Courses(Id) ON DELETE CASCADE
);
GO

-- 11. Enrollments
CREATE TABLE CourseEnrollments (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT NOT NULL,
    CourseId INT NOT NULL,
    ProgressPercentage INT DEFAULT 0,
    Status NVARCHAR(50) DEFAULT 'not_started' CHECK (Status IN ('not_started', 'in_progress', 'completed')),
    StartedAt DATETIME2 DEFAULT GETDATE(),
    CompletedAt DATETIME2,
    CONSTRAINT FK_Enrollments_Users FOREIGN KEY (UserId) REFERENCES Users(Id) ON DELETE CASCADE,
    CONSTRAINT FK_Enrollments_Courses FOREIGN KEY (CourseId) REFERENCES Courses(Id) ON DELETE CASCADE
);
GO

-- 12. Detailed Lesson Progress
CREATE TABLE LessonProgress (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT NOT NULL,
    LessonId INT NOT NULL,
    Completed BIT DEFAULT 0,
    CompletedAt DATETIME2,
    CONSTRAINT FK_LessonProgress_Users FOREIGN KEY (UserId) REFERENCES Users(Id) ON DELETE CASCADE,
    CONSTRAINT FK_LessonProgress_Lessons FOREIGN KEY (LessonId) REFERENCES Lessons(Id) ON DELETE CASCADE
);
GO

-- 13. AI Recommendations
CREATE TABLE CourseRecommendations (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT NOT NULL,
    CourseId INT NOT NULL,
    Reason NVARCHAR(255),
    CreatedAt DATETIME2 DEFAULT GETDATE(),
    CONSTRAINT FK_Recommendations_Users FOREIGN KEY (UserId) REFERENCES Users(Id) ON DELETE CASCADE,
    CONSTRAINT FK_Recommendations_Courses FOREIGN KEY (CourseId) REFERENCES Courses(Id) ON DELETE CASCADE
);
GO
