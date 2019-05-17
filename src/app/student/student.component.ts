import { Component, OnInit } from '@angular/core';
import { Student, All_stu } from '../home/student';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  private students: Student[];
  private Showmale: string;
  private Show: number;
  private man: string;
  private woman: string;
  private Course: string;




  constructor() {
    this.students = All_stu;

  }

  ngOnInit() {

  }

  only_male() {
    if (this.Showmale == "M") {
      this.Showmale = "F";
    }
    else {
      this.Showmale = "M";
    }
  }


  All_sub_sort() {
    if (this.Show == 1702) {
      this.Show = 0;
    }
    else {
      this.Show = 1702;
    }
  }


}

