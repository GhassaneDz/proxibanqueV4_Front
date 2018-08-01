import { Component, OnInit } from '@angular/core';
import { FeedBack } from '../feed-back';
import { FeedbackService } from '../feedback.service';
import { ActivatedRoute, Router, ParamMap } from '../../../node_modules/@angular/router';
import { Location } from '@angular/common';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-view-positive-feed-back',
  templateUrl: './view-positive-feed-back.component.html',
  styleUrls: ['./view-positive-feed-back.component.css']
})
export class ViewPositiveFeedBackComponent implements OnInit {

  feedBack : FeedBack = new FeedBack(); 
  client : Client = new Client() ;
 
  messageExistingClient : string ; 
  messageNewClient : string ; 
  nbDays : number ;  
  unknownClient : string ; 

  constructor(private feedbackService:FeedbackService, private location: Location, private route: ActivatedRoute, 
    private router: Router, private clientService: ClientService, private surveyService: SurveyService) { this.feedBack.feedback = true ; }

  ngOnInit() {
   
    this.feedBack.survey.id = parseInt( this.route.snapshot.paramMap.get('id'));
    /*this.route.paramMap.subscribe( (params: ParamMap) => {
       let id = parseInt(params.get('id')) ; 
       this.feedBack.survey.id = id ; 
    }) ;*/
  }

  createFeedBack (feed:FeedBack){
    feed.newClients = true ; 
    feed.client.firstName = this.client.firstName ;
    feed.client.lastName = this.client.lastName ;
    feed.client.tel = this.client.tel ; 
    feed.client.email = this.client.email ; 
    feed.client.number = this.client.number ; 
    this.clientService.create(feed.client)
    .subscribe ({  
      next: (newClient) => {console.log(`FeedBack ${newClient} créé !`);
                           feed.client.id = newClient.id ;
                           feed.newClients = true ;  
                           this.feedbackService.create(feed) 
                           .subscribe({
                             next: (newFeedBack) => console.log(`FeedBack ${newFeedBack} créé !`), 
                             error: (errorMessage) => console.log(`Impossible de créer le feedBack ${feed} : ${errorMessage}`),
                             complete: () => {
                               console.log('Création du nouvel article terminée avec succès !');
                              
                             }
                            });}
      ,error: (errorMessage) => console.log(`Impossible de créer le feedBack ${feed.client} : ${errorMessage}`)
      ,complete: () => {
        this.surveyService.getContactDays(this.feedBack.survey.id)
        .subscribe ( (days) => {
                   this.nbDays = days ;
                   console.log(days);
                   this.messageNewClient = 'Vous serez contacté dans un délai de ' + days + ' jours par un de nos conseillers experts en assurance auto.' ; 
                   setTimeout(function(){ location.href = "/home" }, 4000);
                      
                      })
                         }}) ; 
     
    } 
  
  readClient(cl: Client){
     
     this.clientService.read(String(cl.number))
        .subscribe ({ 
          next: (newClient) => {
                           if (newClient == null){
                            this.unknownClient = 'Identifient Incorrecte, Veuillez entrer un identifient valide';
                            setTimeout(function(){ location.href = "/home"}, 4000) ; 
                           }
                            
                           this.feedBack.client.id = newClient.id ; 
                           this.feedBack.newClients = false ;
                           this.feedbackService.create(this.feedBack) 
                           .subscribe({
                             next: (newFeedBack) => console.log(`FeedBack ${newFeedBack} créé !`), 
                             error: (errorMessage) => console.log(`Impossible de créer l'article ${newClient} : ${errorMessage}`),
                             complete: () => {
                              
                             }
                            });}
          ,error: (errorMessage) => console.log(`Impossible de trouver le client ${cl} : ${errorMessage}`),
          complete: () => {
            this.surveyService.getContactDays(this.feedBack.survey.id)
               .subscribe ( (days) => {
                  this.nbDays = days ;
                  console.log(days);
                  this.messageExistingClient = 'Vous serez contacté dans un délai de ' + days + ' jours par un de nos conseillers experts en assurance auto.' ; 

               } ) 
               setTimeout(function(){ location.href = "/home" }, 4000);
           
          }
        }); 
  }

}
