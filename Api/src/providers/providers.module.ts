import { Module } from "@nestjs/common";
import { ProvidersService } from "./providers.service";
import { OpenAIProvider } from "./interfaces/openai/openai.providers";
import { anthropicProvider } from "./interfaces/anthropic/anthropic.provider";
import { HercaiProvider } from "./interfaces/hercai/hercai.provider";
import { config } from "@Approval/config/base.config";

@Module({
    providers: [
        ProvidersService,
        {
            provide: OpenAIProvider,
            useFactory: () => {
                return new OpenAIProvider(config.provider.interface["OpenAI"]);
            }
        },
        {
            provide: anthropicProvider,
            useFactory: () => {
                return new anthropicProvider(config.provider.interface["Anthropic"]);
            }
        },
        {
            provide: HercaiProvider,
            useFactory: () => {
                return new HercaiProvider(config.provider.interface["Hercai"]);
            }
        }
    ],
    exports: [OpenAIProvider, anthropicProvider, HercaiProvider, ProvidersService]
})
export class ProvidersModule { }