/**
 * Lógica de Autocuidado
 */

// Calcula meta de água baseada no peso (35ml por kg)
const calcularMetaAgua = (peso) => {
    if (peso <= 0 || typeof peso !== 'number') return 0;
    return peso * 35; 
  };
  
  // Valida se o progresso atingiu a meta
  const verificarMetaAtingida = (consumido, meta) => {
    if (consumido < 0) return false;
    return consumido >= meta;
  };
  
  // Sugestão de autocuidado baseada na hora do dia
  const obterSugestaoChecklist = (hora) => {
    if (hora >= 5 && hora < 12) return "Momento de alongar o pescoço e ombros.";
    if (hora >= 12 && hora < 18) return "Pause 5 min para descansar a vista (regra 20-20-20).";
    return "Momento de reduzir a luz azul e preparar o sono.";
  };
  
  module.exports = { calcularMetaAgua, verificarMetaAtingida, obterSugestaoChecklist };