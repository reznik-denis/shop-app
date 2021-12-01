import { Link } from "react-router-dom";

import s from './Navigation.module.css';
import Logo from 'static/image/logo.png';

import { NavigationItem } from 'Components/NavigationItem';
import { BurgerMenu } from "Components/BurgerMenu";

export default function Navigation() {
    return <nav className={s.main}>
        <Link to="/" className={s.linkLogo}><img src={Logo} alt='Logo' width='100px' /></Link>
        <div className={s.menu}>
            <NavigationItem/>
        </div>
        <div className={s.menuBurger}>
            <BurgerMenu/>
        </div>
    </nav>
}