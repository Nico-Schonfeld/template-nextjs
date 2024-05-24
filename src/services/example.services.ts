const accessToken = true; // Obtener token del la session

// Crear una clase con las funciones del servicio.
export class ExampleServices {
  // Añadir las funciones del servicio.
  async exampleFuncionServices(data: string) {
    // Es una buena practica añadir una validacion para el token
    try {
      if (accessToken) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/pathApi...`,
          {
            method: "POST", // methos HTTP
            headers: {
              /* Authorization: `Bearer ${accessToken}`, Enviar token si es necesario */
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (!res.ok) {
          throw new Error("Error en la request");
        }

        return await res.json();
      }
    } catch (error) {
      console.log(error);
    }
  }
}
