import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  public listaUsuario: [];
  constructor(
    private usuarioServicio: UsuariosService,
    private route: Router
  ) { }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this.usuarioServicio.obtenerUsuarios().subscribe(
      respuesta =>{
        console.log(respuesta)
        this.listaUsuario = respuesta.data
        console.log('qwerty')
        console.log(this.listaUsuario)
      }
    )
  }
  irDetalle(id: number){
    this.route.navigateByUrl('/detalle-usuario/'+id);
  }

}
