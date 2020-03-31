import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Skins } from 'src/models';

@Injectable()
export class SkinsService extends TypeOrmCrudService<Skins> {
    constructor(@InjectRepository(Skins) repo){
        super(repo)
    }
}