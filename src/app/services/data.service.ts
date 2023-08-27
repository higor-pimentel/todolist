import { Injectable } from '@angular/core';
import { ITask } from '../interfaces/ITask.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public tasks: ITask[] = [
    {
      id: 0,
      title: 'Consulta médica',
      date: '2023-09-02',
      description:
        'Consulta médica, hospital:  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
      done: false,
    },
    {
      id: 1,
      title: 'Teste',
      subtitle: 'subtítulo',
      description: '',
      done: false,
      date: '2023-08-12',
    },
  ];

  public getTasks(): ITask[] {
    return this.tasks;
  }

  public getTaskById(id: number): ITask {
    return this.tasks[id];
  }

  public addTask(task: ITask): void {
    this.tasks.push({
      ...task,
      id: Math.max(...this.tasks.map((task) => task.id)) + 1,
    });
  }

  public removeTask(task: ITask): void {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  public updateTask(newTask: ITask): void {
    const index = this.tasks.findIndex((task) => task.id === newTask.id);
    this.tasks[index] = newTask;
  }
}
