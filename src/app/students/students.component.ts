import { StudentsService } from './services/students.service';
import { Component, OnInit, Input } from '@angular/core';
import { IStudent } from './students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public students = [];
  public errorMsg;
  constructor(private service: StudentsService) { 

  }

  ngOnInit() {

      this.service.getAlunos()
      .subscribe( data => this.students = data,
                 error => this.errorMsg = error);


                 
  }

}
