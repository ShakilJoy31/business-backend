import express from 'express'; 
import requestValidator from '../../middlewares/validateRequest';
import { CowSellerValidation } from './cowseller.validation';
import { CowSellerController } from './cowseller.controller';

const router = express.Router();

// Create a seller
router.post('/create-seller', requestValidator(CowSellerValidation.createCowSeller), CowSellerController.createCowSellerController);

// Get all seller
router.get('/get-sellers', CowSellerController.getCowSellers);

// Get a particular seller
router.get('/:id', CowSellerController.particularCowSeller);

// Updating the cow seller information
router.patch('/:id', CowSellerController.updateCowSeller)

router.delete('/:id', CowSellerController.deleteParticularCowSeller)


export default router;

// APIs for readme.md

// http://localhost:5000/api/v1/digital-cow-hut/cow-seller/create-seller

// http://localhost:5000/api/v1/digital-cow-hut/cow-seller/get-sellers

// Get particular
// http://localhost:5000/api/v1/digital-cow-hut/cow-seller/649e86eb7fe18b95d5cc86d6

// Update particular through patch
// http://localhost:5000/api/v1/digital-cow-hut/cow-seller/649e86eb7fe18b95d5cc86d6

// Delete particular seller
// http://localhost:5000/api/v1/digital-cow-hut/cow-seller/649e86eb7fe18b95d5cc86d6

