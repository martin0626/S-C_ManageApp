import { useEffect, useState } from "react";
import { type SubServiceT } from "../../../pages/Stores";

export default function Subservices({subServices}: {subServices: SubServiceT[]}){

    //TODO Make this state Global
    const [selectedSubServ, setSelectedSubServ] = useState<string[]>([]);


    useEffect(()=>{
        setSelectedSubServ([]);
    }, [subServices]);


    const handleAction = (id: string)=>{
        setSelectedSubServ((prevSelected: string[]): string[] => {
            let updatedList = [...prevSelected];

            if(updatedList.includes(id)){
                updatedList = updatedList.filter(el=> el != id);
            }else {
                updatedList.push(id);
            }

            return updatedList
        })
    }
    
    return (
        <div className="selected-service">
            {
                subServices.map(subServ => {
                    let isSelected = selectedSubServ.includes(subServ._id);
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