
//Executando um alert

/**
 * 
    console.log("Teste");
    alert("Teste")
 * 
*/

//Declarando variáveis no JS
//Tipos de declaração

//var - let - const

// Var é o tipo mais antigo do JS.
// var nr1 = 10;
// var nome1 = "Alexandre";
// var status1 = true;

// let nr2 = 10;
// let nome2 = "Carlos";
// let status2 = false;

// const PI = 3.14;

// //Concatenação = Unir
// const resultado = nome1+" "+nome2+" ele tem menos de R$ "+ (nr1+nr2) + " no bolso!" ;
// console.log(resultado);


// const botaoMenu = document.querySelector("header button");

// botaoMenu.addEventListener( "click" , ()=>{
//    alert("Olá mundo outra vez!");
// });


//Declarando variáveis no JS
//Tipos de declaração

//var - let - const

// //A diferença entre var e let

// let nome = "Ale";

// //HOISTING

// if(true){
//  let nome = "Carlos";
//  console.log(nome);
// }

// console.log(nome);


// letra = "A";
// let letra;



//Tipos de dados

// //String
// let nome   = "Alexandre";
// let idade  =  49;
// let logado =  true;
// let letra  =  nome.charAt(0);
// let cidade ;
// let saldo = null;

// console.log(typeof nome);
// console.log(typeof idade);
// console.log(typeof logado);
// console.log(typeof letra);
// console.log(typeof cidade);
// console.log(typeof saldo);

// //Operadores Matemáticos
// let nota1 = 7;
// let nota2 = 5;

// let resultado = (nota1 + nota2);
// console.log("A soma das nota é : ", resultado);

// resultado = (nota1 - nota2);
// console.log("A operação de subtração entre as nota é : ", resultado);

// resultado = (nota1 / nota2);
// console.log("Dividindo as nota temos o resultado de : ", resultado);

// resultado = (nota1 * nota2);
// console.log("Multiplicando as nota temos o resultado de : ", resultado);

// resultado = (nota1 % 2);
// console.log("O resto da divisão da nota1 é : ", resultado);

// nota1++;
// console.log("Incrementar a nota1 em +1 ", nota1);

// nota1--;
// console.log("Decrementando a nota1 em -1 ", nota1);


//Estruturas de repetições

//Declaração de array simples
// let frutas = ["banana", "uva", "maçã", "abacate", "morango"];

// console.log("\nImprimindo um item do ARRAY");
// console.log(frutas[3]);


// console.log("\nLoop FOR TRADICIONAL");
// for (let x = 0; x < frutas.length; x++) {
//    console.log("Valor do indice = ", x)
//    console.log(frutas[x]);  
// }

// console.log("\nLoop FOR OF");
// for (let fruta of frutas) {

//    if (fruta === "maçã") {
//       console.log(fruta);
//       break;
//    }
//    console.log(fruta);
// }

// console.log("\nLoop FOR IN");
// for (let indice in frutas) {

//    if(frutas[indice] === "abacate"){
//       console.log(frutas[indice]);
//        break;
//    }
// }

//Funções de Array:
// console.log("\nFOREACH");

//O ForEach recebe até três parâmetros:
//1 - Uma função de callBack = function(){} | obrigatórios
// Dentro da função de callBack
//2 - O item do array | obrigatórios
//3 - O indice do array | opcional
//4 - O próprio array | opcional
// frutas.forEach(function(fruta){
//    console.log(`Minha fruta é ${fruta}`);
// });

//TESTE, qual é diferença do FOREACH para o FOR-OF
// try {
//    frutas.forEach(function (fruta) {
//       if (fruta === "uva") {
//          console.log(`Minha fruta é ${fruta}`);
//          throw new Error("Só pra sair do FOR EACH DOIDO!");
//       }
//       console.log(`Resto das frutas são ${fruta}`);
//    });
// } catch (error) {
//    console.error(error.message);
// }

//1. .push() — Adiciona item no final
// frutas.push("melancia"); // Adiciona "Uva" ao final
// console.table(frutas);

//  //2. .pop() — Remove o último item
// frutas.pop(); // Remove "melancia"
// console.table(frutas);

// //3. .unshift() — Adiciona item no início
// frutas.unshift("laranja"); // Adiciona no inicio
// console.table(frutas);

// //4. .shift() — Remove o primeiro item
// frutas.shift(); // Remove "laranja" 
// console.table(frutas);

//Ver o tamanho do Array
// console.log(`Tamanho do array: ${frutas.length}`);

//.includes() — Verifica se um valor existe
// console.log(frutas.includes("uva")); // true
// console.log(frutas.includes("Manga")); // false


// //.indexOf() — Retorna o índice de um item
// console.table(frutas)
// console.log(frutas.indexOf("maçã")); // 2
// console.log(frutas.indexOf("Manga")); // -1

