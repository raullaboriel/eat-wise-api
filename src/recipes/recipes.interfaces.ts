import { Document } from "mongoose";

export interface Recipe extends Document {
    readonly id: string;
    readonly name: string;
    readonly createdAt: Date;
    readonly modifiedAt: Date;
    readonly ingredients: string[];
}