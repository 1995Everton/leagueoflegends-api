import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { PassiveDescription } from './passive_description.entity';
import { Champion } from './champion.entity';

@Entity()
export class Passive {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ nullable:false })
    key: string;

    @Column({ default: '' })
    icon: string;

    @OneToOne(() => Champion, champion => champion.passive)
    champion: Champion;

    @OneToMany(() => PassiveDescription, passive_description => passive_description.id_passive)
    passive_description: PassiveDescription[]

}