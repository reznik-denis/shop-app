import { NavLink } from "react-router-dom";
import s from './NavigationItem.module.css';

export default function NavigationItem() {
    return <><NavLink to="/" className={({ isActive }) => isActive ? s.active : s.link}>Home page</NavLink>
           <NavLink to={`/category`} className={({ isActive }) => isActive ? s.active : s.link}>Product Category</NavLink>      
        </>
}