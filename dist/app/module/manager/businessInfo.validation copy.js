"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowBuyerValidation = void 0;
const zod_1 = require("zod");
const createCowBuyer = zod_1.z.object({
    body: zod_1.z.object({
        businessName: zod_1.z.string({
            required_error: "Business name is required",
        }),
        country: zod_1.z.string({
            required_error: "Country is required",
        }),
        state: zod_1.z.string({
            required_error: "State is required",
        }),
        bannerImg: zod_1.z.string({
            required_error: "Picture is required",
        }),
        city: zod_1.z.string({
            required_error: "City is required",
        }),
        email: zod_1.z.string({
            required_error: "Email is required",
        }),
        address: zod_1.z.string({
            required_error: "Address is required",
        }),
        contactNo: zod_1.z.string({
            required_error: "Contact is required",
        }),
        openingTime: zod_1.z.string({
            required_error: "Opening time is required",
        }),
        closingTime: zod_1.z.string({
            required_error: "Closing time is required",
        }),
    }),
});
exports.CowBuyerValidation = {
    createCowBuyer,
};
