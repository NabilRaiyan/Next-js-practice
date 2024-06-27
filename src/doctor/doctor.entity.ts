import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('doctor')
export class DoctorEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  gender: string;
}
