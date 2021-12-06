import { Controller, Get, Param } from '@nestjs/common';
import { UserNotFoundError } from './domain/errors';
import { LoadUser } from './presentation/load-user-controller';
import { UserService } from './user-service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async load(@Param('id') id: string): Promise<LoadUser.Result> {
    const user = await this.userService.load({ id });
    if (user instanceof UserNotFoundError) throw user;
    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }
}
