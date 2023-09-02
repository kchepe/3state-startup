export type IUserType = 'broker' | 'owner' | 'agent' | 'developer' | 'brokerage';
export declare class UserResponse {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    imageUrl: string;
    phoneNumber: string;
    userType: IUserType;
}
export declare class LoginResponse {
    token: string;
    user: UserResponse;
}
