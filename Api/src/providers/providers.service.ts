import { Injectable } from "@nestjs/common";
import { config } from "src/config/base.config";
import { Config } from "src/config/type.config";
import { OpenAIProvider } from "./interfaces/openai/openai.providers";
import { anthropicProvider } from "./interfaces/anthropic/anthropic.provider";
import { HercaiProvider } from "./interfaces/hercai/hercai.provider";

@Injectable()
export class ProvidersService {
    Config: Config
    Providers: {interface: string, models: any[]}[] = [];
    constructor(private readonly openai: OpenAIProvider, private readonly anthropic: anthropicProvider, private readonly hercai: HercaiProvider) {
        this.Config = config;
        this.initProviders();
    }

    async initProviders() {
        try {
        this.openai.getListModels().then(res => {
            this.Providers.push({interface:"OpenAI", models:res.data});
        })
        this.anthropic.getListModels().then(res => {
            this.Providers.push({interface:"Anthropic", models:res.data});
        })
        this.hercai.getListModels().then(res => {
            this.Providers.push({interface:"Hercai", models:res});
        })
        } catch (error) {
            
        }
    }

    getProviders(){
        return this.Providers;
    }

}