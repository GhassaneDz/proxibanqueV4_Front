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

  getContactDays(id: number) : Observable<any> {
    return this.http.get<any> (this.url + `/date` + `/${id}`) ;
  }

  getActualSurvey() : Observable<any> {
    return this.http.get<any>(this.url) ;
  }

  getSurveyById(id : number) : Observable<Survey> {
    return this.http.get<Survey>(this.url+`/read` + `/${id}`) ;
  }
}
