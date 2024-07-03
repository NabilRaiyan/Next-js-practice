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

  // get admin information
  getAdmin(myobj: object): object {
    return myobj;
  }

  // add admin 
  addAdmin(myobj: object): object {
    return myobj;
  }

  // update admin information
  updateAdmin(myobj: object, id: number): object {
    return { message: 'Updated admin id: ' + id, body:myobj };
  }
}
