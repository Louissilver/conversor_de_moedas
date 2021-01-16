const corpoCotacoes = document.querySelector("#cotacoes");
let valorInicial = 1.0000;

let moeda = 'USD';
let valorBRL = 0.00;
let valorOutro = 0.00;
const linha = document.createElement('form');


const trocaMoeda = (moedaSelecionada) => {
    moeda = moedaSelecionada;
    
    retornarCotacao().then(exibe => {
        exibirMoeda(parseFloat(exibe[moedaSelecionada].bid), exibe[moedaSelecionada].code, exibe[moedaSelecionada].codein);
    });
}


const retornarCotacao = () => {
    return fetch(`https://economia.awesomeapi.com.br/json/all/${moeda}`)
    .then(resposta => {
        return resposta.json();
    })
    .then(json => {
        return json;
    });
}

const exibirMoeda = (valorCompra, moedaOrigem, moedaDestino) => {
    linha.classList.add("justify-content-center");
    linha.classList.add("m-5");
    
    const conteudoLinha =
    `
    <div class="input-group-lg p-3">
    <span class="form-label h1" id="moedaDestino">${moedaOrigem}</span>
    <input id="inputMoedaDestino" onChange="converteMoedaParaBRL()" type="number" class="form-control" aria-describedby="moedaDestino" value="${valorInicial.toFixed(4)}">
    </div>

    <div class="input-group-lg p-3">vale</div>
    
    <div class="input-group-lg p-3">
    <span class="form-label h1" id="moedaOrigem">${moedaDestino}</span>
    <input id="inputMoedaOrigem" onChange="converteBRLParaMoeda()" type="number" class="form-control" aria-describedby="moedaDestino" value="${valorCompra.toFixed(4)}">
    </div>
    `;

    valorOutro = parseFloat(valorInicial).toFixed(4);
    valorBRL = parseFloat(valorCompra).toFixed(4);
    
    linha.innerHTML = conteudoLinha;
    
    corpoCotacoes.appendChild(linha);
}

retornarCotacao().then(exibe => {
    exibirMoeda(parseFloat(exibe[moeda].bid), exibe[moeda].code, exibe[moeda].codein);
});

const converteMoedaParaBRL = () => {
    let inputMoedaBRL = document.querySelector("#inputMoedaOrigem");
    let inputOutraMoeda = document.querySelector("#inputMoedaDestino");

    inputMoedaBRL.value = parseFloat(valorBRL * inputOutraMoeda.value).toFixed(4);
}


const converteBRLParaMoeda = () => {
    let inputMoedaBRL = document.querySelector("#inputMoedaOrigem");
    let inputOutraMoeda = document.querySelector("#inputMoedaDestino");
    
    inputOutraMoeda.value = (parseFloat(inputMoedaBRL.value) / parseFloat(valorBRL)).toFixed(4);
}
