import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Ingredient } from 'src/ingredients/interfaces';

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
    ingredients: Ingredient[];
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);