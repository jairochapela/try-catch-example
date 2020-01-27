function validar(nombre, email, password, repassword) {
    // TODO: código de validación

    if (nombre.length == 0)
        throw new Error("El campo nombre no debe estar vacío.");

    return true;
}

try {
    validar("John Doe", "john@doe.com", "123456", "123456")
} catch (err) {
    console.log(err);
}