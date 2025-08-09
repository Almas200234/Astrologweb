AstroVibes - Full Static Site (with live horoscope API)

Files included:
- index.html
- zodiac.html
- horoscope.html (uses Aztro API - POST request)
- contact.html (client-side CSV download demo)
- style.css
- main.js
- README.txt (this file)

HOW TO USE LOCALLY:
1. Extract all files into a single folder.
2. Open 'index.html' in your browser. Note: some API calls may be blocked from local files due to browser CORS restrictions.
3. For best results host the site (free) using GitHub Pages or Netlify (instructions below).

HOSTING (GitHub Pages - easiest):
1. Create a GitHub account if you don't have one.
2. Create a new repository (public).
3. Upload all files (drag & drop) or push from Git.
4. Go to Settings -> Pages -> Choose branch 'main' (or 'master') and folder '/' then Save.
5. Wait a minute, your site will be available at https://your-username.github.io/your-repo-name/

ALTERNATIVE - Netlify drag & drop:
1. Go to netlify.com (sign up).
2. In Sites -> Add new site -> Drag & drop the folder (zipped or unzipped) into the UI.
3. Netlify will deploy and give you a public URL.

A NOTE ABOUT THE AZTRO API:
- Endpoint: https://aztro.sameerkumar.website/?sign={sign}&day=today (POST)
- Works via browser fetch POST. If you see CORS errors while testing locally, upload to GitHub Pages or Netlify.

CONTACT FORM CLOUD SAVE (OPTIONAL):
- If you want contact messages saved directly to Google Sheets (cloud) instead of downloading CSV locally, follow steps in earlier conversation to deploy a Google Apps Script and replace the form submission handler in contact.html.