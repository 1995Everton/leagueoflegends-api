import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Locale } from 'src/models';
import { LocaleService } from './locale.service';
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model:{
        type: Locale
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
@ApiTags('Locales')
@Controller('locale')
export class LocaleController {
    constructor(public service: LocaleService){}
}
