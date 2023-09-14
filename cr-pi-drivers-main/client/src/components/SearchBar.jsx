import { useDispatch, useSelector } from 'react-redux';
import { searchDriver } from '../redux/actions';
import { useState } from "react";
import { applyFilters } from '../redux/actions';

const SearchBar = ({ setDisplayedDrivers }) => {

    const dispatch = useDispatch();
    const teams = useSelector(state => state.teams);

    const [search, setSearch] = useState("");

    const [filters, setFilters] = useState({
        sortBy: '',
        filterByTeam: '',
        filterByOrigin: ''
    });

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSearch = () => {
        dispatch(searchDriver(search));
    };

    const handleFilters = (event) => {
        setFilters({
            ...filters,
            [event.target.name]: event.target.value,
        });
    };

    const handleClick = () => {
        dispatch(applyFilters(filters))
    };

    return (
        <div className='search-bar'>
            <div className='search'>
                <input id='search-input' type='search' onChange={handleChange} />
                <button className='btn' id='buscar-btn' onClick={handleSearch}>BUSCAR</button>
            </div>
            <div className='sort'>
                <label className='txt'>Ordenar por:</label>
                <select className='select' id='select-sort' name='sortBy' onChange={handleFilters}>
                    <option>Criterio</option>
                    <option>Nombre, A-Z</option>
                    <option>Nombre, Z-A</option>
                    <option>Edad, menor a mayor</option>
                    <option>Edad, mayor a menor</option>
                </select>
            </div>
            <div className='filter'>
                <label className='txt'>Filtrar por:</label>
                <select className='select' name='filterByTeam' onChange={handleFilters}>
                    <option>Equipo</option>
                    {
                        teams.map(({ id, name }) => {
                            return <option key={id}>{name}</option>
                        })
                    }
                </select>
                <select className='select' name='filterByOrigin' onChange={handleFilters}>
                    <option >Origen</option>
                    <option >Mis corredores</option>
                    <option>Corredores preexistentes</option>
                    <option>Todos</option>
                </select>
                <button className='btn' id='aplicar-filtros-btn' onClick={handleClick}>APLICAR FILTROS</button>
            </div>
        </div>
    )
};

export default SearchBar;