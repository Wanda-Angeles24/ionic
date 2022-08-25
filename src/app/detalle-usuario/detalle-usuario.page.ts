import { Usuario } from './../modelos/Usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.page.html',
  styleUrls: ['./detalle-usuario.page.scss'],
})
export class DetalleUsuarioPage implements OnInit {

  public id: number;
  public usuario: Usuario;

  constructor(
    private usuarioServicio: UsuariosService,
    private url: ActivatedRoute
  ) { 
    this.usuario= new Usuario();
  }

  ngOnInit() {
    this.url.params.subscribe(params => {
      this.id = parseInt(params.id);
      this.obtenerUsuario();
    });
  }
  obtenerUsuario(){
    this.usuarioServicio.obtenerUsuario(this.id).subscribe(
      respuesta =>{
        this.usuario = respuesta.data;
      }
    )
  }

}
