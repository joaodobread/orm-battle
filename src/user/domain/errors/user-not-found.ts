import { NotFoundException } from '@nestjs/common';

export class UserNotFoundError extends NotFoundException {
  constructor(message = 'exception:USER_NOT_FOUND') {
    super(message);
    this.message = message;
    this.name = 'UserNotFoundError';
  }
}
