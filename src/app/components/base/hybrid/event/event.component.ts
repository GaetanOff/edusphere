import {Component} from '@angular/core';
import {BackComponent} from "../../../include/back/back.component";
import {NgForOf} from "@angular/common";
import {AuthService} from "../../../../services/auth/auth.service";
import {HttpService} from "../../../../services/http/http.service";

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [
    BackComponent,
    NgForOf
  ],
  templateUrl: './event.component.html'
})
export class EventComponent {

  events: any = [];

  constructor(private authService: AuthService, private httpService: HttpService) {
    this.authService.checkLogin();

    this.httpService.getEvents().subscribe({
      next: (response: any): void => {
        response.forEach((event: any): void => {
          const formattedPrice: string = event.prix === "0.00" ? "Gratuit" : `${event.prix}€`;

          this.events.push({
            id: event.id_evenement,
            title: event.titre,
            description: event.description,
            location: event.lieu,
            organizer: event.organisateur,
            price: formattedPrice,
            status: event.status,
            startDate: new Date(event.date_debut).toLocaleString("fr-FR"),
            endDate: new Date(event.date_fin).toLocaleString("fr-FR"),
          });
        });
      }
    });
  }


}
