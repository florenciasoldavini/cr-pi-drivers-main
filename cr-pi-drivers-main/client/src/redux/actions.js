import axios from "axios";

export const getDrivers = () => {
    const endpoint = 'http://localhost:3001/drivers';
    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint)
            let data = response.data
            return dispatch({
                type: 'GET_DRIVERS',
                payload: data,
            });
        } catch (error) {
        }
    };
};

export const createDriver = (driver) => {
    const endpoint = 'http://localhost:3001/drivers';
    return async (dispatch) => {
        try {
            const response = await axios.post(endpoint, driver)
            let data = response.data

            return dispatch({
                type: 'CREATE_DRIVER',
                payload: data,
            });
        } catch (error) {
            return dispatch({
                type: 'CREATE_DRIVER',
                error: error
            })
        }
    };
};

export const getTeams = () => {
    const endpoint = 'http://localhost:3001/teams';
    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint)
            let data = response.data
            return dispatch({
                type: 'GET_TEAMS',
                payload: data,
            });
        } catch (error) {
        }
    };
};

export const detailView = (id) => {
    const endpoint = 'http://localhost:3001/drivers/' + id;
    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint)
            let data = response.data
            return dispatch({
                type: 'DETAIL_VIEW',
                payload: data,
            });
        } catch (error) {
        }
    };
};

export const updateDriver = (id, driver) => {
    const endpoint = 'http://localhost:3001/drivers/' + id;
    return async (dispatch) => {
        try {
            const response = await axios.put(endpoint, driver)
            let data = response.data
            return dispatch({
                type: 'UPDATE_DRIVER',
                payload: data,
            });
        } catch (error) {
        }
    };
};

export const searchDriver = (name) => {
    const endpoint = 'http://localhost:3001/drivers/search?name=' + name;
    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint)
            let data = response.data
            return dispatch({
                type: 'SEARCH_DRIVER',
                payload: data,
            });
        } catch (error) {
        }
    };
};

export const deleteDriver = (driver) => {
    const endpoint = 'http://localhost:3001/drivers/' + driver.id;
    return async (dispatch) => {
        try {
            const response = await axios.delete(endpoint)
            let data = response.data
            return dispatch({
                type: 'DELETE_DRIVER',
                payload: data,
            });
        } catch (error) {
            console.error(error.message);
        }
    };
};

export const applyFilters = (filters) => {
    return { type: 'APPLY_FILTERS', payload: filters }
};
