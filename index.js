const prompt = require('prompt-sync');
const entrada = prompt();

let anoAtual = 2024;
const nomeCompleto = "Lucas Mergener de Moura";
let idade = 16;
const cursoFaculdade = "Biotecnologia";
let cidadeAtual = "São José dos Pinhais";

console.log(`Olá eu sou o ${nomeCompleto}, eu tenho ${idade} anos, moro em ${cidadeAtual}, ano que vem estar cursando ${cursoFaculdade}.`);

anoAtual = 2025;

let idadeFutura = 18;

console.log(`Para o ano que vem, o meu nome continuará ${nomeCompleto}, vou ter ${idadeFutura} anos de idade, planejo continuar morando em ${cidadeAtual}, e planejo também estar na faculdade de ${cursoFaculdade}.`);

//Agência de Viagens
console.log("-------------------------");
console.log("          LOGIN          ");
console.log("-------------------------");

const loginCerto = "login123";
const senhaCerta = 12345;

var login = entrada("Digite o seu Login:");
var senha = entrada("Digite a sua senha:");

while(login != loginCerto) {
  console.log("Usuário não encontrado");
  login = entrada("Digite o seu Login novamente:");
  senha = entrada("Digite a sua senha novamente:");
};

while(senha != senhaCerta) {
  console.log("Senha incorreta");
  senha = entrada("Digite a sua senha novamente:");
};

console.log("-------------------------");
console.log("     DADOS PESSOAIS      ");
console.log("-------------------------");

var nomeComprador = entrada("Qual é o seu nome?");
const cpfComprador = entrada("Qual é o seu CPF?");
var idadeComprador = entrada("Qual é a sua idade?");
const listadeDestinos = new Array(
  " Seul",
  " Berlim",
  " Las Vegas",
  " Roma",
  " Tóquio"
);

console.log("-------------------------");
console.log("   OPERAÇÃO CONCLUÍDA    ");
console.log("-------------------------");

console.log(`Olá Senhor ${nomeComprador}, portador do CPF ${cpfComprador}, com idade de ${idadeComprador}, confirmamos que a sua passagem para ${listadeDestinos} foi confirmada.`);

console.log(listadeDestinos[0]);
console.log("");

console.log(`Olá Senhor ${nomeComprador}, adicionamos mais uma viagem a sua lista de interesses.`);

listadeDestinos.push("Paris");

console.log("-------------------------");
console.log(" RESULTADO DA OPERAÇÃO:  ");
console.log("-------------------------");

if(idadeComprador<18){
  console.log(`Infelizmente não podemos lhe vender uma passagem, pois o senhor(a) é menor de idade.`)
}

if(idadeComprador>=18){
  console.log(`Parabens, sua compra de passagem foi um sucesso.`)
}