import { FaChevronRight } from "react-icons/fa6";
import SelectedService from "./Subservices";
import Subservices from "./Subservices";



export default function ServicesList(){
    return (
        <div className="services-list">
            <div className="all-services">
                <ul className="all-services-list"> 
                    <div className="all-services-list-option">
                        <li className="service-option li-active">
                            <a>
                                <span>Подстригване и прически (4)</span> 
                                <span className="service-option-price">From 25 lv.</span>
                            </a> 
                            <span className="service-arr"><FaChevronRight /></span>
                        </li>
                        <Subservices/>
                    </div>

                    <li className="service-option ">
                        <a>
                            <span>Подстригване и прически (4)</span> 
                            <span className="service-option-price">From 25 lv.</span>
                        </a> 
                        <span className="service-arr"><FaChevronRight /></span>
                    </li>
                    
                    <li className="service-option ">
                        <a>
                            <span>Подстригване и прически (4)</span> 
                            <span className="service-option-price">From 25 lv.</span>
                        </a> 
                        <span className="service-arr"><FaChevronRight /></span>
                    </li>
                    <li className="service-option ">
                        <a>
                            <span>Подстригване и прически (4)</span> 
                            <span className="service-option-price">From 25 lv.</span>
                        </a> 
                        <span className="service-arr"><FaChevronRight /></span>
                    </li>
                </ul>
            </div>
            <Subservices/>

        </div>
    )
}