/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

// creating admin service 
@Injectable()
export class AdminService {
  getadmin(): object {
    return { Message: 'Hello from Admin' };
  }

  //  get admin by name
  getAdminByName(adminName: string): object {
    return { greeting: 'Hello ' + adminName };
  }

  // 
  getAdmin(myobj: object): object {
    return myobj;
  }

  addAdmin(myobj: object): object {
    return myobj;
  }

  updateAdmin(myobj: object, id: number): object {
    return { message: 'Updated admin id: ' + id, body:myobj };
  }
}
