import express from 'express';
import sellerRoute from '../module/manager/businessInfo.route'
import buyerRoute from '../module/businessInfo/businessInfo.route'

const router = express.Router()
const routesToVisit = [
    {
        path:'/onboarding',
        route: sellerRoute
    },
    {
        path:'/onboarding',
        route: buyerRoute
    }
]

routesToVisit.forEach(route => router.use(route.path, route.route))

export default router;