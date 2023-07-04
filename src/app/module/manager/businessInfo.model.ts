import { Model, Schema, model } from "mongoose";
import { ICowSeller } from "./businessInfo.interface";

export type CowSellerModel = Model<ICowSeller, object>;

export const cowSellerSchema = new Schema<ICowSeller>({
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

export const CowSellerModel = model<ICowSeller, CowSellerModel>('managerInformationCollection', cowSellerSchema)