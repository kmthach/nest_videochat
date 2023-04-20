import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoChatGateway } from './videochat.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, VideoChatGateway],
})
export class AppModule {}
