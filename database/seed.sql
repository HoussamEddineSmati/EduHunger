USE CareerImproverDB;
GO

-- Seed Data for Skill Domains
INSERT INTO SkillDomains (Name, Description, Icon) VALUES 
('Frontend Development', 'HTML, CSS, React, Performance', 'Layout'),
('Backend Development', 'Node.js, Databases, API Architecture', 'Server'),
('Cloud Computing', 'AWS, Docker, CI/CD', 'Cloud'),
('Databases', 'SQL, NoSQL, Data Modeling', 'Database'),
('Security', 'Auth, Encryption, OWASP', 'Shield');
GO

-- Seed Assessments (One per domain)
INSERT INTO Assessments (SkillDomainId, Title, TotalQuestions)
SELECT Id, Name + ' Fundamentals', 5 FROM SkillDomains;
GO

-- Variables
DECLARE @FrontendId INT = (SELECT Id FROM SkillDomains WHERE Name = 'Frontend Development');
DECLARE @BackendId INT = (SELECT Id FROM SkillDomains WHERE Name = 'Backend Development');
DECLARE @CloudId INT = (SELECT Id FROM SkillDomains WHERE Name = 'Cloud Computing');
DECLARE @DbId INT = (SELECT Id FROM SkillDomains WHERE Name = 'Databases');
DECLARE @SecurityId INT = (SELECT Id FROM SkillDomains WHERE Name = 'Security');

DECLARE @FrontendAssessmentId INT = (SELECT Id FROM Assessments WHERE SkillDomainId = @FrontendId);
DECLARE @BackendAssessmentId INT = (SELECT Id FROM Assessments WHERE SkillDomainId = @BackendId);

----------------------
-- FRONTEND QUESTIONS
----------------------
INSERT INTO Questions (AssessmentId, QuestionText, DifficultyLevel) VALUES
(@FrontendAssessmentId, 'Which HTML5 tag is used to define navigation links?', 'Beginner'),
(@FrontendAssessmentId, 'What is the purpose of the useEffect hook in React?', 'Intermediate'),
(@FrontendAssessmentId, 'Which CSS property triggers hardware acceleration?', 'Advanced'),
(@FrontendAssessmentId, 'What is a Closure in JavaScript?', 'Intermediate'),
(@FrontendAssessmentId, 'Which of the following creates a microtask in JavaScript?', 'Advanced');

-- Answers
DECLARE @QId INT;

-- Q1
SELECT @QId = Id FROM Questions WHERE QuestionText LIKE 'Which HTML5 tag%';
INSERT INTO AnswerOptions (QuestionId, AnswerText, IsCorrect) VALUES
(@QId, '<navigation>', 0),
(@QId, '<nav>', 1),
(@QId, '<links>', 0),
(@QId, '<menu>', 0);

-- Q2
SELECT @QId = Id FROM Questions WHERE QuestionText LIKE 'What is the purpose of the useEffect%';
INSERT INTO AnswerOptions (QuestionId, AnswerText, IsCorrect) VALUES
(@QId, 'To manage state', 0),
(@QId, 'To perform side effects', 1),
(@QId, 'To optimize rendering', 0),
(@QId, 'To create context', 0);

-- Q3
SELECT @QId = Id FROM Questions WHERE QuestionText LIKE 'Which CSS property triggers%';
INSERT INTO AnswerOptions (QuestionId, AnswerText, IsCorrect) VALUES
(@QId, 'transform: translate3d(0,0,0)', 1),
(@QId, 'acceleration: true', 0),
(@QId, 'gpu: on', 0),
(@QId, 'optimize: speed', 0);

-- Q4 Closure
SELECT @QId = Id FROM Questions WHERE QuestionText LIKE 'What is a Closure%';
INSERT INTO AnswerOptions (QuestionId, AnswerText, IsCorrect) VALUES
(@QId, 'A function that has no return value', 0),
(@QId, 'A function combined with its lexical environment', 1),
(@QId, 'A method to close a database connection', 0),
(@QId, 'A variable that cannot be changed', 0);

-- Q5 Microtask
SELECT @QId = Id FROM Questions WHERE QuestionText LIKE 'Which of the following creates a microtask%';
INSERT INTO AnswerOptions (QuestionId, AnswerText, IsCorrect) VALUES
(@QId, 'setTimeout', 0),
(@QId, 'setInterval', 0),
(@QId, 'Promise.resolve().then()', 1),
(@QId, 'requestAnimationFrame', 0);

----------------------
-- BACKEND QUESTIONS
----------------------
INSERT INTO Questions (AssessmentId, QuestionText, DifficultyLevel) VALUES
(@BackendAssessmentId, 'What does REST stand for?', 'Beginner'),
(@BackendAssessmentId, 'Which HTTP method is idempotent?', 'Intermediate');

-- Q1 REST
SELECT @QId = Id FROM Questions WHERE AssessmentId = @BackendAssessmentId AND QuestionText LIKE 'What does REST stand for%';
INSERT INTO AnswerOptions (QuestionId, AnswerText, IsCorrect) VALUES
(@QId, 'Remote Execution State Transfer', 0),
(@QId, 'Representational State Transfer', 1),
(@QId, 'Reliable Server Technology', 0),
(@QId, 'Real-time Service Transaction', 0);

-- Q2 Idempotent
SELECT @QId = Id FROM Questions WHERE AssessmentId = @BackendAssessmentId AND QuestionText LIKE 'Which HTTP method is idempotent%';
INSERT INTO AnswerOptions (QuestionId, AnswerText, IsCorrect) VALUES
(@QId, 'POST', 0),
(@QId, 'PUT', 1),
(@QId, 'PATCH', 0),
(@QId, 'CONNECT', 0);

----------------------
-- COURSES
----------------------
-- 1. Advanced React Hooks (Frontend)
INSERT INTO Courses (SkillDomainId, Title, Description, Level, EstimatedHours, ThumbnailUrl) VALUES
(@FrontendId, 'Advanced React Hooks', 'Master the built-in hooks and learn to create your own custom hooks for complex logic.', 'Advanced', 4.5, 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');

-- 2. Cloud Architecture Basics (Cloud)
INSERT INTO Courses (SkillDomainId, Title, Description, Level, EstimatedHours, ThumbnailUrl) VALUES
(@CloudId, 'Cloud Architecture Basics', 'Understand the fundamentals of cloud computing, AWS services, and deployment strategies.', 'Beginner', 6.25, 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');

-- 3. PostgreSQL Performance Tuning (Database)
INSERT INTO Courses (SkillDomainId, Title, Description, Level, EstimatedHours, ThumbnailUrl) VALUES
(@DbId, 'PostgreSQL Performance Tuning', 'Learn how to optimize queries, use indexes effectively, and manage database performance.', 'Advanced', 5.75, 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');

-- 4. Web Security Fundamentals (Security)
INSERT INTO Courses (SkillDomainId, Title, Description, Level, EstimatedHours, ThumbnailUrl) VALUES
(@SecurityId, 'Web Security Fundamentals', 'Protect your applications from common vulnerabilities like XSS, CSRF, and SQL Injection.', 'Intermediate', 3.33, 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');

-- 5. Node.js Microservices (Backend)
INSERT INTO Courses (SkillDomainId, Title, Description, Level, EstimatedHours, ThumbnailUrl) VALUES
(@BackendId, 'Node.js Microservices', 'Build scalable microservices using Node.js, Express, and Docker.', 'Intermediate', 8.0, 'https://images.unsplash.com/photo-1564865878688-9a2444391823?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');

GO
