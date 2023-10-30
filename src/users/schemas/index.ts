import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    timestamps: true
})
export class User extends Document {
    @Prop({
        required: true,
    })
    name: string;

    @Prop({
        required: true,
    })
    height: number;

    @Prop({
        required: true,
    })
    weight: number;

    @Prop({
        required: true,
    })
    age: number;

    @Prop({
        required: true,
    })
    gender: string;

    @Prop({
        required: true,
    })
    username: string;

    @Prop({
        required: true,
    })
    email: string;

    @Prop({
        required: true,
    })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);