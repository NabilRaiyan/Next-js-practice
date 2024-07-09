/* eslint-disable prettier/prettier */

// import all the libraries
import { Controller, Res, Get, Param, Query, Post, Put, Delete, Patch, Body, UsePipes, ValidationPipe, UseInterceptors, UploadedFile } from "@nestjs/common";
import { DoctorService } from "./doctor.service";
import { DoctorDto } from "./doctor.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { MulterError, diskStorage } from "multer";
 

// doctor controller
@Controller('doctor')
export class DoctorController{
    constructor(private readonly doctorService: DoctorService) {}
    // default route
    @Get('home')
    getDoctor(): object{
        return this.doctorService.findAllDoctor();
    }

    // get doctor by id
    @Get('getDocById/:id')
    getDoctorByName(@Param('id') id: number): object{
        return this.doctorService.getDocById(id);
    }

    // // get doctor by name
    // @Get('getDocByName/:name')
    // getDoctorByName(@Param('name') name: string): object{
    //     return this.doctorService.getDocByName(name);
    // }

    // add new doctor
    @Post('addDoctor')
    @UsePipes(new ValidationPipe())
    addDoctor(@Body() data: DoctorDto): object{
        console.log(data);
        return this.doctorService.createDoctor(data);
    }

    // // update doctor information
    // @Put('updateDocInfo')
    // updateDocInfo(@Body() myObj: object): object{
    //     return this.doctorService.updateDocInfo(myObj);
    // }

    // upload doctor NID image
    @Post('upload')
    @UseInterceptors(FileInterceptor('file',
        { fileFilter: (req, file, cb) => {
            if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
            cb(null, true);
            else {
            cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
            }
            },
            // file size limit
            limits: { fileSize: 2097152 },
            storage:diskStorage({
            destination: './uploads',
            filename: function (req, file, cb) {
            cb(null,Date.now()+file.originalname)
            },
            })
            }))
            // upload file
            uploadFile(@UploadedFile() file: Express.Multer.File) {
            console.log(file);
        }
    
        // @Get('/getimage/:name')
        // getImages(@Param('name') name, @Res() res) {
        // res.sendFile(name,{ root: './uploads' })
        // }
   

    // // update password
    // @Patch('forgotPassword/:id')
    // forgotPassword(@Body() password: object, @Param('id') id: number): object{
    //     return this.doctorService.updatePassword(password, id);
    // }

    // // delete doctor by id
    // @Delete('deleteDocById')
    // deleteDocById(@Query('id') id: number): object{
    //     return this.doctorService.deleteDocById(id);
    // }
}
