import s from './sortSelector.module.css'

export default function SortSelector({ options, value, onChange }) {
    return (<form className={s.select}>
        <select  value={value} onChange={evt => onChange(evt.target.value)}>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </form>
    );
}