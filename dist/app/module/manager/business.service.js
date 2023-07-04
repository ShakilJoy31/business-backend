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
exports.CowSellerService = void 0;
const businessInfo_model_1 = require("./businessInfo.model");
const createCowSellerService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newCowSeller = yield businessInfo_model_1.CowSellerModel.create(payload);
    return newCowSeller;
});
const getCowSellers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield businessInfo_model_1.CowSellerModel.find();
    return result;
});
const getParticularCowSeller = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield businessInfo_model_1.CowSellerModel.findById(id);
    return result;
});
const updateCowSeller = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield businessInfo_model_1.CowSellerModel.findByIdAndUpdate({ _id: id }, payload, { new: true });
    return result;
});
const deleteParticularCowSeller = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield businessInfo_model_1.CowSellerModel.findByIdAndDelete(id);
    return result;
});
exports.CowSellerService = {
    createCowSellerService,
    getCowSellers,
    getParticularCowSeller,
    updateCowSeller,
    deleteParticularCowSeller
};
