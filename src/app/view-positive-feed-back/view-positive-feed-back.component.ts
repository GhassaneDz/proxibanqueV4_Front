import { Component, OnInit } from '@angular/core';
import { FeedBack } from '../feed-back';
import { FeedbackService } from '../feedback.service';
import { ActivatedRoute, Router, ParamMap } from '../../../node_modules/@angular/router';
import { Location } from '@angular/common';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-view-positive-feed-back',
  templateUrl: './view-positive-feed-back.component.html',
  styleUrls: ['./view-positive-feed-back.component.css']
})
export class ViewPositiveFeedBackComponent implements OnInit {

  feedBack : FeedBack = new FeedBack(); 
  client : Client = new Client() ;

  constructor(private feedbackService:FeedbackService, private location: Location, private route: ActivatedRoute, 
    private router: Router, private clientService: ClientService) { this.feedBack.feedback = true ; }

  ngOnInit() {
   
    this.feedBack.survey.id = parseInt( this.route.snapshot.paramMap.get('id'));
    /*this.route.paramMap.subscribe( (params: ParamMap) => {
       let id = parseInt(params.get('id')) ; 
       this.feedBack.survey.id = id ; 
    }) ;*/
  }

  createFeedBack (feed:FeedBack){
    
    feed.client.firstName = this.client.firstName ;
    feed.client.lastName = this.client.lastName ;
    feed.client.tel = this.client.tel ; 
    feed.client.email = this.client.email ; 
    feed.client.number = this.client.number ; 
    this.clientService.create(feed.client)
    .subscribe ({  
      next: (newClient) => {console.log(`FeedBack ${newClient} créé !`);
                           feed.client.id = newClient.id ;
                           console.log(feed.client.id);
                           feed.newClients = true ;  
                           this.feedbackService.create(feed) 
                           .subscribe({
                             next: (newFeedBack) => console.log(`FeedBack ${newFeedBack} créé !`), 
                             error: (errorMessage) => console.log(`Impossible de créer le feedBack ${feed} : ${errorMessage}`),
                             complete: () => {
                               console.log('Création du nouvel article terminée avec succès !');
                               this.router.navigateByUrl('/home');
                             }
                            });}
      ,error: (errorMessage) => console.log(`Impossible de créer le feedBack ${feed.client} : ${errorMessage}`)
      ,complete: () => {
                        console.log('Création du nouvel article terminée avec succès !');
                        this.router.navigateByUrl('/home');
                      }
                         }) ; 
     
    } 
  
  readClient(cl: Client){
     
     this.clientService.read(String(cl.number))
        .subscribe ({ 
          next: (newClient) => {console.log(`FeedBack ${newClient} lu !`);
                           this.feedBack.client.id = newClient.id ; 
                           this.feedBack.newClients = false ;
                           this.feedbackService.create(this.feedBack) 
                           .subscribe({
                             next: (newFeedBack) => console.log(`FeedBack ${newFeedBack} créé !`), 
                             error: (errorMessage) => console.log(`Impossible de créer le feedBack ${this.feedBack} : ${errorMessage}`),
                             complete: () => {
                               console.log('Création du nouvel article terminée avec succès !');
                               this.router.navigateByUrl('/home');
                             }
                            });}
          ,error: (errorMessage) => console.log(`Impossible de trouver le client ${cl} : ${errorMessage}`),
          complete: () => {
            alert('merci de vous etre authentifié vous allez etre redirigé')
            this.router.navigateByUrl('/home');
          }
        }); 
  }

}
