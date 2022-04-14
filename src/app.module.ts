import { Module } from '@nestjs/common';
import { VoteService } from './service/vote.service';
import { VoteController } from './controller/vote.controller';
import { VoteDbObject } from './provider-dbo/vote.db.object';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, VoteController],
  providers: [VoteService, VoteDbObject],
})
export class AppModule {}
