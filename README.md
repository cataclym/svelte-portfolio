# Gallery portfolio

### Powered by sveltekit

#### This project was made for personal reasons, feel free to use

1. Place images in `static/illustrations/`
2. Place images in `static/photography/`
3. Place animations in `static/animations/2d` and `static/animations/3d`

   > For images to appear below the video, place images in a folder named the same as the video file:
   >
   > ```
   > ├── animations
   > │   ├── 2d
   > │   │   ├── 2d_video
   > │   │   │   ├── img_001.png
   > │   │   │   ├── img_002.png
   > │   │   │   └── img_003.png
   > │   │   └── 2d_video.mp4
   > ```

4. Place `favicon.png` and `selfie.jpg` in `static/`
5. Fill in `.env`, using `.env.example` as a template
6. Create `static/meta.json` based on `static/meta.example.json`
7. **REQUIRES ffmpeg and cwebp** | Optimize images with `npm run optimize` (PNG to WEBP)
8. Build app with `npm run build`
9. Deploy app with `node build`
