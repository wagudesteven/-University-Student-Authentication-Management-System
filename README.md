🎓 University Student Authentication & Management System (UPDATED)

A full-stack university portal built with:

Next.js (Frontend)
Django REST Framework (Backend)
JWT Authentication (SimpleJWT)

The system manages three roles: Admin, Lecturer, Student.

📌 SYSTEM ROLES (IMPORTANT FIX)
👨‍💼 Admin (Django Superuser only)
Creates student accounts
Manages system data
Uses Django admin panel only
❌ Does NOT use frontend
👨‍🏫 Lecturer
Self-registers account
Logs in via frontend
Adds student results
Views students & results
❌ Cannot create student accounts
👨‍🎓 Student
No registration allowed
Account created by admin
Logs in only
Views results and academic info
🛠 Tech Stack
Frontend
Next.js 16
TypeScript
Tailwind CSS
NextAuth.js
Axios
Backend
Django
Django REST Framework
Simple JWT
SQLite
📂 Project Structure
Student-auth/
│
├── frontend/
│   ├── app/
│   │   ├── dashboard/
│   │   ├── login/
│   │   ├── lecturer/
│   │   ├── student/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│
├── backend/
│   ├── accounts/
│   ├── config/
│   ├── manage.py
│   └── db.sqlite3
│
└── README.md
⚙️ INSTALLATION
1. Clone repository
git clone <your-repo-url>
cd Student-auth
2. Backend setup
cd backend
python -m venv venv
venv\Scripts\activate
pip install django djangorestframework djangorestframework-simplejwt django-cors-headers
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver

Backend runs at:

http://127.0.0.1:8000
3. Frontend setup
cd frontend
npm install
npm install next-auth axios
npm run dev

Frontend runs at:

http://localhost:3000
🔐 AUTHENTICATION FLOW
Lecturer Login
Lecturer Login
   ↓
NextAuth Credentials
   ↓
Django JWT (/api/token/)
   ↓
Lecturer Dashboard
Student Login
Student Login
   ↓
NextAuth Credentials
   ↓
Django JWT (/api/token/)
   ↓
Student Dashboard
📡 API ENDPOINTS (UPDATED)
Authentication
POST /api/token/
POST /api/token/refresh/
👨‍🏫 Lecturer APIs
POST /api/lecturer/register/
POST /api/lecturer/add-result/
GET  /api/student/results/
👨‍💼 Admin APIs (Django only)
Django Admin Panel:
- Create student accounts
- Manage users
🎓 FEATURES (UPDATED)
👨‍💼 Admin
Create student accounts
Manage system users
Control academic structure
👨‍🏫 Lecturer
Self registration
Login
Add student results
View students and results
👨‍🎓 Student
Login only
View results
View profile
View academic progress
📊 STUDENT DASHBOARD

Displays:

Name
Admission number
Course
Units
CAT marks
Exam marks
Final grade
Semester info
🔒 SECURITY MODEL
JWT authentication
Role-based access control
Protected APIs
Admin-only student creation
Lecturer result entry restricted
🚀 FUTURE IMPROVEMENTS
GPA calculation
Transcript generation
PDF result downloads
Email notifications
Semester scheduling
Fee system integration
Analytics dashboard
👨‍💻 AUTHOR

Stephen Ouma Wagude
University Student Authentication System – 2026