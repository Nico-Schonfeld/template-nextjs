import { MercadoPagoConfig, Preference } from "mercadopago";
const client = new MercadoPagoConfig({ accessToken: "YOUR_ACCESS_TOKEN" });

export class MercadoPagoServices {
  async MpPayment(data: {
    id: string;
    title: string;
    quantity: number;
    unit_price: number;
  }) {
    try {
      const preference = await new Preference(client).create({
        body: {
          items: [data],
          back_urls: {
            success: "/success",
            failure: "/failure",
            pending: "/pending",
          },
          auto_return: "approved",
        },
      });

      return { error: false, success: true, preference };
    } catch (error) {
      console.log(error);
      return { error: true, success: false, preference: null };
    }
  }
}
