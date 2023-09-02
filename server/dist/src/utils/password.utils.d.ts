declare const hashPassword: (password: string) => Promise<string>;
declare const comparePassword: (userPassword: string, rawPassword: string) => Promise<boolean>;
export { hashPassword, comparePassword };
