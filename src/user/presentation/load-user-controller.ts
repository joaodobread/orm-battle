import { UserNotFoundError } from '../domain/errors';

export type User = {
  id: string;
  name: string;
  email: string;
};

export namespace LoadUser {
  export type Params = {
    id: string;
  };

  export type Result = User | UserNotFoundError;
}
