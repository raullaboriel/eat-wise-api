import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    timestamps: true
})
export class Meal extends Document {
    @Prop({
        required: true
    })
    ingredients: string[];

    @Prop({
        required: true,
        default: new Date()
    })
    date: Date;
}

export const MealSchema = SchemaFactory.createForClass(Meal);