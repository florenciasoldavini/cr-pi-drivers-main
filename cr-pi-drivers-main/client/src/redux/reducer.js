const initialState = {
    drivers: [],
    filteredDrivers: [],
    teams: [],
    driverDetail: [],
    error: ""
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

        case 'CREATE_DRIVER':
            if (action.error) {
                return {
                    ...state,
                    error: action.error.message
                };
            } else {
                return {
                    ...state,
                    error: ''
                }
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
            return {
                ...state,
                sortedDrivers: state.drivers.filter((driver) => {
                    return String(driver.teams).includes(action.payload)
                }),
            };

        case 'APPLY_FILTERS':
            let driversToBeFiltered = state.drivers
            const originFilter = action.payload.filterByOrigin
            const teamFilter = action.payload.filterByTeam
            const sortBy = action.payload.sortBy

            if (teamFilter !== '') {
                driversToBeFiltered = driversToBeFiltered.filter((driver) => {
                    return String(driver.teams).includes(teamFilter)
                })
            }

            if (originFilter === 'Mis corredores') {
                driversToBeFiltered = driversToBeFiltered.filter((driver) => {
                    return String(driver.id).match(regexUUID)
                })
            } else if (originFilter === 'Corredores preexistentes') {
                driversToBeFiltered = driversToBeFiltered.filter((driver) => {
                    return !String(driver.id).match(regexUUID)
                })
            }

            if (sortBy !== '') {
                if (sortBy === 'Nombre, A-Z') {
                    driversToBeFiltered.sort((a, b) => {
                        if (a.forename > b.forename) {
                            return 1;
                        }
                        if (a.forename < b.forename) {
                            return -1;
                        }
                        return 0;
                    })

                    console.log('Sorted: ', driversToBeFiltered[0])
                }

                else if (sortBy === 'Nombre, Z-A') {
                    driversToBeFiltered.sort((a, b) => {
                        if (b.forename > a.forename) {
                            return 1;
                        }
                        if (b.forename < a.forename) {
                            return -1;
                        }
                        return 0;
                    })

                    console.log('Sorted: ', driversToBeFiltered[0])
                }

                else if (sortBy === 'Edad, mayor a menor') {
                    driversToBeFiltered.sort((a, b) => {
                        if (new Date(b.dob) > new Date(a.dob)) {
                            return 1;
                        }
                        if (new Date(b.dob) < new Date(a.dob)) {
                            return -1;
                        }
                        return 0;
                    })

                    console.log('Sorted: ', driversToBeFiltered[0])
                }

                else if (sortBy === 'Edad, menor a mayor') {
                    driversToBeFiltered.sort((a, b) => {
                        if (new Date(b.dob) < new Date(a.dob)) {
                            return 1;
                        }
                        if (new Date(b.dob) > new Date(a.dob)) {
                            return -1;
                        }
                        return 0;
                    })

                    console.log('Sorted: ', driversToBeFiltered[0])
                }
            }

            return {
                ...state,
                filteredDrivers: driversToBeFiltered
            }

        default:
            return { ...state };
    }
};

export default rootReducer;
