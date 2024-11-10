"use server";

import { MercadoPagoServices } from "@/services/mercadopago.services";
import { redirect } from "next/navigation";

export const paymentAction = async (data: {
  id: string;
  title: string;
  quantity: number;
  unit_price: number;
}) => {
  const mercadoPagoServices = new MercadoPagoServices();
  const res = await mercadoPagoServices.MpPayment(data);

  if (res.error && !res.success) return null;
  if (res.success && !res.error) redirect(res?.preference?.sandbox_init_point!);
};
