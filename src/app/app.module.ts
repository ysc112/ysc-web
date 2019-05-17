import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFComponent } from './login-f/login-f.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route, ROUTES, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component'
import { LoggedInGuard } from 'src/app/guards/loggedIn.guard';
const ChildrenRoutes: Routes =[
  {path:'',redirectTo:'student',pathMatch:'full'},
  {path:'student',component:StudentComponent},
  {path:'student-list',component:StudentListComponent}
];
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,children:ChildrenRoutes,canActivate:[LoggedInGuard]},
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginFComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginFComponent,
    HomeComponent,
    AboutComponent,
    StudentComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
