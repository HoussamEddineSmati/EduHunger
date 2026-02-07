# Registration Database Persistence Test

## Problem Identified
When the database version changed (to load 75 questions), it was clearing ALL localStorage tables including the `users` table. This meant registered users were being deleted on page refresh.

## Fix Applied
Modified `mockDatabase.js` to only clear seed data tables (questions, assessments, courses) and preserve user data tables (users, attempts, progress) when the database version changes.

## Manual Test Steps

### Test 1: User Registration and Persistence
1. Open http://localhost:5173 in your browser
2. Open Browser Console (F12 → Console tab)
3. Navigate to /register
4. Register a new user:
   - Name: Test User
   - Email: test@example.com  
   - Password: password123
5. **Check Console** - You should see:
   ```
   Initializing Mock DB with 75 questions (15 per domain)...
   Database initialized with 75 questions total
   Preserved 1 existing user(s)
   ```
6. **Verify in Console:**
   ```javascript
   JSON.parse(localStorage.getItem('users'))
   // Should show an array with your new user
   ```
7. **Refresh the page** (F5)
8. **Check Console again** - Should still show "Preserved 1 existing user(s)"
9. **Verify user still exists:**
   ```javascript
   JSON.parse(localStorage.getItem('users'))
   // Should still show your user
   ```
10. You should still be logged in (not redirected to login page)

### Test 2: Multiple Users
1. Logout
2. Register another user with different email
3. Check console: Should show "Preserved 2 existing user(s)"
4. Verify in console:
   ```javascript
   JSON.parse(localStorage.getItem('users')).length
   // Should return 2
   ```

### Test 3: Assessment Questions
1. Login and go to /assessment
2. Select any domain (e.g., Frontend Development)
3. Verify you see "Question 1 of 15" (not "Question 1 of 3")
4. Complete the assessment to verify all 15 questions work

## Expected Results
✅ Users persist after page refresh
✅ Database version updates don't delete users
✅ Each assessment has 15 questions
✅ User sessions persist correctly

## Debugging Commands
If you need to debug, use these in the browser console:

```javascript
// Check database version
localStorage.getItem('db_version')

// Check all users
JSON.parse(localStorage.getItem('users'))

// Check current logged-in user
JSON.parse(localStorage.getItem('career_improver_current_user'))

// Check questions count
JSON.parse(localStorage.getItem('questions')).length

// Reset everything (if needed)
localStorage.clear()
```
