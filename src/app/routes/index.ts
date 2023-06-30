import express from 'express';
import sellerRoute from '../module/cowSeller/cowseller.route'
import buyerRoute from '../module/cowBuyer/cowbuyer.route'

const router = express.Router()
const routesToVisit = [
    {
        path:'/cow-seller',
        route: sellerRoute
    },
    {
        path:'/cow-buyer',
        route: buyerRoute
    }
    // {
    //     path:'/cow-buyer',
    //     route: buyerRoute
    // },
    // {
    //     path:'/cow',
    //     route: cow
    // },
]

routesToVisit.forEach(route => router.use(route.path, route.route))

export default router;