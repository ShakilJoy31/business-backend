import { CowBuyerModel } from "./cowbuyer.model";
import { ICowBuyer } from "./cowbuyer.interface"

const createCowBuyerService = async (payload: ICowBuyer) =>{
    const newCowSeller = await CowBuyerModel.create(payload);
    return newCowSeller; 
}

const getCowBuyers = async():Promise<ICowBuyer[]> =>{
    const result = await CowBuyerModel.find();
    return result;
}

const getParticularCowBuyer = async (id:string) =>{
    const result = await CowBuyerModel.findById(id);
    return result;
}

const updateBuyer = async (id:string, payload:Partial<ICowBuyer>) =>{
    const result = await CowBuyerModel.findByIdAndUpdate({_id: id}, payload, {new: true})
    return result
}

const deleteParticularCowBuyer = async (id:string) =>{
    const result = await CowBuyerModel.findByIdAndDelete(id);
    return result;
}

export const CowBuyerService = {
    createCowBuyerService,
    getCowBuyers,
    getParticularCowBuyer,
    updateBuyer,
    deleteParticularCowBuyer
}