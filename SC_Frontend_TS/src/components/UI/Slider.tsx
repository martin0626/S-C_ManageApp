import { useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaStar } from "react-icons/fa";
import RateStars from "./RatingStars";

export default function UiSlider(){

    const sliderRef = useRef<HTMLDivElement>(null)

    const handleNext = (step: number)=>{
        if (sliderRef.current) {
            
            step > 0 ? 
                sliderRef.current.scrollLeft += window.innerWidth
            :
                sliderRef.current.scrollLeft -= window.innerWidth

        }
    }


    return (
        <div className="uiSlider">
            <h2><FaStar /> Reviews</h2>
            <span className="slider-leftArr" onClick={()=> handleNext(-1)}><FaArrowAltCircleLeft/></span>
            <span className="slider-rightArr" onClick={()=> handleNext(1)}><FaArrowAltCircleRight/></span>
            <div ref={sliderRef} className="uiSlider-container">
                <article className="slide-card">
                    <div className="card-content">
                        <div className="card-content-profile">
                            <RateStars rate={3}/>
                            <div className="card-content-profile-img">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="" />
                            </div>
                        </div>
                        <div className="card-content-text">
                            <h4><span style={{color: '#ffffffa8', fontSize: '0.9rem'}}>Name:</span> John Smith</h4>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere nam numquam, explicabo est animi corrupti nobis impedit
                                 fugiat necessitatibus quasi dolores iste non tempore error exercitationem tempora, sunt mollitia blanditiis! Lorem, ipsum 
                                 dolor sit amet consectetur adipisicing elit. Saepe reprehenderit pariatur qui sapiente dolores, unde nesciunt dicta expe
                                 dita neque architecto exercitationem laudantium cumque. Cumque enim odit ad, maiores sit molestias!
                            </p>
                        </div>
                    </div>
                </article>
                <article className="slide-card">
                    <div className="card-content">
                        <div className="card-content-profile">
                            <RateStars rate={3}/>
                            <div className="card-content-profile-img">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="" />
                            </div>
                        </div>
                        <div className="card-content-text">
                            <h4><span style={{color: '#ffffffa8', fontSize: '0.9rem'}}>Name:</span> John Smith</h4>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere nam numquam, explicabo est animi corrupti nobis impedit
                                 fugiat necessitatibus quasi dolores iste non tempore error exercitationem tempora, sunt mollitia blanditiis! Lorem, ipsum 
                                 dolor sit amet consectetur adipisicing elit. Saepe reprehenderit pariatur qui sapiente dolores, unde nesciunt dicta expe
                                 dita neque architecto exercitationem laudantium cumque. Cumque enim odit ad, maiores sit molestias!
                            </p>
                        </div>
                    </div>
                </article>
                <article className="slide-card">
                    <div className="card-content">
                        <div className="card-content-profile">
                            <RateStars rate={3}/>
                            <div className="card-content-profile-img">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="" />
                            </div>
                        </div>
                        <div className="card-content-text">
                            <h4><span style={{color: '#ffffffa8', fontSize: '0.9rem'}}>Name:</span> John Smith</h4>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere nam numquam, explicabo est animi corrupti nobis impedit
                                 fugiat necessitatibus quasi dolores iste non tempore error exercitationem tempora, sunt mollitia blanditiis! Lorem, ipsum 
                                 dolor sit amet consectetur adipisicing elit. Saepe reprehenderit pariatur qui sapiente dolores, unde nesciunt dicta expe
                                 dita neque architecto exercitationem laudantium cumque. Cumque enim odit ad, maiores sit molestias!
                            </p>
                        </div>
                    </div>
                </article>
                
            </div>
        </div>
    )
}