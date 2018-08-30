import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UsuarioModel} from '../login/usuario.model';

@Injectable()
export class PeticionesServices {
  public url: string;
  userData = new UsuarioModel('', '');

  constructor( public _http: HttpClient ) {
    this.url = 'localhost:8080';
  }
  authUser(): Observable <any> {
    return this._http.get(this.url + '/');
  }

}
