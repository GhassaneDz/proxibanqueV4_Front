import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';
import { Client } from '../class/Client';

@Injectable({
  providedIn: 'root'
})
export class PositivServiceService {

  private subject: BehaviorSubject<Array<Client>>;

  constructor(private httpClient : HttpClient) { 
    this.subject = new BehaviorSubject(new Array<Client>());
  }
}

  
