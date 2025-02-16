import { FaChevronRight } from "react-icons/fa6";
// import SelectedService from "./Subservices";
import Subservices from "./Subservices";
import { type SingleServiceT} from '../../../pages/Stores'
import { useState } from "react";



export default function ServicesList({services}: {services: SingleServiceT []}){

    const [selectedService, setSelectedService] = useState<SingleServiceT>(services[0]);

    console.log(selectedService);

    
    const handleSelect = (service: SingleServiceT)=>{
        setSelectedService(service);
    }

    return (
        <div className="services-list">
            <div className="all-services">
                <ul className="all-services-list"> 

                    {
                        services.map(service=>{
                            if(service._id === selectedService._id){
                                return <div key={service.name} className="all-services-list-option">
                                            <li className="service-option li-active">
                                                <a>
                                                    <span>Подстригване и прически (4)</span> 
                                                    <span className="service-option-price">From 25 lv.</span>
                                                </a> 
                                                <span className="service-arr"><FaChevronRight /></span>
                                            </li>
                                            <Subservices subServices={selectedService.subServices} />
                                        </div>
                            }else{
                                return <div onClick={()=>handleSelect(service)} key={service.name} className="all-services-list-option">
                                            <li className="service-option">
                                                <a>
                                                    <span>Подстригване и прически (4)</span> 
                                                    <span className="service-option-price">From 25 lv.</span>
                                                </a> 
                                                <span className="service-arr"><FaChevronRight /></span>
                                            </li>
                                        </div>
                            }
                        })
                    }
                </ul>
            </div>

            <Subservices subServices={selectedService.subServices}/>
            
        </div>
    )
}