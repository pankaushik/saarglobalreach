# Image Guide for Saarglobal Website

## 📸 Free Stock Photo Resources

### Recommended Sites (100% Free):
1. **Unsplash** - https://unsplash.com/
2. **Pexels** - https://pexels.com/
3. **Pixabay** - https://pixabay.com/
4. **Freepik** - https://freepik.com/ (free with attribution)

---

## 🖼️ Image Requirements by Page

### HOME PAGE (index.html)
**1. Hero Section Background**
- Search terms: "passport travel", "airport departure", "world map business"
- Size: 1920x1080px minimum
- Location: Hero section background

**2. Feature Icons** (Already using Font Awesome - ✅ Done)

**3. Services Section**
- 3 images for IELTS/PTE/Spoken English courses
- Size: 800x600px
- Search: "students studying", "online learning", "language test"

**4. Country Flags** (Already using Font Awesome icons - ✅ Done)

---

### ABOUT PAGE (about.html)
**1. Office/Team Photo**
- Search: "immigration office", "consultancy team", "professional office"
- Size: 1200x800px

**2. Mission/Vision Icons** (Already styled with Font Awesome - ✅ Done)

---

### OUR TEAM PAGE (our-team.html)
**Option 1: Use actual team photos**
- Professional headshots of your actual team members
- Size: 400x400px (square)
- Professional attire recommended

**Option 2: Keep the current Font Awesome icons** ✅ (Looks professional)

---

### VISA PAGES (visitor-visa.html, student-visa.html, work-visa.html)
**1. Visa Type Images**
- Tourist: "vacation travel family", "tourist destination"
- Student: "university campus", "international students"
- Work: "professional workplace", "business meeting international"
- Size: 1200x600px

---

### COURSES PAGES (ielts.html, pte.html, spoken-english.html)
**1. Header Images**
- IELTS: "ielts test preparation", "students exam"
- PTE: "computer test", "online exam"
- Spoken English: "conversation practice", "language learning"
- Size: 1200x600px

**2. Study Materials**
- "books study desk", "learning materials"
- Size: 800x600px

---

### COUNTRY PAGES (uk.html, usa.html, canada.html, etc.)
**1. Country Landmarks**
- UK: Big Ben, London Eye
- USA: Statue of Liberty, Capitol
- Canada: CN Tower, Parliament
- Australia: Sydney Opera House
- Size: 1200x600px

**2. University Campus Images**
- "university campus UK", "college campus USA"
- Size: 1000x600px

---

### CONTACT PAGE (contact.html)
**1. Office Location Image** (if you have it)
- Your actual office photo
- Size: 1200x600px

**2. Contact Form Background** (Optional)
- "world map", "global connection"
- Can be subtle/transparent

---

## 🎨 Image Optimization Tips

### Before Uploading:
1. **Compress images** using:
   - TinyPNG (https://tinypng.com/)
   - Squoosh (https://squoosh.app/)
   - CompressJPEG (https://compressjpeg.com/)

2. **Resize** to recommended dimensions
3. **Convert to WebP** format for better performance (optional)

### File Naming Convention:
```
hero-background.jpg
team-member-1.jpg
uk-london-big-ben.jpg
ielts-preparation.jpg
```

---

## 📁 Folder Structure
```
images/
├── hero/
│   └── hero-background.jpg
├── services/
│   ├── ielts-course.jpg
│   ├── pte-course.jpg
│   └── spoken-english.jpg
├── countries/
│   ├── uk-landmark.jpg
│   ├── usa-landmark.jpg
│   ├── canada-landmark.jpg
│   ├── australia-landmark.jpg
│   ├── new-zealand-landmark.jpg
│   ├── cyprus-landmark.jpg
│   └── europe-landmark.jpg
├── team/
│   ├── team-member-1.jpg
│   ├── team-member-2.jpg
│   └── office-photo.jpg
└── icons/
    └── (Font Awesome is handling this - no images needed!)
```

---

## 🚀 How to Add Images to Your Pages

### Example 1: Hero Section (index.html)
```html
<section class="hero" style="background-image: url('images/hero/hero-background.jpg');">
```

### Example 2: Service Cards
```html
<div class="service-card">
    <img src="images/services/ielts-course.jpg" alt="IELTS Preparation">
    <h3>IELTS Exam Preparation</h3>
    ...
</div>
```

### Example 3: Country Pages
```html
<div class="country-image">
    <img src="images/countries/uk-landmark.jpg" alt="United Kingdom">
</div>
```

---

## ✅ Current Status

### What's Already Working (No Images Needed):
✅ Font Awesome icons throughout the site
✅ Gradient backgrounds
✅ Color schemes and styling
✅ Professional card designs
✅ Timeline markers
✅ Button styles

### What Would Benefit from Images:
📸 Hero section backgrounds
📸 Service/course thumbnails
📸 Country landmark photos
📸 Team member photos (optional)
📸 Office location photo

---

## 🎯 Priority Order

### High Priority (Add First):
1. Hero background image on homepage
2. Country landmark images
3. Course thumbnail images

### Medium Priority:
4. Visa service images
5. About page team photo

### Low Priority (Optional):
6. Individual team member photos
7. Additional decorative images

---

## 📝 Notes

- All current Font Awesome icons look professional - no need to replace them
- The CSS styling is now comprehensive and modern
- Images are the final touch to make the site complete
- Start with 5-10 key images rather than trying to add everything at once
- Use consistent photography style (same color tone, similar lighting)

---

## 🔗 Quick Links

**Free Image Search URLs:**
- https://unsplash.com/s/photos/immigration-office
- https://unsplash.com/s/photos/world-travel
- https://unsplash.com/s/photos/university-campus
- https://unsplash.com/s/photos/london-big-ben
- https://unsplash.com/s/photos/ielts-preparation

---

**Need Help?**
1. Download images from free stock sites
2. Resize and compress them
3. Upload to /images folder
4. Update HTML img src attributes
5. Test on different screen sizes

Your site now has professional CSS styling! Images are just the final enhancement! 🎉
