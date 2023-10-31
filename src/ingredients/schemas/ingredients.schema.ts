import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    timestamps: true
})
export class Ingredient extends Document {
    @Prop()
    name: string;

    @Prop()
    fdcId: number;

    @Prop()
    amount: number;
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient);