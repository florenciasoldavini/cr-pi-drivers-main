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
        <div className='page' id='detail-page' key={id}>
            <div className='detail'>
                <div className='title-container'>
                    <h2 className='detail-txt' id='title'> {driver.forename} {driver.surname}</h2>
                </div>
                <div className='img-info-container'>
                    <div className='img-container'>
                        <img className='detail-img' src={driver.image} alt='' />
                    </div>
                    <div className='info-container'>
                        <h6 className='detail-txt'>NACIONALIDAD</h6>
                        <h4 className='detail-txt'>{driver.nationality}</h4>
                        <h6 className='detail-txt'>FECHA DE NACIMIENTO</h6>
                        <h4 className='detail-txt'>{driver.dob}</h4>
                        <h6 className='detail-txt'>EQUIPOS</h6>
                        <h4 className='detail-txt'>{driver.teams}</h4>
                    </div>
                </div>
                <div className='description-container'>
                    <h6 className='detail-txt'>DESCRIPCION</h6>
                    <p className='detail-txt' id='description'>{driver.description}</p>
                </div>
                <button className='btn' id='back-btn'>
                    <Link className='btn-txt' id='back-txt' to='/home'>X</Link>
                </button>
            </div>
        </div>
    )
};

export default Detail;