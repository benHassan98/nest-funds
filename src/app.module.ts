import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { SongsController } from './songs/songs.controller';
import { LoggerMiddleware } from './common/middleware/logger/logger.module';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './songs/entity/song.entity';
import { SongsService } from './songs/songs.service';

@Module({
  imports: [SongsModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'postgres',
    entities: [Song],
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  
  constructor(private readonly dataSource:DataSource){
    if(this.dataSource.driver.database){
      console.log(`Connected to ${this.dataSource.driver.database} successfully`);
    }else{
      console.error(`Connection Error`);
    }

  }
  
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .forRoutes(SongsController);
  }



}
