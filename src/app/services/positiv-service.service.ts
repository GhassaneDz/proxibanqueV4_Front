import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Client } from '../class/Client';
import { FeedBack } from '../class/FeedBack';
import { Survey } from '../class/Survey';

@Injectable({
  providedIn: 'root'
})
export class PositivService {

  private subjectClient: BehaviorSubject<Array<Client>>;
  private subjectFeed: BehaviorSubject<Array<FeedBack>>;
  private apiUrl: string;

  constructor(private httpClient : HttpClient) { 
    this.subjectClient = new BehaviorSubject(new Array<Client>());
  }

  get listClient(): Observable<Array<Client>>{
    return this.subjectClient.asObservable();
  }

  listClientService(): Observable<Array<Client>>{
    this.httpClient.get<Array<Client>>(this.apiUrl).subscribe((list) => this.subjectClient.next(list));
    return this.listClient;
  }

  createFeedBack (feedBack : FeedBack){
    this.httpClient.post<FeedBack>(this.apiUrl, feedBack).subscribe(
      (feed) => console.log(feed),
      (error) => console.log(error)
    )

  }

  createClient(client: Client, survey : Survey ): Observable<Client> {
    let result = new Subject<Client>();
		this.httpClient.post<Client>(this.apiUrl, client)
			.subscribe((newClient) => {
        console.log("création du client");
        // Si HTTP POST success.
        let newFeed : FeedBack = new FeedBack;
        console.log("passage du feedBack à true");
        newFeed.feedBack = true;
        newFeed.survey = survey; 
        newFeed.client = newClient;
        console.log("Passage par la méthode créate feedback");      
        this.createFeedBack(newFeed);
				this.republish(null, newClient);
				result.next(newClient);
				result.complete();
			}, (response: HttpErrorResponse) => {
				// Sinon si erreur.
				result.error(response.message);
			});
		return result;
  }

  ReadClient(id: number): Observable<Client>{
    let result = new Subject<Client>();
    this.httpClient.get<Client>(this.apiUrl+`/${id}`)
      .subscribe(
        (client) => result.next(client),
        (response: HttpErrorResponse) => result.error(response.message)
      );
    return result;
  }

  updateClient(client: Client): Observable<Client>{
    let result = new Subject<Client>();
    this.httpClient.put<Client>(this.apiUrl, client).subscribe(
      (updateClient) => {
        this.republish(client.id , updateClient);
        result.next(updateClient);
        result.complete();
      }),
      (response: HttpErrorResponse)=> result.error(response.message);
    return result;
  }

  private republish(id: number, client: Client) {
		let currentClient = this.subjectClient.value.slice();
		if (id === null) {
			currentClient.push(client);
		} else {
			let index = currentClient.findIndex((a) => a.id === id);
			if (index >= 0 && client) {
				currentClient.splice(index, 1, client);
			} else if (index >= 0) {
				currentClient.splice(index, 1);
			} else {
				console.error(`Impossible de traiter une opération sur un client inexistant (id=${id})`);
			}
		}
		this.subjectClient.next(currentClient);
  }

}

  
