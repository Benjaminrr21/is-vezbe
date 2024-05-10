import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-ukupno',
  templateUrl: './ukupno.component.html',
  styleUrls: ['./ukupno.component.css']
})
export class UkupnoComponent {
  coursesService:CoursesService;

  constructor(coursesService:CoursesService){
    this.coursesService = coursesService;
  }

  getSum(){
    return this.coursesService.getSum();
  }


}
