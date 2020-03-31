import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Champion } from './champion.entity';

@Entity()
export class Stats {

    @PrimaryGeneratedColumn()
    id: number ;

    @Column({ nullable:false })
    key: string;

    @Column("decimal", { precision: 5, scale: 2, default: 0 })
    hp: number;

    @Column("decimal", { precision: 5, scale: 2, default: 0 })
    hpperlevel: number;

    @Column("decimal", { precision: 5, scale: 2, default: 0 })
    mp: number;

    @Column("decimal", { precision: 5, scale: 2, default: 0 })
    mpperlevel: number;

    @Column("decimal", { precision: 5, scale: 2, default: 0 })
    movespeed : number;

    @Column("decimal", { precision: 5, scale: 2, default: 0 })
    armor: number;

    @Column("decimal", { precision: 5, scale: 2, default: 0 })
    armorperlevel: number;

    @Column("decimal", { precision: 5, scale: 2, default: 0 })
    spellblock: number;

    @Column("decimal", { precision: 5, scale: 2, default: 0 })
    spellblockperlevel: number;

    @Column("decimal", { precision: 5, scale: 2, default: 0 })
    attackrange: number;

    @Column("decimal", { precision: 5, scale: 2, default: 0 })
    hpregen: number;

    @Column("decimal", { precision: 5, scale: 2, default: 0 })
    hpregenperlevel: number;

    @Column("decimal", { precision: 5, scale: 2, default: 0 })
    mpregen: number;

    @Column("decimal", { precision: 5, scale: 2, default: 0 })
    mpregenperlevel: number;

    @Column("decimal", { precision: 5, scale: 2, default: 0 })
    crit: number;

    @Column("decimal", { precision: 5, scale: 2, default: 0 })
    critperlevel: number;

    @Column("decimal", { precision: 5, scale: 2, default: 0 })
    attackdamage: number;

    @Column("decimal", { precision: 5, scale: 2, default: 0 })
    attackdamageperlevel: number;

    @Column("decimal", { precision: 5, scale: 2, default: 0 })
    attackspeedperlevel: number;

    @Column("decimal", { precision: 5, scale: 2, default: 0 })
    attackspeed: number;

    @OneToOne(() => Champion, champion => champion.stats)
    champion: Champion;

}