export const formatNumber = (number) => {
  return new Intl.NumberFormat("id", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};
