/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/add')
  getAdd(): number {
    return this.appService.getAddition();
  }

  @Get('/user')
  getUser(): object {
    return this.appService.getUser();
  }

  // getting user by id
  @Get('/getById/:id')
  getUserById(@Param('id') id: number): object {
    return this.appService.getSpecificUser(id);
  }

  // get user by name
  @Get('/getUserByName/:name')
  getUserByName(@Param('name') name: string): object {
    return this.appService.getUserByName(name);
  }

  
  // get user by name and id using Query
  @Get('getByNameId')
  getUserByNameId(@Query('id') id: number, @Query('name') name: string): object{
    return this.appService.getByNameId(id, name);
  }
}
