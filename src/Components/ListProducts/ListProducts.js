import { useNavigate } from 'react-router-dom';
import s from './ListProducts.module.css';

import goUp from "services/goUp";
import { ItemProduct } from "Components/ItemProducts";
import { Button } from "Components/Button";



export default function ListProducts({ list }) {
    const navigate = useNavigate();

    const handleOnClick = (category, link) => {
        navigate(`${category}/${link}`);
        goUp()
    }
    
    return <ul className={s.list}>
        {list && list.map(item => 
            <li key={item.id} className={s.item}>
                <ItemProduct data={item} >
                    <Button
                        title="BUY"
                        link={item.link}
                        category={item.categoryLink}
                        handleOnClick={handleOnClick}
                    />
                </ItemProduct>
            </li>
        )}
    </ul>
}