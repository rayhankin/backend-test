import { Body, Controller, Get, Param, Post, Query, UseInterceptors  } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer/interceptors/file.interceptor';
import { AppService } from './app.service';
import { UsersDTO } from './users/users.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 1
  @Post('formdata')
  @UseInterceptors(FileInterceptor(''))
  formdata(@Body() body: UsersDTO) {
    return body;
  }

  @Get('findByFilter')
  findByFilter(@Query('userId') userId) {
    return userId;
  }

  // 2
  @Get('/count/:str')
  count(@Param('str') str){
      return this.appService.countString(str);
  }

}
