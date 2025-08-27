export type Provider = {
    interface: "OpenAI";
    apiKey?: string;
    timeout: number;
    organization: {
            Id: string;
            name:string       
    }
} | {
    interface: "Anthropic";
    apiKey?: string;
    authToken: string;
    timeout: number;
    organizationId: string;

} | {
    interface:"Hercai",
    apiKey?:string
}

export type Config = {
    provider: Provider;
}