import { z } from "zod";

const isString = z.string();
const isNumber = z.number();
const isBoolean = z.boolean();
const isUndefined = z.undefined();
const isNull = z.null();

export const isStringFunction = (text: string | undefined) => {
  const res = isString.safeParse(text); // or parse(text)

  return res;
};

export const isNumberFunction = (number: number | undefined) => {
  const res = isNumber.safeParse(number);

  return res;
};

export const isBooleanFunction = (boolean: string | undefined) => {
  const res = isBoolean.safeParse(boolean);

  return res;
};

export const isUndefinedFunction = (undefined: string | undefined) => {
  const res = isUndefined.safeParse(undefined);

  return res;
};

export const isNullFunction = (nullValue: null | undefined) => {
  const res = isNull.safeParse(nullValue);

  return res;
};

// Añadir mas funciones segun lo necesiten...

/* =========================== [ Schema Object ] ============================= */
/* const userSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string(),
  age: z.number(),
  admin: z.boolean(),
});

const res = userSchema.safeParse({
  email: "pepe@pepe.com",
  name: "Pepe",
  password: "Pepe1234",
  age: 46,
  admin: false,
}); */

// validate array of string
/* const stringArraySchema = z.string().array(); */
/* const stringArraySchema = z.array(z.string()); */
/* const stringArraySchema = z.array(z.string()).optional(); // string[] | undefined */
