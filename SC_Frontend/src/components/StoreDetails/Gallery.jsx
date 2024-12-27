import React, { useRef, useState } from "react";


export default function Gallery({images}){
  
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

    const sliderRef = useRef(null);
    const imageRef = useRef(null);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

  
    const startDrag = (e) => {
      setIsDragging(true);
      setStartX(e.pageX || e.touches[0].pageX);
      setScrollLeft(sliderRef.current.scrollLeft);
    };
  
    const stopDrag = () => {
      setIsDragging(false);
    };
  
    const handleDrag = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX || e.touches[0].pageX;
      const walk = (x - startX) * 2; // Adjust scroll speed

      const width = sliderRef.current.scrollWidth;
      const imageWidth = imageRef.current.width
      
        sliderRef.current.scrollLeft = scrollLeft - walk;

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
                drag='x'
            >
                {
                  testImages.map((el, i)=> 
                    <div className="slider-img">
                      <img ref={imageRef} key={i} src={el}/>
                    </div>
                  )
                }
            </div>
        </div>
    )
}


