import React, { useRef, useState } from "react";


type GalleryProps = {
  images: string []
}

export default function Gallery({images}: GalleryProps){
  
    const testImages = [
      "https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w",
    ]

    const sliderRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

  
    const startDrag = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
      setIsDragging(true);
      // setStartX(e.pageX || e.touches[0].pageX);

      let x: number

      if ("touches" in e) {
          // This is a TouchEvent
          x = e.touches[0].pageX;
      } else {
          // This is a MouseEvent
          x = e.pageX;
      }
      setStartX(x);

      setScrollLeft(sliderRef.current!.scrollLeft);
    };
  
    const stopDrag = () => {
      setIsDragging(false);
    };
  
    const handleDrag = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      e.preventDefault();

      let x: number;

      if ("touches" in e) {
          // This is a TouchEvent
          x = e.touches[0].pageX;
      } else {
          // This is a MouseEvent
          x = e.pageX;
      }

      const walk = (x - startX) * 2; // Adjust scroll speed
      sliderRef.current!.scrollLeft = scrollLeft - walk;
    };


    return (
        <div className="gallery">
            <div 
                className="slider"
                ref={sliderRef}
                onMouseDown={startDrag}
                onMouseMove={handleDrag}
                onMouseUp={stopDrag}
                onDragEnd={stopDrag}
                onTouchStart={startDrag}
                onTouchMove={handleDrag}
                onTouchEnd={startDrag}
                // drag='x'
            >
                {testImages.map((el, i) => (
                    <div className="slider-img" key={i}>
                        <img src={el} alt={`Gallery Image ${i}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}


