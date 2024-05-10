import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  /**
   *
   */

  courses:any;
  @Input('courseId') courseId:number = 0;
  @Output() change = new EventEmitter();

  constructor(private coursesService:CoursesService) {
    this.courses = coursesService.getAll();
    
  }
  increment(){
    this.courseId = (this.courseId+1) % this.courses.length; ;
    this.change.emit();
  }
  getCourseName(id:number){
    let izlaz = this.courses[this.courseId].naziv + (this.courses[this.courseId].snizeno ? "snizeno" : "");
    return izlaz;
  }
  getCoursePrice(id:number){
    let izlaz = this.courses[this.courseId].cena;
    return izlaz;
  }
}
