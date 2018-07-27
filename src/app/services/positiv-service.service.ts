import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositivServiceService {

  private subject: BehaviorSubject<Array<Client>>;

  constructor(private httpClient : HttpClient) { 
    this.subject = new BehaviorSubject(new Array<Client>());
  }
}

  get listClient(){
    return this.subject.asObservable();
  }