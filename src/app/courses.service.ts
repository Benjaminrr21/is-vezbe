import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  //constructor() { }
  courses = [{
    id:0,
    naziv: "Angular Course",
    cena: 1500,
    brojPolaznika: 2
  },
{
    id:1,
    naziv: "React Course",
    cena: 1400,
    brojPolaznika: 3
},
{
  id:2,
  naziv: "Node JS Course",
    cena: 1700,
    brojPolaznika: 5
}];

  getAll(){
    return this.courses;
  }
  getSum(){
    var sum = 0;
    for (let i = 0; i < this.courses.length; i++) {
      sum += this.courses[i].cena;
      
    }
  }
  addCourse(course:any){
    this.courses.push(course);
  }
}
