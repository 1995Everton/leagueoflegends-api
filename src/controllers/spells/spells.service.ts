import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Spells } from 'src/models';

@Injectable()
export class SpellsService extends TypeOrmCrudService<Spells> {
    constructor(@InjectRepository(Spells) repo){
        super(repo)
    }
}
