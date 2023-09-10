import NavBar from "./NavBar";
import Cards from "./Cards";
import { getDrivers, getTeams, sortDrivers } from "../redux/actions";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Pagination from "./Pagination";


const Home = () => {
    const drivers = useSelector(state => state.drivers);
    const sortedDrivers = useSelector(state => state.sortedDrivers);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(getDrivers());
        dispatch(getTeams())
    }, [sortedDrivers]);

    const driversPerPage = 9
    const indexOfLastDriver= currentPage * driversPerPage;
    const indexOfFirstDriver = indexOfLastDriver - driversPerPage;
    const currentDrivers = (sortedDrivers.length ? sortedDrivers : drivers).slice(indexOfFirstDriver, indexOfLastDriver);

    const paginate = (number) => setCurrentPage(number);

    return (
        <div>
            <NavBar />
            <Cards drivers={currentDrivers} />
            <Pagination driversPerPage={driversPerPage} totalDrivers={drivers.length} paginate={paginate}/>
        </div>
    )
};

export default Home;

