import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {BackComponent} from "../../../include/back/back.component";
import {AuthService} from "../../../../services/auth/auth.service";

@Component({
  selector: 'app-evaluateteacher',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    BackComponent
  ],
  templateUrl: './evaluateteacher.component.html'
})
export class EvaluateteacherComponent {

  courses = [
    {
      id: 0,
      name: 'Math',
      teacher: 'Mr. Johnson',
      dateBeginAndEnd: '2021-09-01 - 2021-12-01'
    },
    {
      id: 1,
      name: 'Science',
      teacher: 'Mrs. Smith',
      dateBeginAndEnd: '2021-09-01 - 2021-12-01'
    },
    {
      id: 2,
      name: 'English',
      teacher: 'Mr. Brown',
      dateBeginAndEnd: '2021-09-01 - 2021-12-01'
    }
  ];

  constructor(private authService: AuthService) {
    this.authService.checkLogin();
  }

}
