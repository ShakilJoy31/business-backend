import { ICowSeller } from "./businessInfo.interface"
import { CowSellerModel } from "./businessInfo.model"

const createCowSellerService = async (payload: ICowSeller) =>{
    const newCowSeller = await CowSellerModel.create(payload);
    return newCowSeller; 
}

const getCowSellers = async() =>{
    const result = await CowSellerModel.find();
    return result
}

const getParticularCowSeller = async (id:string) =>{
    const result = await CowSellerModel.findById(id);
    return result;
}

const updateCowSeller = async (id:string, payload:Partial<ICowSeller>) =>{
    const result = await CowSellerModel.findByIdAndUpdate({_id: id}, payload, {new: true})
    return result
}

const deleteParticularCowSeller = async (id:string) =>{
    const result = await CowSellerModel.findByIdAndDelete(id);
    return result;
}

export const CowSellerService = {
    createCowSellerService,
    getCowSellers,
    getParticularCowSeller,
    updateCowSeller,
    deleteParticularCowSeller
}