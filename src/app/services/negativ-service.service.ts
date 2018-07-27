import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FeedBack } from '../class/FeedBack';
import { Survey } from '../class/Survey';

@Injectable({
  providedIn: 'root'
})
export class NegativServiceService {

  private subjectFeed: BehaviorSubject<Array<FeedBack>>;
  private subjectSurvey: BehaviorSubject<Array<Survey>>;
  private apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.subjectFeed = new BehaviorSubject(new Array<FeedBack>());
   }

   get listFeedBack(): Observable<Array<FeedBack>>{
     return this.subjectFeed.asObservable();
   }

   get listSurvey(): Observable<Array<Survey>>{
     return this.subjectSurvey.asObservable();
   }

   listFeedbackService(): Observable<Array<FeedBack>>{
     this.httpClient.get<Array<FeedBack>>(this.apiUrl).subscribe((listFeed) => this.subjectFeed.next(listFeed));
     return this.listFeedBack;
   }

   listSurveyService(): Observable<Array<Survey>>{
     this.httpClient.get<Array<Survey>>(this.apiUrl).subscribe((listSurvey) => this.subjectSurvey.next(listSurvey));
     return this.listSurvey;
   }


}
