"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const businessInfo_route_1 = __importDefault(require("../module/manager/businessInfo.route"));
const businessInfo_route_2 = __importDefault(require("../module/businessInfo/businessInfo.route"));
const router = express_1.default.Router();
const routesToVisit = [
    {
        path: '/onboarding',
        route: businessInfo_route_1.default
    },
    // Owner | manager
    {
        path: '/onboarding',
        route: businessInfo_route_2.default
    },
];
routesToVisit.forEach(route => router.use(route.path, route.route));
exports.default = router;
// post
// http://localhost:5000/api/v1/onboarding/page2
// particular
// http://localhost:5000/api/v1/onboarding/64a43e43f75aed5611608beb
// patch
// http://localhost:5000/api/v1/onboarding/64a43e43f75aed5611608beb
