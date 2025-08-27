import { Config, Provider } from "@Approval/config/type.config";
import { Injectable } from "@nestjs/common";
import { Hercai } from "hercai";
@Injectable()
export class HercaiProvider {
    private hercai: Hercai;
    private Config:Config;

    constructor(private readonly provider: Extract<Provider, { interface: "Hercai" }>) {
        this.hercai = new Hercai({  apiKey:this.provider?.apiKey});
        this.Config = {provider};
    }

    async getListModels() {
        return await this.hercai.chat.models.retrieve();
    }
}