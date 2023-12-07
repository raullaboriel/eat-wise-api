import { User } from "src/users/schemas";

export interface SuccessSignIn {
    accessToken: string;
    user: User;
}