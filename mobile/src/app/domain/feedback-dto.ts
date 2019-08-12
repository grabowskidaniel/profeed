export class FeedbackDTO {

    id:number;
    nameFrom : String;
    nameTo : String;
    photoUrlFrom: String;
    photoUrlTo: String;
    text: String;

    constructor(id:number, nameFrom : String, nameTo : String,  photoUrlFrom: String, photoUrlTo: String, text:String){
        this.id = id;
        this.nameFrom = nameFrom;
        this.nameTo = nameTo;
        this.photoUrlFrom = photoUrlFrom;
        this.photoUrlTo = photoUrlTo;
        this.text = text;
    }
}
