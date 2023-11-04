import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    timestamps: true
})
export class Gender extends Document {
    @Prop({
        required: true,
        trim: true
    })
    gender: string
}

export const GenderSchema = SchemaFactory.createForClass(Gender);