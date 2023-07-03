"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowBuyerModel = exports.cowBuyerSchema = void 0;
const mongoose_1 = require("mongoose");
exports.cowBuyerSchema = new mongoose_1.Schema({
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    name: {
        firstName: {
            type: String,
            required: true,
        },
        middleName: {
            type: String
        },
        lastName: {
            type: String,
            required: true,
        },
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    budget: {
        type: Number,
        required: true
    },
    income: {
        type: Number,
        required: true
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});
exports.CowBuyerModel = (0, mongoose_1.model)('cowBuyerCollection', exports.cowBuyerSchema);
