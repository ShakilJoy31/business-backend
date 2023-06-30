import express from 'express'; 
import requestValidator from '../../middlewares/validateRequest';
import { CowBuyerValidation } from './cowbuyer.validation';
import { CowBuyerController } from './cowbuyer.controller';

const router = express.Router();

// Create a buyer
router.post('/create-buyer', requestValidator(CowBuyerValidation.createCowBuyer), CowBuyerController.createCowBuyerController);

// Get all buyer
router.get('/get-buyers', CowBuyerController.getCowBuyers);

// Get a particular buyer
router.get('/:id', CowBuyerController.particularCowBuyer);

// Updating the cow seller information
router.patch('/:id', CowBuyerController.updateCowBuyer)

// Delete cow seller
router.delete('/:id', CowBuyerController.deleteParticularCowBuyer)


export default router;




// APIs for readme.md

// Buyer post
// http://localhost:5000/api/v1/digital-cow-hut/cow-buyer/create-buyer

// Buyer get all
// http://localhost:5000/api/v1/digital-cow-hut/cow-buyer/get-buyers

// Buyer get particular
// http://localhost:5000/api/v1/digital-cow-hut/cow-buyer/649ead314caec7574736f2d9

// Updated buyer
// http://localhost:5000/api/v1/digital-cow-hut/cow-buyer/649ead314caec7574736f2d9

// Delete buyer
// http://localhost:5000/api/v1/digital-cow-hut/cow-buyer/649ead4e4caec7574736f2dd

