import './Link.css';

// eslint-disable-next-line react/prop-types
function Link({url, children}) {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            {children}
        </a>
    );
}

export default Link;