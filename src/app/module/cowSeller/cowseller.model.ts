import { Model, Schema, model } from "mongoose";
import { ICowSeller } from "./cowseller.interface";

export type CowSellerModel = Model<ICowSeller, object>;

export const cowSellerSchema = new Schema<ICowSeller>({
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

export const CowSellerModel = model<ICowSeller, CowSellerModel>('cowSellerCollection', cowSellerSchema)