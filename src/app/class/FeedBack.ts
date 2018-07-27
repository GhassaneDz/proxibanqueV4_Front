import { Client } from "./Client";
import { Survey } from "./Survey";

export class FeedBack{

    id: number ;
	feedBack: boolean ;
    feedBackText: string ;
    client: Client;
    survey: Survey;


    constructor(){}
}