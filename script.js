
// for(let i = 1; i<= 200; i++){
//     if(i%3 === 0 && i%5 === 0) {
//         console.log(` ${i} é multiplo de 3 e 5 simultaneamente `)
//     }
// }


// const palavra = prompt("Digite uma palavra: ")
// const consoantes = "bcdfghjklmnpqrstvxwyz"

// for (caracter of palavra.toLocaleLowerCase){
//     if(consoantes.includes(caracter)){
//         contador_de_consoantes++
//     } 
// }

// console.log(`A palavra ${palavra} possui ${contador_de_consoantes} consoantes `)


// const lista_veiculos = []

// for(i=1;i<=5;i++){
//     const veiculo = ( prompt(`Digite um nome de um veículo: `))
//     lista_veiculos.push(veiculo)
// }

// console.log(lista_veiculos)


// const todos_numeros = []
// const pares = []
// const impares = []

// for(i=1;i<=20;i++) {
//     const numero = Number(prompt("Digite um número: "))
//     todos_numeros.push(numero)
//     if(numero%2 === 0){
//         pares.push(numero)
//     } else {
//         impares.push(numero)
//     }
// }

// console.log(todos_numeros)
// console.log(pares)
// console.log(impares)


// const todos_numeros = []


// for(i=1;i<=5;i++) {
//     const numero = Number(prompt("Digite um número: "))
//     todos_numeros.push(numero)
// }

// console.log(todos_numeros)


// const lista_perguntas = ["Telefonou para a vítima?","Esteve no local do crime?",
// "Mora perto da vítima?","Devia para a vítima?","Já trabalhou com a vítima?"]
// const positivas = []
// const negativas = []
// let resposta = 0
// for(pergunta of lista_perguntas) {
    
//     while(resposta !== 1 && resposta !== 2) {
//         resposta = Number(prompt(pergunta + " 1-Sim/2-Não"))
//     }

//     if(resposta===1) {
//         positivas.push(resposta)
//     } else {
//         negativas.push(resposta)
//     }  
//     resposta = 0
// }

// if(positivas.length === 2) {
//     alert("Você é suspeito do crime!")
// } else if(positivas.length > 2 && positivas.length < 5) {
//     alert("Você é cumplice do crime!")
// } else if(positivas.length > 4) {
//     alert("Você é o criminoso!")
// } else {
//     alert("Você é o inocente!")
// }

