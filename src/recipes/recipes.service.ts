import { ConflictException, NotFoundException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Recipe } from './schemas';
import { Model } from 'mongoose';
import { CreateRecipeDto, UpdateRecipeDto } from './dto';

@Injectable()
export class RecipesService {
    constructor(@InjectModel(Recipe.name) private readonly recipeModel: Model<Recipe>) { }

    async findAll(): Promise<Recipe[]> {
        return this.recipeModel.find();
    }

    async findById(id: string): Promise<Recipe> {
        const recipe = await this.recipeModel.findById(id);

        if (!recipe) {
            throw new NotFoundException('Recipe not found');
        }

        return recipe;
    }

    async create(newRecipe: CreateRecipeDto): Promise<Recipe> {
        const createdRecipe = new this.recipeModel(newRecipe);

        try {
            return await createdRecipe.save();
        } catch (error) {
            if (error.code === 11000) {
                throw new ConflictException('Recipe already exists');
            }
        }
    }

    async deleteById(id: string): Promise<Recipe> {
        const recipe = await this.recipeModel.findByIdAndDelete(id);

        if (!recipe) {
            throw new NotFoundException('Recipe not found');
        }

        return recipe;
    }

    async updateById(id: string, updatedRecipe: UpdateRecipeDto): Promise<Recipe> {
        console.log(id, updatedRecipe)
        const recipe = await this.recipeModel.findByIdAndUpdate(id, updatedRecipe, { new: true });

        if (!recipe) {
            throw new NotFoundException('Recipe not found');
        }

        return recipe;
    }

}
