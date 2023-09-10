import { useDispatch, useSelector } from 'react-redux';
import { searchDriver, filterDriversByOrigin, filterDriversByTeam } from '../redux/actions';
import { useState } from "react";
import { sortDrivers } from '../redux/actions';

const SearchBar = ({ setDisplayedDrivers }) => {

    const dispatch = useDispatch();
    const drivers = useSelector(state => state.drivers);
    const teams = useSelector(state => state.teams);

    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleClick = () => {
        dispatch(searchDriver(search));
    };

    const handleSort = (event) => {
        dispatch(sortDrivers(event.target.value));
    };

    const handleFilterByOrigin = (event) => {
        dispatch(filterDriversByOrigin(event.target.value));
    };

    const handleFilterByTeam = (event) => {
        dispatch(filterDriversByTeam(event.target.value));
    };

    return (
        <div>
            <input type='search' onChange={handleChange} />
            <button onClick={handleClick}>Buscar</button>
            <p>Ordenar por:</p>
            <select onChange={handleSort}>
                <option>Nombre, A-Z</option>
                <option>Nombre, Z-A</option>
                <option>Edad, menor a mayor</option>
                <option>Edad, mayor a menor</option>
            </select>
            <button>Filtrar</button>
            <select onChange={handleFilterByTeam}>
                {
                    teams.map(({id, name}) => {
                        return <option key={id}>{name}</option>
                    })
                }
            </select>
            <select onChange={handleFilterByOrigin}>
                <option>Mis corredores</option>
                <option>Corredores preexistentes</option>
                <option>Todos</option>
            </select>
        </div>
    )
};

export default SearchBar;