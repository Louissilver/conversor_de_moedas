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