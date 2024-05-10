import { Component, OnInit } from '@angular/core';
import { Author, AuthorsService } from '../authors.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors:Author[] = [];
  authorId?:number;
  authorName?:string;

  constructor(private service:AuthorsService,private router:Router) {
    
    
  }
  ngOnInit():void {
    this.service.getAll()
    .subscribe(res => {
    console.log(res);
    this.authors = res;
    },
    error => {
    console.log(error);
    });
  }
  addAuthor(){
    let author:Author = {
      id: this.authorId ?? 0,
      name:this.authorName ?? ""
    };
    this.service.addAuthor(author).subscribe(res => {
      console.log(res);
      this.authors.push(res);
      this.authorId = undefined;
      this.authorName = '';
    },
    error=>{
      console.log(error);
    })
  }
  deleteAuthor(id:number){
    this.service.deleteAuthor(id)
    .subscribe(res=>{
      console.log(res);
      console.log("USPESNO BRISANJE.")
      let index = this.authors.indexOf(res);
      this.authors.splice(index,1);
      
    },error => {
      console.log(error);
    })
  }
  details(id:number) {
    this.router.navigate(["authors",id]);
  }
}
