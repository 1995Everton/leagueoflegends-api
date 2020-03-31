import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Tags } from 'src/models';
import { Crud } from '@nestjsx/crud';
import { TagsService } from './tags.service';

@Crud({
    model:{
        type: Tags
    },
    routes:{
        only: [
            "getManyBase",
            "getOneBase"
        ]
    },
    query:{
        alwaysPaginate:true,
        limit:10
    }
})
@ApiTags('Tags')
@Controller('tags')
export class TagsController {
    constructor(public service: TagsService){}
}
