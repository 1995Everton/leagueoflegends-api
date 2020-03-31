import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Stats } from 'src/models';

@Injectable()
export class StatsService extends TypeOrmCrudService<Stats> {
    constructor(@InjectRepository(Stats) repo){
        super(repo)
    }
}
