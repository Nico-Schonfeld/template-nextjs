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

// validate user schema
const userSchema = z
  .object({
    firstName: z
      .string({
        required_error: "First name is required",
      })
      .min(3, {
        message: "first name must be at least 3 characters long",
      })
      .max(50),
    lastName: z
      .string({
        required_error: "Last name is required",
      })
      .min(3)
      .max(50),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email(),
    password: z
      .string({ required_error: "Password is required" })
      .min(6)
      .max(50),
    confirmPassword: z
      .string({ required_error: "Confirm password is required" })
      .min(6)
      .max(50),
    age: z.number().int().positive().min(18).max(100).optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

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
