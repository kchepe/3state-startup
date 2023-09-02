import { Users } from '@prisma/client';
export declare enum AllowedUserType {
    broker = 0,
    owner = 1,
    agent = 2,
    developer = 3,
    brokerage = 4
}
export type IUserType = 'broker' | 'owner' | 'agent' | 'developer' | 'brokerage';
export declare class UserTypes implements Users {
    id: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    imageUrl: string;
    phoneNumber: string;
    userType: IUserType;
}
