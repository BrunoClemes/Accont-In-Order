function exibirConta() {
    const conta = document.getElementById("accountInput").value;
    const valor = document.getElementById("braveryInput").value;

    if (!conta || !valor) return;

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

    valores.forEach(item => {
        const numero = parseFloat(item.textContent.replace(',', '.'));
        if (!isNaN(numero)) {
            soma += numero;
        }
    });

    document.getElementById("total").textContent = "R$ " + soma.toFixed(2).replace('.', ',');
}


let display = document.getElementById('display');


display.value = "0";

function adicionar(valor) {
    if (display.value === "0" || display.value === "Erro") {
        display.value = valor;
    } else {
        display.value += valor;
    }
}

function limpar() {
    display.value = "0";
}

function calcular() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Erro";
    }
}