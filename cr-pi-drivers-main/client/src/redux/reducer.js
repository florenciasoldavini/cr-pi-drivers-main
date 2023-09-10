import { sortDrivers } from "./actions";

const initialState = {
    drivers: [],
    sortedDrivers: [],
    teams: [],
    driverDetail: [],
};



const regexUUID = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DRIVERS':
            return {
                ...state,
                drivers: action.payload,
            };

        case 'GET_TEAMS':
            return {
                ...state,
                teams: action.payload
            };

        case 'DETAIL_VIEW':
            return {
                ...state,
                driverDetail: action.payload
            };

        case 'SEARCH_DRIVER':
            return {
                ...state,
                drivers: action.payload,
            };

        case 'FILTER_BY_ORIGIN':
            if (action.payload === 'Todos')
                return {
                    ...state,
                    sortedDrivers: state.drivers,
                }
            else if (action.payload === 'Mis corredores')
                return {
                    ...state,
                    sortedDrivers: state.drivers.filter((driver) => {
                        return String(driver.id).match(regexUUID)
                    }),
                };
            else if (action.payload === 'Corredores preexistentes')
                return {
                    ...state,
                    sortedDrivers: state.drivers.filter((driver) => {
                        return !String(driver.id).match(regexUUID)
                    }),
                };

        case 'FILTER_BY_TEAM':

            console.log(state.sortedDrivers);
            console.log(action.payload);

            return {
                ...state,
                sortedDrivers: state.drivers.filter((driver) => {
                    return String(driver.teams).includes(action.payload)
                }),
            };

        case 'SORT_DRIVERS':

            if (action.payload === 'Nombre, A-Z')
                return {
                    ...state,
                    sortedDrivers: state.drivers.sort((a, b) => {
                        if (a.forename > b.forename) {
                            return 1;
                        }
                        if (a.forename < b.forename) {
                            return -1;
                        }
                        return 0;
                    })
                };

            else if (action.payload === 'Nombre, Z-A')
                return {
                    ...state,
                    sortedDrivers: state.drivers.sort((a, b) => {
                        if (b.forename > a.forename) {
                            return 1;
                        }
                        if (b.forename < a.forename) {
                            return -1;
                        }
                        return 0;
                    })
                };

            else if (action.payload === 'Edad, mayor a menor')
                return {
                    ...state,
                    sortedDrivers: state.drivers.sort((a, b) => {
                        if (new Date(b.dob) > new Date(a.dob)) {
                            return 1;
                        }
                        if (new Date(b.dob) < new Date(a.dob)) {
                            return -1;
                        }
                        return 0;
                    })
                };

            else if (action.payload === 'Edad, menor a mayor')
                return {
                    ...state,
                    sortedDrivers: state.drivers.sort((a, b) => {
                        if (new Date(b.dob) < new Date(a.dob)) {
                            return 1;
                        }
                        if (new Date(b.dob) > new Date(a.dob)) {
                            return -1;
                        }
                        return 0;
                    })
                };

        default:
            return { ...state };
    }
};

export default rootReducer;
