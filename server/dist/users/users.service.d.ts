import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createUser(newUser: CreateUserInput): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            email: string;
            password: string;
        };
    }>;
    removeUser(id: string): Promise<import(".prisma/client").Users>;
    findAll(): Promise<import(".prisma/client").Users[]>;
    findUserByEmail(email: string): Promise<import(".prisma/client").Users>;
    findUserById(id: string): Promise<import(".prisma/client").Users>;
}
