import {Component} from '@angular/core';
import {BackComponent} from "../../../../include/back/back.component";
import {AuthService} from "../../../../../services/auth/auth.service";
import {HttpService} from "../../../../../services/http/http.service";
import {ActivatedRoute, Params, Router, RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-coursedetails',
  standalone: true,
  imports: [
    BackComponent,
    NgForOf,
    RouterLink
  ],
  templateUrl: './coursedetails.component.html'
})
export class CoursedetailsComponent {
  date: string = '';
  title: string = '';

  courses: any[] = [];

  constructor(private authService: AuthService, private router: Router, private activedRoute: ActivatedRoute, private httpService: HttpService) {
    this.authService.checkLogin();

    this.activedRoute.queryParams.subscribe((params: Params): void => {
      if (!params['date'] || !params['title']) {
        this.router.navigate(['/courses']);
        return;
      }

      this.date = params['date'];
      this.title = params['title'];

      if (this.title === 'Matinée') {
        this.title = 'matinee';
      }

      this.httpService.getCourses(this.date, this.title, this.authService.getUsername()).subscribe({
        next: (response: any): void => {
          this.courses = response;

          console.log(this.courses);
        }
      });
    });
  }

  translateHour(hour: string): string {
    let date = new Date(hour);
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');

    return hours + 'h' + minutes;
  }
}
