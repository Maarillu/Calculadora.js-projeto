document.addEventListener('DOMContentLoaded', function() {

    // Função para somar
    document.getElementById('somarButton').addEventListener('click', function() {
        const numero1 = document.getElementById('numero1soma').value;
        const numero2 = document.getElementById('numero2soma').value;

        if (numero1 === "" || numero2 === "") {
            alert("Por favor, insira ambos os números!");
            return;
        }

        const resultado = parseFloat(numero1) + parseFloat(numero2);
        document.getElementById('resultadosoma').innerText = resultado;
    });

    // Função para subtrair
    document.getElementById('subtrairButton').addEventListener('click', function() {
        const numero1 = document.getElementById('numero1sub').value;
        const numero2 = document.getElementById('numero2sub').value;

        if (numero1 === "" || numero2 === "") {
            alert("Por favor, insira ambos os números!");
            return;
        }

        const resultado = parseFloat(numero1) - parseFloat(numero2);
        document.getElementById('resultadosub').innerText = resultado;
    });

    // Função para multiplicar
    document.getElementById('multiplicarButton').addEventListener('click', function() {
        const numero1 = document.getElementById('numero1Mult').value;
        const numero2 = document.getElementById('numero2Mult').value;

        if (numero1 === "" || numero2 === "") {
            alert("Por favor, insira ambos os números!");
            return;
        }

        const resultado = parseFloat(numero1) * parseFloat(numero2);
        document.getElementById('resultadomult').innerText = resultado;
    });

    // Função para dividir
    document.getElementById('dividirButton').addEventListener('click', function() {
        const numero1 = document.getElementById('numero1div').value;
        const numero2 = document.getElementById('numero2div').value;

        if (numero1 === "" || numero2 === "") {
            alert("Por favor, insira ambos os números!");
            return;
        }

        if (parseFloat(numero2) === 0) {
            alert("Não é possível dividir por zero!");
            return;
        }

        const resultado = parseFloat(numero1) / parseFloat(numero2);
        document.getElementById('resultadodiv').innerText = resultado;
    });

});
