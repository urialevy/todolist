export class Project{
    constructor(title) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.tasksList = []
    }
    addTask(task) {
        this.tasksList.push(task)
    }
    removeTask(task) {
        const taskIndex = this.tasksList.indexOf(task);
        if (taskIndex !== -1) {
            this.tasksList.splice(taskIndex, 11)
        }
    }
}