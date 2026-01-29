import { Test, TestingModule } from '@nestjs/testing';
import { GreenApiService } from './green-api.service';

describe('GreenApiService', () => {
  let service: GreenApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GreenApiService],
    }).compile();

    service = module.get<GreenApiService>(GreenApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
