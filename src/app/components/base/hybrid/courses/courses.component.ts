import {Component} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {ActivatedRoute, Params, Router, RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HtmlsafePipe} from "../../../../pipe/safe/htmlsafe.pipe";
import {BackComponent} from "../../../include/back/back.component";
import {AuthService} from "../../../../services/auth/auth.service";


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HtmlsafePipe,
    BackComponent,
  ],
  templateUrl: './courses.component.html'
})
export class CoursesComponent {

  buttons = [
    {title: 'Matinée', path: '/courses/details'},
    {title: 'Après-midi', path: '/courses/details'},
  ];

  today: Date = new Date();
  date: string = this.today.toLocaleDateString('en-US');
  formattedDate: string = this.today.getFullYear() + '-'
    + String(this.today.getMonth() + 1).padStart(2, '0') + '-'
    + String(this.today.getDate()).padStart(2, '0');

  constructor(private authService: AuthService, private router: Router, private activedRoute: ActivatedRoute) {
  }

  calendar(): string {
    return `<div id="datepicker-inline" inline-datepicker data-date="$(date)"></div>`;
  }

  ngOnInit(): void {
    this.activedRoute.queryParams.subscribe((params: Params): void => {
      if (!params['date']) {
        setTimeout(async (): Promise<void> => {
          await this.router.navigate(['courses'], {queryParams: {date: this.formattedDate}});
          window.location.reload()
        }, 200);
      }
    });
  }
}
