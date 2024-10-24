import {Routes} from '@angular/router';
import {HomeComponent} from "./components/base/hybrid/home/home.component";
import {LoginComponent} from "./components/base/hybrid/auth/login/login.component";
import {CoursesComponent} from "./components/base/hybrid/courses/courses.component";
import {ChatbotComponent} from "./components/base/hybrid/chatbot/chatbot.component";
import {EvaluateteacherComponent} from "./components/base/hybrid/evaluateteacher/evaluateteacher.component";
import {NotesComponent} from "./components/base/hybrid/notes/notes.component";
import {ReservationComponent} from "./components/base/hybrid/reservation/reservation.component";
import {EventComponent} from "./components/base/hybrid/event/event.component";
import {CoursedetailsComponent} from "./components/base/hybrid/courses/coursedetails/coursedetails.component";
import {EvaluatenotationComponent} from "./components/base/hybrid/evaluateteacher/evaluatenotation/evaluatenotation.component";
import {NotesdetailsComponent} from "./components/base/hybrid/notes/notesdetails/notesdetails.component";
import {ClassicloginComponent} from "./components/base/hybrid/auth/login/classiclogin/classiclogin.component";
import {MicrosoftloginComponent} from "./components/base/hybrid/auth/login/microsoftlogin/microsoftlogin.component";
import {TabletComponent} from "./components/base/tablet/tablet.component";
import {TabletdetailsComponent} from "./components/base/tablet/tabletdetails/tabletdetails.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'auth/login/classic',
    component: ClassicloginComponent
  },
  {
    path: 'auth/login/microsoft',
    component: MicrosoftloginComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'courses/details',
    component: CoursedetailsComponent
  },
  {
    path: 'chatbot',
    component: ChatbotComponent
  },
  {
    path: 'teachereval',
    component: EvaluateteacherComponent
  },
  {
    path: 'teachereval/note',
    component: EvaluatenotationComponent
  },
  {
    path: 'notes',
    component: NotesComponent
  },
  {
    path: 'notes/details',
    component: NotesdetailsComponent
  },
  {
    path: 'reservation',
    component: ReservationComponent
  },
  {
    path: 'event',
    component: EventComponent
  },
  {
    path: 'tablet',
    component: TabletComponent
  },
  {
    path: 'tablet/details',
    component: TabletdetailsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
