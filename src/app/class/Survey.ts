import { FeedBack } from "./FeedBack";

export class Survey{

	id: number;
	closeDate: Date ;
    endDate: Date ;
	startDate: Date;
    listFeedBack: Array<FeedBack>;

    constructor(){}
}