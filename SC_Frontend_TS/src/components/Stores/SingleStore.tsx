import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router";
import RateStars from "../UI/RatingStars";
import { type TSingleStore } from "../../pages/Stores";


export default function SingleStore({salon}: {salon: TSingleStore}){
    const [eyeVisible, setEyeVisible] = useState(false);

    const navigate = useNavigate();

    const handleEye = ()=>{
        setEyeVisible(!eyeVisible);
    }

    const handleDetailsSalon = (slug: string)=>{
        navigate('/stores/' + slug);
    }

    return(
        <div className="stores-main-single">
            <div className="store-desc">
                <h2>{salon.name}</h2>
                <RateStars rate={salon.rating}/>
                <p className="secondaryText">{salon.city}, {salon.country}</p>
                <button onClick={()=>handleDetailsSalon(salon.slug)} className="mainBtn">Learn More</button>
            </div>
            <div onMouseOver={handleEye} onMouseOut={handleEye} onClick={()=>handleDetailsSalon(salon.slug)} className="store-img-holder">
                <img src={salon.coverImg} alt="" />
                <FaEye className={`eye-icon ${!eyeVisible && 'eye-icon-hidden'}`}/>
            </div>
        </div>
    )
}