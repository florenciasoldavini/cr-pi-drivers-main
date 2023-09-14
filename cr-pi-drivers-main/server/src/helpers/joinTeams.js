const joinTeams = (driver) => {
    const teams = [];
    driver.teams.forEach(team => teams.push(team.name))
    return teams.join(", ");
};

module.exports = joinTeams