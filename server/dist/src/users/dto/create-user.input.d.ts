import { IUserType } from '../users.model';
export declare class CreateUserInput {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    phoneNumber: string;
    imageUrl: string;
    userType: IUserType;
}
