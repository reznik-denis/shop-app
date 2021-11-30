import s from './burgerMenu.module.css';
import MenuIcon from 'static/image/menu.svg';
import CloseIcon from 'static/image/close.svg'
import { NavigationItem } from 'Components/NavigationItem';

import { useState } from 'react';

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const handlerOpenMenu = () => {
        return isOpen ? setIsOpen(false) : setIsOpen(true)
    }
    return <div className={s.menu}>
        <button className={s.burgerBtn} onClick={handlerOpenMenu}>
            {isOpen ? <img src={CloseIcon} alt="Menu close" /> :
            <img src={MenuIcon} alt="Menu open" />}
        </button>
        <div className={isOpen ? s.menuContent : s.menuClose}>
            <NavigationItem />
        </div>
    </div>
}