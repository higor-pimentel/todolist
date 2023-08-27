import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ITask } from '../../interfaces/ITask.interface';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.page.html',
  styleUrls: ['./view-task.page.scss'],
})
export class ViewTaskPage implements OnInit {
  public task!: ITask;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: DataService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.task = this.service.getTaskById(parseInt(id, 10));
  }
}
