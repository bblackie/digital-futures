// src/components/ImageGallery.jsx
export default function ImageGallery({ images }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
      {images.map((img) => (
        <a key={img.src} href={img.www} style={{ textAlign: 'center' }}>
          <img src={img.src} alt={img.alt} style={{ width: '100%' }} />
          <div>{`Sir ${img.alt}`}</div>
        </a>
      ))}
    </div>
  );
}