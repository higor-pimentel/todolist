import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewTaskRoutingModule } from './new-task-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewTaskPage } from './new-task.page';

@NgModule({
  declarations: [NewTaskPage],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewTaskRoutingModule,
  ],
})
export class NewTaskModule {}
