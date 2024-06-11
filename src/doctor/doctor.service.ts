/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";


@Injectable()
export class DoctorService{
    getDoctor(): object {
        return {Message: 'Hello my name is Doctor Raiyan'};
    }

    getDocByName(docName: string): object{
        return {
            id: 1,
            name: docName,
            gender: "Male"
            
        }
    }

    addDoctor(myObj: object): object{
        console.log(myObj);
        return myObj;
    }

    updateDocInfo(myObj: object):object{
        console.log(myObj);
        return myObj;
    }

    updatePassword(Userpassword: object, id:number): object{
        return {message: "Password is Updated ", id,   body:Userpassword};
    }

    
}