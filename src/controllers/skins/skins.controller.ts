import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Skins } from 'src/models';
import { ApiTags } from '@nestjs/swagger';
import { SkinsService } from './skins.service';
import { getLocale } from 'src/utils/lang';

@Crud({
    model:{
        type: Skins
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
            },
            skins_description:{
                eager:true
            }
        },
        filter: (search: any) => {
            const { locale , ...rest } = search || {};
            return {
                $and:[
                    {
                        ...rest,
                        'skins_description.id_locale': getLocale(locale)
                    }
                ]
            };
        },
        alwaysPaginate:true,
        limit:10
    }
})
@ApiTags('Skins')
@Controller('skins')
export class SkinsController {
    constructor(public service: SkinsService){}
}
