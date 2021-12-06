import { Injectable } from '@nestjs/common';
import { LoadUser } from '../../data/contracts/repository/load-user';
import { User } from '../../domain/entity';

@Injectable()
export class LoadUserRepository implements LoadUser {
  async load(params: LoadUser.Params): Promise<LoadUser.Result> {
    if (Number(params.id) % 2) {
      return new User('João', params.id, 'joao.fernandes@sof.to', 'hash-123');
    }

    return undefined;
  }
}
