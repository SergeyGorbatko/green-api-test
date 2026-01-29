import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class SendFileByUrlDto {
  @IsString()
  @IsNotEmpty()
  chatId: string;

  @IsUrl()
  @IsNotEmpty()
  urlFile: string;
}
