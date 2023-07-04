import express from 'express'; 
import requestValidator from '../../middlewares/validateRequest';
import { CowBuyerValidation } from './businessInfo.validation';
import { CowBuyerController } from './businessInfo.controller';

const router = express.Router();

// Create a buyer
router.post('/page2', CowBuyerController.createCowBuyerController);

// Get all buyer
router.get('/', CowBuyerController.getCowBuyers);

// Get a particular buyer
router.get('/:id', CowBuyerController.particularCowBuyer);

// Updating the cow seller information
router.patch('/:id', CowBuyerController.updateCowBuyer)

// Delete cow seller
router.delete('/:id', CowBuyerController.deleteParticularCowBuyer)


export default router;

