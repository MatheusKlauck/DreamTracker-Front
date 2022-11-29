import { Task } from "./Task";
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';

class Goal {
    Id: string;
    Title: string;
    Description: string;
    Tasks: Task[];

    constructor(title: string, description: string, tasks: Task[]) {
        this.Id = uuidv4();
        this.Title = title;
        this.Description = description;
        this.Tasks = tasks;
    }
}

const goalValidationSchema = yup.object().shape({
    Title: yup.string().required().max(32).min(3),
    Description: yup.string().max(64)
}).required();

export { Goal, goalValidationSchema }