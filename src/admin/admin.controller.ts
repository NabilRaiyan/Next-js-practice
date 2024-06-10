import { Controller, Get, Param } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('/admin')
  getAdmin(): object {
    return this.adminService.getAdmin();
  }

  @Get('/adminByName/:name')
  getAdminByName(@Param('name') name: string) {
    return this.adminService.getAdminByName(name);
  }
}
