import {Component} from '@angular/core';
import {BackComponent} from "../../../../include/back/back.component";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthService} from "../../../../../services/auth/auth.service";
import {HttpService} from "../../../../../services/http/http.service";

@Component({
  selector: 'app-notesdetails',
  standalone: true,
  imports: [
    BackComponent
  ],
  templateUrl: './notesdetails.component.html'
})
export class NotesdetailsComponent {

  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute, private httpService: HttpService) {
    this.authService.checkLogin();

    this.activatedRoute.queryParams.subscribe((params: Params): void => {
      if (!params['id']) {
        this.router.navigate(['/notes']);
      }
    });
  }
}

