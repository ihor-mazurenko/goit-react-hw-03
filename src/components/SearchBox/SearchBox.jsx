export default function SearchBox({value, onFilter}) {
    return (
        <div>
            <p>Find contacts by name</p>
            <input typeof="text" value={value} onChange={e => onFilter(e.target.value)}/>
        </div>
    )
};