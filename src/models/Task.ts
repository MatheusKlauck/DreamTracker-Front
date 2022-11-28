import { v4 as uuidv4 } from 'uuid';

class Task {
    Id: string;
    Description: string;
    Done: boolean;
    DoneTime: number;

    constructor(description: string) {
        this.Id = uuidv4();
        this.Description = description;
        this.Done = false;
        this.DoneTime = -1;
    }
}

export { Task }