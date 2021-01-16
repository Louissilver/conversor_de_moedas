const retornarCotacao = () => {
    return fetch(`https://economia.awesomeapi.com.br/json/all/${moeda}`)
    .then(resposta => {
        return resposta.json();
    })
    .then(json => {
        return json;
    });
}