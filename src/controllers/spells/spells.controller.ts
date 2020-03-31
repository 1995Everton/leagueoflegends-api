import { Controller } from '@nestjs/common';
import { Spells } from 'src/models';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';
import { SpellsService } from './spells.service';
import { getLocale } from 'src/utils/lang';

@Crud({
    model:{
        type: Spells
    },
    routes:{
        only: [
            "getManyBase",
            "getOneBase"
        ]
    },
    query:{
        join:{
            spells_description:{
                eager:true
            }
        },
        filter: (search: any) => {
            const { locale , ...rest } = search || {};
            return {
                $and:[
                    {
                        ...rest,
                        'spells_description.id_locale': getLocale(locale)
                    }
                ]
            };
        },
        alwaysPaginate:true,
        limit:10
    }
})
@ApiTags('Spells')
@Controller('spells')
export class SpellsController {
    constructor(public service: SpellsService){}
}
