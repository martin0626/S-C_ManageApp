import { FaRegCircleXmark } from "react-icons/fa6";
import { uiActions } from "../../store/ui-slice";
import CityFilter from "../Stores/Filters/CityFilter";
import SortFilter from "../Stores/Filters/SortFilter";
import ServiceFilter from "../Stores/Filters/ServicesFilter";
import { useAppDispatch } from "../../hooks/reduxHooks";



type PopUpProps = {
    componentName: 'city' | 'service' | 'sort';
}


export default function PopUpMenu({componentName}: PopUpProps){
    const filterCompMapper = {
        'city': <CityFilter/>,
        'service': <ServiceFilter/>,
        'sort': <SortFilter/>
    }

    const dispatch = useAppDispatch()


    const handleClose = ()=>{
        dispatch(uiActions.closeMenu());
    };

    


    return (
        <>
            <div onClick={handleClose} className="backDrop"></div>
            <div className="popUp-menu">
                <a onClick={handleClose} className="popUp-menu-close"><FaRegCircleXmark/></a>
                {filterCompMapper[componentName]}
            </div>
        </>
    )
}