import { NextFunction, Request, RequestHandler, Response } from "express";
import { CowBuyerService } from "./businessInfo.service";

const createCowBuyerController:RequestHandler = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const cowBuyerData = req.body;
        const result = await CowBuyerService.createCowBuyerService(cowBuyerData)
        res.status(200).json({
            success: true,
            message: 'Manager information added successfully',
            data: result
        })
    }catch(error){
        next(error);
    }
}

// Controller for getting all the seller.
const getCowBuyers:RequestHandler = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const result = await CowBuyerService.getCowBuyers();
        res.status(200).json({
            success: true,
            message: 'Manager information retrieved successfully.',
            data: result
        })
    }catch(error){
        next(error)
    }
}

const particularCowBuyer:RequestHandler = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const id = req.params.id;
        const result = await CowBuyerService.getParticularCowBuyer(id)
        res.status(200).json({
            success: true,
            message: 'Particular information retrieved successfully',
            data: result
        })
    }catch(error){
        next(error)
    }
}

const updateCowBuyer:RequestHandler = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const id = req.params.id;
    const updatedData = req.body;
    const result = await CowBuyerService.updateBuyer(id, updatedData);
    res.status(200).json({
        success: true,
        message: 'Owner information is updated successfully.',
        data: result
    })
    }catch(error){
        next(error)
    }
}

const deleteParticularCowBuyer:RequestHandler = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const id = req.params.id;
        const result = await CowBuyerService.deleteParticularCowBuyer(id);
        res.status(200).json({
            success: true,
            message: 'Particular cow buyer is deleted successfully',
            data: result
        })
    }catch(error){
        next(error)
    }

}

export const CowBuyerController = {
    createCowBuyerController,
    getCowBuyers,
    particularCowBuyer,
    updateCowBuyer,
    deleteParticularCowBuyer
}