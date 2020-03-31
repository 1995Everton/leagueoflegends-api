import { Module } from '@nestjs/common';
import { ChampionController } from './champion/champion.controller';
import { TagsService } from './tags/tags.service';
import { TagsController } from './tags/tags.controller';
import { StatsService } from './stats/stats.service';
import { StatsController } from './stats/stats.controller';
import { SkinsService } from './skins/skins.service';
import { SkinsController } from './skins/skins.controller';
import { PassiveService } from './passive/passive.service';
import { PassiveController } from './passive/passive.controller';
import { ChampionService } from './champion/champion.service';
import { SpellsService } from './spells/spells.service';
import { SpellsController } from './spells/spells.controller';
import { LocaleController } from './locale/locale.controller';
import { LocaleService } from './locale/locale.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
    Champion, 
    Locale, 
    Passive,
    Skins,
    Spells,
    Stats,
    Tags 
} from 'src/models';


@Module({
    imports: [
        TypeOrmModule.forFeature([
            Champion,
            Locale,
            Passive,
            Skins,
            Spells,
            Stats,
            Tags 
        ])
    ],
    controllers: [
        ChampionController,
        TagsController, 
        StatsController, 
        SkinsController, 
        PassiveController, 
        SpellsController,
        LocaleController 
    ],
    providers: [
        ChampionService, 
        TagsService, 
        StatsService, 
        SkinsService, 
        PassiveService, 
        SpellsService, 
        LocaleService
    ],
})
export class ControllersModule {}
