import { Component, OnInit} from '@angular/core';

import {Router} from '@angular/router' ;
import { Survey } from '../survey';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {

  surveyTitle = ' Voudriez-vous adhérer à un service d’assurance automobile Proxibanque ?';
  displayTitle = 'Obtenir un devis d\'assurance auto' ;
  displaySubTitle = 'Simple, rapide et gratuit' ;

  hideProperty = false ;

  isSurvey : boolean ;
  idCurrentSurvey : number ; 
  surveys : Array<Survey> ;

  surveyContactDate : number ; 

  constructor(private surveyService:SurveyService, private router:Router) { }

  ngOnInit() {

    this.surveys = new Array() ; 
    this.surveyService.getActualSurvey() 
       .subscribe ((data) => {
        if (data != 0) {
          this.surveyService.getSurveyById(data)
            .subscribe((d) => {
              d.startDate = new Date (d.startDate);
              d.endDate = new Date (d.endDate) ;
              d.closeDate = new Date (d.closeDate);
              this.idCurrentSurvey = d.id ;
              this.isSurvey = true ;
              this.surveyContactDate = this.computeDate(d.endDate) ; 

            })
        }
        else {
          this.isSurvey = false ;
        }
       })
    /*this.surveys = new Array() ;
  this.surveyService.getSurveys() 
  .subscribe( (data) => { 
    
    data.forEach ( (d) => {
      d.startDate = new Date (d.startDate);
      d.endDate = new Date (d.endDate) ;
      d.closeDate = new Date (d.closeDate);
    }) ;
    this.surveys = data ;
    
    for (let test of data) {  
      if (this.isSurveyDate(test.startDate, test.endDate)) {
        this.isSurvey = true ; 
        this.idCurrentSurvey = test.id ;
        this.surveyContactDate = this.computeDate(test.endDate) ;      
      } 
    }
  }); */
  }

  computeDate(EndD : Date) : number {
    let today = new Date();
    var WNbJours = EndD.getTime() - today.getTime();

    return Math.ceil(WNbJours/(1000*60*60*24));
 
  }

  isSurveyDate(startD: Date, EndD : Date) : boolean {

    let response : boolean = false ; 
    let today = new Date();
    var WNbJours = EndD.getTime() - today.getTime();

    if (this.computeDate(EndD) >= 0 ){
      response = true ; 
    }

    
   
    return response ;
  }
  
  negativeFeedBack(id){
    this.hideProperty = true ;
    this.router.navigate(['/negFeedBack', this.idCurrentSurvey]) ;
  }
  
  positiveFeedBack(id) {
    this.hideProperty = true ;
    this.router.navigate(['/posFeedBack', this.idCurrentSurvey] );
  }
  

}
