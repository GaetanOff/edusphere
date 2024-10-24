import {ChangeDetectorRef, Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {BackComponent} from "../../../include/back/back.component";
import {EventSourceService} from "../../../../services/eventsource/event-source.service";
import {NgForOf, NgIf} from "@angular/common";
import {LocalstorageService} from "../../../../services/storage/localstorage.service";
import {AuthService} from "../../../../services/auth/auth.service";

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    BackComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './chatbot.component.html'
})
export class ChatbotComponent {
  message: string | undefined;
  isProcessing: boolean = false;
  intervalId: any;

  conversations: any = [
    {
      message: 'Que puis-je faire pour vous ?',
      status: 'Livré',
      time: this.getCurrentHour(),
      isBot: true
    },
  ]


  constructor(private authService: AuthService, private eventSourceService: EventSourceService, private cdr: ChangeDetectorRef, private localStorage: LocalstorageService) {
    this.authService.checkLogin();

    if (this.localStorage.getItem('conversations')) {
      //this.conversations = JSON.parse(this.localStorage.getItem('conversations'));
    } else {
      this.localStorage.setItem('conversations', JSON.stringify(this.conversations));
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    //this.localStorage.setItem('conversations', this.conversations);
  }

  async addOneConversation(message: string, isBot: boolean = false): Promise<number> {
    this.conversations.push({
      message: message,
      status: isBot ? 'En reflexion' : 'Envoyé',
      time: this.getCurrentHour(),
      isBot: isBot
    });
    this.cdr.detectChanges();
    return this.conversations.length;
  }

  getCurrentHour(): string {
    const date: Date = new Date();
    const hours: string = date.getHours().toString().padStart(2, '0');
    const minutes: string = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  async updateConversation(index: number, newMessage: string, isBot: boolean = false, status: string = "En reflexion"): Promise<void> {
    if (index >= 0 && index < this.conversations.length) {
      this.conversations[index].message += newMessage;
      if (isBot !== undefined) {
        this.conversations[index].isBot = isBot;
      }
      this.conversations[index].status = status;
      this.cdr.detectChanges();
    } else {
      console.log("L'indice spécifié n'est pas valide.");
    }
  }

  async processForm(): Promise<void> {
    if (this.message === undefined) {
      console.log('Message is empty');
      return;
    }

    this.isProcessing = true;

    await this.addOneConversation(this.message);

    const id: any = await this.addOneConversation("", true);

    this.startLoadingAnimation(id - 1);

    await this.requestChatbot(this.message, id);

    this.message = undefined;
  }

  startLoadingAnimation(index: number): void {
    let dots: string = '';
    this.intervalId = setInterval((): void => {
      dots = dots.length < 4 ? dots + '.' : '';
      this.conversations[index].message = '.' + dots;
    }, 500);
  }

  stopLoadingAnimation(index: number): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.conversations[index].message = '';
    }
  }

  async requestChatbot(message: string, id: any): Promise<void> {
    this.eventSourceService.getChatbotResponse(message)
      .subscribe({
        next: (chunk: any): void => {
          this.stopLoadingAnimation(id - 1);
          this.updateConversation(id - 1, chunk, true);
        },
        error: (error: any): void => {
          console.error('Error:', error);
        },
        complete: (): void => {
          this.updateConversation(id - 1, '', true, 'Livré');
          this.isProcessing = false;
          this.cdr.detectChanges();
        }
      });
  }
}
