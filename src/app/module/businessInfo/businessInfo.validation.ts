import { z } from "zod";

const createCowBuyer = z.object({
  body: z.object({
    fullName: z.string({
      required_error: "Business name is required",
    }),
    state: z.string({
      required_error: "Country is required",
    }),
    city: z.string({
      required_error: "State is required",
    }),
    bannerImg: z.string({
      required_error: "Picture is required",
    }),
    country: z.string({
      required_error: "City is required",
    }),
    email: z.string({
      required_error: "Email is required",
    }),
    address: z.string({
      required_error: "Address is required",
    }),
    contactNo: z.string({
      required_error: "Contact is required",
    }),
  }),
});

export const CowBuyerValidation = {
  createCowBuyer,
};
