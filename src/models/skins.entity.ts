import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Champion } from './champion.entity';
import { SkinsDescription } from './skins_description.entity';

@Entity()
export class Skins {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable:false })
    key: string;

    @Column({ nullable:false })
    num: number;

    @Column({ nullable:false })
    loading: string;

    @Column({ nullable:false })
    splash: string;

    @Column({ default: false })
    chromas: boolean;

    @OneToMany(() => SkinsDescription, skins_description => skins_description.id_skins)
    skins_description: SkinsDescription[];

    @ManyToOne(() => Champion, champion => champion.skins,{ nullable: false})
    @JoinColumn({name: "id_champion"})
    champion: Champion


}