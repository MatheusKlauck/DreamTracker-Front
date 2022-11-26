import { createContext, useContext, useEffect, useState } from "react";
import { Goal } from "../models/Goal";
import { faker } from '@faker-js/faker';

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
        let fakeGoals = new Array<Goal>(15).fill(new Goal(faker.lorem.lines(1), faker.lorem.lines(2), new
            Array<string>(3).fill(faker.lorem.lines(1))));
        setGoals(fakeGoals);
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