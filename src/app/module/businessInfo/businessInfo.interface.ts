import { Model } from "mongoose"

export type ICowBuyer = {
    fullName: string,
    state: string,
    city: string,
    country: string,
    address: string,
    email: string,
    mobileNumber: number,
    image: string
}

export type CowSellerModel = Model<ICowBuyer, Record<string, unknown>>;