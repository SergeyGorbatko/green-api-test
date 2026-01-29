import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { SendMessageDto } from './dto/send-message.dto';

@Injectable()
export class GreenApiService {
  private readonly baseUrl: string;

  constructor(
    private readonly http: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseUrl = this.configService.getOrThrow<string>('GREEN_API_BASE_URL');
  }

  async getSettings(id: string, token: string) {
    const url = `${this.baseUrl}/waInstance${id}/getSettings/${token}`;
    const { data } = await firstValueFrom(this.http.get(url));
    return data;
  }

  async getStateInstance(id: string, token: string) {
    const url = `${this.baseUrl}/waInstance${id}/getStateInstance/${token}`;
    const { data } = await firstValueFrom(this.http.get(url));
    return data;
  }

  async sendMessage(id: string, token: string, body: SendMessageDto) {
    const url = `${this.baseUrl}/waInstance${id}/sendMessage/${token}`;
    const { data } = await firstValueFrom(this.http.post(url, body));
    return data;
  }
}
