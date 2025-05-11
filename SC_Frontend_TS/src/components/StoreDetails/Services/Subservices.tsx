import { useEffect, useState } from "react";
import { type SubServiceT } from "../../../pages/Stores";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { servicesActions } from "../../../store/services-slice";
import { useLocation } from "react-router";

export default function Subservices({subServices}: {subServices: SubServiceT[]}){
    const services = useAppSelector(state => state.services.selectedServices);
    const location = useLocation();
    let currentSalon: string = location.pathname.split('/')[location.pathname.split('/').length - 1];

    const dispatch = useAppDispatch();

    const handleAction = (id: string)=>{
        let currentService = {salon: currentSalon, id: id}

        if(services[currentSalon]?.indexOf(id) >= 0){
            dispatch(servicesActions.removeService(currentService))
        }else{
            dispatch(servicesActions.setServices(currentService))            
        }
    }
    
    return (
        <div className="selected-service">
            {
                subServices.map(subServ => {
                    let isSelected = services[currentSalon] ? services[currentSalon].includes(subServ._id) : false;
                    return (
                        <div key={subServ._id} onClick={()=> handleAction(subServ._id)} className={`selected-service-single ${isSelected && "selected-single-service"}`}>
                            <div className="selected-service-single-info">
                                <p className="selected-service-single-name">Ботокс и кератинова терапия на коса за мъже</p>
                                <p className="selected-service-single-time">30 Мин.</p>
                            </div>
                            <p className="selected-service-single-price">30 лв.</p>
                            <p className={`selection-indicate-${isSelected ? 'active' : 'inactive'}`}>{isSelected ? "Selected" : "Select"}</p>
                        </div>
                    )
                })
            }
        </div>  
    )
}