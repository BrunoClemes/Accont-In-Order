function exibirConta() {
    const conta = document.getElementById("accountInput").value;
    const valor = document.getElementById("braveryInput").value;

    const contaDiv = document.createElement("div");
    const valorDiv = document.createElement("div");

    contaDiv.textContent = conta;
    valorDiv.textContent = valor;

    document.getElementById("accountList").appendChild(contaDiv); 
    document.getElementById("braveryList").appendChild(valorDiv);

    contaDiv.classList.add("account-box");
    valorDiv.classList.add("bravery-box");

    document.getElementById("accountInput").value = ''; 
    document.getElementById("braveryInput").value = ''; 



    const valores = document.querySelectorAll("#braveryList .bravery-box");
    let soma = 0;

    valores.forEach(item =>{
        const numero = parseFloat(item.textContent);
        if(!isNaN(numero)) {
            soma+=numero;
        }
    });
    document.getElementById("total").textContent = "Total: R$ " + soma.toFixed(2);
}
