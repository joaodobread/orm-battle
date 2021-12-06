export class User {
  constructor(
    readonly name: string,
    readonly id: string,
    readonly email: string,
    readonly password: string,
  ) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.password = this.hashPassword(password);
  }

  hashPassword(plain: string) {
    return `hashed-${plain}`;
  }
}
