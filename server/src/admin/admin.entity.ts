import { Entity, Column, PrimaryGeneratedColumn } from 'server/node_modules/typeorm';

@Entity('admin')
// exporting admin entity schema
export class AdminEntity {
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
