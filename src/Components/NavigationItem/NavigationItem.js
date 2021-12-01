import { NavLink } from "react-router-dom";
import s from './NavigationItem.module.css';

import { menu } from '../../menu.json';

export default function NavigationItem() {
    return <>{menu.map(item => (
        <NavLink
            key={item.linkText}
            to={item.link}
            className={({ isActive }) => isActive ? s.active : s.link}>
            {item.linkText}
        </NavLink>
    ))}
</>
}