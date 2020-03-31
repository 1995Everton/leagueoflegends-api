import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Champion } from 'src/models';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ChampionService extends TypeOrmCrudService<Champion> {
    constructor(@InjectRepository(Champion) repo){
        super(repo)
    }
}
