/* 
LoadScreen Simples V.0.1
Desenvolvedor: Ravok THC
GITHUB: github.com/RavokTHC
*/


var title = "Load Screen Simples V 0.1"; /* Insira o nome do Servidor*/

var description = "Servidor de Testes"; /* Insira uma Descriçao do Servidor */


/* REGRAS DO SERVIDOR */
var rules = ["REGRA 01",
			 "REGRA 02",
			 "REGRA 03"]; 



/* NÃO MODIFIQUE NADA ABAIXO */

var counter = 0;
var elem = document.getElementById("rules");
setInterval(change, 2000);

function change() {
  elem.innerHTML = rules[counter];
  counter++;
  if (counter >= rules.length) {
    counter = 0;
  }
}

function changeText(){
    document.getElementById('text02 title').innerHTML = title;
    document.getElementById('text01 desc').innerHTML = description;
}
changeText();