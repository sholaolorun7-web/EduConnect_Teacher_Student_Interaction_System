# EduConnect – Teacher-Student Interaction System

A responsive frontend mini-project that demonstrates interaction between teachers and students.

## Features
- Teacher and student registration/login with role-based dashboards
- Announcement creation, editing and deletion
- Assignment creation and management
- Text-based student assignment submissions
- Teacher review, grading and feedback
- Student questions and teacher responses
- Search, dashboard statistics and responsive navigation
- Browser Local Storage persistence
- Sample teacher and student demo accounts

## Technologies
- HTML5
- CSS3
- Vanilla JavaScript
- Browser Local Storage and Session Storage

## How to run
1. Extract the ZIP file.
2. Open the `index.html` file in a modern browser.
3. Sign in with one of the demo accounts or create a new account.

### Demo accounts
**Teacher**
- Email: `teacher@educonnect.demo`
- Password: `teach123`

**Student**
- Email: `student@educonnect.demo`
- Password: `learn123`

## Important limitations
This is a frontend academic demonstration, not a production-ready multi-user system. Data is stored locally in the browser and is not synchronized between devices or browsers. Authentication is for demonstration only; passwords are not securely protected. A real deployment for independent users requires a secure backend, server-side authentication and a shared database.

## Project structure
- `index.html` – application entry point and authentication interface
- `css/style.css` – visual design and responsive styles
- `js/storage.js` – Local Storage data layer and demo seed data
- `js/app.js` – authentication, dashboards and application functionality

## Reset demo data
Use the browser developer tools to clear Local Storage key `educonnect_db_v1` and refresh the page. The sample data will be recreated automatically.
