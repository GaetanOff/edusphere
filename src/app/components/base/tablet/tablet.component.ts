import {Component} from '@angular/core';
import {HttpService} from "../../../services/http/http.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tablet',
  standalone: true,
  imports: [],
  templateUrl: './tablet.component.html',
})
export class TabletComponent {
  classroom: number = 1;
  teacher: string = ""
  subject: string = ""

  /**
   * Swipe variable
   * @description Vraiment pas ouf mais ça passe
   */
  private touchStartY: number = 0;
  private touchEndY: number = 0;
  private minSwipeDistance: number = 130;

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute, private router: Router) {
    setTimeout((): void => {
      window.scrollTo({top: 0, behavior: 'instant'});
    }, 150);

    this.activatedRoute.queryParams.subscribe({
      next: (params: any): void => {
        if (params.classroom) {
          this.classroom = params.classroom;

          this.httpService.getInfoTablet(this.classroom).subscribe({
            next: (response: any): void => {
              console.log(response[0])
              if (response[0].nom_prof) {
                this.teacher = response[0].nom_prof;
              }
              if (response[0].cours_nom) {
                this.subject = response[0].cours_nom;
              }
            }
          });
        }
      }
    });

  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartY = event.changedTouches[0].screenY;
    console.log("ToucheStart : " + this.touchStartY);
  }

  onTouchMove(event: TouchEvent): void {
    this.touchEndY = event.changedTouches[0].screenY;
    console.log("TouchMove : " + this.touchEndY);
  }

  onTouchEnd(): void {
    const swipeDistance: number = this.touchStartY - this.touchEndY;
    console.log("TouchEnd : " + swipeDistance);

    if (swipeDistance > this.minSwipeDistance && this.touchStartY != swipeDistance) {
      console.log("Swipe down detected");
      this.onSwipeDown();
    }
  }

  onSwipeDown(): void {
    this.router.navigate(['/tablet/details/'], {queryParams: {classroom: this.classroom}});
  }

}
