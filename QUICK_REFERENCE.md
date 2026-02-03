# Quick Reference Guide

## File Locations

```
src/
├── context/PortfolioContext.jsx     ← Default data + password
├── page/
│   ├── AdminLogin.jsx               ← Login page
│   ├── AdminDashboard.jsx           ← Admin panel
│   ├── Home.jsx                     ← Home page (updated)
│   ├── About.jsx                    ← About page (updated)
│   ├── Skills.jsx                   ← Skills page (updated)
│   ├── Project.jsx                  ← Projects page (updated)
│   └── Resume.jsx                   ← Resume page (updated)
└── styles/
    ├── AdminLogin.css               ← Login styling
    ├── AdminDashboard.css           ← Admin panel styling
    ├── Home.css                     ← Updated with admin button
    └── Skills.css                   ← Updated with progress bars
```

---

## Essential Changes (First Time)

### 1. Change Password
**File**: `src/context/PortfolioContext.jsx`
**Line**: 67
```javascript
// Change from:
if (password === "admin123") {

// To:
if (password === "YOUR_PASSWORD") {
```

### 2. Update Your Name
**File**: `src/context/PortfolioContext.jsx`
**Line**: 8 (in DEFAULT_DATA)
```javascript
name: "Prashant",  // Change to YOUR name
```

### 3. Update Profile Image Path
**File**: `src/context/PortfolioContext.jsx`
**Line**: 17 (in DEFAULT_DATA)
```javascript
image: "/profile.jpg",  // Change path
```

---

## URL Reference

| Page | URL | What It Shows |
|------|-----|--------------|
| Home | `/` | Your profile |
| About | `/about` | About section |
| Skills | `/skills` | Skills with bars |
| Projects | `/project` | Project cards |
| Resume | `/resume` | Contact info |
| **Admin Login** | `/admin-login` | **Login form** |
| **Admin Panel** | `/admin` | **Dashboard** |

---

## Admin Tabs & Fields

### Profile Tab
```
Name: Your full name
Title: Main professional title (e.g., "Frontend Developer")
Typing Descriptions: Animated roles (comma-separated)
Bio: Professional summary
Profile Image URL: Path to photo (e.g., /profile.jpg)
Instagram URL: Your Instagram profile
GitHub URL: Your GitHub profile
LinkedIn URL: Your LinkedIn profile
```

### About Tab
```
Title: Section heading (default: "About Me")
Description: Your about me text
```

### Skills Tab
```
Skill Name: Programming language/framework/tool
Level: 0-100 (shows as progress bar)
+ Add Skill: Button to add new skill
Delete: Button to remove skill
```

### Projects Tab
```
Title: Project name
Description: What the project does
Image URL: Path to screenshot
Link: URL to live demo or repo
+ Add Project: Button to add new project
Delete: Button to remove project
```

### Resume Tab
```
Email: Your email address
Phone: Your phone number
Resume File URL: Link to PDF (e.g., /resume.pdf)
```

---

## Image Paths

### Local Images (in public/ folder)
```
/profile.jpg
/project1.jpg
/project2.png
/resume.pdf
/images/screenshot.jpg
```

### External Images
```
https://example.com/image.jpg
https://github.com/username/image.png
```

---

## Data Backup

### Export Data
```javascript
// In browser console (F12 → Console):
localStorage.getItem("portfolioData")
// Copy output and save to file
```

### Restore Data
```javascript
// In browser console:
localStorage.setItem("portfolioData", 'paste_json_here');
location.reload();
```

### Clear All Data
```javascript
// In browser console:
localStorage.removeItem("portfolioData");
localStorage.removeItem("isAdmin");
location.reload();
```

---

## Default Password
`admin123`
⚠️ **CHANGE THIS IMMEDIATELY!**

---

## Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## Keyboard Shortcuts

| Action | Key |
|--------|-----|
| Open browser console | F12 |
| Refresh page | Ctrl+R (Cmd+R on Mac) |
| Clear cache & refresh | Ctrl+Shift+R |
| Logout | Click Logout button |

---

## Common Tasks

