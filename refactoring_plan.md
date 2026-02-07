# Refactoring to Relational Data Model

The user has provided a detailed relational schema. I will refactor the frontend mock services to mimic this structure. This prepares the application for a real backend integration later.

## 1. Mock Database Layout (`src/services/mockDatabase.js`)
We will create a service that manages `localStorage` using the defined table names:
- `users`
- `skill_domains`
- `assessments`
- `questions`
- `answer_options`
- `assessment_attempts`
- `courses`
- `course_enrollments`

## 2. Seed Data
We will migrate the existing mock data from `questions.js` and `courses.js` into this relational structure and seed it if the DB is empty on load.

## 3. Service Layer Updates
- **`authService.js`**: Update to use the `users` table in `mockDatabase`.
- **`assessmentService.js` (New)**: Handle fetching/saving assessments, questions, and results using the new schema.
- **`courseService.js` (New)**: Handle fetching courses and tracking progress.

## 4. UI Updates
- Update `Dashboard.jsx`, `Assessment.jsx`, and `Courses.jsx` to call these new services instead of importing raw data files.
