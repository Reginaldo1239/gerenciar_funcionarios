export const formatCpf = (value) => {
  if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
    value = value?.replace(/\D/g, "");
    value = value?.replace(/(\d{3})(\d)/, "$1.$2");
    value = value?.replace(/(\d{3})(\d)/, "$1.$2");
    value = value?.replace(/(\d{3})(\d{2})$/, "$1-$2");
    return value;
  }
  return value.slice(0, 14);
}
export const formatCurrency = (value) => {
  value = value?.replace(/\D/g, "");
  value = value?.replace(/(\d)(\d{2})$/, "$1,$2");
  value = value?.replace(/(?=(\d{3})+(\D))\B/g, ".");
  return value;
}
export const formatNumberOnly = (value) => {
  return value?.replace(/\D/g, "");
}
