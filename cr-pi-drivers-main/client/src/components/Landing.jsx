import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="page" id="landing-page">
            <div className='btn-container'>
                <button className="btn" id="home-btn">
                    <Link className='btn-txt' id='home-txt' to='/home'>HOME</Link>
                </button>
            </div>
        </div>
    )
};

export default Landing;