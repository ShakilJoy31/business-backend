import {z} from 'zod';


const createCowBuyer = z.object({
    body: z.object({
        password: z.string({
            required_error: 'Password is required'
        }),
    role: z.string({
        required_error:'Role is required'
    }),
    name: z.object({
        firstName: z.string({
            required_error: 'First name is required'
        }),
        middleName: z.string().optional(),
        lastName: z.string({
            required_error: 'Last name is required'
        })
    }),
    phoneNumber: z.string({
        required_error: 'Phone number is required'
    }),
    address: z.string({
        required_error: 'Address is required'
    }),
    budget: z.number({
        required_error: 'Budget is required'
    }),
    income: z.number({
        required_error: 'Income is required'
    }),
    })
})

export const CowBuyerValidation = {
    createCowBuyer
}