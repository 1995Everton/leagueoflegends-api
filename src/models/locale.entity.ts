import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ChampionDescription } from './champion_description.entity';
import { SpellsDescription } from './spells_description.entity';
import { PassiveDescription } from './passive_description.entity';
import { SkinsDescription } from './skins_description.entity';

@Entity()
export class Locale {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable:false })
    name: string;

    @OneToMany(() => ChampionDescription, champion_description => champion_description.id_locale)
    champion_description: ChampionDescription[];

    @OneToMany(() => SpellsDescription, spells_description => spells_description.id_locale)
    spells_description: SpellsDescription[];

    @OneToMany(() => PassiveDescription, passive_description => passive_description.id_locale)
    passive_description: PassiveDescription[];

    @OneToMany(() => SkinsDescription, skins_description => skins_description.id_locale)
    skins_description: SkinsDescription[];

}