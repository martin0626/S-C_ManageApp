import { FaRegCircleXmark } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";


export default function PopUpMenu({children}){

    const dispatch = useDispatch()

    const handleClose = ()=>{
        dispatch(uiActions.closeMenu());
    }

    return (
        <>
            <div onClick={handleClose} className="backDrop"></div>
            <div className="popUp-menu">
                <a onClick={handleClose} className="popUp-menu-close"><FaRegCircleXmark/></a>
                {children}
            </div>
        </>
    )
}