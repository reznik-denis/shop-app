import { useNavigate } from 'react-router-dom';

import { ItemProduct } from "Components/ItemProducts";
import { Button } from "Components/Button";
import s from './ListProducts.module.css'


export default function ListProducts({ list }) {
    const navigate = useNavigate();

    const handleonClick = (category, link) => {
        navigate(`${category}/${link}`);
    }
    return <ul className={s.list}>
        {list && list.map(item => 
            <li key={item.id} className={s.item}>
                <ItemProduct data={item} >
                    <Button
                        title="BUY"
                        link={item.link}
                        category={item.categoryLink}
                        handleonClick={handleonClick}
                    />
                </ItemProduct>
            </li>
        )}
    </ul>
}