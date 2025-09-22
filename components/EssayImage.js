import Image from 'next/image';
import styles from './EssayImage.module.css';
import { useState, useEffect } from 'react';

export default function EssayImage({ src, alt, caption, priority = false, width, height }) {
  const [aspectRatio, setAspectRatio] = useState(16/9);
  const isLocalImage = typeof src === 'object' || src.startsWith('/');
  
  useEffect(() => {
    // If width and height are provided (for local images), calculate aspect ratio
    if (width && height) {
      setAspectRatio(width / height);
    }
  }, [width, height]);
  
  // Handle local imported images (StaticImageData)
  if (typeof src === 'object') {
    return (
      <figure className={styles.imageContainer}>
        <div className={styles.imageWrapper} style={{ aspectRatio: src.width / src.height }}>
          <Image
            src={src}
            alt={alt}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 768px"
            priority={priority}
          />
        </div>
        {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
      </figure>
    );
  }
  
  // Handle local public folder images
  if (isLocalImage && width && height) {
    return (
      <figure className={styles.imageContainer}>
        <div className={styles.imageWrapper} style={{ aspectRatio: width / height }}>
          <Image
            src={src}
            alt={alt}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 768px"
            priority={priority}
          />
        </div>
        {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
      </figure>
    );
  }
  
  // Handle external URLs
  return (
    <figure className={styles.imageContainer}>
      <div className={styles.imageWrapper} style={{ aspectRatio: aspectRatio }}>
        <Image
          src={src}
          alt={alt}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 768px"
          priority={priority}
          onLoad={(e) => {
            const { naturalWidth, naturalHeight } = e.target;
            setAspectRatio(naturalWidth / naturalHeight);
          }}
        />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}