import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { FeedBack } from '../feed-back';
import { Client } from '../client';
import { NgForm } from '../../../node_modules/@angular/forms';


@Component({
  selector: 'app-positive-feed-back',
  templateUrl: './positive-feed-back.component.html',
  styleUrls: ['./positive-feed-back.component.css']
})
export class PositiveFeedBackComponent implements OnInit {

  disableProperty : boolean = false ; 

  @Input() feedBack : FeedBack ;
  @Input() messageNewClient ;
  @Input() messageExistingClient ; 
  @Input() unknownClient ;  
  @Input() client : Client ; 
  @Output() onFeedBackCreate : EventEmitter<FeedBack>  ; 
  @Output() onClientRead : EventEmitter<Client> ;
  
  constructor() { 
    this.onFeedBackCreate = new EventEmitter() ; 
    this.onClientRead = new EventEmitter () ; 
  }

  ngOnInit() {
   
  }

  submitCreation (form:NgForm) {
    
    this.client.number = this.randomInt() ; 
    this.onFeedBackCreate.emit(this.feedBack) ;
  }

  submitRead(form:NgForm){
     this.onClientRead.emit(this.client) ;
  }

  randomInt():number{
    let min : number = 1000000;
    let max : number = 9999999;
    return (Math.floor(Math.random() * max) + min );
 }

  

}
