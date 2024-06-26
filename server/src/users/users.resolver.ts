import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserTypes } from './users.model';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver(() => UserTypes)
@UseGuards(JwtAuthGuard)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [UserTypes])
  async users() {
    return this.usersService.findAll();
  }

  @Query(() => UserTypes)
  async currentUser(@Context() context) {
    return this.usersService.findUserById(context.req.user.id);
  }

  @Mutation(() => UserTypes)
  async removeUser(@Args('id') id: string) {
    return this.usersService.removeUser(id);
  }

  // @Mutation('updateUser')
  // update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
  //   return this.usersService.update(updateUserInput.id, updateUserInput);
  // }
}
