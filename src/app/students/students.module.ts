import { StudentsService } from './services/students.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from '../students/students.component';
import { HttpClientModule  } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [StudentsComponent],
  providers: [StudentsService],
  exports: [StudentsComponent]
})
export class StudentsModule { }
