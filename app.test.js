const { calcularMetaAgua, verificarMetaAtingida, obterSugestaoChecklist } = require('../src/logic');

test('Deve calcular a meta de água corretamente (Caminho Feliz)', () => {
  expect(calcularMetaAgua(70)).toBe(2450);
});

test('Deve retornar false se o consumo for negativo (Entrada Inválida)', () => {
  expect(verificarMetaAtingida(-500, 2000)).toBe(false);
});

test('Deve sugerir descanso de vista no período da tarde (Caso Limite/Regra)', () => {
  const sugestao = obterSugestaoChecklist(15);
  expect(sugestao).toContain("descansar a vista");
});

// Importa a função que você acabou de colocar no logic.js
const { buscarDicaAutocuidado } = require('./logic');

test('Deve integrar com a API e retornar uma dica válida em formato de texto', async () => {
  const dica = await buscarDicaAutocuidado();
  
  // Verifica se o resultado é um texto (string) e se não veio vazio
  expect(typeof dica).toBe('string'); 
  expect(dica.length).toBeGreaterThan(0);
});
