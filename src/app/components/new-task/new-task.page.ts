import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ITask } from 'src/app/interfaces/ITask.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.page.html',
  styleUrls: ['./new-task.page.scss'],
})
export class NewTaskPage implements OnInit {
  public task!: ITask;

  form = this.formBuilder.group({
    title: ['', Validators.required],
    subtitle: [''],
    date: ['', Validators.required],
    description: [''],
  });

  constructor(
    private service: DataService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.router.url.includes('edit')) {
      const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
      this.task = this.service.getTaskById(parseInt(id, 10));
      this.form.patchValue(this.task);
    }
  }

  saveTask() {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      if (this.router.url.includes('edit')) {
        this.task = { ...this.task, ...this.form.value } as ITask;
        this.service.updateTask(this.task);
      } else {
        this.task = { ...this.form.value, done: false } as ITask;
        this.service.addTask(this.task);
      }

      this.router.navigate(['home']);
    }
  }
}
