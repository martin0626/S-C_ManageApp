import Slider from "react-slick";


type LayoutProps =  { 
    children: React.ReactNode,
    settings: {}
 }

export default function UiSlider({children, settings}: LayoutProps) {
    return (
        <div className="slider-container" style={{width:"90%", margin: '0 auto'}}>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    )
}