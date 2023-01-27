async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
        mensagemErro.innerHTML = '';
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCep.json();
        if (consultaCEPConvertida.erro){
            throw Error(mensagemErro.innerHTML = `CEP inválido, tente novamente!`);
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
        mensagemErro.innerHTML = `<p>CEP inválido, tente novamente!</p>`
        console.log(erro);
    };
};

var cep = document.getElementById('cep');
    cep.addEventListener('focusout', () => {
        buscaEndereco(cep.value);
    });