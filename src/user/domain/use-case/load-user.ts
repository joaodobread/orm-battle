import { User } from '../entity';
import { UserNotFoundError } from '../errors';

export interface LoadUserService {
  load: (params: LoadUserService.Params) => Promise<LoadUserService.Result>;
}

export namespace LoadUserService {
  export type Params = {
    id: string;
  };

  export type Result = User | UserNotFoundError;
}
