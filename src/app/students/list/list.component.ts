import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public students = [];
  public errorMsg;

  constructor(private service: StudentsService) { }

  ngOnInit() {
    this.service.getAlunos()
    .subscribe( data => this.students = data,
               error => this.errorMsg = error);
}

}
