
export function PriceFormatter (amount: number, locale = 'en-US', currency = 'USD') {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  }).format(amount);
  return formatter;
}