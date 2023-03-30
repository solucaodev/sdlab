// https://solucao.dev

function GerarSenhaSegura(tamanho, usaMinusculas, usaMaiusculas, usaNumeros, usaEspeciais) {
    let caracteres = "";

    if (usaMinusculas)
        caracteres += "abcdefghijklmnopqrstuvwxyz";

    if (usaMaiusculas)
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (usaNumeros)
        caracteres += "0123456789";

    if (usaEspeciais)
        caracteres += "[]-*!%@&^#";

    if (!caracteres)
        return "";

    let senha = "";
    let quantidadeCaracteres = caracteres.length - 1;
    let permiteRepetirCaracteres = tamanho > quantidadeCaracteres;
    for (let indice = 1; indice <= tamanho; indice++) {
        let indiceAleatorio = Math.floor(Math.random() * quantidadeCaracteres);
        let caractereAleatorio = caracteres[indiceAleatorio];
        senha += caractereAleatorio;

        if (!permiteRepetirCaracteres) {
            caracteres = caracteres.replace(caractereAleatorio, "");
            quantidadeCaracteres--;
        }
    }

    return senha;
}

function GerarSenha() {
    const campoSenha = document.getElementById("campoSenhaSeguraGerada");
    const tamanho = document.getElementById("campoTamanho").value;
    const usaMinusculas = document.getElementById("campoUsaMinusculas").checked;
    const usaMaiusculas = document.getElementById("campoUsaMaiusculas").checked;
    const usaNumeros = document.getElementById("campoUsaNumeros").checked;
    const usaEspeciais = document.getElementById("campoUsaEspeciais").checked;

    campoSenha.value = GerarSenhaSegura(tamanho, usaMinusculas, usaMaiusculas, usaNumeros, usaEspeciais);
}