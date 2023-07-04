import express from "express";
import requestValidator from "../../middlewares/validateRequest";
import { CowBuyerValidation } from "./businessInfo.validation copy";
import { CowSellerController } from "./businessInfo.controller";

const router = express.Router();

router.post(
  "/page1",requestValidator(CowBuyerValidation.createCowBuyer), CowSellerController.createCowSellerController
);

router.get("/page1", CowSellerController.getCowSellers);

router.get("/:id", CowSellerController.particularCowSeller);

router.patch("/:id", CowSellerController.updateCowSeller);

router.delete("/:id", CowSellerController.deleteParticularCowSeller);

export default router;
