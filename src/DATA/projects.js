export class Project {
  constructor(title, description = "", dueDate = null) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.tasksList = [];
  }
  addTask(task) {
    this.tasksList.push(task);
  }
  removeTask(task) {
    const taskIndex = this.tasksList.indexOf(task);
    if (taskIndex !== -1) {
      this.tasksList.splice(taskIndex, 11);
    }
  }
}

export const placeHolder = () => {
  const projOne = new Project("Project 1", "Description", "12.31.2023");
  projOne.addTask("task 1 for proj 1");
  projOne.addTask("task 2 for proj 1");
  const projTwo = new Project("Project 2", "Some description", "");
  projTwo.addTask("Task 1 for proj 2");
  let projectArr = [];
  projectArr.push(projOne);
  projectArr.push(projTwo);
  return projectArr;
};
placeHolder();
