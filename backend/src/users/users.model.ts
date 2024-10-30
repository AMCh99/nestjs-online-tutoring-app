export class User {
  constructor(
    public id: string,
    public userName:string,
    public firstName: string,
    public secondName: string,
    public birthDate: Date,
    public email: string,
    public password: string,
  ) {}
}
