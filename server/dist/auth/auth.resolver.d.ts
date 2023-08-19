import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/login.input';
import { SignupInput } from './dto/signup-input';
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    login(_: LoginUserInput, context: any): Promise<{
        token: string;
        user: import("../users/users.model").UserTypes;
    }>;
    signup(newUser: SignupInput): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            email: string;
            password: string;
        };
    }>;
}
