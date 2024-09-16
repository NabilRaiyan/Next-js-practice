/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { DoctorDto } from "./doctor.dto";
import { Repository } from "server/node_modules/typeorm";
import { DoctorEntity } from "./doctor.entity";
import { InjectRepository } from "@nestjs/typeorm";

// doctor service class
@Injectable()
export class DoctorService{
    constructor(@InjectRepository(DoctorEntity) private readonly doctorRepository: Repository<DoctorEntity>){}

    // create doctor 
    async createDoctor(doctorEntity: DoctorDto): Promise<DoctorDto>{
        return this.doctorRepository.save(doctorEntity);
    }

    // find all the doctors 
    async findAllDoctor(): Promise<DoctorDto[]>{
        return this.doctorRepository.find();
    }

    // get specific doctor by id
    async getDocById(docId: number): Promise<DoctorDto>{
        return this.doctorRepository.findOneBy({id: docId});
    }

    // // get all doctor
    // getDoctor(): object {
    //     return {
    //         Doctors: {
    //             doc1:"Raiyan",
    //             doc2:"Sultan",
    //             doc3:"Jhon",
    //             doc4:"Abraham",
    //             doc5:"Yousuf"
    //         }
    //     };
    // }

    // // get doctor by name
    // getDocByName(docName: string): object{
    //     return {
    //         id: 1,
    //         name: docName,
    //         gender: "Male"
            
    //     }
    // }
    // // add new doctor
    // addDoctor(myObj: DoctorDto): object{
    //     console.log(myObj);
    //     return myObj;
    // }

    // // update doctor information method
    // updateDocInfo(myObj: object):object{
    //     console.log(myObj);
    //     return myObj;
    // }

    // // update password method
    // updatePassword(Userpassword: object, id:number): object{
    //     return {message: "Password is Updated ", id,   body:Userpassword};
    // }

    // // delete cotor by id method
    // deleteDocById(id: number): object{
    //     return {
    //         message: "Successfully deleted the doctor",
    //         id: id,
    //     }
    // }

}