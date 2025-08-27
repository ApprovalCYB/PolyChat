import { Config } from "./type.config";

export const config: Config = {
    provider: {
        interface: "OpenAI",
        apiKey: process.env.OPENAI_API_KEY as string,
        timeout: 5000,
        organization: {
            Id: process.env.OPENAI_ORGANIZATION_ID as string,
            name: process.env.OPENAI_ORGANIZATION_NAME as string
        }
    }
}