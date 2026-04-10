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