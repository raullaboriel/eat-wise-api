import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    timestamps: true
})
export class Meal extends Document {
    @Prop({
        required: true,
        default: new Date()
    })
    date: Date;

    @Prop({
        required: true
    })
    userId: string;
}

export const MealSchema = SchemaFactory.createForClass(Meal);