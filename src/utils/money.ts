const MULTIPLIER = 1000

function normalizeAmount(money?: number) {
  if (money) return money * MULTIPLIER
}

export function normalizeAndFormatAmount(money?: number) {
  if (money) {
    const normalized = normalizeAmount(money) || 0
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(normalized)
  }
  return ''
}