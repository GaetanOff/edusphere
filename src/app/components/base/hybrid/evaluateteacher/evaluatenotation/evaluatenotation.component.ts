import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {BackComponent} from "../../../../include/back/back.component";
import {AuthService} from "../../../../../services/auth/auth.service";

@Component({
  selector: 'app-evaluatenotation',
  standalone: true,
  imports: [
    BackComponent
  ],
  templateUrl: './evaluatenotation.component.html'
})
export class EvaluatenotationComponent {

  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.authService.checkLogin();
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params): void => {
      if (!params['id']) {
        this.router.navigate(['/teachereval']);
      }
    });
  }
}
