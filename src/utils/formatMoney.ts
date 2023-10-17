export const formatMoney = (amount: number, currency: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency, // Change this to the appropriate currency code
  }).format(amount);
};
