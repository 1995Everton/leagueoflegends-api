import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tags {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable:false })
    name: string;

}