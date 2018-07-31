import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as ENV } from '../environments/environment';
import { Client } from './client';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url: string = ENV.apiUrl + '/client' ;

  constructor(private http: HttpClient) { }

  create (cl: Client): Observable<Client>{
    let body = JSON.parse(JSON.stringify(cl));
  
     return this.http.post<Client>(this.url, body) ;
  }

  read (number : string) : Observable<Client> {
    return this.http.get<Client>(this.url + `/${number}`) ; 
  }
}
