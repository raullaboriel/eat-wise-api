import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: true
})
export class Recipe {
    @Prop({
        trim: true,
        unique: true,
    })
    name: string | undefined;

    @Prop({
        required: true,
    })
    ingredients: string[];
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);