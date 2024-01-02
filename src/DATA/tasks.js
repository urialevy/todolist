export class Task {
  constructor(name) {
    this.name = name;
    this.id = crypto.randomUUID();
  }
}

export const finishedTasks = [];
