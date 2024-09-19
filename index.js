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

const nomeComprador = "Carlos";
const cpfComprador = 12345678;
const idadeComprador = 21;
const listadeDestinos = new Array(
  " Seul",
  " Berlim",
  " Las Vegas",
  " Roma",
  " e Tokyo"
);

console.log(`Olá Senhor ${nomeComprador}, portador do CPF ${cpfComprador}, com idade de ${idadeComprador}, confirmamos que a sua passagem para ${listadeDestinos} foi confirmada.`);

console.log(listadeDestinos[0]);
console.log("");

console.log(`Olá Senhor ${nomeComprador}, adicionamos mais uma viagem a sua lista de interesses.`);

listadeDestinos.push("Paris");
console.log(listadeDestinos);