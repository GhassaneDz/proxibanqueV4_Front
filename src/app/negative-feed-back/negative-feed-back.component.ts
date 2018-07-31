import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { FeedBack } from '../feed-back';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-negative-feed-back',
  templateUrl: './negative-feed-back.component.html',
  styleUrls: ['./negative-feed-back.component.css']
})
export class NegativeFeedBackComponent implements OnInit {

  @Input() feedBack : FeedBack ;
  @Output() onFeedBackCreate : EventEmitter<FeedBack>  ; 

  constructor() {
    this.onFeedBackCreate = new EventEmitter() ; 
  }
   

  ngOnInit() {
     
  }

  submit(form:NgForm) {
    this.onFeedBackCreate.emit(this.feedBack) ;
    form.resetForm() ;  
  }

}
