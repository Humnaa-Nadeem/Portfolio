# Certificates Images Directory (`public/images/certificates`)

Add your certificate images or PDF documents into this folder.

### 📁 Folder Location
```
w:\portfolio\public\images\certificates\
```

---

### 🖼️ How to Add and Use Your Certificate Images:

1. **Copy or save your image** (e.g., `merit_award.png`, `python_cert.jpg`, `hackathon.webp`, or `.pdf`) into this folder:
   ```
   public/images/certificates/your-certificate-name.jpg
   ```

2. **Open `src/data/achievements.js`** and locate the corresponding achievement object.

3. **Set the `certificateUrl` field** to the public path:
   ```javascript
   {
     id: 'dept-first-position',
     title: 'Department First Position & Academic Merit Award',
     // ...
     certificateUrl: '/images/certificates/your-certificate-name.jpg', // <-- Add your image path here!
   }
   ```

4. **That's it!** Vite serves everything in the `public` folder at the root `/` URL, so you don't need any import statements. The modal preview in the Achievements section will automatically display your real certificate image.
