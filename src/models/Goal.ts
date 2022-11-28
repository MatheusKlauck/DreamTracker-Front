import { Task } from "./Task";
import { v4 as uuidv4 } from 'uuid';

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

export { Goal }