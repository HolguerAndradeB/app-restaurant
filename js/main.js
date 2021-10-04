function sendEmail(email) {
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = expReg.test(email);
    if(esValido == true) {
    // alert("Válido");
    alert("Reservación enviada exitosamente");
    } else {
    alert("Email inválido");
    }
    // alert("Formulario enviado");
}
