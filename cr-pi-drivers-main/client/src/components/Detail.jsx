import { useEffect } from 'react';
import { detailView } from "../redux/actions";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Detail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const driver = useSelector(state => state.driverDetail);


    useEffect(() => {
        dispatch(detailView(id))
    }, []);

    return (
        <div key={id}>
            <button>
                <Link to='/home'>X</Link>
            </button>
            <h1>{driver.forename}</h1>
            <h1>{driver.surname}</h1>
            <img src={driver.image} alt='' />
            <p>NACIONALIDAD|{driver.nationality}</p>
            <p>DESCRIPCION|{driver.description}</p>
            <p>FECHA DE NACIMIENTO|{driver.dob}</p>
            <p>EQUIPOS|{driver.teams}</p>
        </div>
    )
};

export default Detail;