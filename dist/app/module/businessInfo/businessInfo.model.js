"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowBuyerModel = exports.cowBuyerSchema = void 0;
const mongoose_1 = require("mongoose");
exports.cowBuyerSchema = new mongoose_1.Schema({
    fullName: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});
exports.CowBuyerModel = (0, mongoose_1.model)('managerInformation', exports.cowBuyerSchema);