### Add a New Skill
1. Go to Admin → Skills tab
2. Click "+ Add Skill"
3. Enter skill name and level
4. Click "Save All Changes"

### Add a New Project
1. Go to Admin → Projects tab
2. Click "+ Add Project"
3. Fill in title, description, image, link
4. Click "Save All Changes"

### Update Profile Photo
1. Save image to public/ folder as `/profile.jpg`
2. Go to Admin → Profile tab
3. Change "Profile Image URL" to `/profile.jpg`
4. Click "Save All Changes"

### Change Social Links
1. Go to Admin → Profile tab
2. Update Instagram, GitHub, LinkedIn URLs
3. Click "Save All Changes"

### Update About Me
1. Go to Admin → About tab
2. Edit title and description
3. Click "Save All Changes"

---

## Troubleshooting

### Can't Login
- Check password is correct (case-sensitive)
- Verify you edited the right line in PortfolioContext.jsx
- Check file is saved

### Changes Not Saving
- Click "Save All Changes" button
- Check browser console (F12) for errors
- Try clearing cache: Ctrl+Shift+R

### Images Not Showing
- Check file exists in public/ folder
- Check path is correct (e.g., `/filename.jpg`)
- Check filename spelling

### Lost Admin Access
- Edit password in PortfolioContext.jsx
- Or run: `localStorage.removeItem("isAdmin")`

---

## File Structure for Images

```
public/
├── profile.jpg          (Your profile photo)
├── project1.jpg         (Project 1 image)
├── project2.jpg         (Project 2 image)
├── resume.pdf           (Your resume)
└── images/
    ├── screenshot1.jpg
    └── screenshot2.jpg
```

---

## Default Data Structure

```javascript
{
  profile: {
    name: "Name",
    title: "Title",
    descriptions: ["Role 1", "Role 2"],
    bio: "Bio text",
    image: "/path.jpg",
    socials: {
      instagram: "url",
      github: "url",
      linkedin: "url"
    }
  },
  about: {
    title: "About Me",
    description: "Text"
  },
  skills: [
    { id: 1, name: "Skill", level: 90 }
  ],
  projects: [
    { id: 1, title: "Title", description: "Desc", image: "/img.jpg", link: "#" }
  ],
  resume: {
    email: "email@example.com",
    phone: "+1234567890",
    fileUrl: "/resume.pdf"
  }
}
```

---

## Browser Console Commands

```javascript
// Check if logged in
localStorage.getItem("isAdmin")

// View all data
JSON.parse(localStorage.getItem("portfolioData"))

// View specific section
JSON.parse(localStorage.getItem("portfolioData")).profile

// Clear specific data
localStorage.removeItem("portfolioData")

// Clear all data
localStorage.clear()
```

---

## Production Deploy Steps

1. Update all data in admin panel
2. Add all images to public/ folder
3. Test all pages
4. Run: `npm run build`
5. Deploy dist/ folder to hosting
6. Test on live URL

---

## Important Files to Modify

| File | What to Change | When |
|------|---|---|
| `src/context/PortfolioContext.jsx` | Password, initial data | First time setup |
| `public/profile.jpg` | Your photo | When setting up profile |
| `public/project*.jpg` | Project images | When adding projects |
| `public/resume.pdf` | Your resume | When updating resume |

---

## Don't Modify

❌ Don't manually edit localStorage (use admin panel)
❌ Don't delete Admin files
❌ Don't change PortfolioContext.jsx structure
❌ Don't modify React imports

---

## Quick Checklist

- [ ] Change password
- [ ] Update name
- [ ] Add profile photo
- [ ] Update socials
- [ ] Add skills
- [ ] Add projects
- [ ] Write about
- [ ] Test all pages
- [ ] Deploy

---

## Support Files

- **START_HERE.md** ← Read this first
- **QUICK_START.md** ← 5-minute setup
- **ADMIN_COMPLETE_GUIDE.md** ← Full documentation
- **SYSTEM_OVERVIEW.md** ← How it works

---

## Version Info

- React: 19.2.0
- React Router: 7.12.0
- Vite: 7.2.4

---

**For more help, see START_HERE.md**
