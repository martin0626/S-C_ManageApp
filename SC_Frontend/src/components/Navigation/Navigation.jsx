import { NavLink } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import { useState } from "react";

export default function Navigation(){
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleOpenMenu = ()=>{
        setIsOpenMenu(!isOpenMenu);        
    }


    return (
        <nav className="navigation">
            <div className="navigation-logo">
                <span>
                    <img src="https://t3.ftcdn.net/jpg/02/45/84/16/360_F_245841615_d7QzRv937jfiC176rmKK60ckNXU9V76z.jpg" alt="" />
                </span>
            </div>
            <div className="navigation-links">
                <NavLink 
                    to='/'
                    className={({isActive}) =>
                        isActive ? "active not-mobile" : "not-mobile"
                } 
                >
                    Home
                </NavLink>
                <NavLink 
                    to='stores'
                    className={({isActive}) =>
                        isActive ? "active not-mobile" : "not-mobile"
                } 
                >
                    Stores
                </NavLink>
                
                <FaAlignJustify onClick={handleOpenMenu} />
            </div>
            <div className={`navigation-menu ${isOpenMenu ? 'navigation-open' : 'navigation-closed'}`}>
                <NavLink 
                    to='login'
                    className={({isActive}) =>
                        isActive ? "active-menu" : ""
                } 
                >
                    Login
                </NavLink>
                <NavLink 
                    to='register'
                    className={({isActive}) =>
                        isActive ? "active-menu" : ""
                } 
                >
                    Register
                </NavLink>
                <div className="separator"></div>
                <NavLink 
                    to='/'
                    className={({isActive}) =>
                        isActive ? "active-menu only-mobile" : "only-mobile"
                } 
                >
                    Home
                </NavLink>
                <NavLink 
                    to='stores'
                    className={({isActive}) =>
                        isActive ? "active-menu only-mobile" : "only-mobile"
                } 
                >
                    Stores
                </NavLink>
            </div>
        </nav>
    )
}