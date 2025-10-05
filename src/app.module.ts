import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'data'), // carpeta donde está tracks.json
      serveRoot: '/data',                     // ruta para abrir archivo directo
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

