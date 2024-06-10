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
}
