/**
 * Mock Database Implementation based on User's Relational Schema
 * Uses localStorage to persist relational-like data tables.
 */

import { questionsData } from './questionsData.js';

// Schema Table Names
const TABLES = {
    USERS: 'users',
    SKILL_DOMAINS: 'skill_domains',
    ASSESSMENTS: 'assessments',
    QUESTIONS: 'questions',
    ANSWER_OPTIONS: 'answer_options',
    ASSESSMENT_ATTEMPTS: 'assessment_attempts',
    USER_ANSWERS: 'user_answers',
    SKILL_RESULTS: 'skill_results',
    COURSES: 'courses',
    LESSONS: 'lessons',
    COURSE_ENROLLMENTS: 'course_enrollments',
    LESSON_PROGRESS: 'lesson_progress',
    RECOMMENDATIONS: 'course_recommendations'
};

// Transform questions data into database format
const transformQuestions = () => {
    const questions = [];
    const answerOptions = [];

    // Map domain codes to assessment IDs
    const domainMap = {
        frontend: 'asm_1',
        backend: 'asm_2',
        cloud: 'asm_3',
        databases: 'asm_4',
        security: 'asm_5'
    };

    // Process each domain's questions
    Object.entries(questionsData).forEach(([domain, domainQuestions]) => {
        const assessmentId = domainMap[domain];

        domainQuestions.forEach((q) => {
            // Add question
            questions.push({
                id: q.id,
                assessment_id: assessmentId,
                question_text: q.text,
                difficulty_level: q.difficulty
            });

            // Add answer options for this question
            q.options.forEach((opt) => {
                answerOptions.push({
                    id: opt.id,
                    question_id: q.id,
                    answer_text: opt.text,
                    is_correct: opt.correct
                });
            });
        });
    });

    return { questions, answerOptions };
};

const { questions, answerOptions } = transformQuestions();

// Seed Data
const SEED_DATA = {
    [TABLES.SKILL_DOMAINS]: [
        { id: 'dom_1', name: 'Frontend Development', description: 'HTML, CSS, React, Performance' },
        { id: 'dom_2', name: 'Backend Development', description: 'Node.js, Databases, API Architecture' },
        { id: 'dom_3', name: 'Cloud Computing', description: 'AWS, Docker, CI/CD' },
        { id: 'dom_4', name: 'Databases', description: 'SQL, NoSQL, Modeling' },
        { id: 'dom_5', name: 'Security', description: 'Auth, OWASP, Encryption' }
    ],
    [TABLES.ASSESSMENTS]: [
        { id: 'asm_1', skill_domain_id: 'dom_1', title: 'Frontend Mastery Assessment', total_questions: 15 },
        { id: 'asm_2', skill_domain_id: 'dom_2', title: 'Backend Fundamentals', total_questions: 15 },
        { id: 'asm_3', skill_domain_id: 'dom_3', title: 'Cloud Computing Essentials', total_questions: 15 },
        { id: 'asm_4', skill_domain_id: 'dom_4', title: 'Database Mastery', total_questions: 15 },
        { id: 'asm_5', skill_domain_id: 'dom_5', title: 'Security Best Practices', total_questions: 15 }
    ],
    [TABLES.QUESTIONS]: questions,
    [TABLES.ANSWER_OPTIONS]: answerOptions,
    [TABLES.COURSES]: [
        { id: 'crs_1', skill_domain_id: 'dom_1', title: 'Advanced React Hooks', description: 'Master hooks.', level: 'Advanced', estimated_hours: 4.5 },
        { id: 'crs_2', skill_domain_id: 'dom_3', title: 'Cloud Architecture Basics', description: 'Intro to AWS.', level: 'Beginner', estimated_hours: 6 },
        { id: 'crs_3', skill_domain_id: 'dom_2', title: 'Node.js Microservices', description: 'Scalable backends.', level: 'Intermediate', estimated_hours: 8 }
    ]
};

// Helper to simulate delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class MockDatabase {
    constructor() {
        this.init();
    }

    init() {
        // Database version - increment this when seed data changes
        const DB_VERSION = '2.0'; // Changed from 1.0 to force reload with 75 questions
        const currentVersion = localStorage.getItem('db_version');

        // Check if initialized or version changed
        if (!localStorage.getItem('db_initialized') || currentVersion !== DB_VERSION) {
            console.log('Initializing Mock DB with 75 questions (15 per domain)...');

            // IMPORTANT: Only clear SEED data tables, not user data tables
            // This preserves user registrations, attempts, and progress when DB version changes
            const SEED_TABLES = [
                TABLES.SKILL_DOMAINS,
                TABLES.ASSESSMENTS,
                TABLES.QUESTIONS,
                TABLES.ANSWER_OPTIONS,
                TABLES.COURSES
            ];

            // Clear only seed data tables
            SEED_TABLES.forEach(table => {
                localStorage.removeItem(table);
            });

            // Seed new data
            Object.entries(SEED_DATA).forEach(([table, data]) => {
                this.save(table, data);
            });

            // Initialize empty tables
            [TABLES.USERS, TABLES.ASSESSMENT_ATTEMPTS, TABLES.USER_ANSWERS, TABLES.SKILL_RESULTS, TABLES.COURSE_ENROLLMENTS, TABLES.LESSON_PROGRESS, TABLES.RECOMMENDATIONS].forEach(table => {
                if (!localStorage.getItem(table)) this.save(table, []);
            });

            localStorage.setItem('db_initialized', 'true');
            localStorage.setItem('db_version', DB_VERSION);

            const userCount = this.get(TABLES.USERS).length;
            console.log(`Database initialized with ${questions.length} questions total`);
            console.log(`Preserved ${userCount} existing user(s)`);
        }
    }

    get(table) {
        return JSON.parse(localStorage.getItem(table) || '[]');
    }

    save(table, data) {
        localStorage.setItem(table, JSON.stringify(data));
    }

    insert(table, item) {
        const data = this.get(table);
        const newItem = { ...item, id: item.id || crypto.randomUUID(), created_at: new Date().toISOString() };
        data.push(newItem);
        this.save(table, data);
        return newItem;
    }

    update(table, id, updates) {
        const data = this.get(table);
        const index = data.findIndex(i => i.id === id);
        if (index === -1) throw new Error(`Item ${id} not found in ${table}`);

        const updatedItem = { ...data[index], ...updates, updated_at: new Date().toISOString() };
        data[index] = updatedItem;
        this.save(table, data);
        return updatedItem;
    }

    find(table, predicate) {
        return this.get(table).find(predicate);
    }

    filter(table, predicate) {
        return this.get(table).filter(predicate);
    }
}

export const db = new MockDatabase();
export { TABLES };
