# Deploy Bin Batoota Travel to Render

## 1. Push to GitHub

Ensure your project is in a GitHub repository and push your code.

## 2. Create Web Service on Render

1. Go to [render.com](https://render.com) and sign in
2. Click **New** → **Web Service**
3. Connect your GitHub repo
4. Select the repository and branch

## 3. Configure Build & Start

Render should auto-detect Next.js. If not, use:

| Setting        | Value                               |
|----------------|-------------------------------------|
| **Name**       | bin-batoota-travel                  |
| **Region**     | Oregon (or nearest to you)          |
| **Runtime**    | Node                                |
| **Build Command** | `npm install && npm run build`  |
| **Start Command** | `npm run start`                 |

## 4. Environment Variables

In Render dashboard → your service → **Environment**, add:

| Key            | Value                    | Notes                          |
|----------------|--------------------------|--------------------------------|
| `ADMIN_EMAIL`  | batotapanel@gmail.com    | Admin login email              |
| `ADMIN_PASSWORD` | Abcd1234@              | Admin login password           |
| `AUTH_SECRET`  | (any random string ≥16 chars) | Session signing – use a strong random value |
| `MONGODB_URI`  | mongodb+srv://...       | Your MongoDB Atlas connection string. Replace `<db_password>` with your Atlas DB password (URL-encode special chars, e.g. @ → %40) |

## 5. Deploy

Click **Create Web Service**. Render will build and deploy.  
Your site will be available at `https://bin-batoota-travel.onrender.com` (or the URL Render assigns).

## 6. Admin Panel

- Public site: `https://your-app.onrender.com`
- Admin: `https://your-app.onrender.com/admin`
- Log in with `batotapanel@gmail.com` / `Abcd1234@`

---

**Note:** Free tier services may spin down after inactivity. The first request may take a minute to wake up.
