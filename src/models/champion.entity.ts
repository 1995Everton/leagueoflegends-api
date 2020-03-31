import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, JoinTable, ManyToMany } from 'typeorm';
import { Stats, ChampionDescription, Skins, Spells, Passive, Tags } from './';

@Entity()
export class Champion {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable:false })
    name: string;

    @Column({ nullable:false })
    key: string;

    @Column({ nullable:false })
    icon: string;

    @Column({ default: 0 })
    attack: number;

    @Column({ default: 0 })
    defense: number;

    @Column({ default: 0 })
    magic: number;

    @Column({ default: 0 })
    difficulty: number;

    @OneToMany(() => Skins, skins => skins.champion)
    skins: Skins[];

    @OneToMany(() => ChampionDescription, description => description.id_champion)
    description: ChampionDescription[];

    @OneToMany(() => Spells, spells => spells.id_champion)
    spells: Spells[];

    @OneToOne(() => Stats)
    @JoinColumn({ name: "id_stats" })
    stats: Stats;

    @OneToOne(() => Passive)
    @JoinColumn({ name: "id_passive" })
    passive: Passive;

    @ManyToMany(() => Tags)
    @JoinTable({
        name: 'champion_tags',
        joinColumns: [
            { name: 'id_champion' }
        ],
        inverseJoinColumns: [
            { name: 'id_tags' }
        ]
    })
    tags: Tags[];

}