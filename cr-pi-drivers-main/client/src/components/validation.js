export default function validation(driver) {
    const errors = {}

    const regexName = /^[a-zA-Z\p{L}' ]+$/u

    if (regexName.test(driver.forename)) {
        errors.forename = '';
    } else {
        errors.forename = 'El nombre no puede contener números ni símbolos'
    } 

    if (driver.forename !== '') {
        errors.forename = '';
    } else {
        errors.forename = 'Debe completar este campo'
    } 

    if (regexName.test(driver.surname)) {
        errors.surname = '';
    } else {
        errors.surname = 'El apellido no puede contener números ni símbolos'
    }

    if (driver.nationality !== '') {
        errors.nationality = '';
    } else {
        errors.nationality = 'Debe seleccionar una nacionalidad'
    }

    const regexURL = /^(https?:\/\/)?[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)+(\/[a-zA-Z0-9\-_\?\,\.\/\%\=]*)?$/;

    if (regexURL.test(driver.image)) {
        errors.image = '';
    } else {
        errors.image = 'No es una URL válida';
    };

    const regexDOB = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/

    if (regexDOB.test(driver.dob)) {
        errors.dob = '';
    } else {
        errors.dob = 'Debe tener formato AAAA-MM-DD';
    };

    if (driver.description.length <= 120) {
        errors.description = '';
    } else {
        errors.description = 'La descripción debe tener máximo 120 caracteres'
    }

    if (driver.teams.length !== 0) {
        errors.teams = '';
    } else {
        errors.teams = 'Debe seleccionar al menos un equipo'
    }

    if (driver.forename && driver.surname && driver.nationality && driver.image && driver.dob && driver.description && driver.teams) {
        errors.general = ''
    } else {
        errors.general = 'Falta completar datos'
    }

    return errors;
}