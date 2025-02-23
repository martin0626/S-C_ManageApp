import { useEffect, useState } from "react";
import { type SubServiceT } from "../../../pages/Stores";

export default function Subservices({subServices}: {subServices: SubServiceT[]}){

    //TODO Make this state Global
    const [selectedSubServ, setSelectedSubServ] = useState<string[]>([]);


    useEffect(()=>{
        setSelectedSubServ([]);
    }, [subServices]);

    const handleSelect = (id: string)=>{
        setSelectedSubServ(prevState=>{
            return [...prevState, id];
        })
    }

    const handleRemove = (id: string)=>{
        setSelectedSubServ(prevState=>{
            return prevState.filter(e=> e != id);
        })
    }
    
    
    return (
        <div className="selected-service">

            {
                subServices.map(subServ => {
                    if(selectedSubServ.includes(subServ._id)){
                        return <div key={subServ._id} onClick={()=> handleRemove(subServ._id)} className="selected-service-single selected-single-service">
                                    <div className="selected-service-single-info">
                                        <p className="selected-service-single-name">Ботокс и кератинова терапия на коса за мъже</p>
                                        <p className="selected-service-single-time">30 Мин.</p>
                                    </div>
                                    <p className="selected-service-single-price">30 лв.</p>
                                    <p className="selection-indicate-active">Selected</p>
                                </div>
                    }else{
                        return <div key={subServ._id} onClick={()=> handleSelect(subServ._id)} className="selected-service-single">
                                    <div className="selected-service-single-info">
                                        <p className="selected-service-single-name">Ботокс и кератинова терапия на коса за мъже</p>
                                        <p className="selected-service-single-time">30 Мин.</p>
                                    </div>
                                    <p className="selected-service-single-price">30 лв.</p>
                                    <p className="selection-indicate-inactive">Select</p>
                    
                                </div>
                    }
                })
            }
        </div>  
    )
}