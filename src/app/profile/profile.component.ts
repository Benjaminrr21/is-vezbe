import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author, AuthorsService } from '../authors.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id:number = 0;
  author?:Author;
  constructor(private service:AuthorsService,private route:ActivatedRoute) {
    
  }
  ngOnInit(): void {
      this.route.paramMap.subscribe(p=>{
          this.id = +(p.get('id')??"0");
          this.getData();

      });
      /* this.route.queryParamMap.subscribe(q => {
        this.nesto = q.get('page');
      }) */
  }
  getData(){
    this.service.getById(this.id).subscribe(res => {
      console.log(res);
      this.author = res;
    },
    error => {
      console.log(error);
    })
  }

}
