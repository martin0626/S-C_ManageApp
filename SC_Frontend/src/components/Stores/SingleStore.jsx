import { useState } from "react";
import { FaEye } from "react-icons/fa";


export default function SingleStore({salon}){
    const [eyeVisible, setEyeVisible] = useState(false);

    const handleEye = ()=>{
        setEyeVisible(!eyeVisible);
    }

    return(
        <div className="stores-main-single">
            <div className="store-desc">
                <h2>{salon.name}</h2>
                <p className="secondaryText">{salon.city}, {salon.country}</p>
                <button className="mainBtn">Learn More</button>
            </div>
            <div onMouseOver={handleEye} onMouseOut={handleEye} className="store-img-holder">
                <img src={salon.coverImg} alt="" />
                <FaEye className={`eye-icon ${!eyeVisible && 'eye-icon-hidden'}`}/>
            </div>
        </div>
    )
}