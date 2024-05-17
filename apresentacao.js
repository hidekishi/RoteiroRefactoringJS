var formatarMoeda = require("./utils.js");

function gerarFaturaStr (fatura, calc) {

    let faturaStr = `Fatura ${fatura.cliente}\n`;
    for (let apre of fatura.apresentacoes) {
      faturaStr += `  ${calc.repo.getPeca(apre).nome}: ${formatarMoeda(calc.calcularTotalApresentacao(apre))} (${apre.audiencia} assentos)\n`;
    }
    faturaStr += `Valor total: ${formatarMoeda(calc.calcularTotalFatura())}\n`;
    faturaStr += `Créditos acumulados: ${calc.calcularTotalCreditos()} \n`;
    return faturaStr;
  }

function gerarFaturaHTML (fatura, pecas, calc) {

    let faturaHTML = `<html>\n <p> Fatura ${fatura.cliente} </p>\n<ul>\n`;
    for (let apre of fatura.apresentacoes) {
      faturaStr += `<li>  ${getPeca(apre).nome}: ${formatarMoeda(calc.calcularTotalApresentacao(apre))} (${apre.audiencia} assentos) </li>\n`;
    }
    faturaHTML += `</ul>\n<p> Valor total: ${formatarMoeda(calc.calcularTotalFatura())} </p>\n`;
    faturaHTML += `<p> Créditos acumulados: ${calc.calcularTotalCreditos()} </p>\n</html>\n`;
    return faturaHTML;
  }