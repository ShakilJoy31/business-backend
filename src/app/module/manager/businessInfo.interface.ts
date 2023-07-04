import { Model } from "mongoose"

export type ICowSeller = {
    businessName: string,
    country: string,
    state: string,
    bannerImg: string,
    city: string,
    email: string,
    address: string,
    contactNo: string,
    openingTime: string,
    closingTime: string
}

export type CowSellerModel = Model<ICowSeller, Record<string, unknown>>;

export type ICowSellerFilters = {
    searchTerm?: string;
}