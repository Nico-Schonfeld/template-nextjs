import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.YOUR_ACCESS_TOKEN as string,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req
      .json()
      .then((data) => data as { data: { id: string } });

    const payment = await new Payment(client).get({ id: body.data.id });

    console.log(`[payment]:`, payment);

    return NextResponse.json(
      { error: false, success: true, payment: payment },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
