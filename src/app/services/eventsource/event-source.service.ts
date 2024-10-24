import {Injectable} from '@angular/core';
import {Observable} from 'rxjs'
import {HttpService} from "../http/http.service";

//Credits to https://medium.com/@andrewkoliaka/implementing-server-sent-events-in-angular-a5e40617cb78
@Injectable({
  providedIn: 'root'
})
export class EventSourceService {

  constructor(private httpService: HttpService) {
  }

  getChatbotResponse(question: string): Observable<string> {
    return new Observable<string>(observer => {
      const eventSource = new EventSource(this.httpService.getBotApiUrl() + `chatbot/?question=${encodeURIComponent(question)}`);

      eventSource.onmessage = (event) => {
        if (event.data === '[DONE]') {
          eventSource.close();
          observer.complete();
        } else {
          const {chunk} = JSON.parse(event.data);
          observer.next(chunk);
        }
      };

      eventSource.onerror = (error) => {
        console.error('EventSource failed:', error);
        eventSource.close();
        observer.error(error);
      };

      return () => {
        eventSource.close();
      };
    });
  }
}
