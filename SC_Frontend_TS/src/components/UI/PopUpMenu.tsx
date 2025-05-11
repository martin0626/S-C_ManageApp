import { FaRegCircleXmark } from "react-icons/fa6";
import { uiActions } from "../../store/ui-slice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import CityFilter from "../Stores/Filters/CityFilter";
import SortFilter from "../Stores/Filters/SortFilter";
import ServiceFilter from "../Stores/Filters/ServicesFilter";
import Portal from "./Portal";
import AppointmentsComp from "../Appointments/Appointments";


export default function PopUpMenu(){
    const filterCompMapper = {
        'city': <CityFilter/>,
        'service': <ServiceFilter/>,
        'sort': <SortFilter/>,
        'appoints': <AppointmentsComp/>
    }

    const compName = useAppSelector(state => state.ui.menuComponent)
    const dispatch = useAppDispatch()

    const handleClose = ()=>{
        dispatch(uiActions.closeMenu());
    };


    if(compName == ''){
        return null
    }

    return (
        <Portal>
            <div onClick={handleClose} className="backDrop"></div>
            <div className="popUp-menu">
                <a onClick={handleClose} className="popUp-menu-close"><FaRegCircleXmark/></a>
                { filterCompMapper[compName] }
            </div>
        </Portal>
    )
}