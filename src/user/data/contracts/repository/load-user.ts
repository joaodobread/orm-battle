import { User } from '../../../domain/entity';

export interface LoadUser {
  load: (params: LoadUser.Params) => Promise<LoadUser.Result>;
}

export namespace LoadUser {
  export type Params = {
    id: string;
  };

  export type Result = User | undefined;
}
