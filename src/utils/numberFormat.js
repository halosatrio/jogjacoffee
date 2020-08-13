export const formatNumber = (number) => {
  return new Intl.NumberFormat("id").format(number);
};
