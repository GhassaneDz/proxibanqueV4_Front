import { Client } from "./client";
import { Survey } from "./survey";

export class FeedBack {
    id : number ; 
    feedback : boolean ; 
    feedBackText : string ; 
    newClients : boolean ; 
    client : Client ;
    survey : Survey ;
    
    constructor() {
        this.client = new Client() ;
        this.survey = new Survey() ; 
    }
}
