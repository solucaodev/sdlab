// https://solucao.dev

function EmailValido(email) {
    if ((email == null) || (email.length < 4))
    return false;

    var partes = email.split('@');
    if (partes.length < 2 ) return false;

    var pre = partes[0];
    if (pre.length == 0) return false;
    
    if (!/^[a-zA-Z0-9_.-/+]+$/.test(pre))
        return false;

    // gmail.com, outlook.com, terra.com.br, etc.
    var partesDoDominio = partes[1].split('.');
    if (partesDoDominio.length < 2 ) return false;

    for ( var indice = 0; indice < partesDoDominio.length; indice++ )
    {
        var parteDoDominio = partesDoDominio[indice];

        // Evitando @gmail...com
        if (parteDoDominio.length == 0) return false;  

        if (!/^[a-zA-Z0-9-]+$/.test(parteDoDominio))
            return false;
    }

    return true;
}

function ValidarEmail() {
    var email = document.getElementById("campoEMAIL").value;
    
    if (EmailValido(email)) {
        alert("O EMAIL [" + email + "] é válido!");
    } else {
        alert("O EMAIL [" + email + "] não é válido!");
    }
}