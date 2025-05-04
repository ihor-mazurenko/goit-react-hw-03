import css from './SearchBox.module.css'

export default function SearchBox({ value, onFilter }) {
    return (
        <div className={css.container}>
            <p>Find contacts by name</p>
            <input
                typeof="text"
                value={value}
                onChange={e => onFilter(e.target.value)}
                className={css.field}/>
        </div>
    )
};