import { useEffect, useState } from "react";
import { Bot, BrainCircuit, Cpu } from "lucide-react"
import { Container, Grid } from "@mui/material";
import "../../styles/App.css";
import "./Home.css"

function Home() {
    const [providers, setProviders] = useState([
        { name: "Hercai", icon: Cpu, models: ["GPT-5", "Claude Sonnet 4", "Gemini 2.5 Pro"] },
        { name: "OpenAI", icon: Bot, models: ["GPT-5", "GPT-4o", "GPT-3.5"] },
        { name: "Claude", icon: BrainCircuit, models: ["3.5 Sonnet", "Sonnet 4", "Sonnet 3 Thinking"] },
    ])

    const getModelDate = (model: any) => {
        if (typeof model === 'object') {
            if (model.created_at) {
                return new Date(model.created_at);
            }
            if (model.created) {
                return new Date(model.created * 1000);
            }
        }
        return null;
    };

    const cleanModelName = (modelName: string) => {
        return modelName.replace(/-\d{8}$/, '');
    };

    const sortModels = (models: any[]) => {
        return models.sort((a: any, b: any) => {
            const dateA = getModelDate(a);
            const dateB = getModelDate(b);

            if (dateA && dateB) {
                return dateB.getTime() - dateA.getTime();
            }

            if (dateA && !dateB) return -1;
            if (!dateA && dateB) return 1;

            const nameA = a.id || a.name || a;
            const nameB = b.id || b.name || b;
            return nameA.length - nameB.length;
        });
    };

    useEffect(() => {
        const getProviders = async () => {
            try {
                const fetchProviders = await fetch("http://localhost:3001/providers");
                const data = await fetchProviders.json();
                setProviders(data.map((d: any) => ({
                    name: d.interface,
                    icon: d.interface === "OpenAI" ? Bot : d.interface === "Anthropic" ? BrainCircuit : Cpu,
                    models: sortModels(d.models).map((m: any) => cleanModelName(m.id || m.name || m))
                })));
            } catch (error) {
                setProviders([
                    { name: "Hercai", icon: Cpu, models: ["GPT-5", "Claude Sonnet 4", "Gemini 2.5 Pro"] },
                    { name: "OpenAI", icon: Bot, models: ["GPT-5", "GPT-4o", "GPT-3.5"] },
                    { name: "Claude", icon: BrainCircuit, models: ["3.5 Sonnet", "Sonnet 4", "Sonnet 3 Thinking"] },
                ])
            }
        }
        getProviders();
    }, [])

    return (
        <Container maxWidth="lg" className="home-container"
            sx={{
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 1, sm: 2, md: 3 },
                minHeight: "80vh",
            }}>

            <h1>Poly Chat</h1>
            <h3>Chat with multiple AI models instantly and seamlessly!</h3>
            <Grid container spacing={2} sx={{ mt: 2 }} className="home-container-grid">
                {providers.map((provider, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                        <div className="provider-card">
                            <provider.icon size={48} />
                            <h2>{provider.name}</h2>
                            <h4>Models:</h4>
                            <ul>
                                {provider.models.map((model, idx) => (
                                    <li key={idx} className="text-ellipsis">{model}</li>
                                )).slice(0, 3)}
                            </ul>
                            <div className="provider-card-footer">
                                +{(provider.models.length - 3)} more models
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
            <div className="container-footer">
                <span>{providers.length} providers</span>
            </div>
        </Container>
    )
}
export default Home