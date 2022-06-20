//1 - crie uma função que exiba uma mensagem no console
function msg(){
    console.log("Boa noite")
}

msg()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function myName(name){
    console.log(`Bem-vindo(a)' ${name}!`)

}
myName("Izaias")
//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function about(name , age, music){
    console.log(`Meu nome é ${name}, eu tenho ${age} anos e amo ouvir ${music}`)
}

about("Izaias", 27,"pop")
about("Junior",25,"Rap")
//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function fun(movie,music){
    console.log(`meu filme favorito é ${movie} e minha música favorita é ${music}`)
}
fun("os incriveis","Chris Brow")
fun("Homem-Aranha","Link Park")
//*Bônus:

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function calc(triplo){
    return triplo * 3
}

const result = calc(6)
console.log(result)
