import { createContext, useContext, useEffect, useState } from "react";
import { Goal } from "../models/Goal";
import { faker } from '@faker-js/faker';
import { Task } from "../models/Task";

interface GoalProviderProps {
    children: React.ReactNode;
}

interface GoalContext {
    goals: Goal[];
    addGoal: (goal: Goal) => void;
}

const GoalContext = createContext<GoalContext>({} as GoalContext);

export function GoalProvider(props: GoalProviderProps) {
    const [goals, setGoals] = useState<Goal[]>([]);

    useEffect(() => {
        getGoals();
    }, [])

    const createFakeGoal = (): Goal => {
        return new Goal(faker.lorem.lines(1), faker.lorem.lines(2), new Array(5).fill(undefined).map(() => new Task(faker.lorem.lines(1))))
    }

    const createFakeGoals = (num = 1) => {
        return new Array(num).fill(undefined).map(createFakeGoal);
    }

    async function getGoals() {
        let fakeGoals = createFakeGoals(6);
        setGoals(fakeGoals);
    }

    async function addGoal(goal: Goal) {
        const newGoal = new Goal(goal.Title, goal.Description, []);
        const updatedGoals = [newGoal, ...goals]
        setGoals(updatedGoals);
        console.log(goals);
    }

    return (
        <GoalContext.Provider value={{ goals, addGoal }}>
            {props.children}
        </GoalContext.Provider>
    )
}

export function useGoal() {
    const context = useContext(GoalContext);
    return context;
}