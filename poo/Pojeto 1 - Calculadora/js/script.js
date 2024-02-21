class Calculator {
  constructor() {
    this.upperValue = document.querySelector("#upper-number");
    this.resultValue = document.querySelector("#result-number");
    this.reset = 0; //apaga o número no uppervalue após finalizar uma operação e clicar em novo número.
  }

  clearValues() {
    this.upperValue.textContent = "0";
    this.resultValue.textContent = "0";
  }

  checkLastDigit(input, upperValue, reg) {
    if (
      !reg.test(input) && //se input não é número E
      !reg.test(upperValue.substr(upperValue.length - 1)) // se último elemento do uppervalue não é número
    ) {
      return true;
    } else {
      return false;
    }
  }

  // método soma
  sum(n1, n2) {
    return parseFloat(n1) + parseFloat(n2);
  }

  // método subtração
  subtraction(n1, n2) {
    return parseFloat(n1) - parseFloat(n2);
  }

  // método de multiplicação
  multiplication(n1, n2) {
    return parseFloat(n1) * parseFloat(n2);
  }

  // método de divisão
  division(n1, n2) {
    return parseFloat(n1) / parseFloat(n2);
  }

  // atualiza valores
  refreshValue(total) {
    this.upperValue.textContent = total;
    this.resultValue.textContent = total;
  }
  // resolve a operação
  resolution() {
    // explode uma string em array
    let upperValueArray = this.upperValue.textContent.split(" ");
    // resultado da operação
    let result = 0;
    for (let i = 0; i <= upperValueArray.length; i++) {
      let operation = 0; // verifica se alguma operação foi feita no if
      let actualItem = upperValueArray[i];

      // faz a multiplicação
      if (actualItem == "x") {
        result = calc.multiplication(upperValueArray[i - 1], upperValueArray[i + 1]);
        operation = 1;
        // faz a divisão
      } else if (actualItem == "/") {
        result = calc.division(upperValueArray[i - 1], upperValueArray[i + 1]);
        operation = 1;
        // Verifica se array ainda tem multiplicação e divisão a serem feitas
      } else if (!upperValueArray.includes("x") && !upperValueArray.includes("/")) {
        if (actualItem == "+") {
          result = calc.sum(upperValueArray[i - 1], upperValueArray[i + 1]);
          operation = 1;
        } else if (actualItem == "-") {
          result = calc.subtraction(upperValueArray[i - 1], upperValueArray[i + 1]);
          operation = 1;
        }
      }
      // Atualiza valores do array para próxima operação
      if (operation) {

        // índice anterior no resultado da operação
        upperValueArray[i - 1] = result;
        // remove os itens já utilizados para a operação
        upperValueArray.splice(i, 2);
        //atualizar valor do índice
        i = 0;
      }
    }

    if (result) {
      calc.reset = 1;
    }

    //Atualizar os totais
    calc.refreshValue(result);
  }

  btnPress() {
    let input = this.textContent; // textContent = texto dentro do botão (número e símbolos)
    let upperValue = calc.upperValue.textContent;
    // O input é um número?
    var reg = new RegExp("^\\d+$"); //verifica se é número

    // reseta valor após uma operação
    if (calc.reset && reg.test(input)) {
      //a variável está preenchida e é um número?
      upperValue = "0";
    }

    // limpa a prop de reset
    calc.reset = 0;

    // Ativa método de limpar o display
    if (input == "AC") {
      calc.clearValues();
    } else if (input == "=") {
      calc.resolution();
    } else {
      // impedir duplicação de símbolos
      if (calc.checkLastDigit(input, upperValue, reg)) {
        return false; // dessa forma aborta o btn press
      }

      //adiciona espaços entre os operadores
      if (!reg.test(input)) {
        //não é numero? primeira condição.
        input = ` ${input} `;
      }

      if (upperValue == "0") {
        if (reg.test(input)) {
          calc.upperValue.textContent = input; //verifica se o input é um número
        }
        // permite adicionar outros números no uppervalue

      } else {
        calc.upperValue.textContent += input;
      }
    }
  }
}

//start object
let calc = new Calculator();

// start buttons
let buttons = document.querySelectorAll(".btn");

// mapear todos os buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", calc.btnPress);
}
