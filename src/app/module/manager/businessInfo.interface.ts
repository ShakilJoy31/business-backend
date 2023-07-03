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


// {
//     "businessName":"InspectSolution1.0",
//     "country":"India",
//     "state":"Haryana",
//     "bannerImg":["/onBoard/50e3b730-7b7e-11ed-a1a5-81c4adfb77b2"],
//     "city":"hodal",
//     "latitude":"23.013290",
//     "longitude":"78.230604",
//     "email":"test172@gmail.com",
//     "address": "Near bharat gas agency",
//     "contactNo":["7896561270"],
//     "openingTime":"15:00",
//     "closingTime":"02:00"
//   }