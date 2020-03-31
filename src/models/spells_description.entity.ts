import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Spells } from './spells.entity';
import { Locale } from './locale.entity';

@Entity({ name: 'spells_description'})
export class SpellsDescription {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable:false })
    name: string;

    @Column({ type: 'text', default : ''})
    description: string;

    @Column({ type: 'text', default : ''})
    tooltip: string;

    @ManyToOne(() => Spells, spells => spells.spells_description,{ nullable: false})
    @JoinColumn({name: "id_spells"})
    id_spells: Spells

    @ManyToOne(() => Locale, locale => locale.spells_description,{ nullable: false})
    @JoinColumn({name: "id_locale"})
    id_locale: Locale


}