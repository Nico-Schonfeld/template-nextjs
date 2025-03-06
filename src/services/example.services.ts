import revalidateCache from "@/utils/cache/revalidateCache";

const accessToken = true; // Get token from session

// Create a class with service functions
export class ExampleServices {
  // Add service functions
  async exampleFuncionServices(data: string) {
    // It's a good practice to add token validation
    try {
      if (accessToken) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/urlApi...`,
          {
            method: "POST", // HTTP method
            next: { tags: ["exampleTag"] },
            headers: {
              /* Authorization: `Bearer ${accessToken}`, Send token if needed */
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (!res.ok) {
          throw new Error("Request error");
        }

        revalidateCache("exampleTag");

        return await res.json();
      }
    } catch (error) {
      console.log(error);
    }
  }
}
