# Images Directory

Place your images (host photos, episode artwork, etc.) in this directory.

## Recommended Images

### Host Photos
- `host-1.jpg` - First host photo
- `host-2.jpg` - Second host photo
- Recommended size: 400x400px minimum
- Format: JPG or PNG

### Episode Artwork (optional)
- `episode-1-cover.jpg`
- `episode-2-cover.jpg`
- Recommended size: 1400x1400px (square)
- Format: JPG or PNG

### Logo/Branding
- `logo.png` - Site logo
- `logo-dark.png` - Dark mode logo (if different)
- Format: PNG with transparency

## Usage with Next.js Image Component

After adding images, use the Next.js Image component for optimized loading:

```tsx
import Image from "next/image"

<Image
  src="/images/host-1.jpg"
  alt="Host Name"
  width={400}
  height={400}
  className="rounded-lg"
/>
```

## Image Optimization Tips

1. Compress images before uploading (use tools like TinyPNG)
2. Use WebP format when possible for smaller file sizes
3. Provide appropriate alt text for accessibility
4. Use the Next.js Image component for automatic optimization

## Note

This directory is empty by default. Add your actual images to use throughout the website.
