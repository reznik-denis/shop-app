import { NavLink } from "react-router-dom";
import s from './Navigation.module.css';

export default function Navigation() {
    return <nav className={s.main}>
        <NavLink to="/" className={({ isActive }) => isActive ? s.active : s.link}>Home page</NavLink>
        <NavLink to={`/category`} className={({ isActive }) => isActive ? s.active : s.link}>Product Category</NavLink>
    </nav>
}