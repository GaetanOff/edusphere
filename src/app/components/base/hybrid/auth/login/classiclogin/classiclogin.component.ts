import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../../../../../services/auth/auth.service";

@Component({
  selector: 'app-classiclogin',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './classiclogin.component.html'
})
export class ClassicloginComponent {
  email: string | undefined;
  password: string | undefined;

  constructor(private authService: AuthService) {
  }

  async processForm(): Promise<void> {
    if (this.email === undefined || this.password === undefined || this.email === '' || this.password === '') {
      console.log('Please fill in all fields');
      return;
    }

    await this.authService.login(this.email, this.password);

    this.email = '';
    this.password = '';
  }
}
