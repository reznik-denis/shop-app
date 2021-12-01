import { ListProducts } from 'Components/ListProducts';
import { MainCarusel } from 'Components/MainCarusel';
import { selectors } from '../redux';
import { useSelector } from "react-redux";
import s from './views.module.css';

export default function Home() {

  const products = useSelector(selectors.getProducts);
  const lastFourProduct = products.slice((products.length - 4), products.length)
  
  return <div>
    <MainCarusel />
    <h2 className={s.titleHome}>Last added products</h2>
    <ListProducts list={lastFourProduct}/>
    </div>
}