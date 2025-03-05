import UiSlider from "../../UI/Slider";



export default function EmployeeGallery({gallery}: {gallery: string []}){

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        
    };

    return (
        <section className="emp-gallery">
            {
                gallery.length > 0
                    ?
                <UiSlider settings={settings}>
                    {
                        gallery.map(i => {
                            return (
                                <div>
                                    <img src={i} alt="Portfolio Image" />
                                </div>
                            )
                        })
                    }
                </UiSlider>
                    :
                <p>There is no Result Images Yet</p>
            }
        </section>
    )
}