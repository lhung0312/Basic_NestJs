import { Controller, Get, Post, Render, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private configService: ConfigService) {}

   @UseGuards(LocalAuthGuard)
  @Post('/login')
     handleLogin(@Request() req) {
    return req.user;

    }
  @Get()
  @Render('home')
  getHello() {
    // return "this.appService.getHello()";
    console.log('>>>chekc port: ', this.configService.get<string>('PORT'))
  }
}
