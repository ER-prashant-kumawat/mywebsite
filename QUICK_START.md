# Admin Panel - Quick Start

## Access Admin Panel
1. **Login Page**: Visit `http://localhost:5173/admin-login`
2. **Password**: `admin123`
3. **Admin Button**: Look for "Admin" button on home page (top-right)

## Change Password (IMPORTANT!)

Edit `src/context/PortfolioContext.jsx` line 67:
```javascript
if (password === "admin123") {  // Change this!
  // Change to your password
  if (password === "YOUR_NEW_PASSWORD") {
```

## Edit Your Information

### Step 1: Update Profile (Name, Bio, Image)
1. Click "Admin" button
2. Login with your password
3. Click "Profile" tab
4. Update your information
5. Click "Save All Changes"

### Step 2: Add Your Skills
1. In admin, click "Skills" tab
2. Click "+ Add Skill"
3. Enter skill name and level (0-100)
4. Save

### Step 3: Add Your Projects
1. Click "Projects" tab
2. Click "+ Add Project"
3. Fill in:
   - Title
   - Description
   - Image URL (e.g., `/project1.jpg`)
   - Project Link
4. Save

### Step 4: Update About Section
1. Click "About" tab
2. Update title and description
3. Save

### Step 5: Update Resume Info
1. Click "Resume" tab
2. Add email, phone, resume file URL
3. Save

## Image URLs

For images in public folder:
```
/image.jpg
/portfolio.png
/project1.jpg
```

For external images:
```
https://example.com/image.jpg
```

## Logout
Click "Logout" button in admin dashboard to exit.

## Check Your Changes
Visit portfolio pages to see your updates:
- Home: Updated profile
- About: Updated about section
- Skills: Updated skills with progress bars
- Projects: Updated projects with images
- Resume: Updated contact info

---

**That's it!** Your portfolio is now fully editable without touching code.
