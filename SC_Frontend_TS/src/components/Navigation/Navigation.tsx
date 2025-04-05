import { NavLink } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { authActions } from "../../store/auth-slice";
import { clearToken } from "../../utils/jwtSetter";
import { Link } from "react-router";


type NavigationActive = {isActive: boolean};


export default function Navigation(){
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const {userName, isLoggedIn} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    const handleOpenMenu = ()=>{
        setIsOpenMenu(!isOpenMenu);        
    }

    const handleLogout = ()=>{
        clearToken();
        dispatch(authActions.logout());
    }



    //Handle close on click outside of Nav
    const navRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsOpenMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);



    return (
        <nav ref={navRef} className="navigation">
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
                {
                    !isLoggedIn && 
                        <>
                            <NavLink 
                                to='auth'
                                className={({isActive}: NavigationActive) =>
                                isActive ? "active-menu" : ""
                            }>
                                Register
                            </NavLink>
                        </>
                }
                {
                    isLoggedIn && 
                        <NavLink 
                            to='auth'
                            className={({isActive}: NavigationActive) =>
                                isActive ? "active-menu" : ""
                            } 
                        >
                            My Account
                        </NavLink>
                }
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
                {
                    isLoggedIn && 
                        <Link onClick={handleLogout} to='/'>
                            Logut
                        </Link>
                }
            </div>
        </nav>
    )
}