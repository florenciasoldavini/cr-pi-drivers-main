export default function validation(driver) {
    const errors = {}

    const regexName = /^[a-zA-Z\p{L}' ]+$/u

    if (regexName.test(driver.forename)) {
        errors.forename = '';
    } else {
        errors.forename = 'El nombre contiene caracteres inválidos'
    }

    if (regexName.test(driver.surname)) {
        errors.surname = '';
    } else {
        errors.surname = 'El apellido contiene caracteres inválidos'
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

    if (driver.description.length < 120) {
        errors.description = '';
    } else {
        errors.description = 'La descripción debe tener máximo 120 caracteres'
    }

    return errors;
}