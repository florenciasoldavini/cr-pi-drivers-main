import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <SearchBar />
            <button className="btn" id='agregar-corredor-btn'>
                <Link className='btn-txt' id='agregar-corredor-txt' to='/form'>AGREGAR DRIVER</Link>
            </button>
        </div>
    )
};

export default NavBar;