# Profile Picture Setup Guide

## How to Add Your Profile Picture

### Step 1: Prepare Your Image
- Save a professional headshot as **`profile.jpg`** (or `.png`)
- Recommended size: **1000x1000px or larger** (square format)
- File should be clear, high quality, and professional
- Place it in this `images/` folder

### Step 2: Update the HTML
Go to **`index.html`** and find the avatar section (around line 28).

**Currently:**
```html
<div class="avatar" aria-hidden="true"></div>
```

**Change to:**
```html
<div class="avatar" style="background-image: url('images/profile.jpg');" aria-hidden="true"></div>
```

Or if you named your file differently (e.g., `photo.png`):
```html
<div class="avatar" style="background-image: url('images/photo.png');" aria-hidden="true"></div>
```

### Step 3: Save & Preview
- Save the HTML file
- Open `index.html` in your browser
- Your profile picture will now appear in the circular avatar on the homepage!

## Notes
- The avatar is **120px × 120px** circular with a nice shadow
- Images are automatically center-cropped to fit the circle
- The gradient background will show as fallback if image fails to load
- Keep image file sizes under 500KB for faster loading
