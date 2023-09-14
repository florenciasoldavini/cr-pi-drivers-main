import NavBar from "./NavBar";
import Cards from "./Cards";
import { getDrivers, getTeams } from "../redux/actions";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Pagination from "./Pagination";


const Home = () => {
    const drivers = useSelector(state => state.drivers);
    const filteredDrivers = useSelector(state => state.filteredDrivers);
    const dispatch = useDispatch();

    const cardsPerPage = 9
    const [currentPage, setCurrentPage] = useState(1);
    const [firstIndex, setFirstIndex] = useState(0)
    const lastIndex = firstIndex + cardsPerPage;
    const currentDrivers = (filteredDrivers.length ? filteredDrivers : drivers).slice(firstIndex, lastIndex);
    const numberOfPages = Math.ceil(filteredDrivers.length ? filteredDrivers.length : drivers.length / cardsPerPage);


    useEffect(() => {
        dispatch(getDrivers());
        dispatch(getTeams())
    }, [filteredDrivers]);


    const handlePageClick = (event) => {
        const newIndex = (event.selected * cardsPerPage) % (filteredDrivers.length ? filteredDrivers.length : drivers.length);
        setFirstIndex(newIndex);
    };

    return (
        <div className="page" id="home-page">
            <NavBar />
            <Cards drivers={currentDrivers} />
            <Pagination handlePageClick={handlePageClick} numberOfPages={numberOfPages}/>
        </div>
    )
};

export default Home;

