import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { BearerTokenGuard } from 'src/common/guards/bearer-token.guard';
import type { RequestWithToken } from 'src/common/types/request-with-token';
import { GreenApiService } from './green-api.service';
import { SendMessageDto } from './dto/send-message.dto';

@Controller('green-api')
export class GreenApiController {
  constructor(private readonly service: GreenApiService) {}

  @UseGuards(BearerTokenGuard)
  @Get('getSettings')
  getSettings(@Query('id') id: string, @Req() req: RequestWithToken) {
    return this.service.getSettings(id, req.token);
  }

  @UseGuards(BearerTokenGuard)
  @Get('getStateInstance')
  getStateInstance(@Query('id') id: string, @Req() req: RequestWithToken) {
    return this.service.getStateInstance(id, req.token);
  }

  @UseGuards(BearerTokenGuard)
  @Post('sendMessage')
  sendMessage(
    @Query('id') id: string,
    @Body() body: SendMessageDto,
    @Req() req: RequestWithToken,
  ) {
    return this.service.sendMessage(id, req.token, body);
  }
}
