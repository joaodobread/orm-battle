import { Module } from '@nestjs/common';
import { LoadUserRepository } from './infra/repository';
import { UserController } from './user-controller';
import { UserService } from './user-service';

@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers: [LoadUserRepository, UserService],
})
export class UserModule {}
