const { calcularMetaAgua, obterSugestaoChecklist } = require('./logic');

const peso = 75; // Simulação de entrada de usuário
const aguaConsumida = 1500;
const horaAtual = new Date().getHours();

console.log("=== CAREMIND: SEU ASSISTENTE DE AUTOCUIDADO ===");
console.log(`Meta diária de água para ${peso}kg: ${calcularMetaAgua(peso)}ml`);
console.log(`Você já bebeu: ${aguaConsumida}ml`);
console.log("-------------------------------------------");
console.log(`Dica de agora: ${obterSugestaoChecklist(horaAtual)}`);
console.log("===========================================");