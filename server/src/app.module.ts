import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GreenApiModule } from './green-api/green-api.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HttpModule,
    GreenApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
