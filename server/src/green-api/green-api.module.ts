import { Module } from '@nestjs/common';
import { GreenApiController } from './green-api.controller';
import { GreenApiService } from './green-api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [GreenApiController],
  providers: [GreenApiService],
})
export class GreenApiModule {}
