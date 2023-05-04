// verifica data de nascimento para ver se o usuario é maior de idade

export default function ehMaiorDeIdade(campo) {

    // transforma os numeros em uma data do ano
    const dataNascimento = new Date(campo.value);

    if(!validaIdade(dataNascimento)){
        campo.setCustomValidity('O usuario não é maior de idade')
    }
}

function validaIdade(data){

    // verifica a idade +18
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}