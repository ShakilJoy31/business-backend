import { Model, Schema, model } from "mongoose";
import { ICowBuyer } from "./businessInfo.interface";

export type CowBuyerModel = Model<ICowBuyer, object>;

export const cowBuyerSchema = new Schema<ICowBuyer>({
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
    type: String,
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

export const CowBuyerModel = model<ICowBuyer, CowBuyerModel>('managerInformation', cowBuyerSchema)