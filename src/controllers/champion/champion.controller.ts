import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Champion } from 'src/models';
import { ChampionService } from './champion.service';
import { ApiTags } from '@nestjs/swagger';
import { getLocale } from 'src/utils/lang';

@Crud({
    model:{
        type: Champion
    },
    routes:{
        only: [
            "getManyBase",
            "getOneBase"
        ]
    },
    query:{
        join:{
            description:{
                eager: true,
            },
            passive:{
                eager: true,
            },
            'passive.passive_description':{
                eager: true
            },
            stats:{
                eager: true
            },
            tags:{
                eager: true
            }
        },
        filter: (search: any) => {
            const { locale , ...rest } = search || {};
            return {
                $and:[
                    {
                        ...rest,
                        'description.id_locale': getLocale(locale),
                        'passive_description.id_locale': getLocale(locale)
                    }
                ]
            };
        },
        alwaysPaginate: true,
        limit: 10
    }
})
@ApiTags('Champions')
@Controller('champion')
export class ChampionController {
    constructor(public service: ChampionService){}
}
