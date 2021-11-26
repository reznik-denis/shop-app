import s from './button.module.css';

export default function Button({ title, link, category, handleonClick }) {
    return <button
        className={s.button}
        type='button'
        onClick={() => handleonClick(category, link)}>
        {title}
    </button>
}
