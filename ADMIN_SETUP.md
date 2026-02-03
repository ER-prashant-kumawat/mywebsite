# Admin Panel Setup Guide

## Overview
A complete admin panel system has been set up for your portfolio. Only you can log in and edit your profile, projects, skills, resume, and about me section. All changes are automatically saved to browser storage.

## How It Works

### 1. Admin Authentication
- **Login Page**: `/admin-login`
- **Default Password**: `admin123` (Change this!)
- **Admin Button**: Visible on home page (top-right corner) only when not logged in

### 2. Admin Dashboard
- **Access URL**: `/admin` (redirects to login if not authenticated)
- **Features**:
  - Profile editing (name, title, bio, image, social links)
  - About section editing
  - Skills management (add/edit/delete)
  - Projects management (add/edit/delete)
  - Resume information editing

## Setup Instructions

### Step 1: Change Admin Password
Edit `src/context/PortfolioContext.jsx` and change the password:

```javascript
// Line 67 in PortfolioContext.jsx
if (password === "admin123") {  // Change "admin123" to your password
  setIsAdmin(true);
  localStorage.setItem("isAdmin", JSON.stringify(true));
  return true;
}
```

### Step 2: Update Initial Profile Data
Edit `src/context/PortfolioContext.jsx` and update the `DEFAULT_DATA` object:

```javascript
const DEFAULT_DATA = {
  profile: {
    name: "Your Name",
    title: "Your Title",
    descriptions: [
      "Role 1",
      "Role 2",
      "Role 3",
    ],
    bio: "Your bio text",
    image: "/path/to/your/image.jpg",
    socials: {
      instagram: "https://instagram.com/yourprofile",
      github: "https://github.com/yourprofile",
      linkedin: "https://linkedin.com/in/yourprofile",
    },
  },
  // ... other data
};
```

## Files Created

### Context & State Management
- `src/context/PortfolioContext.jsx` - Manages all portfolio data and authentication

### Admin Pages
- `src/page/AdminLogin.jsx` - Login form
- `src/page/AdminDashboard.jsx` - Full admin dashboard with tabs

### Styles
- `src/styles/AdminLogin.css` - Login page styling
- `src/styles/AdminDashboard.css` - Dashboard styling

### Updated Pages
- `src/App.jsx` - Added PortfolioProvider and new routes
- `src/page/Home.jsx` - Now uses context data
- `src/page/About.jsx` - Now uses context data
- `src/page/Skills.jsx` - Now uses context data with progress bars
- `src/page/Project.jsx` - Now uses context data

## Features

### Profile Tab
- Edit name, main title
- Add/edit typing descriptions (animated)
- Change bio/description
- Update profile image URL
- Edit social media links (Instagram, GitHub, LinkedIn)

### About Tab
- Edit about me title
- Edit about me description

### Skills Tab
- Add new skills with proficiency levels (0-100)
- Edit existing skills
- Delete skills
- Visual progress bars on public pages

### Projects Tab
- Add new projects
- Edit project details:
  - Title
  - Description
  - Image URL
  - Project link
- Delete projects
- Project images display with cards

### Resume Tab
- Email
- Phone number
- Resume file URL

## Data Storage

All data is saved to **browser's localStorage** with key: `portfolioData`

### Backup & Export
To backup your data:
```javascript
// Open browser console and run:
const data = localStorage.getItem("portfolioData");
console.log(data);
// Copy and save this JSON data
```

To restore:
```javascript
// Open browser console and run:
localStorage.setItem("portfolioData", 'paste_your_json_here');
```

## Public View

Users see:
- ✅ Updated profile information
- ✅ Updated projects with images
- ✅ Updated skills with progress bars
- ✅ Updated about section
- ✅ Updated resume contact info

Users DON'T see:
- ❌ Admin login button (only visible when not logged in)
- ❌ Admin dashboard
- ❌ Password field
- ❌ Edit buttons

## Security Notes

⚠️ **Important**:
1. The password is stored in your code - change it to something only you know
2. Data is stored in localStorage - anyone with access to browser can view it
3. For production use, consider:
   - Moving to a backend database
   - Using proper authentication (JWT, OAuth)
   - Adding encryption for sensitive data

## Logout

The logout button in admin dashboard:
- Clears admin session
- Redirects to home page
- Shows login button again

## Troubleshooting

### Data not saving?
- Check browser console for errors
- Ensure localStorage is not disabled
- Try clearing browser cache and refreshing

### Forgotten password?
- Edit `PortfolioContext.jsx` and change the password check condition
- Or clear localStorage: `localStorage.removeItem("isAdmin")`

### Image not displaying?
- Ensure image URL is correct
- Use full paths or public folder paths (e.g., `/images/profile.jpg`)
- Format: `/filename.jpg` for files in public folder

## Next Steps

1. ✅ Change the admin password
2. ✅ Update your profile information
3. ✅ Add your projects with images
4. ✅ Add your skills
5. ✅ Write your about section
6. ✅ Update contact information
7. ✅ Test public pages
8. ✅ Deploy your portfolio

---

**Need help?** Check the component files or update the DEFAULT_DATA in PortfolioContext.jsx directly.
