import express from 'express';
import sellerRoute from '../module/manager/businessInfo.route'
import buyerRoute from '../module/businessInfo/businessInfo.route'

const router = express.Router()
// router.use('/onnokichu', buyerRoute)
const routesToVisit = [
    // Owner | manager
    {
        path:'/onboarding',
        route: buyerRoute
    },
    {
        path:'/onboarding',
        route: sellerRoute
    }
]

routesToVisit.forEach(route => router.use(route.path, route.route))

export default router;

// post
// http://localhost:5000/api/v1/onboarding/page2

// particular
// http://localhost:5000/api/v1/onboarding/64a43e43f75aed5611608beb

// patch
// http://localhost:5000/api/v1/onboarding/64a43e43f75aed5611608beb