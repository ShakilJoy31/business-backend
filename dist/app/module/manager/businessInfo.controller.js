"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowSellerController = void 0;
const business_service_1 = require("./business.service");
const createCowSellerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cowSellerData = req.body;
        const result = yield business_service_1.CowSellerService.createCowSellerService(cowSellerData);
        console.log(cowSellerData);
        res.status(200).json({
            success: true,
            message: 'Business information is added successfully',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
// Controller for getting all the seller.
const getCowSellers = (req, res, next) => {
    try {
        const result = business_service_1.CowSellerService.getCowSellers();
        res.status(200).json({
            success: true,
            message: 'Business information retrieved successfully.',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
const particularCowSeller = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield business_service_1.CowSellerService.getParticularCowSeller(id);
        res.status(200).json({
            success: true,
            message: 'Particular business information retrieved successfully',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const updateCowSeller = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const result = yield business_service_1.CowSellerService.updateCowSeller(id, updatedData);
        res.status(200).json({
            success: true,
            message: 'Business information is updated successfully.',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteParticularCowSeller = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield business_service_1.CowSellerService.deleteParticularCowSeller(id);
        res.status(200).json({
            success: true,
            message: 'Particular cow seller is deleted successfully',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
exports.CowSellerController = {
    createCowSellerController,
    getCowSellers,
    particularCowSeller,
    updateCowSeller,
    deleteParticularCowSeller
};
