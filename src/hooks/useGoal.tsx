import { createContext, useContext, useEffect, useState } from "react";
import { Goal } from "../models/Goal";

interface GoalProviderProps {
    children: React.ReactNode;
}

interface GoalContext {
    goals: Goal[];
}

const GoalContext = createContext<GoalContext>({} as GoalContext);

export function GoalProvider(props: GoalProviderProps) {
    const [goals, setGoals] = useState<Goal[]>([]);

    useEffect(() => {
        getGoals();
    }, [])

    async function getGoals() {
        setGoals([
            new Goal("Desenvolver o dreamTracker", "Criar teste 1", ["Abrir o navegador", "Criar teste", "Executar teste"]),
            new Goal("Teste 2", "Criar teste 2", ["Abrir o navegador", "Criar teste", "Executar teste"]),
            new Goal("Teste 3", "Criar teste 3", ["Abrir o navegador", "Criar teste", "Executar teste"]),
            new Goal("Teste 4", "Criar teste 4", ["Abrir o navegador", "Criar teste", "Executar teste"])
        ]);
    }

    return (
        <GoalContext.Provider value={{ goals }}>
            {props.children}
        </GoalContext.Provider>
    )
}

export function useGoal() {
    const context = useContext(GoalContext);
    return context;
}