import { MercadoPagoConfig, Preference } from "mercadopago";
import { redirect } from "next/navigation";
const client = new MercadoPagoConfig({ accessToken: "YOUR_ACCESS_TOKEN" });

export const payment = async () => {
  const preference = await new Preference(client).create({
    body: {
      items: [
        {
          id: "idProduct",
          title: "Product title",
          quantity: 1,
          unit_price: 1000,
        },
      ],
    },
  });

  redirect(preference.sandbox_init_point!);
};
