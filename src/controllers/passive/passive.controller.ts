import { Controller } from '@nestjs/common';
import { Passive } from 'src/models';
import { Crud } from '@nestjsx/crud';
import { PassiveService } from './passive.service';
import { ApiTags } from '@nestjs/swagger';
import { getLocale } from 'src/utils/lang';

@Crud({
    model:{
        type: Passive
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
            passive_description:{
                eager: true
            }    
        },
        filter: (search: any) => {
            const { locale , ...rest } = search || {};
            return {
                $and:[
                    {
                        ...rest,
                        'passive_description.id_locale': getLocale(locale)
                    }
                ]
            };
        },
        alwaysPaginate: true,
        limit: 10
    }
})
@ApiTags('Passives')
@Controller('passive')
export class PassiveController {
    constructor(public service: PassiveService){}
}
