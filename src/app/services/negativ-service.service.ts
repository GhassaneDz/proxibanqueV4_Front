import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FeedBack } from '../class/FeedBack';
import { Survey } from '../class/Survey';

@Injectable({
  providedIn: 'root'
})
export class NegativService {

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

   createFeedBack(feedBack: FeedBack): Observable<FeedBack> {
		let result = new Subject<FeedBack>();
		this.httpClient.post<FeedBack>(this.apiUrl, feedBack)
			.subscribe((newFeedBack) => {
				// Si HTTP POST success.
				this.republish(null, newFeedBack);
				result.next(newFeedBack);
				result.complete();
			}, (response: HttpErrorResponse) => {
				// Sinon si erreur.
				result.error(response.message);
			});
		return result;
  }
  
  private republish(id: number, feedBack: FeedBack) {
		let currentFeed = this.subjectFeed.value.slice();
		if (id === null) {
			// Création
			currentFeed.push(feedBack);
		} else {
			// Récupération de l'indice de l'article à MAJ ou SUPPR.
			let index = currentFeed.findIndex((a) => a.id === id);
			if (index >= 0 && feedBack) {
				// MAJ
				currentFeed.splice(index, 1, feedBack);
			} else if (index >= 0) {
				// Suppression
				currentFeed.splice(index, 1);
			} else {
				console.error(`Impossible de traiter une opération sur un article inexistant (id=${id})`);
			}
		}
		// Republier la nouvelle liste d'articles à jour.
		this.subjectFeed.next(currentFeed);
  }


}
