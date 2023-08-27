import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { IonItemSliding, Platform } from '@ionic/angular';
import { ITask } from '../../interfaces/ITask.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  @Input() task!: ITask;

  @ViewChild(IonItemSliding)
  ionSliding!: IonItemSliding;

  constructor(private platform: Platform, private service: DataService) {}

  isIos() {
    return this.platform.is('ios');
  }

  onChange() {
    this.task.done = !this.task?.done;
  }

  onDelete(task: ITask) {
    this.service.removeTask(task);
  }

  openSlide() {
    this.ionSliding.open('end');

    setTimeout(() => {
      this.ionSliding.close();
    }, 3000);
  }
}
