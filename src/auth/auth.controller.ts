import { BadRequestException, Body, Controller, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { };

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() signInDto: SignInDto, @Res({ passthrough: true }) res: Response) {
        if (!signInDto.email && !signInDto.username) {
            throw new BadRequestException('Email or username is required');
        }

        const { accessToken } = await this.authService.signIn(signInDto.password, signInDto.email, signInDto.username);

        res.cookie('eat_wise_access_token', accessToken, { httpOnly: true });

        return { message: 'Login successful' };
    }
}