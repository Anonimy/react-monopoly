const MULTIPLIER = 1000

function normalizeAmount(money?: number) {
  if (money) return money * MULTIPLIER
}

export function normalizeAndFormatAmount(money?: number) {
  if (money) {
    const normalized = normalizeAmount(money) || 0
    return new Intl.NumberFormat('pt-BR', { currency: 'BRL' }).format(normalized) + ',00'
  }
  return ''
}