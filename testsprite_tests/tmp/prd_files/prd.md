# Career Improver Platform - Product Requirements Document

## Overview
Career Improver is an education platform that helps users assess their skills and receive personalized course recommendations in software engineering domains.

## Features

### 1. User Authentication
- User registration with name, email, and password
- User login with email/password
- Protected routes requiring authentication
- Logout functionality

### 2. Skill Assessment System
- **5 Skill Domains:**
  - Frontend Development (15 questions)
  - Backend Development (15 questions)
  - Cloud Computing (15 questions)
  - Databases (15 questions)
  - Security (15 questions)
- **Total: 75 Questions**
- Each question has:
  - Multiple choice answers (4 options)
  - Difficulty level (Easy, Medium, Hard)
  - One correct answer
- Assessment results include:
  - Score percentage
  - Skill level classification

### 3. Course Catalog
- Browse available courses
- Filter by skill level (Beginner, Intermediate, Advanced)
- Search courses by title
- View course details

### 4. User Interface
- Full-screen immersive pages with gradient backgrounds
- Glassmorphism design elements
- Orange accent colors
- Responsive navigation

## Technical Requirements
- Each assessment MUST contain exactly 15 questions
- Assessment flow: Domain Selection → Quiz → Results
- Score calculation based on correct answers

## User Flows

### Assessment Flow
1. User logs in
2. User navigates to /assessment
3. User sees 5 domain options
4. User selects a domain (e.g., Frontend Development)
5. User answers 15 questions sequentially
6. User sees results with score and skill level
