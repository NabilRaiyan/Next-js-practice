/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAddition(): number {
    return 3 + 5;
  }

  getUser(): object {
    return {
      name: 'Raiyan Al Sultan',
      age: 24,
      gender: 'Male',
    };
  }

  // get sepcific user using param
  getSpecificUser(userId: number): object {
    return {
        id: userId,
        name: 'Raiyan Al Sultan',
        age: 24,
        gender: 'Male',
    };
  }

  // get user by name using param
  getUserByName(userName : string): object {
    return {
      id: 2,
      name: userName,
      gender: 'Male',
      age: '24'
    };
  }

  // get user by name and id
  getByNameId( userId: number, userName : string): object{
    return {
      id: userId,
      name: userName,
      gender: 'Male'
    };
  }

}
