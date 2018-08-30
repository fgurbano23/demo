import {Component, OnInit, Output} from '@angular/core';
import {UsuarioModel} from './usuario.model';
import {PeticionesServices} from '../services/peticiones.services';
import {Router , ActivatedRoute, Params} from '@angular/router';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [PeticionesServices]
})
export class LoginComponent implements OnInit {
  public usuario: UsuarioModel;
  constructor(
    private _peticion: PeticionesServices,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.usuario = new UsuarioModel('', '');
  }
  ngOnInit() {
  }
  onSubmit(formLogin) {
    console.log(this.usuario);
    this._peticion.userData.correo = this.usuario.correo;
    this._peticion.userData.password = this.usuario.password;
    console.log(this._peticion);
    // this._router.navigate(['/out']);
    // this._router.navigate(['/out' + this.usuario.correo + '/' +this.usuario.password]);
    /*this._peticion.authUser().subscribe(
      response => {
        console.log(response.data);
         // this._router.navigate(['/out']);
        },
        error => {
        console.log(error);
      });*/
    // formLogin.form.reset();
  }
}
