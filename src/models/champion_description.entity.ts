import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Champion } from './champion.entity';
import { Locale } from './locale.entity';

@Entity({ name : 'champion_description'})
export class ChampionDescription {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable:false })
    title: string;

    @Column({ type: 'text', default : '' })
    lore: string;

    @Column({ type: 'text', default : '' })
    blurb: string;

    @Column({ type: 'text', default : ''})
    allytips: string;

    @Column({ type: 'text', default : ''})
    enemytips: string;

    @Column({ default : ''})
    partype: string;

    @ManyToOne(() => Champion, champion => champion.description,{ nullable: false})
    @JoinColumn({name: "id_champion"})
    id_champion: Champion

    @ManyToOne(() => Locale, locale => locale.champion_description,{ nullable: false})
    @JoinColumn({name: "id_locale"})
    id_locale: Locale

    

}