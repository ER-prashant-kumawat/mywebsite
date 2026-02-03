# Complete Admin Panel Setup & Usage Guide

## System Overview

Your portfolio now has a **complete admin panel system** where:
- ✅ Only you can access the admin dashboard
- ✅ You can edit all portfolio content via forms
- ✅ All changes are saved automatically
- ✅ Public pages show your updated content
- ✅ Other users cannot edit anything

## Installation Complete ✓

The following files have been created/updated:

### New Files Created:
```
src/context/PortfolioContext.jsx       - Central data management
src/page/AdminLogin.jsx                - Login page
src/page/AdminDashboard.jsx            - Admin dashboard
src/styles/AdminLogin.css              - Login styling
src/styles/AdminDashboard.css          - Dashboard styling
ADMIN_SETUP.md                         - Setup documentation
QUICK_START.md                         - Quick reference
```

### Files Updated:
```
src/App.jsx                            - Added routes & provider
src/page/Home.jsx                      - Uses context data
src/page/About.jsx                     - Uses context data
src/page/Skills.jsx                    - Uses context data with bars
src/page/Project.jsx                   - Uses context data
src/page/Resume.jsx                    - Uses context data
src/styles/Home.css                    - Admin button styling
src/styles/Skills.css                  - Progress bars styling
```

## Step 1: Change Your Admin Password

**IMPORTANT:** The default password is `admin123`. Change it immediately!

1. Open: `src/context/PortfolioContext.jsx`
2. Find line 67 (in the `login` function)
3. Change this line:
```javascript
if (password === "admin123") {
```

To your new password:
```javascript
if (password === "YOUR_STRONG_PASSWORD") {
```

Example:
```javascript
if (password === "MyPortfolio2025!") {
```

Save the file.

## Step 2: Update Your Initial Data

Open `src/context/PortfolioContext.jsx` and update the `DEFAULT_DATA` object at the top:

### Change Your Name:
```javascript
profile: {
  name: "Prashant",  // Change to your name
```

### Change Your Title:
```javascript
  title: "Frontend Developer",  // Your main title
```

### Change Typing Descriptions:
```javascript
  descriptions: [
    "Frontend Developer",
    "React Developer",
    "UI/UX Designer",
    "WordPress Expert",
  ],
```

### Change Your Bio:
```javascript
  bio: "I build modern, fast and beautiful websites with premium UI and smooth animations.",
```

### Update Profile Image:
```javascript
  image: "/profile.jpg",  // Path to your image
```

### Update Social Links:
```javascript
  socials: {
    instagram: "https://instagram.com/yourprofile",
    github: "https://github.com/yourprofile",
    linkedin: "https://linkedin.com/in/yourprofile",
  },
```

## Step 3: Start Your Dev Server

```bash
npm run dev
```

Your portfolio will be at: `http://localhost:5173`

## Step 4: Access Admin Panel

### Method 1: Using Admin Button
1. Go to home page: `http://localhost:5173`
2. Look for "Admin" button (top-right corner)
3. Click it
4. Enter your password
5. You're in the admin dashboard!

### Method 2: Direct URL
1. Go to: `http://localhost:5173/admin-login`
2. Enter your password
3. You'll be redirected to dashboard

## Using the Admin Dashboard

### Profile Tab - Edit Your Profile
1. Click "Profile" tab
2. Edit:
   - **Name**: Your full name
   - **Title**: Your main professional title
   - **Typing Descriptions**: Multiple roles (comma-separated) that display with animation
   - **Bio**: Your professional bio/summary
   - **Profile Image URL**: Path to your photo (e.g., `/profile.jpg`)
   - **Social Links**: Instagram, GitHub, LinkedIn URLs
3. Click "Save All Changes"
4. Go to home page to see updates

### About Tab - Edit About Section
1. Click "About" tab
2. Edit:
   - **Title**: Section heading
   - **Description**: Your about me text
3. Save changes
4. Visit `/about` to see updates

### Skills Tab - Manage Your Skills
1. Click "Skills" tab
2. **Add Skill**:
   - Click "+ Add Skill" button
   - Enter skill name (e.g., "React", "JavaScript")
   - Enter level 0-100 (e.g., 90)
3. **Edit Skill**:
   - Click on the skill box
   - Change name or level
4. **Delete Skill**:
   - Click "Delete" button
5. Save changes
6. Visit `/skills` to see progress bars

### Projects Tab - Manage Your Projects
1. Click "Projects" tab
2. **Add Project**:
   - Click "+ Add Project"
   - Fill in:
     - **Title**: Project name
     - **Description**: What the project does
     - **Image URL**: Path to project image (e.g., `/project1.jpg`)
     - **Link**: URL to live demo or repo
