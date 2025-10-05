import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService, iTracks } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('getTracks', () => {
    it('should return an array of tracks', () => {
      const tracks: iTracks[] = appController.getTracks();
      expect(Array.isArray(tracks)).toBe(true);
      expect(tracks.length).toBeGreaterThan(0);
      expect(tracks[0]).toHaveProperty('id');
      expect(tracks[0]).toHaveProperty('title');
      expect(tracks[0]).toHaveProperty('duration');
      expect(tracks[0]).toHaveProperty('artist');
    });
  });
});
