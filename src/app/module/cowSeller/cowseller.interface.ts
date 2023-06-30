import { Model } from "mongoose"

export type ICowSeller = {
    password: string,
    role: string,
    name: {
        firstName: string,
        middleName: string
        lastName: string
    },
    phoneNumber: string,
    address: string,
    budget: number,
    income: number,
}

export type CowSellerModel = Model<ICowSeller, Record<string, unknown>>;


// {
//     "_id":"ObjectId(“6473c6a50c56d0d40b9bb6a3)",  
//     "password":"abrakadabra",
//     "role": "seller",
//      "name":{
//         "firstName": "Mr. Babull"
//         "lastName": "Bro"
//       },
//     "phoneNumber":"01711111111",
//     "address": "Chattogram",
//     "budget":0,
//     "income":0,
//     "createdAt":"",
//     "updatedAt":"",
//   }