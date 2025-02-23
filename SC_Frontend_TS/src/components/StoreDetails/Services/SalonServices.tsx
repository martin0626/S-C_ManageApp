import RateStars from "../../UI/RatingStars";
import { FaScissors, FaPaintbrush } from "react-icons/fa6";
import ServicesList from "./SingleServiceList";
import { SingleServiceT } from "../../../pages/Stores";
import { useState } from "react";



type category = 'hair' | 'nails' | 'face' | 'body'

type ServicesProps = {
    services: SingleServiceT []; 
    city: string; 
    name: string; 
    address: string; 
    rating: number;
}

export default function Services({services, city, name, address, rating}: ServicesProps){

    const iconsMapper = {
        'hair': <FaScissors/>,
        'nails': <FaPaintbrush/>,
        'face': <FaPaintbrush/>,
        'body': <FaPaintbrush/>,
    }

    const categories = Array.from(new Set(services.map(s=> s. category)))

    const [selectedCat, setSelectedCat] = useState<category>(categories[0]);

    const handleCategory = (cat: category)=>{
        setSelectedCat(cat);
    }

    return (
        <div className="services">
            <div className="services-header">
                <div className="services-header-address">
                    <h3>{name}</h3>
                    <p>{city}, {address}</p>
                </div>
                <div className="services-header-rate">
                    <p>{rating.toFixed(1)}</p>
                    <RateStars rate={rating}/>
                </div>
            </div>
            <div className="services-main">
                <div className="services-main-menu">
                    {categories.map(c => 
                        <div  className="sinlge-service-icon">

                            <p onClick={()=>handleCategory(c)} className={`icon-service ${c === selectedCat && 'activeCat'}`}>
                                {iconsMapper[c]}
                            </p>

                            <a style={{textTransform: "capitalize"}}>{c}</a>
                        </div>
                    )}
                </div>
            </div>
            <ServicesList services={services.filter(s=> s.category === selectedCat)}/>
        </div>
    )
}