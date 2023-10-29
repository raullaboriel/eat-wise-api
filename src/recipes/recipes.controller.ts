import { Body, Controller, Delete, Get, HttpException, Post, Put } from '@nestjs/common';
import { CreateRecipeDto, RecipesDto } from './recipes.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recipe } from './recipes.interfaces';

@Controller('recipes')
export class RecipesController {
    constructor(@InjectModel('Recipes') private readonly recipeModel: Model<Recipe>) { }

    @Get()
    public async getRecipes() {
        console.log('get all');

        const recipes = await this.recipeModel.find().exec();

        return recipes;
    }

    @Get(':_id')
    public async getRecipe(_id: string) {
        console.log('get one');
        const recipe = await this.recipeModel.findOne({ _id }).exec();

        if (!recipe) {
            throw new HttpException('Recipe not found', 404);
        }

        return recipe;
    }

    @Post()
    public async addRecipe(@Body() createRecipeDto: CreateRecipeDto) {
        const newRecipe = new this.recipeModel(createRecipeDto);

        return await newRecipe.save();
    }

    @Put(':_id')
    public async updateRecipe(_id: string, newRecipe: RecipesDto) {
        const recipe = await this.recipeModel.updateOne({ _id }, newRecipe).exec();

        if (!recipe) {
            throw new HttpException('Recipe not found', 404);
        }

        return recipe;
    }

    @Delete(':_id')
    public async deleteRecipe(_id: string) {
        const recipe = await this.recipeModel.deleteOne({ _id }).exec();

        if (recipe.deletedCount === 0) {
            throw new HttpException('Recipe not found', 404);
        }

        return recipe;
    }
}
