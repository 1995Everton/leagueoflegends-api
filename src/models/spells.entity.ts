import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Champion } from './champion.entity';
import { SpellsDescription } from './spells_description.entity';

@Entity()
export class Spells {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable:false })
    key: string;

    @Column({ default: 0 })
    maxrank: number;

    @Column({ default: '0' })
    cooldown: string;

    @Column({ default: '0' })
    cost: string;

    @Column()
    range: string;

    @Column({ default: '' })
    icon: string;

    @OneToMany(() => SpellsDescription, spells_description => spells_description.id_spells)
    spells_description: SpellsDescription[];

    @ManyToOne(() => Champion, champion => champion.spells,{ nullable: false})
    @JoinColumn({name: "id_champion"})
    id_champion: Champion

}