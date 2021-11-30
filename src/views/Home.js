import { ListProducts } from 'Components/ListProducts';
import { MainCarusel } from 'Components/MainCarusel';
import { selectors } from '../redux';
import { useSelector} from "react-redux";

export default function Home() {

  const products = useSelector(selectors.getProducts);
  const lastFourProduct = products.slice((products.length - 4), products.length)
  
  return <div>
      <MainCarusel/>
      <ListProducts list={lastFourProduct}/>
    </div>
}