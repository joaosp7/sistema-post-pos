import z from "zod";

const envSchema = z.object({
  DB_PASSWORD: z.string(),
  PORT: z.number(),
});

const envProcess = envSchema.safeParse(process.env);

if (!envProcess.success) {
  console.error(envProcess.error.format());
  throw new Error("Invalid environment variables");
}

export const env = envProcess.data;
