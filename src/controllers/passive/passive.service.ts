import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Passive } from 'src/models';

@Injectable()
export class PassiveService extends TypeOrmCrudService<Passive> {
    constructor(@InjectRepository(Passive) repo){
        super(repo)
    }
}
