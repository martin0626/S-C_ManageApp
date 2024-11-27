import { Link, NavLink } from "react-router-dom";

export default function Navigation(){
    return (
        <nav className="navigation">
            <span className="navigation-logo">
                <img src="https://t3.ftcdn.net/jpg/02/45/84/16/360_F_245841615_d7QzRv937jfiC176rmKK60ckNXU9V76z.jpg" alt="" />
            </span>
            <NavLink 
                to='/'
                className={({isActive}) =>
                    isActive ? "active" : ""
                } 
            >
                Home
            </NavLink>
            <NavLink 
                to='stores'
                className={({isActive}) =>
                    isActive ? "active" : ""
                } 
            >
                Stores
            </NavLink>
            <NavLink 
                to='/'
                className={({isActive}) =>
                    isActive ? "active" : ""
                } 
            >
                Login
            </NavLink>
        </nav>
    )
}