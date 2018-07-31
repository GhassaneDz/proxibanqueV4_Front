import { Component, OnInit,  NgZone } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { FeedBack } from '../feed-back';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';



@Component({
  selector: 'app-view-negative-feed-back',
  templateUrl: './view-negative-feed-back.component.html',
  styleUrls: ['./view-negative-feed-back.component.css']
})
export class ViewNegativeFeedBackComponent implements OnInit {

  feedBack : FeedBack = new FeedBack() ;
  

  constructor(private feedbackService:FeedbackService, private location: Location, private route: ActivatedRoute, private router: Router, private zone: NgZone) {

   }

   ngOnInit() {
    this.feedBack.client = null ; 
    this.feedBack.feedback = false ; 
    this.feedBack.survey.id = parseInt( this.route.snapshot.paramMap.get('id'));
    /*this.route.paramMap.subscribe( (params: ParamMap) => {
      let id = parseInt(params.get('id')) ; 
      console.log(id)
      this.feedBack.survey.id = id ; 
    }) ;*/
  }
  
  createFeedBack (feed:FeedBack){
    
    this.feedbackService.create(feed) 
    .subscribe( {
      next: (newFeedBack) => console.log(`FeedBack ${newFeedBack} créé !`),
      error: (errorMessage) => console.log(`Impossible de créer le feedBack ${feed} : ${errorMessage}`),
      complete: () => {
        console.log('Création du nouvel article terminée avec succès !');
          this.router.navigateByUrl("/home") ; 
      }
    }); 
  }

}
