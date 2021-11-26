import { selectors } from '../redux';
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import {Product} from 'Components/Product'

export default function ProductPage() {
    const params = useParams();
    const products = useSelector(selectors.getProducts);
    const item = products.find(product => product.link === params.element)

    return <Product item={ item }/>
}