import { db, TABLES } from './mockDatabase';

export const assessmentService = {
    getDomains: async () => {
        return db.get(TABLES.SKILL_DOMAINS);
    },

    getAssessmentByDomain: async (domainId) => {
        const assessments = db.filter(TABLES.ASSESSMENTS, a => a.skill_domain_id === domainId);
        if (!assessments.length) return null;

        // For demo, just picking the first one
        const assessment = assessments[0];

        // Hydrate questions and options
        const questions = db.filter(TABLES.QUESTIONS, q => q.assessment_id === assessment.id).map(q => {
            const options = db.filter(TABLES.ANSWER_OPTIONS, opt => opt.question_id === q.id);
            return { ...q, options }; // Attach options to question
        });

        return { ...assessment, questions };
    },

    submitAssessment: async (userId, assessmentId, answers) => {
        // 1. Create Attempt
        const attempt = db.insert(TABLES.ASSESSMENT_ATTEMPTS, {
            user_id: userId,
            assessment_id: assessmentId,
            completed_at: new Date().toISOString()
        });

        let correctCount = 0;
        const questions = db.filter(TABLES.QUESTIONS, q => q.assessment_id === assessmentId);

        // 2. Save User Answers
        Object.entries(answers).forEach(([questionId, optionId]) => {
            const option = db.find(TABLES.ANSWER_OPTIONS, opt => opt.id === optionId);
            const isCorrect = option?.is_correct || false;
            if (isCorrect) correctCount++;

            db.insert(TABLES.USER_ANSWERS, {
                attempt_id: attempt.id,
                question_id: questionId,
                answer_option_id: optionId,
                is_correct: isCorrect
            });
        });

        // 3. Calculate Score & Level
        const score = Math.round((correctCount / questions.length) * 100);
        let level = 'Beginner';
        if (score > 80) level = 'Expert';
        else if (score > 60) level = 'Advanced';
        else if (score > 40) level = 'Intermediate';

        // Update attempt with results
        const updatedAttempt = db.update(TABLES.ASSESSMENT_ATTEMPTS, attempt.id, {
            score,
            skill_level: level
        });

        // 4. Update aggregated Skill Result
        const assessment = db.find(TABLES.ASSESSMENTS, a => a.id === assessmentId);

        const existingResult = db.find(TABLES.SKILL_RESULTS, r => r.user_id === userId && r.skill_domain_id === assessment.skill_domain_id);

        if (existingResult) {
            db.update(TABLES.SKILL_RESULTS, existingResult.id, { score, skill_level: level });
        } else {
            db.insert(TABLES.SKILL_RESULTS, {
                user_id: userId,
                skill_domain_id: assessment.skill_domain_id,
                score,
                skill_level: level
            });
        }

        return updatedAttempt;
    },

    getUserResults: async (userId) => {
        return db.filter(TABLES.SKILL_RESULTS, r => r.user_id === userId);
    }
};
