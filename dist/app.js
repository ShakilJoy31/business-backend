"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const http_status_1 = __importDefault(require("http-status"));
const globalErrorHandlers_1 = __importDefault(require("./app/middlewares/globalErrorHandlers"));
// import ApiErrors from './errors/ApiErrors'
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Application Route.
app.use('/api/v1/', routes_1.default);
// Global Error handler
app.use(globalErrorHandlers_1.default);
// Handle not found route
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: 'API is not found',
        errorMessages: [
            {
                path: req.originalUrl,
                message: `${req.originalUrl} is not found`
            }
        ]
    });
    next();
});
// Requirements
// https://github.com/Apollo-Level2-Web-Dev/Digital-Cow-Hut
exports.default = app;
