import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { SuccessSignIn } from './interfaces/auth-interfaces';
import { Request } from 'express';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async signIn(pass: string, email?: string, username?: string): Promise<SuccessSignIn> {
        if (!email && !username) {
            throw new Error('Email or username is required');
        }

        const user = await this.usersService.findByUsernameOrEmail(username, email);

        if (!user || user.password !== pass) {
            throw new UnauthorizedException('Usuario o contraseña incorrectos.');
        }

        const payload = {
            sub: user.id,
            username: user.username
        };

        return {
            accessToken: await this.jwtService.signAsync(payload),
            user
        }
    }

    async extractPayload(request: Request): Promise<{ sub: string, username: string }> {
        const cookieName = 'eat_wise_access_token';
        const cookies = request.headers.cookie;

        const cookieList = cookies.split('; ');
        const desiredCookie = cookieList.find((cookie: string) => cookie.startsWith(`${cookieName}=`));
        const token = desiredCookie.split('=')[1]; // Extract the value of the cookie

        const decoded = this.jwtService.verify(token);
        return decoded;
    }
}
