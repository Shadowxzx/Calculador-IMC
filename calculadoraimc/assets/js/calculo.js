function RealizarCalculo() {
    let inputAltura = document.getElementById("input-altura");
    let inputPeso = document.getElementById("input-peso");
    let resultadoIMC = document.getElementById("resultado-imc");
  
    let altura = inputAltura.value.replace(",", ".");
    let peso = inputPeso.value.replace(",", ".");
  
    console.log("Altura:", altura);
    console.log("Peso:", peso);
  
    let imc = peso / (altura * altura);
  
    resultadoIMC.textContent = "" + imc.toFixed(2);
  
    let classificacaoIMC = document.getElementById("classificacao-imc");
  
    if (imc <= 18.5) {
      classificacaoIMC.textContent = "Classificação: Você está abaixo do seu IMC ideal";
    } else if (imc >= 18.5 && imc <= 24.9) {
      classificacaoIMC.textContent = "Classificação: Você está com seu índice IMC ideal";
    } else if (imc >= 25 && imc <= 29.9) {
      classificacaoIMC.textContent = "Classificação: De acordo com seu índice IMC, você está com sobrepeso";
    } else if (imc >= 30.0 && imc <= 39.9) {
      classificacaoIMC.textContent = "Classificação: De acordo com o seu índice IMC, você está com obesidade nivel 1";
    } else if (imc >= 40) {
      classificacaoIMC.textContent = "Classificação: De acordo com seu índice IMC, você está com obesidade grave nivel 2 ";
    } else {
      classificacaoIMC.textContent = "Classificação: Você não inseriu um número válido";
    }
  }
  

