import { useEffect, useState } from "react";
import { Bot, BrainCircuit, Cpu } from "lucide-react"
import { Container, Grid } from "@mui/material";
import "../../styles/App.css";
import "./Home.css"

function Home () {
    const [ providers, setProviders ] = useState( [
        { name: "Hercai", icon: Cpu, models: [ "GPT-5", "Claude Sonnet 4", "Gemini 2.5 Pro" ] },
        { name: "OpenAI", icon: Bot, models: [ "GPT-5", "GPT-4o", "GPT-3.5" ] },
        { name: "Claude", icon: BrainCircuit, models: [ "3.5 Sonnet", "Sonnet 4", "Sonnet 3 Thinking" ] },
    ] )
    useEffect( () => {
        setProviders( providers.map( provider => ( {
            ...provider,
            models: provider.models.sort( ( a, b ) => a.length - b.length ).slice( 0, 3 )
        } ) ) )
    }, [providers] )
    return (
        <Container maxWidth="lg" className="home-container"
            sx={ {
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 1, sm: 2, md: 3 },
                minHeight: "80vh",
            } }>

            <h1>Poly Chat</h1>
            <h3>Chat with multiple AI models instantly and seamlessly!</h3>
            <Grid container spacing={ 2 } sx={ { mt: 2 } } className="home-container-grid">
                { providers.map( ( provider, index ) => (
                    <Grid size={ { xs: 12, sm: 6, md: 4 } } key={ index }>
                        <div className="provider-card">
                            <provider.icon size={ 48 } />
                            <h2>{ provider.name }</h2>
                            <h4>Models:</h4>
                            <ul>
                                { provider.models.map( ( model, idx ) => (
                                    <li key={ idx }>{ model }</li>
                                ) ) }
                            </ul>
                            <div className="provider-card-footer">
                                +17 more models
                            </div>
                        </div>
                    </Grid>
                ) ) }
            </Grid>
            <div className="container-footer">
                <span>+24 more providers</span>
            </div>
        </Container>
    )
}
export default Home