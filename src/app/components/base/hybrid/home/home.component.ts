import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {AuthService} from "../../../../services/auth/auth.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  buttons = [
    {label: 'ChatBot', redirect: 'chatbot'},
    {label: 'Événements', redirect: 'event'},
    {label: 'Emploi du temps', redirect: 'courses'},
    {label: 'Mes notes', redirect: 'notes'},
    {label: 'Note tes profs', redirect: 'teachereval'},
    {label: 'Réservation', redirect: 'reservation'}
  ];

  constructor(public authService: AuthService) {
    this.authService.checkLogin();
  }

}
