import { Outlet } from 'react-router-dom';
import s from './appBar.module.css'

import { Navigation } from 'Components/Navigation'
import { Footer } from "Components/Footer";



export default function AppBar() {
    return (<><header className={s.header}>
                <Navigation />
            </header>
            <main className={s.main}>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}