import { Component, OnInit } from '@angular/core';
import {PeticionesServices} from '../services/peticiones.services';
import {Router , ActivatedRoute, Params} from '@angular/router';
import {UsuarioModel} from '../login/usuario.model';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css'],
  providers : [PeticionesServices]
})
export class SalidaComponent implements OnInit {
  public user: UsuarioModel;
  constructor(
    private _peticion: PeticionesServices,
    private _route: ActivatedRoute,
    private _router: Router) {

    console.log(this._peticion.userData);
  }

  ngOnInit() {
    /*this._route.params.subscribe( (params: Params ) => {
      this.param = new UsuarioModel(params.email, params.password);
    });*/
  }

}
