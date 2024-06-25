import { IsString, IsEmail, IsAlpha } from 'class-validator';

export class DoctorDto {
  @IsAlpha()
  name: string;

  @IsEmail()
  email: string;
}
