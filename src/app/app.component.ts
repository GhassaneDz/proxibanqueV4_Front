import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSurvey = true ; 
  surveyTitle = ' Voudriez-vous adhérer à un service d’assurance automobile Proxibanque ?';
  displayTitle = 'Obtenir un devis d\'assurance auto' ;
  displaySubTitle = 'Simple, rapide et gratuit' ;
}
