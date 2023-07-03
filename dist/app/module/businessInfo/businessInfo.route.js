"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const businessInfo_validation_1 = require("./businessInfo.validation");
const businessInfo_controller_1 = require("./businessInfo.controller");
const router = express_1.default.Router();
// Create a buyer
router.post('/create-buyer', (0, validateRequest_1.default)(businessInfo_validation_1.CowBuyerValidation.createCowBuyer), businessInfo_controller_1.CowBuyerController.createCowBuyerController);
// Get all buyer
router.get('/get-buyers', businessInfo_controller_1.CowBuyerController.getCowBuyers);
// Get a particular buyer
router.get('/:id', businessInfo_controller_1.CowBuyerController.particularCowBuyer);
// Updating the cow seller information
router.patch('/:id', businessInfo_controller_1.CowBuyerController.updateCowBuyer);
// Delete cow seller
router.delete('/:id', businessInfo_controller_1.CowBuyerController.deleteParticularCowBuyer);
exports.default = router;
