import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  getAdmin(): object {
    return { Message: 'Hello from Admin' };
  }

  getAdminByName(adminName: string): object {
    return { greeting: 'Hello ' + adminName };
  }
}
