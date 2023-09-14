import { useSelector } from 'react-redux';

const Filtros = () => {
    const teams = useSelector(state => state.teams);

    return (
        <div>
            <label>Por origen</label>
            <select>
                <option>Mis corredores</option>
                <option>Corredores preexistentes</option>
                <option>Todos</option>
            </select>
            <label>Por equipo</label>
            <select>
                {
                    teams.map(({ id, name }) => {
                        return <option key={id}>{name}</option>
                    })
                }
            </select>
        </div>
    )
};

export default Filtros;