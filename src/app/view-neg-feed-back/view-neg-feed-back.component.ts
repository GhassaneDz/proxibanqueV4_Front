import { Component, OnInit } from '@angular/core';
import { NegativService } from '../services/negativ-service.service';
import { Subject } from '../../../node_modules/rxjs';
import { Survey } from '../class/Survey';
import { FeedBack } from '../class/FeedBack';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-neg-feed-back',
  templateUrl: './view-neg-feed-back.component.html',
  styleUrls: ['./view-neg-feed-back.component.css']
})
export class ViewNegFeedBackComponent implements OnInit {

  constructor(private negService:NegativService, private location: Location ) { 

  }

  create(feed: FeedBack) {
		this.negService.createFeedBack(feed)
			.subscribe({
				next: (newFeed) => console.log(`Article ${newFeed} créé !`),
				error: (errorMessage) => console.log(`Impossible de créer l'article ${feed} : ${errorMessage}`),
				complete: () => {
					console.log('Création du nouvel article terminée avec succès !');
					this.location.back();
				}
			});
	}

  ngOnInit() {
  }

}
