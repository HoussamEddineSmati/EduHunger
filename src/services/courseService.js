import { db, TABLES } from './mockDatabase';

export const courseService = {
    getAllCourses: async () => {
        // Join with domains for easier display
        const courses = db.get(TABLES.COURSES);
        const domains = db.get(TABLES.SKILL_DOMAINS);

        return courses.map(c => ({
            ...c,
            domain: domains.find(d => d.id === c.skill_domain_id)
        }));
    },

    getUserEnrollments: async (userId) => {
        const enrollments = db.filter(TABLES.COURSE_ENROLLMENTS, e => e.user_id === userId);
        const courses = db.get(TABLES.COURSES);

        return enrollments.map(e => {
            const course = courses.find(c => c.id === e.course_id);
            return {
                ...e,
                course
            };
        });
    },

    enroll: async (userId, courseId) => {
        const existing = db.find(TABLES.COURSE_ENROLLMENTS, e => e.user_id === userId && e.course_id === courseId);
        if (existing) return existing;

        return db.insert(TABLES.COURSE_ENROLLMENTS, {
            user_id: userId,
            course_id: courseId,
            status: 'in_progress',
            progress_percentage: 0,
            started_at: new Date().toISOString()
        });
    },

    getRecommendations: async (userId) => {
        // 1. Get user skill results
        const results = db.filter(TABLES.SKILL_RESULTS, r => r.user_id === userId);
        const allCourses = await courseService.getAllCourses();

        if (results.length === 0) {
            // Return beginner courses if no results
            return allCourses.filter(c => c.level === 'Beginner').slice(0, 3);
        }

        // 2. Simple logic: Recommend courses one level higher than current skill
        const recommendations = [];
        const nextLevelMap = {
            'Beginner': 'Intermediate',
            'Intermediate': 'Advanced',
            'Advanced': 'Expert'
        };

        results.forEach(res => {
            const targetLevel = nextLevelMap[res.skill_level];
            if (targetLevel) {
                const relevantCourses = allCourses.filter(c =>
                    c.skill_domain_id === res.skill_domain_id && c.level === targetLevel
                );
                recommendations.push(...relevantCourses);
            }
        });

        return recommendations.slice(0, 5);
    }
};
