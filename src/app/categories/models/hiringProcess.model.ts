import { Developer } from '../../developers/models/developer.model';

export class Hiring {
  id: number;
  startDate: Date;
  endDate: Date;
  developers?: Developer[];
  developersId : number;

constructor (){

this.id = 0;
//this.startDate= new Date();
//this.endDate = new Date();
this.developersId = 0;

}
}