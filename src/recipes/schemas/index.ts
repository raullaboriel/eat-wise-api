import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: true
})
export class Recipe {
    @Prop({
        trim: true,
        unique: true,
    })
    name: string;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);