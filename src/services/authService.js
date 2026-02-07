import { db, TABLES } from './mockDatabase';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const CURRENT_USER_KEY = 'career_improver_current_user';

export const authService = {
    async login(email, password) {
        await delay(800);
        const user = db.find(TABLES.USERS, u => u.email === email && u.password === password);

        if (!user) {
            throw new Error('Invalid email or password');
        }

        // Don't store password in session
        const { password: _, ...userWithoutPassword } = user;
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
        return userWithoutPassword;
    },

    async register(name, email, password) {
        await delay(1000);
        const existing = db.find(TABLES.USERS, u => u.email === email);

        if (existing) {
            throw new Error('User already exists');
        }

        const newUser = db.insert(TABLES.USERS, {
            name,
            email,
            password, // In a real app, hash this!
        });

        const { password: _, ...userWithoutPassword } = newUser;
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
        return userWithoutPassword;
    },

    async loginWithGoogle(profile) {
        await delay(300);

        const { name, email, picture, sub: googleId } = profile;

        // Check if user already exists
        let user = db.find(TABLES.USERS, u => u.email === email);

        if (user) {
            // Link Google account if user registered with email/password before
            if (!user.authProvider) {
                user = db.update(TABLES.USERS, user.id, { authProvider: 'google', googleId, picture });
            }
        } else {
            // Create new user from Google profile
            user = db.insert(TABLES.USERS, {
                name,
                email,
                picture,
                googleId,
                authProvider: 'google',
            });
        }

        const { password: _, ...userWithoutPassword } = user;
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
        return userWithoutPassword;
    },

    async logout() {
        await delay(500);
        localStorage.removeItem(CURRENT_USER_KEY);
    },

    async getCurrentUser() {
        // Check if user is logged in locally
        const userStr = localStorage.getItem(CURRENT_USER_KEY);
        if (!userStr) return null;

        const sessionUser = JSON.parse(userStr);

        // Refresh from DB to get latest state if needed
        const dbUser = db.find(TABLES.USERS, u => u.id === sessionUser.id);
        if (!dbUser) {
            localStorage.removeItem(CURRENT_USER_KEY);
            return null;
        }

        const { password: _, ...userWithoutPassword } = dbUser;
        return userWithoutPassword;
    }
};
