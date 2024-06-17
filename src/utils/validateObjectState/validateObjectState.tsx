export const validateAllFieldsFilled = (state: any) => {
  // Validar que todos los campos del estado están llenos
  const allFieldsFilled = Object.values(state).every(
    (value) => value !== null && value !== ""
  );

  return allFieldsFilled; // retorna un boolean.
  // Si el boolean es true todos los campos del state estan llenos.
};
