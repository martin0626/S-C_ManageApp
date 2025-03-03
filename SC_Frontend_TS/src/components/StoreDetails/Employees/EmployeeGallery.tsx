import UiSlider from "../../UI/Slider";



export default function EmployeeGallery(){

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        
    };

    return (
        <section className="emp-gallery">
            <UiSlider settings={settings}>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0639/1237/8602/files/High_Skin_Fade_Haircut_For_Short_Hair_480x480.jpg?v=1714129170" alt="" />
                </div>
                <div>
                    <img src="https://i.pinimg.com/736x/9c/32/1e/9c321e6305e631e60116f5f08bddba3f.jpg" alt="" />
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0639/1237/8602/files/High_Skin_Fade_Haircut_For_Short_Hair_480x480.jpg?v=1714129170" alt="" />
                </div>
                <div>
                    <img src="https://i.pinimg.com/736x/9c/32/1e/9c321e6305e631e60116f5f08bddba3f.jpg" alt="" />
                </div>
            </UiSlider>
        </section>
    )
}