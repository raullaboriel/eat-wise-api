import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly recipeModel: Model<User>) { }

    async findByUsername(username: string): Promise<User> {
        const user = await this.recipeModel.findOne({ username });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }

    findByEmail(email: string): Promise<User> {
        const user = this.recipeModel.findOne({ email });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }

    findByUsernameOrEmail(username: string, email: string): Promise<User> {
        const user = this.recipeModel.findOne({ $or: [{ username }, { email }] });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }
}
