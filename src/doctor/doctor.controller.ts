/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Query, Post, Put, Delete, Patch, Body, UsePipes, ValidationPipe, UseInterceptors, UploadedFile } from "@nestjs/common";
import { DoctorService } from "./doctor.service";
import { DoctorDto } from "./doctor.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { MulterError, diskStorage } from "multer";
 


@Controller('doctor')
export class DoctorController{
    constructor(private readonly doctorService: DoctorService) {}
    // default route
    @Get('home')
    getDoctor(): object{
        return this.doctorService.getDoctor();
    }

    // get doctor by name
    @Get('getDocByName/:name')
    getDoctorByName(@Param('name') name: string): object{
        return this.doctorService.getDocByName(name);
    }

    // add new doctor
    @Post('addDoctor')
    @UsePipes(new ValidationPipe())
    addDoctor(@Body() data: DoctorDto): object{
        console.log(data);
        return this.doctorService.addDoctor(data);
    }

    // update doctor information
    @Put('updateDocInfo')
    updateDocInfo(@Body() myObj: object): object{
        return this.doctorService.updateDocInfo(myObj);
    }

    // update password
    @Patch('forgotPassword/:id')
    forgotPassword(@Body() password: object, @Param('id') id: number): object{
        return this.doctorService.updatePassword(password, id);
    }

    // delete doctor by id
    @Delete('deleteDocById')
    deleteDocById(@Query('id') id: number): object{
        return this.doctorService.deleteDocById(id);
    }
}
