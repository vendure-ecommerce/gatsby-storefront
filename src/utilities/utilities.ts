export function formatPrice(currency: string, value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    currencyDisplay: 'symbol',
  }).format(value / 100);
}
