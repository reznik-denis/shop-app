import s from './product.module.css';
import { Button } from 'Components/Button'
import shortid from 'shortid';

export default function Product({ item }) {
    const { title, image, price, discount, characteristic, text } = item;

    return <><h2>{title}</h2>
        <div className={s.container}>
            <div className={s.thumb}>
                <img src={image} alt={title} />
            </div>
            <div>
                <p>Short information</p>
                <p>Price</p>
                {discount === 0 ? <p className={s.price}>{price} USD</p> : <p className={s.price}>
                <span className={s.oldPrice}>{price} USD</span> <span className={s.newPrice}>{price - (price * discount / 100)} USD</span></p>}
                <Button title='BUY' />
                <ul className={s.list}>
                {characteristic.slice(0, 3).map(({title, value, postfix}) => (
                    <li key={shortid.generate()}>
                        <p>{title} {value} { postfix }</p>
                   </li>
                ) )}
                </ul>
            </div>
        </div>
        <p>Detail information</p>
        <div className={s.details}>
            <div className={s.description}>
                <p>Description</p>
                <div dangerouslySetInnerHTML={{ __html: `${text}` }}></div>
            </div>
            <ul className={s.list}>
                {characteristic.map(({title, value, postfix}) => (
                    <li key={shortid.generate()}>
                        <p>{title} {value} { postfix }</p>
                   </li>
                ))}
            </ul>
        </div>
    </>
}