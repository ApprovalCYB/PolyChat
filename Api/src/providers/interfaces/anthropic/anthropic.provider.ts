import { Injectable, Logger } from "@nestjs/common";
import Anthropic from "@anthropic-ai/sdk";
import { Config, Provider } from "@Approval/config/type.config";
@Injectable()
export class anthropicProvider {
    private readonly logger = new Logger(anthropicProvider.name);
    private claude: Anthropic;
    private Config: Config

    constructor(private readonly provider : Extract<Provider, { interface: "Anthropic" }>) {
        this.claude = new Anthropic({ apiKey:this.provider?.apiKey, authToken: this.provider?.authToken,timeout:this.provider?.timeout });
        this.Config = {provider};
    }

    getListModels(){
        return this.claude.models.list();
    }

}