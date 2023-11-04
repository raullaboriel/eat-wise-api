import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    timestamps: true
})
export class RecipeIngredient extends Document {
    @Prop({
        required: true
    })
    fdcId: number;

    @Prop({
        required: true
    })
    receipeId: string;

    @Prop({
        required: true
    })
    amount: number;
}

export const RecipeIngredientSchema = SchemaFactory.createForClass(RecipeIngredient);