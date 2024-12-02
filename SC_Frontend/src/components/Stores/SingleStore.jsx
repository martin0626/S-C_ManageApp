import { useState } from "react";
import { FaEye } from "react-icons/fa";


export default function SingleStore(){
    const [eyeVisible, setEyeVisible] = useState(false);

    const handleEye = ()=>{
        setEyeVisible(!eyeVisible);
    }


    return(
        <div className="stores-main-single">
            <div className="store-desc">
                <h2>Lorem ipsum dolor!</h2>
                <p className="secondaryText">Lorem ipsum dolor sit amet consectetur!</p>
                <button className="mainBtn">Learn More</button>
            </div>
            <div onMouseOver={handleEye} onMouseOut={handleEye} className="store-img-holder">
                <img src="https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w" alt="" />
                <FaEye className={`eye-icon ${!eyeVisible && 'eye-icon-hidden'}`}/>
            </div>
        </div>
    )
}