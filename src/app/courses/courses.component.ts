import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'courses',
  template: `
  <p *ngIf='courses.length == 0'>Nema kurseva.</p>
  <app-course-details *ngFor='let course of courses'
   [courseId]='course.id'
   (change)="onIdIncrement()"
   ></app-course-details>
   <button class='btn btn-danger'
   *ngIf='courses.length <= 5' (click)='addNewCourse()'>Dodaj kurs</button>
  
  
  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
    courses:any[];
    naziv:string = "Angular Crash Course";
    snizeno:boolean = true;
    cena:number = 0.00;
    coursesService:CoursesService;
    
    constructor(coursesService:CoursesService) {
      this.coursesService = coursesService;
      this.courses = coursesService.getAll();
      
    }

    getCourseInfo(id:number){
     // let izlaz = this.naziv + (this.snizeno ? " snizeno" : "");
     let courses = this.coursesService.getAll();
     let izlaz = courses[id];
     return izlaz;
    }
    getAllCourses(){
      let all = this.coursesService.getAll();
      
      return '';
    }
    onIdIncrement(){
      console.log("Desila se promena u dete komponenti.");
    }
    addNewCourse(){
      let course = {
        id:4,
        naziv:"Novi kurs",
        cena: 1000,
        snizeno:true
      };
      this.coursesService.addCourse(course);
    }
    /*
    
    */
}
