import { IsAlpha, IsNotEmpty, Matches } from 'class-validator';

export class DoctorDto {
  @IsAlpha()
  name: string;

  @IsNotEmpty()
  @Matches(/^[A-Za-z]+@doc\.xyz/, {
    message: 'Email should contain @doc.xyz',
  })
  email: string;
}
