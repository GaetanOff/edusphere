import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-back',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './back.component.html'
})
export class BackComponent {
  @Input() link: string = "";

}
