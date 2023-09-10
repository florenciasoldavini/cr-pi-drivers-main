import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <SearchBar />
            <button>
                <Link to='/form'>Agregar driver</Link>
            </button>
        </div>
    )
};

export default NavBar;