import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  constructor(public authService: AuthService) {
  }

  async disconnect(): Promise<void> {
    await this.authService.disconnect();
  }
}
