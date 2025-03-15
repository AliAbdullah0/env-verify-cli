# 🌿 env-checker-cli

✅ A simple and cross-platform Node.js CLI tool to check if all required environment variables are present in your `.env` file by comparing it with a `.env.example` file.

---

## ✨ Features

- 📂 Compares `.env` and `.env.example` files
- 🎨 Color-coded output with Chalk
- 🔥 Helpful terminal messages for quick debugging

---

## 📦 Installation

### Global install (recommended):
```
npm install -g env-checker-cli

```

# How To Use
### .env.example
DB_HOST=
DB_USER=
DB_PASSWORD=
### .env (actual env)
DB_HOST=localhost
DB_USER=admin

### Example Output

✅ Found DB_HOST in .env
✅ Found DB_USER in .env
❌ Missing DB_PASSWORD in .env

⚠️ Some environment variables are missing. Please check.

