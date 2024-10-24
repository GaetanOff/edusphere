import {Component} from '@angular/core';
import {BackComponent} from "../../../../../include/back/back.component";
import {RouterLink} from "@angular/router";
import {ErrorService} from "../../../../../../services/error/error.service";

@Component({
  selector: 'app-microsoftlogin',
  standalone: true,
  imports: [
    BackComponent,
    RouterLink
  ],
  templateUrl: './microsoftlogin.component.html'
})
export class MicrosoftloginComponent {

  constructor(public errorService: ErrorService) {
  }
}
