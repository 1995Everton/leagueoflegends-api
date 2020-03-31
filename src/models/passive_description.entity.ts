import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Locale } from './locale.entity';
import { Passive } from './passive.entity';

@Entity({ name: 'passive_description' })
export class PassiveDescription {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable:false })
    name: string;

    @Column({ type: 'text', default : ''})
    description: string;

    @ManyToOne(() => Passive, passive => passive.passive_description,{ nullable: false})
    @JoinColumn({name: "id_passive"})
    id_passive: Passive

    @ManyToOne(() => Locale, locale => locale.passive_description,{ nullable: false})
    @JoinColumn({name: "id_locale"})
    id_locale: Locale


}