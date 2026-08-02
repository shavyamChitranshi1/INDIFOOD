import { useState } from "react";
import "../styles/Gallery.css";

export default function ProductGallery() {

  const images = [
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
    "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800",
    "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="gallery-container">

      <div className="product-gallery">

        <div className="thumbnail-list">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={selectedImage === image ? "active" : ""}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>

        <div className="main-image-card">
          <img
            src={selectedImage}
            alt="Product"
            className="main-image"
          />
        </div>

      </div>

    </div>
  );
}