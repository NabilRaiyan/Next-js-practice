/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";


@Injectable()
export class DoctorService{
    getDoctor(): object {
        return {
            Doctors: {
                doc1:"Raiyan",
                doc2:"Sultan",
                doc3:"Jhon",
                doc4:"Abraham",
                doc5:"Yousuf"
            }
        };
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


    deleteDocById(id: number): object{
        return {
            message: "Successfully deleted the doctor",
            id: id,
        }
    }

}