# Admin Panel Setup Checklist

## Before You Start
- [ ] Read QUICK_START.md
- [ ] Read ADMIN_COMPLETE_GUIDE.md
- [ ] Backup any current portfolio data

## Step 1: Password Setup
- [ ] Open `src/context/PortfolioContext.jsx`
- [ ] Find line 67 in the `login` function
- [ ] Change `"admin123"` to your own password
- [ ] Save the file
- [ ] Test by logging in at `http://localhost:5173/admin-login`

## Step 2: Update Initial Data
In `src/context/PortfolioContext.jsx`, update `DEFAULT_DATA`:

### Profile Information
- [ ] Change `profile.name` to your name
- [ ] Change `profile.title` to your main title
- [ ] Update `profile.descriptions` array with your roles
- [ ] Update `profile.bio` with your bio/summary
- [ ] Change `profile.image` to your profile image path
- [ ] Update `profile.socials.instagram` URL
- [ ] Update `profile.socials.github` URL
- [ ] Update `profile.socials.linkedin` URL

### About Section
- [ ] Update `about.title` (optional, "About Me" by default)
- [ ] Update `about.description` with your about text

### Skills
- [ ] Add/update skills in `skills` array with name and level (0-100)
- [ ] Remove default skills you don't want

### Projects
- [ ] Add/update projects in `projects` array
- [ ] Set proper image paths and links
- [ ] Remove example projects

### Resume
- [ ] Update `resume.email`
- [ ] Update `resume.phone`
- [ ] Update `resume.fileUrl` to your resume PDF path

## Step 3: Prepare Images

### Profile Image
- [ ] Save your profile photo to `public/` folder
- [ ] Recommended size: 440x560px
- [ ] Supported formats: JPG, PNG, GIF
- [ ] Note the filename (e.g., `profile.jpg`)

### Project Images
- [ ] Save project images to `public/` folder
- [ ] Recommended size: 300x200px or similar
- [ ] Note filenames for use in admin panel

### Resume PDF
- [ ] Save your resume to `public/` folder
- [ ] Ensure it's a PDF file
- [ ] Note the filename (e.g., `resume.pdf`)

## Step 4: Test Locally

### Start Development Server
```bash
npm run dev
```
- [ ] Server starts without errors
- [ ] Website loads at `http://localhost:5173`

### Test Admin Panel
- [ ] Visit `http://localhost:5173/admin-login`
- [ ] Login with your password
- [ ] You see the admin dashboard
- [ ] Click "Logout" and verify you're logged out

### Test Each Page
- [ ] Home page shows your updated info
- [ ] Admin button appears when logged out
- [ ] About page shows your content
- [ ] Skills page shows your skills with progress bars
- [ ] Projects page shows your projects
- [ ] Resume page shows your contact info

## Step 5: Edit Content in Admin Panel

### Profile
- [ ] Click "Profile" tab
- [ ] Verify all information is correct
- [ ] Make any edits needed
- [ ] Click "Save All Changes"
- [ ] Go to home page and verify

### Skills
- [ ] Click "Skills" tab
- [ ] Add all your skills with levels
- [ ] Delete any you don't need
- [ ] Click "Save All Changes"
- [ ] Go to `/skills` page and verify

### Projects
- [ ] Click "Projects" tab
- [ ] Add all your projects
- [ ] Include titles, descriptions, images, links
- [ ] Click "Save All Changes"
- [ ] Go to `/project` page and verify

### About
- [ ] Click "About" tab
- [ ] Write your about section
- [ ] Click "Save All Changes"
- [ ] Go to `/about` page and verify

### Resume
- [ ] Click "Resume" tab
- [ ] Add email, phone, resume URL
- [ ] Click "Save All Changes"
- [ ] Verify on `/resume` page

## Step 6: Final Testing

### Cross-browser Testing
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari (if available)
- [ ] Test on mobile device

### Responsiveness
- [ ] Desktop view looks good
- [ ] Tablet view looks good
- [ ] Mobile view looks good
- [ ] All buttons are clickable

### Data Persistence
- [ ] Logout from admin
- [ ] Close browser
- [ ] Reopen website
- [ ] Verify data is still there

### Image Loading
- [ ] Profile image displays correctly
- [ ] Project images display correctly
- [ ] All images load without errors

## Step 7: Deployment

### Build for Production
```bash
npm run build
```
- [ ] Build completes without errors
- [ ] Check `dist/` folder is created
- [ ] No console errors in build output

### Deploy
- [ ] Choose hosting platform (Vercel, Netlify, GitHub Pages, etc.)
- [ ] Follow platform's deployment guide
- [ ] Deploy your `dist/` folder
- [ ] Verify website works on live URL

### Post-Deployment
- [ ] Test admin login on live site
- [ ] Test all pages on live site
- [ ] Test image loading on live site
- [ ] Share link with friends/colleagues

## Step 8: Maintenance

### Regular Updates
- [ ] Update skills as you learn new ones
- [ ] Add new projects as you complete them
- [ ] Update resume with new experience
- [ ] Backup data periodically

### Backup Strategy
- [ ] Monthly: Open browser console and copy `localStorage.getItem("portfolioData")`
- [ ] Save to a safe location
- [ ] Test restore occasionally

### Password Security
- [ ] Never commit password changes to git
- [ ] Change password occasionally
- [ ] Don't share password with others
- [ ] Use strong, unique passwords

## Troubleshooting Checklist

If something doesn't work:
- [ ] Check browser console for errors (F12)
- [ ] Clear browser cache and reload
- [ ] Try in incognito/private window
- [ ] Check file paths are correct
- [ ] Verify localStorage is enabled
- [ ] Check password is correct (case-sensitive)
- [ ] Review ADMIN_COMPLETE_GUIDE.md troubleshooting section

## Security Checklist

- [ ] Password is changed from default
- [ ] Password is strong and unique
- [ ] Password is not in git commits
- [ ] localStorage data is not sensitive
- [ ] Admin button only shows when logged out
- [ ] Public pages don't expose admin functions

## Final Verification

- [ ] All your information is correct
- [ ] All images load properly
- [ ] All links work correctly
- [ ] Admin functions work as expected
- [ ] Data persists across sessions
- [ ] Mobile responsive
- [ ] Build completes successfully
- [ ] Ready for deployment

---

## Getting Help

1. **Quick Issues**: Check QUICK_START.md
2. **Detailed Setup**: Read ADMIN_COMPLETE_GUIDE.md
3. **Technical Details**: Review ADMIN_SETUP.md
4. **Code Files**: Check src/ folder structure

## Next Steps

After completing this checklist:
1. Deploy your portfolio
2. Share it with your network
3. Keep updating with new projects
4. Maintain your portfolio regularly

---

**Congratulations!** Your admin panel is fully functional! 🎉
