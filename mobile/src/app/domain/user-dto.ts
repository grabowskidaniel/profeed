export class UserDTO {
  id: number;
  nome: string;
  photoUrl: string;

  constructor(id: number, nome: string, photoUrl: string) {
    this.id = id;
    this.nome = nome;
    this.photoUrl = photoUrl;
  }
}
