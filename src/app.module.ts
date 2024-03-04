import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://hoidanit:no1theword@cluster0.qxjx2gi.mongodb.net/', {
        connectionFactory: (connection) => {
            connection.plugin(softDeletePlugin);
            return connection;
            }
      }
    ),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => ({
    //     uri: configService.get<string>('MONGO_URL'),
        
    //   }),
    //   inject: [ConfigService],
    // }),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (config: ConfigService) => ({
    //   uri: config.get<string>('MONGO_URL'),
    //   connectionFactory: (connection) => {
    //   connection.plugin(softDeletePlugin);
    //   return connection;
    //   }
    //   }),
    //   inject: [ConfigService], 
    // }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    UsersModule,
    AuthModule,
    CompaniesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
    // =>> đã global bên trong file main
  ],
})
export class AppModule {}
