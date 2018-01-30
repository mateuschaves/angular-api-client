import { SelectFilterPipe } from './../select-filter.pipe';
import { FilterPipe } from './../filter.pipe';
import { PagenotfoundComponent } from './../pagenotfound/pagenotfound.component';
import { StudentsService } from './services/students.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule  } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListComponent } from './list/list.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  declarations: [ListComponent, PagenotfoundComponent, FilterPipe, SelectFilterPipe],
  providers: [StudentsService],
  exports: [ListComponent, PagenotfoundComponent]
})
export class StudentsModule { }
