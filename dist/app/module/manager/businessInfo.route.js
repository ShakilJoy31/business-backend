"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const businessInfo_validation_copy_1 = require("./businessInfo.validation copy");
const businessInfo_controller_1 = require("./businessInfo.controller");
const router = express_1.default.Router();
router.post("/page1", (0, validateRequest_1.default)(businessInfo_validation_copy_1.CowBuyerValidation.createCowBuyer), businessInfo_controller_1.CowSellerController.createCowSellerController);
router.get("/page1", businessInfo_controller_1.CowSellerController.getCowSellers);
router.get("/:id", businessInfo_controller_1.CowSellerController.particularCowSeller);
router.patch("/:id", businessInfo_controller_1.CowSellerController.updateCowSeller);
router.delete("/:id", businessInfo_controller_1.CowSellerController.deleteParticularCowSeller);
exports.default = router;
