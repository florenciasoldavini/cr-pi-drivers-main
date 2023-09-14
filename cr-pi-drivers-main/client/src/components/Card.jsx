import { Link } from 'react-router-dom';
import { deleteDriver } from '../redux/actions';
import { useDispatch } from 'react-redux';

const Card = ({ id, forename, surname, image, teams }) => {
    const dispatch = useDispatch();

    const handleClose = () => {
        console.log(id);
        dispatch(deleteDriver({ id }))
    };

    const handleClick = () => {};

    const regexUUID = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    let result = String(id).match(regexUUID) ? "UUID" : "Not UUID";

    const renderButton = () => {
        if (result === "UUID") {
            return <div>
                <button onClick={handleClose}>X</button>
                <button >
                    <Link to={`/update/${id}`}>Editar</Link>
                </button>
            </div>

        }
    };

    return (
        <div className='card'>
            {renderButton()}
            <Link className='card-text' to={`/detail/${id}`} >
                <h2 >{forename} {surname}</h2>
            </Link>
            <div>
                <img src={image} alt='' className='card-img' />
            </div>
            <p className='card-text'>teams: {teams}</p>
        </div>
    )
};

export default Card; 