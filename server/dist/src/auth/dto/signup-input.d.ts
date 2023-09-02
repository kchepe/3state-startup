import { IUserType } from 'src/users/users.model';
export declare class SignupInput {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    phoneNumber: string;
    imageUrl: string;
    userType: IUserType;
}
declare class UserData {
    id: string;
    email: string;
    password: string;
}
export declare class SignupResponse {
    success: boolean;
    message: string;
    data: UserData;
}
export {};
