# 🔐 Password Reset Backend

This is the **Node.js + Express** backend for the Password Reset Web App. It handles email verification, token generation, and password reset logic with expiry checks.

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- Nodemailer (for sending emails)
- dotenv

---

## 📦 Setup Instructions

### 1. Clone the repo & navigate:

```bash
git clone https://github.com/arunv369/password-reset-backend
cd passwordreset/backend
```

### 2. Install dependencies:

npm install

### 3. Create .env file:

MONGO_URI= mongodb+srv://arun:arun6362@cluster0.l4m6mrb.mongodb.net/
EMAIL_USER=2001arunv@gmail.com
EMAIL_PASS= nmuz iwkk xsjv hchl
FRONTEND_URL=http://localhost:3000
PORT = 5000

### 4. Start the backend server:

node server.js

📬 API Endpoints
✅ POST /api/auth/forgot-password
Request body: { email }

Checks if user exists and sends a reset link via email.

✅ POST /api/auth/reset-password/:token
Request body: { password }

Verifies token, expiry, and resets the user’s password.

🔐 Token Security
Random tokens are generated and stored in DB with 1 hour expiry.

After password is reset, token is cleared from DB.
