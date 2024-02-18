import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://hoidanit:no1theword@cluster0.qxjx2gi.mongodb.net/'),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => ({
    //     uri: configService.get<string>('MONGO_URL'),
    //   }),
    //   inject: [ConfigService],
    // }),
    ConfigModule.forRoot({
    isGlobal: true,
  }),
    UsersModule,
    AuthModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}