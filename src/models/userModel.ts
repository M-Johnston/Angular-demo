export class UserModel {
  public name: string; public photo: string; public description: string;


  constructor(name: string, photo: string, description: string) {
    this.name = name;
    this.photo = photo;
    this.description = description;
  }
}
