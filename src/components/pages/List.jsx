import './List.css';

// eslint-disable-next-line react/prop-types
export default function List({items}) {
    return (
        <ul>
            {/* eslint-disable-next-line react/prop-types */}
            {items.map((item) => (
                <li key={item.field}>
                    <span>{item.field} : </span> {item.value}
                </li>
            ))}
        </ul>
    );
}