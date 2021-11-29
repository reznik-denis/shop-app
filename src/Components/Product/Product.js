import s from './product.module.css';
import { Button } from 'Components/Button'
import shortid from 'shortid';
import addDefaultSrc from 'services/addDefaultStr';
import { Carusel } from 'Components/CaruselProdicts';

export default function Product({ item }) {
    const { title, image, price, discount, characteristic, text } = item;
    const handleOnClick = () => {
      return
    }

    return <><h2 className={s.title}>{title}</h2>
        <div className={s.container}>
            <div className={s.thumb}>
                {discount !== 0 && <div className={s.lable}>Discount <br /> {discount}%</div>}
                <img onError={addDefaultSrc} src={image} alt={title} />
            </div>
            <div className={s.shortInformation}>
                <p className={s.informationTitle}>Short information</p>
                <div className={s.flex}>
                    <p className={s.price}>Price:</p>
                    {discount === 0 ? <p className={s.price}>{price} USD</p> : <p className={s.price}>
                    <span className={s.oldPrice}>{price} USD</span> <span className={s.newPrice}>{price - (price * discount / 100)} USD</span></p>}
                </div>
                <Button title='BUY' handleOnClick={handleOnClick}/>
                <ul className={s.list}>
                {characteristic.slice(0, 3).map(({title, value, postfix}) => (
                    <li key={shortid.generate()} className={s.itemList}>
                        <p>{title} - {value} { postfix }</p>
                   </li>
                ) )}
                </ul>
            </div>
        </div>
        <p className={s.informationTitle}>Detail information</p>
        <div className={s.container}>
            <div className={s.description}>
                <p className={s.descriptionTitle}>Description</p>
                <div className={s.descriprionText} dangerouslySetInnerHTML={{ __html: `${text}` }}></div>
            </div>
            <div className={s.listDitail}>
                <p className={s.descriptionTitle}>Characteristic</p>
                <ul >
                {characteristic.map(({title, value, postfix}) => (
                    <li key={shortid.generate()}>
                        <div className={s.itemFlex}>
                            <p className={s.item}>{title}</p>
                            <p>{value} {postfix}</p>
                        </div>
                   </li>
                ))}
            </ul> 
            </div>
        </div>
        <Carusel/>
    </>
}