// const resultado = frutas.indexOf("acabate");

// if(resultado !== -1 ){
//    console.warn(`Minha fruta está no indice ${resultado}.`)
// }else{
//    console.error("Minha fruta não foi encontrada.")
// }

//.join() — Junta os itens em uma string
// console.log(frutas.join(" | ").toUpperCase());

// // .reverse() — Inverte a ordem dos itens
// console.table(frutas);
// frutas.reverse();
// console.table(frutas);

// //.sort() — Ordena os itens (como strings)
// frutas.sort();
// console.table(frutas);

// | Função        | O que faz                         |
// | ------------- | --------------------------------- |
// | `.push()`     | Adiciona no fim                   |
// | `.pop()`      | Remove do fim                     |
// | `.unshift()`  | Adiciona no início                |
// | `.shift()`    | Remove do início                  |
// | `.length`     | Tamanho do array                  |
// | `.includes()` | Verifica se um valor existe       |
// | `.indexOf()`  | Índice de um item                 |
// | `.join()`     | Junta tudo em uma string          |
// | `.reverse()`  | Inverte a ordem                   |
// | `.sort()`     | Ordena os itens (alfabeticamente) |


//.filter() — FilTra os itens do array
// let frutas = ["banana", "uva", "maçã", "abacate", "morango", "laranja", "melancia", "manga"];


// //Gerando um novo array a partir dos itens do array de frutas que começam com a letar 'm'.

// const novoArrayDeFrutasComLetraM = frutas.filter(function(fruta){

//       if(fruta.includes("an")){
//          return fruta;
//       }

// });

// console.log(novoArrayDeFrutasComLetraM);

// let numeros = [1,2,3,1,5,6];
// console.log(numeros);

// const dobro = numeros.map( function(numero){
//    return (numero * 2);
// } );
// console.log(dobro);

// const nrEncontrado = numeros.find( function (nr){
//    return (nr === 1);
// });

// console.log(nrEncontrado);


// const indiceEncontrado = numeros.findIndex( function (nr){
//    return (nr === 1);
// });

// console.log(indiceEncontrado);

//Declaração de função tradicional
// function name(params) {
   
// }

// function soma(a,b){
//    const resultado = (a+b);
//    return console.log(resultado);
// }

// const soma = (a,b)=>{
//    const resultado = (a+b);
//    return console.log(resultado);
// }

// const soma2 = (a,b)=> (a+b);


// //Manipulando o DOM para recuper um botão
// //identificado com um ID

// const botaoMenu = document.getElementById("btnMenu");

// // botaoMenu.addEventListener("click", function(){
// //    console.log(`Texto do botão: ${this.textContent}`);
// //    soma(12,12);
// // });


// botaoMenu.addEventListener("click", ()=>{
//    console.log(`Texto do botão: ${botaoMenu.textContent}`);
//    soma(12,12);
// });


//Capturando o formulário
const formulario = document.getElementById("formContato");

//Atrelar um evento de submit ao formulário
formulario.addEventListener("submit", (e)=>{

   //Destaivando o comportamento padrão do FORM
  e.preventDefault();

  //Capturando os campos do FORM.
  //Retirando os espaços antes e depois com a função trim();
   const nome = document.getElementById("idNome").value.trim();
   const email = document.getElementById("idEmail").value.trim();
 
   //Adicionando os dados em um objeto:
   let usuario = {
      nomeObj  : nome,
      emailObj : email
   };

   //Variável de controle da validação:
   let isValid = true;

   //Tratamento de erros
   try {
      
      //Realizando uma desestruturação do objeto:
      //DESTRUCTURING
      const {nomeObj, emailObj} = usuario;

      if((nomeObj.length <= 3) || (nomeObj == "") || (nomeObj == undefined)){
         
         const nomeErro = document.querySelector("#spanNome");
         nomeErro.style.visibility = "visible";
         nomeErro.classList.toggle('error');

         setTimeout( ()=>{
            nomeErro.classList.toggle('error');
            nomeErro.style.visibility = "hidden";
         }, 5000 );

         throw new Error("O campo nome é inválido!");
      }

      if((emailObj.length <= 3) || (emailObj == "") || (emailObj == undefined)){

         const nomeErro = document.querySelector("#spanEmail");
         nomeErro.style.visibility = "visible";
         nomeErro.classList.toggle('error');

         setTimeout( ()=>{
            nomeErro.classList.toggle('error');
            nomeErro.style.visibility = "hidden";
         }, 5000 );

         throw new Error("O campo email é inválido!");
      }

   } catch (error) {
      alert(error.message);
      isValid = false;
   }
   
   if(isValid){
      formulario.submit();
   }

});


