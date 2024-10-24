import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  private randomNumber(): number {
    return Math.floor(Math.random() * 1000)
  };

  getMicrosoftError() {
    return "2567-" + this.randomNumber() + "-" + this.randomNumber() + "-" + this.randomNumber() + "-" + this.randomNumber();
  }
}
