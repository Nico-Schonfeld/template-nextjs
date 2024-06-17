export const toggleCopy = (text: string) => {
  if (typeof window === "undefined")
    return {
      error: true,
      success: false,
      message: "No se pudo copiar el texto.",
    };

  return {
    error: false,
    success: true,
    result: window.navigator.clipboard.writeText(text),
  };
};
