import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Client } from '../class/Client';

@Injectable({
  providedIn: 'root'
})
export class PositivService {

  private subject: BehaviorSubject<Array<Client>>;
  private apiUrl: string;

  constructor(private httpClient : HttpClient) { 
    this.subject = new BehaviorSubject(new Array<Client>());
  }

  get listClient(): Observable<Array<Client>>{
    return this.subject.asObservable();
  }

  listClientService(): Observable<Array<Client>>{
    this.httpClient.get<Array<Client>>(this.apiUrl).subscribe((list) => this.subject.next(list));
    return this.listClient;
  }


}

  
