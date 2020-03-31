import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Locale } from './locale.entity';
import { Skins } from './skins.entity';

@Entity({ name: 'skins_description' })
export class SkinsDescription {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable:false })
    name: string;

    @ManyToOne(() => Skins, skins => skins.skins_description,{ nullable: false})
    @JoinColumn({name: "id_skins"})
    id_skins: Skins

    @ManyToOne(() => Locale, locale => locale.skins_description,{ nullable: false})
    @JoinColumn({name: "id_locale"})
    id_locale: Locale


}