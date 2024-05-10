import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { UkupnoComponent } from './ukupno/ukupno.component';
import { CustomPipe } from './custom.pipe';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CustomDirective } from './custom.directive';
import { SignUpComponent } from './sign-up/sign-up.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthorsComponent } from './authors/authors.component';
import { NavComponent } from './nav/nav.component'; //mora rucno da se importuje !!! 
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    UkupnoComponent,
    CustomPipe,
    CourseDetailsComponent,
    CustomDirective,
    SignUpComponent,
    AuthorsComponent,
    NavComponent,
    HomeComponent,
    NotfoundComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, //rucno importuj
    RouterModule.forRoot([
      { path:"",component:HomeComponent},
      { path:"authors/:id",component:ProfileComponent}, //zamenjeno sa linijom ispod jer ide redom, kao kompajler
      { path:"authors",component:AuthorsComponent},
      { path:"courses",component:CoursesComponent},
      { path:"**",component:NotfoundComponent}
    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
