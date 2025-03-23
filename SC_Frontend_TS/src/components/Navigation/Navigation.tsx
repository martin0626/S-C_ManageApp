import { NavLink } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import { useState } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import store from "../../store";


type NavigationActive = {isActive: boolean};


export default function Navigation(){
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleOpenMenu = ()=>{
        setIsOpenMenu(!isOpenMenu);        
    }

    const {userName, isLoggedIn} = useAppSelector(state => state.auth);

    return (
        <nav className="navigation">
            {isLoggedIn && <h2>Hi {userName}</h2>}
            <div className="navigation-logo">
                <span>
                    <img src="https://t3.ftcdn.net/jpg/02/45/84/16/360_F_245841615_d7QzRv937jfiC176rmKK60ckNXU9V76z.jpg" alt="" />
                </span>
            </div>
            <div className="navigation-links">
                <NavLink 
                    to='/'
                    className={({isActive}: NavigationActive ) =>
                        isActive ? "active not-mobile" : "not-mobile"
                } 
                >
                    Home
                </NavLink>
                <NavLink 
                    to='stores'
                    className={({isActive}: NavigationActive) =>
                        isActive ? "active not-mobile" : "not-mobile"
                } 
                >
                    Stores
                </NavLink>
                
                <FaAlignJustify onClick={handleOpenMenu} />
            </div>
            <div className={`navigation-menu ${isOpenMenu ? 'navigation-open' : 'navigation-closed'}`}>
                <NavLink 
                    to='auth'
                    className={({isActive}: NavigationActive) =>
                        isActive ? "active-menu" : ""
                } 
                >
                    My Account
                </NavLink>
                <div className="separator"></div>
                <NavLink 
                    to='/'
                    className={({isActive}: NavigationActive) =>
                        isActive ? "active-menu only-mobile" : "only-mobile"
                } 
                >
                    Home
                </NavLink>
                <NavLink 
                    to='stores'
                    className={({isActive}: NavigationActive) =>
                        isActive ? "active-menu only-mobile" : "only-mobile"
                } 
                >
                    Stores
                </NavLink>
            </div>
        </nav>
    )
}