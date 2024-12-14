document.addEventListener('DOMContentLoaded', function() {
  // Função para calcular a média
  document.getElementById('mediaButton').addEventListener('click', function() {
      const nota1 = document.getElementById('nota1').value;
      const nota2 = document.getElementById('nota2').value;
      const nota3 = document.getElementById('nota3').value;
      const nota4 = document.getElementById('nota4').value;

      // Verificando se todas as notas foram inseridas
      if (nota1 === "" || nota2 === "" || nota3 === "" || nota4 === "") {
          alert("Por favor, insira todas as notas!");
          return;
      }

      // Calculando a média
      const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;

      // Exibe a média com 2 casas decimais
      document.getElementById('resultadoMedia').innerText = media.toFixed(2);

      // Avaliar o resultado da média e exibir o feedback
      if (media === 0) {
          console.log('Infelizmente você zerou a prova.');
      } else if (media <= 3) {
          console.log(`Caramba, deu ruim, você obteve média ${media.toFixed(2)}! Estude mais e tente novamente!`);
      } else if (media > 3 && media <= 5.9) {
          console.log(`Você obteve média ${media.toFixed(2)}! Falta pouco para a média.`);
      } else if (media >= 6 && media <= 7) {
          console.log(`Você está na média com ${media.toFixed(2)}.`);
      } else if (media > 7 && media <= 9.9) {
          console.log(`Notão! Sua média é ${media.toFixed(2)}!`);
      } else if (media === 10) {
          console.log('Hoje é seu aniversário? Porque você está de parabéns! 10 de média!');
      }
  });
});
