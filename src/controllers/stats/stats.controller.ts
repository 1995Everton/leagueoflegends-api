import { Controller } from '@nestjs/common';
import { Stats } from 'src/models';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from '@nestjsx/crud';
import { StatsService } from './stats.service';

@Crud({
    model:{
        type: Stats
    },
    routes:{
        only: [
            "getManyBase",
            "getOneBase"
        ]
    },
    query:{
        join:{
            champion:{
                allow:["id","name","icon"],
                eager:true
            }
        },
        alwaysPaginate:true,
        limit:10
    }
})
@ApiTags('Stats')
@Controller('stats')
export class StatsController {
    constructor(public service: StatsService){}
}
