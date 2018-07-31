import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as ENV } from '../environments/environment';
import { Survey } from './survey';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private url: string = ENV.apiUrl + '/survey' ;
  //private url: string = ENV.mockUrl;

  constructor(private http: HttpClient) { }

  getSurveys() : Observable<Array<Survey>> {
    return this.http.get<Array<Survey>>(this.url + '/list') ;
  }
}
