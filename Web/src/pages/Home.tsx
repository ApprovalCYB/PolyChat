import { useState } from "react";
import {Bot, BrainCircuit, Cpu} from "lucide-react"
import "../styles/App.css";

function Home () {
    const [ providers, setProviders ] = useState( [
        { name: "Hercai", icon: Cpu, models: [ "GPT-5", "Sonnet 4", "Gemini 2.5 Pro" ] },
        { name: "OpenAI", icon: Bot, models: [ "GPT-5", "GPT-4o", "GPT-3.5" ] },
        { name: "Claude", icon: BrainCircuit, models: [ "3.5 Sonnet", "Sonnet 4" ] },
    ] )
    const [ logs, setLogs ] = useState( [
        "[OpenAI] GPT-4o response streamed...",
        "[Gemini] Session started...",
        "[Claude] Model loaded...",
    ] );

    return (
        <h1>ana sayfa</h1>

    )
}
export default Home