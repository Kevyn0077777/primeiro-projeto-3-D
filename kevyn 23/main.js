<link rel="stylesheet" href="style.css">
body {
    background-color: var(--cor-de-fundo);
    color: var(--branco);
    font-family: 'Chakra Petch', sans-serif;
}
.conteudo-principal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
}
.botao {
    font-family: "Crakra Petch", sans-serif;
    background-color: var(--botao-inativo);
    color: var(--branco);
    display: flex;
    justify-content: center;
    padding: 1em;
    font-size: 18px;
    align-items: center;
    width: 100%;
    border-bottom: 4px solid var(--botao-ativo); 
    border-left: 2px solid var(--botao-ativo); 
    border-right: 2px solid var(--botao-ativo); 
    border-top: none;
    .botoes {
        display: block;
    }
    
    @media screen and (min-width: 768px) {
        .botoes {
            display: flex;
        }
        .botao:first-child {
            border-radius: 40px 40px 0 0;
        }
        
        @media screen and (min-width: 768px) {
            .botoes {
                display: flex;
            }
        
            .botao:first-child {
                border-radius: 40px 0 0 0;
            }
        
            .botao:last-child {
                border-radius: 0 40px 0 0;
            }
        }
.ativo{
    background-color: var(--botao-ativo);
    border-bottom: 4px solid var(--verde);
}
<script src="main.js"></script>
for(let i=0; i <  botoes.length; i++){
    console.log(i);
}
botoes[i].onclick = function(){
    
    botoes[i].classList.add("ativo");
}
for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
 }
const botoes = document.querySelectorAll(".botao");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
    }
}
for ([inicialização]; [condição]; [incremento]) {
   declaração
   }
for (var i = 1; i <= 5; i++) {
  console.log(i);
}
for (var i = 0; i <= 10; i += 2) {
  console.log(i);
}
var frutas = ["Maçã", "Banana", "Laranja", "Pera"];
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}


            