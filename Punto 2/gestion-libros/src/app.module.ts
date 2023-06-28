import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibrosModule } from './libros/libros.module';
import { AutorModule } from './autor/autor.module';

@Module({
  imports: [LibrosModule, AutorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
