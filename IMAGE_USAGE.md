# How to Add Images to Essays

## Quick Start

1. Import the EssayImage component at the top of your essay:
```javascript
import EssayImage from "../../components/EssayImage";
```

2. Add the image where you want it in your essay:
```javascript
<EssayImage
  src="https://your-image-url.com/image.jpg"
  alt="Description of the image"
  caption="Optional caption text"
/>
```

## Examples

### Method 1: Using imported images (RECOMMENDED for local files)
```javascript
import EssayImage from "../../components/EssayImage";
import myImage from "../../public/my-image.png";

// Then in your component:
<EssayImage
  src={myImage}
  alt="Description of the image"
  caption="Optional caption"
/>
```

### Method 2: Using images from public folder
```javascript
<EssayImage
  src="/my-image.png"  // File must be in public folder
  alt="Description of the image"
  width={800}  // Required for public folder images
  height={600}  // Required for public folder images
  caption="Optional caption"
/>
```

### Method 3: Using external URLs
```javascript
<EssayImage
  src="https://example.com/photo.jpg"
  alt="A beautiful sunset"
/>
```

### With caption:
```javascript
<EssayImage
  src="https://example.com/chart.png"
  alt="Growth chart showing 2024 metrics"
  caption="Company growth metrics for 2024"
/>
```

### Priority loading (for above-the-fold images):
```javascript
<EssayImage
  src={myImage}
  alt="Hero image"
  priority={true}
/>

## Supported Image Sources

1. **Local images (imported)** - Best performance, automatic optimization
2. **Public folder images** - Good for dynamic images, requires width/height
3. **External URLs** - Currently configured for:
   - Pinterest (i.pinimg.com)
   - To add more hosts, update `images.remotePatterns` in `next.config.js`

## Features

- Responsive sizing (full width on mobile, constrained on desktop)
- Automatic aspect ratio preservation
- Lazy loading by default (use `priority={true}` for important images)
- Optional captions
- Clean, minimal styling that matches your essay aesthetics
- Supports both local and external images

## Tips

- **For best performance**: Import images directly (Method 1)
- **For dynamic images**: Use public folder with width/height (Method 2)
- **For external images**: Ensure the domain is whitelisted in next.config.js