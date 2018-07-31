import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment as ENV } from '../environments/environment';
import { FeedBack } from './feed-back';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private url: string = ENV.apiUrl + '/feedback' ;
  private subject: BehaviorSubject<Array<FeedBack>>;

  constructor(private http: HttpClient) { }

  create (fd: FeedBack): Observable<FeedBack>{
    let body = JSON.parse(JSON.stringify(fd));
    
     return this.http.post<FeedBack>(this.url, body) ; 
  
  }
}
