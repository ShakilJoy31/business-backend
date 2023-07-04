import { NextFunction, Request, RequestHandler, Response } from "express";
import {CowSellerService} from './business.service';

const createCowSellerController:RequestHandler = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const cowSellerData = req.body;
        const result = await CowSellerService.createCowSellerService(cowSellerData)
        console.log(cowSellerData);
        res.status(200).json({
            success: true,
            message: 'Business information is added successfully',
            data: result
        })
    }catch(error){
        next(error);
    }
}

// Controller for getting all the seller.
const getCowSellers:RequestHandler = (req: Request, res: Response, next: NextFunction) =>{
    try{

        // const result = CowSellerService.getCowSellers();
        throw new Error('message');
        // res.status(200).json({
        //     success: true,
        //     message: 'Business information retrieved successfully.',
        //     data: result
        // })
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
            message: 'Particular business information retrieved successfully',
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
        message: 'Business information is updated successfully.',
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