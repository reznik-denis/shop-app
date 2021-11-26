import s from './ItemProduct.module.css'

export default function ItemProduct({ children, data }) {
    const { title, price, image, discount } = data;
    return <div className={s.conteiner}>
        <div className={s.thumb}>
            <img src={image} alt={title} />
        </div>
        <h2>{title}</h2>
        {discount === 0 ? <p className={s.price}>{price} USD</p> : <p className={s.price}>
            <span className={s.oldPrice}>{price} USD</span> <span className={s.newPrice}>{price - (price * discount / 100)} USD</span></p>}
        <div className={s.flex}>{children}</div>
        {discount !== 0 && <div className={s.lable}>Discount <br /> {discount}%</div>}
    </div>
    
}

