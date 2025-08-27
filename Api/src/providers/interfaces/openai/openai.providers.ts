import { Provider } from "@Approval/config/type.config";
import { Injectable, Logger } from "@nestjs/common";
import OpenAI from "openai";
@Injectable()
export class OpenAIProvider {
    private openai: OpenAI;
    private readonly logger = new Logger(OpenAIProvider.name);
    constructor(private readonly provider: Extract<Provider, { interface: "OpenAI" }>) {
        this.openai = new OpenAI({ apiKey: this.provider?.apiKey ?? undefined, organization: this.provider?.organization?.Id, timeout: this.provider?.timeout });
    }

    getListModels() {
        return this.openai.models.list();
    }


}
