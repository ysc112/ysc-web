import { Component, OnInit } from '@angular/core';
import {Student,All_stu} from './student'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  private students: Student[];
  private Showmale: string;
  private Show: number;
  private man: string;
  private woman: string;
  private Course: string;

  constructor(private router:Router,private auth: AuthService) {
 this.students=All_stu;
  }

  ngOnInit() {
    
  }

  menuClicked(index){
    this.menuIndex=index;
    if (index ==1){
      this.router.navigate(['/home/student-list']);
    }else if(index ==2){
      this.router.navigate(['/home/student']);
  }else if(index ==3){
    this.auth.logout();
    this.router.navigate(['/login']);
  }
  }
}