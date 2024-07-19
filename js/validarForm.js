function validateEmail(email) {
    // Expressão regular para validar formato de email
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validarTel(tel) {
    var re = /^9\d{8}$/;
    return re.test(tel);
}



function validateForm(event) {
    var email = document.getElementById("email2").value;
    var tel = document.getElementById("tel").value;
    if(tel==""){

    if (!validateEmail(email)) {
        alert('Por favor, insira um email válido.');
        return false; // Impede o envio do formulário
    }
}else{
   
    if (!validarTel(tel)) {
        alert('Por favor, insira um telefone válido.');
        return false; // Impede o envio do formulário
    } 
     /* if (!validateEmail(email)) {
        alert('Por favor, insira um email válido.');
        return false; // Impede o envio do formulário
    }  */
}
    alert('Acção realizada com sucesso!');
    return true; // Permite o envio do formulário
}


