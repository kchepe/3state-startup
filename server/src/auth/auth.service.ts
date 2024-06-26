/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { comparePassword } from 'src/utils/password.utils';
import { UserTypes } from 'src/users/users.model';
import { JwtService } from '@nestjs/jwt';
import { SignupInput } from './dto/signup-input';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  public async validateUser(email: string, rawPassword: string): Promise<any> {
    const user = await this.usersService.findUserByEmail(email);
    const isMatch = user
      ? await comparePassword(user.password, rawPassword)
      : false;
    if (user && isMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  public async login(user: UserTypes) {
    const payload = { email: user.email, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
      user,
    };
  }

  public async signup(newUser: SignupInput) {
    return this.usersService.createUser(newUser);
  }
}
