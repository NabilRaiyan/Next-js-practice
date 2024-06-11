/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Query, Post, Put, Delete, Patch, Body } from "@nestjs/common";
import { DoctorService } from "./doctor.service";



@Controller('doctor')
export class DoctorController{
    constructor(private readonly doctorService: DoctorService) {}
    @Get('home')
    getDoctor(): object{
        return this.doctorService.getDoctor();
    }

    @Get('getDocByName/:name')
    getDoctorByName(@Param('name') name: string): object{
        return this.doctorService.getDocByName(name);
    }

    @Post('addDoctor')
    addDoctor(@Body() myObj: object): object{

        return this.doctorService.addDoctor(myObj);
    }

    @Put('updateDocInfo')
    updateDocInfo(@Body() myObj: object): object{
        return this.doctorService.updateDocInfo(myObj);
    }

    @Patch('forgotPassword/:id')
    forgotPassword(@Body() password: object, @Param('id') id: number): object{
        return this.doctorService.updatePassword(password, id);
    }

    @Delete('deleteDocById')
    deleteDocById(@Query('id') id: number): object{
        return this.doctorService.deleteDocById(id);
    }
}
