export class UserModel {
  public name: string; public email: string; public description: string; public phoneNumber: string;


  constructor(name: string, email: string, description: string, phoneNumber: string) {
    this.name = name;
    this.email = email;
    this.description = description;
    this.phoneNumber = phoneNumber;
  }
}
