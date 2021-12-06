import { Injectable } from '@nestjs/common';
import { LoadUserService } from './domain/use-case';
import { UserNotFoundError } from './domain/errors';
import { LoadUserRepository } from './infra/repository';

@Injectable()
export class UserService implements LoadUserService {
  constructor(private readonly repository: LoadUserRepository) {}

  async load(params: LoadUserService.Params): Promise<LoadUserService.Result> {
    const user = await this.repository.load(params);
    if (!user) return new UserNotFoundError();
    return user;
  }
}
