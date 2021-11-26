import { ListProducts } from 'Components/ListProducts';
import { selectors } from '../redux';
import { useSelector} from "react-redux";

export default function Category() {
    const products = useSelector(selectors.getProducts);
  
    return <div>
      <ListProducts list={products}/>
    </div>
}