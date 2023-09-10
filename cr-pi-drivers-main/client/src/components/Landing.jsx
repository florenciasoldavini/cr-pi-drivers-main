import { Link } from 'react-router-dom';
import './Landing.css'

const Landing = () => {
    return (
        <div>
            <button>
                <Link to='/home'>Home</Link>
            </button>
        </div>
    )
};

export default Landing;