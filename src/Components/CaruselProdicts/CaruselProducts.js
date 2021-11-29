import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from './caruselProducts.module.css';

import Slider from "react-slick";
import goUp from "services/goUp";
import settings from "./settings";

import { ItemProduct } from "Components/ItemProducts";
import { Button } from "Components/Button";
import { selectors } from '../../redux';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

export default function CaruselProducts() {
    const list = useSelector(selectors.getProducts);
    const navigate = useNavigate();

    const handleOnClick = (category, link) => {
        navigate(`${category}/${link}`);
        goUp()
    }

  return (<ul className={s.listCarusel}>
    <Slider {...settings}>
        {list && list.map(item => 
            <li key={item.id}>
                <ItemProduct data={item}>
                    <Button
                        title="BUY"
                        link={item.link}
                        category={item.categoryLink}
                        handleOnClick={handleOnClick}
                    />
                </ItemProduct>
            </li>
        )}
    </Slider>
  </ul>
  );
}