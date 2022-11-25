class Goal {
    Title: string;
    Description: string;
    Tasks: string[];

    constructor(title: string, description: string, tasks: string[]) {
        this.Title = title;
        this.Description = description;
        this.Tasks = tasks;
    }
}

export { Goal }