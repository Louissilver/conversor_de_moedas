const trocaMoeda = (moedaSelecionada) => {
    moeda = moedaSelecionada;
    
    retornarCotacao().then(exibe => {
        exibirMoeda(parseFloat(exibe[moedaSelecionada].bid), exibe[moedaSelecionada].code, exibe[moedaSelecionada].codein);
    });
}