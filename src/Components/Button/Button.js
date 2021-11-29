import s from './button.module.css';

export default function Button({ title, link, category, handleOnClick }) {
    return <button
        className={s.button}
        type='button'
        onClick={() => handleOnClick(category, link)}>
        {title}
    </button>
}
