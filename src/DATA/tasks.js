export class Task {
    constructor(name, description="", dueDate=null) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
    }
}

export const finishedTasks = []