export const parseCurrency = (value: number) => {
  return value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
};
