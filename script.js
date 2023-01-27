async function buscaEndereco(cep) {
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCep.json();
        if (consultaCEPConvertida.erro){
            throw Error(alert('CEP nao encontrado.'))
        }
        console.log(consultaCEPConvertida);

        var endereco = document.getElementById('endereco');
        var bairro = document.getElementById('bairro');
        var cidade = document.getElementById('cidade');
        var estado = document.getElementById('estado');

        cidade.value = consultaCEPConvertida.localidade;
        endereco.value = consultaCEPConvertida.logradouro;
        bairro.value = consultaCEPConvertida.bairro;
        estado.value = consultaCEPConvertida.uf;

        return consultaCEPConvertida;
    } catch (erro) {
        console.log(erro);
    };
};

var cep = document.getElementById('cep');
    cep.addEventListener('focusout', () => {
        buscaEndereco(cep.value);
    });