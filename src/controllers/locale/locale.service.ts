import { Injectable } from '@nestjs/common';
import { Locale } from 'src/models';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class LocaleService extends TypeOrmCrudService<Locale> {
    constructor(@InjectRepository(Locale) repo){
        super(repo)
    }
}
