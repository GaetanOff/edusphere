import {Injectable} from '@angular/core';

function getLocalStorage(): Storage {
  return localStorage;
}

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() {
  }

  get getLocalStorage(): Storage {
    return getLocalStorage();
  }

  getItem(key: string): any | null {
    return this.getLocalStorage.getItem(key);
  }

  setItem(key: string, value: any): void {
    this.getLocalStorage.setItem(key, value);
  }
}
