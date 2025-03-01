import UiSlider from "../../UI/Slider";



export default function EmployeeGallery(){

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },]
    };

    return (
        <section className="emp-gallery">
            <UiSlider settings={settings}>
                <div>
                    <img src="https://hanzo.com/wp-content/uploads/2024/07/high-fade-haircut.jpg" alt="" />
                </div>
                <div>
                    <img src="https://i.pinimg.com/736x/9c/32/1e/9c321e6305e631e60116f5f08bddba3f.jpg" alt="" />
                </div>
                <div>
                    <img src="https://i.pinimg.com/736x/9c/32/1e/9c321e6305e631e60116f5f08bddba3f.jpg" alt="" />
                </div>
                <div>
                    <img src="https://i.pinimg.com/736x/9c/32/1e/9c321e6305e631e60116f5f08bddba3f.jpg" alt="" />
                </div>
            </UiSlider>
        </section>
    )
}