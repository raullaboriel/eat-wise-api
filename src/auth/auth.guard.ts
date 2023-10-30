import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) { }

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();

        const cookieName = 'eat_wise_access_token';
        const cookies = request.headers.cookie;

        if (!cookies) {
            return false;
        }

        const cookieList = cookies.split('; ');
        const desiredCookie = cookieList.find((cookie: string) => cookie.startsWith(`${cookieName}=`));

        if (!desiredCookie) {
            return false;
        }

        const token = desiredCookie.split('=')[1]; // Extract the value of the cookie

        if (!token) {
            return false;
        }

        try {
            const decoded = this.jwtService.verify(token);
            request.user = decoded;
            return true;
        } catch (err) {
            return false;
        }
    }
}