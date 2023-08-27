import { AfterViewInit, Component } from '@angular/core';
import { RefresherCustomEvent, ToastController } from '@ionic/angular';

import { DataService } from '../../services/data.service';
import { ITask } from '../../interfaces/ITask.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  private alert = new Array();

  constructor(
    private service: DataService,
    private toastController: ToastController
  ) {}

  ngAfterViewInit(): void {
    this.verifyTasks();
  }

  refresh(ev: any) {
    this.verifyTasks();
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  verifyTasks() {
    this.alert = [];
    this.service.getTasks().forEach((task) => {
      if (new Date(task.date).getTime() <= Date.now()) {
        this.alert.push(task.title);
      }
    });
    if (!!this.alert.length) {
      this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: `${this.alert}`,
      duration: 3000,
      position: 'bottom',
      color: 'danger',
      layout: 'stacked',
      header: 'Esta(s) tarefa(s) estão atrasadas ou vencem hoje: ',
    });

    await toast.present();
  }

  getTasks(): ITask[] {
    return this.service.getTasks();
  }
}
