import {Component} from '@angular/core';
import {HttpService} from "../../../../services/http/http.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-tabletdetails',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './tabletdetails.component.html'
})
export class TabletdetailsComponent {

  classroom: number = 1032;
  students: any = [];

  /**
   * Swipe variable
   * @description Vraiment pas ouf mais ça passe
   */
  private touchStartY: number = 0;
  private touchEndY: number = 0;
  private minSwipeDistance: number = 130;

  constructor(private httpService: HttpService, private router: Router, private activatedRoute: ActivatedRoute) {
    setTimeout((): void => {
      window.scrollTo({top: 0, behavior: 'instant'});
    }, 150);

    this.activatedRoute.queryParams.subscribe({
      next: (params: any): void => {
        this.classroom = params.classroom;

        this.httpService.getInfoTablet(this.classroom).subscribe({
          next: (response: any): void => {
            this.addStudentsFromApi(response);
          },
          error: (error: any): void => {
            console.error("Erreur lors de l'appel à l'API : ", error);
          }
        });
      },
    });
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartY = event.changedTouches[0].screenY;
    console.log("TouchStart : " + this.touchStartY);
  }

  onTouchMove(event: TouchEvent): void {
    this.touchEndY = event.changedTouches[0].screenY;
    console.log("TouchMove : " + this.touchEndY);
  }

  onTouchEnd(): void {
    const swipeDistance: number = this.touchStartY - this.touchEndY;
    console.log("TouchEnd : " + swipeDistance);

    if (swipeDistance < this.minSwipeDistance) {
      console.log("Swipe up detected");
      this.onSwipeUp();
    }
  }

  onSwipeUp(): void {
    this.router.navigate(['/tablet'], {queryParams: {classroom: this.classroom}});
  }

  private addStudentsFromApi(apiResponse: any): void {
    apiResponse.forEach((item: any): void => {
      const studentName: string = `${item.eleve_prenom} ${item.eleve_nom}`;
      //const className = item.cous_nom;
      const className: string = "SN2";

      this.students.push({
        name: studentName,
        class: className
      });
    });

    console.log("Liste des élèves mise à jour : ", this.students);
  }

}
