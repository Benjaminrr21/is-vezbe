import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  url = 'https://localhost:7284/api/';
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Author[]>(this.url + "authors");
  }
  addAuthor(author:Author){
    return this.http.post<Author>(this.url + "authors",author);
  }
  deleteAuthor(id:number){
    return this.http.delete<Author>(this.url + "authors/" + id); //SLES !!!
  }
  updateAuthor(){}

  getById(id:number){
    return this.http.get<Author>(this.url + "authors/"+id);
  }
}

export interface Author{
  id:number;
  name:string;
}
