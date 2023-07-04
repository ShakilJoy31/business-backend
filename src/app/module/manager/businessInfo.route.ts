import express from "express";
import requestValidator from "../../middlewares/validateRequest";
import { CowBuyerValidation } from "../businessInfo/businessInfo.validation";
import { CowSellerController } from "./businessInfo.controller";

const router = express.Router();

router.post(
  "/page1", CowSellerController.createCowSellerController
);

router.get("/page1", CowSellerController.getCowSellers);

router.get("/:id", CowSellerController.particularCowSeller);

router.patch("/:id", CowSellerController.updateCowSeller);

router.delete("/:id", CowSellerController.deleteParticularCowSeller);

export default router;

// APIs
// post: http://localhost:5000/api/v1/onboarding/page1
// Get-all: http://localhost:5000/api/v1/onboarding/page1
// Update: http://localhost:5000/api/v1/onboarding/64a2fd7874aff46aa9b59054
