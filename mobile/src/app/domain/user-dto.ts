export class UserDTO {

    id:number;
    nome : String;
    photoUrl: String;

    constructor(id:number, nome : String, photoUrl: String){
        this.id = id;
        this.nome = nome;
        this.photoUrl = photoUrl;
    }

}
