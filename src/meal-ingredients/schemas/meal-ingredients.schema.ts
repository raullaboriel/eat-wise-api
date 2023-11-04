import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    timestamps: true
})
export class MealIngredient extends Document {
    @Prop({
        required: true
    })
    fdcId: number;

    @Prop({
        required: true
    })
    mealId: string;

    @Prop({
        required: true
    })
    amount: number;
}

export const MealIngredientSchema = SchemaFactory.createForClass(MealIngredient);