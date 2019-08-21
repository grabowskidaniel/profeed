export class FeedbackDTO {

    id:number;
    nameFrom : string;
    nameTo : string;
    photoUrlFrom: string;
    photoUrlTo: string;
    text: string;

    constructor(id:number, nameFrom : string, nameTo : string,  photoUrlFrom: string, photoUrlTo: string, text:string){
        this.id = id;
        this.nameFrom = nameFrom;
        this.nameTo = nameTo;
        this.photoUrlFrom = photoUrlFrom;
        this.photoUrlTo = photoUrlTo;
        this.text = text;
    }
}
