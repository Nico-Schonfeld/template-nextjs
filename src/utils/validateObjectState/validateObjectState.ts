interface State {
  [key: string]: unknown; // Puedes ajustar esto según los tipos específicos de tus valores
}

export const validateAllFieldsFilled = (state: State): boolean => {
  // Validar que todos los campos del estado están llenos
  const allFieldsFilled = Object.values(state).every(
    (value) => value !== null && value !== ""
  );

  return allFieldsFilled; // retorna un boolean.
  // Si el boolean es true todos los campos del state estan llenos.
};
