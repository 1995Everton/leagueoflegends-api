import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Tags } from 'src/models';

@Injectable()
export class TagsService extends TypeOrmCrudService<Tags> {
    constructor(@InjectRepository(Tags) repo){
        super(repo)
    }
}
