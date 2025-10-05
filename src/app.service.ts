import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

export interface iTracks {
  id: number;
  title: string;
  duration: string;
  artist: string;
}

@Injectable()
export class AppService {
  private tracks: iTracks[];

  constructor() {
    const filePath = path.join(process.cwd(), 'public', 'tracks.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    this.tracks = JSON.parse(data);
  }

  getTracks(): iTracks[] {
    return this.tracks;
  }
}
