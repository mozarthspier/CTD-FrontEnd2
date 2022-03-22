let inputNomeReferencia = document.querySelector("#inputNome");
let inputSobrenomeReferencia = document.querySelector("#inputSobrenome");
let submitButtonReference = document.querySelector("#submitButton");
let bodyReference = document.querySelector("body");

submitButtonReference.addEventListener("click", event => {
    
    event.preventDefault();

    let nomeValue = inputNomeReferencia.value;
    let sobrenomeValue = inputSobrenomeReferencia.value;

    let stringTrimUpper = `<div><p>Nome: ${nomeValue.trim().toUpperCase()} Sobrenome: ${sobrenomeValue.trim().toUpperCase()}</p></div>`
    bodyReference.innerHTML += stringTrimUpper;

    let stringTrimLower = `<div><p>Nome: ${nomeValue.trim().toLowerCase()} Sobrenome: ${sobrenomeValue.trim().toLowerCase()}</p></div>`
    bodyReference.innerHTML += stringTrimLower;

    let stringTrimConcat = `<div><p>Nome e sobrenome: ${nomeValue.trim().concat(sobrenomeValue.trim())}</p></div>`
    bodyReference.innerHTML += stringTrimConcat;

    let stringTrimConcatReplace = `<div><p>Nome e sobrenome: ${nomeValue.trim().concat(sobrenomeValue.trim()).replaceAll("a", "@").replaceAll("e", "3")}</p></div>`
    bodyReference.innerHTML += stringTrimConcatReplace;

})