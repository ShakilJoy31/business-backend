import { Model, Schema, model } from "mongoose";
import { ICowBuyer } from "./cowbuyer.interface";

export type CowBuyerModel = Model<ICowBuyer, object>;

export const cowBuyerSchema = new Schema<ICowBuyer>({
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

export const CowBuyerModel = model<ICowBuyer, CowBuyerModel>('cowBuyerCollection', cowBuyerSchema)