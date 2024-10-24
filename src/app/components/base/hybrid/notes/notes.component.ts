import {Component} from '@angular/core';
import {BackComponent} from "../../../include/back/back.component";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {AuthService} from "../../../../services/auth/auth.service";
import {HttpService} from "../../../../services/http/http.service";

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [
    BackComponent,
    NgForOf,
    RouterLink
  ],
  templateUrl: './notes.component.html'
})
export class NotesComponent {
  courses: any = [];

  constructor(private authService: AuthService, private httpService: HttpService) {
    this.authService.checkLogin();

    this.httpService.getNotes(this.authService.getUsername()).subscribe({
      next: (response: any): void => {
        this.courses = response;
      }
    });
  }

  calculateAverage(): number {
    let total: number = 0;
    let count: number = 0;

    this.courses.forEach((item: any): void => {
      const note: number = parseFloat(item.note);
      if (!isNaN(note)) {
        total += note;
        count++;
      }
    });

    const average: number = count > 0 ? total / count : 0;

    return parseFloat(average.toFixed(2));
  }
}
