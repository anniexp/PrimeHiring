

enum Technolody {

  Javascript = 'Javascript',
  Java = 'Java',
  DotNET = '.Net',
   Flutter = 'Flutter',
    Python = 'Python',
    PHP = 'PHP'

}

export class Developer {
  /*id: number;
  title: string;
  categoryId: number;
  language: string;
  price: number;
  discount: number;
  rating: number;
  isOriginalityCertificateIncluded: boolean;
  posterImgUrl: string;
  publishAt?: Date;
  numberOfPlayers: string;
  timeOfAGameInMinutes: string;
  typeOfGame: string;
  lastUpdated?: Date;
  created?: Date;
  category: Category;*/
  id: number;
  name : string;
  email : string;
  phoneNumber : string;
  location : string;
  posterImgUrl: string;
  pricePerHour: number;
  technology: Technolody;
  description : string;
  yearsOfExperience: number;
  nativeLanguage: string;
  linkedInProfileLink: string;



  constructor() {
    /*this.id = 0;
    this.categoryId = 0;
    this.title = '';
    this.language = '';
    this.price = 0;
    this.discount = 0;
    this.rating = 0;
    this.isOriginalityCertificateIncluded = true;

    this.posterImgUrl = '';
    this.numberOfPlayers = ''
    this.timeOfAGameInMinutes = ''
    this.typeOfGame = ''*/
    this.id = 0;
this.name = '';
this.email = '';
this.phoneNumber = '';
this.location = '';
this.posterImgUrl = '';
this.pricePerHour = 0;
this.technology ;
this.description='';
this.yearsOfExperience = 0;
this.nativeLanguage = '';
this.linkedInProfileLink = '';


  }
}
