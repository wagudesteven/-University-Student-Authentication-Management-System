# 🎓 University Student Authentication & Management System

A full-stack university student portal built with **Next.js + Django REST Framework + JWT Authentication**.

This system allows university administrators to manage student accounts while students securely log in and manage academic services such as unit registration, hostel application, and fee tracking.

---

# 📌 Features

## 👨‍💼 Admin

Administrators can:

- Create student accounts
- Delete student accounts
- Update student records
- Approve hostel applications
- Update fee balances
- Publish semester information
- Manage academic units
- Approve student registration

---

## 👨‍🎓 Student

Students can:

- Login securely
- View student dashboard
- View profile details
- Change password
- Register for semester
- Register academic units
- Apply for hostel
- View hostel approval status
- View fee balance
- View semester information

---

# 🛠 Tech Stack

## Frontend

Built with:

- Next.js 16
- TypeScript
- Tailwind CSS
- NextAuth.js
- Axios

---

## Backend

Built with:

- Django
- Django REST Framework
- Simple JWT
- SQLite

---

# 📂 Project Structure

```bash
Student-auth/
│
├── frontend/
│   ├── app/
│   │   ├── dashboard/
│   │   ├── login/
│   │   ├── register/
│   │   ├── api/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── public/
│   ├── package.json
│   └── .env.local
│
├── backend/
│   ├── accounts/
│   ├── config/
│   ├── manage.py
│   └── db.sqlite3
│
└── README.md
```

---

# ⚙️ Installation

# 1. Clone repository

```bash
git clone <your-repo-url>
cd Student-auth
```

---

# 2. Backend setup

Go to backend:

```bash
cd backend
```

Create virtual environment:

### Windows PowerShell

```powershell
python -m venv venv
```

Activate:

```powershell
venv\Scripts\activate
```

Install packages:

```bash
pip install django
pip install djangorestframework
pip install djangorestframework-simplejwt
pip install django-cors-headers
```

Run migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

Create admin:

```bash
python manage.py createsuperuser
```

Start server:

```bash
python manage.py runserver
```

Backend runs at:

```bash
http://127.0.0.1:8000
```

---

# 3. Frontend setup

Go to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Install auth packages:

```bash
npm install next-auth axios
```

Create environment file:

`.env.local`

```env
NEXTAUTH_SECRET=mysecretkey123456
NEXTAUTH_URL=http://localhost:3000
```

Run frontend:

```bash
npm run dev
```

Frontend runs at:

```bash
http://localhost:3000
```

---

# 🔐 Authentication Flow

Student login uses:

- Django REST JWT login endpoint
- NextAuth credentials provider

Flow:

```text
Student Login
      ↓
NextAuth Credentials
      ↓
Django JWT /api/auth/login/
      ↓
Access Token
      ↓
Protected Dashboard
```

---

# 📡 API Endpoints

## Authentication

```bash
POST /api/auth/register/
POST /api/auth/login/
POST /api/auth/refresh/
GET /api/auth/profile/
```

---

# 🎓 Student Dashboard

Dashboard shows:

- Username
- Admission number
- Course
- Year of study
- Semester
- Fee balance
- Hostel status
- Unit registration access

Rules:

### Units registration

Allowed only if:

```text
Fee balance = cleared
```

---

### Hostel application

Allowed only if:

```text
Fee balance = cleared
```

Status:

- Pending
- Approved
- Rejected

---

# 🔒 Security

Uses:

- JWT tokens
- Protected routes
- Session handling with NextAuth
- Admin controlled student creation

Students cannot:

❌ create accounts  
❌ delete accounts  
❌ edit fee balances  
❌ approve hostel

Only admin can.

---

# 🚀 Future Improvements

Possible additions:

- GPA calculator
- Results portal
- Fee statement PDF download
- Notifications
- Semester calendar
- Admin analytics dashboard
- Student transcript export
- Email notifications

---

# 👨‍💻 Author

Built by:

**Stephen Ouma Wagude**

University Student Authentication System – 2026

---
