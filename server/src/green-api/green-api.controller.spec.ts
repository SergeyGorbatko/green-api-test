import { Test, TestingModule } from '@nestjs/testing';
import { GreenApiController } from './green-api.controller';

describe('GreenApiController', () => {
  let controller: GreenApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GreenApiController],
    }).compile();

    controller = module.get<GreenApiController>(GreenApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
