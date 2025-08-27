import { ProvidersService } from "@Approval/providers/providers.service";
import { Controller, Get } from "@nestjs/common";

@Controller("providers")
export class ProvidersController {

    constructor(private readonly providersService:ProvidersService){
        
    }

@Get()
getProviders() {
    return this.providersService.getProviders();
}
}