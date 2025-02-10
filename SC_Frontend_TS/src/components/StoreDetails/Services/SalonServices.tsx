import { useState } from "react";
import RateStars from "../../UI/RatingStars";
import { FaScissors, FaPaintbrush } from "react-icons/fa6";
import ServicesList from "./SingleService";
import { SingleServiceT } from "../../../pages/Stores";


type ServicesProps = {
    services: SingleServiceT []; 
    city: string; 
    name: string; 
    address: string; 
    rating: number;
}

export default function Services({services, city, name, address, rating}: ServicesProps){
    const [selectedService, setSelectedService] = useState<SingleServiceT>(services[0]);

    const iconsMapper = {
        'hair': <FaScissors/>,
        'nails': <FaPaintbrush/>,
        'face': <FaPaintbrush/>,
        'body': <FaPaintbrush/>,

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

                    {services.map(s => 
                        <div className="sinlge-service-icon">
                            <p className="icon-service">
                                {iconsMapper[s.category]}
                            </p>
                            <a style={{textTransform: "capitalize"}}>{s.category}</a>
                        </div>
                    )}
                </div>
            </div>
            <ServicesList/>
        </div>
    )
}