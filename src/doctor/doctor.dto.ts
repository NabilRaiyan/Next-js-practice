import {
  IsAlpha,
  IsNotEmpty,
  Matches,
  MinLength,
  IsString,
  MaxLength,
} from 'class-validator';

export class DoctorDto {
  @IsAlpha()
  name: string;

  @IsNotEmpty()
  @Matches(/^[A-Za-z]+@doc\.xyz/, {
    message: 'Email should contain @doc.xyz',
  })
  email: string;

  // @IsNotEmpty()
  // @IsString()
  // @MinLength(10, {
  //   message: 'Minimun length of NID number should be 15',
  // })
  // @MaxLength(17, {
  //   message: 'Maximum length of NID number should be 17',
  // })
  // nid_number: string;
}