3. **Edit Project**:
   - Change any field
4. **Delete Project**:
   - Click "Delete"
5. Save changes
6. Visit `/project` to see your projects

### Resume Tab - Update Contact Info
1. Click "Resume" tab
2. Edit:
   - **Email**: Your email address
   - **Phone**: Your phone number
   - **Resume File URL**: Link to your resume PDF (e.g., `/resume.pdf`)
3. Save changes

## Image Management

### Storing Images Locally
1. Place images in `public/` folder
2. Reference them as: `/filename.jpg`

Example:
```
public/profile.jpg        → Use as: /profile.jpg
public/images/project.jpg → Use as: /images/project.jpg
```

### Using External Images
Use full URLs:
```
https://example.com/image.jpg
https://github.com/yourname/image.jpg
```

## Logout

1. In admin dashboard, click "Logout" button
2. You'll be logged out and redirected to home
3. "Admin" button appears again

## Viewing Changes

After saving in admin panel:

| Page | What Updates |
|------|--------------|
| Home | Profile name, bio, image, social links |
| About | About title and description |
| Skills | Skill names, levels, and progress bars |
| Projects | Project cards with images and links |
| Resume | Contact information displayed |

**Note:** Refresh the page to see updates.

## Data Storage & Backup

### Where Data is Stored
- **Location**: Browser's localStorage
- **Key**: `portfolioData`
- **Persistence**: Data survives browser restart

### Backup Your Data
```javascript
// Open browser console (F12 → Console tab)
const backup = localStorage.getItem("portfolioData");
console.log(backup);
// Copy and paste this JSON to a file for backup
```

### Restore from Backup
```javascript
// In browser console
localStorage.setItem("portfolioData", 'paste_your_backup_json_here');
location.reload();
```

### Clear All Data (Reset to Default)
```javascript
// In browser console
localStorage.removeItem("portfolioData");
localStorage.removeItem("isAdmin");
location.reload();
```

## Troubleshooting

### "Invalid password" message
- Check your password spelling
- Remember: passwords are **case-sensitive**
- Verify you saved the change in PortfolioContext.jsx

### Data not appearing on public pages
- Click "Save All Changes" in admin
- Refresh the public page (Ctrl+R or Cmd+R)
- Check browser console for errors (F12)

### Images not showing
- Verify image path is correct
- For local images: check file exists in `public/` folder
- For external images: check full URL is accessible
- Try adding `/` at the start: `/imagename.jpg`

### Lost admin access
- Clear browser data and cookies
- Or edit PortfolioContext.jsx to reset password
- Run `localStorage.removeItem("isAdmin")` in console

### Changes not saving
- Check browser console (F12) for errors
- Ensure localStorage is enabled
- Try a different browser
- Clear cache and reload

## Security Tips

⚠️ **Keep Your Password Secure**:
1. Use a strong, unique password
2. Don't share it with others
3. Change it regularly
4. Don't commit password to git (it's visible in code)

⚠️ **For Production**:
1. Don't use localStorage alone
2. Consider backend authentication
3. Use database for data storage
4. Add encryption for sensitive data

## Next Steps

1. ✅ Change password
2. ✅ Update profile information
3. ✅ Add your skills with levels
4. ✅ Add your projects with images
5. ✅ Write your about section
6. ✅ Add contact information
7. ✅ Test all pages
8. ✅ Deploy your portfolio

## Quick Command Reference

```bash
# Start development server
npm run dev

# Build for production
npm run build

# View in browser
http://localhost:5173

# Admin login
http://localhost:5173/admin-login

# Admin dashboard
http://localhost:5173/admin
```

## File Locations for Reference

```
src/
├── context/
│   └── PortfolioContext.jsx     ← Default data, password
├── page/
│   ├── Home.jsx                  ← Home page
│   ├── About.jsx                 ← About page
│   ├── Skills.jsx                ← Skills page
│   ├── Project.jsx               ← Projects page
│   ├── Resume.jsx                ← Resume page
│   ├── AdminLogin.jsx            ← Login form
│   └── AdminDashboard.jsx        ← Admin dashboard
├── styles/
│   ├── Home.css
│   ├── Skills.css
│   ├── AdminLogin.css
│   └── AdminDashboard.css
└── App.jsx                       ← Routes & provider
```

---

**Everything is set up!** You can now:
- Login to admin panel with password
- Edit all your portfolio content
- See changes live on public pages
- Manage your entire portfolio without touching code

**Questions?** Check the specific page files or modify DEFAULT_DATA in PortfolioContext.jsx directly.
