"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowSellerModel = exports.cowSellerSchema = void 0;
const mongoose_1 = require("mongoose");
exports.cowSellerSchema = new mongoose_1.Schema({
    businessName: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    bannerImg: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    },
    openingTime: {
        type: String,
        required: true,
    },
    closingTime: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});
exports.CowSellerModel = (0, mongoose_1.model)('managerInformationCollection', exports.cowSellerSchema);
