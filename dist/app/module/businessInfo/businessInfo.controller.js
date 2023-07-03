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
exports.CowBuyerController = void 0;
const businessInfo_service_1 = require("./businessInfo.service");
const createCowBuyerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cowBuyerData = req.body;
        const result = yield businessInfo_service_1.CowBuyerService.createCowBuyerService(cowBuyerData);
        res.status(200).json({
            success: true,
            message: 'Cow buyer created successfully',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
// Controller for getting all the seller.
const getCowBuyers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield businessInfo_service_1.CowBuyerService.getCowBuyers();
        res.status(200).json({
            success: true,
            message: 'Cow Buyers retrieved successfully.',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const particularCowBuyer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield businessInfo_service_1.CowBuyerService.getParticularCowBuyer(id);
        res.status(200).json({
            success: true,
            message: 'Particular cow buyer retrieved successfully',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const updateCowBuyer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const result = yield businessInfo_service_1.CowBuyerService.updateBuyer(id, updatedData);
        res.status(200).json({
            success: true,
            message: 'Information of the cow buyer is updated successfully.',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteParticularCowBuyer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield businessInfo_service_1.CowBuyerService.deleteParticularCowBuyer(id);
        res.status(200).json({
            success: true,
            message: 'Particular cow buyer is deleted successfully',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
exports.CowBuyerController = {
    createCowBuyerController,
    getCowBuyers,
    particularCowBuyer,
    updateCowBuyer,
    deleteParticularCowBuyer
};
