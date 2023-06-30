import { NextFunction, Request, RequestHandler, Response } from "express";
import { CowSellerService } from "./cowseller.service";

const createCowSellerController:RequestHandler = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const cowSellerData = req.body;
        const result = await CowSellerService.createCowSellerService(cowSellerData)
        res.status(200).json({
            success: true,
            message: 'Cow seller created successfully',
            data: result
        })
    }catch(error){
        next(error);
    }
}

// Controller for getting all the seller.
const getCowSellers:RequestHandler = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const result = await CowSellerService.getCowSellers();
        res.status(200).json({
            success: true,
            message: 'Cow sellers retrieved successfully.',
            data: result
        })
    }catch(error){
        next(error)
    }
}

const particularCowSeller:RequestHandler = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const id = req.params.id;
        const result = await CowSellerService.getParticularCowSeller(id)
        res.status(200).json({
            success: true,
            message: 'Particular cow seller retrieved successfully',
            data: result
        })
    }catch(error){
        next(error)
    }
}

const updateCowSeller:RequestHandler = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const id = req.params.id;
    const updatedData = req.body;
    const result = await CowSellerService.updateCowSeller(id, updatedData);
    res.status(200).json({
        success: true,
        message: 'Information of the cow seller is updated successfully.',
        data: result
    })
    }catch(error){
        next(error)
    }
}

const deleteParticularCowSeller:RequestHandler = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const id = req.params.id;
        const result = await CowSellerService.deleteParticularCowSeller(id);
        res.status(200).json({
            success: true,
            message: 'Particular cow seller is deleted successfully',
            data: result
        })
    }catch(error){
        next(error)
    }

}

export const CowSellerController = {
    createCowSellerController,
    getCowSellers,
    particularCowSeller,
    updateCowSeller,
    deleteParticularCowSeller
}