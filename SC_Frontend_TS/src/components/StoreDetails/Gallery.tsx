import UiSlider from "../UI/Slider";


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
    ]

    


    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false
              }
            },
            {
                breakpoint: 500,
                settings: {
                  dots: false,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false
                }
              }
        ]
    };


    return (
        <div className="salon-details-gallery">
            <UiSlider settings={settings}>
                {testImages.map((el, i) => (
                    <div className="salon-details-img-container" key={i}>
                        <img src={el} alt={`Gallery Image ${i}`} />
                    </div>
                ))}
            </UiSlider>
        </div>
    )
}


