import z from "zod";

export const removeProductFormCartSchema = z.object({
  cartItemId: z.uuid(),
});
