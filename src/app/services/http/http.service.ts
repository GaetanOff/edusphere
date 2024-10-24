import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private botApiUrl: string = 'http://192.168.30.35:8000/';

  constructor(private httpClient: HttpClient) {
  }

  public postLogin(email: string, password: string): Observable<Object> {
    return this.httpClient.post(this.botApiUrl + 'api/login/', {
      username: email,
      password: password
    });
  }

  public getEvents(): Observable<Object> {
    return this.httpClient.get(this.botApiUrl + 'api/db_query/evenements/');
  }

  public getCourses(date: string, title: string, username: string): Observable<Object> {
    return this.httpClient.get(this.botApiUrl + 'api/db_query/masalle/?date=' + date + '&title=' + title + '&username=' + username);
  }

  public getNotes(username: string): Observable<Object> {
    return this.httpClient.get(this.botApiUrl + 'api/db_query/mesnotes/?username=' + username);
  }

  public getInfoTablet(classroom: number): Observable<Object> {
    return this.httpClient.get(this.botApiUrl + 'api/db_query/salle/' + classroom + "/");
  }

  public getBotApiUrl(): string {
    return this.botApiUrl;
  }
}
