import * as mongoose from 'mongoose';

export const RecipeSchema = new mongoose.Schema({
    id: String,
    name: String,
    createdAt: Date,
    modifiedAt: Date,
    ingredients: Array
})