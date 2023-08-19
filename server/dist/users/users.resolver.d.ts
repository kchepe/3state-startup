import { UsersService } from './users.service';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    users(): Promise<import(".prisma/client").Users[]>;
    currentUser(context: any): Promise<import(".prisma/client").Users>;
    removeUser(id: string): Promise<import(".prisma/client").Users>;
}
