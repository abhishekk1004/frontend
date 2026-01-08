# 🚀 QUICK VERCEL DEPLOYMENT - Frontend Only Repo

## Step 1: Create New Frontend Repo (Run these commands)

```bash
# Navigate to frontend folder
cd frontend

# Initialize new git repo
git init
git add .
git commit -m "Initial commit: Portfolio frontend"

# Create new GitHub repo named "portfolio-frontend" then:
git remote add origin https://github.com/abhishekk1004/portfolio-frontend.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

1. Go to: https://vercel.com/new
2. Import your new `portfolio-frontend` repo
3. Framework Preset: **Vite** (auto-detected)
4. Click **Environment Variables** and add:
   - Name: `VITE_API_URL`
   - Value: `https://abhishek.up.railway.app/api`
5. Click **Deploy**

## Step 3: After Deploy - Add Custom Domain

1. Go to Project Settings → Domains
2. Add: `www.abhishek-kushwaha.com.np`
3. Update DNS:
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

## Step 4: Update Railway Backend

Add your Vercel domain to Railway environment variables:

```
CORS_ALLOWED_ORIGINS=https://www.abhishek-kushwaha.com.np,https://abhishek-kushwaha.com.np,https://portfolio-frontend.vercel.app
CSRF_TRUSTED_ORIGINS=https://www.abhishek-kushwaha.com.np,https://abhishek-kushwaha.com.np,https://portfolio-frontend.vercel.app
```

## ✅ Done!

Your site will be live at:
- Vercel default: `https://portfolio-frontend.vercel.app`
- Custom domain: `https://www.abhishek-kushwaha.com.np`

Backend API: `https://abhishek.up.railway.app/api`
