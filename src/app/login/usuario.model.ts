export class UsuarioModel {
  public correo: string;
  public password: string;

  constructor (correo: string, password: string) {
    this.correo = correo;
    this.password = password;
  }
}
