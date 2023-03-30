// https://solucao.dev

function GerarCpfAleatorio() {
    const parte1 = GerarNumeroAleatorio();
    const parte2 = GerarNumeroAleatorio();
    const parte3 = GerarNumeroAleatorio();
    const verificador1 = CalculaDigitoVerificador(parte1, parte2, parte3);
    const verificador2 = CalculaDigitoVerificador(parte1, parte2, parte3, verificador1);

    return `${parte1}.${parte2}.${parte3}-${verificador1}${verificador2}`;
}

function CalculaDigitoVerificador(parte1, parte2, parte3, primeiroDigitoVerificador) {
    const numeros = `${parte1}${parte2}${parte3}`.split("");

    if (primeiroDigitoVerificador !== undefined) {
        numeros[9] = primeiroDigitoVerificador;
    }

    let soma = 0;
    let indice = 0;
    let inicial = primeiroDigitoVerificador !== undefined ? 11 : 10

    for (let numero = inicial; numero >= 2; numero--) {
        soma += parseInt(numeros[indice]) * numero;
        indice++;
    }

    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
}

function GerarNumeroAleatorio() {
    return Math.floor(Math.random() * 999).toString().padStart(3, '0');
}

function GerarCpf() {
    const cpf = document.getElementById("campoCPF");
    cpf.value = GerarCpfAleatorio();
}
