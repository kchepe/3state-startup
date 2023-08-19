import { UsersService } from 'src/users/users.service';
import { UserTypes } from 'src/users/users.model';
import { JwtService } from '@nestjs/jwt';
import { SignupInput } from './dto/signup-input';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, rawPassword: string): Promise<any>;
    login(user: UserTypes): Promise<{
        token: string;
        user: UserTypes;
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
