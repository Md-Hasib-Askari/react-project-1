import {Link as RouterLink} from 'react-router-dom';
import Link from "./Link.jsx";
import './Header.css';
import viteLogo from '/vite.svg'
import reactLogo from "../assets/react.svg";

function Header() {
    return (
        <header>
            <div>
                <Link url="https://vitejs.dev">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </Link>
                <Link url="https://react.dev">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </Link>
            </div>
            <h1>My Portfolio</h1>
            <nav>
                <RouterLink to='/' className='App-link'>About me</RouterLink>
                <RouterLink to='/projects' className='App-link'>Projects</RouterLink>
            </nav>
        </header>
    );
}

export default Header;